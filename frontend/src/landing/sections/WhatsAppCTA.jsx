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
          className="glass card-3d tilt-root flex items-center justify-between gap-4 rounded-3xl p-6 text-white/90"
          data-tilt
        >
          <div>
            <div className="text-lg font-semibold">{t('whatsapp.button')}</div>
            <div className="mt-2 text-sm text-white/70">{t('whatsapp.note')}</div>
          </div>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">🟢</span>
        </a>
      </div>
    </Section>
  );
}

