import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading.jsx';
import { api } from '../shared/api.js';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const mapUrl = useMemo(() => {
    return import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || 'https://www.google.com/maps?q=Dubai&output=embed';
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      await api.post('/api/inquiries', form);
      setStatus('success');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <Helmet>
        <title>IFN — {t('contact.title')}</title>
      </Helmet>

      <section className="section">
        <div className="container">
          <SectionHeading title={t('contact.title')} subtitle={t('contact.subtitle')} />

          <div className="grid2">
            <form className="card panel" onSubmit={onSubmit} aria-label={t('contact.title')}>
              <div className="formGrid">
                <div className="field">
                  <label htmlFor="name">{t('contact.name')}</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    autoComplete="name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">{t('contact.email')}</label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    autoComplete="email"
                  />
                </div>

                <div className="field full">
                  <label htmlFor="company">{t('contact.company')}</label>
                  <input id="company" value={form.company} onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))} />
                </div>

                <div className="field full">
                  <label htmlFor="message">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    required
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 14 }}>
                <button className="btn" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? t('contact.sending') : t('contact.send')}
                </button>
                {status === 'success' ? <span className="muted">{t('contact.success')}</span> : null}
                {status === 'error' ? <span className="muted">{t('contact.error')}</span> : null}
              </div>
            </form>

            <div className="card panel" aria-label={t('contact.mapTitle')}>
              <iframe className="mapFrame" title={t('contact.mapTitle')} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
              <div className="muted" style={{ marginTop: 10 }}>
                Tip: set <code>VITE_GOOGLE_MAPS_EMBED_URL</code> in <code>frontend/.env</code>.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

