'use client';

import React, { useEffect, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const overlayRef = useRef(null);
  const [isEntering, setIsEntering] = useState(true);

  // 1. Initial Page Load & Route Change: Fade out the overlay
  useEffect(() => {
    const overlay = overlayRef.current || document.getElementById('monologTransitionOverlay');
    if (!overlay) return;

    // Initial entrance fade-out
    setIsEntering(true);
    const enterTimer = setTimeout(() => {
      setIsEntering(false);
      overlay.classList.remove('is-active');
    }, 350);

    // Handle incoming page load with hash (e.g. /#film, /#contact)
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash;
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          if (window.lenis) {
            window.lenis.scrollTo(target, { offset: -20, duration: 1.2 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 400); // Waits for overlay to fade out first
      }
    }

    return () => clearTimeout(enterTimer);
  }, [pathname]);

  // 2. Click Interceptor matching Monolog's logic + Lenis integration
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') return;

      // Check if it's an in-page anchor link (like #process or /#process while on Home)
      const isAnchor = href.includes('#');
      const targetId = isAnchor ? href.split('#')[1] : null;
      const currentPath = window.location.pathname;
      const isHomePage = currentPath === '/' || currentPath === '';
      const isLinkToHomeAnchor = (href.startsWith('/#') || href.startsWith('#')) && isHomePage;

      // IF CLICKING AN ANCHOR ON THE SAME PAGE: DO NOT PLAY TRANSITION!
      if (isLinkToHomeAnchor && targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          if (window.lenis) {
            window.lenis.scrollTo(targetElement, { offset: -20, duration: 1.2 });
          } else {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
          history.pushState(null, '', '#' + targetId);
          return; // Stop here, don't trigger the transition overlay!
        }
      }

      // IF NAVIGATING TO A DIFFERENT PAGE: Play transition
      try {
        const url = new URL(link.href, window.location.origin);
        if (url.origin === window.location.origin && url.pathname !== window.location.pathname) {
          e.preventDefault();
          const overlay = overlayRef.current || document.getElementById('monologTransitionOverlay');
          if (overlay) {
            overlay.classList.add('is-active');
          }

          setTimeout(() => {
            window.location.href = link.href;
          }, 350); // Matches the 0.35s transition
        }
      } catch (err) {
        // Fallback for relative or malformed URLs
      }
    };

    document.addEventListener('click', handleDocumentClick);

    // Also handle popstate (browser back/forward button)
    const handlePopState = () => {
      const overlay = overlayRef.current || document.getElementById('monologTransitionOverlay');
      if (overlay) {
        overlay.classList.remove('is-active');
      }
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div
      id="monologTransitionOverlay"
      ref={overlayRef}
      className={`monolog-transition-overlay ${isEntering ? 'is-entering' : ''}`}
      aria-hidden="true"
    >
      {/* Monolog-Style Hairline Progress Indicator */}
      <div className="monolog-transition-line" />
    </div>
  );
}
