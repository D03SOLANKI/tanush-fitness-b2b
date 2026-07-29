import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const RegisterGymModal: React.FC = () => {
  const { isRegisterGymModalOpen, setIsRegisterGymModalOpen, showToast } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    gymName: '',
    ownerName: '',
    workEmail: '',
    phone: '',
    locationCount: '1-3 Locations',
    accountType: 'Commercial Gym Owner'
  });

  if (!isRegisterGymModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('B2B Account Registration Submitted', 'A Tanush Commercial Representative will verify your FEIN within 24 hours.', 'info');
    setTimeout(() => {
      setSubmitted(false);
      setIsRegisterGymModalOpen(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsRegisterGymModalOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-xl bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-auto text-slate-900"
        >
          <button
            onClick={() => setIsRegisterGymModalOpen(false)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all shadow-sm"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-heading uppercase">
                Registration Submitted!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                Thank you, <span className="text-slate-900 font-bold">{formData.ownerName}</span>. Your facility registration for <span className="text-blue-600 font-bold">{formData.gymName}</span> is being processed. Access credentials will be sent to <span className="text-slate-900 font-bold">{formData.workEmail}</span>.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-black text-blue-600 uppercase font-mono tracking-wider mb-1">
                  <Building2 className="w-4 h-4" /> B2B Buyer Onboarding
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-heading uppercase">
                  Register Your Gym Facility
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-normal">
                  Unlock wholesale tier pricing, equipment leasing lines, and dedicated freight concierge support.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-mono">
                      Facility / Gym Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Performance Gym"
                      value={formData.gymName}
                      onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-mono">
                      Owner / Director Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-mono">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="owner@gymname.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-mono">
                      Direct Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-mono">
                      Location Count
                    </label>
                    <select
                      value={formData.locationCount}
                      onChange={(e) => setFormData({ ...formData, locationCount: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    >
                      <option>1 Location</option>
                      <option>2-5 Locations</option>
                      <option>6-15 Locations</option>
                      <option>16+ Franchise Network</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-mono">
                      Account Type
                    </label>
                    <select
                      value={formData.accountType}
                      onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    >
                      <option>Commercial Gym Owner</option>
                      <option>Equipment Manufacturer / Vendor</option>
                      <option>Certified Service Provider</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(59,130,246,0.3)] transition-all mt-4"
                >
                  <span>Submit Commercial Verification</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
