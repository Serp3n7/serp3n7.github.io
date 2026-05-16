import { MapPin, Award, BookOpen, Mail, Download } from 'lucide-react';

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ProfileCard = () => (
  <div className="glass-card p-6 md:p-8 space-y-6">
    <div className="text-center">
      <div className="w-28 h-28 mx-auto rounded-2xl glass overflow-hidden mb-4 ring-2 ring-cyan-400/20">
        <img
          src="/me.png"
          alt="Sumit Bide"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <h2 className="text-2xl font-black">Sumit Bide</h2>
      <p className="text-sm font-mono text-cyan-400 font-bold mt-1">@SERP3N7</p>

      <div className="flex justify-center gap-3 mt-4">
        <a href="https://github.com/Serp3n7" target="_blank" rel="noreferrer" className="glass rounded-xl p-3 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(0,255,240,0.1)] transition-all duration-300">
          <GitHubIcon />
        </a>
        <a href="https://linkedin.com/in/sumit-bide-a52241293" target="_blank" rel="noreferrer" className="glass rounded-xl p-3 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(0,102,255,0.1)] transition-all duration-300">
          <LinkedinIcon />
        </a>
        <a href="mailto:sumitmpatil19@gmail.com" className="glass rounded-xl p-3 hover:border-red-400/30 hover:shadow-[0_0_20px_rgba(255,56,100,0.1)] transition-all duration-300">
          <Mail size={18} />
        </a>
      </div>
    </div>

    <div className="text-center text-sm font-mono text-white/40 space-y-1">
      <p className="flex items-center justify-center gap-1">
        <MapPin size={12} /> DOMBIVLI, MH
      </p>
      <p className="flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
        OPEN TO WORK
      </p>
    </div>

    <a
      href="/Sumit-M.-Bide-Resume.pdf"
      download
      className="btn-primary w-full flex items-center justify-center gap-2"
    >
      <Download size={16} /> DOWNLOAD RESUME
    </a>

    <div className="neon-divider" />

    <div className="space-y-4">
      <h3 className="font-black text-sm uppercase tracking-widest text-white/40 flex items-center gap-2">
        <Award size={14} /> CREDENTIALS
      </h3>

      <div className="glass rounded-xl p-4 space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg glass flex items-center justify-center flex-shrink-0">
            <Award size={18} className="text-cyan-400" />
          </div>
          <div>
            <h4 className="font-bold text-sm">CISCO CYBERSECURITY</h4>
            <p className="text-xs font-mono text-white/40">Risk Management & Network Defense</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg glass flex items-center justify-center flex-shrink-0">
            <BookOpen size={18} className="text-blue-400" />
          </div>
          <div>
            <h4 className="font-bold text-sm">DIPLOMA IN COMP. ENG</h4>
            <p className="text-xs font-mono text-white/40">Vasantrao More Polytechnic</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileCard;
