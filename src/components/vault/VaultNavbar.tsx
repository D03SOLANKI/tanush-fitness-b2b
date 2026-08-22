import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { PageType } from '../../types';
import { Menu, X, ArrowRight, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const VaultNavbar: React.FC = () => {
  const { currentPage, navigateTo } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageType, sectionId?: string) => {
    navigateTo(page);
    setIsMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const menuItems: { number: string; label: string; page: PageType; linkText: string }[] = [
    { number: '01', label: 'Home', page: 'home', linkText: 'Overview' },
    { number: '02', label: 'Membership Benefits', page: 'membership-benefit', linkText: 'Benefits' },
    { number: '03', label: 'Training Facilities', page: 'training-facilities', linkText: 'Facilities' },
    { number: '04', label: 'Our Clubs', page: 'clubs', linkText: 'Clubs' },
    { number: '05', label: 'Franchise', page: 'franchise', linkText: 'Franchise' },
    { number: '06', label: 'Blogs', page: 'blogs', linkText: 'Insights' },
    { number: '07', label: 'Contact Us', page: 'contact', linkText: 'Contact' },
  ];

  return (
    <>
      {/* Fixed Vault Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090C10]/95 backdrop-blur-md border-b border-white/10 py-3 sm:py-4 shadow-2xl'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Vault Brand Monogram */}
            <div
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="flex flex-col">
                <span className="font-syne font-black text-2xl sm:text-3xl tracking-[0.18em] text-white group-hover:text-[#C5A880] transition-colors leading-none uppercase">
                  VAULT
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.35em] text-[#C5A880] uppercase mt-1">
                  BY VIRAT KOHLI
                </span>
              </div>
            </div>

            {/* Center Desktop Quick Jump Links */}
            <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.2em]">
              <button
                type="button"
                onClick={() => handleNav('home', 'about')}
                className="text-slate-300 hover:text-[#C5A880] transition-colors py-1 relative"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => handleNav('membership-benefit')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'membership-benefit' ? 'text-[#C5A880]' : 'text-slate-300 hover:text-[#C5A880]'
                }`}
              >
                Benefits
                {currentPage === 'membership-benefit' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full" />
                )}
              </button>
              <button
                type="button"
                onClick={() => handleNav('training-facilities')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'training-facilities' ? 'text-[#C5A880]' : 'text-slate-300 hover:text-[#C5A880]'
                }`}
              >
                Training Facilities
                {currentPage === 'training-facilities' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full" />
                )}
              </button>
              <button
                type="button"
                onClick={() => handleNav('clubs')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'clubs' ? 'text-[#C5A880]' : 'text-slate-300 hover:text-[#C5A880]'
                }`}
              >
                Explore Clubs
                {currentPage === 'clubs' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full" />
                )}
              </button>
              <button
                type="button"
                onClick={() => handleNav('franchise')}
                className={`transition-colors py-1 relative ${
                  currentPage === 'franchise' ? 'text-[#C5A880]' : 'text-slate-300 hover:text-[#C5A880]'
                }`}
              >
                Franchise
                {currentPage === 'franchise' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full" />
                )}
              </button>
            </nav>

            {/* Right Action & Full-Screen Menu Toggle */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => handleNav('contact')}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D26539]/40 text-[#D26539] hover:bg-[#D26539] hover:text-white transition-all text-xs font-mono uppercase tracking-wider font-semibold"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-center justify-center gap-1.5 transition-all text-white hover:border-[#D26539]"
                aria-label="Toggle Vault Navigation Menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-[#D26539]" />
                ) : (
                  <>
                    <span className="w-5 h-[2px] bg-white rounded-full transition-transform" />
                    <span className="w-3.5 h-[2px] bg-[#D26539] rounded-full transition-transform self-end mr-3" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Vault Menu Drawer / Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#090C10] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
          >
            {/* Top Bar of Menu */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div
                onClick={() => handleNav('home')}
                className="cursor-pointer"
              >
                <span className="font-syne font-black text-2xl tracking-[0.2em] text-white uppercase block">
                  VAULT
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-[#C5A880] uppercase">
                  BY VIRAT KOHLI
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#D26539] hover:border-[#D26539] transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="my-auto py-12 max-w-5xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {menuItems.map((item) => (
                  <div
                    key={item.number}
                    onClick={() => handleNav(item.page)}
                    className="group flex items-baseline gap-6 cursor-pointer border-b border-white/5 pb-4 hover:border-[#D26539]/50 transition-colors"
                  >
                    <span className="text-xs font-mono text-[#D26539] tracking-widest">
                      {item.number}
                    </span>
                    <h3 className="font-syne text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-slate-200 group-hover:text-white group-hover:translate-x-2 transition-all">
                      {item.label}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <a
                href="mailto:support@vaultbyviratkohli.com"
                className="hover:text-[#D26539] transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#D26539]" />
                <span>support@vaultbyviratkohli.com</span>
              </a>

              <div className="flex items-center gap-6">
                <a
                  href="https://www.instagram.com/vault.india/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D26539] transition"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href="https://in.linkedin.com/company/vault-by-virat-kohli"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D26539] transition"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a
                  href="https://facebook.com/@vaultbyviratkohli"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D26539] transition"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a
                  href="https://youtube.com/@vaultbyviratkohli"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D26539] transition"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>

              <div className="text-[10px] text-slate-500">
                © 2024 Truepalate Fitness PVT. LTD.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
