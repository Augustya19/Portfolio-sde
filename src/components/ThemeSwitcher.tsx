import { motion } from 'motion/react';
import { Palette } from 'lucide-react';
import { useState, useEffect } from 'react';

const themes = [
  { id: 'pink', color: '#ec4899', label: 'Sakura' },
  { id: 'cyan', color: '#06b6d4', label: 'Cyber' },
  { id: 'purple', color: '#a855f7', label: 'Nebula' },
  { id: 'amber', color: '#f59e0b', label: 'Solar' },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('purple');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="fixed bottom-8 left-8 z-[90]">
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="relative"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white shadow-2xl"
        >
          <Palette size={20} className="text-accent" />
        </motion.button>

        <div className={`absolute bottom-16 left-0 space-y-2 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => {
                setCurrentTheme(theme.id);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 whitespace-nowrap hover:border-accent transition-colors ${currentTheme === theme.id ? 'border-accent' : ''}`}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.color }} />
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">{theme.label}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
