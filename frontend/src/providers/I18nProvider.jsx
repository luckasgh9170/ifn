import React, { useEffect } from 'react';
import i18n from '../translations/i18n.js';

function applyLangToDocument(lang) {
  const isArabic = String(lang).startsWith('ar');
  document.documentElement.lang = isArabic ? 'ar' : 'en';
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
}

export function I18nProvider({ children }) {
  useEffect(() => {
    applyLangToDocument(i18n.language);
    const onChange = (lng) => applyLangToDocument(lng);
    i18n.on('languageChanged', onChange);
    return () => i18n.off('languageChanged', onChange);
  }, []);

  return <>{children}</>;
}

