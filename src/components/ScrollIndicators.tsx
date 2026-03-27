import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

export default function ScrollIndicators() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Generate a set of decorative boxes
  const boxes = Array.from({ length: 8 }, (_, i) => i);

  return (
    <>
      {/* Left Side: System Nodes */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[40] hidden lg:flex flex-col gap-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 overflow-hidden">
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="w-full h-full bg-gradient-to-b from-purple-500 to-violet-600"
          />
        </div>

        {boxes.map((i) => (
          <ScrollBox key={i} index={i} total={boxes.length} scrollYProgress={scrollYProgress} />
        ))}
      </div>

      {/* Right Side: Floating Data Blocks */}
      <div className="fixed right-8 top-0 bottom-0 z-[40] hidden xl:flex flex-col justify-around pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <FloatingBox key={i} index={i} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </>
  );
}

function FloatingBox({ index, scrollYProgress }: any) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * (index + 1)]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45 * (index + 1)]);

  return (
    <motion.div
      style={{ y, opacity, rotate }}
      className="w-8 h-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-lg flex items-center justify-center"
    >
      <div className="w-1 h-1 bg-purple-500/20 rounded-full" />
    </motion.div>
  );
}

function ScrollBox({ index, total, scrollYProgress }: any) {
  const threshold = index / (total - 1);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest: number) => {
      setIsActive(latest >= threshold);
    });
  }, [scrollYProgress, threshold]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <motion.div
        animate={{
          scale: isActive ? 1.2 : 1,
          backgroundColor: isActive ? "rgba(168, 85, 247, 0.4)" : "rgba(255, 255, 255, 0.05)",
          borderColor: isActive ? "rgba(168, 85, 247, 0.6)" : "rgba(255, 255, 255, 0.1)",
        }}
        className="w-3 h-3 rounded-sm border transition-colors duration-300 flex items-center justify-center"
      >
        {isActive && (
          <motion.div 
            layoutId="active-dot"
            className="w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" 
          />
        )}
      </motion.div>

      {/* Tooltip-like label */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg">
          <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest whitespace-nowrap">
            NODE_0{index + 1}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
