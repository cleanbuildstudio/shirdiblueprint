'use client';

import React, { useState } from 'react';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const connectivityPoints = [
  {
    id: '01',
    name: 'Shri Sai Baba Temple',
    time: '5 Mins',
    dist: '1.8 km',
    desc: 'Direct VIP access route',
  },
  {
    id: '02',
    name: 'Sainagar Railway Station',
    time: '5 Mins',
    dist: '2.4 km',
    desc: 'Vande Bharat express terminus',
  },
  {
    id: '03',
    name: 'Shirdi Central Bus Terminal',
    time: '7 Mins',
    dist: '2.9 km',
    desc: 'Inter-city arterial hub',
  },
  {
    id: '04',
    name: 'Shirdi International Airport',
    time: '20 Mins',
    dist: '14.2 km',
    desc: 'Direct metro flights to major metros',
  },
];

const investmentHighlights = [
  {
    metric: '+67%',
    unit: 'YoY Growth',
    title: 'Rising Land Value',
    description:
      'Shirdi has seen a staggering 67% YoY increase in land values, driven by Samruddhi Mahamarg connectivity and airport expansion.',
  },
  {
    metric: '1.8 Cr+',
    unit: 'Annual Pilgrims',
    title: 'Enduring Tourism Economy',
    description:
      'A powerful, pilgrimage-driven economy guarantees non-cyclical, year-round demand for high-end hospitality accommodations.',
  },
];

export default function Location() {
  const [activeCard, setActiveCard] = useState(null);

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=QFGP%2BF6Q%2C+Rui+Shiv+Rd%2C+Nighoj%2C+Maharashtra+423109';

  return (
    <section id="location" className="relative w-full bg-[#111111] text-white px-4 sm:px-10 md:px-14 lg:px-16 py-20 sm:py-28 md:py-36 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Eyebrow Metadata Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/15">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            (SANCTUARY SETTING & ACCESS)
          </div>
          <div className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-white/40 font-mono">
            19°45&apos;42.1&quot;N · 74°28&apos;33.6&quot;E
          </div>
        </div>

        {/* Section Headline & Narrative */}
        <div className="pt-10 md:pt-14 pb-12 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]">
              A Location of <br />
              <span className={`${instrumentSerif.className} italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
                Divinity &amp; Growth.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-white/70 text-xs sm:text-sm md:text-[15px] font-light leading-relaxed">
              Set on the most valuable street in Shirdi Central — surrounded by commercial on all sides, yet hidden in plain sight — with the temple, railway station and airport close at hand.
            </p>
          </div>
        </div>

        {/* Main 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ========================================================
              LEFT COLUMN: Architectural Dark Map & Directions Card
          ======================================================== */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Map Frame with Architectural Glass Header */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[4px] overflow-hidden border border-white/15 bg-neutral-950 group shadow-2xl">
              
              {/* Customized Minimalist Dark Inverted Map */}
              <iframe
                title="Blueprint Shirdi Location Map"
                src="https://maps.google.com/maps?q=19.761694,74.475999&t=m&z=14&output=embed&iwloc=near"
                className="w-full h-full border-0 pointer-events-auto filter grayscale-[100%] invert-[92%] contrast-[85%] hue-rotate-[180deg] opacity-80 group-hover:opacity-95 transition-opacity duration-700"
                loading="lazy"
              />

              {/* Top Glass Location Pin Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="bg-black/75 backdrop-blur-md border border-white/20 rounded-[3px] px-3 py-1.5 text-[10px] tracking-wider uppercase text-white flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-medium">Blueprint Shirdi · Site</span>
                </div>
                <div className="hidden sm:block bg-black/60 backdrop-blur-md border border-white/10 rounded-[3px] px-2.5 py-1.5 text-[10px] tracking-widest text-white/70 font-mono">
                  RUI SHIV RD
                </div>
              </div>

              {/* Bottom Subtle Overlay Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>

            {/* Address Ledger & CTA Bar */}
            <div className="p-5 sm:p-6 rounded-[4px] border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                  (COORDINATES &amp; ADDRESS)
                </div>
                <div className="text-xs sm:text-sm text-white/90 font-light">
                  Blueprint Shirdi, Rui Shiv Road, Nighoj, Shirdi Central, Maharashtra 423109
                </div>
              </div>

              {/* Monolog Tactile "OPEN IN MAPS" Button */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 pl-4 pr-1.5 py-1.5 rounded-[4px] bg-[#1a1b1e] border border-white/15 transition-all duration-300 active:scale-[0.96] cursor-pointer select-none self-start sm:self-auto shrink-0"
              >
                {/* Rolling Text */}
                <div className="overflow-hidden h-[13px] sm:h-[15px] flex flex-col justify-start">
                  <span className="block text-white text-[10px] sm:text-xs font-semibold tracking-[0.14em] uppercase font-montserrat leading-[13px] sm:leading-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:-translate-y-full">
                    OPEN IN MAPS
                  </span>
                  <span
                    className="block text-white text-[10px] sm:text-xs font-semibold tracking-[0.14em] uppercase font-montserrat leading-[13px] sm:leading-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:-translate-y-full select-none"
                    aria-hidden="true"
                  >
                    OPEN IN MAPS
                  </span>
                </div>

                {/* Aside Square Badge */}
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-[3px] bg-[#525151] flex items-center justify-center overflow-hidden transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:scale-[0.88]">
                  <svg
                    className="w-3 h-3 text-white absolute transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0"
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
                  <svg
                    className="w-3 h-3 text-white absolute -translate-x-8 translate-y-8 opacity-0 transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
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
              </a>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Connectivity Ledger & Investment Drivers
          ======================================================== */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            
            {/* 1. Key Connectivity Grid */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-mono">
                  (KEY CONNECTIVITY · TRANSIT RADIALS)
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  ESTIMATED DRIVE TIME
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {connectivityPoints.map((point, index) => (
                  <div
                    key={point.id}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                    className="relative p-5 rounded-[4px] border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/25 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-mono text-white/40 group-hover:text-white/70 transition-colors">
                        ({point.id})
                      </span>
                      <span className="text-[10px] font-mono text-white/50 tracking-wider">
                        {point.dist}
                      </span>
                    </div>

                    <div className="my-4">
                      <div className="text-2xl sm:text-3xl font-normal font-sans tracking-tight text-white group-hover:translate-x-0.5 transition-transform">
                        {point.time}
                      </div>
                      <div className="text-xs sm:text-sm font-light text-white/85 mt-1">
                        {point.name}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5 text-[10px] text-white/45 tracking-wider uppercase font-mono">
                      {point.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Investment Potential Ledger */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-mono">
                  (STRATEGIC VALUE · CATALYSTS)
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  SHIRDI REGION
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {investmentHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-[4px] border border-white/10 bg-white/[0.02] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className={`${instrumentSerif.className} text-3xl sm:text-4xl text-white font-normal`}>
                          {item.metric}
                        </span>
                        <span className="text-[10px] tracking-wider uppercase text-white/50 font-mono">
                          {item.unit}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-medium tracking-wide uppercase text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/70 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Temple Privilege Perk Banner */}
            <div className="p-4 rounded-[4px] border border-white/10 bg-white/[0.03] text-xs text-white/85 font-light leading-relaxed flex items-center gap-3">
              <span className="text-white/60 text-sm">✦</span>
              <span>
                Every Blueprint Shirdi residence includes a private on-call luxury car for temple darshan pick-and-drop.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
