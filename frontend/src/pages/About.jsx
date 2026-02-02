import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading.jsx';
import { HoverCard } from '../components/Card.jsx';

export default function About() {
  const { t } = useTranslation();
  const team = t('about.team', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>IFN — {t('about.title')}</title>
      </Helmet>

      <section className="section">
        <div className="container">
          <SectionHeading title={t('about.title')} subtitle={t('about.subtitle')} />
          <div className="grid2">
            <div className="card cardPad">
              <h3 style={{ marginTop: 0 }}>Mission</h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                Build ad systems that feel instantaneous, measurable, and human-friendly — powered by AI but controlled by you.
              </p>
            </div>
            <div className="card cardPad">
              <h3 style={{ marginTop: 0 }}>Principles</h3>
              <div className="pillRow">
                <span className="pill">Privacy</span>
                <span className="pill">Performance</span>
                <span className="pill">Explainability</span>
                <span className="pill">Great UX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title={t('about.teamTitle')} subtitle="" />
          <div className="grid3">
            {team.map((m) => (
              <HoverCard key={m.name}>
                <div className="pillRow">
                  <span className="pill">IFN</span>
                  <span className="pill">{m.role}</span>
                </div>
                <h3 style={{ margin: '12px 0 6px' }}>{m.name}</h3>
                <p className="muted" style={{ margin: 0 }}>
                  Building modern advertising workflows with AI-first thinking.
                </p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

