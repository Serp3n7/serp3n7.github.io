import { ArrowUpRight } from '@phosphor-icons/react';

const links = [
  { label: 'GitHub', href: 'https://github.com/Serp3n7' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sumit-bide-a52241293' },
  { label: 'Email', href: 'mailto:sumitmpatil19@gmail.com' },
];

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-content flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-8 md:py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Defence, reimagined.
        <span aria-hidden="true" className="mx-3 text-line">
          /
        </span>
        © 2026 SERP3N7
      </p>

      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="link-underline group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider"
            >
              {link.label}
              <ArrowUpRight
                size={12}
                className="text-muted transition-transform duration-500 [transition-timing-function:var(--ease-spring)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;