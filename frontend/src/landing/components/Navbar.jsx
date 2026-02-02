import React, { useEffect, useState } from 'react';
import Container from './Container.jsx';
import { Button } from './Button.jsx';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#use-cases', label: 'Use cases' },
  { href: '#pricing', label: 'Plans' },
  { href: '#faq', label: 'FAQ' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/55 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-3">
        <a href="#" className="group inline-flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow-glow">
            <span className="h-2.5 w-2.5 rounded-full bg-purpleGlow-400 shadow-[0_0_18px_rgba(167,139,250,0.8)]" aria-hidden="true" />
          </span>
          <span className="text-white">IFN</span>
          <span className="hidden text-white/60 sm:inline">AI Customer Acquisition</span>
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
          <Button as="a" href="#demo" variant="secondary" className="hidden md:inline-flex">
            See it in action
          </Button>
          <Button as="a" href="#demo">
            Book a Demo
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
              <div className="grid gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

