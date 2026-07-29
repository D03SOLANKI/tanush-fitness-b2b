import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  actionText?: string;
  onActionClick?: () => void;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  actionText,
  onActionClick,
  align = 'left'
}) => {
  return (
    <div className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'flex flex-col md:flex-row md:items-end justify-between gap-6'}`}>
      <div>
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[3px] bg-blue-600 rounded-full" />
          <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-blue-600 font-mono">
            {subtitle}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-heading uppercase">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>

      {actionText && onActionClick && align === 'left' && (
        <button
          onClick={onActionClick}
          className="inline-flex items-center gap-2.5 text-xs font-black text-blue-600 hover:text-slate-900 transition-colors group shrink-0 uppercase tracking-widest font-mono"
        >
          <span>{actionText}</span>
          <span className="w-9 h-9 rounded-xl bg-blue-50 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center transition-all duration-300 border border-blue-200/80 shadow-sm">
            →
          </span>
        </button>
      )}
    </div>
  );
};
