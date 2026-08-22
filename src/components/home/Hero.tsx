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
  Building2,
  FileText
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigateTo, setIsEnquiryCartOpen } = useApp();

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#1A2018] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Authoritative B2B Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Enterprise Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ECE6DB] border border-white/15 text-[#3A3028] font-mono text-[11px] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#D26539]"></span>
              <span>DIRECT FACTORY commercial & residential outfitting · ISO 9001:2015</span>
            </div>

            {/* Master Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#090C10] font-satoshi uppercase leading-[1.1]">
              Commercial & Residential Gym OUTFITTING.{' '}
              <span className="text-[#C2552F] block mt-1">DIRECT FROM FACTORY.</span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-base text-[#7A7268] max-w-2xl font-normal leading-relaxed">
              Engineered with 11-gauge precision laser-cut structural steel. We outfit health clubs, CrossFit boxes, university athletic centers, and luxury residential gyms across India with certified machinery and GYM MANAGEMENT ASSEMBLY.
            </p>

            {/* Industrial B2B Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => navigateTo('equipment')}
                className="px-6 py-3.5 rounded-lg bg-[#C2552F] hover:bg-[#090C10] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Build Commercial & Residential RFQ Package</span>
                <ArrowRight className="w-4 h-4 text-[#D26539]/20" />
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="px-6 py-3.5 rounded-lg bg-[#090C10] hover:bg-[#090C10] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <FileDown className="w-4 h-4 text-[#D26539]" />
                <span>Request 2026 Master Spec Sheet</span>
              </button>
            </div>

            {/* Direct Line & Fast Invoicing Notice */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#7A7268]">
              <a
                href="tel:+919067800048"
                className="inline-flex items-center gap-1.5 text-[#C2552F] hover:text-[#1A2018] font-bold"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C2552F]" />
                <span>Commercial & Residential Desk: +91 90678 00048</span>
              </a>
              <span className="text-[#A8A090] hidden sm:inline">•</span>
              <span className="text-[#6B6358]">GST Invoice Ready (18% ITC)</span>
            </div>

            {/* Technical Verification Badges */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs text-[#7A7268]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C2552F] shrink-0" />
                <span className="font-semibold">11-Gauge Solid Steel</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C2552F] shrink-0" />
                <span className="font-semibold">1,000kg Tested Load</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#C2552F] shrink-0" />
                <span className="font-semibold">10-Year Frame Warranty</span>
              </div>
            </div>

          </div>

          {/* Right Column: Industrial Spec Rig Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-[#1A2018] border border-white/15 rounded-lg overflow-hidden shadow-sm">
              
              {/* Product Header Bar */}
              <div className="bg-[#090C10] text-white px-4 py-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D26539]"></span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D8CDC0]">
                    FEATURED SPEC // RIG-900-X
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#1A2018] text-amber-300 font-mono text-[10px] font-bold border border-white/10">
                  COMMERCIAL & RESIDENTIAL GRADE
                </span>
              </div>

              {/* High-Definition Rig Image */}
              <div className="relative aspect-[4/3] bg-[#ECE6DB] overflow-hidden border-b border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial Commercial & Residential Gym Power Rack"
                  className="w-full h-full object-cover"
                />
                
                {/* Engineering Callout Overlay Badges */}
                <div className="absolute top-3 left-3 bg-[#090C10]/90 text-white text-[10px] font-mono font-bold px-2 py-1 rounded border border-white/10 shadow-sm flex items-center gap-1">
                  <Layers className="w-3 h-3 text-[#D26539]" />
                  <span>3x3" 11-Gauge Structural Uprights</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-[#090C10]/90 text-white text-[10px] font-mono font-bold px-2 py-1 rounded border border-white/10 shadow-sm flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#D26539]" />
                  <span>ISO 9001 Structural Rig</span>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="p-4 bg-[#F0EBE3]/10 space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-[#1A2018] p-2.5 rounded border border-white/10">
                    <span className="text-[#A8A090] text-[10px] block uppercase">Steel Tube Gauge</span>
                    <span className="font-bold text-[#090C10]">75 x 75 x 3.0mm</span>
                  </div>
                  <div className="bg-[#1A2018] p-2.5 rounded border border-white/10">
                    <span className="text-[#A8A090] text-[10px] block uppercase">Weight Capacity</span>
                    <span className="font-bold text-[#090C10]">850 KG Tested</span>
                  </div>
                </div>

                {/* Direct Action Button */}
                <button
                  onClick={() => setIsEnquiryCartOpen(true)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#C2552F] hover:bg-[#090C10] text-white text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Add Model to RFQ Quote</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
