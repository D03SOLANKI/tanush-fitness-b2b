import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Dumbbell,
  ArrowRight,
  ShieldCheck,
  FileDown,
  CheckCircle2,
  PhoneCall,
  Layers,
  Award,
  Zap,
  Building2
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigateTo, setIsEnquiryCartOpen } = useApp();

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Authoritative B2B Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Enterprise Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 border border-slate-300 text-slate-800 font-mono text-[11px] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>DIRECT FACTORY COMMERCIAL OUTFITTING · ISO 9001:2015</span>
            </div>

            {/* Master Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 font-heading uppercase leading-[1.1]">
              COMMERCIAL GYM OUTFITTING.{' '}
              <span className="text-blue-700 block mt-1">DIRECT FROM FACTORY.</span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
              Engineered with 11-gauge precision laser-cut structural steel. We outfit health clubs, CrossFit boxes, university athletic centers, and luxury residential gyms across India with certified machinery and turnkey assembly.
            </p>

            {/* Industrial B2B Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => navigateTo('equipment')}
                className="px-6 py-3.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Build Commercial RFQ Package</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <FileDown className="w-4 h-4 text-blue-400" />
                <span>Request 2026 Master Spec Sheet</span>
              </button>
            </div>

            {/* Direct Line & Fast Invoicing Notice */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
              <a
                href="tel:+919067800048"
                className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-bold"
              >
                <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                <span>Commercial Desk: +91 90678 00048</span>
              </a>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="text-slate-500">GST Invoice Ready (18% ITC)</span>
            </div>

            {/* Technical Verification Badges */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">11-Gauge Solid Steel</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">1,000kg Tested Load</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">10-Year Frame Warranty</span>
              </div>
            </div>

          </div>

          {/* Right Column: Industrial Spec Rig Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-300 rounded-xl overflow-hidden shadow-sm">
              
              {/* Product Header Bar */}
              <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">
                    FEATURED SPEC // RIG-900-X
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px] font-bold border border-slate-700">
                  COMMERCIAL GRADE
                </span>
              </div>

              {/* High-Definition Rig Image */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial Commercial Gym Power Rack"
                  className="w-full h-full object-cover"
                />
                
                {/* Engineering Callout Overlay Badges */}
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-mono font-bold px-2 py-1 rounded border border-slate-700 shadow-sm flex items-center gap-1">
                  <Layers className="w-3 h-3 text-blue-400" />
                  <span>3x3" 11-Gauge Structural Uprights</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white text-[10px] font-mono font-bold px-2 py-1 rounded border border-slate-700 shadow-sm flex items-center gap-1">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>ISO 9001 Structural Rig</span>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="p-4 bg-slate-50 space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-white p-2.5 rounded border border-slate-200">
                    <span className="text-slate-400 text-[10px] block uppercase">Steel Tube Gauge</span>
                    <span className="font-bold text-slate-900">75 x 75 x 3.0mm</span>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-slate-200">
                    <span className="text-slate-400 text-[10px] block uppercase">Weight Capacity</span>
                    <span className="font-bold text-slate-900">850 KG Tested</span>
                  </div>
                </div>

                {/* Direct Action Button */}
                <button
                  onClick={() => navigateTo('equipment')}
                  className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Dumbbell className="w-3.5 h-3.5 text-blue-400" />
                  <span>Explore Full Commercial Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
