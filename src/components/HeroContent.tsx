import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const HeroContent: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const prefix = searchParams.get('prefix');
  const name = searchParams.get('name');

  const guestNameString = (prefix || name)
    ? `${prefix ? prefix + ' ' : ''}${name || ''}`.trim()
    : '';

  return (
    <section aria-label="Hero" className="relative w-full h-[100dvh] snap-start overflow-hidden flex items-center justify-center">
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-6">

        {guestNameString && (
          <motion.div
            className="absolute top-12 flex flex-col items-center justify-center px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 font-sans text-brand-ink/80 text-center">
              We cordially invite
            </p>
            <p className="font-display text-lg sm:text-2xl text-brand-ink text-center">
              {guestNameString}
            </p>
          </motion.div>
        )}

        <motion.div
          className="flex flex-col items-center justify-center w-full max-w-md text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-brand-ink/80 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-display mb-6">
            Together with their families
          </p>

          <h1 className="text-brand-ink font-display font-normal uppercase tracking-[0.12em] leading-tight text-4xl sm:text-5xl md:text-6xl">
            Dulakshi
            <span className="block normal-case tracking-normal text-3xl sm:text-4xl my-1" style={{ fontFamily: "'Great Vibes', cursive" }}>
              and
            </span>
            Harsha
          </h1>

          <p className="text-brand-ink/80 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-display mt-6 mb-10">
            Invite you to their wedding celebration
          </p>

          {/* Date block */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 w-full font-display text-brand-ink uppercase">
            <p className="border-y border-brand-ink/50 py-2 text-xs sm:text-sm tracking-[0.2em]">
              Thursday
            </p>
            <div className="flex flex-col items-center leading-none">
              <span className="text-xs sm:text-sm tracking-[0.25em]">November</span>
              <span className="text-5xl sm:text-6xl my-1.5">19</span>
              <span className="text-xs sm:text-sm tracking-[0.25em]">2026</span>
            </div>
            <p className="border-y border-brand-ink/50 py-2 text-xs sm:text-sm tracking-[0.2em]">
              At 9:00 AM
            </p>
          </div>
        </motion.div>

      </div>

      {/* Swipe up */}
      <motion.div
        className="absolute bottom-8 inset-x-0 z-10 flex justify-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center text-center animate-bounce">
          <p className="text-[11px] sm:text-xs font-sans tracking-widest text-brand-ink/80 mb-2">Swipe up</p>
          <ChevronDown className="h-6 w-6 text-brand-ink/80" />
        </div>
      </motion.div>

    </section>
  );
};
