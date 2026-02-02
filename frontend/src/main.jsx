import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { I18nProvider } from './providers/I18nProvider.jsx';
import './styles/global.css';
import './styles/site.css';
import './styles/components.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <I18nProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </I18nProvider>
    </HelmetProvider>
  </React.StrictMode>
);
