import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Trash2, Send, Dumbbell, CheckCircle2, Lock, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const EnquiryCartDrawer: React.FC = () => {
  const {
    enquiryCart,
    isEnquiryCartOpen,
    setIsEnquiryCartOpen,
    removeFromEnquiryCart,
    updateEnquiryCartQuantity,
    submitEquipmentEnquiry,
    currentUser,
    openAuthModal,
    showToast,
  } = useApp();

  const [formState, setFormState] = useState({
    name: '',
    companyGymName: '',
    mobile: '',
    email: '',
    city: '',
    requirements: '',
    timeframe: 'Immediate (Within 15 days)',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqRef, setRfqRef] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Auto-fill form when user logs in
  useEffect(() => {
    if (currentUser) {
      setFormState(prev => ({
        ...prev,
        name: currentUser.name || prev.name,
        email: currentUser.email || prev.email,
        mobile: currentUser.mobile || prev.mobile,
        companyGymName: currentUser.gymOwnerProfile?.companyName || prev.companyGymName,
        city: currentUser.city || currentUser.gymOwnerProfile?.city || prev.city,
      }));
    }
  }, [currentUser]);

  const totalQuantity = enquiryCart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Auth Gate Check
    if (!currentUser) {
      openAuthModal(
        'GYM_OWNER',
        'Login or Register as a Gym Owner to request official B2B RFQ quotations'
      );
      return;
    }

    // 2. Role Gate Check
    if (currentUser.role !== 'GYM_OWNER') {
      showToast('Only Gym Owners can submit equipment enquiries.', 'error');
      return;
    }

    if (!formState.name || !formState.mobile || !formState.companyGymName) {
      showToast('Please fill in your Full Name, Gym/Company Name, and Mobile Number.', 'error');
      return;
    }

    if (enquiryCart.length === 0) {
      showToast('Your Enquiry Cart is empty. Please add products first.', 'error');
      return;
    }

    setSubmitting(true);
    const newRfqRef = `RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setRfqRef(newRfqRef);

    const success = await submitEquipmentEnquiry({
      rfqReference: newRfqRef,
      name: formState.name,
      companyGymName: formState.companyGymName,
      mobile: formState.mobile,
      email: formState.email,
      city: formState.city,
      requirements: formState.requirements,
      timeframe: formState.timeframe,
    });

    setSubmitting(false);
    if (success) {
      setIsSubmitted(true);
    }
  };

  if (!isEnquiryCartOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm flex justify-end font-mono">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-black font-heading uppercase text-white leading-none">
                  Equipment Enquiry Cart
                </h2>
                <span className="text-[10px] text-blue-400 font-bold block mt-1">
                  Zero Online Prices • Direct B2B Quotation RFQ
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsEnquiryCartOpen(false);
                setIsSubmitted(false);
              }}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {isSubmitted ? (
              /* RFQ Summary Card Confirmation */
              <div className="p-6 rounded-3xl bg-blue-50 border border-blue-200 text-slate-900 space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase font-mono">
                    RFQ SUMMARY GENERATED & SAVED IN SUPABASE
                  </span>
                  <h3 className="text-xl font-black font-heading uppercase mt-0.5">
                    Quotation Request Sent!
                  </h3>
                  <div className="text-xs font-mono font-bold text-slate-600 mt-1">
                    Reference ID: <span className="text-blue-700 font-black">{rfqRef}</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-blue-100 text-left space-y-2 text-xs">
                  <div><strong>Gym Name:</strong> {formState.companyGymName}</div>
                  <div><strong>Contact Mobile:</strong> {formState.mobile}</div>
                  <div><strong>City:</strong> {formState.city || 'N/A'}</div>
                  <div><strong>Timeframe:</strong> {formState.timeframe}</div>
                </div>

                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  Our commercial sales team is reviewing your selected equipment specifications and will dispatch an official PDF quotation via WhatsApp & Email within 2 hours.
                </p>

                <button
                  onClick={() => {
                    setIsEnquiryCartOpen(false);
                    setIsSubmitted(false);
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 text-white font-black text-xs uppercase"
                >
                  Close & Continue Browsing
                </button>
              </div>
            ) : (
              <>
                {/* Selected Cart Items */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-600 mb-3">
                    <span>Selected Commercial Gear ({enquiryCart.length})</span>
                    <span>Total Units: {totalQuantity}</span>
                  </div>

                  {enquiryCart.length === 0 ? (
                    <div className="py-12 text-center text-xs text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
                      Your Enquiry Cart is empty. Select equipment items from the catalog.
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
                      {enquiryCart.map(item => (
                        <div key={item.product.id} className="p-3 bg-white flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-12 h-12 object-cover rounded-xl border border-slate-200"
                            />
                            <div>
                              <div className="text-xs font-black text-slate-900 font-heading uppercase line-clamp-1">
                                {item.product.name}
                              </div>
                              <div className="text-[10px] text-blue-600 font-bold">{item.product.brand}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            {/* Quantity Controls */}
                            <div className="flex items-center bg-slate-100 rounded-lg border border-slate-200 p-0.5">
                              <button
                                onClick={() => updateEnquiryCartQuantity(item.product.id, item.quantity - 1)}
                                className="px-2 text-xs font-bold text-slate-600"
                              >
                                -
                              </button>
                              <span className="w-6 text-center text-xs font-black">{item.quantity}</span>
                              <button
                                onClick={() => updateEnquiryCartQuantity(item.product.id, item.quantity + 1)}
                                className="px-2 text-xs font-bold text-slate-600"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromEnquiryCart(item.product.id)}
                              className="text-slate-400 hover:text-rose-600 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Authentication Banner if Guest */}
                {!currentUser && enquiryCart.length > 0 && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                    <Lock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold uppercase text-[11px]">Gym Owner Login Required</div>
                      <div className="text-[11px] text-amber-800 mt-0.5 leading-snug">
                        You can build your cart freely! Clicking "Request Quotation" below will prompt login/registration as a Gym Owner to process your B2B quotation.
                      </div>
                    </div>
                  </div>
                )}

                {/* Role Warning if Logged in as Job Seeker */}
                {currentUser && currentUser.role !== 'GYM_OWNER' && enquiryCart.length > 0 && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold uppercase text-[11px]">Job Seeker Account Detected</div>
                      <div className="text-[11px] text-rose-800 mt-0.5 leading-snug">
                        Only Gym Owners can submit commercial equipment RFQ enquiries. Please log in with a Gym Owner account.
                      </div>
                    </div>
                  </div>
                )}

                {/* Structured Business Enquiry Form */}
                {enquiryCart.length > 0 && (
                  <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-200">
                    <div className="text-xs font-black text-slate-900 font-heading uppercase flex items-center justify-between">
                      <span>Fill Business Details For Quotation</span>
                      {currentUser && (
                        <span className="text-[10px] text-blue-600 font-bold font-mono">
                          Logged in: {currentUser.name || currentUser.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Singhania"
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">
                          Gym / Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Apex Fitness"
                          value={formState.companyGymName}
                          onChange={e => setFormState({ ...formState, companyGymName: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">
                          Mobile (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formState.mobile}
                          onChange={e => setFormState({ ...formState, mobile: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">
                          Business Email
                        </label>
                        <input
                          type="email"
                          placeholder="vikram@apex.com"
                          value={formState.email}
                          onChange={e => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">
                          Facility City
                        </label>
                        <input
                          type="text"
                          placeholder="Gurugram / Mumbai"
                          value={formState.city}
                          onChange={e => setFormState({ ...formState, city: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">
                        Installation Timeframe
                      </label>
                      <select
                        value={formState.timeframe}
                        onChange={e => setFormState({ ...formState, timeframe: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-bold focus:outline-none focus:border-blue-600"
                      >
                        <option value="Immediate (Within 15 days)">Immediate (Within 15 days)</option>
                        <option value="1 to 2 Months">1 to 2 Months</option>
                        <option value="3+ Months (Planning Stage)">3+ Months (Planning Stage)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">
                        Special Specs / Layout Requirements
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Mention color preferences, custom steel plate thickness, or flooring sq.ft..."
                        value={formState.requirements}
                        onChange={e => setFormState({ ...formState, requirements: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Submitting to Backend...' : 'Request Official RFQ Quotation'}</span>
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
