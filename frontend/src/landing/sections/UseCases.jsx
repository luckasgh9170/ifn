import React from 'react';
import Section from '../components/Section.jsx';
import { useLang } from '../i18n/LangProvider.jsx';

export default function UseCases() {
  const { dict, t } = useLang();

  return (
    <Section id="use-cases" eyebrow={t('useCases.eyebrow')} title={t('useCases.title')} subtitle={t('useCases.subtitle')}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.useCases.cards.map((c) => (
          <article key={c.title} className="glass rounded-3xl p-6">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {c.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-0.5 text-purpleGlow-300" aria-hidden="true">
                    ✓
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
