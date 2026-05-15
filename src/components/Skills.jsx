import { Crosshair, Shield } from 'lucide-react';

const SkillBadge = ({ label }) => (
  <span className="tag">{label}</span>
);

const SkillCard = (props) => {
  const IconComponent = props.icon;
  return (
  <div className="glass-card p-6 space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
        <IconComponent size={18} className={props.color} />
      </div>
      <h3 className="font-bold text-sm uppercase tracking-wider">{props.title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {props.skills.map((s) => (
        <SkillBadge key={s} label={s} />
      ))}
    </div>
  </div>
);
};

const Skills = () => (
  <section id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <SkillCard
      title="Red Team Ops"
      icon={Crosshair}
      color="text-red-400"
      skills={['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'OWASP', 'Social Eng']}
    />
    <SkillCard
      title="Blue Team & Infra"
      icon={Shield}
      color="text-cyan-400"
      skills={['Linux Hardening', 'Splunk SIEM', 'Docker', 'UNRAID', 'Bash', 'Network Sec']}
    />
  </section>
);

export default Skills;
