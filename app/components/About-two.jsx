'use client';

import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: '01',
    title: 'SANCTUARY VILLAS',
    image: '/below.webp',
    aspect: 'aspect-[4/3]',
  },
  {
    id: '02',
    title: 'THE BADMINTON COURT',
    image: '/badminton.png',
    aspect: 'aspect-[3/4]',
  },
 // {
 //   id: '03',
  //   title: 'BALINESE PAVILION',
   //  year: '2025',
   //  image: '/lush-green-spaces.webp',
  //   aspect: 'aspect-[4/3]',
  // },
  // {
   //  id: '04',
   //  title: 'CENTRAL AVENUE',
   //  year: '2025',
   //  image: '',
   //  aspect: 'aspect-[3/4]',
  // },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#111111] text-white px-4 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-24 md:py-32 z-10">
      {/* Section Header */}
      
      {/* Side-by-Side Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-20 lg:gap-y-28">
        {projects.map((item, index) => (
          <div
            key={item.id}
            className={`group flex flex-col cursor-pointer ${
              index % 2 === 1 ? 'md:translate-y-16' : ''
            }`}
          >
            {/* Image Container with Zoom on Hover */}
            <div className={`relative w-full ${item.aspect} overflow-hidden bg-neutral-900`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Project Caption Line (Matching oharchitecture.com.au) */}
            <div className="flex items-center justify-between pt-4 text-xs sm:text-sm font-mono tracking-wider text-white/90">
              <div className="flex items-center gap-3">
                <span className="text-white/40">({item.id})</span>
                <span className="font-semibold font-sans tracking-widest uppercase text-white group-hover:text-white/70 transition-colors">
                  {item.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}