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
    gold: "bg-[#D26539]/10 text-[#D26539] border border-[#D26539]/20 shadow-[0_2px_10px_rgba(210,101,57,0.15)]",
    dark: "bg-[#090C10] text-white border border-white/10",
    outline: "bg-[#1A2018] text-[#7A7268] border border-white/10",
    green: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  return (
    <span className={`${baseStyles} ${sizeStyles} ${variantStyles[variant]}`}>
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      {children}
    </span>
  );
};
