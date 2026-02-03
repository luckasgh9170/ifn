import React from 'react';
import Section from '../components/Section.jsx';
import { useLang } from '../i18n/LangProvider.jsx';

export default function Testimonials() {
  const { dict, t } = useLang();

  return (
    <Section id="testimonials" eyebrow={t('testimonials.eyebrow')} title={t('testimonials.title')} subtitle={t('testimonials.subtitle')}>
      <div className="grid gap-4 lg:grid-cols-3">
        {dict.testimonials.items.map((item) => (
          <figure key={item.quote} className="glass rounded-3xl p-6">
            <blockquote className="text-sm leading-relaxed text-white/80">“{item.quote}”</blockquote>
            <figcaption className="mt-5 text-sm text-white/70">
              <span className="font-semibold text-white">{item.name}</span> · {item.company}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
