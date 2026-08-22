import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, ArrowRight, ArrowUpRight, Lock } from 'lucide-react';
import { MarqueeStrip } from './MarqueeStrip';

export const Footer: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <footer className="bg-[#05070A] text-[#E2E8F0] border-t border-white/5 relative overflow-hidden">
      {/* 🚀 Running Marquee Banner */}
      <MarqueeStrip
        items={['STEP INTO TANUSH', 'FITNESS SANCTUARY', 'ELEVATE PERFORMANCE', 'WORLD CLASS EQUIPMENT', 'CUSTOM ARCHITECTURE']}
        theme="gold"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 & 2: Brand & Sanctuary Vision */}
          <div className="lg:col-span-1 space-y-6">
            <div
              onClick={() => {
                navigateTo('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B2232] to-[#0D1117] border border-[#C5A880]/40 flex items-center justify-center shadow-lg group-hover:border-[#C5A880] transition-colors">
                <span className="font-syne font-black text-lg text-[#C5A880]">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-black text-xl tracking-[0.12em] text-[#E2E8F0] group-hover:text-white uppercase leading-none">
                  TANUSH
                </span>
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#C5A880] uppercase mt-0.5">
                  FITNESS SANCTUARY
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              India's premier commercial fitness destination & outfitting brand. Elevating physical and mental performance through world-class biomechanical engineering and custom sanctuary architecture.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1.5 text-[#C5A880]">
                <ShieldCheck className="w-4 h-4" /> ISO 9001:2015
              </span>
              <span>•</span>
              <span>18% GST ITC Ready</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4 font-sans text-sm">
            <h4 className="font-syne text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-[#C5A880] transition-colors text-left">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-[#C5A880] transition-colors text-left">
                  Turnkey Services
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('equipment')} className="hover:text-[#C5A880] transition-colors text-left">
                  Equipment Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('manpower')} className="hover:text-[#C5A880] transition-colors text-left">
                  Master Staffing
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-[#C5A880] transition-colors text-left">
                  Vision & Legacy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Procurement Pillars */}
          <div className="space-y-4 font-sans text-sm">
            <h4 className="font-syne text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">
              Core Pillars
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-center justify-between group cursor-pointer hover:text-white" onClick={() => navigateTo('equipment')}>
                <span>Commercial Machinery</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#C5A880] transition" />
              </li>
              <li className="flex items-center justify-between group cursor-pointer hover:text-white" onClick={() => navigateTo('manpower')}>
                <span>Certified Trainer Staffing</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#C5A880] transition" />
              </li>
              <li className="flex items-center justify-between group cursor-pointer hover:text-white" onClick={() => navigateTo('services')}>
                <span>3D CAD Floor Layouts</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#C5A880] transition" />
              </li>
              <li className="flex items-center justify-between group cursor-pointer hover:text-white" onClick={() => navigateTo('contact')}>
                <span>VIP Outfitting Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#C5A880] transition" />
              </li>
            </ul>
          </div>

          {/* Col 4: VIP Commercial Sales Desk */}
          <div className="space-y-4 font-sans text-sm">
            <h4 className="font-syne text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">
              VIP Sales Desk
            </h4>
            <div className="space-y-3 text-slate-400 font-mono text-xs">
              <a href="tel:+919067800048" className="flex items-center gap-2 text-slate-300 hover:text-[#C5A880] transition">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>+91 90678 00048</span>
              </a>
              <a href="mailto:Info@tanushfitness.com" className="flex items-center gap-2 text-slate-300 hover:text-[#C5A880] transition">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Info@tanushfitness.com</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="font-sans text-xs">Tanush Commercial Hub, Industrial Zone, Gandhinagar / New Delhi</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                navigateTo('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-vault w-full text-center text-xs mt-2"
            >
              Book Consultation
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Tanush Fitness Enterprises PVT. LTD. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => navigateTo('admin')} className="hover:text-slate-300 transition flex items-center gap-1">
              <Lock className="w-3 h-3 text-slate-600" />
              <span>Admin Portal</span>
            </button>
            <span>•</span>
            <button onClick={() => navigateTo('about')} className="hover:text-slate-300 transition">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => navigateTo('contact')} className="hover:text-slate-300 transition">
              Commercial Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
