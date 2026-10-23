'use client';

import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-10 md:px-14 py-4 sm:py-6 md:py-8 flex items-center justify-between pointer-events-auto">
        {/* Left: Brand Logo with BlueprintLogo.png */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer">
          <img
            src="/BlueprintLogo.png"
            alt="Blueprint Shirdi Logo"
            className="w-7 h-7 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-white text-[12px] sm:text-[14px] md:text-[15px] font-medium tracking-[0.14em] uppercase select-none whitespace-nowrap">
            BLUEPRINT SHIRDI
          </span>
        </div>

        {/* Right: Navigation Links & Animated 2-Line Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <a
            href="#blog"
            className="forma-nav-link hidden sm:inline-flex"
          >
            BLOG
          </a>

          <a
            href="#contact"
            className="forma-nav-link hidden sm:inline-flex"
          >
            CONTACT US
          </a>

          {/* Animated 2-Line Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center gap-[5px] sm:gap-[6px] p-2 ml-1 cursor-pointer focus:outline-none group"
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`w-7 sm:w-10 h-[2.5px] sm:h-[3.5px] bg-white transition-all duration-300 ease-out origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-[3.75px] sm:translate-y-[4.75px]' : 'group-hover:opacity-80'
              }`}
            />
            <span
              className={`w-7 sm:w-10 h-[2.5px] sm:h-[3.5px] bg-white transition-all duration-300 ease-out origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-[3.75px] sm:-translate-y-[4.75px]' : 'group-hover:opacity-80'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Slide-out Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col justify-between p-8 sm:p-12 animate-in fade-in duration-300">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="/BlueprintLogo.png"
                alt="Blueprint Shirdi Logo"
                className="w-7 h-7 object-contain"
              />
              <span className="text-white text-sm uppercase">
                BLUEPRINT SHIRDI
              </span>
            </div>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-2 text-2xl cursor-pointer hover:text-white/70"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-6 py-12">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl sm:text-5xl font-bebas uppercase tracking-wider text-white hover:text-white/70 transition-colors"
            >
              Home
            </a>
            <a
              href="#blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl sm:text-5xl font-bebas uppercase tracking-wider text-white hover:text-white/70 transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl sm:text-5xl font-bebas uppercase tracking-wider text-white hover:text-white/70 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="text-white/50 text-xs sm:text-sm tracking-widest uppercase">
            Private Balinese Villas · Shirdi Central
          </div>
        </div>
      )}
    </>
  );
}
