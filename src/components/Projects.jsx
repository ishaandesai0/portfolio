import React from 'react';
import './Projects.css';
import { projects, inProgress } from '../data/projects';

function TechList({ tech }) {
  return (
    <ul className="tech-list" aria-label="Technologies">
      {tech.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-header">
                <h3>{p.title}</h3>
                {p.badge && <span className="badge">{p.badge}</span>}
              </div>
              <p>{p.description}</p>
              <TechList tech={p.tech} />
              {p.link && (
                <a
                  className="project-link"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.linkLabel || 'View on GitHub'} →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="in-progress" id="building">
        <h2>Currently Building</h2>
        <div className="in-progress-list">
          {inProgress.map((p) => (
            <article className="in-progress-card" key={p.title}>
              <div className="project-header">
                <h3>{p.title}</h3>
                <span className="badge badge-wip">In progress</span>
              </div>
              <p>{p.description}</p>
              <TechList tech={p.tech} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
