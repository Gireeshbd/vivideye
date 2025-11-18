import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#CCFF00] text-black pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
                <h2 className="text-6xl md:text-9xl font-black display-font tracking-tighter leading-[0.8] mb-8">
                    LET'S<br/>TALK.
                </h2>
                <a href="mailto:hello@vivideye.events" className="text-2xl md:text-4xl font-medium underline decoration-black underline-offset-8 hover:text-white transition-colors">
                    hello@vivideye.events
                </a>
            </div>

            <div className="flex flex-col justify-end">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold uppercase mb-4 border-b border-black pb-2">Address</h4>
                        <p className="text-lg font-medium leading-tight">
                            100ft Road, Indiranagar<br/>
                            Bangalore, KA 560038<br/>
                            India
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase mb-4 border-b border-black pb-2">Socials</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="flex items-center gap-2 hover:translate-x-2 transition-transform">Instagram <ArrowUpRight className="w-4 h-4"/></a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:translate-x-2 transition-transform">LinkedIn <ArrowUpRight className="w-4 h-4"/></a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:translate-x-2 transition-transform">Twitter <ArrowUpRight className="w-4 h-4"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-between items-end border-t-2 border-black pt-6">
            <p className="font-bold uppercase text-sm md:text-base">Vivideye © {new Date().getFullYear()}</p>
            <p className="font-bold uppercase text-sm md:text-base">Designed by AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;