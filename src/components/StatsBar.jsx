import { useState, useEffect, useRef } from 'react';
import { Shield, Bug, FolderKanban, Wrench } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: 2, suffix: '+', icon: Shield, color: 'text-cyan-400' },
  { label: 'Bug Bounties', value: 15, suffix: '+', icon: Bug, color: 'text-red-400' },
  { label: 'Projects Built', value: 4, suffix: '', icon: FolderKanban, color: 'text-purple-400' },
  { label: 'Tools Mastered', value: 6, suffix: '+', icon: Wrench, color: 'text-yellow-400' },
];

const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          const duration = 1500;
          const step = Math.max(1, Math.floor(value / (duration / 16)));
          const timer = setInterval(() => {
            setCount((prev) => {
              const next = prev + step;
              if (next >= value) {
                clearInterval(timer);
                return value;
              }
              return next;
            });
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsBar = () => (
  <section id="stats" className="py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative group"
          >
            <div className="relative glass p-6 md:p-8 text-center border-[3px] border-black" style={{ borderRadius: 0, boxShadow: '4px 4px 0 0 #000' }}>
              <div className={`w-10 h-10 mx-auto flex items-center justify-center mb-4 border-2 border-black ${stat.color}`} style={{ borderRadius: 0, boxShadow: '2px 2px 0 0 #000' }}>
                <stat.icon size={20} strokeWidth={1.5} />
              </div>
              <div className={`text-3xl md:text-4xl font-black ${stat.color}`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs md:text-sm font-mono text-white/40 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
