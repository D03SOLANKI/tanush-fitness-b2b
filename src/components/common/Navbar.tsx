import React, { useMemo, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PageType } from '../../types';
import { motion } from 'framer-motion';
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
  Zap,
  Truck,
  ShieldCheck,
  Award
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
  const [isHovered, setIsHovered] = useState(false);

  const enquiryCount = enquiryCart.reduce((sum, item) => sum + item.quantity, 0);

  // Promotional Announcements Pool
  const announcements = useMemo(() => {
    const defaultList = [
      {
        id: 'oem-pricing',
        icon: <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
        text: 'Direct Factory Wholesale: OEM Bulk Pricing on Commercial Strength & Cardio Racks',
        badge: 'FACTORY DIRECT',
      },
      {
        id: 'pan-india',
        icon: <Truck className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
        text: 'Pan-India Logistics: Express Freight & Turnkey Gym Installation across 150+ Cities',
        badge: 'PAN-INDIA',
      },
      {
        id: 'hiring',
        icon: <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
        text: 'Fitness Careers Portal: Hire Certified Gym Trainers & Managers with Zero Placement Delay',
        badge: 'VERIFIED TALENT',
      },
      {
        id: 'gst-itc',
        icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
        text: '100% Tax Compliant B2B Invoices with 18% Input Tax Credit (ITC) Benefits',
        badge: 'GST COMPLIANT',
      },
    ];

    if (platformSettings?.bannerEnabled && platformSettings?.bannerText?.trim()) {
      return [
        {
          id: 'custom-admin',
          icon: <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
          text: platformSettings.bannerText,
          badge: 'SPECIAL NOTICE',
        },
        ...defaultList,
      ];
    }

    return defaultList;
  }, [platformSettings?.bannerEnabled, platformSettings?.bannerText]);

  // Duplicate for seamless 100% continuous infinite loop
  const tickerItems = useMemo(() => [...announcements, ...announcements], [announcements]);

  const navItems: { label: string; page: PageType; icon: React.ReactNode }[] = [
    { label: 'Home', page: 'home', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: 'About Us', page: 'about', icon: <Info className="w-3.5 h-3.5" /> },
    { label: 'Commercial Gym Equipment', page: 'equipment', icon: <Dumbbell className="w-3.5 h-3.5" /> },
    { label: 'Manpower Services', page: 'manpower', icon: <Users className="w-3.5 h-3.5" /> },
    { label: 'Business Services', page: 'services', icon: <Briefcase className="w-3.5 h-3.5" /> },
    { label: 'Contact Us', page: 'contact', icon: <PhoneCall className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
      {/* ⚡ Continuous Horizontal Scrolling Ticker Marquee */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full bg-slate-950 text-amber-400 text-[11px] sm:text-xs font-semibold py-1.5 border-b border-slate-900 overflow-hidden relative select-none whitespace-nowrap cursor-default"
      >
        <motion.div
          className="flex items-center gap-12 w-max will-change-transform"
          animate={isHovered ? { x: undefined } : { x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 32,
            ease: 'linear',
          }}
        >
          {tickerItems.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="flex items-center gap-2.5 shrink-0">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0" />
              {item.icon}
              <span className="text-slate-100 font-medium tracking-wide">{item.text}</span>
              {item.badge && (
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase tracking-widest font-mono">
                  {item.badge}
                </span>
              )}
              <span className="text-slate-700 ml-4 font-bold">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* 1. Brand Logo */}
          <div
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0 select-none py-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-900 via-blue-600 to-blue-500 p-0.5 shadow-sm group-hover:shadow-md transition-all duration-300">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-lg font-black tracking-tight text-slate-900 font-heading uppercase leading-none flex items-center gap-1">
                TANUSH <span className="text-blue-600 font-black">FITNESS</span>
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono mt-1">
                B2B Enterprise Portal
              </span>
            </div>
          </div>

          {/* 2. Desktop Navigation Center Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map(item => {
              const active = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => navigateTo(item.page)}
                  className={`relative px-3.5 py-2 rounded-xl text-[12px] font-bold transition-all duration-200 flex items-center gap-1.5 uppercase font-mono tracking-wide ${
                    active
                      ? 'text-blue-600 bg-blue-50/70 font-black'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span className={active ? 'text-blue-600' : 'text-slate-400'}>{item.icon}</span>
                  <span>{item.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 3. Right Action Controls: Auth + Cart */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* User Account / Auth Trigger */}
            {currentUser ? (
              <div className="h-10 flex items-center gap-2 bg-slate-50 px-2 sm:px-2.5 rounded-xl border border-slate-200 text-xs font-mono shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-[10px] uppercase shadow-sm">
                  {currentUser.role === 'GYM_OWNER' ? 'GO' : 'JS'}
                </div>
                <div className="hidden md:block text-left leading-tight pr-1">
                  <div className="font-bold text-slate-900 truncate max-w-[90px] text-[11px]">
                    {currentUser.name || currentUser.email.split('@')[0]}
                  </div>
                  <div className="text-[8px] font-bold text-blue-600 uppercase">
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
                className="h-10 px-3.5 sm:px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/90 hover:border-slate-300 text-slate-900 font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
              >
                <LogIn className="w-3.5 h-3.5 text-blue-600" />
                <span className="uppercase text-[11px]">Login</span>
              </button>
            )}

            {/* Divider */}
            <div className="hidden sm:block h-6 w-[1px] bg-slate-200" />

            {/* Enquiry Cart Trigger */}
            <button
              onClick={() => setIsEnquiryCartOpen(true)}
              className="h-10 relative px-3.5 sm:px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-black flex items-center gap-2 transition-all shadow-sm hover:shadow-md hover:shadow-blue-500/20 active:scale-98"
            >
              <FileText className="w-4 h-4 text-white" />
              <span className="uppercase hidden sm:inline text-[11px] tracking-wide">Enquiry Cart</span>
              {enquiryCount > 0 ? (
                <span className="w-5 h-5 rounded-full bg-white text-blue-600 text-[10px] font-black flex items-center justify-center font-mono shadow-sm">
                  {enquiryCount}
                </span>
              ) : (
                <span className="hidden md:inline-block px-1.5 py-0.5 rounded bg-blue-500/50 text-[10px] text-blue-100 font-mono">
                  0
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80 transition-colors lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 py-5 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map(item => {
            const active = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => {
                  navigateTo(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase font-mono tracking-wider text-left flex items-center gap-3 transition-all ${
                  active
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
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
