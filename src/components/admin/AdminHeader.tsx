import React from 'react';
import { ShieldCheck, ArrowLeft, Lock, Bell, LogOut, ExternalLink, Activity } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminHeader: React.FC = () => {
  const { navigateTo, isAdminAuthenticated, logoutAdmin, equipmentEnquiries, jobApplications, serviceEnquiries } = useApp();

  const totalAlerts = equipmentEnquiries.length + jobApplications.length + serviceEnquiries.length;

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-xl font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-amber-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase font-heading">
                  ADMIN PANEL
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase tracking-widest">
                  Secure Console
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-normal hidden sm:block">
                Tanush Fitness B2B • Central Operations & Database Portal
              </p>
            </div>
          </div>

          {/* Center Info Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Live Sync Active</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 font-sans">PostgreSQL / Supabase</span>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {isAdminAuthenticated && (
              <div className="flex items-center gap-2">
                <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Authenticated</span>
                </div>
              </div>
            )}

            {/* Return to Public Website */}
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold transition shadow-sm"
              title="Return to Main Website"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Exit to Main Site</span>
              <span className="sm:hidden">Exit</span>
            </button>

            {isAdminAuthenticated && (
              <button
                onClick={logoutAdmin}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold transition"
                title="Logout Admin Session"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
