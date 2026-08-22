import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, ShieldCheck, Sparkles, Building2, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { MarqueeStrip } from '../components/common/MarqueeStrip';

export const ContactPage: React.FC = () => {
  const { submitContactEnquiry, showToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    gymName: '',
    email: '',
    mobile: '',
    serviceType: 'equipment',
    city: '',
    squareFootage: '5,000 - 10,000 sq.ft',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      showToast('Please fill in your Name and Mobile Number.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      submitContactEnquiry({
        name: formData.name,
        gymName: formData.gymName || 'Commercial Facility',
        email: formData.email,
        mobile: formData.mobile,
        message: `[Interest: ${formData.serviceType} | Space: ${formData.squareFootage} | City: ${formData.city}] ${formData.message}`,
      });

      showToast('Executive consultation request received! Our Outfitting Director will contact you within 2 business hours.', 'success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        gymName: '',
        email: '',
        mobile: '',
        serviceType: 'equipment',
        city: '',
        squareFootage: '5,000 - 10,000 sq.ft',
        message: '',
      });
    }, 500);
  };

  return (
    <main className="pt-24 pb-20 bg-[#090C10] min-h-screen text-[#E2E8F0] ">
      <SEO
        title="VIP Commercial Outfitting Desk | Tanush Fitness"
        description="Direct manufacturer consultation, 3D CAD space proposals, wholesale machinery quotations, and flagship showroom visits."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D26539]/30 text-xs font-mono text-[#D26539] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECT EXECUTIVE HELPLINE // 24/7 B2B PROCUREMENT</span>
            </div>

            <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
              OUTFITTING <span className="text-[#D26539]">DESK</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-sans leading-relaxed">
              Connect directly with our Commercial Outfitting Directors for official wholesale machinery quotes, 3D CAD facility blueprints, and flagship showroom private appointments.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919067800048"
              className="btn-vault flex items-center gap-2 text-xs py-2.5 px-5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 90678 00048</span>
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeStrip theme="gold" speed="slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Contact Action Chips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a
            href="https://wa.me/919067800048?text=Hello%20Tanush%20Fitness,%20I%20want%20a%20commercial%20outfitting%20quotation."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0D1118] border border-white/10 p-6 rounded-2xl luxury-card flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">INSTANT WHATSAPP</span>
              <span className="font-syne text-base font-bold text-white uppercase group-hover:text-[#D26539] transition">
                Chat With Factory Desk →
              </span>
            </div>
          </a>

          <a
            href="tel:+919067800048"
            className="bg-[#0D1118] border border-white/10 p-6 rounded-2xl luxury-card flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#D26539]/10 border border-[#D26539]/20 text-[#D26539] flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#D26539] uppercase tracking-widest block">DIRECT HOTLINE</span>
              <span className="font-syne text-base font-bold text-white uppercase group-hover:text-[#D26539] transition">
                +91 90678 00048 →
              </span>
            </div>
          </a>

          <a
            href="mailto:procurement@tanushfitness.com"
            className="bg-[#0D1118] border border-white/10 p-6 rounded-2xl luxury-card flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">OFFICIAL INVOICING</span>
              <span className="font-syne text-base font-bold text-white uppercase group-hover:text-[#D26539] transition">
                procurement@tanushfitness.com →
              </span>
            </div>
          </a>
        </div>

        {/* Form and Showrooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main RFQ Form */}
          <div className="lg:col-span-7 bg-[#0D1118] border border-white/10 rounded-3xl p-8 sm:p-10  space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-[#D26539] uppercase tracking-widest block mb-1">
                256-BIT ENCRYPTED PROCUREMENT PORTAL
              </span>
              <h2 className="font-syne text-2xl font-bold text-white uppercase">
                Commercial Outfitting Intake
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Sameer Kapoor"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D26539]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Mobile Hotline</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.mobile}
                    onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D26539]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Gym / Project Name</label>
                  <input
                    type="text"
                    placeholder="Vault Club & Spa"
                    value={formData.gymName}
                    onChange={e => setFormData({ ...formData, gymName: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D26539]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Target City</label>
                  <input
                    type="text"
                    placeholder="Delhi / Bengaluru / Hyderabad"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D26539]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Procurement Scope</label>
                  <select
                    value={formData.serviceType}
                    onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D26539] uppercase font-mono"
                  >
                    <option value="equipment">Commercial Machinery Package</option>
                    <option value="turnkey">Full 360° Turnkey Outfitting</option>
                    <option value="manpower">Master Staffing & Coach Hiring</option>
                    <option value="service">Facility AMC & Tech Upgrades</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Total Square Footage</label>
                  <select
                    value={formData.squareFootage}
                    onChange={e => setFormData({ ...formData, squareFootage: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D26539] uppercase font-mono"
                  >
                    <option value="2,500 - 5,000 sq.ft">2,500 - 5,000 sq.ft</option>
                    <option value="5,000 - 10,000 sq.ft">5,000 - 10,000 sq.ft</option>
                    <option value="10,000 - 25,000 sq.ft">10,000 - 25,000 sq.ft</option>
                    <option value="25,000+ sq.ft">25,000+ sq.ft Multi-Zone</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Project Details & Machinery List</label>
                <textarea
                  rows={4}
                  placeholder="Detail your equipment requirements, target launch date, structural specs..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#090C10] border border-white/10 rounded-xl p-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D26539]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-vault w-full py-3.5 text-xs uppercase tracking-wider mt-2 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Transmitting Request...' : 'Dispatch Commercial Outfitting Proposal'}</span>
              </button>
            </form>
          </div>

          {/* Right: National Headquarters & Flagship Showrooms */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-8 space-y-6 luxury-card">
              <span className="text-xs font-mono text-[#D26539] uppercase tracking-widest block">
                FLAGSHIP COMMERCIAL SHOWROOMS
              </span>

              <div className="space-y-4 font-mono text-xs text-slate-300 divide-y divide-white/5">
                <div className="pt-3 first:pt-0 space-y-1">
                  <div className="font-bold text-white font-syne text-sm uppercase">Greater Kailash 1, New Delhi</div>
                  <p className="text-slate-400 text-xs font-sans">M-Block Commercial Hub, New Delhi, Delhi 110048</p>
                  <p className="text-[#D26539] text-[11px]">+91 90678 00048 • Open 10 AM - 8 PM</p>
                </div>

                <div className="pt-3 space-y-1">
                  <div className="font-bold text-white font-syne text-sm uppercase">Indiranagar, Bengaluru</div>
                  <p className="text-slate-400 text-xs font-sans">100 Feet Road, HAL 2nd Stage, Bengaluru, Karnataka 560038</p>
                  <p className="text-[#D26539] text-[11px]">+91 90678 00048 • Open 10 AM - 8 PM</p>
                </div>

                <div className="pt-3 space-y-1">
                  <div className="font-bold text-white font-syne text-sm uppercase">Jubilee Hills, Hyderabad</div>
                  <p className="text-slate-400 text-xs font-sans">Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033</p>
                  <p className="text-[#D26539] text-[11px]">+91 90678 00048 • Open 10 AM - 8 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-6 space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 text-[#D26539] font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Direct Manufacturer Guarantee</span>
              </div>
              <p className="text-slate-400 text-xs font-sans leading-relaxed">
                All outfitting projects include official GST Input Tax Credit (ITC) invoicing, structural frame test certificates, and on-site engineering installation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
