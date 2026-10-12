import React from 'react';
import './Skills.css';
import TechList from './TechList';
import { skills } from '../data/skills';

function Skills() {
  return (
    <section className="skills reveal" id="skills">
      <h2 className="section-title"><span className="section-index" aria-hidden="true">02</span>Skills</h2>
      <dl className="skills-list">
        {skills.map((s) => (
          <div className="skills-row" key={s.category}>
            <dt>{s.category}</dt>
            <dd>
              <TechList tech={s.items} label={s.category} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default Skills;
