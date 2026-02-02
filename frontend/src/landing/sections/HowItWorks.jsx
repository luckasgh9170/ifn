import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';

const steps = [
  {
    title: 'Define your targets',
    desc: 'Set your ideal customer profile, regions, platforms, and guardrails. IFN learns your positioning, objection-handling, and conversion goals.',
    icon: '◎'
  },
  {
    title: 'Launch autonomous outreach',
    desc: 'IFN identifies prospects, starts conversations across channels, and follows up with natural, personalized messages until a clear outcome is reached.',
    icon: '⟡'
  },
  {
    title: 'Convert with qualification + routing',
    desc: 'When a prospect meets your criteria, IFN captures details, updates your CRM, and books a demo — or escalates to a human when needed.',
    icon: '⬡'
  }
];

export default function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="How it works"
      title="A simple workflow that scales worldwide"
      subtitle="From first touch to booked meeting, IFN runs a repeatable acquisition loop — with the analytics to prove impact."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {steps.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.07 * idx }}
            className="glass rounded-3xl p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-xl text-purpleGlow-300 shadow-[0_0_30px_rgba(167,139,250,0.22)]">
                {s.icon}
              </div>
              <div className="text-sm font-semibold text-white/60">Step {idx + 1}</div>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

