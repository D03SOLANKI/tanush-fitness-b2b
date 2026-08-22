import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, ArrowRight, Dumbbell, PhoneCall, FileDown } from 'lucide-react';

export const CallToAction: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <section className="py-16 sm:py-20 bg-[#1A2018] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#090C10] border border-white/10 p-8 sm:p-12 text-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1A2018] border border-white/10 text-[#D26539] font-mono text-[11px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D26539]" />
                <span>FACTORY DIRECT COMMERCIAL PROCUREMENT</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-satoshi uppercase tracking-tight leading-tight">
                Ready to Outfit Your Commercial Facility?
              </h2>

              <p className="text-xs sm:text-sm text-[#A8A090] max-w-2xl font-normal leading-relaxed">
                Connect directly with factory engineers. Receive 100% itemized GST quotations, 3D floor plan CAD layouts, and nationwide delivery timelines within 24 hours.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#A8A090]">
                <span>📞 Hotline: <a href="tel:+919067800048" className="text-white font-bold hover:text-[#D26539] transition-colors">+91 90678 00048</a></span>
                <span>•</span>
                <span>📧 <a href="mailto:Info@tanushfitness.com" className="text-white hover:text-[#D26539] transition-colors">Info@tanushfitness.com</a></span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 font-mono">
              <button
                onClick={() => navigateTo('equipment')}
                className="w-full py-3 px-5 rounded-lg bg-[#D26539] hover:bg-[#C2552F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Dumbbell className="w-3.5 h-3.5 text-[#D26539]/20" />
                <span>Build Project RFQ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="w-full py-3 px-5 rounded-lg bg-[#1A2018] hover:bg-[#1A2018] text-[#D8CDC0] border border-white/10 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Schedule Consultation</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
