import React from 'react';
import { motion } from 'motion/react';

export const ColorPalette: React.FC = () => {
  return (
    <section id="color-palette" className="w-full min-h-[100dvh] snap-start flex flex-col justify-center py-24 bg-transparent">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-display text-[#D4AF37]" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Color Palette
          </h2>
          <div className="w-32 h-1 bg-red-900 rounded-full"></div>
          <p className="text-xl text-white max-w-3xl font-sans tracking-wide mt-4">
            We kindly request our guests to dress in our chosen colors to create a beautiful aesthetic for our special day.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            className="w-full overflow-hidden rounded-xl border border-[#D4AF37]/30 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src="/colorpalette_new.jpeg" 
              alt="Wedding Color Palette" 
              className="w-full h-auto object-contain bg-black" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
