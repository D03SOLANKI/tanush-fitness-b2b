import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { PageType } from '../../types';
import {
  Menu,
  X,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  FileText,
  ArrowUpRight,
  Compass,
  Building2,
  Dumbbell,
  Briefcase,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    navigateTo,
    enquiryCart,
    setIsEnquiryCartOpen,
    currentUser,
    openAuthModal,
    logoutUser,
  } = useApp();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const enquiryCount = enquiryCart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageType; subtitle: string; icon: React.ReactNode }[] = [
    { label: 'Overview', page: 'home', subtitle: 'Sanctuary & Flagship Hub', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Services', page: 'services', subtitle: '360° Turnkey Architecture & Setup', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Equipment Sanctuary', page: 'equipment', subtitle: 'Biomechanical Machines & Rigs', icon: <Dumbbell className="w-4 h-4" /> },
    { label: 'Master Staffing', page: 'manpower', subtitle: 'Certified Trainers & Operation Leads', icon: <Users className="w-4 h-4" /> },
    { label: 'Vision & Legacy', page: 'about', subtitle: 'Manufacturing Philosophy', icon: <Compass className="w-4 h-4" /> },
    { label: 'VIP Consultation', page: 'contact', subtitle: 'Direct Outfitting Procurement', icon: <Phone className="w-4 h-4" /> },
  ];

  const handleNav = (page: PageType) => {
    navigateTo(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar - Vault Precision Tone */}
      <div className="w-full bg-[#05070A] text-slate-400 border-b border-white/5 font-mono text-[11px] select-none z-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="tel:+919067800048"
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#C5A880] transition-colors font-bold whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              <span>+91 90678 00048</span>
              <span className="text-slate-500 font-normal hidden sm:inline">(Commercial Outfitting Desk)</span>
            </a>

            <span className="text-white/10 hidden sm:inline">•</span>

            <div className="hidden sm:flex items-center gap-1.5 text-slate-400 whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>100% Commercial GST Invoicing (18% ITC)</span>
            </div>
          </div>

          <div className="flex items-center gap-4 whitespace-nowrap">
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Pan-India Turnkey Assembly</span>
            </div>

            <span className="text-white/10 hidden md:inline">•</span>

            <a
              href="mailto:Info@tanushfitness.com"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>Info@tanushfitness.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Main Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090C10]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
            : 'bg-[#090C10]/70 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* 1. Brand Logo Lockup */}
            <div
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B2232] to-[#0D1117] border border-[#C5A880]/30 flex items-center justify-center shadow-lg group-hover:border-[#C5A880] transition-colors">
                <span className="font-syne font-black text-lg text-[#C5A880]">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-black text-lg tracking-[0.12em] text-[#E2E8F0] group-hover:text-white uppercase leading-none">
                  TANUSH
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-[#C5A880] uppercase mt-0.5">
                  FITNESS SANCTUARY
                </span>
              </div>
            </div>

            {/* 2. Desktop Quick Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.15em]">
              <button
                type="button"
                onClick={() => handleNav('home')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'home' ? 'text-[#C5A880]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Overview
                {currentPage === 'home' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleNav('services')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'services' ? 'text-[#C5A880]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Services
                {currentPage === 'services' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleNav('equipment')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'equipment' ? 'text-[#C5A880]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Equipment
                {currentPage === 'equipment' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleNav('manpower')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'manpower' ? 'text-[#C5A880]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Manpower
                {currentPage === 'manpower' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleNav('about')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'about' ? 'text-[#C5A880]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Story
                {currentPage === 'about' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full" />
                )}
              </button>
            </nav>

            {/* 3. Action Hub (RFQ Cart, Consultation CTA, Menu Trigger) */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* RFQ Cart Badge */}
              <button
                type="button"
                onClick={() => setIsEnquiryCartOpen(true)}
                className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#C5A880] border border-white/5 transition"
                title="Commercial Outfitting RFQ Cart"
              >
                <FileText className="w-4 h-4" />
                {enquiryCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C5A880] text-[#090C10] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {enquiryCount}
                  </span>
                )}
              </button>

              {/* Consultation CTA */}
              <button
                type="button"
                onClick={() => handleNav('contact')}
                className="hidden sm:inline-flex px-5 py-2 rounded-full bg-[#C5A880] text-[#090C10] text-[11px] font-black uppercase tracking-widest hover:bg-white transition"
              >
                Book VIP Consultation
              </button>

              {/* Fullscreen Menu Trigger */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#C5A880] border border-[#C5A880]/20 hover:border-[#C5A880] transition"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 🎬 Fullscreen Cinematic Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#090C10] text-[#E2E8F0] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto luxury-noise"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C5A880] text-[#090C10] flex items-center justify-center font-syne font-black text-sm">
                  T
                </div>
                <span className="font-syne font-bold tracking-[0.2em] text-xs text-[#C5A880] uppercase">
                  Navigation Sanctuary
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links Grid */}
            <div className="w-full max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-4">
                <div className="text-[11px] font-mono tracking-[0.3em] text-[#C5A880] uppercase mb-2">
                  EXPLORE ARCHITECTURE & PLATFORM
                </div>
                {navLinks.map((item, idx) => (
                  <motion.div
                    key={item.page}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    onClick={() => handleNav(item.page)}
                    className="group cursor-pointer flex items-center justify-between py-2 border-b border-white/5 hover:border-[#C5A880]/30 transition"
                  >
                    <div>
                      <div className="font-syne text-2xl sm:text-4xl font-extrabold text-slate-200 group-hover:text-[#C5A880] transition uppercase tracking-wide flex items-center gap-3">
                        <span>{item.label}</span>
                      </div>
                      <div className="text-xs text-slate-500 font-sans tracking-normal mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-[#C5A880] group-hover:translate-x-1 group-hover:-translate-y-1 transition transform" />
                  </motion.div>
                ))}
              </div>

              {/* Menu Right Info Card */}
              <div className="bg-[#0D1118] border border-white/10 rounded-2xl p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="text-[11px] font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-3">
                    COMMERCIAL INQUIRIES
                  </div>
                  <h3 className="font-syne text-2xl font-bold text-white mb-2">
                    Step Into The Sanctuary
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Partner with India's premier commercial gym outfitters. Transform raw square footage into high-performance fitness destinations.
                  </p>
                </div>

                <div className="space-y-3 font-mono text-xs text-slate-300 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C5A880]" />
                    <span>+91 90678 00048</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#C5A880]" />
                    <span>Info@tanushfitness.com</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="px-5 py-3 rounded-full bg-[#C5A880] text-[#090C10] text-[11px] font-black uppercase tracking-widest hover:bg-white transition text-center"
                >
                  Schedule Commercial Consultation
                </button>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="w-full max-w-7xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
              <div>© 2026 Tanush Fitness. All Rights Reserved.</div>
              <div className="flex items-center gap-4">
                <button type="button" onClick={() => handleNav('admin')} className="hover:text-slate-300">Admin Portal</button>
                <span>•</span>
                <span>ISO 9001:2015 Outfitting Standard</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
