import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, ArrowRight, Dumbbell, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export const CallToAction: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-900 overflow-hidden shadow-2xl border border-slate-800 p-8 sm:p-14 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400 text-blue-400 font-mono text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>COMMERCIAL FITNESS ECOSYSTEM</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-heading uppercase tracking-tight leading-none">
                READY TO POWER YOUR COMMERCIAL HEALTH CLUB?
              </h2>

              <p className="text-sm text-slate-300 max-w-2xl font-normal leading-relaxed font-mono">
                Get zero-cost wholesale quotations for equipment, recruit CSCS certified trainers, or launch AI WhatsApp lead generation funnels with Tanush Fitness.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 font-mono">
              <button
                onClick={() => navigateTo('equipment')}
                className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Dumbbell className="w-4 h-4 text-blue-300" />
                <span>Request Equipment Quote</span>
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="w-full py-4 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Speak With Sales Executive</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
