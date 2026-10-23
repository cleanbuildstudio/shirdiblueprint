'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element scrolls into view
 * @param {Object} options IntersectionObserver options
 * @param {boolean} triggerOnce Whether the animation should trigger only once
 */
export function useInView(options = {}, triggerOnce = true) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, {
      threshold: options.threshold ?? 0.15,
      rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
      ...options,
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, triggerOnce]);

  return [ref, isInView];
}

/**
 * Architectural Masked Line Reveal (Monolog & OH Architecture Signature)
 * Wraps each line in an overflow-hidden mask.
 * Words emerge from below the baseline using cubic-bezier(0.16, 1, 0.35, 1).
 */
export function MaskedLineReveal({
  lines,
  children,
  as: Component = 'div',
  className = '',
  lineClassName = '',
  delay = 0,
  stagger = 0.075,
  duration = 1.15,
  threshold = 0.12,
  rootMargin = '0px 0px -8% 0px',
  once = true,
  ...props
}) {
  const [ref, isInView] = useInView({ threshold, rootMargin }, once);

  // Normalize lines from array or children string
  let lineArray = [];
  if (Array.isArray(lines)) {
    lineArray = lines;
  } else if (typeof children === 'string') {
    lineArray = children.split('\n').filter(Boolean);
  } else if (children) {
    lineArray = [children];
  }

  return (
    <Component ref={ref} className={`${className}`} {...props}>
      {lineArray.map((line, index) => {
        const itemDelay = delay + index * stagger;
        const extraClass = typeof lineClassName === 'function' ? lineClassName(index) : lineClassName;
        return (
          <span
            key={index}
            className={`block overflow-hidden pb-[0.08em] ${extraClass}`}
            style={{ display: 'block' }}
          >
            <span
              className="block will-change-transform backface-hidden"
              style={{
                transform: isInView
                  ? 'translate3d(0, 0%, 0) rotate(0.001deg)'
                  : 'translate3d(0, 115%, 0) rotate(0.001deg)',
                opacity: isInView ? 1 : 0.01,
                transition: `transform ${duration}s cubic-bezier(0.16, 1, 0.35, 1) ${itemDelay}s, opacity ${duration * 0.75}s cubic-bezier(0.16, 1, 0.35, 1) ${itemDelay}s`,
              }}
            >
              {line}
            </span>
          </span>
        );
      })}
    </Component>
  );
}

/**
 * Ambient Optical De-Blur & Soft Drift
 * Best suited for narrative paragraphs, intros, and editorial copy.
 * Gently lifts the text while clearing an optical lens blur.
 */
export function OpticalDrift({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  duration = 1.1,
  yOffset = 18,
  blurAmount = 8,
  threshold = 0.1,
  once = true,
  ...props
}) {
  const [ref, isInView] = useInView({ threshold }, once);

  return (
    <Component
      ref={ref}
      className={`will-change-[transform,opacity,filter] ${className}`}
      style={{
        transform: isInView ? 'translate3d(0, 0px, 0)' : `translate3d(0, ${yOffset}px, 0)`,
        opacity: isInView ? 1 : 0,
        filter: isInView ? 'blur(0px)' : `blur(${blurAmount}px)`,
        transition: `transform ${duration}s cubic-bezier(0.16, 1, 0.35, 1) ${delay}s, opacity ${duration * 0.9}s cubic-bezier(0.16, 1, 0.35, 1) ${delay}s, filter ${duration}s cubic-bezier(0.16, 1, 0.35, 1) ${delay}s`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Kinetic Skew Reveal
 * Words or headlines that emerge from a mask with a micro-tilt (skewY).
 */
export function KineticSkewReveal({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  duration = 1.2,
  skewDeg = 3,
  threshold = 0.12,
  once = true,
  ...props
}) {
  const [ref, isInView] = useInView({ threshold }, once);

  return (
    <Component ref={ref} className={`overflow-hidden block ${className}`} {...props}>
      <span
        className="block will-change-transform backface-hidden"
        style={{
          transform: isInView
            ? 'translate3d(0, 0%, 0) skewY(0deg)'
            : `translate3d(0, 115%, 0) skewY(${skewDeg}deg)`,
          opacity: isInView ? 1 : 0.05,
          transition: `transform ${duration}s cubic-bezier(0.16, 1, 0.35, 1) ${delay}s, opacity ${duration * 0.8}s cubic-bezier(0.16, 1, 0.35, 1) ${delay}s`,
        }}
      >
        {children}
      </span>
    </Component>
  );
}

/**
 * Digit Roll / Counter Reveal
 * For architectural stats and project metrics (e.g. 50, 11, 01, 02).
 */
export function DigitRoll({
  value,
  children,
  className = '',
  delay = 0,
  duration = 1.05,
  once = true,
}) {
  const [ref, isInView] = useInView({ threshold: 0.15 }, once);
  const content = value ?? children;

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <span
        className="inline-block will-change-transform backface-hidden"
        style={{
          transform: isInView ? 'translate3d(0, 0%, 0)' : 'translate3d(0, 115%, 0)',
          opacity: isInView ? 1 : 0,
          transition: `transform ${duration}s cubic-bezier(0.16, 1, 0.35, 1) ${delay}s, opacity ${duration * 0.75}s cubic-bezier(0.16, 1, 0.35, 1) ${delay}s`,
        }}
      >
        {content}
      </span>
    </span>
  );
}
