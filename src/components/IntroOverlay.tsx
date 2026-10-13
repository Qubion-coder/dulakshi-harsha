import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface IntroOverlayProps {
  onEnter: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onEnter }) => {
  const [prefix, setPrefix] = useState('');
  const [guestName, setGuestName] = useState('Family & Friends');
  const [invitationNumber, setInvitationNumber] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const invite = params.get('invite');

    if (invite) {
      try {
        const decoded = decodeURIComponent(atob(invite));
        if (decoded.startsWith('{')) {
          const parsed = JSON.parse(decoded);
          if (parsed.p) setPrefix(parsed.p);
          if (parsed.n) setGuestName(parsed.n);
          if (parsed.num) setInvitationNumber(parsed.num);
        } else {
          const parts = decoded.split('|');
          if (parts[0]) setPrefix(parts[0]);
          if (parts[1]) setGuestName(parts[1]);
          if (parts[2]) setInvitationNumber(parts[2]);
        }
      } catch (e) {
        console.error("Invalid invite link");
      }
    } else {
      const p = params.get('prefix');
      const n = params.get('name');
      const num = params.get('num');
      if (p) setPrefix(p);
      if (n) setGuestName(n);
      if (num) setInvitationNumber(num);
    }
  }, []);

  return (
    <button
      type="button"
      onClick={onEnter}
      aria-label="Open invitation"
      className="fixed inset-0 z-50 block w-full h-full overflow-hidden bg-brand-cream cursor-pointer"
    >
      {/* Envelope */}
      <motion.img
        src="/Gemini_Generated_Image_q1eruq1eruq1eruq.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />

      <motion.div
        className="absolute inset-x-0 top-[9%] z-10 flex flex-col items-center px-6 text-center text-brand-ink"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <p className="text-3xl sm:text-4xl" style={{ fontFamily: "'Great Vibes', cursive" }}>
          {prefix === 'Dear' ? 'Dear' : 'Dear,'}
        </p>
        <p className="mt-2 font-display text-lg sm:text-xl uppercase tracking-[0.2em]">
          {prefix && prefix !== 'Dear' ? `${prefix} ` : ''}{guestName}
        </p>
      </motion.div>

      <motion.p
        className="absolute inset-x-0 bottom-[9%] z-10 text-center font-display text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink"
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        Tap to open
      </motion.p>

      {invitationNumber && (
        <div className="absolute bottom-2 right-3 z-20 text-brand-ink/30 font-sans text-xs tracking-widest select-none pointer-events-none">
          {invitationNumber}
        </div>
      )}
    </button>
  );
};
