import React from 'react';
import Section from '../components/Section.jsx';

const cases = [
  {
    title: 'B2B SaaS',
    points: ['Outbound + inbound qualification', 'Pipeline creation for sales teams', 'Book demos automatically']
  },
  {
    title: 'Agencies',
    points: ['Qualify leads before sales calls', 'Scale prospecting for clients', 'Prove ROI with reporting']
  },
  {
    title: 'eCommerce',
    points: ['Recover abandoned sessions', 'Answer product questions instantly', 'Turn support into revenue']
  },
  {
    title: 'Local services',
    points: ['Capture phone/email instantly', 'Schedule appointments 24/7', 'Pre-qualify by location & budget']
  },
  {
    title: 'Enterprise',
    points: ['Guardrails + governance', 'Regional messaging', 'Integrations + analytics']
  },
  {
    title: 'Marketplaces',
    points: ['Onboard and activate suppliers', 'Qualify high-value partners', 'Reduce manual ops load']
  }
];

export default function UseCases() {
  return (
    <Section
      id="use-cases"
      eyebrow="Use cases"
      title="Built for teams that want predictable growth"
      subtitle="Whether you sell software, services, or products — IFN helps you create conversations that convert."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
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

