'use client';

import React, { useState, useRef } from 'react';
import { MaskedLineReveal } from './TextReveal';

export default function Spiritual() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const cursorRef = useRef(null);

  // Directly track mouse position without any momentum drift
  const handleMouseMove = (e) => {
    if (!containerRef.current || !cursorRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  };

  const handleMouseEnter = (e) => {
    if (!containerRef.current || !cursorRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Immediately snap to cursor entrance point
    cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Simply fades out right where it is (no sliding away)
    setIsHovered(false);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id='film' className="relative w-full bg-[#111111] text-white px-4 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-20 md:py-28 z-10">
      
      {/* Top Header */}
      <div className="w-full mb-8 sm:mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row items-start sm:items-end justify-between gap-6 md:gap-12">
          <div className="flex-1">
            <MaskedLineReveal  
              as="h2"
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-montserrat"
              lineClassName={(idx) => (idx === 0 ? 'sm:pl-[8%]' : 'pl-0')}
              lines={[
                <span key="l1" className="whitespace-normal sm:whitespace-nowrap">See the sanctuary</span>,
                <span key="l2" className="whitespace-normal sm:whitespace-nowrap">before you arrive.</span>
              ]}
              stagger={0.08}
              duration={1.2}
            />
          </div>
        </div>
      </div>

      {/* 16:9 Video Container */}
      <div
        ref={containerRef}
        onClick={togglePlay}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl group select-none cursor-pointer md:cursor-none"
      >
        <video
          ref={videoRef}
          poster="/below.webp"
          playsInline
          preload="metadata"
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover pointer-events-none"
        >
          <source src="https://blueprintshirdi.com/videos/blueprint-film.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Dark Vignette Tint */}
        <div 
          className={`absolute inset-0 bg-black/20 transition-opacity duration-500 pointer-events-none ${
            isPlaying ? 'opacity-0' : 'opacity-100'
          }`} 
        />

        {/* ========================================================
            DESKTOP: Minimalist Tengile-Style Floating Pill
        ======================================================== */}
        <div
          ref={cursorRef}
          className={`hidden md:block absolute top-0 left-0 pointer-events-none z-30 transition-opacity duration-200 ease-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ willChange: 'transform' }}
        >
          <div className="bg-white text-black text-[12px] font-medium px-3.5 py-1 rounded-[2px] shadow-lg leading-normal whitespace-nowrap">
            {isPlaying ? 'Pause' : 'Play Video'}
          </div>
        </div>

        {/* ========================================================
            MOBILE FALLBACK: Clean Centered Pill (Fades out when playing so video is unobstructed)
        ======================================================== */}
        <div
          className={`flex md:hidden absolute inset-0 items-center justify-center pointer-events-none transition-all duration-300 ${
            isPlaying ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}
        >
          <div className="bg-white text-black text-[12px] font-medium px-4 py-1.5 rounded-[2px] shadow-xl">
            Play Video
          </div>
        </div>

        {/* Bottom-left Time Indicator Tag (Hidden on mobile devices) */}
        <div className="hidden sm:block absolute bottom-6 left-6 text-[11px] sm:text-xs uppercase text-white/80 bg-black/60 px-3.5 py-1.5 rounded-[2px] border border-white/10 backdrop-blur-md pointer-events-none">
          Watch the film · 2:45
        </div>
      </div>

      {/* Narrative Description below video */}
      <div 
        className="mt-4 sm:mt-6 max-w-md ml-auto text-left text-white/70 text-sm sm:text-base leading-relaxed indent-0 sm:indent-[8%]"
      >
        <p>
          A short film on the land, the masterplan <br />and the life waiting inside Shirdi Central.
        </p>
      </div>

    </section>
  );
}