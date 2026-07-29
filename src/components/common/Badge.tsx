import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'dark' | 'outline' | 'green';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'sm',
  icon
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 font-bold tracking-wider uppercase rounded-full transition-all shadow-sm";
  
  const sizeStyles = size === 'sm' 
    ? "px-2.5 py-0.5 text-[10px]" 
    : "px-3.5 py-1 text-xs sm:text-sm";

  const variantStyles = {
    gold: "bg-blue-50 text-blue-600 border border-blue-200/80 shadow-[0_2px_10px_rgba(59,130,246,0.15)]",
    dark: "bg-slate-900 text-white border border-slate-800",
    outline: "bg-white text-slate-600 border border-slate-200",
    green: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  return (
    <span className={`${baseStyles} ${sizeStyles} ${variantStyles[variant]}`}>
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      {children}
    </span>
  );
};
