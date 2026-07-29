import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, Building2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const CallToAction: React.FC = () => {
  const { navigateTo, setIsRegisterGymModalOpen } = useApp();

  return (
    <section className="py-20 sm:py-28 bg-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 sm:p-16 text-center shadow-2xl text-white"
        >
          {/* Background Blue Rays */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase font-mono tracking-wider">
              <Zap className="w-3.5 h-3.5" /> Commercial B2B Onboarding
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-heading uppercase">
              Ready to Upgrade Your Gym Facility’s Procurement?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Join 1,200+ verified health club operators, franchise groups, and boutique fitness studios saving up to 35% on equipment and certified services.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsRegisterGymModalOpen(true)}
                className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all hover:scale-[1.02]"
              >
                <Building2 className="w-4 h-4" />
                <span>Register Your Gym Account</span>
              </button>

              <button
                onClick={() => navigateTo('marketplace')}
                className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-black text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all hover:scale-[1.02] border border-slate-700"
              >
                <span>Browse Marketplace</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
