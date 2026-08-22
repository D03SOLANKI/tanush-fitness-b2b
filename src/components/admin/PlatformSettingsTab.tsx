import React, { useState } from 'react';
import { Settings, Save, Megaphone, PhoneCall, Mail, MapPin, Percent } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { API_BASE_URL } from '../../config/api';

export const PlatformSettingsTab: React.FC = () => {
  const { platformSettings, updatePlatformSettings, accessToken } = useApp();

  const [phone, setPhone] = useState(platformSettings.supportPhone);
  const [email, setEmail] = useState(platformSettings.supportEmail);
  const [address, setAddress] = useState(platformSettings.corporateAddress);
  const [gstRate, setGstRate] = useState(platformSettings.gstRate);
  const [bannerText, setBannerText] = useState(platformSettings.bannerText);
  const [bannerEnabled, setBannerEnabled] = useState(platformSettings.bannerEnabled);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      supportPhone: phone,
      supportEmail: email,
      corporateAddress: address,
      gstRate,
      bannerText,
      bannerEnabled,
    };

    updatePlatformSettings(updated);

    fetch(`${API_BASE_URL}/api/v1/admin/settings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updated),
    }).catch(err => console.log('Backend sync notice:', err.message));
  };

  return (
    <div className="space-y-6">
      {/* Header Banner - Modern Light */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#1A2018] border border-white/10 p-6 rounded-none shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-[#090C10] flex items-center gap-2">
            <Settings className="w-5 h-5 text-[#D26539]" /> Platform System Settings & Banner Management
          </h2>
          <p className="text-sm text-[#6B6358] mt-1">
            Update site-wide support contact info, tax parameters, and live announcement banners displayed on the header.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Banner Announcement Control */}
        <div className="bg-[#1A2018] border border-white/10 rounded-none p-6 space-y-4 shadow-sm">
          <h3 className="text-base font-bold text-[#090C10] flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-[#D26539]" /> Live Top Announcement Banner Bar
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="bannerEnabled"
                checked={bannerEnabled}
                onChange={e => setBannerEnabled(e.target.checked)}
                className="w-4 h-4 rounded accent-[#D26539] bg-[#F0EBE3]/10 border-white/15"
              />
              <label htmlFor="bannerEnabled" className="text-sm font-semibold text-[#3A3028]">
                Enable Site-Wide Top Announcement Bar
              </label>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#7A7268] mb-1">Banner Announcement Text</label>
              <input
                type="text"
                value={bannerText}
                onChange={e => setBannerText(e.target.value)}
                placeholder="e.g. ⚡ Special Bulk Offer: Get 20% Off Heavy Duty Power Racks This Week!"
                className="w-full bg-[#F0EBE3]/10 border border-white/10 rounded-xl px-4 py-2.5 text-[#090C10] text-sm focus:outline-none focus:border-[#D26539] focus:bg-[#1A2018] transition"
              />
            </div>
          </div>
        </div>

        {/* Global Contact Info */}
        <div className="bg-[#1A2018] border border-white/10 rounded-none p-6 space-y-4 shadow-sm">
          <h3 className="text-base font-bold text-[#090C10] flex items-center gap-2">
            <PhoneCall className="w-5 h-5 text-[#D26539]" /> Support Contact & Office Location
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#7A7268] mb-1 flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5 text-[#D26539]" /> Helpdesk Phone / WhatsApp Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full bg-[#F0EBE3]/10 border border-white/10 rounded-xl px-4 py-2.5 text-[#090C10] text-sm focus:outline-none focus:border-[#D26539] focus:bg-[#1A2018] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#7A7268] mb-1 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#D26539]" /> Support Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-[#F0EBE3]/10 border border-white/10 rounded-xl px-4 py-2.5 text-[#090C10] text-sm focus:outline-none focus:border-[#D26539] focus:bg-[#1A2018] transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-[#7A7268] mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D26539]" /> Corporate Office Address
              </label>
              <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="w-full bg-[#F0EBE3]/10 border border-white/10 rounded-xl px-4 py-2.5 text-[#090C10] text-sm focus:outline-none focus:border-[#D26539] focus:bg-[#1A2018] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#7A7268] mb-1 flex items-center gap-1">
                <Percent className="w-3.5 h-3.5 text-[#D26539]" /> Default GST Tax Rate (%)
              </label>
              <input
                type="text"
                value={gstRate}
                onChange={e => setGstRate(e.target.value)}
                className="w-full bg-[#F0EBE3]/10 border border-white/10 rounded-xl px-4 py-2.5 text-[#090C10] text-sm focus:outline-none focus:border-[#D26539] focus:bg-[#1A2018] transition"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#D26539] hover:bg-[#D26539] text-white px-6 py-3 rounded-xl text-sm font-bold transition shadow-md shadow-[#D26539]/20"
          >
            <Save className="w-4 h-4" /> Save System Settings
          </button>
        </div>
      </form>
    </div>
  );
};
