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
      showToast('Only Gym Owners can submit commercial & residential equipment RFQs.', 'error');
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
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md flex justify-end">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 280 }}
          className="w-full max-w-lg bg-[#0D1118] h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-white/10 "
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 bg-[#090C10] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D26539]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-satoshi text-lg font-bold uppercase text-white leading-tight">
                    Project RFQ Basket
                  </h2>
                  <span className="px-2 py-0.5 rounded-full bg-[#D26539]/10 text-[#D26539] font-mono text-[9px] font-bold uppercase border border-[#D26539]/30">
                    B2B DIRECT
                  </span>
                </div>
                <span className="text-[11px] text-[#A8A090] font-mono block mt-0.5">
                  Itemized 18% GST Quotation & Specification Desk
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsEnquiryCartOpen(false);
                setIsSubmitted(false);
              }}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A8A090] hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {isSubmitted ? (
              /* RFQ Summary Confirmation */
              <div className="p-6 rounded-none bg-[#090C10] border border-white/10 text-white space-y-5 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#D26539] uppercase tracking-widest block mb-1">
                    OFFICIAL RFQ SPECIFICATION DISPATCHED
                  </span>
                  <h3 className="font-satoshi text-2xl font-bold uppercase">
                    Quotation Logged
                  </h3>
                  <div className="text-xs font-mono text-[#A8A090] mt-1">
                    Reference Code: <span className="text-[#D26539] font-bold">{rfqRef}</span>
                  </div>
                </div>

                <div className="p-4 bg-[#0D1118] rounded-xl border border-white/5 text-left space-y-2 text-xs font-mono text-[#A8A090]">
                  <div><strong>Facility:</strong> {formState.companyGymName}</div>
                  <div><strong>Contact Phone:</strong> {formState.mobile}</div>
                  <div><strong>Dispatch City:</strong> {formState.city || 'Pan-India'}</div>
                  <div><strong>Total Machinery Units:</strong> {totalQuantity} Units</div>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-left text-xs text-[#A8A090] leading-relaxed flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#D26539] shrink-0 mt-0.5" />
                  <span>
                    Our engineering desk is preparing your itemized PDF quote with structural frame certifications. You will receive it via WhatsApp and Email within 2 hours.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsEnquiryCartOpen(false);
                    setIsSubmitted(false);
                  }}
                  className="btn-vault w-full py-3 text-xs uppercase"
                >
                  Return to Equipment Sanctuary
                </button>
              </div>
            ) : (
              <>
                {/* Selected Cart Items */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#A8A090] uppercase">
                    <span>Selected Machinery ({enquiryCart.length})</span>
                    <span className="text-[#D26539] font-bold">Total: {totalQuantity} Units</span>
                  </div>

                  {enquiryCart.length === 0 ? (
                    <div className="py-12 text-center text-xs text-[#6B6358] border border-dashed border-white/10 rounded-none bg-[#090C10] font-mono">
                      Your RFQ Project basket is empty. Browse the sanctuary catalog to add equipment.
                    </div>
                  ) : (
                    <div className="divide-y divide-white/5 border border-white/10 rounded-none overflow-hidden bg-[#090C10]">
                      {enquiryCart.map(item => (
                        <div key={item.product.id} className="p-4 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.product.image || 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=300&q=80'}
                              alt={item.product.name}
                              className="w-12 h-12 object-cover rounded-xl border border-white/10"
                            />
                            <div>
                              <div className="text-xs font-bold text-white font-satoshi uppercase line-clamp-1">
                                {item.product.name}
                              </div>
                              <div className="text-[10px] text-[#D26539] font-mono">
                                {item.product.brand} · 11-Gauge
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 font-mono">
                            <div className="flex items-center bg-[#0D1118] rounded-lg border border-white/10 p-0.5">
                              <button
                                type="button"
                                onClick={() => updateEnquiryCartQuantity(item.product.id, item.quantity - 1)}
                                className="px-2 text-xs font-bold text-[#A8A090] hover:text-white"
                              >
                                -
                              </button>
                              <span className="w-6 text-center text-xs font-bold text-white">{item.quantity}</span>
                              <button
                                type="button"
                                onClick={() => updateEnquiryCartQuantity(item.product.id, item.quantity + 1)}
                                className="px-2 text-xs font-bold text-[#A8A090] hover:text-white"
                              >
                                +
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFromEnquiryCart(item.product.id)}
                              className="text-[#6B6358] hover:text-rose-400 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Structured Form */}
                {enquiryCart.length > 0 && (
                  <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-white/10">
                    <div className="text-xs font-mono text-[#D26539] uppercase tracking-widest">
                      Procurement Officer & Delivery Information
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Sameer Kapoor"
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Facility Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Iron Sanctuary Club"
                          value={formState.companyGymName}
                          onChange={e => setFormState({ ...formState, companyGymName: e.target.value })}
                          className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">WhatsApp Mobile</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formState.mobile}
                          onChange={e => setFormState({ ...formState, mobile: e.target.value })}
                          className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Delivery City</label>
                        <input
                          type="text"
                          placeholder="Delhi / Bengaluru"
                          value={formState.city}
                          onChange={e => setFormState({ ...formState, city: e.target.value })}
                          className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">GSTIN (18% ITC)</label>
                        <input
                          type="text"
                          placeholder="24ABCDE1234F1Z5"
                          value={formState.gstin}
                          onChange={e => setFormState({ ...formState, gstin: e.target.value })}
                          className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539] uppercase"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-vault w-full py-3.5 text-xs uppercase tracking-wider mt-2 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Generating Official RFQ...' : 'Dispatch Official RFQ Quotation'}</span>
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
