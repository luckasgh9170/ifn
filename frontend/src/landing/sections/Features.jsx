import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';

const features = [
  {
    title: 'AI prospecting that matches your ICP',
    desc: 'Define your ideal customer profile once. IFN finds lookalike accounts and decision-makers, prioritizes by intent signals, and builds a clean list you can trust.'
  },
  {
    title: 'Personalized outreach at scale',
    desc: 'Generate high-quality opening messages and follow-ups that sound human. The chatbot adapts tone, channel, and language while staying on-brand.'
  },
  {
    title: 'Lead qualification, automatically',
    desc: 'Ask the questions your team would ask: budget, timeline, requirements, region, and buying role. Only qualified leads get routed to sales.'
  },
  {
    title: 'Multi-platform conversations',
    desc: 'Engage prospects where they are: website chat, email, WhatsApp, Instagram, LinkedIn. Keep context across channels so buyers never repeat themselves.'
  },
  {
    title: 'Analytics you can act on',
    desc: 'See reply rates, qualification rates, pipeline impact, and attribution. Identify the top-performing segments and scale what’s working.'
  },
  {
    title: 'Security + governance built-in',
    desc: 'Control prompts, guardrails, and escalation logic. Log conversations, redact sensitive fields, and stay compliant as you scale globally.'
  }
];

export default function Features() {
  return (
    <Section
      id="features"
      eyebrow="What you get"
      title="A complete AI customer acquisition engine"
      subtitle="Not just a chatbot. IFN is an end-to-end system that discovers prospects, starts conversations, qualifies opportunities, and measures ROI."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.05 * idx }}
            className="group glass rounded-3xl p-6 transition hover:bg-white/10"
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
              Learn more <span className="transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

