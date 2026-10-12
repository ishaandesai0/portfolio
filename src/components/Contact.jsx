import React from 'react';
import './Contact.css';

const RESUME_PATH = `${process.env.PUBLIC_URL}/Ishaan_Desai_Resume.pdf`;

const links = [
  { label: 'Email', value: 'desai.is@northeastern.edu', href: 'mailto:desai.is@northeastern.edu' },
  { label: 'LinkedIn', value: 'linkedin.com/in/idesai03', href: 'https://www.linkedin.com/in/idesai03', external: true },
  { label: 'GitHub', value: 'github.com/ishaandesai0', href: 'https://github.com/ishaandesai0', external: true },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p className="contact-intro">
        The fastest way to reach me is email.
      </p>
      <ul className="contact-links">
        {links.map((l) => (
          <li key={l.label}>
            <span className="contact-label">{l.label}</span>
            <a
              href={l.href}
              {...(l.external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {l.value}
            </a>
          </li>
        ))}
      </ul>
      <div className="resume-actions">
        <a className="cta-button" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
        <a className="cta-button cta-secondary" href={RESUME_PATH} download>
          Download PDF
        </a>
      </div>
    </section>
  );
}

export default Contact;
