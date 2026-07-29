import React from 'react';

export const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-[#141414] border border-[#2A2A2A] rounded-2xl overflow-hidden animate-pulse p-4 flex flex-col justify-between h-[420px]">
      <div className="w-full h-48 bg-zinc-800/60 rounded-xl mb-4" />
      <div className="space-y-3">
        <div className="h-4 bg-zinc-800/80 rounded w-1/3" />
        <div className="h-6 bg-zinc-800/90 rounded w-4/5" />
        <div className="h-4 bg-zinc-800/60 rounded w-2/3" />
      </div>
      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between mt-auto">
        <div className="h-7 bg-zinc-800/80 rounded w-1/4" />
        <div className="h-10 bg-zinc-800/90 rounded-xl w-1/3" />
      </div>
    </div>
  );
};
