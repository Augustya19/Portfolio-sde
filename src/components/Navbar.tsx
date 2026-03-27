import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Terminal, Layout, Mail, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'w-[92%] md:w-[90%] max-w-2xl' : 'w-[95%] max-w-4xl'
        }`}
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl px-4 md:px-6 py-2 md:py-3 flex items-center justify-between shadow-2xl shadow-purple-500/10">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-purple-400 to-violet-600 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
              A
            </div>
            <span className="hidden xs:block font-mono text-xs md:text-sm tracking-tighter text-white/80 group-hover:text-purple-400 transition-colors">AUG.EXE</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
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

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden sm:flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-[10px] font-mono text-purple-400/80 uppercase">Active</span>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/60 hover:text-purple-400 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-[#0d0a0d] border-l border-white/10 p-8 pt-24 space-y-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-white/60 hover:text-purple-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-sm font-mono uppercase tracking-[0.2em]">{item.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-purple-400/80 uppercase tracking-widest">Neural Link Active</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
