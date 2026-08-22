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
        theme="orange"
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B2232] to-[#0D1117] border border-[#D26539]/40 flex items-center justify-center shadow-lg group-hover:border-[#D26539] transition-colors">
                <span className="font-syne font-black text-lg text-[#D26539]">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-black text-xl tracking-[0.12em] text-[#ECE6DB] group-hover:text-white uppercase leading-none">
                  TANUSH
                </span>
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#D26539] uppercase mt-0.5">
                  FITNESS SANCTUARY
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              India's premier commercial fitness destination & outfitting brand. Elevating physical and mental performance through world-class biomechanical engineering and custom sanctuary architecture.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1.5 text-[#D26539]">
                <ShieldCheck className="w-4 h-4" /> ISO 9001:2015
              </span>
              <span>•</span>
              <span>18% GST ITC Ready</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4 font-sans text-sm">
            <h4 className="font-syne text-xs font-bold uppercase tracking-[0.2em] text-[#D26539]">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-[#D26539] transition-colors text-left">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-[#D26539] transition-colors text-left">
                  Turnkey Services
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('equipment')} className="hover:text-[#D26539] transition-colors text-left">
                  Equipment Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('manpower')} className="hover:text-[#D26539] transition-colors text-left">
                  Master Staffing
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-[#D26539] transition-colors text-left">
                  Vision & Legacy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Procurement Pillars */}
          <div className="space-y-4 font-sans text-sm">
            <h4 className="font-syne text-xs font-bold uppercase tracking-[0.2em] text-[#D26539]">
              Core Pillars
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-center justify-between group cursor-pointer hover:text-white" onClick={() => navigateTo('equipment')}>
                <span>Commercial Machinery</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#D26539] transition" />
              </li>
              <li className="flex items-center justify-between group cursor-pointer hover:text-white" onClick={() => navigateTo('manpower')}>
                <span>Certified Trainer Staffing</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#D26539] transition" />
              </li>
              <li className="flex items-center justify-between group cursor-pointer hover:text-white" onClick={() => navigateTo('services')}>
                <span>3D Architectural Turnkey</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#D26539] transition" />
              </li>
              <li className="flex items-center justify-between group cursor-pointer hover:text-white" onClick={() => navigateTo('contact')}>
                <span>Wholesale Project RFQs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#D26539] transition" />
              </li>
            </ul>
          </div>

          {/* Col 4: Executive Contacts */}
          <div className="space-y-4 font-sans text-sm">
            <h4 className="font-syne text-xs font-bold uppercase tracking-[0.2em] text-[#D26539]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-slate-400 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D26539] shrink-0 mt-0.5" />
                <span>Sector 62, Noida, Uttar Pradesh, 201309 (Flagship Experience Center)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D26539] shrink-0" />
                <a href="tel:+919067800048" className="hover:text-white transition font-mono">
                  +91 90678 00048
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D26539] shrink-0" />
                <a href="mailto:Info@tanushfitness.com" className="hover:text-white transition font-mono">
                  Info@tanushfitness.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-6">
            <span>© 2026 Tanush Fitness Commercial Infrastructure. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigateTo('admin')}
              className="flex items-center gap-1.5 hover:text-[#D26539] transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </button>
            <span className="text-white/10">•</span>
            <button onClick={() => navigateTo('contact')} className="hover:text-[#D26539] transition-colors">
              Support Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
