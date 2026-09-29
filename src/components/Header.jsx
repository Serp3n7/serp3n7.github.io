import { useState, useEffect } from 'react';
import { Logo } from './Logo';

/**
 * Nav targets. Every id below must exist exactly once in the document.
 * Previously "about" and "work" were each duplicated, so getElementById
 * always resolved to the first match and the scroll spy highlighted the
 * wrong section.
 */
const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
];

/**
 * Floating glass pill, detached from the top edge. Desktop renders the links
 * in the pill; mobile swaps them for a hamburger that morphs into an X and
 * opens a full-screen staggered overlay. All scroll tracking rides on
 * IntersectionObserver - there is no window scroll listener.
 */
const Header = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Sentinel at the document top toggles the pill's depth once, via
  // IntersectionObserver, instead of running a handler on every scroll frame.
  useEffect(() => {
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '0';
    sentinel.style.height = '1px';
    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  useEffect(() => {
    const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    );
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  // Escape closes the overlay; the body stops scrolling while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative z-10 mx-auto mt-4 flex max-w-content items-center justify-between px-4 md:mt-5 md:px-8">
        <Logo />

        <nav
          aria-label="Primary"
          className={`glass flex items-center gap-1 rounded-full p-1.5 transition-shadow duration-500 [transition-timing-function:var(--ease-out)] ${
            scrolled ? 'glass-lifted' : ''
          }`}
        >
          <ul className="hidden items-center md:flex">
            {SECTIONS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'page' : undefined}
                  className={`inline-block rounded-full px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider transition-[background-color,color,box-shadow] duration-300 [transition-timing-function:var(--ease-out)] ${
                    active === item.id
                      ? 'bg-raised text-body shadow-[inset_0_0_0_1px_var(--line)]'
                      : 'text-muted hover:text-body'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-raised md:hidden"
          >
            <span className="relative block h-2 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full bg-body transition-transform duration-500 [transition-timing-function:var(--ease-spring)] ${
                  open ? 'translate-y-[3px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-full bg-body transition-transform duration-500 [transition-timing-function:var(--ease-spring)] ${
                  open ? '-translate-y-[3px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-0 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="glass-strong absolute inset-0" />
          <nav
            aria-label="Mobile"
            className="relative flex h-full flex-col items-center justify-center gap-2 px-6"
          >
            {SECTIONS.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`entrance entrance-d${i + 1} py-2 font-heading text-4xl font-bold uppercase tracking-tight ${
                  active === item.id ? 'text-body' : 'text-muted'
                }`}
              >
                {item.label}
              </a>
            ))}
            <span className="entrance entrance-d4 mt-8 font-mono text-xs uppercase tracking-widest text-muted">
              Defence, reimagined.
            </span>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;