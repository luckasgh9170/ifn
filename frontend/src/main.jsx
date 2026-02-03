import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './styles/tailwind.css';
import { LangProvider } from './landing/i18n/LangProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </HelmetProvider>
  </React.StrictMode>
);
