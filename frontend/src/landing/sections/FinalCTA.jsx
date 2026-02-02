import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import { Button } from '../components/Button.jsx';
import { api } from '../../shared/api.js';

export default function FinalCTA() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '' });

  const isLocal = useMemo(() => {
    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  }, []);
  const hasApiBase = Boolean(import.meta.env.VITE_API_BASE_URL) || isLocal;

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      await api.post('/api/inquiries', {
        name: form.name,
        email: form.email,
        company: form.company,
        message: 'Landing page demo request'
      });
      setStatus('success');
      setForm({ name: '', email: '', company: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <Section
      id="demo"
      eyebrow="Book a demo"
      title="Turn anonymous traffic into qualified pipeline — automatically."
      subtitle="Share a few details and we’ll show you how IFN can engage prospects across platforms, qualify them reliably, and prove ROI."
    >
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-7">
          <div className="text-sm font-semibold text-white">What you’ll see in the demo</div>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {[
              'A real qualification flow: budget, timeline, region, decision-maker status',
              'Multi-platform messaging strategy (web, email, WhatsApp, LinkedIn)',
              'Routing + scheduling: only qualified leads hit your calendar',
              'Analytics: conversion rate, attribution, and measurable ROI'
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-0.5 text-purpleGlow-300" aria-hidden="true">
                  ✓
                </span>
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            <div className="font-semibold text-white">Fast implementation</div>
            <div className="mt-1">
              Most teams ship their first playbook in days — then iterate weekly as the chatbot learns what converts best.
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="glass rounded-3xl p-7"
          aria-label="Book a demo form"
        >
          <div className="grid gap-4">
            <Field label="Name" id="name">
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-purpleGlow-400"
                placeholder="Jane Doe"
                autoComplete="name"
              />
            </Field>

            <Field label="Work email" id="email">
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-purpleGlow-400"
                placeholder="jane@company.com"
                autoComplete="email"
              />
            </Field>

            <Field label="Company" id="company">
              <input
                id="company"
                required
                value={form.company}
                onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-purpleGlow-400"
                placeholder="Acme Inc."
                autoComplete="organization"
              />
            </Field>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button type="submit" className="w-full sm:w-auto" disabled={status === 'sending'}>
              {status === 'sending' ? 'Submitting…' : 'Book a Demo'}
            </Button>
            <span className="text-sm text-white/60">
              Response within 1 business day.
            </span>
          </div>

          {status === 'success' ? (
            <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-white">
              Thanks — we received your request. We’ll reach out shortly.
            </div>
          ) : null}
          {status === 'error' ? (
            <div className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-white">
              Something went wrong. {hasApiBase ? 'Please try again.' : 'Deploy the backend and set VITE_API_BASE_URL to enable form submissions.'}
            </div>
          ) : null}

          {!hasApiBase ? (
            <div className="mt-4 text-xs text-white/55">
              Heads up: GitHub Pages can’t run the backend. Deploy the API and set <code className="rounded bg-white/10 px-1.5 py-0.5">VITE_API_BASE_URL</code>.
            </div>
          ) : null}
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, id, children }) {
  return (
    <label htmlFor={id} className="text-sm font-semibold text-white/90">
      {label}
      {children}
    </label>
  );
}

