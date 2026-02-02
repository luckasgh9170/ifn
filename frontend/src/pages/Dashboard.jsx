import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading.jsx';
import { api } from '../shared/api.js';
import { useSocket } from '../shared/useSocket.js';

export default function Dashboard() {
  const { t } = useTranslation();
  const apiBase = import.meta.env.VITE_API_BASE_URL || '';
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const realtimeEnabled = Boolean(apiBase) || isLocal;

  const { socket, connected } = useSocket({ enabled: realtimeEnabled });
  const [log, setLog] = useState([]);
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState('idle');

  const [form, setForm] = useState({
    product: 'AI Ad Platform',
    audience: 'E-commerce founders',
    goal: 'Leads',
    tone: 'Confident'
  });

  const tones = useMemo(() => ['Confident', 'Friendly', 'Premium', 'Direct'], []);

  useEffect(() => {
    if (realtimeEnabled) socket.connect();
    function onProgress(evt) {
      setLog((s) => [`${new Date().toLocaleTimeString()} — ${evt.message}`, ...s].slice(0, 50));
    }
    function onResult(evt) {
      setOutput(evt.adText);
      setStatus('idle');
    }
    socket.on('ai:progress', onProgress);
    socket.on('ai:result', onResult);
    return () => {
      if (realtimeEnabled) socket.disconnect();
      socket.off('ai:progress', onProgress);
      socket.off('ai:result', onResult);
    };
  }, [socket, realtimeEnabled]);

  async function onGenerate(e) {
    e.preventDefault();
    setOutput('');
    setStatus('generating');
    setLog((s) => [`${new Date().toLocaleTimeString()} — queued`, ...s].slice(0, 50));

    const socketId = realtimeEnabled ? socket.id : undefined;
    try {
      const res = await api.post('/api/ai/generate-ad', { ...form, socketId });
      if (res.data?.adText) {
        setOutput(res.data.adText);
        setStatus('idle');
      } else if (res.data?.queued) {
        // keep "generating" until Socket.io result arrives
      } else {
        setStatus('idle');
      }
    } catch {
      setStatus('idle');
      setLog((s) => [`${new Date().toLocaleTimeString()} — error`, ...s].slice(0, 50));
    }
  }

  return (
    <>
      <Helmet>
        <title>IFN — {t('dashboard.title')}</title>
      </Helmet>

      <section className="section">
        <div className="container">
          <SectionHeading title={t('dashboard.title')} subtitle={t('dashboard.subtitle')} />

          <div className="grid2">
            <form className="card panel" onSubmit={onGenerate} aria-label={t('dashboard.title')}>
              <div className="formGrid">
                <div className="field">
                  <label htmlFor="product">{t('dashboard.form.product')}</label>
                  <input id="product" value={form.product} onChange={(e) => setForm((s) => ({ ...s, product: e.target.value }))} />
                </div>
                <div className="field">
                  <label htmlFor="audience">{t('dashboard.form.audience')}</label>
                  <input id="audience" value={form.audience} onChange={(e) => setForm((s) => ({ ...s, audience: e.target.value }))} />
                </div>
                <div className="field">
                  <label htmlFor="goal">{t('dashboard.form.goal')}</label>
                  <input id="goal" value={form.goal} onChange={(e) => setForm((s) => ({ ...s, goal: e.target.value }))} />
                </div>
                <div className="field">
                  <label htmlFor="tone">{t('dashboard.form.tone')}</label>
                  <select id="tone" value={form.tone} onChange={(e) => setForm((s) => ({ ...s, tone: e.target.value }))}>
                    {tones.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 14 }}>
                <button className="btn" type="submit" disabled={status === 'generating'}>
                  {status === 'generating' ? t('dashboard.form.generating') : t('dashboard.form.generate')}
                </button>
                <button
                  className="btn btn--ghost"
                  type="button"
                  onClick={() => (connected ? socket.disconnect() : socket.connect())}
                  aria-label={connected ? t('dashboard.disconnect') : t('dashboard.connect')}
                  disabled={!realtimeEnabled}
                >
                  {connected ? t('dashboard.disconnect') : t('dashboard.connect')}
                </button>
                <span className="muted" style={{ alignSelf: 'center' }}>
                  Socket: {connected ? 'connected' : 'disconnected'}
                </span>
              </div>

              {!realtimeEnabled ? (
                <div className="muted" style={{ marginTop: 12 }}>
                  Tip: deploy the backend and set <code>VITE_API_BASE_URL</code> in <code>frontend/.env</code> to enable live updates.
                </div>
              ) : null}

              <div style={{ marginTop: 18 }}>
                <div style={{ fontWeight: 900, marginBottom: 8 }}>{t('dashboard.outputTitle')}</div>
                <div className="codebox" aria-live="polite">
                  {output || '—'}
                </div>
              </div>
            </form>

            <div className="card panel live" aria-label={t('dashboard.liveTitle')}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <div style={{ fontWeight: 900 }}>{t('dashboard.liveTitle')}</div>
                <span className="pill">{connected ? 'LIVE' : 'OFF'}</span>
              </div>
              <div className="live__log" role="log" aria-live="polite">
                {log.length ? log.join('\n') : '—'}
              </div>
              <div className="muted">
                This panel is powered by Socket.io and receives progress events while the server simulates generation.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
