import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PageType } from '../../types';
import {
  Dumbbell,
  Users,
  Briefcase,
  PhoneCall,
  Info,
  FileText,
  Menu,
  X,
  Sparkles,
  LogOut,
  LogIn,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    navigateTo,
    enquiryCart,
    setIsEnquiryCartOpen,
    currentUser,
    openAuthModal,
    logoutUser,
    platformSettings,
  } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const enquiryCount = enquiryCart.reduce((sum, item) => sum + item.quantity, 0);

  const navItems: { label: string; page: PageType; icon: React.ReactNode }[] = [
    { label: 'Overview', page: 'home', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: 'Commercial Equipment', page: 'equipment', icon: <Dumbbell className="w-3.5 h-3.5" /> },
    { label: 'Manpower Solutions', page: 'manpower', icon: <Users className="w-3.5 h-3.5" /> },
    { label: 'Turnkey Services', page: 'services', icon: <Briefcase className="w-3.5 h-3.5" /> },
    { label: 'Company', page: 'about', icon: <Info className="w-3.5 h-3.5" /> },
    { label: 'Contact & Procurement', page: 'contact', icon: <PhoneCall className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      {/* 🏢 Industrial Enterprise Utility Top Strip (Static, High-Contrast) */}
      <div className="w-full bg-slate-950 text-slate-400 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between gap-4 font-mono text-[11px]">
          {/* Left: Direct Factory Commercial Sales & GST Trust */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919067800048"
              className="flex items-center gap-1.5 text-slate-200 hover:text-blue-400 transition-colors font-bold whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>+91 90678 00048</span>
              <span className="text-slate-400 font-normal hidden sm:inline">(Commercial Sales)</span>
            </a>

            <span className="text-slate-700 hidden sm:inline">•</span>

            <div className="hidden sm:flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>100% GST Invoicing (18% ITC)</span>
            </div>
          </div>

          {/* Right: Pan-India Freight & Direct Email */}
          <div className="flex items-center gap-4 whitespace-nowrap">
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Pan-India Turnkey Assembly</span>
            </div>

            <span className="text-slate-700 hidden md:inline">•</span>

            <a
              href="mailto:Info@tanushfitness.com"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>Info@tanushfitness.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 🧭 Master Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          {/* 1. Brand Logo */}
          <div
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 cursor-pointer select-none py-1 group"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 shadow-sm group-hover:border-blue-700 transition-colors">
              <Dumbbell className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-[17px] font-black tracking-tight text-slate-900 uppercase leading-tight font-heading flex items-center gap-1.5">
                TANUSH <span className="text-blue-800">FITNESS</span>
              </div>
              <div className="text-[9.5px] font-bold text-slate-500 uppercase tracking-wider font-mono mt-0.5">
                Commercial Gym Outfitting
              </div>
            </div>
          </div>

          {/* 2. Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => {
              const active = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => navigateTo(item.page)}
                  className={`px-3 py-2 rounded-md text-[13px] font-semibold transition-colors flex items-center gap-1.5 ${
                    active
                      ? 'text-blue-800 bg-blue-50 font-bold'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <span className={active ? 'text-blue-800' : 'text-slate-400'}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* 3. Right Action Controls: User Auth + Commercial RFQ Cart */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* User Account / Auth Trigger */}
            {currentUser ? (
              <div className="h-9 flex items-center gap-2 bg-slate-50 px-2.5 rounded-lg border border-slate-200 text-xs font-mono shadow-sm">
                <div className="w-5 h-5 rounded bg-slate-950 text-white font-bold flex items-center justify-center text-[10px] uppercase">
                  {currentUser.role === 'GYM_OWNER' ? 'GO' : 'JS'}
                </div>
                <div className="hidden md:block text-left leading-tight pr-1">
                  <div className="font-bold text-slate-900 truncate max-w-[90px] text-[11px]">
                    {currentUser.name || currentUser.email.split('@')[0]}
                  </div>
                  <div className="text-[8px] font-bold text-slate-500 uppercase">
                    {currentUser.role === 'GYM_OWNER' ? 'Gym Owner' : 'Job Seeker'}
                  </div>
                </div>
                <button
                  onClick={logoutUser}
                  className="p-1 text-slate-400 hover:text-rose-600 transition-colors ml-0.5"
                  title="Logout"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => openAuthModal('GYM_OWNER')}
                className="h-9 px-3 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <LogIn className="w-3.5 h-3.5 text-slate-500" />
                <span>Portal Login</span>
              </button>
            )}

            {/* Commercial RFQ Cart Trigger */}
            <button
              onClick={() => setIsEnquiryCartOpen(true)}
              className="h-9 px-3.5 rounded-lg bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-blue-200" />
              <span className="hidden sm:inline">RFQ Project List</span>
              {enquiryCount > 0 ? (
                <span className="px-1.5 py-0.2 rounded-full bg-white text-blue-900 text-[10px] font-bold font-mono">
                  {enquiryCount}
                </span>
              ) : (
                <span className="hidden md:inline-block text-[10px] text-blue-300 font-mono">
                  (0)
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-1.5 shadow-lg">
          {navItems.map(item => {
            const active = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => {
                  navigateTo(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-left flex items-center gap-3 transition-colors ${
                  active
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className={active ? 'text-white' : 'text-slate-400'}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
