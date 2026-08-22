import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/common/SEO';
import {
  ShieldCheck,
  Lock,
  KeyRound,
  LogOut,
  ShieldAlert,
  Bell,
  X,
  UserCheck,
  Package,
  Printer,
  CheckSquare,
  FileSpreadsheet,
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';
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
    jobApplications,
    serviceEnquiries,
    navigateTo,
  } = useApp();

  type AdminTab =
    | 'users'
    | 'catalog'
    | 'quotes'
    | 'jobs-mod'
    | 'reports'
    | 'settings';

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

  // RESTRICTED ACCESS SCREEN (If not authenticated) - Premium Light Theme
  if (!isAdminAuthenticated) {
    return (
      <main className="pt-20 pb-24 bg-[#F0EBE3]/10 min-h-screen text-[#090C10] font-mono flex items-center justify-center p-4">
        <SEO title="Admin Security Authentication Gate | Tanush B2B" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full rounded-none bg-[#1A2018] border border-white/10 p-8 shadow-xl space-y-6 text-center"
        >
          <div className="w-16 h-16 rounded-none bg-[#D26539]/10 border border-[#D26539]/20 text-[#D26539] mx-auto flex items-center justify-center shadow-inner">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#D26539] uppercase tracking-widest block font-mono">
              RESTRICTED EXECUTIVE ACCESS
            </span>
            <h1 className="text-2xl font-black text-[#090C10] font-satoshi uppercase">
              Tanush Admin Authentication
            </h1>
            <p className="text-xs text-[#6B6358] leading-relaxed font-normal">
              This panel is restricted exclusively to authorized Tanush Fitness directors, account managers, and system administrators.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
            <div>
              <label className="text-[10px] font-bold text-[#7A7268] uppercase font-mono block mb-1">
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
                  className={`w-full bg-[#F0EBE3]/10 border rounded-xl py-3 px-4 pl-10 text-xs font-mono text-[#090C10] placeholder-[#7A7268] focus:outline-none ${
                    authError ? 'border-rose-500' : 'border-white/10 focus:border-[#D26539]'
                  }`}
                />
                <KeyRound className="w-4 h-4 text-[#A8A090] absolute left-3.5 top-3.5" />
              </div>

              {authError && (
                <div className="text-[10px] text-rose-600 font-bold mt-1 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Invalid security passcode. Access denied.</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#D26539] hover:bg-[#D26539] text-white font-bold text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-lg shadow-[#D26539]/20 transition-all"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Authenticate & Access Console</span>
            </button>
          </form>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-[#A8A090] font-mono">
            <span>256-Bit SSL Encrypted Audit Log</span>
            <button
              onClick={() => navigateTo('home')}
              className="text-[#D26539] hover:underline font-bold"
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
    <main className="pt-8 pb-24 bg-[#F0EBE3]/10 min-h-screen text-[#090C10] font-mono">
      <SEO title="Executive Enterprise Admin Suite | Tanush Fitness B2B" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Executive Header Bar */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/10 pb-6 bg-[#1A2018] p-6 rounded-none shadow-sm">
          <div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-7 h-7 text-[#D26539]" />
              <h1 className="text-2xl sm:text-3xl font-black text-[#090C10] font-satoshi uppercase tracking-wide">
                Tanush Executive Console
              </h1>
            </div>
            <p className="text-xs text-[#6B6358] mt-1">
              Centralized Enterprise Suite • User Verification, Equipment Catalog, PDF Quotes, Moderation & CSV Reports
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2.5 rounded-xl bg-[#F0EBE3]/10 border border-white/10 text-[#7A7268] hover:text-[#090C10] relative transition shadow-sm"
              >
                <Bell className="w-4 h-4 text-[#D26539]" />
                {totalNotifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center">
                    {totalNotifications}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-none bg-[#1A2018] border border-white/10 shadow-2xl p-4 z-50 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-black uppercase text-[#090C10]">Live Enterprise Alerts</span>
                    <button onClick={() => setIsNotificationsOpen(false)}>
                      <X className="w-4 h-4 text-[#A8A090] hover:text-[#7A7268]" />
                    </button>
                  </div>
                  <div className="space-y-2 text-xs">
                    {equipmentEnquiries.length > 0 && (
                      <div className="p-2.5 rounded-xl bg-[#D26539]/10 border border-[#D26539]/20 text-[#090C10] font-bold">
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

            <div className="px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-2 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Admin Session Active</span>
            </div>

            <button
              onClick={logoutAdmin}
              className="px-4 py-2 rounded-xl bg-[#ECE6DB] hover:bg-rose-50 border border-white/10 hover:border-rose-200 text-[#7A7268] hover:text-rose-700 text-xs font-bold uppercase flex items-center gap-1.5 transition-all shadow-sm"
            >
              <LogOut className="w-4 h-4 text-rose-600" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Clean Natural Horizontal Scrolling Tab Bar */}
        <div className="flex items-center gap-3 overflow-x-auto p-2.5 bg-[#1A2018] rounded-none border border-white/10 shadow-sm mb-8 scrollbar-thin">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-5 py-3 rounded-none text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono shrink-0 ${
              activeTab === 'users'
                ? 'bg-[#D26539] text-white font-bold shadow-md shadow-[#D26539]/20'
                : 'bg-[#F0EBE3]/10 text-[#7A7268] border border-white/10 hover:bg-[#ECE6DB] hover:text-[#090C10]'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>1️⃣ Users & GST Verification</span>
          </button>

          <button
            onClick={() => setActiveTab('catalog')}
            className={`px-5 py-3 rounded-none text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono shrink-0 ${
              activeTab === 'catalog'
                ? 'bg-[#D26539] text-white font-bold shadow-md shadow-[#D26539]/20'
                : 'bg-[#F0EBE3]/10 text-[#7A7268] border border-white/10 hover:bg-[#ECE6DB] hover:text-[#090C10]'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>2️⃣ Equipment Catalog Manager</span>
          </button>

          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-5 py-3 rounded-none text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono shrink-0 ${
              activeTab === 'quotes'
                ? 'bg-[#D26539] text-white font-bold shadow-md shadow-[#D26539]/20'
                : 'bg-[#F0EBE3]/10 text-[#7A7268] border border-white/10 hover:bg-[#ECE6DB] hover:text-[#090C10]'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>3️⃣ PDF Quotes & WhatsApp</span>
          </button>

          <button
            onClick={() => setActiveTab('jobs-mod')}
            className={`px-5 py-3 rounded-none text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono shrink-0 ${
              activeTab === 'jobs-mod'
                ? 'bg-[#D26539] text-white font-bold shadow-md shadow-[#D26539]/20'
                : 'bg-[#F0EBE3]/10 text-[#7A7268] border border-white/10 hover:bg-[#ECE6DB] hover:text-[#090C10]'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>4️⃣ Job Moderation Queue</span>
          </button>

          <button
            onClick={() => setActiveTab('reports')}
            className={`px-5 py-3 rounded-none text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono shrink-0 ${
              activeTab === 'reports'
                ? 'bg-[#D26539] text-white font-bold shadow-md shadow-[#D26539]/20'
                : 'bg-[#F0EBE3]/10 text-[#7A7268] border border-white/10 hover:bg-[#ECE6DB] hover:text-[#090C10]'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>5️⃣ Analytics & CSV Export</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-5 py-3 rounded-none text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 font-mono shrink-0 ${
              activeTab === 'settings'
                ? 'bg-[#D26539] text-white font-bold shadow-md shadow-[#D26539]/20'
                : 'bg-[#F0EBE3]/10 text-[#7A7268] border border-white/10 hover:bg-[#ECE6DB] hover:text-[#090C10]'
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
