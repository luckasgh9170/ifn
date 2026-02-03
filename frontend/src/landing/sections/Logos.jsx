import React from 'react';
import Container from '../components/Container.jsx';
import { useLang } from '../i18n/LangProvider.jsx';

const logos = ['Shoply', 'NorthPeak', 'Crescent Labs', 'Atlas SaaS', 'BrightOps', 'Mercury Media'];

export default function Logos() {
  const { t } = useLang();
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-10">
      <Container>
        <div className="text-center text-sm text-white/60">{t('logos.title')}</div>
        <div className="mt-6 marquee">
          <div className="marquee__track">
            {[...logos, ...logos].map((name, idx) => (
              <div
                key={`${name}-${idx}`}
                className="glass card-3d flex items-center justify-center rounded-2xl px-5 py-4 text-sm font-semibold text-white/75 tilt-root"
                data-tilt
                aria-label={`Logo ${name}`}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
