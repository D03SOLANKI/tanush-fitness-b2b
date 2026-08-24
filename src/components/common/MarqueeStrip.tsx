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
    <div className={`w-full overflow-hidden select-none pointer-events-none ${getThemeClass()}`}>
      <div className={`flex w-max ${getAnimationClass()}`}>
        {/* Track Set 1 */}
        <div className="flex items-center shrink-0">
          {items.map((text, idx) => (
            <div
              key={`t1-${idx}`}
              className="flex items-center gap-6 mx-6 font-satoshi text-xs sm:text-sm font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase whitespace-nowrap text-[#090C10]"
            >
              <span>{text}</span>
              <span className="text-xs shrink-0 opacity-80">✦</span>
            </div>
          ))}
        </div>
        {/* Track Set 2 (Exact Duplicate for 100% Seamless Infinite Revolving Loop) */}
        <div className="flex items-center shrink-0">
          {items.map((text, idx) => (
            <div
              key={`t2-${idx}`}
              className="flex items-center gap-6 mx-6 font-satoshi text-xs sm:text-sm font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase whitespace-nowrap text-[#090C10]"
            >
              <span>{text}</span>
              <span className="text-xs shrink-0 opacity-80">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
