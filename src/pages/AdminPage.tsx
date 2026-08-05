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
    <main className="pt-28 pb-24 bg-slate-100 min-h-screen text-slate-900 font-mono">
      <SEO title="Executive Enterprise Admin Suite | Tanush Fitness B2B" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Executive Header Bar */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 bg-white p-6 rounded-3xl shadow-sm">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading uppercase tracking-wide">
                Tanush Executive Enterprise Console
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Complete B2B Admin Suite • User Verification, Catalog Manager, PDF Quotes, Moderation & CSV Reports
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 relative"
              >
                <Bell className="w-4 h-4 text-blue-600" />
                {totalNotifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center">
                    {totalNotifications}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 z-50 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-xs font-black uppercase text-slate-900">Live Enterprise Alerts</span>
                    <button onClick={() => setIsNotificationsOpen(false)}>
                      <X className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                  <div className="space-y-2 text-xs">
                    {equipmentEnquiries.length > 0 && (
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 font-bold">
                        ⚡ {equipmentEnquiries.length} Equipment RFQ Quotation Requests
                      </div>
                    )}
                    {jobApplications.length > 0 && (
                      <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold">
                        ⚡ {jobApplications.length} Candidate Resume Applications
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Admin Session Active</span>
            </div>

            <button
              onClick={logoutAdmin}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-rose-50 border border-slate-200 text-slate-700 hover:text-rose-700 text-xs font-bold uppercase flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-4 h-4 text-rose-600" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Admin Suite Module Navigation Tabs (1 to 6) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-200 scrollbar-none">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-3 rounded-2xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono ${
              activeTab === 'users'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>1️⃣ Users & GST Verification</span>
          </button>

          <button
            onClick={() => setActiveTab('catalog')}
            className={`px-4 py-3 rounded-2xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono ${
              activeTab === 'catalog'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>2️⃣ Equipment Catalog Manager</span>
          </button>

          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-4 py-3 rounded-2xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono ${
              activeTab === 'quotes'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>3️⃣ PDF Quotes & WhatsApp</span>
          </button>

          <button
            onClick={() => setActiveTab('jobs-mod')}
            className={`px-4 py-3 rounded-2xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono ${
              activeTab === 'jobs-mod'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>4️⃣ Job Moderation Queue</span>
          </button>

          <button
            onClick={() => setActiveTab('reports')}
            className={`px-4 py-3 rounded-2xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono ${
              activeTab === 'reports'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>5️⃣ Analytics & CSV Export</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-3 rounded-2xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono ${
              activeTab === 'settings'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
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
