import React from 'react';
import Section from '../components/Section.jsx';
import Accordion from '../components/Accordion.jsx';

const faqs = [
  {
    q: 'Is this just a website chat widget?',
    a: 'No. IFN is designed as a full acquisition workflow: prospecting, outreach, qualification, routing, and measurement. Website chat is one channel — not the whole system.'
  },
  {
    q: 'How does it qualify leads?',
    a: 'You define qualification rules (budget, timeline, region, requirements). The chatbot asks the right questions, captures structured answers, and routes qualified leads to your preferred system.'
  },
  {
    q: 'Does it support multiple languages?',
    a: 'Yes. You can deploy multilingual playbooks and enforce brand tone per region. The demo page is English-first, but the system is designed for global outreach.'
  },
  {
    q: 'Can I measure ROI and attribution?',
    a: 'Yes. IFN tracks conversation outcomes, channel performance, qualification rate, meetings booked, and pipeline impact. You can export or integrate into your analytics stack.'
  },
  {
    q: 'Is it safe and compliant?',
    a: 'You control guardrails: what data is collected, what can be said, and when to escalate to a human. Conversation logs and data redaction can be configured based on your requirements.'
  }
];

export default function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions teams ask before they scale"
      subtitle="Clear answers to help you evaluate IFN with confidence."
    >
      <div className="mx-auto max-w-3xl">
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}

