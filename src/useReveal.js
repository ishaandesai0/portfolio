import { useLayoutEffect } from 'react';

// Fades `.reveal` sections in as they enter the viewport. Content stays
// visible by default: it is only hidden once `reveal-ready` is set on <html>,
// which happens here and only when IntersectionObserver exists and the
// viewer hasn't asked for reduced motion.
export default function useReveal() {
  // Layout effect, so the hidden state is applied before first paint and
  // sections already on screen fade in rather than flashing.
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || reduceMotion) return undefined;

    const root = document.documentElement;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      // Threshold 0 rather than a ratio: a section taller than the viewport
      // divided by the ratio (Projects on a landscape phone) would never fire.
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    root.classList.add('reveal-ready');

    return () => {
      observer.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, []);
}
