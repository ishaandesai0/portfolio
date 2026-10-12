import React from 'react';
import './Projects.css';
import TechList from './TechList';
import { projects, inProgress } from '../data/projects';

function Projects() {
  return (
    <>
      <section className="projects reveal" id="projects">
        <h2 className="section-title"><span className="section-index" aria-hidden="true">03</span>Projects</h2>
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

      <section className="in-progress reveal" id="building">
        <h2 className="section-title section-title-wip"><span className="section-index" aria-hidden="true">04</span>Currently Building</h2>
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
