import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading.jsx';
import { HoverCard } from '../components/Card.jsx';

export default function Blog() {
  const { t } = useTranslation();
  const posts = t('blog.posts', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>IFN — {t('blog.title')}</title>
      </Helmet>

      <section className="section">
        <div className="container">
          <SectionHeading title={t('blog.title')} subtitle={t('blog.subtitle')} />
          <div className="grid3">
            {posts.map((p) => (
              <HoverCard key={p.title}>
                <div className="pillRow">
                  <span className="pill">{p.date}</span>
                  <span className="pill">AI</span>
                </div>
                <h3 style={{ margin: '12px 0 8px' }}>{p.title}</h3>
                <p className="muted" style={{ margin: 0 }}>
                  {p.excerpt}
                </p>
                <div style={{ marginTop: 12, fontWeight: 900, color: '#6a1b9a' }}>{t('blog.readMore')} →</div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

