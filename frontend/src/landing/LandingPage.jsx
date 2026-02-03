import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Logos from './sections/Logos.jsx';
import Features from './sections/Features.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import UseCases from './sections/UseCases.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Plans from './sections/Plans.jsx';
import FAQ from './sections/FAQ.jsx';
import FinalCTA from './sections/FinalCTA.jsx';
import AdminPanel from './sections/AdminPanel.jsx';
import Footer from './sections/Footer.jsx';
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
        <UseCases />
        <Testimonials />
        <Plans />
        <FAQ />
        <FinalCTA />
        <AdminPanel />
      </main>
      <Footer />
    </div>
  );
}
