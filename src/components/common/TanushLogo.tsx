import React from 'react';

interface TanushLogoProps {
  variant?: 'white' | 'dark' | 'symbol' | 'symbol-white';
  className?: string;
  height?: number | string;
  showText?: boolean;
  alt?: string;
}

export const TanushLogo: React.FC<TanushLogoProps> = ({
  variant = 'white',
  className = '',
  height = 50,
  showText = true,
  alt = 'Tanush',
}) => {
  if (variant === 'symbol' || variant === 'symbol-white' || !showText) {
    const src = variant === 'symbol' ? '/tanush-symbol.png' : '/tanush-symbol-white.png';
    return (
      <img
        src={src}
        alt={alt}
        style={{ height }}
        className={`object-contain select-none inline-block ${className}`}
      />
    );
  }

  const src = variant === 'dark' ? '/tanush-logo.png' : '/tanush-logo-white.png';

  return (
    <img
      src={src}
      alt={alt}
      style={{ height }}
      className={`object-contain select-none inline-block ${className}`}
    />
  );
};
