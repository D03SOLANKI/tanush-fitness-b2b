import React, { useState } from 'react';
import { Settings, Save, Megaphone, PhoneCall, Mail, MapPin, Percent } from 'lucide-react';
import { useApp } from '../../context/AppContext';

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

    fetch('http://localhost:5000/api/admin/settings', {
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
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-900 border border-gray-800 p-6 rounded-2xl">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-amber-500" /> Platform System Settings & Banner Management
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Update site-wide support contact info, tax parameters, and live announcement banners displayed on the header.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Banner Announcement Control */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-amber-500" /> Live Top Announcement Banner Bar
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="bannerEnabled"
                checked={bannerEnabled}
                onChange={e => setBannerEnabled(e.target.checked)}
                className="w-4 h-4 rounded accent-amber-500 bg-gray-800 border-gray-700"
              />
              <label htmlFor="bannerEnabled" className="text-sm font-semibold text-gray-200">
                Enable Site-Wide Top Announcement Bar
              </label>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Banner Announcement Text</label>
              <input
                type="text"
                value={bannerText}
                onChange={e => setBannerText(e.target.value)}
                placeholder="e.g. ⚡ Special Bulk Offer: Get 20% Off Heavy Duty Power Racks This Week!"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Global Contact Info */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <PhoneCall className="w-5 h-5 text-amber-500" /> Support Contact & Office Location
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1 flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5 text-amber-500" /> Helpdesk Phone / WhatsApp Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-amber-500" /> Support Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-400 mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500" /> Corporate Office Address
              </label>
              <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1 flex items-center gap-1">
                <Percent className="w-3.5 h-3.5 text-amber-500" /> Default GST Tax Rate (%)
              </label>
              <input
                type="text"
                value={gstRate}
                onChange={e => setGstRate(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-950 px-6 py-3 rounded-xl text-sm font-bold transition shadow-lg shadow-amber-500/10"
          >
            <Save className="w-4 h-4" /> Save System Settings
          </button>
        </div>
      </form>
    </div>
  );
};
