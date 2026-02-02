import React from 'react';
import { motion } from 'framer-motion';

export function BasicCard({ className = '', children }) {
  return <div className={`card cardPad ${className}`.trim()}>{children}</div>;
}

export function HoverCard({ className = '', children }) {
  return (
    <motion.div whileHover={{ y: -3 }} className={`card cardPad hoverCard ${className}`.trim()}>
      {children}
    </motion.div>
  );
}

export function FlipCard({ title, front, back, icon = '★' }) {
  return (
    <div className="flip" tabIndex={0} aria-label={title}>
      <div className="flip__inner">
        <div className="flip__face">
          <div className="pillRow">
            <span className="pill" aria-hidden="true">
              {icon}
            </span>
            <span className="pill">{title}</span>
          </div>
          <div style={{ fontWeight: 900, fontSize: '1.05rem' }}>{front}</div>
          <div className="muted">{'↻'}</div>
        </div>
        <div className="flip__face flip__back">
          <div className="pillRow">
            <span className="pill" aria-hidden="true">
              {icon}
            </span>
            <span className="pill">{title}</span>
          </div>
          <div className="muted" style={{ fontWeight: 700 }}>
            {back}
          </div>
        </div>
      </div>
    </div>
  );
}

