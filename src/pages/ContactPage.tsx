import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PhoneCall, Mail, MapPin, Send, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactPage: React.FC = () => {
  const { submitContactEnquiry } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    gymName: '',
    email: '',
    mobile: '',
    serviceType: 'equipment',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert('Please fill in your Name and Mobile Number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      submitContactEnquiry({
        name: formData.name,
        gymName: formData.gymName,
        email: formData.email,
        mobile: formData.mobile,
        message: `[Interest: ${formData.serviceType}] ${formData.message}`,
      });

      setIsSubmitting(false);
      setFormData({
        name: '',
        gymName: '',
        email: '',
        mobile: '',
        serviceType: 'equipment',
        message: '',
      });
    }, 500);
  };

  return (
    <main className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase mb-3">
            <PhoneCall className="w-4 h-4 text-blue-600" />
            <span>24/7 B2B SUPPORT & HELPLINE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading uppercase">
            Contact Tanush Fitness
          </h1>
          <p className="mt-3 text-sm text-slate-600 font-normal leading-relaxed">
            Have a question about equipment wholesale quotations, trainer recruitment, or gym setup consultation? Our commercial team responds within 2 hours.
          </p>
        </div>

        {/* Quick Action Contact Strip Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <a
            href="https://wa.me/919067800048?text=Hello%20Tanush%20Fitness,%20I%20want%20a%20quotation%20for%20my%20gym."
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg bg-blue-800 text-white shadow-sm hover-lift flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-md bg-blue-700/80 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 fill-white" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase font-mono tracking-wider opacity-90 text-blue-200">Instant WhatsApp</div>
              <div className="text-base font-bold font-heading uppercase group-hover:translate-x-0.5 transition-transform">
                Chat on WhatsApp →
              </div>
            </div>
          </a>

          <a
            href="tel:+919067800048"
            className="p-6 rounded-lg bg-slate-950 text-white shadow-sm hover-lift flex items-center gap-4 group border border-slate-800"
          >
            <div className="w-12 h-12 rounded-md bg-slate-800 flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase font-mono tracking-wider opacity-90 text-slate-400">Direct Hotline</div>
              <div className="text-base font-bold font-heading uppercase group-hover:translate-x-0.5 transition-transform">
                Call +91 90678 00048 →
              </div>
            </div>
          </a>

          <a
            href="mailto:Info@tanushfitness.com"
            className="p-6 rounded-lg bg-slate-900 text-white shadow-sm hover-lift flex items-center gap-4 group border border-slate-800"
          >
            <div className="w-12 h-12 rounded-md bg-slate-800 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase font-mono tracking-wider opacity-90 text-slate-400">Email Sales Desk</div>
              <div className="text-base font-bold font-heading uppercase group-hover:translate-x-0.5 transition-transform">
                Email Quotation Req →
              </div>
            </div>
          </a>
        </div>

        {/* Main Grid: Form & Location */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover-lift">
            <h2 className="text-2xl font-black text-slate-900 font-heading uppercase mb-2">
              Send Direct Message
            </h2>
            <p className="text-xs text-slate-500 font-mono mb-6">
              Fill in your gym requirement and our commercial consultant will reach out within 2 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singhania"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                    Company / Gym Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Health Club"
                    value={formData.gymName}
                    onChange={e => setFormData({ ...formData, gymName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 90678 00048"
                    value={formData.mobile}
                    onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="vikram@apex.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                  Primary Interest
                </label>
                <select
                  value={formData.serviceType}
                  onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-blue-600 font-mono"
                >
                  <option value="equipment">Commercial Gym Equipment (Bulk Purchase)</option>
                  <option value="manpower">Manpower & Trainer Hiring</option>
                  <option value="services">Turnkey Business & Marketing Services</option>
                  <option value="general">General Corporate Inquiry</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                  Your Requirements Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your equipment quotation, hiring needs, or facility consultation..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Message...' : 'Submit Contact Message'}</span>
              </button>
            </form>
          </div>

          {/* Office Address & Google Maps Embed Mockup (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover-lift space-y-5">
              <h3 className="text-lg font-black text-slate-900 font-heading uppercase flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Corporate Headquarters</span>
              </h3>

              <div className="space-y-4 text-xs text-slate-600 font-mono">
                <div>
                  <strong className="text-slate-900 font-black block uppercase text-[11px] mb-0.5">Address:</strong>
                  <p className="leading-relaxed text-slate-700 font-sans text-xs">
                    The Landmark Complex, A-301-304, Near Podar International School, Urjanagar 1, Kudasan, Gandhinagar, Gujarat 382419
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 font-black block uppercase text-[11px] mb-0.5">Working Hours:</strong>
                  Monday – Saturday: 9:00 AM – 8:00 PM IST
                </div>
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <a href="tel:+919067800048" className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      +91 90678 00048
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <a href="mailto:Info@tanushfitness.com" className="font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                      Info@tanushfitness.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Mockup */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-stripe bg-slate-900 text-white relative aspect-video flex items-center justify-center text-center p-6">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Map Background"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 space-y-2">
                <MapPin className="w-8 h-8 text-blue-500 mx-auto animate-bounce" />
                <div className="text-sm font-black font-heading uppercase">The Landmark Complex</div>
                <div className="text-[10px] font-mono text-slate-300">Kudasan, Gandhinagar, Gujarat 382419</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
