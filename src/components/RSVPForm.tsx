import React, { useState, useEffect } from 'react';
import { getFullGuestName } from '../utils/guestInfo';
import { submitToGoogleSheet } from '../googleSheets';
import { motion } from 'motion/react';

export const RSVPForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [attending, setAttending] = useState('');
  const [guests, setGuests] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fullName = getFullGuestName();
    if (fullName) {
      setName(fullName);
    }
  }, []);
  const handleRSVP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!attending) {
      setError('Please let us know if you can attend');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    try {
      const status = attending === 'yes' ? 'Accepts' : 'Declines';
      await submitToGoogleSheet('rsvp', { 
        name, 
        phone,
        guests,
        status, 
        link: window.location.href,
        submittedAt: new Date().toISOString() 
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="w-full min-h-[100dvh] snap-start flex flex-col items-center justify-center bg-transparent px-4 py-10 relative overflow-hidden">
      <motion.div 
        className="relative w-full max-w-md overflow-hidden flex flex-col p-8 sm:p-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="relative z-10 flex flex-col w-full space-y-6">
          
          <div className="text-center space-y-4 mb-2">
            <p className="text-4xl sm:text-5xl text-brand-ink leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Will you join us?
            </p>
            <h2 className="font-display font-normal text-brand-ink uppercase leading-none tracking-normal whitespace-nowrap text-7xl sm:text-8xl">
              RSVP
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-brand-ink/40" />
              <p className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-ink">
                Kindly Reply
              </p>
              <span className="h-px w-10 bg-brand-ink/40" />
            </div>
            <p className="text-sm font-serif text-brand-ink/90 leading-relaxed px-2">
              We joyfully await your presence to celebrate our wedding ceremony. Please let us know if you will be joining us.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <p className="text-3xl font-display text-brand-ink mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>Thank you!</p>
              <p className="text-sm font-serif text-brand-ink/70">Your response has been lovingly recorded.</p>
            </div>
          ) : (
            <form onSubmit={handleRSVP} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="block text-brand-ink font-serif text-sm">Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full rounded-xl bg-white/70 text-brand-ink border border-brand-ink/50 px-3 py-2.5 font-sans focus:ring-1 focus:ring-brand-ink focus:border-brand-ink outline-none transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-brand-ink font-serif text-sm">Phone Number</label>
                <input 
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel" 
                  className="w-full rounded-xl bg-white/70 text-brand-ink border border-brand-ink/50 px-3 py-2.5 font-sans focus:ring-1 focus:ring-brand-ink focus:border-brand-ink outline-none transition-all"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-brand-ink font-serif text-sm">Will you attend?</label>
                <div className="relative">
                  <select 
                    required 
                    value={attending}
                    onChange={(e) => setAttending(e.target.value)}
                    className="w-full rounded-xl bg-white/70 text-brand-ink border border-brand-ink/50 px-3 py-2.5 font-sans appearance-none focus:ring-1 focus:ring-brand-ink focus:border-brand-ink outline-none transition-all [&>option]:bg-white"
                    disabled={isSubmitting}
                  >
                    <option value="" disabled></option>
                    <option value="yes">Yes, I will attend</option>
                    <option value="no">Sorry, I can't attend</option>
                  </select>
                  <svg className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-ink pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-brand-ink font-serif text-sm">Number of Guest</label>
                <div className="relative flex items-center overflow-hidden rounded-xl bg-white/70 border border-brand-ink/50 transition-all">
                  <button 
                    type="button" 
                    className="px-4 py-2.5 text-brand-ink hover:bg-brand-ink/10"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    disabled={isSubmitting}
                  >
                    ◀
                  </button>
                  <div className="flex-1 text-center text-brand-ink font-serif">
                    {guests}
                  </div>
                  <button 
                    type="button" 
                    className="px-4 py-2.5 text-brand-ink hover:bg-brand-ink/10"
                    onClick={() => setGuests(guests + 1)}
                    disabled={isSubmitting}
                  >
                    ▶
                  </button>
                </div>
              </div>

              {error && <p className="text-red-700 text-sm font-sans text-center">{error}</p>}

              <div className="pt-6 pb-2">
                <button 
                  type="submit" 
                  className="w-full rounded-xl bg-brand-ink text-brand-cream py-3.5 text-sm tracking-widest uppercase font-serif hover:bg-brand-ink/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-brand-ink"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
              
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};
