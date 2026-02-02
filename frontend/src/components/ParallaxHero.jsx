import React, { useEffect, useRef } from 'react';

export default function ParallaxHero({ children, stats }) {
  const bgRef = useRef(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    function onScroll() {
      const y = window.scrollY || 0;
      el.style.transform = `translate3d(0, ${Math.min(24, y * 0.06)}px, 0)`;
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>{children}</div>
        <div className="card parallaxCard">
          <div className="parallaxCard__bg" ref={bgRef} aria-hidden="true" />
          <div className="parallaxCard__content">
            <div className="statGrid">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <div className="stat__label">{s.label}</div>
                  <div className="stat__value">{s.value}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14 }} className="muted">
              {new Date().toISOString().slice(0, 10)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

