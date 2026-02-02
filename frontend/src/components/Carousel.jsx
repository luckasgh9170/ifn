import React, { useRef } from 'react';

export default function Carousel({ items = [], renderItem }) {
  const ref = useRef(null);

  function scrollByAmount(amount) {
    if (!ref.current) return;
    ref.current.scrollBy({ left: amount, behavior: 'smooth' });
  }

  return (
    <div className="carousel">
      <div className="pillRow" style={{ marginBottom: 10, justifyContent: 'space-between' }}>
        <button className="btn btn--ghost" type="button" onClick={() => scrollByAmount(-420)} aria-label="Previous">
          ‹
        </button>
        <button className="btn btn--ghost" type="button" onClick={() => scrollByAmount(420)} aria-label="Next">
          ›
        </button>
      </div>
      <div ref={ref} className="carousel__track" role="region" aria-label="Carousel">
        {items.map((it, idx) => (
          <div className="carousel__item" key={idx}>
            {renderItem(it, idx)}
          </div>
        ))}
      </div>
    </div>
  );
}

