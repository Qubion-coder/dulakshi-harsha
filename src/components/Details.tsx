import React from 'react';
import { motion } from 'motion/react';

export const Details: React.FC = () => {
  return (
    <section id="details" className="w-full min-h-[100dvh] snap-start bg-transparent relative overflow-hidden flex flex-col justify-center py-16 px-6">
      <div className="w-full max-w-sm mx-auto">

        <motion.div
          className="relative mb-14 pl-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="block text-5xl sm:text-6xl text-brand-ink leading-none" style={{ fontFamily: "'Great Vibes', cursive" }}>
            The
          </span>
          <h2 className="font-display font-normal text-4xl sm:text-5xl uppercase tracking-[0.12em] text-brand-ink pl-10 -mt-2">
            Details
          </h2>
        </motion.div>

        <div className="relative pr-8">
          {/* Side line */}
          <div className="absolute right-[5px] top-2 bottom-0 w-px bg-brand-ink/60" />

          <div className="space-y-12 text-right">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="absolute -right-8 top-1.5 h-[11px] w-[11px] rounded-full bg-brand-ink" />
              <h3 className="font-display font-normal text-lg sm:text-xl uppercase tracking-[0.2em] text-brand-ink mb-3">
                Date &amp; Time
              </h3>
              <p className="font-display text-base sm:text-lg text-brand-ink/90 leading-relaxed">
                Thursday, 19 November 2026
                <br />
                9:00 AM – 4:00 PM
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="absolute -right-8 top-1.5 h-[11px] w-[11px] rounded-full bg-brand-ink" />
              <h3 className="font-display font-normal text-lg sm:text-xl uppercase tracking-[0.2em] text-brand-ink mb-3">
                Venue
              </h3>
              <p className="font-display text-base sm:text-lg text-brand-ink/90 leading-relaxed">
                Saminro Grand Palace
                <br />
                Crystal Ballroom (2nd Floor)
                <br />
                Makola, Kiribathgoda
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-brand-ink/30 shadow-sm">
                <iframe
                  title="Saminro Grand Palace map"
                  src="https://maps.google.com/maps?q=Saminro%20Grand%20Palace%2C%20Kiribathgoda&z=16&output=embed"
                  className="block h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://maps.app.goo.gl/Yzv24jkRjBJDkK3ZA"
                className="mt-4 inline-flex items-center justify-center rounded-xl border border-brand-ink text-brand-ink px-7 py-2.5 text-[11px] tracking-[0.25em] uppercase font-sans hover:bg-brand-ink/10 transition-colors"
              >
                View on Map
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
