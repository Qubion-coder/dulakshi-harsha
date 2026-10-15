import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const LETTER_STEP = 0.045;

// Reveals text one letter at a time, starting after `delay` seconds.
// Letters are grouped per word so lines only wrap between words.
const TypeText: React.FC<{ text: string; delay: number; className?: string; style?: React.CSSProperties }> = ({ text, delay, className, style }) => {
  let index = 0;
  return (
    <span className={className} style={style} aria-label={text}>
      {text.split(' ').map((word, w) => (
        <React.Fragment key={w}>
          {w > 0 && ' '}
          <span className="inline-block whitespace-nowrap" aria-hidden="true">
            {word.split('').map((char) => {
              const i = index++;
              return (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.4, delay: delay + i * LETTER_STEP, ease: 'easeOut' }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        </React.Fragment>
      ))}
    </span>
  );
};

// Start time (seconds) of each line, so each one begins after the previous finishes.
const T = {
  together: 1.2,
  bride: 2.6,
  and: 3.1,
  groom: 3.4,
  invite: 3.9,
  day: 5.4,
  month: 5.8,
  date: 6.2,
  year: 6.3,
  time: 6.6,
};

export const HeroContent: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const prefix = searchParams.get('prefix');
  const name = searchParams.get('name');

  const guestNameString = (prefix || name)
    ? `${prefix ? prefix + ' ' : ''}${name || ''}`.trim()
    : '';

  return (
    <section aria-label="Hero" className="relative w-full h-[100dvh] snap-start overflow-hidden flex items-center justify-center bg-black">
      {/* Intro video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/intro-beach.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/75" />

      <div className="relative z-10 w-full h-full flex flex-col justify-end items-center px-6 pb-28">

        {guestNameString && (
          <motion.div
            className="absolute top-12 flex flex-col items-center justify-center px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 font-sans text-white/85 text-center">
              We cordially invite
            </p>
            <p className="font-display text-lg sm:text-2xl text-white text-center">
              {guestNameString}
            </p>
          </motion.div>
        )}

        <div className="flex flex-col items-center justify-center w-full max-w-md text-center text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
          <p className="text-white/85 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-display mb-6">
            <TypeText text="Together with their families" delay={T.together} />
          </p>

          <h1 className="font-display font-normal uppercase tracking-[0.12em] leading-tight text-4xl sm:text-5xl md:text-6xl">
            <TypeText text="Dulakshi" delay={T.bride} className="block" />
            <TypeText
              text="and"
              delay={T.and}
              className="block normal-case tracking-normal text-3xl sm:text-4xl my-1"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            />
            <TypeText text="Harsha" delay={T.groom} className="block" />
          </h1>

          <p className="text-white/85 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-display mt-6 mb-10">
            <TypeText text="Invite you to their wedding celebration" delay={T.invite} />
          </p>

          {/* Date block */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 w-full font-display uppercase">
            <motion.p
              className="border-y border-white/60 py-2 text-xs sm:text-sm tracking-[0.2em]"
              initial={{ borderColor: 'rgba(255,255,255,0)' }}
              animate={{ borderColor: 'rgba(255,255,255,0.6)' }}
              transition={{ duration: 0.8, delay: T.day }}
            >
              <TypeText text="Thursday" delay={T.day} />
            </motion.p>
            <div className="flex flex-col items-center leading-none">
              <TypeText text="November" delay={T.month} className="text-xs sm:text-sm tracking-[0.25em]" />
              <TypeText text="19" delay={T.date} className="text-5xl sm:text-6xl my-1.5" />
              <TypeText text="2026" delay={T.year} className="text-xs sm:text-sm tracking-[0.25em]" />
            </div>
            <motion.p
              className="border-y border-white/60 py-2 text-xs sm:text-sm tracking-[0.2em]"
              initial={{ borderColor: 'rgba(255,255,255,0)' }}
              animate={{ borderColor: 'rgba(255,255,255,0.6)' }}
              transition={{ duration: 0.8, delay: T.time }}
            >
              <TypeText text="At 9:00 AM" delay={T.time} />
            </motion.p>
          </div>
        </div>

      </div>

      {/* Swipe up */}
      <motion.div
        className="absolute bottom-8 inset-x-0 z-10 flex justify-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7.5, duration: 1 }}
      >
        <div className="flex flex-col items-center text-center animate-bounce">
          <p className="text-[11px] sm:text-xs font-sans tracking-widest text-white/80 mb-2">Swipe up</p>
          <ChevronDown className="h-6 w-6 text-white/80" />
        </div>
      </motion.div>

    </section>
  );
};
