import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import { useLang } from '../i18n/LangProvider.jsx';

export default function Features() {
  const { dict, t, lang } = useLang();
  const arrow = lang === 'ar' ? '←' : '→';

  return (
    <Section id="features" eyebrow={t('features.eyebrow')} title={t('features.title')} subtitle={t('features.subtitle')}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.features.items.map((f, idx) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.05 * idx }}
            className="group glass card-3d rounded-3xl p-6 transition hover:bg-white/10 tilt-root"
            data-tilt
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
              <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-purpleGlow-300 shadow-[0_0_24px_rgba(167,139,250,0.25)]">
                ✦
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{f.desc}</p>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-purpleGlow-400/40 via-white/10 to-transparent" aria-hidden="true" />
            <div className="mt-4 text-sm font-semibold text-white/80">
              <span className="sr-only">Learn more</span>
              <span aria-hidden="true">{arrow}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
