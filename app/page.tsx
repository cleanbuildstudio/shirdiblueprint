'use client';

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutOne from "./components/About-one";
import Projects from "./components/About-two";
import Spiritual from "./components/Spiritual";
import WhatsAppButton from "./components/WhatsappButton";
import AboutThree from "./components/About-three";
import EditorialSlider from "./components/About-four";
import Location from "./components/Location";
import ContactUS from "./components/ContactUS";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent text-white">
      {/* Fixed Background Video */}
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[max(100%,177.78svh)] h-[max(100%,56.25vw)] pointer-events-none border-0"
          src="https://player.vimeo.com/video/1132468389?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Blueprint Shirdi Hero Video"
        />
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
      </div>

      {/* Global Fixed Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* About Section */}
      <div className="relative z-10">
        <AboutOne />
      </div>

      {/* Projects Section */}
      <div className="relative z-10">
        <Projects />
      </div>

      {/* The Film Section (Spiritual.jsx) */}
      <div className="relative z-10">
        <Spiritual />
      </div>

      <div className="relative z-10">
        <AboutThree />
      </div>

      <div className="relative z-10">
        <EditorialSlider />
      </div>

      {/* Location & Connectivity Section */}
    

      {/* Modern Minimalistic Contact Us Section */}
      <div className="relative z-10">
        <ContactUS />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>

      {/* Fixed WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}
