import { motion, useScroll, useTransform } from 'motion/react';
import { SKILLS } from '../constants';
import { useState, useRef } from 'react';
import { Sparkles, Cpu, Code, Database, Zap } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'AI / ML' | 'Frontend' | 'Backend / Data'>('All');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const categories = ['All', 'AI / ML', 'Frontend', 'Backend / Data'];
  const filteredSkills = activeCategory === 'All' ? SKILLS : SKILLS.filter(s => s.category === activeCategory);

  return (
    <section ref={containerRef} id="skills" className="py-32 relative overflow-hidden bg-[#0d0a0d]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.4em] text-purple-400 font-mono"
            >
              <Cpu size={12} />
              <span>Neural Capabilities</span>
            </motion.div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter">
              The <span className="text-purple-400">Toolkit.</span>
            </h2>
            <p className="text-white/50 max-w-md text-lg md:text-xl font-light leading-relaxed mx-auto md:mx-0">
              A curated selection of technologies used to build intelligent, high-performance digital products.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-mono uppercase tracking-widest transition-all duration-500 border ${
                  activeCategory === cat
                    ? 'bg-purple-500 border-purple-500 text-white shadow-2xl shadow-purple-500/40 scale-105'
                    : 'bg-white/5 border-white/10 text-white/60 hover:border-purple-500/30 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredSkills.map((skill, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.05 
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              key={skill.name}
              className="group relative p-8 md:p-10 glass-panel rounded-[2.5rem] md:rounded-[3rem] hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 space-y-6 md:space-y-8">
                <div className="flex items-start justify-between">
                  <div className="space-y-1 md:space-y-2">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-purple-400 font-mono">
                      {skill.category}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors tracking-tight">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all duration-500">
                    {skill.category === 'AI / ML' ? <Zap size={18} /> : skill.category === 'Frontend' ? <Code size={18} /> : <Database size={18} />}
                  </div>
                </div>

                <div className="pt-4 md:pt-6 flex flex-wrap gap-2 md:gap-3">
                  {skill.relatedProjects.map(proj => (
                    <span key={proj} className="text-[9px] md:text-[10px] font-mono text-purple-400/40 uppercase tracking-widest px-3 md:px-4 py-1 md:py-1.5 rounded-lg md:rounded-xl bg-purple-500/5 border border-purple-500/10 group-hover:border-purple-500/30 group-hover:text-purple-400 transition-colors">
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
