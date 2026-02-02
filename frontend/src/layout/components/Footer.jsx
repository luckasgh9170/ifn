import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../shared/LanguageSwitcher.jsx';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <div className="footer__brand">
            <span className="footer__dot" aria-hidden="true" />
            <strong>IFN</strong>
          </div>
          <div className="muted">{t('footer.tagline')}</div>
          <div className="footer__social" aria-label={t('a11y.socialLinks')}>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              X
            </a>
          </div>
        </div>

        <div className="footer__right">
          <LanguageSwitcher />
          <div className="muted">
            © {new Date().getFullYear()} IFN. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}

