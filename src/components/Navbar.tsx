import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Terminal, Layout, Mail, User, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', icon: <User size={18} />, href: '#about' },
    { name: 'Skills', icon: <Terminal size={18} />, href: '#skills' },
    { name: 'Projects', icon: <Layout size={18} />, href: '#projects' },
    { name: 'Contact', icon: <Mail size={18} />, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'w-[90%] max-w-2xl' : 'w-[95%] max-w-4xl'
      }`}
    >
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-3 flex items-center justify-between shadow-2xl shadow-purple-500/10">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-violet-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
            A
          </div>
          <span className="hidden sm:block font-mono text-sm tracking-tighter text-white/80 group-hover:text-purple-400 transition-colors">AUG.EXE</span>
        </a>

        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 text-white/60 hover:text-purple-400 transition-colors group"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">{item.icon}</span>
              <span className="text-xs font-mono uppercase tracking-widest">{item.name}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-[10px] font-mono text-purple-400/80 uppercase">Active</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
