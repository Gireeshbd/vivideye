import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'weddings',
    title: 'WEDDINGS',
    description: 'Not just a ceremony. An immersive love story tailored to your wildest dreams.',
    icon: null,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'corporate',
    title: 'CORPORATE',
    description: 'Brand experiences that disrupt the mundane. Launches, galas, and summits redefined.',
    icon: null,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'talent',
    title: 'TALENT',
    description: 'Access to the underground and the elite. Musicians, performers, and artists.',
    icon: null,
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'production',
    title: 'PRODUCTION',
    description: 'State-of-the-art audiovisual engineering. If you can imagine it, we build it.',
    icon: null,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="services" ref={targetRef} className="relative h-[300vh] bg-[#CCFF00]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="absolute top-8 left-8 z-10">
            <h2 className="text-black text-xl font-bold uppercase border-b-2 border-black pb-1 inline-block">Our Expertise</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-0">
          {services.map((service, i) => (
            <div key={service.id} className="w-screen h-screen flex-shrink-0 flex flex-col md:flex-row relative group border-r border-black/10">
                {/* Image Side */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden relative">
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                </div>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#CCFF00] p-8 md:p-16 flex flex-col justify-center">
                    <span className="text-6xl md:text-9xl font-bold text-black/10 mb-4 display-font">0{i + 1}</span>
                    <h3 className="text-5xl md:text-7xl font-black text-black mb-8 display-font tracking-tighter">
                        {service.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-black font-medium max-w-md leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;