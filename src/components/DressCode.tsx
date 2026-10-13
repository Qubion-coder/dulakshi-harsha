import React from 'react';
import { motion } from 'motion/react';

export const DressCode: React.FC = () => {
  return (
    <section id="dresscode" className="w-full min-h-[100dvh] snap-start flex flex-col justify-center py-24 bg-transparent">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-display text-[#D4AF37]" 
            style={{ fontFamily: "'Great Vibes', cursive" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Dress Code
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-red-900 rounded-full"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto px-4">
          <motion.div 
            className="w-full relative shadow-[0_0_40px_rgba(212,175,55,0.15)] rounded-2xl overflow-hidden border-[2px] border-[#D4AF37]/30 bg-zinc-950 p-2 md:p-4"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10 opacity-50 mix-blend-overlay pointer-events-none"></div>
            <img 
              src="/dresscode_new.jpeg" 
              alt="Dress Code: Boys Full Suit, Girls Frock / Indian Saree" 
              className="w-full h-auto object-contain rounded-xl relative z-10" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
