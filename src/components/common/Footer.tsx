import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, ArrowRight, ArrowUpRight, Lock } from 'lucide-react';
import { MarqueeStrip } from './MarqueeStrip';

export const Footer: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <footer className="bg-[#090C10] text-[#F0EBE3] border-t border-white/5 relative overflow-hidden">
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#26452D] to-[#1A2018] border border-[#D26539]/40 flex items-center justify-center shadow-lg group-hover:border-[#D26539] transition-colors">
                <span className="font-satoshi font-black text-lg text-[#D26539]">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-satoshi font-black text-xl tracking-[0.12em] text-[#ECE6DB] group-hover:text-white uppercase leading-none">
                  TANUSH
                </span>
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#D26539] uppercase mt-0.5">
                  FITNESS SANCTUARY
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A8A090] leading-relaxed font-sans">
              India's premier commercial fitness destination & outfitting brand. Elevating physical and mental performance through world-class biomechanical engineering and custom sanctuary architecture.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A8A090] pt-2">
              <span className="flex items-center gap-1.5 text-[#F0EBE3]">
                <ShieldCheck className="w-4 h-4 text-[#D26539]" /> ISO 9001:2015
              </span>
              <span>•</span>
              <span>18% GST ITC Ready</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4 font-sans text-sm">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F0EBE3]">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-[#A8A090]">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-[#D26539] transition-colors text-left">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-[#D26539] transition-colors text-left">
                  GYM MANAGEMENT Services
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
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F0EBE3]">
              Core Pillars
            </h4>
            <ul className="space-y-2.5 text-[#A8A090]">
              <li className="flex items-center justify-between group cursor-pointer hover:text-white" onClick={() => navigateTo('equipment')}>
                <span>Commercial & Residential Machinery</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7268] group-hover:text-[#D26539] transition" />
              </li>
              <li className="flex items-center justify-between group cursor-pointer hover:text-white" onClick={() => navigateTo('manpower')}>
                <span>Certified Trainer Staffing</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7268] group-hover:text-[#D26539] transition" />
              </li>
              <li className="flex items-center justify-between group cursor-pointer hover:text-white" onClick={() => navigateTo('services')}>
                <span>3D Architectural GYM MANAGEMENT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7268] group-hover:text-[#D26539] transition" />
              </li>
              <li className="flex items-center justify-between group cursor-pointer hover:text-white" onClick={() => navigateTo('contact')}>
                <span>Wholesale Project RFQs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#7A7268] group-hover:text-[#D26539] transition" />
              </li>
            </ul>
          </div>

          {/* Col 4: Executive Contacts */}
          <div className="space-y-4 font-sans text-sm">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F0EBE3]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-[#A8A090] text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A8A090] shrink-0 mt-0.5" />
                <span>The landmark Complex, A - 301 - 304, near Podar International School, Urjanagar 1, Kudasan, Gandhinagar, Gujarat 382419</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A8A090] shrink-0" />
                <a href="tel:+918160918894" className="hover:text-white transition font-mono">
                  +91 81609 18894
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A8A090] shrink-0" />
                <a href="mailto:Info@tanushfitness.com" className="hover:text-white transition font-mono">
                  Info@tanushfitness.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B6358]">
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
