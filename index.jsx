import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, Terminal, Server, Cpu, Globe, Lock, 
  Wifi, Database, Activity, Mail, 
  Github, Linkedin, Layers, Radio, Award, Book
} from 'lucide-react';

const PortfolioV3 = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position (-1 to 1) for 3D effects
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3D Liquid Glass Card Component
  const HolographicCard = ({ children, className = "" }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glow, setGlow] = useState({ x: 50, y: 50 });

    const handleMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5; // Subtle rotation for glass feel
      const rotateY = ((x - centerX) / centerX) * 5;

      setRotation({ x: rotateX, y: rotateY });
      setGlow({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    };

    const handleLeave = () => {
      setRotation({ x: 0, y: 0 });
      setGlow({ x: 50, y: 50 });
    };

    return (
      <div 
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
        className={`relative transition-all duration-200 ease-out transform-gpu overflow-hidden ${className}`}
      >
        {/* Glass Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Specular Gloss Reflection */}
        <div 
          className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
            opacity: 0.1
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
      
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      {/* Liquid Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"
        />
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"
        />
        <div 
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"
        />
        {/* Deep Depth Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
          }}
        />
      </div>

      {/* Glass Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
        <div className="px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg tracking-wider">
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">◆</span>
            <span className="text-white/90">SERP3N7</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest text-white/60">
            {['PROFILE', 'SYSTEMS', 'CREDENTIALS', 'LOGS', 'UPLINK'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 px-6 max-w-7xl mx-auto space-y-32">
        
        {/* HERO */}
        <section id="profile" className="min-h-[70vh] flex flex-col justify-center relative">
          <div className="space-y-8 relative text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-cyan-300 text-xs font-mono tracking-widest shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              SYSTEM ONLINE
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 drop-shadow-2xl">
              SUMIT M. BIDE
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/80 max-w-2xl font-light leading-relaxed mx-auto md:mx-0">
              Constructing digital fortresses in the cloud. <br/>
              <span className="text-cyan-400 font-semibold drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Cybersecurity Analyst</span> & <span className="text-purple-400 font-semibold drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">Home Lab Architect</span>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
               <a href="#logs" className="px-8 py-4 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 backdrop-blur-md rounded-xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] flex items-center gap-2">
                 <Terminal size={18} />
                 View Operations
               </a>
               <a href="mailto:sumitmpatil19@gmail.com?subject=Portfolio Inquiry" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2">
                 <Mail size={18} />
                 Secure Comms
               </a>
            </div>
          </div>
        </section>

        {/* SKILLS / SYSTEMS */}
        <section id="systems">
          <div className="flex items-center gap-6 mb-12">
             <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
               System Arsenal
             </h2>
             <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Globe, color: "cyan", title: "Network Defense", 
                desc: "Packet analysis & traffic monitoring.",
                tools: ["Wireshark", "Nmap", "Suricata", "TCP/IP"]
              },
              { 
                icon: Shield, color: "purple", title: "Red Teaming", 
                desc: "Vulnerability assessment & exploitation.",
                tools: ["Burp Suite", "Metasploit", "Nikto", "OWASP"]
              },
              { 
                icon: Server, color: "blue", title: "Infrastructure", 
                desc: "Server hardening & virtualization.",
                tools: ["Linux", "Docker", "Unraid", "Bash"]
              }
            ].map((skill, idx) => (
              <HolographicCard key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] group">
                <div className={`w-14 h-14 rounded-2xl bg-${skill.color}-500/20 flex items-center justify-center mb-6 text-${skill.color}-300 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-white/5`}>
                  <skill.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white/90">{skill.title}</h3>
                <p className="text-blue-100/60 mb-6 leading-relaxed">{skill.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map(t => (
                    <span key={t} className={`text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 text-white/70 border border-white/10`}>
                      {t}
                    </span>
                  ))}
                </div>
              </HolographicCard>
            ))}
          </div>
        </section>

        {/* CREDENTIALS */}
        <section id="credentials">
          <div className="flex items-center gap-6 mb-12">
             <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
               Credentials
             </h2>
             <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cisco Cert */}
            <HolographicCard className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-300 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-white/5">
                  <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white/90">Cisco Intro to Cybersecurity</h3>
                <p className="text-blue-100/60 mb-6 leading-relaxed">
                  Foundational coverage of the CIA triad, network defense mechanisms (Firewalls, IDS/IPS), 
                  cryptography basics, and incident response frameworks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 text-white/70 border border-white/10">Risk Mgmt</span>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 text-white/70 border border-white/10">Network Defense</span>
                </div>
            </HolographicCard>

            {/* Education (Diploma) */}
             <HolographicCard className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-300 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-white/5">
                  <Book size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white/90">Diploma in Computer Engineering</h3>
                <p className="text-blue-100/60 mb-6 leading-relaxed">
                  Vasantrao More Polytechnic (In-progess). Focusing on core computer science principles, 
                  system architecture, and practical lab implementations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 text-white/70 border border-white/10">3.8 GPA</span>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 text-white/70 border border-white/10">Engineering</span>
                </div>
            </HolographicCard>
          </div>
        </section>

        {/* PROJECTS / LOGS */}
        <section id="logs">
          <div className="flex items-center gap-6 mb-12">
             <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
               Mission Logs
             </h2>
             <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            {/* PROJECT 1: HOME LAB */}
            <HolographicCard className="bg-white/5 border border-white/10 rounded-3xl p-1 overflow-hidden backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] group">
              <div className="bg-black/20 p-8 md:p-12 rounded-[22px] relative h-full">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                   <Activity className="text-cyan-400 w-24 h-24 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="space-y-8 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                        HARDWARE
                      </span>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                      Enterprise Home Lab
                    </h3>
                    
                    <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl">
                      Designed and built a multi-purpose server using repurposed gaming hardware (Unraid OS). 
                      This lab mimics a real-world enterprise environment, hosting services for media streaming (Plex), 
                      secure file sharing (SMB), and a segregated virtual network for <span className="text-cyan-200 font-semibold">Pentesting & SIEM simulations</span>.
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/60 font-medium">
                      <li className="flex items-center gap-3">
                        <Radio size={16} className="text-cyan-400" />
                        Media Streaming (Plex/Jellyfin)
                      </li>
                      <li className="flex items-center gap-3">
                        <Layers size={16} className="text-cyan-400" />
                        Docker Container Orchestration
                      </li>
                      <li className="flex items-center gap-3">
                        <Lock size={16} className="text-cyan-400" />
                        Virtual Pentesting Lab (Kali)
                      </li>
                      <li className="flex items-center gap-3">
                        <Database size={16} className="text-cyan-400" />
                        NAS / SMB Storage Array
                      </li>
                    </ul>

                    <div className="flex gap-3 pt-2">
                       {['Unraid', 'Docker', 'Splunk', 'Wireguard'].map(tag => (
                         <span key={tag} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </HolographicCard>

            {/* PROJECT 2: NETHUNTER */}
            <HolographicCard className="bg-white/5 border border-white/10 rounded-3xl p-1 overflow-hidden backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] group">
              <div className="bg-black/20 p-8 md:p-12 rounded-[22px] relative h-full">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                   <Cpu className="text-purple-400 w-24 h-24 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-lg text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                        OPEN SOURCE
                      </span>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-white group-hover:text-purple-100 transition-colors">
                      Kali NetHunter Kernel Dev
                    </h3>
                    
                    <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl">
                      Contributed to the Kali NetHunter project by developing custom kernels and installers for the Redmi Note 4 (mido). 
                      Enabled advanced features like Packet Injection and HID attacks on mobile hardware.
                    </p>

                    <div className="pt-4 flex gap-3">
                       {['Linux Kernel', 'Android', 'C', 'Bash', 'Git'].map(tag => (
                         <span key={tag} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </HolographicCard>

            {/* PROJECT 3: BANKING APP */}
            <HolographicCard className="bg-white/5 border border-white/10 rounded-3xl p-1 overflow-hidden backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] group">
              <div className="bg-black/20 p-8 md:p-12 rounded-[22px] relative h-full">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                   <Lock className="text-blue-400 w-24 h-24 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                        FULL STACK
                      </span>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-white group-hover:text-blue-100 transition-colors">
                      Secure Banking System
                    </h3>
                    
                    <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl">
                      A "Security First" banking application. Implemented SHA-256 for password hashing, 
                      JWT for session management, and strict CORS policies to mitigate XSS and CSRF attacks.
                    </p>

                    <div className="pt-4 flex gap-3">
                       {['Cryptography', 'Secure Coding', 'PHP', 'MySQL'].map(tag => (
                         <span key={tag} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </HolographicCard>
          </div>
        </section>

        {/* FOOTER */}
        <section id="uplink" className="py-20 border-t border-white/10 text-center">
          <div className="inline-block p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-8 text-white">Secure Uplink Available</h2>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/Serp3n7" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:text-cyan-400 transition-all hover:scale-110 shadow-lg border border-white/5">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/Sumit-Bide" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:text-purple-400 transition-all hover:scale-110 shadow-lg border border-white/5">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sumitmpatil19@gmail.com" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:text-blue-400 transition-all hover:scale-110 shadow-lg border border-white/5">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-white/40 font-mono text-sm tracking-widest">
              © 2025 SUMIT M. BIDE
            </p>
          </div>
        </section>

      </main>
    </div>
  );
};

export default PortfolioV3;