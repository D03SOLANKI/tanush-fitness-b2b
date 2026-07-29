import React from 'react';
import { useApp } from '../../context/AppContext';
import { Dumbbell, ArrowRight, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { navigateTo, setIsEnquiryCartOpen } = useApp();

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>COMMERCIAL B2B ENTERPRISE PORTAL</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 font-heading uppercase leading-none">
              EVERYTHING YOUR GYM NEEDS.{' '}
              <span className="text-blue-600 block">ONE PLATFORM.</span>
            </h1>

            <p className="text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
              India's premier commercial gym marketplace. Source ISO-certified heavy strength machinery, hire NASM/CSCS certified master trainers, and integrate AI WhatsApp growth automation.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 font-mono">
              <button
                onClick={() => navigateTo('equipment')}
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(59,130,246,0.3)] transition-all"
              >
                <span>Browse Equipment Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigateTo('manpower')}
                className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Dumbbell className="w-4 h-4 text-blue-400" />
                <span>Open Gym Hiring Portal</span>
              </button>
            </div>

            {/* B2B Trust Pills */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 font-mono text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Zero Online Prices (RFQ)
              </span>
              <span className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Vetted Gym Manpower
              </span>
              <span className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> 18 Growth Services
              </span>
            </div>
          </div>

          {/* Right Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 text-white p-6 sm:p-8 space-y-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
                  alt="Commercial Gym Equipment"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 font-mono">
                  Direct B2B Procurement
                </span>
                <h3 className="text-xl font-black font-heading uppercase">
                  Wholesale Equipment & Facility Contracting
                </h3>
                <p className="text-xs text-slate-400 font-normal">
                  Select power racks, curved treadmills, & weights for formal sales quotations sent via Email or WhatsApp.
                </p>
              </div>

              <button
                onClick={() => navigateTo('equipment')}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Request Equipment Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
