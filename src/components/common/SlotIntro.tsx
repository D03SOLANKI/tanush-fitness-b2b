import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SlotIntroProps {
  onEnter: () => void;
}

const LETTERS = [
  { target: 'T', strip: ['X', 'G', 'H', 'D', 'S', 'L', 'Q', 'T'] },
  { target: 'A', strip: ['Z', 'O', 'Y', 'G', 'H', 'R', 'Q', 'A'] },
  { target: 'N', strip: ['K', 'T', 'H', 'R', 'Z', 'V', 'D', 'N'] },
  { target: 'U', strip: ['M', 'D', 'H', 'C', 'P', 'F', 'Y', 'U'] },
  { target: 'S', strip: ['K', 'M', 'L', 'F', 'E', 'Y', 'X', 'S'] },
  { target: 'H', strip: ['P', 'O', 'G', 'W', 'B', 'M', 'E', 'H'] },
];

export const SlotIntro: React.FC<SlotIntroProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsReady(true);
          return 100;
        }
        return prev + 4;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#090C10] text-[#E2E8F0] p-6 select-none overflow-hidden luxury-noise"
    >
      <div className="w-full max-w-6xl flex items-center justify-between pt-4">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C5A880] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Tanush Fitness Sanctuary</span>
        </div>
        <button
          type="button"
          onClick={onEnter}
          className="text-xs font-mono tracking-widest text-slate-400 hover:text-[#C5A880] transition uppercase border-b border-transparent hover:border-[#C5A880] pb-0.5"
        >
          Skip Intro [ESC]
        </button>
      </div>

      <div className="flex flex-col items-center justify-center my-auto w-full">
        <div className="text-[11px] font-mono tracking-[0.3em] text-slate-500 uppercase mb-8 text-center">
          Precision Commercial Outfitting • Beyond Fitness
        </div>
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 overflow-hidden py-4 px-2">
          {LETTERS.map((col, colIdx) => (
            <div
              key={colIdx}
              className="relative h-20 sm:h-28 md:h-36 w-12 sm:w-16 md:w-24 overflow-hidden rounded-xl bg-[#0D1118]/80 border border-white/5 shadow-2xl flex items-center justify-center"
            >
              <motion.div
                initial={{ y: '0%' }}
                animate={{ y: '-87.5%' }}
                transition={{
                  duration: 1.3 + colIdx * 0.16,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="absolute top-0 flex flex-col items-center"
              >
                {col.strip.map((char, charIdx) => {
                  const isFinal = charIdx === col.strip.length - 1;
                  return (
                    <div
                      key={charIdx}
                      className={`h-20 sm:h-28 md:h-36 flex items-center justify-center font-syne text-3xl sm:text-5xl md:text-6xl font-black ${
                        isFinal
                          ? 'text-[#C5A880] drop-shadow-[0_0_20px_rgba(197,168,128,0.5)]'
                          : 'text-slate-700 opacity-40'
                      }`}
                    >
                      {char}
                    </div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-xs sm:text-sm font-sans tracking-[0.25em] text-[#C5A880] uppercase mt-6 font-semibold"
        >
          COMMERCIAL FITNESS SANCTUARY
        </motion.p>
      </div>

      <div className="w-full max-w-md flex flex-col items-center gap-4 pb-6">
        <AnimatePresence>
          {isReady && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onClick={onEnter}
              className="btn-vault flex items-center gap-2 group w-full sm:w-auto px-8 py-3.5"
            >
              <span>Step Into Tanush</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          )}
        </AnimatePresence>
        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-[#C5A880] to-[#EED9B3] h-full rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}; 
