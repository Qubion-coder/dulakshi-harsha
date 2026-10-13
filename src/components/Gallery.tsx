import React from 'react';
import { motion } from 'motion/react';

const images = [
  "/pre/WhatsApp%20Image%202026-08-25%20at%2000.01.36%20(1).jpeg",
  "/pre/WhatsApp%20Image%202026-08-25%20at%2000.01.36.jpeg",
  "/pre/WhatsApp%20Image%202026-08-25%20at%2000.01.37%20(1).jpeg",
  "/pre/WhatsApp%20Image%202026-08-25%20at%2000.01.37%20(2).jpeg",
  "/pre/WhatsApp%20Image%202026-08-25%20at%2000.01.37.jpeg",
  "/pre/WhatsApp%20Image%202026-08-25%20at%2000.01.38%20(1).jpeg",
  "/pre/WhatsApp%20Image%202026-08-25%20at%2000.01.38%20(2).jpeg",
  "/pre/WhatsApp%20Image%202026-08-25%20at%2000.01.38.jpeg",
  "/pre/WhatsApp%20Image%202026-08-25%20at%2000.01.39%20(1).jpeg",
  "/pre/WhatsApp%20Image%202026-08-25%20at%2000.01.39.jpeg",
  "/pre/WhatsApp%20Image%202026-08-25%20at%2000.01.40.jpeg"
];

// Chunk array into sizes of 4
const chunkedImages: string[][] = [];
for (let i = 0; i < images.length; i += 4) {
  chunkedImages.push(images.slice(i, i + 4));
}

export const Gallery: React.FC = () => {
  return (
    <div className="w-full relative bg-transparent">
      {/* Sticky Header */}
      <div className="sticky top-16 z-20 pointer-events-none w-full flex flex-col items-center px-4">
        <motion.div 
          className="text-center space-y-2 mb-4 shrink-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-widest drop-shadow-md">
            A Journey Of
          </h2>
          <h2 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-widest drop-shadow-md">
            Dulakshi & Harsha
          </h2>
        </motion.div>
      </div>

      {/* Grid Sections */}
      {chunkedImages.map((chunk, chunkIndex) => (
        <section 
          key={chunkIndex}
          className="w-full h-[100dvh] snap-start flex flex-col items-center justify-center bg-transparent relative px-4"
        >
          <div className="w-full max-w-lg mt-16 pointer-events-auto">
            <div className="w-full grid grid-cols-2 gap-2">
              {chunk.map((src, imgIndex) => (
                <div key={imgIndex} className="relative w-full aspect-[3/4] overflow-hidden bg-black shadow-lg">
                  <img 
                    src={src} 
                    alt={`Gallery ${chunkIndex * 4 + imgIndex + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
