import { Shield } from 'lucide-react';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
    <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
      <a href="#" className="flex items-center gap-3 group">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,240,0.3)]">
          <Shield size={18} className="text-white" strokeWidth={2.5} />
        </div>
        <span className="font-bold text-sm tracking-widest uppercase hidden sm:block">
          <span className="text-gradient">SERP3N7</span>
        </span>
      </a>

      <nav className="flex items-center gap-1">
        {['About', 'Work', 'Skills', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
