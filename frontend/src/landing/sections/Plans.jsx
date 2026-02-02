import React from 'react';
import Section from '../components/Section.jsx';
import { Button } from '../components/Button.jsx';

const plans = [
  {
    name: 'Starter',
    price: '$299',
    note: 'per month',
    points: ['Website chatbot + lead capture', 'Basic qualification flows', 'Email notifications', 'Weekly analytics snapshot']
  },
  {
    name: 'Growth',
    price: '$899',
    note: 'per month',
    featured: true,
    points: ['Multi-platform outreach', 'Advanced qualification + routing', 'A/B message testing', 'Attribution + ROI dashboard']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    note: 'annual',
    points: ['Governance + compliance', 'Custom integrations (CRM/CDP)', 'Regional playbooks + languages', 'Dedicated support + SLAs']
  }
];

export default function Plans() {
  return (
    <Section
      id="pricing"
      eyebrow="Plans"
      title="Start small. Scale globally."
      subtitle="Choose a plan based on your acquisition volume and required channels. Upgrade anytime as your pipeline grows."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-3xl p-6 ${p.featured ? 'glass glow-ring border border-purpleGlow-400/30' : 'glass'}`}
          >
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{p.name}</div>
              {p.featured ? (
                <span className="rounded-full border border-purpleGlow-400/30 bg-purpleGlow-400/10 px-3 py-1 text-xs text-white/80">
                  Most popular
                </span>
              ) : null}
            </div>
            <div className="mt-4 flex items-end gap-2">
              <div className="text-4xl font-semibold">{p.price}</div>
              <div className="pb-1 text-sm text-white/60">{p.note}</div>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {p.points.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-0.5 text-purpleGlow-300" aria-hidden="true">
                    ✓
                  </span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button as="a" href="#demo" variant={p.featured ? 'primary' : 'secondary'} className="w-full">
                Book a Demo
              </Button>
            </div>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-white/60">
        Pricing is indicative. Real quotes depend on channels, volume, and integrations. We’ll scope it with you in a 20-minute call.
      </p>
    </Section>
  );
}

