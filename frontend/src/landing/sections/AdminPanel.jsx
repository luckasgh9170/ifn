import React, { useEffect, useMemo, useRef, useState } from 'react';
import Section from '../components/Section.jsx';
import { useLang } from '../i18n/LangProvider.jsx';

export default function AdminPanel() {
  const { t, lang } = useLang();
  const [token, setToken] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('ifn.adminToken') || '' : ''));
  const [base, setBase] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('ifn.apiBase') || '' : ''));
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('idle');
  const [notif, setNotif] = useState('default');
  const esRef = useRef(null);

  const apiBase = useMemo(() => {
    if (!base) return '';
    return base.replace(/\/$/, '');
  }, [base]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setNotif(Notification.permission);
  }, []);

  async function requestNotification() {
    if (!('Notification' in window)) return;
    const res = await Notification.requestPermission();
    setNotif(res);
  }

  async function connect() {
    setStatus('loading');
    try {
      localStorage.setItem('ifn.adminToken', token);
      localStorage.setItem('ifn.apiBase', base);

      const res = await fetch(`${apiBase}/api/admin/inquiries`, {
        headers: { 'x-admin-token': token }
      });
      if (!res.ok) throw new Error('Unauthorized');
      const data = await res.json();
      setItems(data.items || []);
      setStatus('connected');

      if (esRef.current) esRef.current.close();
      const es = new EventSource(`${apiBase}/api/admin/stream?token=${encodeURIComponent(token)}`);
      es.onmessage = (evt) => {
        try {
          const msg = JSON.parse(evt.data);
          if (msg.type === 'inquiry') {
            setItems((prev) => [msg.payload, ...prev].slice(0, 200));
            if (notif === 'granted') {
              new Notification(t('admin.notifyTitle'), {
                body: `${msg.payload.name} · ${msg.payload.phone || msg.payload.email || ''}`
              });
            }
          }
        } catch {
          // ignore
        }
      };
      es.onerror = () => {
        setStatus('error');
      };
      esRef.current = es;
    } catch {
      setStatus('error');
    }
  }

  function disconnect() {
    esRef.current?.close();
    esRef.current = null;
    setStatus('idle');
  }

  return (
    <Section id="admin" eyebrow={t('admin.eyebrow')} title={t('admin.title')} subtitle={t('admin.subtitle')}>
      <div className="hidden lg:block">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass card-3d rounded-3xl p-6 tilt-root" data-tilt>
            <div className="text-sm font-semibold text-white">{t('admin.connectTitle')}</div>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              <label className="grid gap-2">
                {t('admin.baseUrl')}
                <input
                  value={base}
                  onChange={(e) => setBase(e.target.value)}
                  placeholder="https://your-backend.example.com"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-purpleGlow-400"
                />
              </label>
              <label className="grid gap-2">
                {t('admin.token')}
                <input
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="ADMIN_TOKEN"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-purpleGlow-400"
                />
              </label>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/90 hover:bg-white/15" onClick={connect}>
                {t('admin.connect')}
              </button>
              <button className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/90 hover:bg-white/15" onClick={disconnect}>
                {t('admin.disconnect')}
              </button>
              <button className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/90 hover:bg-white/15" onClick={requestNotification}>
                {t('admin.enableNotif')}
              </button>
              <span className="text-xs text-white/60 self-center">{t('admin.status')}: {status}</span>
            </div>
          </div>

          <div className="glass card-3d rounded-3xl p-6 tilt-root" data-tilt>
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white">{t('admin.inbox')}</div>
              <span className="text-xs text-white/60">{items.length}</span>
            </div>
            <div className="mt-4 max-h-[420px] space-y-3 overflow-auto pr-1 text-sm text-white/70">
              {items.length === 0 ? (
                <div className="text-white/50">{t('admin.empty')}</div>
              ) : (
                items.map((it, idx) => (
                  <div key={it.id || idx} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="font-semibold text-white">{it.name}</div>
                    <div className="text-xs text-white/60">{it.email} · {it.company}</div>
                    <div className="mt-2 text-xs">{it.message}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 text-xs text-white/50">
          {lang === 'ar'
            ? 'لوحة الإدارة تظهر على الديسكتوب فقط. لأجهزة الجوال استخدم نسخة الويب كاملة.'
            : 'Admin panel is shown on desktop only. Use the full web version on mobile.'}
        </div>
      </div>
    </Section>
  );
}

