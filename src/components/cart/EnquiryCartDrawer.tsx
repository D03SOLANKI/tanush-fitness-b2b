import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Trash2,
  Send,
  Dumbbell,
  CheckCircle2,
  Lock,
  AlertCircle,
  FileText,
  ShieldCheck,
  Building2,
  PhoneCall,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
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
    gstin: '',
    mobile: '',
    email: '',
    city: '',
    facilitySize: '3,000 - 6,000 sq.ft',
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
      showToast('Only Gym Owners can submit commercial equipment RFQs.', 'error');
      return;
    }

    if (!formState.name || !formState.mobile || !formState.companyGymName) {
      showToast('Please fill in your Full Name, Gym/Company Name, and Mobile Number.', 'error');
      return;
    }

    if (enquiryCart.length === 0) {
      showToast('Your RFQ Cart is empty. Please add equipment items first.', 'error');
      return;
    }

    setSubmitting(true);
    const newRfqRef = `RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setRfqRef(newRfqRef);

    const fullRequirements = [
      formState.requirements,
      formState.gstin ? `GSTIN: ${formState.gstin}` : '',
      `Facility Size: ${formState.facilitySize}`
    ].filter(Boolean).join(' | ');

    const success = await submitEquipmentEnquiry({
      rfqReference: newRfqRef,
      name: formState.name,
      companyGymName: formState.companyGymName,
      mobile: formState.mobile,
      email: formState.email,
      city: formState.city,
      requirements: fullRequirements,
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
      <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm flex justify-end">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-slate-200"
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-800 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-extrabold font-heading uppercase text-white leading-tight">
                    Project RFQ Basket
                  </h2>
                  <span className="px-1.5 py-0.2 rounded bg-blue-900/80 text-blue-300 font-mono text-[9px] font-bold uppercase border border-blue-700">
                    B2B DIRECT
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
                  Itemized GST Quotation & Logistics Calculator
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsEnquiryCartOpen(false);
                setIsSubmitted(false);
              }}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {isSubmitted ? (
              /* RFQ Summary Confirmation */
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                
                <div>
                  <span className="text-[10px] font-bold text-blue-700 uppercase font-mono tracking-wider">
                    OFFICIAL RFQ SPECIFICATION DISPATCHED
                  </span>
                  <h3 className="text-xl font-extrabold font-heading uppercase mt-1">
                    Quotation Request Logged!
                  </h3>
                  <div className="text-xs font-mono font-bold text-slate-600 mt-1">
                    Reference ID: <span className="text-slate-900 font-extrabold">{rfqRef}</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border border-slate-200 text-left space-y-2 text-xs font-mono">
                  <div><strong>Facility:</strong> {formState.companyGymName}</div>
                  <div><strong>Contact Phone:</strong> {formState.mobile}</div>
                  <div><strong>Dispatch City:</strong> {formState.city || 'Pan-India'}</div>
                  <div><strong>Timeframe:</strong> {formState.timeframe}</div>
                  <div><strong>Total Equipment Units:</strong> {totalQuantity} Units</div>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-left text-xs text-blue-900 leading-relaxed flex items-start gap-2">
                  <Clock className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>
                    Our commercial engineering team is reviewing your selected load capacities and will dispatch an official PDF quotation via WhatsApp & Email within 2 hours.
                  </span>
                </div>

                <button
                  onClick={() => {
                    setIsEnquiryCartOpen(false);
                    setIsSubmitted(false);
                  }}
                  className="w-full py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase font-mono transition-colors shadow-sm"
                >
                  Return to Catalog
                </button>
              </div>
            ) : (
              <>
                {/* Selected Cart Items */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-700 mb-2 font-mono">
                    <span>Selected Equipment ({enquiryCart.length})</span>
                    <span className="text-blue-700">Total Units: {totalQuantity}</span>
                  </div>

                  {enquiryCart.length === 0 ? (
                    <div className="py-12 text-center text-xs text-slate-500 border border-dashed border-slate-300 rounded-xl bg-slate-50 font-mono">
                      Your RFQ Project basket is empty. Browse the catalog to add commercial machinery.
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                      {enquiryCart.map(item => (
                        <div key={item.product.id} className="p-3 bg-white flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-12 h-12 object-cover rounded-lg border border-slate-200"
                            />
                            <div>
                              <div className="text-xs font-bold text-slate-900 font-heading uppercase line-clamp-1">
                                {item.product.name}
                              </div>
                              <div className="text-[10px] text-blue-700 font-mono font-semibold">
                                {item.product.brand} · 11-Gauge
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5 font-mono">
                            {/* Quantity Controls */}
                            <div className="flex items-center bg-slate-100 rounded-lg border border-slate-200 p-0.5">
                              <button
                                onClick={() => updateEnquiryCartQuantity(item.product.id, item.quantity - 1)}
                                className="px-2 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded"
                              >
                                -
                              </button>
                              <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
                              <button
                                onClick={() => updateEnquiryCartQuantity(item.product.id, item.quantity + 1)}
                                className="px-2 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromEnquiryCart(item.product.id)}
                              className="text-slate-400 hover:text-rose-600 p-1"
                              title="Remove item"
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
                  <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                    <Lock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold uppercase text-[11px] font-mono">Commercial Registration Required</div>
                      <div className="text-[11px] text-amber-800 mt-0.5 leading-snug">
                        You can build your RFQ package freely. Clicking "Request Official Quotation" below will authenticate your Gym Owner credentials.
                      </div>
                    </div>
                  </div>
                )}

                {/* Role Warning if Logged in as Job Seeker */}
                {currentUser && currentUser.role !== 'GYM_OWNER' && enquiryCart.length > 0 && (
                  <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold uppercase text-[11px] font-mono">Gym Owner Account Required</div>
                      <div className="text-[11px] text-rose-800 mt-0.5 leading-snug">
                        Only registered commercial gym owners can request machinery quotations. Please switch to a Gym Owner profile.
                      </div>
                    </div>
                  </div>
                )}

                {/* Structured Business Procurement Form */}
                {enquiryCart.length > 0 && (
                  <form onSubmit={handleSubmit} className="space-y-3.5 pt-4 border-t border-slate-200">
                    <div className="text-xs font-bold text-slate-900 font-heading uppercase flex items-center justify-between">
                      <span>Procurement & Facility Details</span>
                      {currentUser && (
                        <span className="text-[10px] text-blue-700 font-mono">
                          Verified: {currentUser.name || currentUser.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-700 uppercase font-mono block mb-1">
                        Procurement Officer / Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Singhania"
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold text-slate-700 uppercase font-mono block mb-1">
                          Gym / Facility Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Apex Health Club"
                          value={formState.companyGymName}
                          onChange={e => setFormState({ ...formState, companyGymName: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-mono"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-slate-700 uppercase font-mono block mb-1">
                          WhatsApp Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 90678 00048"
                          value={formState.mobile}
                          onChange={e => setFormState({ ...formState, mobile: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold text-slate-700 uppercase font-mono block mb-1">
                          Official Email
                        </label>
                        <input
                          type="email"
                          placeholder="procurement@apex.com"
                          value={formState.email}
                          onChange={e => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-mono"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-slate-700 uppercase font-mono block mb-1">
                          Delivery City / Pincode
                        </label>
                        <input
                          type="text"
                          placeholder="Gurugram / 122001"
                          value={formState.city}
                          onChange={e => setFormState({ ...formState, city: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold text-slate-700 uppercase font-mono block mb-1">
                          GSTIN (For 18% ITC)
                        </label>
                        <input
                          type="text"
                          placeholder="24ABCDE1234F1Z5"
                          value={formState.gstin}
                          onChange={e => setFormState({ ...formState, gstin: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-mono uppercase"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-slate-700 uppercase font-mono block mb-1">
                          Facility Area (Sq.Ft)
                        </label>
                        <select
                          value={formState.facilitySize}
                          onChange={e => setFormState({ ...formState, facilitySize: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 font-bold focus:outline-none focus:border-blue-600 font-mono"
                        >
                          <option value="Under 2,000 sq.ft">Under 2,000 sq.ft</option>
                          <option value="2,000 - 5,000 sq.ft">2,000 - 5,000 sq.ft</option>
                          <option value="5,000 - 10,000+ sq.ft">5,000 - 10,000+ sq.ft</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-700 uppercase font-mono block mb-1">
                        Installation Timeframe
                      </label>
                      <select
                        value={formState.timeframe}
                        onChange={e => setFormState({ ...formState, timeframe: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 font-bold focus:outline-none focus:border-blue-600 font-mono"
                      >
                        <option value="Immediate (Within 15 days)">Immediate (Within 15 days)</option>
                        <option value="1 to 2 Months">1 to 2 Months</option>
                        <option value="3+ Months (Planning Stage)">3+ Months (Planning Stage)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-700 uppercase font-mono block mb-1">
                        Custom Powder Coating / Layout Notes
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Mention color preferences (Matte Black, Gunmetal), custom laser logos, or flooring specs..."
                        value={formState.requirements}
                        onChange={e => setFormState({ ...formState, requirements: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-mono"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-sm transition-colors disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-blue-200" />
                      <span>{submitting ? 'Generating Official RFQ...' : 'Submit Official RFQ & Dispatch Quotation'}</span>
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
