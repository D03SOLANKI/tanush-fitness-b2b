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
          <div className="flex items-center justify-between gap-4 pointer-events-auto">
            {/* 1. Left: Vault-Style Brand Logo Capsule Pill */}
            <div
              onClick={() => handleNav('home')}
              className="bg-[#0C1015]/95 backdrop-blur-md border border-[#2A2A2B] hover:border-[#E8E8E8]/40 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-2.5 cursor-pointer shadow-2xl transition-all group shrink-0"
            >
              <TanushLogo variant="white" height={28} className="h-6 sm:h-7 w-auto group-hover:opacity-90 transition-opacity" />
            </div>

            {/* 2. Center: Vault-Style Floating Pill Nav Bar with Scroll Indicator */}
            <div className="hidden lg:flex items-center relative">
              <button
                type="button"
                onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0C1015] border border-[#2A2A2B] hover:border-[#E8E8E8] text-[#D0CFCA] hover:text-[#E8E8E8] flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                title="Scroll down"
              >
                <ArrowRight className="w-2.5 h-2.5 rotate-90" />
              </button>

              <nav className="flex items-center gap-1 bg-[#0C1015]/95 backdrop-blur-md border border-[#2A2A2B] p-1.5 rounded-full shadow-2xl">
                {navLinks.map((item) => {
                  const isActive = currentPage === item.page;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => handleNav(item.page)}
                      className={`px-5 py-2 rounded-full font-satoshi text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none ${
                        isActive
                          ? 'bg-[#E8E8E8] text-[#0F1926] font-bold shadow-md'
                          : 'text-[#D0CFCA] hover:text-[#E8E8E8] hover:bg-[#2A2A2B]/40'
                      }`}
                    >
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* 3. Right: Vault-Style Circular Action Icons & Menu Trigger (=) */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* User Account Login */}
              <button
                type="button"
                onClick={() => openAuthModal()}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0C1015]/95 backdrop-blur-md border border-[#2A2A2B] hover:border-[#E8E8E8]/40 text-[#D0CFCA] hover:text-[#E8E8E8] flex items-center justify-center transition cursor-pointer shadow-2xl"
                title={currentUser ? currentUser.name : 'Account Login'}
              >
                <User className="w-4 h-4" />
              </button>

              {/* Circular Hamburger Menu Button (=) Matching Vault */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0C1015]/95 backdrop-blur-md border border-[#2A2A2B] hover:border-[#E8E8E8]/40 text-[#E8E8E8] flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all duration-200 shadow-2xl group"
                aria-label="Toggle Navigation Menu"
              >
                <span className="w-4 sm:w-5 h-[2px] bg-[#E8E8E8] rounded-full transition-transform duration-200 group-hover:scale-x-110" />
                <span className="w-4 sm:w-5 h-[2px] bg-[#E8E8E8] rounded-full transition-transform duration-200 group-hover:scale-x-110" />
              </button>
            </div>
          </div>
        </div>

        {/* 📱 4. Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-[#0C1015]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
            >
              {/* Top Bar of Modal */}
              <div className="flex items-center justify-between border-b border-[#2A2A2B] pb-6">
                <div
                  onClick={() => handleNav('home')}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <TanushLogo variant="white" height={52} className="h-12 w-auto" />
                </div>

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-3 rounded-full bg-[#2A2A2B] text-[#E8E8E8] hover:bg-[#0F1926] transition cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="py-8 space-y-4">
                {navLinks.map((item, idx) => {
                  const isActive = currentPage === item.page;
                  return (
                    <div
                      key={item.label}
                      onClick={() => handleNav(item.page)}
                      className="group flex items-center justify-between py-3 border-b border-[#2A2A2B] cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-[#D0CFCA]">0{idx + 1}</span>
                        <span
                          className={`font-satoshi text-xl font-bold uppercase tracking-[0.04em] transition ${
                            isActive ? 'text-[#E8E8E8]' : 'text-[#D0CFCA] group-hover:text-[#E8E8E8]'
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-[#2A2A2B] flex items-center justify-center text-[#D0CFCA] group-hover:text-[#E8E8E8] group-hover:bg-[#0F1926] transition">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Contact & GST Info */}
              <div className="border-t border-[#2A2A2B] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D0CFCA]">
                <div className="flex items-center gap-4">
                  <span>100% COMMERCIAL GST INVOICING (18% ITC)</span>
                  <span>•</span>
                  <span>ISO 9001:2015 CERTIFIED</span>
                </div>
                <a href="tel:+918160918894" className="text-[#E8E8E8] hover:text-[#D0CFCA] transition font-bold">
                  Direct Desk: +91 81609 18894
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
