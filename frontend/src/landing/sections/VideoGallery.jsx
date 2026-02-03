import React from 'react';
import Section from '../components/Section.jsx';
import { useLang } from '../i18n/LangProvider.jsx';

export default function VideoGallery() {
  const { t } = useLang();
  return (
    <Section id="videos" eyebrow={t('videos.eyebrow')} title={t('videos.title')} subtitle={t('videos.subtitle')}>
      <div className="grid gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="glass card-3d rounded-3xl p-6 tilt-root" data-tilt>
            <div className="aspect-video w-full rounded-2xl border border-white/10 bg-white/5" />
            <div className="mt-4 text-sm font-semibold text-white/80">{t('videos.placeholder')} #{i + 1}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
