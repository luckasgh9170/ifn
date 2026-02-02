import React, { useEffect, useMemo, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function usePrefersReducedMotion() {
  const ref = useRef(false);
  useEffect(() => {
    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!media) return;
    ref.current = media.matches;
    const onChange = () => (ref.current = media.matches);
    media.addEventListener?.('change', onChange);
    return () => media.removeEventListener?.('change', onChange);
  }, []);
  return ref;
}

function Shape({ kind, className, style, idle }) {
  const common =
    'absolute will-change-transform select-none pointer-events-none opacity-90 mix-blend-screen';

  const baseStyle =
    kind === 'orb'
      ? 'rounded-full bg-gradient-to-br from-purpleGlow-300/70 via-purpleGlow-400/40 to-white/10 shadow-[0_0_0_1px_rgba(196,181,253,0.14),0_30px_90px_rgba(0,0,0,0.6)]'
      : kind === 'cube'
        ? 'rounded-2xl bg-gradient-to-br from-white/10 via-purpleGlow-400/25 to-purpleGlow-300/10 shadow-[0_0_0_1px_rgba(196,181,253,0.12),0_30px_90px_rgba(0,0,0,0.6)]'
        : 'rounded-[28px] bg-gradient-to-br from-purpleGlow-400/30 via-white/10 to-purpleGlow-300/10 shadow-[0_0_0_1px_rgba(196,181,253,0.12),0_30px_90px_rgba(0,0,0,0.6)]';

  return (
    <motion.div
      className={`${common} ${baseStyle} ${className}`.trim()}
      style={style}
      animate={idle}
      transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-tr from-white/10 to-transparent" />
      <div className="absolute inset-0 rounded-[inherit] [mask-image:radial-gradient(circle_at_30%_30%,black,transparent_60%)] bg-white/25" />
    </motion.div>
  );
}

export default function FloatingIcons() {
  const reducedMotion = usePrefersReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 70, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 70, damping: 18, mass: 0.5 });

  const x = useTransform(sx, (v) => `${v}px`);
  const y = useTransform(sy, (v) => `${v}px`);

  useEffect(() => {
    if (reducedMotion.current) return;
    let raf = 0;
    function onMove(e) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;
        mx.set(dx * 18);
        my.set(dy * 12);
      });
    }
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, [mx, my, reducedMotion]);

  const shapes = useMemo(
    () => [
      {
        kind: 'orb',
        className: 'h-28 w-28 sm:h-32 sm:w-32',
        style: { top: '12%', left: '8%', x, y },
        idle: { y: [0, -10, 0], rotate: [0, 8, 0] }
      },
      {
        kind: 'cube',
        className: 'h-24 w-24 sm:h-28 sm:w-28 rotate-12',
        style: { top: '14%', right: '10%', x, y },
        idle: { y: [0, 12, 0], rotate: [12, -10, 12] }
      },
      {
        kind: 'node',
        className: 'h-36 w-36 sm:h-40 sm:w-40',
        style: { bottom: '10%', left: '18%', x, y },
        idle: { y: [0, 10, 0], rotate: [0, -6, 0] }
      },
      {
        kind: 'orb',
        className: 'h-40 w-40 sm:h-44 sm:w-44',
        style: { bottom: '8%', right: '16%', x, y },
        idle: { y: [0, -12, 0], rotate: [0, 10, 0] }
      }
    ],
    [x, y]
  );

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_-10%,rgba(167,139,250,0.22),transparent_60%),radial-gradient(900px_600px_at_80%_0%,rgba(196,181,253,0.16),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.22] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.10)_1px,transparent_0)_0_0/28px_28px]" />
      {shapes.map((s, idx) => (
        <Shape key={idx} kind={s.kind} className={s.className} style={s.style} idle={reducedMotion.current ? {} : s.idle} />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}

