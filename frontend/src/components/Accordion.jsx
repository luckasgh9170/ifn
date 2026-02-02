import React, { useId, useState } from 'react';

export default function Accordion({ items = [], ariaLabel }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion" aria-label={ariaLabel}>
      {items.map((it, idx) => {
        const btnId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;
        const isOpen = openIndex === idx;
        return (
          <div key={btnId} className="card accordion__item">
            <button
              id={btnId}
              className="accordion__btn"
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
            >
              <span className="accordion__q">{it.q}</span>
              <span className="accordion__icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen ? (
              <div id={panelId} role="region" aria-labelledby={btnId} className="accordion__a">
                {it.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

