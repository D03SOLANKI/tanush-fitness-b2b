import React from 'react';
import { Sparkles, Shield, Compass, Award } from 'lucide-react';

interface MarqueeStripProps {
  items?: string[];
  reverse?: boolean;
  speed?: 'normal' | 'slow';
  theme?: 'dark' | 'gold' | 'minimal';
}

const DEFAULT_ITEMS = [
  'BEYOND FITNESS',
  'TANUSH COMMERCIAL SANCTUARY',
  'PRECISION BIOMECHANICS',
  'PAN-INDIA TURNKEY ASSEMBLY',
  'PRECOR & MATRIX AFFILIATES',
  'HYPERICE RECOVERY LABS',
  'MASTER COACH CERTIFICATION',
];

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({
  items = DEFAULT_ITEMS,
  reverse = false,
  speed = 'normal',
  theme = 'dark',
}) => {
  const repeated = [...items, ...items, ...items, ...items];

  const getThemeClass = () => {
    switch (theme) {
      case 'gold':
        return 'bg-[#C5A880] text-[#090C10] border-y border-[#DFBE82]/40';
      case 'minimal':
        return 'bg-transparent text-slate-400 border-y border-white/5';
      default:
        return 'bg-[#0D1118] text-[#C5A880] border-y border-white/5';
    }
  };

  const getAnimationClass = () => {
    if (reverse) return 'animate-marquee-reverse';
    if (speed === 'slow') return 'animate-marquee-slow';
    return 'animate-marquee';
  };

  return (
    <div className={`w-full overflow-hidden py-3 select-none ${getThemeClass()}`}>
      <div className={getAnimationClass()}>
        {repeated.map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-6 font-syne text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase whitespace-nowrap">
            <span>{text}</span>
            <Sparkles className={`w-3.5 h-3.5 ${theme === 'gold' ? 'text-[#090C10]' : 'text-[#C5A880] opacity-80'}`} />
          </div>
        ))}
      </div>
    </div>
  );
}; 
