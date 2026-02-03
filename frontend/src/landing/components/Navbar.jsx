import React, { useEffect, useState } from 'react';
import Container from './Container.jsx';
import { Button } from './Button.jsx';
import { useLang } from '../i18n/LangProvider.jsx';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#features', label: t('nav.features') },
    { href: '#how', label: t('nav.how') },
    { href: '#pricing', label: t('nav.plans') },
    { href: '#videos', label: t('videos.eyebrow') }
  ];

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/55 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-10 h-48 w-48 rounded-full bg-purpleGlow-400/20 blur-3xl" />
        <div className="absolute -top-16 right-16 h-40 w-40 rounded-full bg-purpleGlow-300/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)_0_0/22px_22px]" />
      </div>
      <Container className="flex items-center justify-between py-3">
        <a href="#" className="group inline-flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow-glow">
            <span className="h-2.5 w-2.5 rounded-full bg-purpleGlow-400 shadow-[0_0_18px_rgba(167,139,250,0.8)]" aria-hidden="true" />
          </span>
          <span className="text-white">Sellerbot</span>
          <span className="hidden text-white/60 sm:inline">{t('brand.byline')}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purpleGlow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1 md:flex" role="group" aria-label="Language">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-lg px-2.5 py-2 text-xs font-semibold transition ${lang === 'en' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('ar')}
              className={`rounded-lg px-2.5 py-2 text-xs font-semibold transition ${lang === 'ar' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}
              aria-pressed={lang === 'ar'}
            >
              AR
            </button>
          </div>

          <Button as="a" href="#demo">
            {t('nav.demo')}
          </Button>
          <button
            type="button"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            ☰
          </button>
        </div>
      </Container>

      {open ? (
        <div className="md:hidden">
          <Container className="pb-4">
            <div className="glass rounded-2xl p-3">
              <div className="flex items-center justify-between gap-3 px-1 pb-2">
                <div className="text-sm font-semibold text-white/80">Language</div>
                <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`rounded-lg px-2.5 py-2 text-xs font-semibold transition ${lang === 'en' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}
                    aria-pressed={lang === 'en'}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('ar')}
                    className={`rounded-lg px-2.5 py-2 text-xs font-semibold transition ${lang === 'ar' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}
                    aria-pressed={lang === 'ar'}
                  >
                    AR
                  </button>
                </div>
              </div>
              <div className="grid gap-1">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10" onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
                <a href="#demo" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpen(false)}>
                  {t('nav.demo')}
                </a>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
