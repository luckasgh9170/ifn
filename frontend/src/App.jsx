import React from 'react';
import { Helmet } from 'react-helmet-async';
import LandingPage from './landing/LandingPage.jsx';

export default function App() {
  return (
    <>
      <Helmet>
        <title>IFN — AI Customer Acquisition Chatbot</title>
        <meta
          name="description"
          content="A production-ready landing page for an AI customer acquisition chatbot that finds prospects, qualifies leads, and expands sales globally."
        />
      </Helmet>
      <LandingPage />
    </>
  );
}
