import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading.jsx';
import { FlipCard } from '../components/Card.jsx';
import Accordion from '../components/Accordion.jsx';

export default function Services() {
  const { t } = useTranslation();
  const faq = t('services.faq', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>IFN — {t('services.title')}</title>
      </Helmet>

      <section className="section">
        <div className="container">
          <SectionHeading title={t('services.title')} subtitle={t('services.subtitle')} />
          <div className="grid3">
            <FlipCard
              title={t('services.cards.targeting.title')}
              front={t('services.cards.targeting.front')}
              back={t('services.cards.targeting.back')}
              icon="🎯"
            />
            <FlipCard
              title={t('services.cards.creative.title')}
              front={t('services.cards.creative.front')}
              back={t('services.cards.creative.back')}
              icon="✨"
            />
            <FlipCard
              title={t('services.cards.analytics.title')}
              front={t('services.cards.analytics.front')}
              back={t('services.cards.analytics.back')}
              icon="📈"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title={t('services.faqTitle')} subtitle="" />
          <Accordion items={faq} ariaLabel={t('a11y.faq')} />
        </div>
      </section>
    </>
  );
}

