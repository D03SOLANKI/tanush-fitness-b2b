import React from 'react';
import { useApp } from '../../context/AppContext';
import { PageType } from '../../types';

export const BottomNavDock: React.FC = () => {
  const { currentPage, navigateTo } = useApp();

  const handleNav = (page: PageType, sectionId?: string) => {
    navigateTo(page);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 px-4 sm:px-8 pointer-events-none select-none transform-gpu translate-z-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Floating Pill: TANUSH FITNESS */}
        <div className="pointer-events-auto">
          <button
            type="button"
            onClick={() => handleNav('home')}
            className="bg-[#0D1811] border border-[#D26539]/40 hover:border-[#D26539] px-6 sm:px-8 py-3 rounded-full font-satoshi font-black text-xs sm:text-sm tracking-[0.2em] text-[#D26539] transition-colors shadow-2xl uppercase cursor-pointer"
          >
            TANUSH FITNESS
          </button>
        </div>

        {/* Center Floating Dock */}
        <div className="pointer-events-auto hidden md:flex items-center gap-2 bg-[#0D1811] border border-white/15 p-2 rounded-full shadow-2xl font-satoshi text-xs sm:text-[13px] uppercase tracking-wider">
          <button
            type="button"
            onClick={() => handleNav('home', 'about')}
            className={`px-5 py-2.5 rounded-full font-bold transition-colors cursor-pointer ${
              currentPage === 'home'
                ? 'bg-[#D26539] text-white shadow-md'
                : 'text-[#A8A090] hover:text-white hover:bg-white/5'
            }`}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => handleNav('equipment')}
            className={`px-5 py-2.5 rounded-full font-semibold transition-colors cursor-pointer ${
              currentPage === 'equipment'
                ? 'bg-[#D26539] text-white font-bold shadow-md'
                : 'text-[#A8A090] hover:text-white hover:bg-white/5'
            }`}
          >
            Equipment
          </button>

          <button
            type="button"
            onClick={() => handleNav('services')}
            className={`px-5 py-2.5 rounded-full font-semibold transition-colors cursor-pointer ${
              currentPage === 'services'
                ? 'bg-[#D26539] text-white font-bold shadow-md'
                : 'text-[#A8A090] hover:text-white hover:bg-white/5'
            }`}
          >
            Gym Management
          </button>

          <button
            type="button"
            onClick={() => handleNav('manpower')}
            className={`px-5 py-2.5 rounded-full font-semibold transition-colors cursor-pointer ${
              currentPage === 'manpower'
                ? 'bg-[#D26539] text-white font-bold shadow-md'
                : 'text-[#A8A090] hover:text-white hover:bg-white/5'
            }`}
          >
            Manpower
          </button>

          <button
            type="button"
            onClick={() => handleNav('contact')}
            className={`px-5 py-2.5 rounded-full font-semibold transition-colors cursor-pointer ${
              currentPage === 'contact'
                ? 'bg-[#D26539] text-white font-bold shadow-md'
                : 'text-[#A8A090] hover:text-white hover:bg-white/5'
            }`}
          >
            Consultation
          </button>
        </div>

        {/* Right Floating Circular Hamburger Button */}
        <div className="pointer-events-auto">
          <button
            type="button"
            onClick={() => handleNav('home', 'directory')}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0D1811] border border-white/15 flex flex-col items-center justify-center gap-1.5 text-white hover:border-[#D26539] hover:bg-[#142319] transition-colors shadow-2xl group cursor-pointer"
            aria-label="Scroll to Directory Section"
            title="Navigate to Directory"
          >
            <span className="w-5 sm:w-6 h-[2px] bg-white group-hover:bg-[#D26539] rounded-full transition-all group-hover:scale-x-110" />
            <span className="w-5 sm:w-6 h-[2px] bg-white group-hover:bg-[#D26539] rounded-full transition-all group-hover:scale-x-110" />
          </button>
        </div>
      </div>
    </div>
  );
};
