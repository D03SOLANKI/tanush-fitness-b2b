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
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    navigateTo,
    enquiryCart,
    setIsEnquiryCartOpen,
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

  const navLinks: { label: string; page: PageType; subtitle: string; icon: React.ReactNode }[] = [
    { label: 'Overview', page: 'home', subtitle: 'Sanctuary & Flagship Hub', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Services', page: 'services', subtitle: '360° GYM MANAGEMENT Architecture & Setup', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Equipment', page: 'equipment', subtitle: 'Biomechanical Machines & Rigs', icon: <Dumbbell className="w-4 h-4" /> },
    { label: 'Manpower', page: 'manpower', subtitle: 'Certified Trainers & Operation Leads', icon: <Users className="w-4 h-4" /> },
    { label: 'About', page: 'about', subtitle: 'Vision, Legacy & What/Why Tanush', icon: <Compass className="w-4 h-4" /> },
    { label: 'VIP Consultation', page: 'contact', subtitle: 'Direct Outfitting Procurement', icon: <Phone className="w-4 h-4" /> },
  ];

  const handleNav = (page: PageType) => {
    navigateTo(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Urgent Announcement / Direct Hotline Bar */}
      <div className="w-full bg-[#090C10] text-[#A8A090] border-b border-white/5 font-mono text-[11px] select-none z-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="tel:+918160918894"
              className="flex items-center gap-1.5 text-[#A8A090] hover:text-[#D26539] transition-colors font-bold whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#D26539]" />
              <span>+91 81609 18894</span>
              <span className="text-[#6B6358] font-normal hidden sm:inline">(commercial & residential outfitting Desk)</span>
            </a>

            <span className="text-white/10 hidden sm:inline">•</span>

            <div className="hidden sm:flex items-center gap-1.5 text-[#A8A090] whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D26539]" />
              <span>100% Commercial GST Invoicing (18% ITC)</span>
            </div>
          </div>

          <div className="flex items-center gap-4 whitespace-nowrap">
            <div className="hidden md:flex items-center gap-1.5 text-[#A8A090]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3A563F]" />
              <span>Pan-India GYM MANAGEMENT ASSEMBLY</span>
            </div>

            <span className="text-white/10 hidden md:inline">•</span>

            <a
              href="mailto:Info@tanushfitness.com"
              className="flex items-center gap-1.5 text-[#A8A090] hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#6B6358]" />
              <span>Info@tanushfitness.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Main Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090C10]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#26452D] to-[#1A2018] border border-[#D26539]/40 flex items-center justify-center shadow-lg group-hover:border-[#D26539] transition-colors">
                <span className="font-satoshi font-black text-lg text-[#D26539]">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-satoshi font-black text-lg tracking-[0.12em] text-[#ECE6DB] group-hover:text-white uppercase leading-none">
                  TANUSH
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-[#D26539] uppercase mt-0.5">
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
                  currentPage === 'home' ? 'text-[#D26539]' : 'text-[#A8A090] hover:text-white'
                }`}
              >
                Overview
                {currentPage === 'home' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D26539] rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleNav('services')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'services' ? 'text-[#D26539]' : 'text-[#A8A090] hover:text-white'
                }`}
              >
                Services
                {currentPage === 'services' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D26539] rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleNav('equipment')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'equipment' ? 'text-[#D26539]' : 'text-[#A8A090] hover:text-white'
                }`}
              >
                Equipment
                {currentPage === 'equipment' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D26539] rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleNav('manpower')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'manpower' ? 'text-[#D26539]' : 'text-[#A8A090] hover:text-white'
                }`}
              >
                Manpower
                {currentPage === 'manpower' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D26539] rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleNav('about')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'about' ? 'text-[#D26539]' : 'text-[#A8A090] hover:text-white'
                }`}
              >
                About
                {currentPage === 'about' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D26539] rounded-full" />
                )}
              </button>
            </nav>

            {/* 3. Action Hub (RFQ Cart, Consultation CTA, Menu Trigger) */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* RFQ Cart Badge */}
              <button
                type="button"
                onClick={() => setIsEnquiryCartOpen(true)}
                className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#A8A090] hover:text-[#D26539] border border-white/5 transition"
                title="commercial & residential outfitting RFQ Cart"
              >
                <FileText className="w-4 h-4" />
                {enquiryCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#D26539] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {enquiryCount}
                  </span>
                )}
              </button>

              {/* Consultation CTA */}
              <button
                type="button"
                onClick={() => handleNav('contact')}
                className="hidden sm:inline-flex items-center gap-2 btn-vault text-xs py-2 px-5"
              >
                <span>VIP Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Drawer Menu Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#A8A090] hover:text-white border border-white/10 transition"
                aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Drawer Menu Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#090C10]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
          >
            {/* Top Bar of Modal */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div
                onClick={() => handleNav('home')}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#26452D] to-[#1A2018] border border-[#D26539]/40 flex items-center justify-center shadow-lg">
                  <span className="font-satoshi font-black text-lg text-[#D26539]">T</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-satoshi font-black text-lg tracking-[0.12em] text-[#ECE6DB] uppercase">
                    TANUSH
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                    FITNESS SANCTUARY
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-[#A8A090] hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="my-auto py-12 max-w-4xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {navLinks.map((link, idx) => (
                  <div
                    key={link.label}
                    onClick={() => handleNav(link.page)}
                    className="p-6 rounded-none bg-[#0D1118] border border-white/10 hover:border-[#D26539] transition-all cursor-pointer group flex items-start justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#D26539]">0{idx + 1}</span>
                        <h3 className="font-satoshi text-xl sm:text-2xl font-bold uppercase text-[#D8CDC0] group-hover:text-white transition">
                          {link.label}
                        </h3>
                      </div>
                      <p className="text-xs text-[#A8A090] font-sans pl-7">
                        {link.subtitle}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#A8A090] group-hover:text-[#D26539] group-hover:bg-[#D26539]/10 transition">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Contact & GST Info */}
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A8A090]">
              <div className="flex items-center gap-4">
                <span>GST: 07AAACT1234F1Z5</span>
                <span>•</span>
                <span>ISO 9001:2015 CERTIFIED</span>
              </div>
              <a href="tel:+918160918894" className="text-[#D26539] hover:underline">
                Direct Desk: +91 81609 18894
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
