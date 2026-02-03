import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations.js';

const LangContext = createContext(null);
const storageKey = 'ifn.lang';

function getInitialLang() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'ar' || saved === 'en') return saved;
  } catch {
    // ignore
  }
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('ar') ? 'ar' : 'en';
}

function getPath(obj, key) {
  return String(key)
    .split('.')
    .reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    const isArabic = lang === 'ar';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    try {
      localStorage.setItem(storageKey, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const value = useMemo(() => {
    const dict = translations[lang] || translations.en;
    return {
      lang,
      setLang,
      t: (key) => {
        const v = getPath(dict, key);
        return v !== undefined ? v : key;
      },
      dict
    };
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}

