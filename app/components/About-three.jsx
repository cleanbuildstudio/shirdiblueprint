'use client';

import React from 'react';
import { MaskedLineReveal, OpticalDrift, DigitRoll } from './TextReveal';

const menuItems = [
  { id: '01', label: 'Home to the eternal presence of Sai Baba',
     desc:'Attracting millions of devotees annually.'
     },
  { id: '02', label: 'Peaceful, purposeful living',
    desc:"Ideal for professionals seeking a balanced, mindful lifestyle."
   },
  { id: '03', label: 'Strong footfall = strong opportunity',
    desc:"High pilgrimage tourism supports hospitality, wellness, and retail sectors."
   },
  { id: '04', label: 'Spiritual capital with global recognition',
    desc:"A unique identity unlike any other Indian city."
   },
];

const stats = [
  {
    number: '1.5–2',
    unit: 'Cr',
    label: 'Devotees every year',
  },
  {
    number: '900',
    unit: 'Cr',
    label: 'Annual economy',
  },

];

export default function AboutThree() {
  return (
    <section className="relative bg-[#111111] w-full text-white px-4 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-20 md:py-32 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* =========================================
              LEFT COLUMN: Square Image + Numbered Menu
          ========================================= */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Square Pool Image */}
            <div className="relative w-full aspect-square overflow-hidden bg-neutral-900 border border-white/10 group shadow-2xl">
              <img
                src="/hero-bg.png"
                alt="Blueprint Shirdi Reflection Pool"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Architectural Numbered Menu */}
            <div className="mt-8 sm:mt-10  border-white/15">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className=" items-center justify-between py-4 sm:py-4.5 border-b border-white/15 group cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-xs font-bold uppercase">
                      {item.label}
                    </span>
                  </div>
                   <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-[12px] ">
                      {item.desc}
                    </span>
                  </div>                  
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: Heading, Narrative, CTA & Stats
          ========================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-2 lg:pt-4">
            
            {/* Top Heading */}
            <div>
              <MaskedLineReveal
                as="h2"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-[1.08] tracking-normal"
                lines={[
                  "Where Spiritual Legacy,",
                  "Meets Strategic Living."
                ]}
                stagger={0.08}
              />

              <OpticalDrift delay={0.25}>
                <p className="text-[10px] sm:text-xs tracking-[0.05em] font-semibold uppercase text-white/80 mt-5 sm:mt-6 ">
                  Live. Invest. Belong.
                </p>
              </OpticalDrift>
            </div>

            {/* Horizontal Line Divider */}
            <div className="w-full border-b border-white/15 my-4 sm:my-4" />

            {/* Narrative Story */}
            <div className="space-y-6">
              <OpticalDrift delay={0.2}>
                <p className="text-white/70 text-sm sm:text-[15px] font-light indent-0 sm:indent-8">
                  In Shirdi, ancient devotion and modern opportunity walk hand in hand.
                  For professionals and investors seeking a life or venture rooted in meaning yet supported by infrastructure,
                  Shirdi is emerging as one of India’s most unique lifestyle and growth destinations.
                  Welcome to the crown jewel of the city — command from its most valuable street — insulated by design,
                  surrounded by commercial on all sides, yet hidden in plain sight.
                </p>
              </OpticalDrift>

              <OpticalDrift delay={0.3}>
                <div className="text-xs sm:text-sm md:text-base font-light text-white leading-snug">
                  We’re at ease — our offerings speak for themselves.
                </div>
              </OpticalDrift>

              <OpticalDrift delay={0.35}>
                <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                  Shirdi possesses one of India’s most enduring spiritual travel economies.
                  Its hospitality landscape is extensive—but overwhelmingly designed around conventional hotel rooms, commercial suites, lodges and short-stay accommodation.
                  Premium travellers already pay for comfort, convenience and proximity.
                </p>
              </OpticalDrift>
            </div>

            

            {/* Bottom 3-Column Stats Grid with Vertical Dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 text-left sm:text-end pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-white/15">
              {stats.map((stat, idx) => (
                <div key={idx} className={`${idx === 0 ? 'sm:pr-6' : idx === 1 ? 'sm:px-6' : 'sm:pl-6'} py-4 sm:py-0 first:pt-0 last:pb-0`}>
                  <div className="text-4xl sm:text-5xl font-serif font-black text-white tracking-tight">
                    <DigitRoll delay={idx * 0.12}>
                      {stat.number}
                    </DigitRoll>
                    <span className='font-normal'> Cr</span>
                  </div>
                  
                  <div className="text-xs sm:text-xs md:text-sm text-white/75 mt-1 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}