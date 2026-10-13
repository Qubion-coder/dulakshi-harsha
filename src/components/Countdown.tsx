import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { motion } from 'motion/react';

interface CountdownProps {
  targetDate: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const days = Math.max(0, differenceInDays(targetDate, now));
      const hours = Math.max(0, differenceInHours(targetDate, now) % 24);
      const minutes = Math.max(0, differenceInMinutes(targetDate, now) % 60);
      const seconds = Math.max(0, differenceInSeconds(targetDate, now) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="w-full min-h-[100dvh] snap-start flex flex-col items-center justify-center bg-transparent px-6 py-16 relative overflow-hidden">
      <motion.div
        className="w-full max-w-md flex flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display font-normal text-brand-ink leading-[0.95] text-7xl sm:text-8xl" style={{ fontVariantNumeric: "lining-nums" }}>
          19<span className="mx-1">·</span>11
          <br />
          2026
        </h2>

        <p className="mt-4 text-3xl sm:text-4xl text-brand-ink" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Dulakshi &amp; Harsha
        </p>

        <div className="w-24 h-px bg-brand-ink/40 my-10" />

        <div className="grid grid-cols-4 gap-4 w-full">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl font-display text-brand-ink mb-1" style={{ fontVariantNumeric: "tabular-nums lining-nums" }}>
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs font-display uppercase tracking-[0.2em] text-brand-ink/80">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
