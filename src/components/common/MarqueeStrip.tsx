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
  theme = 'orange',
}) => {
  const repeated = [...items, ...items, ...items, ...items];

  const getThemeClass = () => {
    switch (theme) {
      case 'green':
        return 'bg-[#D26539] text-[#090C10] py-3 sm:py-3.5 border-y border-[#C2552F]';
      case 'minimal':
        return 'bg-[#D26539] text-[#090C10] border-y border-[#C2552F] py-3';
      case 'gold':
      case 'orange':
      default:
        return 'bg-[#D26539] text-[#090C10] py-3 sm:py-3.5 shadow-lg border-y border-[#C2552F]';
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
