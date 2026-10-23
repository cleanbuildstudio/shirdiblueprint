'use client';

import React, { useState } from 'react';
import { Instrument_Serif } from 'next/font/google';
import { MaskedLineReveal, OpticalDrift } from './TextReveal';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function ContactUS() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Ownership Model',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Villa Ownership',
    'Hospitality Programme',
    'Schedule Site Visit',
    'General Inquiry',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-[#111111] text-white px-4 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-24 md:py-36 z-10 ">
      <div className="max-w-7xl mx-auto">
        {/* Top Eyebrow Metadata Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/15">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />  
            (PROJECT ENQUIRY)
          </div>
          <div className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-white/40">
            SHIRDI CENTRAL · 50 PRIVATE VILLAS
          </div>
        </div>
  
        {/* Main 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 md:pt-16 items-start">
          
          {/* ========================================================
              LEFT COLUMN: Editorial Context & Direct Contact Details
          ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <MaskedLineReveal
                as="h2"
                className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.12]"
                lines={[
                  "Initiate Your",
                  <span key="inquiry" className={`${instrumentSerif.className} italic font-normal text-4xl sm:text-5xl md:text-6xl`}>
                    Sanctuary Inquiry.
                  </span>
                ]}
                stagger={0.08}
              />

              <OpticalDrift delay={0.22}>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mt-6">
                  To explore parcel availability, land ownership, or our fully managed hospitality programme, please provide your details. Our private advisory team reviews each enquiry personally and connects within 24 hours.
                </p>
              </OpticalDrift>
            </div>

            {/* Architectural Visual Preview */}
            

            {/* Direct Contact Ledger */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              {/*   <div className="text-[10px] -[0.2em] uppercase text-white/40 font-mono">
                (DIRECT LEDGER)
              </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block text-[10px] uppercase -wider text-white/40 mb-1">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:office@blueprintshirdi.com"
                    className="text-white hover:text-white/70 transition-colors underline underline-offset-4 -wide"
                  >
                    office@blueprintshirdi.com
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] uppercase -wider text-white/40 mb-1">
                    Direct Concierge
                  </span>
                  <a
                    href="tel:+919699662103"
                    className="text-white hover:text-white/70 transition-colors -wide"
                  >
                    +91 96996 62103
                  </a>
                </div> 
              </div>   */}

              <div className="pt-2">
                <span className="block text-[10px] uppercase -wider text-white/40 mb-1">
                  Site Office
                </span>
                <p className="text-white/70 text-xs font-light">
                  Blueprint Site Office, Shirdi Central, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
  
          {/* ========================================================
              RIGHT COLUMN: Ultra-Minimalistic Modern Form
          ======================================================== */}
          <div className="lg:col-span-7 bg-[#141416]/80 border border-white/10 rounded-[4px] p-5 sm:p-10 md:p-12 ">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto text-white text-xl">
                  ✓
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                  Enquiry Received
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Our private client advisor will reach out to <span className="text-white">{formData.email}</span> shortly.
                </p>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', interest: 'Ownership Model', message: '' });
                    }}
                    className="text-[11px] tracking-[0.2em] uppercase text-white/60 hover:text-white underline underline-offset-4 cursor-pointer transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] tracking-[0.24em] uppercase text-white/40 block mb-6 font-mono">
                    (YOUR PERSONAL DETAILS)
                  </span>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] tracking-[0.14em] uppercase text-white/80 mb-2 font-medium">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Wilson Brock"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/15 rounded-[3px] px-4 py-3 text-white placeholder:text-white/30 text-xs sm:text-sm focus:outline-none focus:border-white focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.14em] uppercase text-white/80 mb-2 font-medium">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/15 rounded-[3px] px-4 py-3 text-white placeholder:text-white/30 text-xs sm:text-sm focus:outline-none focus:border-white focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Area of Interest Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] tracking-[0.14em] uppercase text-white/80 mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/15 rounded-[4px] px-4 py-3 text-white placeholder:text-white/30 text-xs sm:text-sm focus:outline-none focus:border-white focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.14em] uppercase text-white/80 mb-2 font-medium">
                      Inquiry Focus
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-[#18181b] border border-white/15 rounded-[4px] px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-white focus:bg-[#202024] transition-all cursor-pointer"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#18181b] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[11px] tracking-[0.14em] uppercase text-white/80 mb-2 font-medium">
                    Your Message <span className="text-white/40 text-[10px]">(Optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements or preferred villa specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/15 rounded-[4px] px-4 py-3 text-white placeholder:text-white/30 text-xs sm:text-sm focus:outline-none focus:border-white focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                {/* Bottom Controls with Monolog Tactile Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[10px] uppercase tracking-wider text-white/40 font-light">
                    ✦ Confidential & private enquiry
                  </div>

                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-2 sm:gap-3.5 pl-4 sm:pl-6 pr-1 sm:pr-1.5 py-1 sm:py-1.5 rounded-[4px] bg-[#222226] border border-white/20 transition-all duration-300 active:scale-[0.96] cursor-pointer select-none self-start sm:self-auto "
                  >
                    {/* Rolling Text Reel */}
                    <div className="overflow-hidden h-[13px] sm:h-[15px] flex flex-col justify-start">
                      <span className="block text-white text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase font-montserrat leading-[13px] sm:leading-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:-translate-y-full">
                        SEND MESSAGE
                      </span>
                      <span
                        className="block text-white text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase font-montserrat leading-[13px] sm:leading-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.35,1)] group-hover:-translate-y-full select-none"
                        aria-hidden="true"
                      >
                        SEND MESSAGE
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
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
