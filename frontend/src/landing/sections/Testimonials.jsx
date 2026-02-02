import React from 'react';
import Section from '../components/Section.jsx';

const testimonials = [
  {
    quote:
      'We replaced manual lead qualification with IFN. Our reps now spend their time on real opportunities — not dead-end chats.',
    name: 'Head of Growth',
    company: 'B2B SaaS'
  },
  {
    quote:
      'The multi-platform outreach is a game-changer. We can finally scale personalized conversations without hiring a bigger team.',
    name: 'Founder',
    company: 'Agency'
  },
  {
    quote:
      'The analytics made it easy to justify spend. We see which segments convert and double down with confidence.',
    name: 'Marketing Lead',
    company: 'E-commerce'
  }
];

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Proof"
      title="Trusted to improve conversion and ROI"
      subtitle="Teams use IFN to move faster, respond instantly, and create a measurable acquisition engine."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.quote} className="glass rounded-3xl p-6">
            <blockquote className="text-sm leading-relaxed text-white/80">“{t.quote}”</blockquote>
            <figcaption className="mt-5 text-sm text-white/70">
              <span className="font-semibold text-white">{t.name}</span> · {t.company}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

