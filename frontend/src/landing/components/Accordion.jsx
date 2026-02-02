import React, { useId, useState } from 'react';

export default function Accordion({ items }) {
  const baseId = useId();
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        const btnId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;
        return (
          <div key={btnId} className="glass rounded-2xl">
            <button
              id={btnId}
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen((s) => (s === idx ? -1 : idx))}
            >
              <span className="text-sm font-semibold text-white">{it.q}</span>
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen ? (
              <div id={panelId} role="region" aria-labelledby={btnId} className="px-5 pb-5 text-sm leading-relaxed text-white/70">
                {it.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

