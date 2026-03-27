import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Terminal, Layout, Sparkles, ChevronRight, Cpu, Globe, Zap } from 'lucide-react';

export default function Hero() {
  const [isBooted, setIsBooted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => setIsBooted(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bootSequence = [
    "Initializing Aug.exe...",
    "Loading Neural Modules...",
    "Establishing Secure Connection...",
    "Syncing Frontend Core...",
    "System Ready."
  ];

  return (
    <section ref={containerRef} id="hero" className="relative h-[150vh] w-full overflow-hidden bg-[#0d0a0d]">
      {/* Immersive Background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          {/* Animated Glows */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: mousePos.x * 0.5,
              y: mousePos.y * 0.5,
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
              x: -mousePos.x * 0.5,
              y: -mousePos.y * 0.5,
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px]"
          />
        </div>

        {/* Content Container */}
        <motion.div 
          style={{ y: springY, opacity, scale, filter: `blur(${blur}px)` }}
          className="relative z-10 h-full flex items-center justify-center px-6 pt-24"
        >
          {!isBooted ? (
            <div className="font-mono text-purple-400 space-y-2">
              {bootSequence.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.4 }}
                  className="flex items-center gap-2"
                >
                  <ChevronRight size={14} className="animate-pulse" />
                  <span>{line}</span>
                </motion.div>
              ))}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-5 bg-purple-400 inline-block align-middle ml-1"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center text-center space-y-12 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-[10px] uppercase tracking-[0.4em] text-purple-400 font-mono shadow-2xl"
              >
                <Sparkles size={12} className="animate-pulse" />
                <span>Neural Interface Active</span>
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[1.1] md:leading-[1]"
                >
                  Building with <br />
                  <span className="relative inline-block px-2">
                    <span className="relative z-10 text-purple-500 text-glow-purple">Heart</span>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 0.6 }}
                      className="absolute inset-x-0 bottom-2 h-[30%] bg-purple-500/20 rounded-sm origin-left -rotate-1"
                    />
                  </span>
                  {" "}&{" "}
                  <span className="relative inline-block px-2">
                    <span className="relative z-10 text-purple-500 text-glow-purple">Logic</span>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                      className="absolute inset-x-0 bottom-2 h-[30%] bg-purple-500/20 rounded-sm origin-left rotate-1"
                    />
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="max-w-2xl mx-auto text-white/60 text-xl md:text-2xl font-light leading-relaxed"
                >
                  Crafting seamless digital experiences where human intuition meets technical precision.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap items-center justify-center gap-6"
              >
                <a
                  href="#projects"
                  className="group relative px-10 py-5 bg-white text-black rounded-2xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 group-hover:text-white transition-colors">Explore Projects</span>
                </a>
                <a
                  href="#contact"
                  className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-xl text-white rounded-2xl font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                >
                  Get in Touch
                </a>
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* Floating Parallax Elements */}
        {isBooted && (
          <div className="absolute inset-0 pointer-events-none z-20">
            <motion.div
              style={{ 
                x: mousePos.x * 1.5, 
                y: mousePos.y * 1.5,
                opacity
              }}
              className="absolute top-[20%] left-[10%] p-6 glass-panel rounded-[2.5rem] hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Cpu size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase font-mono tracking-widest">Core</div>
                  <div className="text-sm text-white font-mono">AI Optimized</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ 
                x: -mousePos.x * 2, 
                y: -mousePos.y * 2,
                opacity
              }}
              className="absolute bottom-[25%] right-[12%] p-6 glass-panel rounded-[2.5rem] hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-400">
                  <Globe size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase font-mono tracking-widest">Network</div>
                  <div className="text-sm text-white font-mono">Edge Ready</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ 
                x: mousePos.x * 3, 
                y: -mousePos.y * 3,
                opacity
              }}
              className="absolute top-[60%] left-[15%] p-4 glass-panel rounded-2xl hidden lg:block"
            >
              <Zap size={20} className="text-purple-400 animate-pulse" />
            </motion.div>
          </div>
        )}

        {/* Scroll Indicator Removed */}
      </div>
    </section>
  );
}
