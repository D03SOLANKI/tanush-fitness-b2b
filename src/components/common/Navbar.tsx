import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown, Dumbbell, Building2, Flame } from 'lucide-react';
import { EQUIPMENT_CATEGORIES } from '../../data/categories';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    navigateTo,
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsRegisterGymModalOpen,
    filters,
    setFilter,
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3.5 shadow-stripe'
          : 'bg-gradient-to-b from-white via-white/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black group-hover:scale-105 transition-all shadow-[0_4px_15px_rgba(59,130,246,0.35)]">
              <Dumbbell className="w-5 h-5 transform -rotate-45" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tighter text-slate-900 font-heading uppercase">
                  TANUSH
                </span>
                <span className="text-xl font-black tracking-tighter text-blue-600 font-heading uppercase">
                  PRO
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block -mt-1 font-mono">
                Industrial B2B Marketplace
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-black tracking-wider uppercase font-mono">
            <button
              onClick={() => navigateTo('home')}
              className={`transition-colors hover:text-blue-600 ${
                currentPage === 'home' ? 'text-blue-600' : 'text-slate-700'
              }`}
            >
              Home
            </button>

            {/* Marketplace Mega Menu Trigger */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                onClick={() => navigateTo('marketplace')}
                className={`flex items-center gap-1.5 transition-colors hover:text-blue-600 ${
                  currentPage === 'marketplace' ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                <span>Marketplace</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" />
              </button>

              {/* Mega Menu Dropdown */}
              {megaMenuOpen && (
                <div className="absolute top-full -left-20 w-[600px] bg-white border border-slate-200/90 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl grid grid-cols-2 gap-4 z-50">
                  <div className="col-span-2 pb-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-blue-600 font-mono">
                      12 Commercial B2B Categories
                    </span>
                    <span className="text-[11px] text-slate-400 font-bold">Verified Equipment</span>
                  </div>
                  {EQUIPMENT_CATEGORIES.slice(0, 6).map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setFilter('category', cat.id);
                        navigateTo('marketplace');
                        setMegaMenuOpen(false);
                      }}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 text-left transition-all group/item"
                    >
                      <img src={cat.image} alt={cat.name} className="w-10 h-10 object-cover rounded-lg shrink-0 border border-slate-200" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                          {cat.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-normal">
                          {cat.itemCount} Products {cat.isPopulated ? '• Live Stock' : '• Pre-Order'}
                        </div>
                      </div>
                    </button>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-slate-100 text-center">
                    <button
                      onClick={() => {
                        navigateTo('marketplace');
                        setMegaMenuOpen(false);
                      }}
                      className="text-xs font-black text-blue-600 hover:underline uppercase font-mono"
                    >
                      View All 12 Marketplace Categories →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('services')}
              className={`transition-colors hover:text-blue-600 ${
                currentPage === 'services' ? 'text-blue-600' : 'text-slate-700'
              }`}
            >
              Services
            </button>

            <button
              onClick={() => setIsRegisterGymModalOpen(true)}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Become Vendor
            </button>
          </nav>

          {/* Action Icons & CTA */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search heavy rigs, bikes..."
                value={filters.searchQuery}
                onChange={(e) => {
                  setFilter('searchQuery', e.target.value);
                  if (currentPage !== 'marketplace') navigateTo('marketplace');
                }}
                className="w-48 lg:w-60 bg-slate-50 border border-slate-200 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-slate-300 transition-all shadow-sm"
              title="Saved Items"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-blue-600 text-white font-black text-[10px] flex items-center justify-center shadow-md">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-slate-300 transition-all shadow-sm"
              title="B2B Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-blue-600 text-white font-black text-[10px] flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Register Gym CTA */}
            <button
              onClick={() => setIsRegisterGymModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-black text-xs tracking-wider uppercase font-mono shadow-md hover:shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition-all"
            >
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>Register Gym</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-xl">
          <button
            onClick={() => {
              navigateTo('home');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left font-black text-slate-900 py-2 uppercase font-mono text-sm"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigateTo('marketplace');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left font-black text-slate-900 py-2 uppercase font-mono text-sm"
          >
            Marketplace (12 Categories)
          </button>
          <button
            onClick={() => {
              navigateTo('services');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left font-black text-slate-900 py-2 uppercase font-mono text-sm"
          >
            Services (9 Categories)
          </button>
          <button
            onClick={() => {
              setIsRegisterGymModalOpen(true);
              setMobileMenuOpen(false);
            }}
            className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-black text-xs uppercase tracking-wider font-mono shadow-md"
          >
            Register Your Gym
          </button>
        </div>
      )}
    </header>
  );
};
