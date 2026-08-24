import React from 'react';
import { Sparkles } from 'lucide-react';

interface MarqueeStripProps {
  items?: string[];
  reverse?: boolean;
  speed?: 'normal' | 'slow';
  theme?: 'dark' | 'orange' | 'gold' | 'minimal' | 'green';
}

const DEFAULT_ITEMS = [
  'STEP INTO TANUSH',
  'FITNESS SANCTUARY',
  'ELEVATE PERFORMANCE',
  'WORLD CLASS EQUIPMENT',
  '11-GAUGE PRECISION STEEL',
  'PAN-INDIA GYM MANAGEMENT ASSEMBLY',
  'MASTER COACH RECRUITMENT',
  'ISO 9001:2015 CERTIFIED',
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
      case 'orange':
        return 'bg-[#1A2018] text-[#D26539] py-3 sm:py-3.5 border-y border-white/10';
      case 'gold':
        return 'bg-[#0D1118] text-[#ECE6DB] py-3 sm:py-3.5 border-y border-white/10';
      case 'green':
        return 'bg-[#26452D] text-[#ECE6DB]/90 py-3 sm:py-3.5 border-y border-[#3A563F]';
      case 'minimal':
        return 'bg-transparent text-white/40 border-y border-white/5 py-3';
      default:
        return 'bg-[#0D1118] text-white/55 border-y border-white/5 py-3';
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
            className={`flex items-center gap-6 mx-6 font-satoshi text-xs sm:text-sm font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase whitespace-nowrap ${
              theme === 'orange' || theme === 'gold' ? 'text-[#090C10]' : ''
            }`}
          >
            <span>{text}</span>
            <span className="text-xs shrink-0">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
