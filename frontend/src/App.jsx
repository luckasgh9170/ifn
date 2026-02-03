import React from 'react';
import { Helmet } from 'react-helmet-async';
import LandingPage from './landing/LandingPage.jsx';
import { useLang } from './landing/i18n/LangProvider.jsx';

export default function App() {
  const { lang, t } = useLang();
  const title = lang === 'ar' ? 'سيلربوت — روبوت اكتساب العملاء' : 'Sellerbot — AI Customer Acquisition';
  const description =
    lang === 'ar'
      ? 'منصة ذكية لاكتساب العملاء عبر منصات التواصل، تأهيلهم، ثم تسليمهم لفريقك لإغلاق الصفقة.'
      : 'An AI-powered system that finds customers, qualifies leads, and hands off ready opportunities.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <LandingPage />
    </>
  );
}
