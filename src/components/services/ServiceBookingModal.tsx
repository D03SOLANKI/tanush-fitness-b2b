import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ServiceBookingModal: React.FC = () => {
  const { isBookingModalOpen, bookingService, closeBookingModal, showToast } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    gymName: '',
    contactName: '',
    email: '',
    phone: '',
    date: '',
    notes: ''
  });

  if (!isBookingModalOpen || !bookingService) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Service Request Dispatched', `Our concierge will confirm scheduling for ${bookingService.name}.`, 'info');
    setTimeout(() => {
      setSubmitted(false);
      closeBookingModal();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBookingModal}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-lg bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-auto text-slate-900"
        >
          <button
            onClick={closeBookingModal}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all shadow-sm"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-heading uppercase">
                Booking Request Dispatched!
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed font-normal">
                Your service contract request for <span className="text-blue-600 font-bold">{bookingService.name}</span> has been confirmed. A concierge account manager will call <span className="text-slate-900 font-bold">{formData.phone}</span> shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <img
                  src={bookingService.image}
                  alt={bookingService.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shrink-0 shadow-sm"
                />
                <div>
                  <div className="text-[10px] font-bold uppercase text-blue-600 font-mono tracking-wider">
                    {bookingService.badge}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 leading-tight font-heading uppercase">
                    {bookingService.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium font-mono">{bookingService.pricing} ({bookingService.pricingPeriod})</div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-mono">
                    Gym / Facility Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vanguard Club Downtown"
                    value={formData.gymName}
                    onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-mono">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-mono">
                      Direct Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-mono">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@vanguard.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-mono">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase font-mono">
                    Service Scope & Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Provide facility square footage or issue specifics..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-md transition-all mt-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Service Inquiry Dispatch</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
