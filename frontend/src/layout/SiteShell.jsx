import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

export default function SiteShell({ children }) {
  return (
    <>
      <Helmet>
        <meta name="description" content="AI-powered advertising services: targeting, creative generation, analytics, and real-time campaign updates." />
        <meta property="og:title" content="IFN — AI Advertising" />
        <meta property="og:description" content="AI-powered advertising services: targeting, creative generation, analytics, and real-time campaign updates." />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

