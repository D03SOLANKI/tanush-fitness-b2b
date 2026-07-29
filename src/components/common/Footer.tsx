import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Dumbbell, ShieldCheck, ArrowRight, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, setIsRegisterGymModalOpen, showToast } = useApp();
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast('Subscribed to B2B Briefing', 'You will receive monthly equipment liquidations & wholesale catalog updates.', 'info');
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4 pr-4">
            <div
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                <Dumbbell className="w-5 h-5 transform -rotate-45" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-white font-heading uppercase">TANUSH</span>
                <span className="text-xl font-black text-blue-500 font-heading uppercase">PRO</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              The premier industrial B2B marketplace for fitness facility owners, health club chains, and sports performance centers. Streamline commercial strength procurement, facility supply, and certified technician services.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-bold font-mono">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>ISO 9001 Commercial Safety Audited</span>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-black text-white uppercase tracking-wider block mb-2 font-mono">
                Subscribe to B2B Wholesale Briefings
              </span>
              <form onSubmit={handleNewsletter} className="flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  required
                  placeholder="Enter work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="py-2 px-4 rounded-xl bg-blue-600 text-white font-black text-xs hover:bg-blue-500 transition-all flex items-center gap-1 shrink-0 uppercase font-mono"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Marketplace */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-mono">
              Marketplace
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><button onClick={() => navigateTo('marketplace')} className="hover:text-blue-400 transition-colors">Commercial Strength Rigs</button></li>
              <li><button onClick={() => navigateTo('marketplace')} className="hover:text-blue-400 transition-colors">Cardio Consoles & Bikes</button></li>
              <li><button onClick={() => navigateTo('marketplace')} className="hover:text-blue-400 transition-colors">Bulk Nutrition & Whey</button></li>
              <li><button onClick={() => navigateTo('marketplace')} className="hover:text-blue-400 transition-colors">Free Weights & Dumbbells</button></li>
              <li><button onClick={() => navigateTo('marketplace')} className="hover:text-blue-400 transition-colors">Rubber Flooring & Turf</button></li>
              <li><button onClick={() => navigateTo('marketplace')} className="hover:text-blue-400 transition-colors">Cold Plunges & Saunas</button></li>
            </ul>
          </div>

          {/* Column 3: Services & Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-mono">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-400 transition-colors">Certified Master Trainers</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-400 transition-colors">Emergency Equipment Repair</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-400 transition-colors">AI Gym Retention Software</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-400 transition-colors">3D Gym Layout Design</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-400 transition-colors">Equipment Leasing & Finance</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-400 transition-colors">Janitorial & Sanitation</button></li>
            </ul>
          </div>

          {/* Column 4: Help & Vendor Program */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-mono">
              Vendor & Help
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><button onClick={() => setIsRegisterGymModalOpen(true)} className="hover:text-blue-400 transition-colors">Become Verified Vendor</button></li>
              <li><button onClick={() => setIsRegisterGymModalOpen(true)} className="hover:text-blue-400 transition-colors">Register Gym Chain</button></li>
              <li><span className="hover:text-slate-200 cursor-pointer">Freight & Logistics Guide</span></li>
              <li><span className="hover:text-slate-200 cursor-pointer">Return & Warranty Policy</span></li>
              <li><span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-slate-200 cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            © {new Date().getFullYear()} Tanush Fitness PRO B2B Marketplace Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-slate-400 hover:text-blue-400" /> Global Network
            </span>
            <span className="text-slate-400 font-bold font-mono uppercase">24/7 Concierge: 1-800-TANUSH-FIT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
