import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/common/SEO';
import {
  ShieldCheck,
  Dumbbell,
  Users,
  Briefcase,
  Mail,
  FileText,
  Lock,
  KeyRound,
  LogOut,
  ShieldAlert,
  Bell,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  X,
  UserCheck,
  Package,
  Printer,
  CheckSquare,
  FileSpreadsheet,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserManagementTab } from '../components/admin/UserManagementTab';
import { CatalogManagerTab } from '../components/admin/CatalogManagerTab';
import { PdfQuoteDispatcherTab } from '../components/admin/PdfQuoteDispatcherTab';
import { JobModerationTab } from '../components/admin/JobModerationTab';
import { AnalyticsReportsTab } from '../components/admin/AnalyticsReportsTab';
import { PlatformSettingsTab } from '../components/admin/PlatformSettingsTab';

export const AdminPage: React.FC = () => {
  const {
    isAdminAuthenticated,
    loginAdmin,
    logoutAdmin,
    equipmentEnquiries,
    jobListings,
    jobApplications,
    serviceEnquiries,
    contactEnquiries,
    navigateTo,
  } = useApp();

  type AdminTab =
    | 'users'
    | 'catalog'
    | 'quotes'
    | 'jobs-mod'
    | 'reports'
    | 'settings'
    | 'analytics'
    | 'equipment-enquiries'
    | 'manpower'
    | 'services'
    | 'contacts';

  const [activeTab, setActiveTab] = useState<AdminTab>('users');
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(passcode);
    if (!success) {
      setAuthError(true);
    } else {
      setAuthError(false);
      setPasscode('');
    }
  };

  // RESTRICTED ACCESS SCREEN (If not authenticated)
  if (!isAdminAuthenticated) {
    return (
      <main className="pt-32 pb-24 bg-slate-950 min-h-screen text-slate-100 font-mono flex items-center justify-center p-4">
        <SEO title="Admin Security Authentication Gate | Tanush B2B" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-2xl space-y-6 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center shadow-inner">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block font-mono">
              RESTRICTED EXECUTIVE ACCESS
            </span>
            <h1 className="text-2xl font-black text-white font-heading uppercase">
              Tanush Admin Authentication
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              This panel is restricted exclusively to authorized Tanush Fitness directors, account managers, and system administrators.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase font-mono block mb-1">
                Enter Admin Security Passcode *
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="Enter passcode (Hint: admin2026)"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setAuthError(false);
                  }}
                  className={`w-full bg-slate-950 border rounded-xl py-3 px-4 pl-10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none ${
                    authError ? 'border-rose-500' : 'border-slate-800 focus:border-amber-400'
                  }`}
                />
                <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              </div>

              {authError && (
                <div className="text-[10px] text-rose-400 font-bold mt-1 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Invalid security passcode. Access denied.</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Authenticate & Access Console</span>
            </button>
          </form>

          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>256-Bit SSL Encrypted Audit Log</span>
            <button
              onClick={() => navigateTo('home')}
              className="text-slate-400 hover:text-white underline font-bold"
            >
              Return Home →
            </button>
          </div>
        </motion.div>
      </main>
    );
  }

  const totalNotifications = equipmentEnquiries.length + jobApplications.length + serviceEnquiries.length;

  return (
    <main className="pt-8 pb-24 bg-gradient-to-br from-[#0B0F19] via-[#0D1527] to-[#0B0F19] min-h-screen text-slate-100 font-mono">
      <SEO title="Executive Enterprise Admin Suite | Tanush Fitness B2B" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Executive Header Bar */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800 pb-6 bg-[#0F172A]/90 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-black/20">
          <div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-7 h-7 text-amber-400" />
              <h1 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase tracking-wide">
                Tanush Executive Console
              </h1>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Centralized Enterprise Suite • User Verification, Equipment Catalog, PDF Quotes, Moderation & CSV Reports
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white relative transition shadow-sm"
              >
                <Bell className="w-4 h-4 text-amber-400" />
                {totalNotifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center animate-pulse">
                    {totalNotifications}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-4 z-50 space-y-3 backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-black uppercase text-slate-200">Live Enterprise Alerts</span>
                    <button onClick={() => setIsNotificationsOpen(false)}>
                      <X className="w-4 h-4 text-slate-400 hover:text-white" />
                    </button>
                  </div>
                  <div className="space-y-2 text-xs">
                    {equipmentEnquiries.length > 0 && (
                      <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold">
                        ⚡ {equipmentEnquiries.length} Equipment RFQ Quotation Requests
                      </div>
                    )}
                    {jobApplications.length > 0 && (
                      <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold">
                        ⚡ {jobApplications.length} Candidate Resume Applications
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Admin Session Active</span>
            </div>

            <button
              onClick={logoutAdmin}
              className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-rose-500/20 border border-slate-700 hover:border-rose-500/30 text-slate-300 hover:text-rose-400 text-xs font-bold uppercase flex items-center gap-1.5 transition-all"
            >
              <LogOut className="w-4 h-4 text-rose-400" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Clean Natural Horizontal Scrolling Tab Bar */}
        <div className="flex items-center gap-3 overflow-x-auto p-2.5 bg-[#0F172A]/80 rounded-3xl border border-slate-800 shadow-xl mb-8 scrollbar-thin backdrop-blur-md">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-5 py-3 rounded-2xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono shrink-0 ${
              activeTab === 'users'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>1️⃣ Users & GST Verification</span>
          </button>

          <button
            onClick={() => setActiveTab('catalog')}
            className={`px-5 py-3 rounded-2xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono shrink-0 ${
              activeTab === 'catalog'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>2️⃣ Equipment Catalog Manager</span>
          </button>

          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-5 py-3 rounded-2xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono shrink-0 ${
              activeTab === 'quotes'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>3️⃣ PDF Quotes & WhatsApp</span>
          </button>

          <button
            onClick={() => setActiveTab('jobs-mod')}
            className={`px-5 py-3 rounded-2xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono shrink-0 ${
              activeTab === 'jobs-mod'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>4️⃣ Job Moderation Queue</span>
          </button>

          <button
            onClick={() => setActiveTab('reports')}
            className={`px-5 py-3 rounded-2xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono shrink-0 ${
              activeTab === 'reports'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>5️⃣ Analytics & CSV Export</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-5 py-3 rounded-2xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono shrink-0 ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>6️⃣ System Settings</span>
          </button>
        </div>

        {/* Render Tab Contents */}
        {activeTab === 'users' && <UserManagementTab />}
        {activeTab === 'catalog' && <CatalogManagerTab />}
        {activeTab === 'quotes' && <PdfQuoteDispatcherTab />}
        {activeTab === 'jobs-mod' && <JobModerationTab />}
        {activeTab === 'reports' && <AnalyticsReportsTab />}
        {activeTab === 'settings' && <PlatformSettingsTab />}
      </div>
    </main>
  );
};
