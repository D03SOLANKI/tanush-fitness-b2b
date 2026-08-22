import React from 'react';
import { Sparkles, Shield, Compass, Award } from 'lucide-react';

interface MarqueeStripProps {
  items?: string[];
  reverse?: boolean;
  speed?: 'normal' | 'slow';
  theme?: 'dark' | 'gold' | 'minimal';
}

const DEFAULT_ITEMS = [
  'STEP INTO TANUSH',
  'FITNESS SANCTUARY',
  'ELEVATE PERFORMANCE',
  'WORLD CLASS EQUIPMENT',
  '11-GAUGE PRECISION STEEL',
  'PAN-INDIA TURNKEY ASSEMBLY',
  'MASTER COACH RECRUITMENT',
  'ISO 9001:2015 CERTIFIED',
];

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({
  items = DEFAULT_ITEMS,
  reverse = false,
  speed = 'normal',
  theme = 'gold',
}) => {
  const repeated = [...items, ...items, ...items, ...items];

  const getThemeClass = () => {
    switch (theme) {
      case 'gold':
        return 'bg-[#C5A880] text-[#090C10] py-3 sm:py-3.5 shadow-lg border-y border-[#B3936A]';
      case 'minimal':
        return 'bg-transparent text-slate-400 border-y border-white/5 py-3';
      default:
        return 'bg-[#0D1118] text-[#C5A880] border-y border-white/5 py-3';
    }
  };

  const getAnimationClass = () => {
    if (reverse) return 'animate-marquee-reverse';
    if (speed === 'slow') return 'animate-marquee-slow';
    return 'animate-marquee';
  };

  return (
    <div className={`w-full overflow-hidden select-none ${getThemeClass()}`}>
      <div className={getAnimationClass()}>
        {repeated.map((text, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-6 mx-6 font-syne text-xs sm:text-sm font-extrabold tracking-[0.2em] sm:tracking-[0.25em] uppercase whitespace-nowrap ${
              theme === 'gold' ? 'text-[#090C10]' : ''
            }`}
          >
            <span>{text}</span>
            <Sparkles
              className={`w-3.5 h-3.5 shrink-0 ${
                theme === 'gold'
                  ? 'fill-[#090C10] text-[#090C10]'
                  : 'text-[#C5A880] opacity-80'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 
