import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import { Button } from '../components/Button.jsx';
import { api } from '../../shared/api.js';
import { useLang } from '../i18n/LangProvider.jsx';

export default function FinalCTA() {
  const { dict, t } = useLang();
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '' });
  const [apiBase, setApiBase] = useState(() => {
    if (typeof window === 'undefined') return '';
    return window.localStorage.getItem('ifn.apiBase') || '';
  });
  const [apiStatus, setApiStatus] = useState('idle');

  const isLocal = useMemo(() => window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1', []);
  const hasApiBase = Boolean(apiBase) || Boolean(import.meta.env.VITE_API_BASE_URL) || isLocal;

  async function testApi() {
    setApiStatus('checking');
    try {
      const base = apiBase || import.meta.env.VITE_API_BASE_URL || '';
      const res = await fetch(`${base}/api/health`);
      setApiStatus(res.ok ? 'ok' : 'fail');
    } catch {
      setApiStatus('fail');
    }
  }

  function saveApiBase() {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('ifn.apiBase', apiBase);
  }

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
    <Section id="demo" eyebrow={t('finalCta.eyebrow')} title={t('finalCta.title')} subtitle={t('finalCta.subtitle')}>
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
        <div className="glass card-3d rounded-3xl p-7 tilt-root" data-tilt>
          <div className="text-sm font-semibold text-white">{t('finalCta.demoBulletsTitle')}</div>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {dict.finalCta.bullets.map((x) => (
              <li key={x} className="flex gap-3 float-item">
                <span className="mt-0.5 text-purpleGlow-300" aria-hidden="true">
                  ✓
                </span>
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            <div className="font-semibold text-white">{t('finalCta.contact.title')}</div>
            <div className="mt-2 space-y-1">
              <div>{t('finalCta.contact.address')}</div>
              <div>{t('finalCta.contact.hours')}</div>
              <div>
                <span className="text-white/80">{t('finalCta.contact.phone')}</span>
              </div>
              <div>
                <span className="text-white/80">{t('finalCta.contact.telegram')}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 lg:block">
            <div className="font-semibold text-white">Desktop Online Mode</div>
            <div className="mt-2">Paste your backend URL here to activate forms and live features on the deployed site.</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <input
                value={apiBase}
                onChange={(e) => setApiBase(e.target.value)}
                placeholder="https://your-backend.example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-purpleGlow-400"
              />
              <button
                type="button"
                onClick={saveApiBase}
                className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/90 hover:bg-white/15"
              >
                Save URL
              </button>
              <button
                type="button"
                onClick={testApi}
                className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/90 hover:bg-white/15"
              >
                Test API
              </button>
              <span className="text-xs text-white/60">
                {apiStatus === 'ok' ? 'Connected' : apiStatus === 'fail' ? 'Not reachable' : 'Idle'}
              </span>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="glass card-3d rounded-3xl p-7 tilt-root"
          data-tilt
          aria-label="Book a demo form"
        >
          <div className="grid gap-4">
            <Field label={t('finalCta.form.name')} id="name">
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

            <Field label={t('finalCta.form.email')} id="email">
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

            <Field label={t('finalCta.form.company')} id="company">
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
              {status === 'sending' ? t('finalCta.form.submitting') : t('finalCta.form.submit')}
            </Button>
            <span className="text-sm text-white/60">{t('finalCta.subtitle')}</span>
          </div>

          {status === 'success' ? (
            <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-white">
              {t('finalCta.form.success')}
            </div>
          ) : null}
          {status === 'error' ? (
            <div className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-white">
              {hasApiBase ? t('finalCta.form.errorTryAgain') : t('finalCta.form.errorNoApi')}
            </div>
          ) : null}

          {!hasApiBase ? (
            <div className="mt-4 text-xs text-white/55">
              Heads up: GitHub Pages can’t run the backend. Deploy the API and set{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5">VITE_API_BASE_URL</code>.
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
