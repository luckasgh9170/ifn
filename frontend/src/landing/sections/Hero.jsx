import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container.jsx';
import Badge from '../components/Badge.jsx';
import { Button } from '../components/Button.jsx';
import FloatingIcons from '../components/FloatingIcons.jsx';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <FloatingIcons />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Badge>AI chatbot • Prospecting • Qualification • Global outreach</Badge>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              An AI chatbot that finds customers, qualifies leads, and grows sales globally.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              IFN automates customer acquisition across the platforms where buyers actually respond — website chat, email, WhatsApp,
              Instagram, LinkedIn, and more. It engages prospects with personalized conversations, asks the right questions, and routes
              only qualified opportunities to your team.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button as="a" href="#demo">
                Book a Demo
              </Button>
              <Button as="a" href="#how" variant="secondary">
                See How It Works
              </Button>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purpleGlow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                Explore features <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { k: 'Conversion lift', v: 'More qualified conversations' },
                { k: 'Speed to lead', v: 'Instant replies, 24/7' },
                { k: 'Measurable ROI', v: 'Attribution + analytics' }
              ].map((x, idx) => (
                <motion.div
                  key={x.k}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: 0.06 * idx }}
                  className="glass rounded-2xl p-4"
                >
                  <div className="text-sm font-semibold text-white">{x.k}</div>
                  <div className="mt-1 text-sm text-white/70">{x.v}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass glow-ring rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">Live AI Qualification</div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" aria-hidden="true" />
                  Online
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <ChatLine who="Visitor" text="We’re exploring a new acquisition channel. Can you help?" />
                <ChatLine who="IFN AI" text="Absolutely. What’s your product, ideal customer, and target region?" ai />
                <ChatLine who="Visitor" text="B2B SaaS, mid-market. North America & GCC." />
                <ChatLine
                  who="IFN AI"
                  text="Great. I’ll build a multi-platform outreach plan, qualify by budget + timeline, and book demos automatically."
                  ai
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Metric label="Avg. response time" value="0.6s" />
                <Metric label="Qualification rate" value="42%" />
                <Metric label="Meetings booked" value="+31%" />
                <Metric label="Cost per lead" value="−18%" />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purpleGlow-400/25 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -top-10 -right-12 h-56 w-56 rounded-full bg-purpleGlow-300/20 blur-3xl" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ChatLine({ who, text, ai }) {
  return (
    <div className={`flex ${ai ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[90%] rounded-2xl border border-white/10 px-4 py-3 ${ai ? 'bg-white/5' : 'bg-purpleGlow-400/10'}`}>
        <div className="text-xs font-semibold text-white/70">{who}</div>
        <div className="mt-1 text-sm leading-relaxed text-white">{text}</div>
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/70">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

