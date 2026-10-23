'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MaskedLineReveal, OpticalDrift, DigitRoll } from './TextReveal';

export default function AboutOne() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once on scroll
        }
      },
      { threshold: 0.25 } // Triggers when 25% of stats section is in view
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '50', label: 'Private owners' },
    { value: '11', label: 'Acre sanctuary' },
    { value: '5.3', label: 'Acres of landscape' },
    { value: '2.1', label: 'Acre private forest' },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between text-white bg-[#111111] md:bg-transparent px-4 sm:px-10 md:px-14 lg:px-16 py-8 sm:py-16 md:py-20 z-10">
      {/* Top Eyebrow Tag */}
      <div className="w-full mb-2 md:mb-12"></div>

      {/* Main Content Grid: Headline (Left) & Narrative (Right) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start my-auto">
        {/* Left Column: Heading */}
        <div className="lg:col-span-7">
          <MaskedLineReveal
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white space-y-2 sm:space-y-3"
            lines={[
              "Not a hotel room.",
              "Not a holiday apartment.",
              "Your own private villa in Shirdi."
            ]}
            stagger={0.08}
            duration={1.2}
          />
        </div>

        {/* Right Column: Narrative Copy & Animated Button */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-white/80 text-sm sm:text-base leading-relaxed font-light">
          <OpticalDrift delay={0.15}>
            <p>
              For generations, devotees have travelled across continents to Shirdi — checking into a hotel, occupying a temporary room, and eventually leaving.
            </p>
          </OpticalDrift>
          <OpticalDrift delay={0.25}>
            <p>
              What if, after darshan, you returned not to a commercial suite, but to your own home — surrounded by gardens, water, silence and nature?
            </p>
          </OpticalDrift>

          {/* Monolog-Style Animated Button */}
          <div className="pt-4">
            <button
              onClick={() => alert('Exploring villas...')}
              className="group relative inline-flex items-center gap-2 sm:gap-3.5 pl-3.5 sm:pl-5 pr-1 sm:pr-1.5 py-1 sm:py-1.5 rounded-[4px] bg-[#1a1b1e] border border-white/10 transition-all duration-300 active:scale-[0.96] cursor-pointer select-none"
            >
              {/* Rolling Text */}
              <div className="overflow-hidden h-[13px] sm:h-[15px] flex flex-col justify-start">
                <span className="block text-white text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase font-montserrat leading-[13px] sm:leading-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:-translate-y-full">
                  EXPLORE THE VILLAS
                </span>
                <span
                  className="block text-white text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase font-montserrat leading-[13px] sm:leading-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:-translate-y-full select-none"
                  aria-hidden="true"
                >
                  EXPLORE THE VILLAS
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
          BOTTOM STATS GRID WITH ARCHITECTURAL LINE DRAWING
      ======================================================== */}
      <div ref={statsRef} className="relative w-full mt-16 lg:mt-24">
        
        {/* 1. TOP HORIZONTAL BORDER (Draws from center to both edges) */}
        <div
          className={`absolute top-0 left-0 right-0 h-[1px] bg-white/20 origin-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}
        />

        {/* 2. Grid Container */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-end p-4 sm:p-6 md:p-10"
            >
              {/* DESKTOP VERTICAL DIVIDERS (Drop down from top line at delay-500) */}
              {idx < 3 && (
                <div
                  className={`hidden lg:block absolute top-0 bottom-0 right-0 w-[1px] bg-white/15 origin-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 ${
                    isVisible ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />
              )}

              {/* MOBILE VERTICAL DIVIDER (Between Col 1 & Col 2) */}
              {idx % 2 === 0 && (
                <div
                  className={`lg:hidden absolute top-0 bottom-0 right-0 w-[1px] bg-white/15 origin-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 ${
                    isVisible ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />
              )}

              {/* MOBILE HORIZONTAL DIVIDER (Between Row 1 & Row 2) */}
              {idx < 2 && (
                <div
                  className={`lg:hidden absolute bottom-0 left-0 right-0 h-[1px] bg-white/15 origin-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 ${
                    isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              )}

              {/* 3. Stat Content Reveal (Architectural Masked Digit Emergence) */}
              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.35,1)] delay-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="overflow-hidden mb-2 sm:mb-3">
                  <div
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.35,1)]"
                    style={{
                      transform: isVisible ? 'translate3d(0, 0%, 0)' : 'translate3d(0, 115%, 0)',
                      transitionDelay: `${700 + idx * 80}ms`
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs font-montserrat uppercase tracking-[0.14em] sm:tracking-[0.2em] text-white/70">
                  {stat.label}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}