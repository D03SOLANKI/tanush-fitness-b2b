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
    { label: 'Outfitting Desk', page: 'contact' },
  ];

  const handleNav = (page: PageType) => {
    navigateTo(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0C1015]/95 backdrop-blur-md border-b border-[#2A2A2B] shadow-2xl py-3'
            : 'bg-[#0F1926]/90 backdrop-blur-sm border-b border-[#2A2A2B]/60 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* 1. Official Brand Logo Lockup */}
            <div
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
            >
              <TanushLogo variant="white" height={64} className="h-12 sm:h-14 md:h-16 w-auto group-hover:opacity-90 transition-opacity" />
            </div>

            {/* 2. Desktop Center Nav Pill Bar */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#0C1015] border border-[#2A2A2B] p-1.5 rounded-full shadow-inner">
              {navLinks.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNav(item.page)}
                    className={`px-4 py-2 rounded-full font-satoshi text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none ${
                      isActive
                        ? 'bg-[#5E656E] text-[#0F1926] font-bold shadow-md'
                        : 'text-[#D0CFCA] hover:text-[#5E656E] hover:bg-[#2A2A2B]/50'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* 3. Action Hub (Consultation CTA, User Account, Menu Trigger) */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* User Account Login */}
              <button
                type="button"
                onClick={() => openAuthModal()}
                className="p-2.5 rounded-full bg-[#0C1015] border border-[#2A2A2B] hover:border-[#D0CFCA] text-[#D0CFCA] hover:text-[#5E656E] transition cursor-pointer"
                title={currentUser ? currentUser.name : 'Account Login'}
              >
                <User className="w-4 h-4" />
              </button>

              {/* Consultation Direct CTA */}
              <button
                type="button"
                onClick={() => handleNav('contact')}
                className="hidden xl:inline-flex items-center gap-2 btn-primary text-xs py-2.5 px-6 cursor-pointer shadow-md"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile / Full Drawer Menu Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-[#0C1015] border border-[#2A2A2B] text-[#5E656E] hover:text-white transition cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                  className="p-3 rounded-full bg-[#2A2A2B] text-[#5E656E] hover:bg-[#0F1926] transition cursor-pointer"
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
                            isActive ? 'text-[#5E656E]' : 'text-[#D0CFCA] group-hover:text-[#5E656E]'
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-[#2A2A2B] flex items-center justify-center text-[#D0CFCA] group-hover:text-[#5E656E] group-hover:bg-[#0F1926] transition">
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
                <a href="tel:+918160918894" className="text-[#5E656E] hover:text-[#D0CFCA] transition font-bold">
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
