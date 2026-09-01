import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { PageType } from '../../types';
import {
  Menu,
  X,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Sparkles,
  ArrowRight,
  Dumbbell,
  Users,
  Briefcase,
  Compass,
  User,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TanushLogo } from './TanushLogo';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    navigateTo,
    enquiryCart,
    setIsEnquiryCartOpen,
    openAuthModal,
    currentUser,
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const enquiryCount = (enquiryCart || []).reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Overview', page: 'home' },
    { label: 'Equipment Sanctuary', page: 'equipment' },
    { label: 'Gym Management', page: 'services' },
    { label: 'Manpower Services', page: 'manpower' },
    { label: 'About', page: 'about' },
  ];

  const handleNav = (page: PageType) => {
    navigateTo(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Bottom Navigation Dock (Vault Style) */}
      <header
        className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-40 pointer-events-none transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4 pointer-events-auto">
            {/* 1. Left: Brand Logo in Elevated Capsule Box */}
            <div
              onClick={() => handleNav('home')}
              className="bg-[#0C1015]/95 backdrop-blur-md border border-[#2A2A2B] hover:border-[#E8E8E8]/40 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full flex items-center gap-2 cursor-pointer shadow-2xl transition-all group shrink-0"
            >
              <TanushLogo variant="white" height={42} className="h-8 sm:h-10 w-auto group-hover:opacity-95 transition-opacity drop-shadow-md" />
            </div>

            {/* 2. Center: Floating Pill Nav Bar (Desktop Only) */}
            <div className="hidden lg:flex items-center">
              <nav className="flex items-center gap-1 bg-[#0C1015]/95 backdrop-blur-md border border-[#2A2A2B] p-1.5 rounded-full shadow-2xl">
                {navLinks.map((item) => {
                  const isActive = currentPage === item.page;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => handleNav(item.page)}
                      className={`px-3.5 sm:px-5 py-2 rounded-full font-montserrat text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none whitespace-nowrap ${
                        isActive
                          ? 'bg-[#E8E8E8] text-[#0F1926] font-bold shadow-md'
                          : 'text-[#D0CFCA] hover:text-[#E8E8E8] hover:bg-[#2A2A2B]/40'
                      }`}
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
                    >
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* 3. Right: User Account Action & Mobile/Tablet Menu Button */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* User Account Login */}
              <button
                type="button"
                onClick={() => openAuthModal()}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0C1015]/95 backdrop-blur-md border border-[#2A2A2B] hover:border-[#E8E8E8]/40 text-[#D0CFCA] hover:text-[#E8E8E8] flex items-center justify-center transition cursor-pointer shadow-2xl"
                title={currentUser ? currentUser.name : 'Account Login'}
              >
                <User className="w-4 h-4" />
              </button>

              {/* Hamburger Menu Button (Mobile & Tablet) */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0C1015]/95 backdrop-blur-md border border-[#2A2A2B] hover:border-[#E8E8E8]/40 text-[#E8E8E8] flex items-center justify-center cursor-pointer transition-all duration-200 shadow-2xl group"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8E8E8] group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 📱 4. Mobile & Tablet Navigation Drawer (Fully Interactive Fullscreen Modal) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-[#0C1015]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto pointer-events-auto"
          >
            {/* Top Bar: Brand Logo & Close Button */}
            <div className="flex items-center justify-between border-b border-[#2A2A2B] pb-5 shrink-0">
              <div
                onClick={() => handleNav('home')}
                className="flex items-center gap-2.5 cursor-pointer select-none"
              >
                <TanushLogo variant="white" height={40} className="h-9 sm:h-10 w-auto" />
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="w-11 h-11 rounded-full bg-[#2A2A2B] hover:bg-[#0F1926] text-[#E8E8E8] flex items-center justify-center transition cursor-pointer border border-white/10 shadow-lg"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="py-6 sm:py-8 space-y-2.5 sm:space-y-3 flex-1 flex flex-col justify-center max-w-xl w-full mx-auto">
              {navLinks.map((item, idx) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNav(item.page)}
                    className={`w-full group flex items-center justify-between py-3.5 px-5 rounded-2xl transition-all duration-200 cursor-pointer text-left ${
                      isActive
                        ? 'bg-[#E8E8E8] text-[#0F1926] shadow-xl'
                        : 'bg-[#0F1926]/70 border border-[#2A2A2B] text-[#D0CFCA] hover:text-[#E8E8E8] hover:border-[#E8E8E8]/30 hover:bg-[#15202E]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs ${isActive ? 'text-[#0F1926]/70 font-bold' : 'text-[#D0CFCA]/70'}`}>
                        0{idx + 1}
                      </span>
                      <span
                        className="font-montserrat text-sm sm:text-base font-bold uppercase tracking-wider"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
                      >
                        {item.label}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                        isActive
                          ? 'bg-[#0F1926] text-[#E8E8E8]'
                          : 'bg-[#2A2A2B] text-[#D0CFCA] group-hover:text-[#E8E8E8] group-hover:bg-[#0F1926]'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Actions & Contact Footer */}
            <div className="space-y-4 pt-4 border-t border-[#2A2A2B] shrink-0 max-w-xl w-full mx-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="btn-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    openAuthModal();
                  }}
                  className="btn-dark w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <User className="w-4 h-4" />
                  <span>{currentUser ? currentUser.name : 'Account Login'}</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-[#D0CFCA]/80 pt-2 text-center sm:text-left">
                <span>100% COMMERCIAL GST INVOICING (18% ITC) • COMMERCIAL GRADE</span>
                <a href="tel:+918160918894" className="text-[#E8E8E8] hover:underline font-bold">
                  Direct Desk: +91 81609 18894
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
