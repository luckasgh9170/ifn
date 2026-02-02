import React from 'react';

export function Button({ as: As = 'button', className = '', variant = 'primary', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-purpleGlow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950';
  const variants = {
    primary:
      'bg-gradient-to-b from-purpleGlow-400 to-[#7C3AED] text-white shadow-[0_14px_40px_rgba(167,139,250,0.25)] hover:brightness-110 active:brightness-95',
    secondary: 'glass text-white hover:bg-white/10',
    ghost: 'text-white/80 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
  };

  return <As className={`${base} ${variants[variant]} ${className}`.trim()} {...props} />;
}

