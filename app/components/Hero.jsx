'use client';

import React, { useState } from 'react';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full h-[65svh] sm:h-[75vh] md:h-[100dvh] min-h-[440px] md:min-h-[650px] overflow-hidden text-white flex flex-col justify-end select-none bg-transparent">
      {/* Middle & Lower Section */}
      <div className="relative z-10 w-full flex flex-col justify-end">
        {/* Row with Title/Copy on Left, CTA Button on Right (space-between) */}
        <div className="w-full px-4 sm:px-10 md:px-14 lg:px-16 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-3 sm:mb-4 md:mb-6">
          
          {/* Left: Text Block matching Image */}
          <div className="flex flex-col max-w-xl text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight">
              Your Villa. Your Land.
            </h2>
            <p className="text-xs sm:text-base font-normal text-white/80 mt-1 sm:mt-1.5 leading-relaxed">
              A limited private collection of Balinese villas in Shirdi Central.
            </p>
          </div>

          {/* Right: Monolog-Style "REQUEST AN INVITATION" Animated Button */}
          <div className="flex-shrink-0 self-start md:self-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center gap-2 sm:gap-3.5 pl-3.5 sm:pl-5 pr-1 sm:pr-1.5 py-1 sm:py-1.5 rounded-[4px] bg-[#1a1b1e] border border-white/10 transition-all duration-300 active:scale-[0.96] cursor-pointer select-none"
            >
              {/* Rolling Text */}
              <div className="overflow-hidden h-[13px] sm:h-[15px] flex flex-col justify-start">
                <span className="block text-white text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase font-montserrat leading-[13px] sm:leading-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:-translate-y-full">
                  REQUEST AN INVITATION
                </span>
                <span
                  className="block text-white text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase font-montserrat leading-[13px] sm:leading-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:-translate-y-full select-none"
                  aria-hidden="true"
                >
                  REQUEST AN INVITATION
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

        {/* Giant Bottom Headline: "BLUEPRINT SHIRDI" (Figma Design Asset) */}
        <div className="w-full flex justify-center p-6 sm:px-4 md:px-6 pointer-events-none select-none">
          <h1 className="w-full flex justify-center items-end">
            <img
              src="/shirditext.png"
              alt="BLUEPRINT SHIRDI"
              className="w-full max-w-full h-auto object-contain pointer-events-none select-none opacity-85 brightness-90 drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
              style={{ filter: 'brightness(0.88) contrast(0.96)' }}
            />
          </h1>
        </div>
      </div>

      {/* Request An Invitation Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#121212] border border-white/20 rounded-xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-xl cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <h3 className="font-bebas text-3xl text-white tracking-wide uppercase mb-2">
              Request An Invitation
            </h3>
            <p className="text-white/70 text-xs sm:text-sm font-montserrat mb-6">
              Experience the limited private collection of 50 Balinese villas in Shirdi Central.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for requesting an invitation! Our team will contact you shortly.');
                setIsModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-white/80 text-xs tracking-wider uppercase mb-1.5 font-montserrat">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-white/5 border border-white/20 rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/80 text-xs tracking-wider uppercase mb-1.5 font-montserrat">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/20 rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/80 text-xs tracking-wider uppercase mb-1.5 font-montserrat">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/20 rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-white hover:bg-neutral-200 text-black font-semibold text-xs uppercase tracking-[0.2em] py-3 rounded-md transition-colors cursor-pointer"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}