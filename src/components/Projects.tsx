import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { useState, useRef } from 'react';
import { ExternalLink, Github, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-32 bg-[#fdfafb] dark:bg-[#080508] relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              Selected <span className="text-purple-500 dark:text-purple-400">Works</span>
            </h2>
            <p className="text-gray-600 dark:text-white/50 max-w-md font-light mx-auto md:mx-0">
              A collection of digital products that push the boundaries of AI and user interface design.
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end gap-3 md:gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 group"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 group"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative flex-shrink-0 w-[80vw] sm:w-[400px] md:w-[500px] aspect-[4/3] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500 snap-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 dark:from-black via-transparent to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-purple-500/10 backdrop-blur-md border border-purple-500/20 text-[10px] font-mono text-purple-600 dark:text-purple-100 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/80 dark:text-white/60 text-sm font-light line-clamp-2">
                    {project.description}
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    View Project <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-white/90 dark:bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0d0a0d] border border-gray-200 dark:border-purple-500/10 rounded-[2rem] md:rounded-[3rem] shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-48 sm:h-64 lg:h-auto">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-white dark:from-[#0d0a0d] via-transparent to-transparent" />
                </div>

                <div className="p-6 sm:p-8 md:p-12 space-y-6 md:space-y-8">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-purple-500 dark:text-purple-400 uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
                    <p className="text-gray-600 dark:text-white/50 font-light leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-mono text-gray-400 dark:text-white/30 uppercase tracking-[0.2em]">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-xl bg-purple-500/5 border border-purple-500/10 text-xs text-purple-600 dark:text-purple-200/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 flex items-center gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl font-medium hover:bg-purple-500 dark:hover:bg-purple-400 transition-colors shadow-lg shadow-purple-500/10"
                    >
                      Live Demo <ExternalLink size={18} />
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="p-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
