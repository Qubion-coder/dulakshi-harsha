import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';
import { FloatingPetals } from './components/FloatingPetals';

import { Countdown } from './components/Countdown';
import { HappyCouple } from './components/HappyCouple';
import { Program } from './components/Program';
import { Details } from './components/Details';

// Removed Timeline import

import { RSVPForm } from './components/RSVPForm';
import { Footer } from './components/Footer';
import { IntroVideo } from './components/IntroVideo';
import { IntroOverlay } from './components/IntroOverlay';

import { HeroContent } from './components/HeroContent';
import { CornerFlowers } from './components/CornerFlowers';
import { Admin } from './components/Admin';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);

  if (window.location.pathname === '/admin') {
    return <Admin />;
  }
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);
  const bgVideoStarted = useRef(false);

  // Start the background video from the beginning once the guest scrolls past the hero
  const handleMainScroll = (e: React.UIEvent<HTMLElement>) => {
    const video = bgVideoRef.current;
    if (bgVideoStarted.current || !video) return;
    if (e.currentTarget.scrollTop > window.innerHeight * 0.5) {
      bgVideoStarted.current = true;
      video.currentTime = 0;
      video.play().catch(err => console.log("Background video play blocked: ", err));
    }
  };

  const weddingDate = new Date('2026-11-19T09:00:00');

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
      setIsMusicPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      startMusic();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isMusicPlaying]);

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-gold selection:text-white overflow-x-hidden text-brand-ink">
      {/* Fixed Full Site Background */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-white via-brand-cream to-brand-beige">
        {/* Watermark video behind the sections after the hero */}
        <video
          ref={bgVideoRef}
          className="absolute inset-0 h-full w-full object-cover opacity-[0.15] sepia-[0.3]"
          src="/background-story.mp4"
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>

      <FloatingPetals />
      
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/wassak-wela-raveen-tharuka.mp3"
        loop
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
      />

      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div 
            key="intro" 
            exit={{ opacity: 0 }} 
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50"
          >
            <IntroOverlay onEnter={() => {
              setShowIntro(false);
              setShowMain(true);
              startMusic();
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showMain && (
            <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            onScroll={handleMainScroll}
            className="relative z-10 h-[100dvh] w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory"
          >
            {/* Music Toggle Button */}
            <button
              onClick={toggleMusic}
              className="fixed bottom-8 right-8 z-[60] w-14 h-14 glass rounded-full flex items-center justify-center text-brand-ink/70 hover:bg-brand-ink/10 hover:text-brand-ink transition-all active:scale-90 shadow-xl group border border-brand-ink/20"
            >
              <div className="absolute inset-0 rounded-full scale-110 group-hover:scale-125 transition-transform border border-brand-ink/10" />
              {isMusicPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
            </button>



            <HeroContent />

            <HappyCouple />

            <Program />

            <Details />

            <Countdown targetDate={weddingDate} />

            <RSVPForm />

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

