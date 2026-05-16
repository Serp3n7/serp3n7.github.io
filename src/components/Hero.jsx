import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('sumitmpatil19@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-cyan-400 border border-cyan-400/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-glow" />
              SECURE UPLINK ACTIVE
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
              <span className="block">SECURING THE</span>
              <span className="text-gradient">DIGITAL</span>
              <span className="block">FRONTIER</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Self-driven security researcher passionate about{' '}
              <span className="text-cyan-400 font-semibold">offensive security</span> and{' '}
              <span className="text-cyan-400 font-semibold">infrastructure hardening</span>.
              Building systems to break them—and fix them.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={copyEmail} className="btn-primary flex items-center gap-2">
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? 'COPIED!' : 'COPY EMAIL'}
              </button>
              <a href="#work" className="btn-glass flex items-center gap-2 group">
                VIEW WORK
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm font-mono text-white/40">
              <span className="flex items-center gap-2">
                <span className="status-dot bg-cyan-400" />
                OPEN TO WORK
              </span>
              <span className="w-px h-4 bg-white/10" />
              <span>2+ YEARS EXPERIENCE</span>
              <span className="w-px h-4 bg-white/10" />
              <span>15+ BUG BOUNTIES</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-3xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl glass overflow-hidden">
                <img
                  src="/portrait.png"
                  alt="Sumit Bide - Cybersecurity Analyst & Penetration Tester"
                  className="w-full h-full object-cover opacity-90"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
                  <span className="text-xs font-mono font-bold text-green-400">@SERP3N7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
