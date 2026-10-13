import React from 'react';
import { motion } from 'motion/react';

export const HomecomingDetails: React.FC = () => {
  return (
    <section id="details" className="w-full min-h-[100dvh] py-24 bg-transparent flex flex-col justify-center snap-start relative">
      <div className="container px-6 md:px-12 mx-auto max-w-4xl relative z-10 flex flex-col items-start">
        
        <div className="w-full h-px bg-brand-ink/25 mb-10"></div>

        <motion.div 
          className="flex flex-col text-left space-y-8 w-full mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif text-brand-ink uppercase tracking-widest">
              Wedding Ceremony
            </h2>
            <p className="text-lg sm:text-xl font-serif text-brand-ink uppercase tracking-widest">
              Thursday, 19 November 2026
            </p>
          </div>

          <div className="space-y-4 font-serif text-brand-ink/90">
            <div className="flex justify-between max-w-sm">
              <span className="tracking-widest uppercase text-sm sm:text-base">Guest Arrival</span>
              <span className="tracking-widest text-sm sm:text-base">09.00 AM</span>
            </div>
            <div className="flex justify-between max-w-sm">
              <span className="tracking-widest uppercase text-sm sm:text-base">Poruwa Ceremony</span>
              <span className="tracking-widest text-sm sm:text-base">10.15 AM</span>
            </div>

            <div className="flex justify-between max-w-sm">
              <span className="tracking-widest uppercase text-sm sm:text-base">Farewell</span>
              <span className="tracking-widest text-sm sm:text-base">04.00 PM</span>
            </div>
          </div>
        </motion.div>

        <div className="w-full h-px bg-brand-ink/25 mb-10"></div>

        <motion.div 
          className="flex flex-col text-left space-y-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="space-y-2">
            <p className="text-sm sm:text-base font-sans font-bold text-brand-ink uppercase tracking-wider">
              Saminro Grand Palace
            </p>
            <p className="text-sm sm:text-base font-serif text-brand-ink/90 leading-relaxed max-w-lg">
              Crystal Ballroom (2nd Floor), Makola, Kiribathgoda
            </p>
          </div>

          <div className="pt-2">
            <a 
              target="_blank" 
              rel="noreferrer"
              href="https://maps.app.goo.gl/m6qMjoUyfQf9Gwc19?g_st=iw"
              className="inline-flex items-center justify-center border border-brand-ink text-brand-ink px-8 py-3 text-xs tracking-[0.2em] uppercase font-sans hover:bg-brand-ink/10 transition-colors"
            >
              Google Maps
            </a>
          </div>
        </motion.div>

        <div className="w-full h-px bg-brand-ink/25 mt-10"></div>

      </div>
    </section>
  );
};
