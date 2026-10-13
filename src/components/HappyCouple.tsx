import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Crown } from 'lucide-react';

export const HappyCouple: React.FC = () => {
  return (
    <section className="w-full min-h-[100dvh] snap-start bg-transparent relative overflow-hidden flex flex-col justify-center py-16">
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-10 text-brand-ink opacity-10 h-6 w-6" />
        <Sparkles className="absolute top-40 right-20 text-brand-ink opacity-10 h-5 w-5" />
        <Crown className="absolute bottom-40 right-10 text-brand-ink opacity-10 h-5 w-5" />
      </div>

      <div className="container px-6 md:px-6 mx-auto relative z-10 flex flex-col items-center">
        <div className="flex flex-col space-y-14 w-full max-w-sm mx-auto">
          {/* Bride */}
          <motion.div
            className="w-full text-left space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-brand-ink/90 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-serif w-full">
              THE BRIDE
            </p>

            <h3 className="text-4xl sm:text-5xl font-serif text-brand-ink">
              Dulakshi
            </h3>

            <div className="flex items-center w-full gap-4">
              <span className="text-brand-ink/90 font-serif italic text-xl" style={{ fontFamily: "'Great Vibes', cursive" }}>The Daughter of</span>
              <div className="flex-1 h-px bg-brand-ink/25"></div>
            </div>

            <p className="font-serif text-sm text-brand-ink/80">
              Mr. &amp; Mrs. Gangodawatte
            </p>
          </motion.div>

          <motion.p
            className="text-center text-4xl text-brand-ink/70"
            style={{ fontFamily: "'Great Vibes', cursive" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            &amp;
          </motion.p>

          {/* Groom */}
          <motion.div
            className="w-full text-right space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-brand-ink/90 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-serif w-full">
              THE GROOM
            </p>

            <h3 className="text-4xl sm:text-5xl font-serif text-brand-ink">
              Harsha
            </h3>

            <div className="flex items-center flex-row-reverse w-full gap-4">
              <span className="text-brand-ink/90 font-serif italic text-xl" style={{ fontFamily: "'Great Vibes', cursive" }}>The Son of</span>
              <div className="flex-1 h-px bg-brand-ink/25"></div>
            </div>

            <p className="font-serif text-sm text-brand-ink/80">
              Mr. &amp; Mrs. Mamuhewage
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
