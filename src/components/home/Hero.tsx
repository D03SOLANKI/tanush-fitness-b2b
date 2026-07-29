import React from 'react';
import { useApp } from '../../context/AppContext';
import { Badge } from '../common/Badge';
import { ArrowRight, Building2, Flame, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { navigateTo, setIsRegisterGymModalOpen } = useApp();

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80">
      {/* Background Soft Glow & Grid Lines */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Badge variant="gold" size="md" icon={<Zap className="w-4 h-4 text-blue-600" />}>
              Billion-Dollar B2B Equipment Sourcing Engine
            </Badge>
          </motion.div>

          {/* Verbatim Headline with Nike Pro Boldness & Apple Whitespace */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] font-heading uppercase"
          >
            Everything Your Gym Needs. <br className="hidden sm:inline" />
            <span className="blue-gradient-text">One Platform.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            Streamline commercial strength equipment procurement, bulk facility supplies, and certified fitness services through a unified industrial marketplace engineered for health club directors and franchise operators.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => navigateTo('marketplace')}
              className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(59,130,246,0.35)] transition-all hover:scale-[1.02]"
            >
              <span>Explore Marketplace</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>

            <button
              onClick={() => setIsRegisterGymModalOpen(true)}
              className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-md"
            >
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>Register Your Gym</span>
            </button>
          </motion.div>
        </div>

        {/* Animated Counter Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-stripe flex items-center gap-4 hover:border-blue-500/60 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-black text-xl font-mono group-hover:scale-110 transition-transform">
              $50M+
            </div>
            <div>
              <div className="text-xl font-black text-slate-900 font-heading">$50,000,000+</div>
              <div className="text-xs text-slate-500 font-bold uppercase font-mono">Commercial Equipment Sourced</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-stripe flex items-center gap-4 hover:border-blue-500/60 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-black text-xl font-mono group-hover:scale-110 transition-transform">
              1.2k+
            </div>
            <div>
              <div className="text-xl font-black text-slate-900 font-heading">1,200+ Verified Gyms</div>
              <div className="text-xs text-slate-500 font-bold uppercase font-mono">Clubs & Athletic Facilities</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-stripe flex items-center gap-4 hover:border-emerald-500/60 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-black text-xl font-mono group-hover:scale-110 transition-transform">
              99.4%
            </div>
            <div>
              <div className="text-xl font-black text-slate-900 font-heading">99.4% Freight Accuracy</div>
              <div className="text-xs text-slate-500 font-bold uppercase font-mono">On-Time Liftgate Dispatch</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
