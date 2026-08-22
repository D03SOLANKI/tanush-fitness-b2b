import React from 'react';
import { useApp } from '../../context/AppContext';
import { PageType } from '../../types';
import { Mail, ArrowRight } from 'lucide-react';

export const VaultFooter: React.FC = () => {
  const { navigateTo } = useApp();

  const handleNav = (page: PageType) => {
    navigateTo(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090C10] text-[#E2E8F0] border-t border-white/10 relative overflow-hidden">
      {/* Running Footer Strip Marquee */}
      <div className="w-full bg-[#D26539] text-[#090C10] py-3 select-none overflow-hidden">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap font-syne font-black text-sm uppercase tracking-[0.3em]">
          <span>CONTACT US ✦ STEP INTO THE VAULT ✦ UNLEASH YOUR INNER POTENTIAL ✦ WORLD CLASS EQUIPMENT ✦ RECOVERY BY HYPERICE ✦ HEALTH CAFE BY ONE8 ✦</span>
          <span>CONTACT US ✦ STEP INTO THE VAULT ✦ UNLEASH YOUR INNER POTENTIAL ✦ WORLD CLASS EQUIPMENT ✦ RECOVERY BY HYPERICE ✦ HEALTH CAFE BY ONE8 ✦</span>
        </div>
      </div>

      {/* Main Directory & Brand Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Brand & Mission Lockup */}
          <div className="lg:col-span-5 space-y-6">
            <div className="cursor-pointer" onClick={() => handleNav('home')}>
              <span className="font-syne font-black text-3xl sm:text-4xl tracking-[0.18em] text-white uppercase block">
                VAULT
              </span>
              <span className="text-[10px] font-mono tracking-[0.35em] text-[#C5A880] uppercase">
                BY VIRAT KOHLI
              </span>
            </div>

            <p className="text-slate-400 font-sans text-sm sm:text-base max-w-sm leading-relaxed">
              India's first premium fitness chain VAULT by VIRAT KOHLI presents you fitness like never before with world class equipments, holistic wellness, and community.
            </p>

            <div className="pt-2">
              <a
                href="mailto:support@vaultbyviratkohli.com"
                className="inline-flex items-center gap-2 text-sm font-mono text-[#D26539] hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>support@vaultbyviratkohli.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/vault.india/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#D26539] hover:border-[#D26539] transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://in.linkedin.com/company/vault-by-virat-kohli"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#D26539] hover:border-[#D26539] transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                href="https://facebook.com/@vaultbyviratkohli"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#D26539] hover:border-[#D26539] transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a
                href="https://youtube.com/@vaultbyviratkohli"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#D26539] hover:border-[#D26539] transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Numbered Navigation Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            <div className="space-y-4">
              <div className="text-[#C5A880] tracking-widest uppercase text-[10px] pb-1 border-b border-white/10">
                NAVIGATION
              </div>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition w-full text-left"
                >
                  <span className="text-[#D26539]">01</span>
                  <span>Home</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('membership-benefit')}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition w-full text-left"
                >
                  <span className="text-[#D26539]">02</span>
                  <span>Membership Benefits</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('training-facilities')}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition w-full text-left"
                >
                  <span className="text-[#D26539]">03</span>
                  <span>Training Facilities</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('clubs')}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition w-full text-left"
                >
                  <span className="text-[#D26539]">04</span>
                  <span>Our Clubs</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-[#C5A880] tracking-widest uppercase text-[10px] pb-1 border-b border-white/10">
                EXPLORE & CONNECT
              </div>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleNav('franchise')}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition w-full text-left"
                >
                  <span className="text-[#D26539]">05</span>
                  <span>Franchise</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('blogs')}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition w-full text-left"
                >
                  <span className="text-[#D26539]">06</span>
                  <span>Blogs</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition w-full text-left"
                >
                  <span className="text-[#D26539]">07</span>
                  <span>Contact Us</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('tnc')}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition w-full text-left pt-2"
                >
                  <span>Terms & Conditions</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Credits */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2024 Truepalate Fitness PVT. LTD. All rights reserved.
          </div>
          <div>
            Made by <span className="text-slate-300">Studio Cacti</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
