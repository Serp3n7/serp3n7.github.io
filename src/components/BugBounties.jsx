import { ArrowUpRight } from '@phosphor-icons/react';

const bounties = [
  {
    title: 'Hardware hacking & IoT',
    link: 'https://www.linkedin.com/posts/sumit-bide-a52241293_cybersecurity-homelab-hardwarehacking-activity-7405898404616310784-Al4e',
  },
  {
    title: 'Red teaming & AppSec',
    link: 'https://www.linkedin.com/posts/sumit-bide-a52241293_redteam-hacking-appsec-activity-7405465326357762048-FzIo',
  },
  {
    title: 'Logic bug disclosure',
    link: 'https://www.linkedin.com/posts/sumit-bide-a52241293_bugbounty-cybersecurity-logicbug-activity-7403932985844023296-knTS',
  },
  {
    title: 'Ethical hacking report',
    link: 'https://www.linkedin.com/posts/sumit-bide-a52241293_bugbounty-ethicalhacking-cybersecurity-activity-7403903878141943808-UYYA',
  },
];

const BugBounties = () => (
  <section aria-labelledby="bounties-title">
    <h2
      id="bounties-title"
      className="font-heading text-xl font-bold uppercase tracking-tight md:text-2xl"
    >
      Disclosure log
    </h2>

    <ul className="mt-5 space-y-2.5">
      {bounties.map((bug) => (
        <li key={bug.link}>
          <a
            href={bug.link}
            target="_blank"
            rel="noreferrer"
            className="row-interactive group"
          >
            <span className="font-mono text-sm">{bug.title}</span>
            <span className="icon-island" aria-hidden="true">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default BugBounties;