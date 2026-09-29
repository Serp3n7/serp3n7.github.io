import { useState, useEffect, useRef } from 'react';

const stats = [
  { label: 'Years experience', value: 2, suffix: '+' },
  { label: 'Bug bounties', value: 15, suffix: '+' },
  { label: 'Projects built', value: 4, suffix: '' },
  { label: 'Tools mastered', value: 6, suffix: '+' },
];

/**
 * Counts up when the row first scrolls into view. Collapses to the final
 * value immediately under prefers-reduced-motion.
 */
const Counter = ({ value, suffix }) => {
  const reduceMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [display, setDisplay] = useState(() => (reduceMotion() ? value : 0));
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    if (reduceMotion() || done.current || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;
        done.current = true;

        const duration = 1400;
        const step = Math.max(1, Math.floor(value / (duration / 16)));
        const timer = setInterval(() => {
          setDisplay((prev) => {
            const next = prev + step;
            if (next >= value) {
              clearInterval(timer);
              return value;
            }
            return next;
          });
        }, 16);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

/**
 * A single machined band: four readings, hairline-divided, no icons.
 */
const StatsBar = () => (
  <section id="stats" aria-label="Career stats">
    <div className="mx-auto max-w-content px-4 md:px-8">
      <div className="shell">
        <div className="shell-core overflow-hidden">
          <div className="grid grid-cols-2 divide-x divide-y divide-line md:grid-cols-4 md:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5 px-6 py-7">
                <span className="font-heading text-3xl font-black md:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsBar;