'use client';

import React, { useState } from 'react';

export default function Footer() {
  const [activeHover, setActiveHover] = useState(null);

  const navLinks = [
    { label: 'The Film', href: '#film' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Compare', href: '#compare' },
    { label: 'Blog', href: '#blog' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms & Conditions', href: '#terms' },
  ];

  const scrollToTop = () => {
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#111111] text-white pt-16 sm:pt-20 pb-10 px-4 sm:px-10 md:px-14 lg:px-16 overflow-hidden z-20">
      {/* ─── TOP SECTION: Editorial Grid ─── */}
      <div className="w-full flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 pb-16 border-b border-white/10">
        
        {/* Center Column: Big Interactive Navigation */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
              (Navigation)
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((item, index) => {
                const isHovered = activeHover === index;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onMouseEnter={() => setActiveHover(index)}
                    onMouseLeave={() => setActiveHover(null)}
                    className={`group relative flex items-center justify-between py-2 px-3 sm:px-4 rounded transition-all duration-300 font-medium ${
                      isHovered
                        ? 'bg-white text-black translate-x-2'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span className="text-xl sm:text-2xl uppercase md:text-3xl font-light tracking-tight">
                      {item.label}
                    </span>

                    {/* Interactive Arrow Indicator */}
                    <span
                      className={`text-lg sm:text-xl transition-all duration-300 ${
                        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}
                    >
                      →
                    </span>
                  </a>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Right Column: Project Details, Contact & Socials */}
        <div className="lg:col-span-3 flex flex-col justify-between space-y-10">
          {/* Studio & Inquiries */}
          <div className="space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.08em] text-white/40 block mb-2">
                (Sanctuary Info)
              </span>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                A limited private collection of 50 Balinese villas
                < br />
                 with land ownership in Shirdi Central, Maharashtra.
              </p>
            </div>

            <div className='grid'>
              <span className="text-[11px] uppercase tracking-[0.08em] text-white/40 block mb-2">
                (Inquiries)
              </span>
              <a
                href="#contact"
                className="text-xs sm:text-sm text-white hover:text-white/70 underline underline-offset-4 py-2 tracking-wide transition-colors"
              >
                office@blueprintshirdi.com ↗
                
              </a>
               <a
                href="#contact"
                className="text-xs sm:text-sm text-white hover:text-white/70 underline underline-offset-4 tracking-wide transition-colors"
              >
                +91 96996 62103
                
              </a>
            </div>
          </div>

          {/* Socials & Slogan */}
          <div className="space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 block mb-3">
                (Connect)
              </span>
              <div className="flex flex-col space-y-1.5 text-xs tracking-wider uppercase text-white/80">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center justify-between py-0.5">
                  <span>Instagram</span>
                  <span className="text-white/40">↗</span>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center justify-between py-0.5">
                  <span>YouTube</span>
                  <span className="text-white/40">↗</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center justify-between py-0.5">
                  <span>LinkedIn</span>
                  <span className="text-white/40">↗</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-semibold leading-relaxed">
                Dare the extraordinaire.
                <br />
                Live the spectacle.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ─── MIDDLE SECTION: Notice & Disclaimers ─── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-b border-white/10 text-white/45 text-[11px] leading-relaxed font-light">
        <div>
          <span className="text-white/75 font-medium block mb-1 uppercase tracking-wider text-[10px]">
            Notice
          </span>
          <p>
            All financial illustrations are hypothetical and intended solely to explain the potential economics of different asset classes. Actual property prices, rental rates, occupancy, management fees, taxes, operating expenses, capital appreciation and resale values will vary.
          </p>
        </div>

        <div>
          <span className="text-white/75 font-medium block mb-1 uppercase tracking-wider text-[10px]">
            Disclaimer
          </span>
          <p>
            All renders and images are for illustrative purposes only and may not represent the final product. Designs, finishes, and specifications are subject to change. Please refer to our Terms &amp; Conditions or request a copy for any offer details. The content is for informational purposes only and does not constitute an offer or solicitation.
          </p>
        </div>
      </div>

      {/* ─── BOTTOM BAR: Copyright & Scroll to Top ─── */}
      <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p className="text-center sm:text-left text-[11px] tracking-wide">
          © 2026 Spectacle Realty for Blueprint Shirdi. All Rights Reserved.
        </p>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/60 hover:text-white transition-colors group cursor-pointer"
        >
          <span>Back to Top</span>
          <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-sm transition-all duration-300 group-hover:border-white group-hover:-translate-y-0.5">
            ↑
          </span>
        </button>
      </div>
    </footer>
  );
}