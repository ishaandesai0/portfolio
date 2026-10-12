import React from 'react';
import './TechList.css';

function TechList({ tech, label = 'Technologies' }) {
  return (
    <ul className="tech-list" aria-label={label}>
      {tech.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export default TechList;
