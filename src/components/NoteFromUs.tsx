import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Crown } from 'lucide-react';

export const NoteFromUs: React.FC = () => {
  return (
    <section aria-label="A note from us" id="note" className="relative w-full min-h-[100dvh] snap-start flex flex-col justify-center py-24 bg-transparent overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-10 left-10 text-[#D4AF37] opacity-20 h-6 w-6" />
        <Sparkles className="absolute bottom-10 left-20 text-[#D4AF37] opacity-20 h-5 w-5" />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-black/90 p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl max-w-2xl mx-auto border border-[#D4AF37]/50 relative overflow-hidden">
            
            {/* Box inner accents */}
            <Sparkles className="absolute top-8 right-8 text-[#D4AF37] opacity-20 h-5 w-5" />
            <Crown className="absolute bottom-8 right-8 text-[#D4AF37] opacity-20 h-5 w-5" />

            <Heart className="h-12 w-12 text-white mx-auto mb-6" strokeWidth={2} />
            
            <h3 className="text-4xl md:text-5xl font-display text-[#D4AF37] mb-6 leading-tight capitalize" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Our Hearts Are Full
            </h3>
            
            <p className="text-gray-300 leading-[1.8] text-center text-sm sm:text-base font-sans tracking-wide">
              Our wedding day would not be complete without the people who have been part of our journey. Thank you for celebrating this beautiful beginning with us and for surrounding us with your love and blessings.<br /><br />
              We cannot wait to create memories that we’ll cherish for a lifetime.
            </p>
            
            <div className="mt-8">
              <p className="text-gray-300 font-sans tracking-widest uppercase text-xs">
                With love always, <br/>
                <span className="font-display text-[#D4AF37] text-3xl mt-4 inline-block capitalize" style={{ fontFamily: "'Great Vibes', cursive" }}>Dulakshi &amp; Harsha</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
