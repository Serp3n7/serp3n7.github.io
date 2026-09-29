import { Download, ArrowUpRight } from '@phosphor-icons/react';

const socials = [
  { label: 'GitHub', href: 'https://github.com/Serp3n7' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sumit-bide-a52241293' },
  { label: 'Email', href: 'mailto:sumitmpatil19@gmail.com' },
];

const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="mx-auto max-w-content px-4 md:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-heading text-3xl font-black uppercase tracking-tight md:text-5xl">
            Building systems to break them. Then fixing them.
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              I'm a cybersecurity analyst and penetration tester based in
              Dombivli, Maharashtra. My work sits at the boundary of offensive
              and defensive security: finding how a system can be compromised,
              exploiting it in a controlled way, and using what I learn to make
              the system harder to break.
            </p>
            <p>
              I've shipped custom kernels for Kali NetHunter and built
              enterprise-grade home labs with segregated networks for SIEM
              simulations. I report vulnerabilities to organisations, with
              reproduction steps and remediation, instead of leaving them open.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
              Elsewhere
            </h3>

            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="row-interactive group"
                  >
                    <span className="font-mono text-sm">{s.label}</span>
                    <span className="icon-island" aria-hidden="true">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="/Sumit_M_Bide_resume.pdf"
                  download
                  className="btn btn-primary group w-full justify-between"
                >
                  <span>Download résumé</span>
                  <span className="icon-island" aria-hidden="true">
                    <Download size={16} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;