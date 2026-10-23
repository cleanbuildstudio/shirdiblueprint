'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Instrument_Serif } from "next/font/google";
import { MaskedLineReveal, OpticalDrift } from './TextReveal';

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
});

export default function EditorialScrollSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [imageProgress, setImageProgress] = useState(0);

  const containerRef = useRef(null);
  const ownershipRef = useRef(null);
  const hospitalityRef = useRef(null);

  // Scroll-driven progress calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;

      if (totalHeight > 0) {
        // Percentage scrolled through this entire container (0% -> 100%)
        const progress = Math.min(Math.max((-rect.top / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }

      // Smooth scroll-bound curtain transition for the images
      if (hospitalityRef.current) {
        const hospTop = hospitalityRef.current.getBoundingClientRect().top;
        const startY = window.innerHeight * 0.90;
        const endY = window.innerHeight * 0.25;
        const rawProgress = (startY - hospTop) / (startY - endY);
        const imgProgress = Math.min(Math.max(rawProgress * 100, 0), 100);
        setImageProgress(imgProgress);

        if (imgProgress >= 50) {
          setActiveSection(1);
        } else {
          setActiveSection(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const headerOffset = 120;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + (window.scrollY || window.pageYOffset) - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={containerRef} className="relative w-full bg-[#111111] text-white px-4 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-20 md:py-32 z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

           <div className="lg:col-span-8 flex flex-col">

            {/* SECTION 01: OWNERSHIP */}
            <div ref={ownershipRef} className="flex flex-col justify-between pt-1">
              <div>
                <div className="lg:hidden text-[10px] tracking-[0.24em] uppercase text-white/50 mb-3 ">
                  (01 · OWNERSHIP)
                </div>
                <MaskedLineReveal
                  as="h2"
                  className={`${instrumentSerif.className} text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-normal text-white leading-[1.1] tracking-normal`}
                  lines={[
                    "You own the land beneath you.",
                    "You own a private villa upon it."
                  ]}
                  stagger={0.08}
                />

                <OpticalDrift delay={0.2}>
                  <p className="text-[11px] sm:text-xs tracking-[0.005em] uppercase text-white/70 mt-4 leading-relaxed">
                    THIS IS PRIVATE OWNERSHIP WITH THE INTELLIGENCE OF HOSPITALITY.
                  </p>
                </OpticalDrift>
              </div>

              <div className="w-full border-b border-white/15 my-7" />

              <div className="space-y-5">
                <p className="text-white/70 text-sm sm:text-base font-light">
                  Here, you do not merely reserve accommodation.
                </p>

                <div className={`${instrumentSerif.className} text-2xl sm:text-[3.5rem] font-light text-white leading-tight`}>
                  Evolution of  <br />
                  Spiritual travel
                </div>

                <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed">
                  Wake beneath tropical gardens. Host your family without adjoining rooms and corridors. Meditate in your own landscape. Return from the temple to a residence that is unmistakably yours.
                </p>
              </div>

              <div className="pt-8 sm:pt-10">
                <button
                  onClick={() => alert('Discovering Ownership Model...')}
                  className="group relative inline-flex items-center gap-2 sm:gap-3.5 pl-3.5 sm:pl-5 pr-1 sm:pr-1.5 py-1 sm:py-1.5 rounded-[4px] bg-[#1a1b1e] border border-white/10 transition-all duration-300 active:scale-[0.96] cursor-pointer select-none"
                >
                  {/* Rolling Text Reel */}
                  <div className="overflow-hidden h-[13px] sm:h-[15px] flex flex-col justify-start">
                    <span className="block text-white text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase font-montserrat leading-[13px] sm:leading-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:-translate-y-full">
                      DISCOVER THE OWNERSHIP MODEL
                    </span>
                    <span
                      className="block text-white text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase font-montserrat leading-[13px] sm:leading-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:-translate-y-full select-none"
                      aria-hidden="true"
                    >
                      DISCOVER THE OWNERSHIP MODEL
                    </span>
                  </div>

                  {/* Aside Square Badge */}
                  <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-[3px] sm:rounded-[4px] bg-[#525151] flex items-center justify-center overflow-hidden transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:scale-[0.88]">
                    {/* Primary Arrow */}
                    <svg
                      className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white absolute transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="2.5" y1="9.5" x2="9.5" y2="2.5" />
                      <polyline points="4.5 2.5 9.5 2.5 9.5 7.5" />
                    </svg>

                    {/* Secondary Arrow */}
                    <svg
                      className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white absolute -translate-x-8 translate-y-8 opacity-0 transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="2.5" y1="9.5" x2="9.5" y2="2.5" />
                      <polyline points="4.5 2.5 9.5 2.5 9.5 7.5" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Subtle Chapter Transition Divider */}
            <div className="w-full border-b border-white/0 my-20 sm:my-28" />

            {/* SECTION 02: HOSPITALITY */}
            <div ref={hospitalityRef} className="flex flex-col justify-between">
              <div>
                <div className="lg:hidden text-[10px] tracking-[0.24em] uppercase text-white/50 mb-3 ">
                  (02 · HOSPITALITY)
                </div>
                <OpticalDrift delay={0.1}>
                  <p className="text-[11px] sm:text-xs tracking-[0.02em] uppercase text-white/70 mb-3">
                    WHEN YOU ARE AWAY, IT MAY CONTINUE TO WORK.
                  </p>
                </OpticalDrift>
                <MaskedLineReveal
                  as="h2"
                  className="text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-[1.15]"
                  lines={["The Smartest Asset."]}
                />
              </div>

              <div className="w-full border-b border-white/15 my-6" />

              <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed mb-6">
                Through professional hospitality management, eligible residences may be offered to carefully selected guests when owners are not using them, subject to the project&apos;s operating programme.
              </p>

              {/* 8 Hospitality Management Services Grid */}
              <div className="mb-6">
                <div className="text-[11px] uppercase tracking-wider text-white/50 mb-3">
                  The hospitality team manages:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 text-xs sm:text-sm text-white/80 font-light">
                  <div>— Guest reservations & check-ins</div>
                  <div>— Housekeeping & maintenance</div>
                  <div>— Property inspections</div>
                  <div>— Linen & villa readiness</div>
                  <div>— Concierge coordination</div>
                  <div>— Digital booking visibility</div>
                  <div>— Guest experience standards</div>
                  <div>— Revenue administration</div>
                </div>
              </div>

              {/* Complimentary Car Perk Box */}
              <div className="p-4 rounded border border-white/10 bg-white/5 text-xs sm:text-sm text-white/85 font-light leading-relaxed mb-6">
                ✦ Every Blueprint Shirdi villa comes with a private complimentary car for your temple pick and drop.
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => alert('Opening Programme Inquiry...')}
                  className="group relative inline-flex items-center gap-2 sm:gap-3.5 pl-3.5 sm:pl-5 pr-1 sm:pr-1.5 py-1 sm:py-1.5 rounded-[4px] bg-[#1a1b1e] border border-white/10 transition-all duration-300 active:scale-[0.96] cursor-pointer select-none"
                >
                  {/* Rolling Text Reel */}
                  <div className="overflow-hidden h-[13px] sm:h-[15px] flex flex-col justify-start">
                    <span className="block text-white text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase font-montserrat leading-[13px] sm:leading-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:-translate-y-full">
                      ASK ABOUT THE PROGRAMME
                    </span>
                    <span
                      className="block text-white text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase font-montserrat leading-[13px] sm:leading-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:-translate-y-full select-none"
                      aria-hidden="true"
                    >
                      ASK ABOUT THE PROGRAMME
                    </span>
                  </div>

                  {/* Aside Square Badge */}
                  <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-[3px] sm:rounded-[4px] bg-[#525151] flex items-center justify-center overflow-hidden transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:scale-[0.88]">
                    {/* Primary Arrow */}
                    <svg
                      className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white absolute transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="2.5" y1="9.5" x2="9.5" y2="2.5" />
                      <polyline points="4.5 2.5 9.5 2.5 9.5 7.5" />
                    </svg>

                    {/* Secondary Arrow */}
                    <svg
                      className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white absolute -translate-x-8 translate-y-8 opacity-0 transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="2.5" y1="9.5" x2="9.5" y2="2.5" />
                      <polyline points="4.5 2.5 9.5 2.5 9.5 7.5" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

          </div>


          {/* ========================================================
              RIGHT COLUMN: EDITORIAL CONTENT & DESKTOP PROGRESS (HIDDEN ON MOBILE)
          ======================================================== */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <div
              className="sticky top-28 xl:top-36 z-20 flex flex-col gap-3"
            >
              {/* Desktop Vertical Progress Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  {/* Vertical Progress Rail */}
                  <div className="w-[2px] h-6 bg-white/20 rounded-full overflow-hidden relative">
                    <div
                      className="w-full bg-white transition-all duration-150 ease-out origin-top"
                      style={{ height: `${scrollProgress}%` }}
                    />
                  </div>
                  <span className="font-semibold text-xs uppercase text-white">
                    {activeSection === 0 ? 'OWNERSHIP' : 'HOSPITALITY'}
                  </span>
                </div>
                <span className="text-[11px] text-white/50 ">
                  0{activeSection + 1} / 02
                </span>
              </div>

              {/* Scroll Transition Image Container */}
              <div
                onClick={() => scrollToSection(activeSection === 0 ? hospitalityRef : ownershipRef)}
                className="relative w-full h-[58vh] aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-neutral-900 shadow-2xl group mt-1 cursor-pointer select-none"
                title="Click to jump section"
              >
                {/* Image 1: Section 01 - Ownership (Base layer) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src="/about.webp"
                    alt="Blueprint Shirdi Villa"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Image 2: Section 02 - Hospitality (Curtain wipe rises from bottom in sync with scroll) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                  style={{
                    clipPath: `inset(${100 - imageProgress}% 0 0 0)`,
                    WebkitClipPath: `inset(${100 - imageProgress}% 0 0 0)`,
                    willChange: 'clip-path',
                  }}
                >
                  <img
                    src="/blog-4.webp"
                    alt="Luxury Suite Hospitality"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            </div>
          </div>

         
         
        </div>
      </div>
    </section>
  );
}
