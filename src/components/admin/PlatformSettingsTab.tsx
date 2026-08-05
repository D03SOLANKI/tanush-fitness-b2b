import React, { useState } from 'react';
import { Settings, Save, Megaphone, PhoneCall, Mail, MapPin, Percent } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PlatformSettingsTab: React.FC = () => {
  const { showToast } = useApp();

  const [form, setForm] = useState({
    supportPhone: '+91 98765 43210',
    supportEmail: 'support@tanushfitness.com',
    corporateAddress: 'Tanush Fitness Commercial Hub, Sector 44, Gurugram, HR 122003',
    defaultGstPercent: 18,
    announcementEnabled: true,
    announcementText: '⚡ Exclusive B2B Sale: 15% Additional Discount on Complete Commercial Cardio Bundles!',
  });

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Platform System Settings updated & synced live');
  };

  return (
    <div className="space-y-6 font-mono text-xs max-w-4xl">
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <h3 className="text-sm font-black text-slate-900 font-heading uppercase">
            Global Platform System Settings
          </h3>
          <p className="text-[10px] text-slate-500 font-normal">
            Update site-wide support contact info, GST default taxes, & announcement bar banner text.
          </p>
        </div>
      </div>

      <form onSubmit={handleSaveSettings} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
        {/* Support & Contact Settings */}
        <div className="space-y-4">
          <div className="text-xs font-black uppercase text-slate-900 font-heading border-b border-slate-100 pb-2">
            1. Support & B2B Helpdesk Contact Info
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                Support WhatsApp & Phone *
              </label>
              <div className="relative">
                <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={form.supportPhone}
                  onChange={e => setForm({ ...form, supportPhone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 pl-9 text-slate-900 font-bold"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                Support Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={form.supportEmail}
                  onChange={e => setForm({ ...form, supportEmail: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 pl-9 text-slate-900 font-bold"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
              Corporate Office Address *
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                value={form.corporateAddress}
                onChange={e => setForm({ ...form, corporateAddress: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 pl-9 text-slate-900 font-bold"
              />
            </div>
          </div>
        </div>

        {/* GST & Tax Defaults */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="text-xs font-black uppercase text-slate-900 font-heading border-b border-slate-100 pb-2">
            2. Tax & Freight Defaults
          </div>

          <div className="w-full sm:w-1/2">
            <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
              Default GST Rate (%)
            </label>
            <div className="relative">
              <Percent className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="number"
                value={form.defaultGstPercent}
                onChange={e => setForm({ ...form, defaultGstPercent: parseFloat(e.target.value) || 18 })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 pl-9 text-slate-900 font-bold"
              />
            </div>
          </div>
        </div>

        {/* Announcement Banner */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="text-xs font-black uppercase text-slate-900 font-heading border-b border-slate-100 pb-2 flex items-center justify-between">
            <span>3. Site-Wide Announcement Bar</span>
            <label className="flex items-center gap-2 text-xs font-bold text-blue-600 cursor-pointer">
              <input
                type="checkbox"
                checked={form.announcementEnabled}
                onChange={e => setForm({ ...form, announcementEnabled: e.target.checked })}
                className="w-4 h-4 accent-blue-600 rounded"
              />
              <span>Banner Active</span>
            </label>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
              Banner Text Content
            </label>
            <div className="relative">
              <Megaphone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={form.announcementText}
                onChange={e => setForm({ ...form, announcementText: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 pl-9 text-slate-900 font-bold"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save & Apply Settings Globally</span>
        </button>
      </form>
    </div>
  );
};
