import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Logos from './sections/Logos.jsx';
import Features from './sections/Features.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Plans from './sections/Plans.jsx';
import Footer from './sections/Footer.jsx';
import VideoGallery from './sections/VideoGallery.jsx';
import WhatsAppCTA from './sections/WhatsAppCTA.jsx';
import useTilt from './hooks/useTilt.js';

export default function LandingPage() {
  useTilt();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Plans />
        <VideoGallery />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}
