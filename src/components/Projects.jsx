import { Activity, Terminal, Lock, BookOpen } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise Home Lab',
    desc: 'Multi-purpose server environment on UNRAID using repurposed gaming hardware. Hosts Plex, SMB sharing, and segregated virtual networks for pentesting & SIEM simulations.',
    tags: ['UNRAID', 'Docker', 'SIEM', 'Network Seg'],
    icon: Activity,
    color: 'text-green-400',
    badge: 'HARDWARE',
    href: 'https://github.com/Serp3n7',
  },
  {
    title: 'Kali NetHunter Kernel Dev',
    desc: 'Contributed custom kernels and installers for REDMI NOTE 4 (MIDO). Enabled advanced offensive security features on mobile hardware.',
    tags: ['Kernel', 'Android', 'Kali', 'ARM'],
    icon: Terminal,
    color: 'text-purple-400',
    badge: 'OPEN SOURCE',
    href: 'https://github.com/Serp3n7',
  },
  {
    title: 'Secure Banking System',
    desc: 'Full-stack banking app with "security first" approach. Robust controls against web vulnerabilities including SQLi, XSS, and CSRF.',
    tags: ['SHA-256', 'JWT Auth', 'CORS', 'SQLi Prot'],
    icon: Lock,
    color: 'text-yellow-400',
    badge: 'FULL STACK',
    href: 'https://github.com/Serp3n7/banking-system',
  },
  {
    title: 'Online Library System',
    desc: 'Secure management system with PHP & MySQL. Features strict input validation, RBAC, and comprehensive access controls.',
    tags: ['PHP', 'MySQL', 'RBAC', 'Validation'],
    icon: BookOpen,
    color: 'text-blue-400',
    badge: 'WEB APP',
    href: 'https://github.com/Serp3n7/library-management-system',
  },
];

const Projects = () => (
  <section id="work" className="space-y-6">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full" />
      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
        Featured Projects
      </h2>
    </div>

    <div className="grid gap-6">
      {projects.map((project, i) => (
        <a
          key={i}
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="glass-card p-6 md:p-8 block group"
        >
          <div className="flex items-start justify-between mb-6">
            <div className={`w-14 h-14 rounded-xl glass flex items-center justify-center ${project.color}`}>
              <project.icon size={24} strokeWidth={1.5} />
            </div>
            <span className="tag text-xs">{project.badge}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-white/60 leading-relaxed mb-5">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag text-xs">{tag}</span>
            ))}
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
