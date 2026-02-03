import React from 'react';
import Section from '../components/Section.jsx';
import { useLang } from '../i18n/LangProvider.jsx';

export default function WhatsAppCTA() {
  const { t } = useLang();
  const waLink = 'https://wa.me/989038907254?text=سلام%20وقت%20بخیر';

  return (
    <Section id="whatsapp" eyebrow={t('whatsapp.eyebrow')} title={t('whatsapp.title')} subtitle={t('whatsapp.subtitle')}>
      <div className="mx-auto max-w-3xl">
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="glass card-3d tilt-root group relative flex items-center justify-between gap-4 overflow-hidden rounded-3xl p-6 text-white/90"
          data-tilt
        >
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -top-16 -left-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-purpleGlow-300/20 blur-3xl" />
          </div>
          <div className="relative">
            <div className="text-lg font-semibold">{t('whatsapp.button')}</div>
            <div className="mt-2 text-sm text-white/70">{t('whatsapp.note')}</div>
          </div>
          <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)] transition group-hover:scale-105">
            🟢
          </span>
        </a>
      </div>
    </Section>
  );
}
