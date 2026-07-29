import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Trash2, Plus, Minus, Send, CheckCircle2, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const EnquiryCartDrawer: React.FC = () => {
  const {
    enquiryCart,
    isEnquiryCartOpen,
    setIsEnquiryCartOpen,
    updateEnquiryCartQuantity,
    removeFromEnquiryCart,
    submitEquipmentEnquiry,
  } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    companyGymName: '',
    mobile: '',
    email: '',
    city: '',
    requirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.companyGymName) {
      alert('Please fill in your Name, Gym Name, and Mobile Number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      submitEquipmentEnquiry({
        name: formData.name,
        companyGymName: formData.companyGymName,
        mobile: formData.mobile,
        email: formData.email,
        city: formData.city,
        requirements: formData.requirements,
        selectedProducts: enquiryCart.map(item => ({
          id: item.product.id,
          name: item.product.name,
          quantity: item.quantity,
        })),
      });

      setIsSubmitting(false);
      setFormData({
        name: '',
        companyGymName: '',
        mobile: '',
        email: '',
        city: '',
        requirements: '',
      });
    }, 600);
  };

  if (!isEnquiryCartOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsEnquiryCartOpen(false)}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-lg bg-white shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="w-5 h-5 text-blue-400" />
                  <h2 className="text-lg font-black font-heading uppercase tracking-wide">
                    Equipment Quotation Cart
                  </h2>
                </div>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  No online payment. Formal sales quotation dispatched via Email/WhatsApp.
                </p>
              </div>
              <button
                onClick={() => setIsEnquiryCartOpen(false)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {enquiryCart.length === 0 ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
                    <Dumbbell className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-black text-slate-900 uppercase font-heading">
                    Your Enquiry Cart is Empty
                  </h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Browse our commercial gym equipment catalog and click "Add to Enquiry Cart" to request wholesale pricing.
                  </p>
                </div>
              ) : (
                <>
                  {/* Selected Equipment Items */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-slate-500 uppercase font-mono tracking-wider">
                      Selected Equipment ({enquiryCart.length} Items)
                    </h3>

                    {enquiryCart.map(item => (
                      <div
                        key={item.product.id}
                        className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-14 h-14 object-cover rounded-xl border border-slate-200"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-bold uppercase text-blue-600 font-mono">
                            {item.product.brand}
                          </div>
                          <h4 className="text-xs font-black text-slate-900 truncate">
                            {item.product.name}
                          </h4>
                          <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                            RFQ Item • MOQ: {item.product.minOrderQty || 1}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg p-1">
                          <button
                            onClick={() =>
                              updateEnquiryCartQuantity(item.product.id, item.quantity - 1)
                            }
                            className="p-1 text-slate-500 hover:text-slate-900"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-black font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateEnquiryCartQuantity(item.product.id, item.quantity + 1)
                            }
                            className="p-1 text-slate-500 hover:text-slate-900"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromEnquiryCart(item.product.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* 7-Field Equipment Enquiry Form */}
                  <form onSubmit={handleSubmit} className="pt-6 border-t border-slate-200 space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <h3 className="text-xs font-black text-slate-900 uppercase font-mono tracking-wider">
                        Business & Gym Details for Quotation
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikram Singhania"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                          Company / Gym Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Apex Fitness Club"
                          value={formData.companyGymName}
                          onChange={e => setFormData({ ...formData, companyGymName: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                          Mobile Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.mobile}
                          onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                          Business Email
                        </label>
                        <input
                          type="email"
                          placeholder="vikram@apexfitness.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mumbai, Maharashtra"
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                        Special Requirements / Customization Notes
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Specify color preferences, installation timeline, or bulk freight requests..."
                        value={formData.requirements}
                        onChange={e => setFormData({ ...formData, requirements: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Submitting Request...' : 'Click Request Quotation'}</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
