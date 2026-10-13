import React from 'react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full min-h-[100dvh] snap-start flex flex-col justify-center items-center py-16 bg-transparent text-brand-ink relative overflow-hidden">
      <div className="container px-6 md:px-12 mx-auto flex flex-col items-center justify-center flex-grow text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif tracking-[0.2em] uppercase text-brand-ink">
            Thank You
          </h2>
          
          <p className="text-3xl md:text-5xl text-brand-ink max-w-3xl mx-auto leading-relaxed tracking-wider px-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
            It is a pleasure and honor for us, if you are willing to attend and give us your blessing.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 w-full text-center space-y-2 opacity-80">
        <p className="text-brand-ink text-xs font-sans tracking-widest uppercase">
          © 2026 Dulakshi &amp; Harsha
        </p>
        <p className="text-brand-ink text-[10px] font-sans tracking-widest uppercase">
          Created with <a target="_blank" rel="noreferrer" className="underline hover:text-brand-ink/80" href="https://wa.me/94707819074">invitemint</a>
        </p>
      </div>
    </footer>
  );
};
