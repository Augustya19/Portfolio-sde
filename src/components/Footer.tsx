import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Cpu, FileText } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Augustya19", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/augustyayv/", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:augustya13y@gmail.com", label: "Email" },
    // { icon: <FileText size={20} />, href: "/Augustya_resumefs.pdf", label: "Resume" },
  ];

  return (
    <footer id="contact" className="relative py-32 bg-[#0d0a0d] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20 md:mb-32">
          <div className="space-y-8 md:space-y-12 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.4em] text-purple-400 font-mono"
              >
                <Cpu size={12} />
                <span>Neural Link Ready</span>
              </motion.div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                Let's Build <br />
                <span className="text-purple-400">The Future.</span>
              </h2>
              <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                Currently open for new collaborations and high-impact engineering roles.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-purple-400 hover:border-purple-500/30 transition-all shadow-2xl"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 space-y-8 md:space-y-12">
            <div className="space-y-4">
              <h3 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-purple-400">Direct Contact</h3>
              <a href="mailto:augustya13y@gmail.com" className="group flex items-center justify-between text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-purple-400 transition-colors break-all">
                <span>augustya13y@gmail.com</span>
                <ArrowUpRight className="flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-purple-400">Location</h3>
              <div className="text-xl md:text-2xl font-light text-white/60">
                Remote / Global <br />
                <span className="text-xs md:text-sm font-mono text-white/20 uppercase tracking-widest">UTC+00:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
              A
            </div>
            <div className="text-sm font-mono text-white/40 tracking-tighter">
              AUG.EXE / {currentYear}
            </div>
          </div>
          
          <div className="flex items-center gap-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
            <span className="hover:text-purple-400 transition-colors cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-purple-400 transition-colors cursor-pointer">Security Core</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

