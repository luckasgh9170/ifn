import React from 'react';
import Container from '../components/Container.jsx';

const logos = ['Shoply', 'NorthPeak', 'Crescent Labs', 'Atlas SaaS', 'BrightOps', 'Mercury Media'];

export default function Logos() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-10">
      <Container>
        <div className="text-center text-sm text-white/60">
          Trusted by teams building predictable pipelines across global platforms
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((name) => (
            <div
              key={name}
              className="glass flex items-center justify-center rounded-2xl px-3 py-4 text-sm font-semibold text-white/75"
              aria-label={`Logo ${name}`}
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

