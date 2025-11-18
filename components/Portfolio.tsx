import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'NEON NIGHTS',
    category: 'Music Festival',
    image: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'THE ROYAL JAIPUR',
    category: 'Luxury Wedding',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'VERTEX SUMMIT',
    category: 'Tech Conference',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'VOID GALA',
    category: 'Art Exhibition',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'SOLSTICE',
    category: 'Private Party',
    image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop'
  }
];

const Portfolio: React.FC = () => {
  const [hoveredImg, setHoveredImg] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
        setCursorPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    }
  };

  return (
    <section id="portfolio" className="relative bg-[#050505] py-32 overflow-hidden cursor-none" onMouseMove={handleMouseMove} ref={containerRef}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-20 border-b border-white/20 pb-8">
             <h2 className="text-5xl md:text-8xl font-black text-white display-font uppercase">Selected<br/>Works</h2>
             <span className="text-[#CCFF00] font-mono text-xl hidden md:block">(2023 - 2025)</span>
        </div>

        <div className="flex flex-col">
            {portfolioItems.map((item) => (
                <div 
                    key={item.id} 
                    className="group relative flex items-center justify-between py-12 border-b border-white/10 hover:border-[#CCFF00] transition-colors duration-300"
                    onMouseEnter={() => setHoveredImg(item.image)}
                    onMouseLeave={() => setHoveredImg(null)}
                >
                    <h3 className="text-4xl md:text-6xl font-bold text-gray-500 group-hover:text-white group-hover:translate-x-4 transition-all duration-300 display-font uppercase">
                        {item.title}
                    </h3>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-mono text-gray-500 uppercase group-hover:text-[#CCFF00] transition-colors">{item.category}</span>
                        <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-[#CCFF00] opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Floating Image Reveal */}
      <AnimatePresence>
        {hoveredImg && (
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, x: cursorPos.x - 150, y: cursorPos.y - 200 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                className="fixed top-0 left-0 pointer-events-none z-50 w-[300px] h-[400px] hidden md:block mix-blend-normal"
            >
                <img 
                    src={hoveredImg} 
                    alt="Preview" 
                    className="w-full h-full object-cover rounded-lg border-2 border-[#CCFF00]" 
                />
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;