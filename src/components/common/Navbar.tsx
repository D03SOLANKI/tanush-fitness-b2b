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
  Sparkles
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPage, navigateTo, enquiryCart, setIsEnquiryCartOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const enquiryCount = enquiryCart.reduce((sum, item) => sum + item.quantity, 0);

  const navItems: { label: string; page: PageType; icon: React.ReactNode }[] = [
    { label: 'Home', page: 'home', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'About Us', page: 'about', icon: <Info className="w-4 h-4" /> },
    { label: 'Commercial Gym Equipment', page: 'equipment', icon: <Dumbbell className="w-4 h-4" /> },
    { label: 'Manpower Services', page: 'manpower', icon: <Users className="w-4 h-4" /> },
    { label: 'Business Services', page: 'services', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Contact Us', page: 'contact', icon: <PhoneCall className="w-4 h-4" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/90 shadow-stripe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-900 via-blue-600 to-blue-500 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-blue-500 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900 font-heading uppercase flex items-center gap-1.5">
                TANUSH <span className="text-blue-600 font-extrabold">FITNESS</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono block -mt-1">
                B2B Enterprise Portal
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map(item => {
              const active = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => navigateTo(item.page)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 font-mono uppercase tracking-wider ${
                    active
                      ? 'bg-blue-50 text-blue-600 border border-blue-200/80 shadow-sm font-black'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Enquiry Cart */}
          <div className="flex items-center gap-3">
            {/* Enquiry Cart Trigger */}
            <button
              onClick={() => setIsEnquiryCartOpen(true)}
              className="relative p-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-black flex items-center gap-2 transition-all shadow-md"
            >
              <FileText className="w-4 h-4 text-white" />
              <span className="uppercase">Enquiry Cart</span>
              {enquiryCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-white text-blue-600 text-[10px] font-black flex items-center justify-center font-mono">
                  {enquiryCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-700 lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-3 shadow-2xl">
          {navItems.map(item => (
            <button
              key={item.page}
              onClick={() => {
                navigateTo(item.page);
                setMobileMenuOpen(false);
              }}
              className={`w-full py-3 px-4 rounded-xl text-xs font-black uppercase font-mono tracking-wider text-left flex items-center gap-3 ${
                currentPage === item.page
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
