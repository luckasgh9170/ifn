import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LanguageSwitcher from '../../shared/LanguageSwitcher.jsx';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink to="/" className="nav__brand" aria-label="IFN Home">
          <span className="nav__dot" aria-hidden="true" />
          <span>IFN</span>
        </NavLink>

        <nav className="nav__links" aria-label={t('a11y.primaryNav')}>
          <NavLink to="/services">{t('nav.services')}</NavLink>
          <NavLink to="/about">{t('nav.about')}</NavLink>
          <NavLink to="/blog">{t('nav.blog')}</NavLink>
          <NavLink to="/contact">{t('nav.contact')}</NavLink>
          <NavLink to="/dashboard">{t('nav.dashboard')}</NavLink>
        </nav>

        <div className="nav__actions">
          <LanguageSwitcher />
          <motion.a whileHover={{ y: -1 }} whileTap={{ y: 0 }} className="btn" href="#contact-cta">
            {t('nav.cta')}
          </motion.a>
        </div>
      </div>
    </header>
  );
}

