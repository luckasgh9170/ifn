import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language?.startsWith('ar');

  return (
    <div className="lang" role="group" aria-label={t('a11y.languageSwitcher')}>
      <button
        type="button"
        className={`btn btn--ghost ${!isArabic ? 'lang__active' : ''}`}
        onClick={() => i18n.changeLanguage('en')}
        aria-pressed={!isArabic}
      >
        EN
      </button>
      <button
        type="button"
        className={`btn btn--ghost ${isArabic ? 'lang__active' : ''}`}
        onClick={() => i18n.changeLanguage('ar')}
        aria-pressed={isArabic}
      >
        AR
      </button>
    </div>
  );
}

