import { Bug, ArrowUpRight } from 'lucide-react';

const bounties = [
  { title: 'Hardware Hacking & IoT', link: 'https://www.linkedin.com/posts/sumit-bide-a52241293_cybersecurity-homelab-hardwarehacking-activity-7405898404616310784-Al4e' },
  { title: 'Red Teaming & AppSec', link: 'https://www.linkedin.com/posts/sumit-bide-a52241293_redteam-hacking-appsec-activity-7405465326357762048-FzIo' },
  { title: 'Logic Bug Disclosure', link: 'https://www.linkedin.com/posts/sumit-bide-a52241293_bugbounty-cybersecurity-logicbug-activity-7403932985844023296-knTS' },
  { title: 'Ethical Hacking Report', link: 'https://www.linkedin.com/posts/sumit-bide-a52241293_bugbounty-ethicalhacking-cybersecurity-activity-7403903878141943808-UYYA' },
];

const BugBounties = () => (
  <section className="glass-card p-6 md:p-8">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
        <Bug size={22} className="text-red-400" strokeWidth={2} />
      </div>
      <div>
        <h3 className="font-black text-xl uppercase">Bug Bounty Hall of Fame</h3>
        <p className="text-sm font-mono text-white/40">Vulnerability Disclosures</p>
      </div>
    </div>
    <div className="grid gap-3">
      {bounties.map((bug, i) => (
        <a
          key={i}
          href={bug.link}
          target="_blank"
          rel="noreferrer"
          className="glass rounded-xl p-4 flex items-center justify-between group glass-hover"
        >
          <span className="font-mono font-bold text-sm">{bug.title}</span>
          <ArrowUpRight
            size={18}
            className="text-white/30 group-hover:text-cyan-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      ))}
    </div>
  </section>
);

export default BugBounties;
