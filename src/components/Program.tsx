import React from 'react';
import { motion } from 'motion/react';
import { Users, Heart, Sparkles } from 'lucide-react';

const events = [
  { time: '9:00 AM', title: 'Guest Arrival', icon: Users },
  { time: '10:15 AM', title: 'Poruwa Ceremony', icon: Heart },
  { time: '4:00 PM', title: 'Farewell', icon: Sparkles },
];

export const Program: React.FC = () => {
  return (
    <section id="program" className="w-full min-h-[100dvh] snap-start bg-transparent relative overflow-hidden flex flex-col justify-center py-16 px-6">
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
            Program
          </h2>
        </motion.div>

        <div className="relative">
          {/* Centre line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-brand-ink/60" />

          <div className="space-y-12">
            {events.map((event, i) => {
              const Icon = event.icon;
              const textLeft = i % 2 === 0;
              const text = (
                <div className={textLeft ? 'text-right' : 'text-left'}>
                  <p className="font-display text-xl sm:text-2xl text-brand-ink">{event.time}</p>
                  <p className="font-display text-sm sm:text-base uppercase tracking-[0.2em] text-brand-ink/90 mt-1">
                    {event.title}
                  </p>
                </div>
              );
              const icon = (
                <div className={`flex ${textLeft ? 'justify-start' : 'justify-end'}`}>
                  <Icon className="h-7 w-7 text-brand-ink" strokeWidth={1.25} />
                </div>
              );

              return (
                <motion.div
                  key={event.title}
                  className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                >
                  {textLeft ? text : icon}
                  <span className="relative z-10 h-3 w-3 rounded-full bg-brand-ink" />
                  {textLeft ? icon : text}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
