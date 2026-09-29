import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal wrapper. Adds `is-visible` once the element enters the
 * viewport, driving the `.reveal` transition in index.css. No per-frame
 * listeners; plain IntersectionObserver. Under prefers-reduced-motion the
 * CSS override renders content without animation and the class is applied
 * immediately.
 */
export const Reveal = ({ children, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};