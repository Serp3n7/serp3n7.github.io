import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

const sections = ['about', 'stats', 'work', 'skills'];

const Header = () => {
  const [active, setActive] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,240,0.3)]">
            <Shield size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-sm tracking-widest uppercase hidden sm:block">
            <span className="text-gradient">SERP3N7</span>
          </span>
        </a>

        <nav className="flex items-center gap-1">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === item
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {item === 'about' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
