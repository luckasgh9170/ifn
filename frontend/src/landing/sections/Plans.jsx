import React from 'react';
import Section from '../components/Section.jsx';
import { Button } from '../components/Button.jsx';
import { useLang } from '../i18n/LangProvider.jsx';

export default function Plans() {
  const { dict, t } = useLang();

  return (
    <Section id="pricing" eyebrow={t('plans.eyebrow')} title={t('plans.title')} subtitle={t('plans.subtitle')}>
      <div className="grid gap-4 lg:grid-cols-2">
        {dict.plans.items.map((p) => (
          <div
            key={p.name}
            className={`rounded-3xl p-6 tilt-root card-3d ${p.featured ? 'glass glow-ring border border-purpleGlow-400/30' : 'glass'}`}
            data-tilt
          >
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{p.name}</div>
              {p.featured ? (
                <span className="rounded-full border border-purpleGlow-400/30 bg-purpleGlow-400/10 px-3 py-1 text-xs text-white/80">Popular</span>
              ) : null}
            </div>
            <div className="mt-4 flex items-end gap-2">
              <div className="text-3xl font-semibold">{p.price}</div>
              <div className="pb-1 text-sm text-white/60">{p.unit}</div>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {p.points.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-0.5 text-purpleGlow-300" aria-hidden="true">
                    ✓
                  </span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button as="a" href="#demo" variant={p.featured ? 'primary' : 'secondary'} className="w-full">
                {t('nav.demo')}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-white/60">{t('plans.note')}</p>
    </Section>
  );
}
