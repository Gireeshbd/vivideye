import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-[120vh] bg-[#050505] overflow-hidden">
      {/* Background Ambient Video or Gradient */}
      <div className="absolute inset-0 opacity-30">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.4),transparent_70%)]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-purple-900/20 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
      </div>

      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        <motion.div style={{ opacity }} className="relative z-10 flex flex-col items-center">
          <motion.h1 
            className="text-[18vw] leading-[0.8] font-black text-white display-font mix-blend-difference whitespace-nowrap"
            style={{ x: xLeft }}
          >
            VIVID
          </motion.h1>
          <motion.h1 
            className="text-[18vw] leading-[0.8] font-black text-transparent text-stroke display-font mix-blend-difference whitespace-nowrap"
            style={{ x: xRight }}
          >
            EYE
          </motion.h1>
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="absolute bottom-12 left-6 md:left-12 max-w-md"
        >
          <p className="text-gray-400 text-lg md:text-xl uppercase tracking-widest mb-4 font-medium">
            Bangalore <span className="text-[#CCFF00] mx-2">•</span> Est. 2024
          </p>
          <p className="text-2xl md:text-3xl text-white font-light leading-tight">
            We engineer <span className="text-[#CCFF00] font-bold">moments</span> that refuse to be forgotten.
          </p>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 right-6 md:right-12 animate-bounce"
          style={{ opacity }}
        >
          <ArrowDown className="w-8 h-8 text-[#CCFF00]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;