import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { SEO } from '../components/common/SEO';
import {
  ShieldCheck,
  Dumbbell,
  Users,
  Briefcase,
  Mail,
  Plus,
  FileText,
  Lock,
  KeyRound,
  LogOut,
  ShieldAlert,
  Bell,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const [activeTab, setActiveTab] = useState<'analytics' | 'equipment-enquiries' | 'manpower' | 'services' | 'contacts' | 'equipment'>('analytics');
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

  // Calculate Mock Analytics Metrics
  const totalNotifications = equipmentEnquiries.length + jobApplications.length + serviceEnquiries.length;

  return (
    <main className="pt-28 pb-24 bg-slate-900 min-h-screen text-slate-100 font-mono">
      <SEO title="Executive Admin Dashboard | Tanush Fitness B2B" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
              <h1 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase tracking-wide">
                Tanush Fitness Executive Console
              </h1>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Authorized Executive Access Active • Analytics, RFQs, Job Applications & Notifications
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white relative"
              >
                <Bell className="w-4 h-4 text-amber-400" />
                {totalNotifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center">
                    {totalNotifications}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown Drawer */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl p-4 z-50 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                    <span className="text-xs font-black uppercase text-white">Live Admin Alerts</span>
                    <button onClick={() => setIsNotificationsOpen(false)}>
                      <X className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                  <div className="space-y-2 text-xs">
                    {equipmentEnquiries.length > 0 && (
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-blue-400">
                        ⚡ {equipmentEnquiries.length} New Equipment RFQ Quotation Requests
                      </div>
                    )}
                    {jobApplications.length > 0 && (
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-amber-400">
                        ⚡ {jobApplications.length} Candidate Resume Applications
                      </div>
                    )}
                    {serviceEnquiries.length > 0 && (
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400">
                        ⚡ {serviceEnquiries.length} Growth Service Quotation Queries
                      </div>
                    )}
                    {totalNotifications === 0 && (
                      <div className="text-slate-400 text-center py-2 text-[11px]">No unread alerts.</div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Admin Session Active</span>
            </div>

            <button
              onClick={logoutAdmin}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-rose-900/60 border border-slate-700 text-slate-300 hover:text-white text-xs font-bold uppercase flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-4 h-4 text-rose-400" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* 4 Overview Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
            <div className="text-[10px] font-bold uppercase text-slate-400">Equipment RFQs</div>
            <div className="text-3xl font-black text-blue-400">{equipmentEnquiries.length}</div>
            <div className="text-[10px] text-slate-500">Pending Quotation PDFs</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
            <div className="text-[10px] font-bold uppercase text-slate-400">Job Candidates</div>
            <div className="text-3xl font-black text-amber-400">{jobApplications.length}</div>
            <div className="text-[10px] text-slate-500">From {jobListings.length} Posted Openings</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
            <div className="text-[10px] font-bold uppercase text-slate-400">Service Requests</div>
            <div className="text-3xl font-black text-emerald-400">{serviceEnquiries.length}</div>
            <div className="text-[10px] text-slate-500">Growth & Tech RFQs</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
            <div className="text-[10px] font-bold uppercase text-slate-400">Contact Queries</div>
            <div className="text-3xl font-black text-purple-400">{contactEnquiries.length}</div>
            <div className="text-[10px] text-slate-500">Direct Messages</div>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800 scrollbar-none">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'analytics'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Dashboard Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('equipment-enquiries')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'equipment-enquiries'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Equipment Enquiries ({equipmentEnquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('manpower')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'manpower'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Jobs & Candidates ({jobApplications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'services'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Service Requests ({serviceEnquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'contacts'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Contact Messages ({contactEnquiries.length})</span>
          </button>
        </div>

        {/* Tab 1: Dashboard Analytics & SVG Visual Charts */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Visual SVG Monthly Enquiry Growth Chart */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-blue-400 font-mono">B2B QUOTATION TRENDS</span>
                  <h3 className="text-lg font-black text-white uppercase font-heading">
                    Monthly Quotation Enquiry Growth (2026)
                  </h3>
                </div>
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>

              {/* Visual SVG Bar Chart */}
              <div className="h-48 w-full flex items-end justify-between gap-2 pt-6 border-b border-slate-700 pb-2">
                {[
                  { month: 'Jan', count: 18 },
                  { month: 'Feb', count: 24 },
                  { month: 'Mar', count: 32 },
                  { month: 'Apr', count: 45 },
                  { month: 'May', count: 58 },
                  { month: 'Jun', count: 72 },
                  { month: 'Jul', count: 89 },
                ].map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="text-[10px] font-bold text-blue-400 group-hover:scale-110 transition-transform">
                      {item.count}
                    </div>
                    <div
                      style={{ height: `${(item.count / 100) * 100}%` }}
                      className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg group-hover:from-blue-500 group-hover:to-blue-300 transition-all"
                    />
                    <div className="text-[10px] font-mono text-slate-400">{item.month}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Breakdown Charts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Most Viewed Commercial Equipment */}
              <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-4">
                <h4 className="text-sm font-black text-white uppercase font-heading flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-blue-400" />
                  <span>Most Viewed Commercial Gear</span>
                </h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Pro Series Power Rack System</span>
                      <span className="font-bold text-blue-400">42% Views</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '42%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Commercial Curved Treadmill</span>
                      <span className="font-bold text-blue-400">28% Views</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '28%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Precision Leg Press 45°</span>
                      <span className="font-bold text-blue-400">18% Views</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '18%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Requested Services */}
              <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-4">
                <h4 className="text-sm font-black text-white uppercase font-heading flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <span>Top Requested Business Services</span>
                </h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Meta & Google Ads Campaign Management</span>
                      <span className="font-bold text-emerald-400">48% RFQs</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '48%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>AI WhatsApp CRM & Lead Automation</span>
                      <span className="font-bold text-emerald-400">32% RFQs</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '32%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>3D Gym Interior & Floor Layout CAD</span>
                      <span className="font-bold text-emerald-400">20% RFQs</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '20%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Equipment Enquiries */}
        {activeTab === 'equipment-enquiries' && (
          <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-black text-white uppercase font-heading flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              <span>Incoming Equipment Quotation Requests ({equipmentEnquiries.length})</span>
            </h3>

            {equipmentEnquiries.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                No equipment quotation enquiries received yet. Enquiries submitted from the Equipment Cart will appear here.
              </div>
            ) : (
              <div className="space-y-4">
                {equipmentEnquiries.map(enq => (
                  <div key={enq.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-700 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-sm font-black text-white uppercase">{enq.name}</span>
                        <span className="text-xs text-blue-400 block font-bold">Gym: {enq.companyGymName} • Ref: {enq.rfqReference || 'RFQ-2026'}</span>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400 text-blue-400 text-[10px] font-bold">
                          {enq.status}
                        </span>
                        <span className="text-[10px] text-slate-500 block mt-1">{enq.createdAt}</span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-300 font-mono">
                      Contact: <strong>{enq.mobile}</strong> • Email: {enq.email || 'N/A'} • City: {enq.city || 'N/A'}
                    </div>

                    <div className="pt-2">
                      <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">Selected Equipment Items:</div>
                      <div className="flex flex-wrap gap-2">
                        {enq.selectedProducts.map((item, i) => (
                          <span key={i} className="text-[10px] px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-white font-mono">
                            {item.name} (x{item.quantity})
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Manpower */}
        {activeTab === 'manpower' && (
          <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-black text-white uppercase font-heading flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <span>Received Candidate Job Applications ({jobApplications.length})</span>
            </h3>

            {jobApplications.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                No job applications received yet.
              </div>
            ) : (
              <div className="space-y-4">
                {jobApplications.map(app => (
                  <div key={app.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-700 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-white uppercase">{app.fullName}</span>
                      <span className="text-[10px] font-bold text-amber-400 font-mono">{app.submittedAt}</span>
                    </div>
                    <div className="text-xs text-blue-400 font-bold">
                      Target Role: {app.jobTitle} ({app.gymName})
                    </div>
                    <div className="text-xs text-slate-300">
                      Mobile: <strong>{app.mobile}</strong> • Email: {app.email}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Services */}
        {activeTab === 'services' && (
          <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-black text-white uppercase font-heading flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              <span>Service RFQs ({serviceEnquiries.length})</span>
            </h3>

            {serviceEnquiries.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                No service enquiries submitted yet.
              </div>
            ) : (
              <div className="space-y-4">
                {serviceEnquiries.map(srv => (
                  <div key={srv.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-700 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-white uppercase">{srv.name}</span>
                      <span className="text-[10px] text-emerald-400 font-mono">{srv.createdAt}</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-bold">
                      Service: {srv.serviceRequired}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 5: Contact Messages */}
        {activeTab === 'contacts' && (
          <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-black text-white uppercase font-heading flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-400" />
              <span>Contact Messages ({contactEnquiries.length})</span>
            </h3>

            {contactEnquiries.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                No contact form submissions received yet.
              </div>
            ) : (
              <div className="space-y-4">
                {contactEnquiries.map(cnt => (
                  <div key={cnt.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-700 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-white uppercase">{cnt.name}</span>
                      <span className="text-[10px] text-purple-400 font-mono">{cnt.createdAt}</span>
                    </div>
                    <p className="text-xs text-slate-400 italic">"{cnt.message}"</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};
