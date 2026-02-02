import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ar from './locales/ar.json';

const storageKey = 'ifn.lang';

function getInitialLanguage() {
  const saved = localStorage.getItem(storageKey);
  if (saved === 'ar' || saved === 'en') return saved;
  const nav = navigator.language?.toLowerCase() || 'en';
  return nav.startsWith('ar') ? 'ar' : 'en';
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar }
  },
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem(storageKey, lng);
  } catch {
    // ignore
  }
});

export default i18n;

