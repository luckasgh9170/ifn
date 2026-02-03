import React from 'react';
import Container from '../components/Container.jsx';
import { useLang } from '../i18n/LangProvider.jsx';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/10 bg-ink-950/60 py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-purpleGlow-400 shadow-[0_0_18px_rgba(167,139,250,0.8)]" aria-hidden="true" />
              </span>
              <div>
                <div className="font-semibold">Sellerbot</div>
                <div className="text-sm text-white/60">{t('brand.byline')}</div>
              </div>
            </div>
            <div className="mt-3 max-w-md text-sm text-white/60">{t('footer.about')}</div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-white/70 sm:grid-cols-3">
            <a className="rounded-lg px-2 py-1 hover:bg-white/5 hover:text-white" href="#features">
              {t('nav.features')}
            </a>
            <a className="rounded-lg px-2 py-1 hover:bg-white/5 hover:text-white" href="#how">
              {t('nav.how')}
            </a>
            <a className="rounded-lg px-2 py-1 hover:bg-white/5 hover:text-white" href="#pricing">
              {t('nav.plans')}
            </a>
            <a className="rounded-lg px-2 py-1 hover:bg-white/5 hover:text-white" href="#faq">
              {t('nav.faq')}
            </a>
            <a className="rounded-lg px-2 py-1 hover:bg-white/5 hover:text-white" href="#demo">
              {t('nav.demo')}
            </a>
            <a className="rounded-lg px-2 py-1 hover:bg-white/5 hover:text-white" href="https://ifncompany.ir/" target="_blank" rel="noreferrer">
              ifncompany.ir
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} IFN. {t('footer.rights')}</div>
          <div className="flex items-center gap-3">
            <span>Privacy</span>
            <span aria-hidden="true">•</span>
            <span>Terms</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
