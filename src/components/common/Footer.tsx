import React from 'react';
import { useApp } from '../../context/AppContext';
import { Dumbbell, ShieldCheck, PhoneCall, Mail, MapPin, Lock, FileCheck, Truck, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand Info & Industrial Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 shadow-sm group-hover:border-blue-600 transition-colors">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white font-heading uppercase">
                  TANUSH <span className="text-blue-500">FITNESS</span>
                </span>
                <span className="block text-[9px] font-bold text-slate-400 uppercase font-mono tracking-wider">
                  Industrial B2B Outfitting
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              India's premier commercial gym outfitting platform. Direct factory procurement of 11-gauge power racks, selectorized machinery, accredited fitness directors, and turnkey facility growth systems.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001:2015
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">350+ Facilities Outfitted</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">18% GST ITC Ready</span>
            </div>
          </div>

          {/* Col 2: Core Businesses */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Procurement Pillars
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => navigateTo('equipment')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Commercial Gym Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('manpower')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Manpower Recruitment Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Turnkey Business Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('equipment')}
                  className="hover:text-blue-400 transition-colors text-left text-slate-500"
                >
                  Download CAD Schematics
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Corporate Directory
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-blue-400 transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-blue-400 transition-colors">
                  Company Background
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-blue-400 transition-colors">
                  Contact & Factory Inquiry
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('equipment')} className="hover:text-blue-400 transition-colors">
                  Submit Project RFQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Corporate Helpline
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div>
                <a
                  href="tel:+919067800048"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="font-semibold text-slate-200">+91 90678 00048</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:Info@tanushfitness.com"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="text-slate-200">Info@tanushfitness.com</span>
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[11px] text-slate-300">
                  The Landmark Complex, A-301-304, Near Podar International School, Urjanagar 1, Kudasan, Gandhinagar, Gujarat 382419
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with discrete Admin Lock trigger */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Tanush Fitness Commercial Marketplace. All rights reserved.</span>
            {/* Discrete Lock Icon for Secret Authorized Admin Gate */}
            <button
              onClick={() => navigateTo('admin')}
              title="Executive Admin Panel"
              className="opacity-30 hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-amber-400"
            >
              <Lock className="w-3 h-3" />
            </button>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">GST Compliance</span>
            <span className="hover:text-slate-300 cursor-pointer">Warranty Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">ISO 9001 Certificate</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
