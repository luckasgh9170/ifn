import React from 'react';

export default function SectionHeading({ title, subtitle, align = 'start' }) {
  return (
    <div className="sectionHead" style={{ textAlign: align }}>
      <h2>{title}</h2>
      {subtitle ? <p className="muted">{subtitle}</p> : null}
    </div>
  );
}

