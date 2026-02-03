import React from 'react';
import Section from '../components/Section.jsx';
import Accordion from '../components/Accordion.jsx';
import { useLang } from '../i18n/LangProvider.jsx';

export default function FAQ() {
  const { dict, t } = useLang();

  return (
    <Section id="faq" eyebrow={t('faq.eyebrow')} title={t('faq.title')} subtitle={t('faq.subtitle')}>
      <div className="mx-auto max-w-3xl tilt-root">
        <div className="card-3d rounded-3xl" data-tilt>
          <Accordion items={dict.faq.items} />
        </div>
      </div>
    </Section>
  );
}
