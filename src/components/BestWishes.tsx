import React, { useState, useEffect } from 'react';
import { getFullGuestName } from '../utils/guestInfo';
import { motion } from 'motion/react';
import { submitToGoogleSheet } from '../googleSheets';

export const BestWishes: React.FC = () => {
  const [name, setName] = useState('');
  const [wishes, setWishes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fullName = getFullGuestName();
    if (fullName) {
      setName(fullName);
    }
  }, []);
  const handleWishes = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!wishes.trim()) {
      setError('Please enter your wishes');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    try {
      await submitToGoogleSheet('wishes', { 
        name, 
        message: wishes,
        submittedAt: new Date().toISOString() 
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Failed to send wishes. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="wishes" className="w-full min-h-[100dvh] snap-start flex flex-col justify-center bg-transparent px-6 py-10 relative overflow-hidden">
      <div className="container mx-auto max-w-lg relative z-10">
        
        <motion.div 
          className="flex flex-col w-full space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          
          <div className="text-left space-y-4 mb-2">
            <h2 className="text-2xl sm:text-3xl font-serif text-brand-ink uppercase tracking-widest">
              BEST WISHES
            </h2>
            <p className="text-sm font-serif text-brand-ink/90 leading-relaxed">
              Leave us your beautiful wishes and most sincere prayers here as we are so excited to embark on this new journey together:
            </p>
          </div>

          {submitted ? (
            <div className="text-left py-10">
              <p className="text-2xl font-serif text-brand-ink mb-4">Thank you!</p>
              <p className="text-sm font-serif text-brand-ink/70">Your beautiful wishes mean the world to us.</p>
            </div>
          ) : (
            <form onSubmit={handleWishes} className="space-y-6">
              
              <div className="space-y-1.5">
                <label className="block text-brand-ink font-serif text-sm">Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-white/70 text-brand-ink border border-brand-ink/50 px-3 py-2.5 font-sans focus:ring-1 focus:ring-brand-ink focus:border-brand-ink outline-none transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-brand-ink font-serif text-sm">Your Best Wishes</label>
                <div className="relative">
                  <textarea 
                    required 
                    maxLength={500}
                    rows={4}
                    className="w-full bg-white/70 text-brand-ink border border-brand-ink/50 px-3 py-2.5 font-sans focus:ring-1 focus:ring-brand-ink focus:border-brand-ink outline-none transition-all resize-none"
                    value={wishes}
                    onChange={(e) => setWishes(e.target.value)}
                    disabled={isSubmitting}
                  />
                  <div className="absolute bottom-2 right-2 text-brand-ink/70 text-xs font-serif">
                    500
                  </div>
                </div>
              </div>

              {error && <p className="text-red-700 text-sm font-sans">{error}</p>}

              <div className="pt-2 flex justify-start">
                <button 
                  type="submit" 
                  className="bg-brand-ink text-brand-cream px-8 py-3.5 text-sm tracking-widest uppercase font-serif hover:bg-brand-ink/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-brand-ink"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Wishes'}
                </button>
              </div>
              
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
