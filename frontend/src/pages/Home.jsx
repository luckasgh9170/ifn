import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ParallaxHero from '../components/ParallaxHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Carousel from '../components/Carousel.jsx';
import { HoverCard } from '../components/Card.jsx';

export default function Home() {
  const { t } = useTranslation();

  const stats = useMemo(
    () => [
      { label: 'CTR', value: '+18%' },
      { label: 'CPA', value: '−12%' },
      { label: 'ROAS', value: 'x3.1' },
      { label: 'Latency', value: '< 1s' }
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: 'Noura A.',
        role: 'E-commerce Lead',
        quote: 'We shipped new creatives daily and watched performance improve in real time.'
      },
      {
        name: 'Sam K.',
        role: 'Growth Manager',
        quote: 'The bilingual UX and quick iteration loop made collaboration effortless.'
      },
      {
        name: 'Hadi R.',
        role: 'Founder',
        quote: 'From idea to launch, the platform kept our campaigns organized and measurable.'
      }
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>IFN — {t('home.chip')}</title>
      </Helmet>

      <ParallaxHero stats={stats}>
        <div className="chip">{t('home.chip')}</div>
        <h1 className="hero__title">{t('home.title')}</h1>
        <p className="hero__subtitle muted">{t('home.subtitle')}</p>
        <div className="hero__actions" id="contact-cta">
          <Link className="btn" to="/dashboard">
            {t('home.primaryCta')}
          </Link>
          <Link className="btn btn--ghost" to="/services">
            {t('home.secondaryCta')}
          </Link>
        </div>

        <div className="hero__kpis">
          {['k1', 'k2', 'k3'].map((k, idx) => (
            <motion.div key={k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * idx }}>
              <div className="kpi">
                <div className="kpi__icon" aria-hidden="true">
                  {idx + 1}
                </div>
                <div style={{ fontWeight: 800 }}>{t(`home.kpis.${k}`)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </ParallaxHero>

      <section className="section">
        <div className="container">
          <SectionHeading title={t('services.title')} subtitle={t('services.subtitle')} />
          <div className="grid3">
            <HoverCard>
              <div className="pillRow">
                <span className="pill">AI</span>
                <span className="pill">{t('services.cards.targeting.title')}</span>
              </div>
              <h3 style={{ margin: '10px 0 8px' }}>{t('services.cards.targeting.front')}</h3>
              <p className="muted" style={{ margin: 0 }}>
                {t('services.cards.targeting.back')}
              </p>
            </HoverCard>

            <HoverCard>
              <div className="pillRow">
                <span className="pill">GEN</span>
                <span className="pill">{t('services.cards.creative.title')}</span>
              </div>
              <h3 style={{ margin: '10px 0 8px' }}>{t('services.cards.creative.front')}</h3>
              <p className="muted" style={{ margin: 0 }}>
                {t('services.cards.creative.back')}
              </p>
            </HoverCard>

            <HoverCard>
              <div className="pillRow">
                <span className="pill">ROI</span>
                <span className="pill">{t('services.cards.analytics.title')}</span>
              </div>
              <h3 style={{ margin: '10px 0 8px' }}>{t('services.cards.analytics.front')}</h3>
              <p className="muted" style={{ margin: 0 }}>
                {t('services.cards.analytics.back')}
              </p>
            </HoverCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title={t('a11y.testimonials')} subtitle="Case studies and feedback from teams shipping faster." />
          <Carousel
            items={testimonials}
            renderItem={(it) => (
              <div className="card cardPad">
                <div style={{ fontWeight: 900, fontSize: '1.05rem' }}>{it.quote}</div>
                <div className="muted" style={{ marginTop: 10, fontWeight: 800 }}>
                  {it.name} · {it.role}
                </div>
              </div>
            )}
          />
        </div>
      </section>
    </>
  );
}

