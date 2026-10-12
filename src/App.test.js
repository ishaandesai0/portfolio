import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders name and tagline', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'Ishaan Desai' })).toBeInTheDocument();
  expect(screen.getByText(/Systems, ML, and High-Performance Computing/)).toBeInTheDocument();
});

test('every nav link targets a section that exists', () => {
  const { container } = render(<App />);
  const nav = screen.getByRole('navigation', { name: 'Main' });
  const hrefs = within(nav).getAllByRole('link').map((a) => a.getAttribute('href'));
  expect(hrefs).toContain('#projects');
  hrefs.forEach((href) => {
    expect(container.querySelector(href)).not.toBeNull();
  });
});

test('View My Work points at the projects section', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'View My Work' })).toHaveAttribute('href', '#projects');
});

test('lists four finished projects and two in progress, separately', () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll('#projects article')).toHaveLength(4);
  expect(container.querySelectorAll('#building article')).toHaveLength(2);
  expect(within(container.querySelector('#projects')).queryByText('FPL Optimization Pipeline')).toBeNull();
});

test('swarm robotics is labelled as a contribution, panoramic has no link', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /View repo \(contributor\)/ })).toHaveAttribute(
    'href',
    'https://github.com/jackgladowsky/swarm_robots'
  );
  const panoramic = screen.getByText(/Panoramic Scene Reconstruction/).closest('article');
  expect(within(panoramic).queryByRole('link')).toBeNull();
});

test('contact links and resume', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'desai.is@northeastern.edu' })).toHaveAttribute(
    'href',
    'mailto:desai.is@northeastern.edu'
  );
  expect(screen.getByRole('link', { name: /linkedin/ })).toHaveAttribute('href', 'https://www.linkedin.com/in/idesai03');
  expect(screen.getByRole('link', { name: /github\.com\/ishaandesai0/ })).toHaveAttribute('href', 'https://github.com/ishaandesai0');
  expect(screen.getByRole('link', { name: 'Download PDF' })).toHaveAttribute(
    'href',
    expect.stringMatching(/Ishaan_Desai_Resume\.pdf$/)
  );
});

test('mobile menu toggle opens and closes', async () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: 'Open menu' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await userEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await userEvent.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Projects' }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});
