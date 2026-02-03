import { useEffect } from 'react';

export default function useTilt() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('[data-tilt]'));
    if (!cards.length) return;

    const handle = (e) => {
      const { clientX, clientY } = e;
      for (const el of cards) {
        const rect = el.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width - 0.5;
        const y = (clientY - rect.top) / rect.height - 0.5;
        const rx = Math.max(Math.min(y * -8, 8), -8);
        const ry = Math.max(Math.min(x * 10, 10), -10);
        el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      }
    };

    const reset = () => {
      for (const el of cards) {
        el.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
      }
    };

    window.addEventListener('mousemove', handle, { passive: true });
    window.addEventListener('mouseleave', reset);

    return () => {
      window.removeEventListener('mousemove', handle);
      window.removeEventListener('mouseleave', reset);
    };
  }, []);
}

