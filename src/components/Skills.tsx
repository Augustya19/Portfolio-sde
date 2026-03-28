import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../constants';
import { useState } from 'react';
import { Cpu, Code, Database, Zap, X, Layout, Server, Settings, Sparkles } from 'lucide-react';

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displaySkills = SKILLS.slice(0, 5);

  const categorizedSkills = {
    Frontend: SKILLS.filter(s => s.category === 'Frontend'),
    Data: SKILLS.filter(s => s.category === 'Data'),
    Tools: SKILLS.filter(s => s.category === 'Tools'),
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Layout size={20} />;
      case 'Data': return <Database size={20} />;
      case 'Tools': return <Settings size={20} />;
      default: return <Zap size={20} />;
    }
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-[#0d0a0d]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.4em] text-purple-400 font-mono mb-6"
          >
            <Cpu size={12} />
            <span>Neural Capabilities</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            The <span className="text-purple-400">Toolkit.</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A curated selection of technologies used to build intelligent, high-performance digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySkills.map((skill, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={skill.name}
              className="group p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="text-purple-400 mb-6">
                {getIcon(skill.category)}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {skill.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-purple-400/60 font-mono">
                  {skill.details}
                </p>
              </div>
            </motion.div>
          ))}

          {/* "And More..." Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onClick={() => setIsModalOpen(true)}
            className="group p-8 bg-purple-500/5 border border-purple-500/20 rounded-[2rem] cursor-pointer hover:bg-purple-500/10 transition-all duration-300 border-dashed"
          >
            <div className="text-purple-400 mb-6">
              <Sparkles size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-purple-400 tracking-tight">
                And More...
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-purple-400/40 font-mono">
                CONTINUOUS LEARNING
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-4xl bg-[#151215] border border-white/10 rounded-[3rem] p-8 md:p-12 overflow-hidden relative max-h-[90vh] overflow-y-auto scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-12">
                <h2 className="text-4xl font-bold text-white tracking-tighter mb-4">Full Tech Stack</h2>
                <p className="text-white/50 font-light">Categorized neural capabilities and tools.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {Object.entries(categorizedSkills).map(([category, skills]) => (
                  <div key={category} className="space-y-8">
                    <div className="flex items-center gap-3 text-purple-400">
                      {getIcon(category)}
                      <h3 className="text-xs font-mono uppercase tracking-[0.3em]">{category}</h3>
                    </div>
                    <div className="space-y-4">
                      {skills.map((skill) => (
                        <div key={skill.name} className="group">
                          <div className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                            {skill.name}
                          </div>
                          <div className="text-[9px] uppercase tracking-widest text-white/30 font-mono">
                            {skill.details}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
