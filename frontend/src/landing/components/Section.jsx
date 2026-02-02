import React from 'react';
import Container from './Container.jsx';

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-purpleGlow-400 shadow-[0_0_20px_rgba(167,139,250,0.6)]" aria-hidden="true" />
              {eyebrow}
            </div>
          ) : null}
          {title ? <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2> : null}
          {subtitle ? <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">{subtitle}</p> : null}
        </div>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

