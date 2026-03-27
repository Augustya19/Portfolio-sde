import { motion } from 'motion/react';
import { GraduationCap, Heart, User } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: "Bachelor in Technology",
      specialization: "Computer Science",
      school: "Arya College of Engineering & I.T, Jaipur",
      year: "2021 - 2025"
    }
    
  ];

  const interests = [
    "Creative Art",
    "Reading",
    "Digital Art",
    "Badminton",
    "Volleyball",
    
  ];

  return (
    <section id="about" className="py-32 bg-[#fdfafb] dark:bg-[#080508] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group w-fit mx-auto lg:mx-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-[2rem] blur-2xl group-hover:opacity-100 transition-opacity opacity-50" />
            <div className="relative rounded-[2rem] overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10">
              <img
                src="/aug.jpg"
                className="w-full h-auto max-h-[500px] object-cover transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent mix-blend-overlay" />
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/5 border border-purple-500/20 text-[10px] uppercase tracking-[0.2em] text-purple-500 dark:text-purple-400 font-mono"
              >
                <span>System Profile</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
              >
                Hello, I'm <span className="text-purple-500 dark:text-purple-400">Augustya.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 dark:text-white/60 text-lg font-light leading-relaxed"
              >
                I am a Computer Science graduate specializing in the intersection of Artificial Intelligence and high-fidelity Frontend development. I believe that technology should not only be functional but also deeply immersive and aesthetically captivating.

                 I enjoy creating efficient, scalable systems and continuously learning new technologies to improve my skills.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 text-purple-500 dark:text-purple-400">
                  <GraduationCap size={20} />
                  <h3 className="text-xs font-mono uppercase tracking-[0.3em]">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, i) => (
                    <div key={i} className="relative pl-4 border-l border-purple-500/20">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">{edu.degree}</div>
                      <div className="text-[11px] text-purple-500/60 dark:text-purple-400/60 font-mono mt-1">{edu.specialization}</div>
                      <div className="text-[10px] text-gray-400 dark:text-white/30 mt-1 uppercase tracking-wider">{edu.school} / {edu.year}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Interests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 text-purple-500 dark:text-purple-400">
                  <Heart size={20} />
                  <h3 className="text-xs font-mono uppercase tracking-[0.3em]">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[11px] text-gray-600 dark:text-white/60 hover:text-purple-500 dark:hover:text-purple-400 hover:border-purple-500/30 transition-all cursor-default shadow-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full -mr-48 -mb-48" />
    </section>
  );
}
