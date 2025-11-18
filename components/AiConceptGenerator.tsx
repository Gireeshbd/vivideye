import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { generateEventConcept } from '../services/gemini';
import { AiConceptResponse } from '../types';

const AiConceptGenerator: React.FC = () => {
  const [eventType, setEventType] = useState('Wedding');
  const [theme, setTheme] = useState('');
  const [guestCount, setGuestCount] = useState(100);
  const [loading, setLoading] = useState(false);
  const [concept, setConcept] = useState<AiConceptResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setConcept(null);
    try {
      const result = await generateEventConcept({
        eventType,
        theme: theme || 'Bold & Avant-Garde',
        guestCount
      });
      setConcept(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-32 bg-[#0a0a0a] border-t border-white/10 relative">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-16">
                <div className="flex items-center gap-2 mb-4 text-[#CCFF00]">
                    <Sparkles className="w-5 h-5" />
                    <span className="uppercase tracking-widest text-sm font-bold">AI Concept Lab</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white display-font mb-8">
                    Dream Machine
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                <div className="lg:col-span-3">
                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="text-2xl md:text-4xl leading-relaxed text-gray-400 font-light">
                            <span>I am planning a </span>
                            <select 
                                value={eventType}
                                onChange={(e) => setEventType(e.target.value)}
                                className="bg-transparent border-b-2 border-gray-700 text-white focus:border-[#CCFF00] outline-none px-2 py-1 hover:border-white transition-colors cursor-pointer appearance-none font-bold"
                            >
                                <option value="Wedding">Wedding</option>
                                <option value="Gala">Gala</option>
                                <option value="Rave">Rave</option>
                                <option value="Product Launch">Product Launch</option>
                                <option value="Private Dinner">Private Dinner</option>
                            </select>
                            <span> for </span>
                            <input 
                                type="number"
                                value={guestCount}
                                onChange={(e) => setGuestCount(Number(e.target.value))}
                                className="bg-transparent border-b-2 border-gray-700 text-white focus:border-[#CCFF00] outline-none px-2 py-1 w-24 text-center font-bold"
                            />
                            <span> people. The vibe should feel like </span>
                            <input 
                                type="text"
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}
                                placeholder="Cyberpunk Noir..."
                                className="bg-transparent border-b-2 border-gray-700 text-white focus:border-[#CCFF00] outline-none px-2 py-1 w-full md:w-auto font-bold placeholder-gray-600"
                            />
                            <span>.</span>
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className="group flex items-center gap-4 text-white text-xl font-bold uppercase tracking-wider hover:text-[#CCFF00] transition-colors disabled:opacity-50"
                        >
                            {loading ? (
                                <><Loader2 className="animate-spin" /> Processing Data...</>
                            ) : (
                                <><span className="border-b border-white group-hover:border-[#CCFF00]">Generate Concept</span> <ArrowRight className="group-hover:translate-x-2 transition-transform" /></>
                            )}
                        </button>
                    </form>
                </div>

                <div className="lg:col-span-2">
                    {concept && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-[#111] border border-[#333] p-8 relative"
                        >
                             <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#CCFF00]" />
                             <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#CCFF00]" />
                             
                             <span className="text-[#CCFF00] font-mono text-xs mb-4 block">/// OUTPUT RECEIVED</span>
                             
                             <h3 className="text-3xl font-bold text-white mb-6 display-font uppercase leading-none">
                                {concept.title}
                             </h3>
                             
                             <p className="text-gray-300 mb-8 leading-relaxed">
                                {concept.concept}
                             </p>
                             
                             <div className="space-y-4">
                                {concept.highlights.map((h, i) => (
                                    <div key={i} className="flex gap-4 items-start border-l-2 border-[#333] pl-4">
                                        <span className="text-gray-500 font-mono">0{i+1}</span>
                                        <span className="text-white font-medium">{h}</span>
                                    </div>
                                ))}
                             </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default AiConceptGenerator;