import { ArrowUpRight } from '@phosphor-icons/react';

const PROJECTS = [
  {
    title: 'Enterprise Home Lab',
    desc: 'Multi-purpose server on UNRAID using repurposed gaming hardware. Hosts Plex, SMB sharing, and segregated virtual networks for penetration testing and SIEM simulation.',
    tags: ['UNRAID', 'Docker', 'SIEM', 'Network segmentation'],
    href: 'https://github.com/Serp3n7',
  },
  {
    title: 'Kali NetHunter Kernel',
    desc: 'Contributed custom kernels and installers for the Redmi Note 4 (MIDO), unlocking advanced testing features on consumer mobile hardware.',
    tags: ['Kernel', 'Android', 'Kali', 'ARM'],
    href: 'https://github.com/Serp3n7',
  },
  {
    title: 'Secure Banking System',
    desc: 'Full-stack banking application built with a security-first approach, defending against SQL injection, XSS, and CSRF.',
    tags: ['SHA-256', 'JWT', 'CORS', 'SQLi protection'],
    href: 'https://github.com/Serp3n7/banking-system',
  },
  {
    title: 'Online Library System',
    desc: 'Secure management system in PHP and MySQL with strict input validation, role-based access control, and comprehensive authorization.',
    tags: ['PHP', 'MySQL', 'RBAC', 'Validation'],
    href: 'https://github.com/Serp3n7/library-management-system',
  },
];

/** One featured project, then three compact cells. Asymmetric, no empty tracks. */
const SPAN = ['md:col-span-6', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2'];

const Projects = () => (
  <section id="work" aria-labelledby="work-title">
    <div className="flex items-center gap-4">
      <p className="eyebrow" id="work-title">
        Selected work
      </p>
      <div className="rule flex-1" />
    </div>

    <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-6">
      {PROJECTS.map((project, i) => (
        <li key={project.title} className={SPAN[i]}>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group block h-full"
          >
            <div className="shell h-full">
              <div
                className={`shell-core flex h-full flex-col p-6 transition-transform duration-500 [transition-timing-function:var(--ease-spring)] group-hover:-translate-y-2 md:p-7 ${
                  i === 0 ? 'md:justify-between' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className={`font-heading font-bold tracking-tight ${
                      i === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="icon-island shrink-0 shadow-[inset_0_0_0_1px_var(--line-strong)] group-hover:bg-body group-hover:text-inverted"
                    aria-hidden="true"
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <p
                  className={`mt-4 text-sm leading-relaxed text-muted ${
                    i === 0 ? 'max-w-2xl md:text-base' : ''
                  }`}
                >
                  {project.desc}
                </p>

                <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-5 md:mt-8">
                  {project.tags.map((tag) => (
                    <li key={tag} className="font-mono text-xs text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;