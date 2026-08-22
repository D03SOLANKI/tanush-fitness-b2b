import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/common/SEO';
import { Sparkles, ArrowRight, CheckCircle2, DollarSign, Calendar, TrendingUp, ShieldCheck, Building2 } from 'lucide-react';

export const VaultFranchisePage: React.FC = () => {
  const { showToast } = useApp();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    investmentCapacity: '₹1.5 Cr - ₹3 Cr',
    commercialArea: '5,000 - 8,000 sq.ft',
    experience: 'Yes',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.city) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    showToast('Franchise application received! Our Vault Expansion Directorate will contact you.', 'success');
    setForm({
      name: '',
      phone: '',
      email: '',
      city: '',
      investmentCapacity: '₹1.5 Cr - ₹3 Cr',
      commercialArea: '5,000 - 8,000 sq.ft',
      experience: 'Yes',
    });
  };

  return (
    <main className="bg-[#090C10] text-[#E2E8F0] luxury-noise min-h-screen pt-28 pb-24">
      <SEO
        title="Franchise Opportunities | VAULT BY VIRAT KOHLI"
        description="Open your own Vault Fitness Club. Discover franchise business models, turnkey guidance, ROI timelines, and application requirements."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D26539]/40 text-xs font-mono text-[#D26539] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BUSINESS PARTNERSHIP // EXPANSION</span>
            </div>

            <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
              OPEN YOUR <span className="text-[#D26539]">OWN VAULT</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans leading-relaxed">
              Fuel the fitness revolution by opening your own Vault Fitness Club and bring the ultimate wellness destination to your community. Join our franchise family and empower others to unlock their potential.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#fran-form"
              className="px-8 py-3.5 rounded-full bg-[#D26539] hover:bg-[#C2552F] text-white font-syne font-bold text-xs uppercase tracking-wider transition shadow-xl flex items-center gap-2"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 3 Pillars of Vault Franchise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-8 space-y-6 luxury-card">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D26539]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-2xl font-bold text-white uppercase">Why Vault?</h3>
            <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
              Backed by the iconic fitness ethos of Virat Kohli, Vault brings unparalleled brand equity, premium demographic attraction, and high member retention.
            </p>
            <ul className="space-y-2 font-mono text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D26539]" /> High-ticket membership tiers
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D26539]" /> Secondary revenue (One8 cafe & gear)
              </li>
            </ul>
          </div>

          <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-8 space-y-6 luxury-card">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D26539]">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-2xl font-bold text-white uppercase">Investment Plan</h3>
            <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
              Transparent capital allocation covering imported biomechanical machinery, architectural interior buildouts, acoustics, and pre-launch marketing campaigns.
            </p>
            <ul className="space-y-2 font-mono text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D26539]" /> Space: 4,000 - 12,000 sq.ft
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D26539]" /> Projected payback: 24-36 months
              </li>
            </ul>
          </div>

          <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-8 space-y-6 luxury-card">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D26539]">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-2xl font-bold text-white uppercase">Timeline & Milestones</h3>
            <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
              Full turnkey assistance from site selection, 3D architectural CAD modeling, equipment import, trainer hiring, to grand opening.
            </p>
            <ul className="space-y-2 font-mono text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D26539]" /> Fast-track launch in 90-120 days
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D26539]" /> Ongoing central marketing support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Franchise Application Form */}
      <section id="fran-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
              EXECUTIVE APPLICATION
            </span>
            <h2 className="font-syne text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
              Franchise Enquiry Form
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98123 45678"
                  className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="johndoe@mail.com"
                  className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Target City / Territory *</label>
                <input
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="e.g. Mumbai, Pune, Delhi NCR"
                  className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Investment Capacity</label>
                <select
                  value={form.investmentCapacity}
                  onChange={(e) => setForm({ ...form, investmentCapacity: e.target.value })}
                  className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D26539]"
                >
                  <option value="₹1.5 Cr - ₹3 Cr">₹1.5 Cr - ₹3 Cr</option>
                  <option value="₹3 Cr - ₹5 Cr">₹3 Cr - ₹5 Cr</option>
                  <option value="₹5 Cr+">₹5 Cr+</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Commercial Floor Area Available</label>
                <select
                  value={form.commercialArea}
                  onChange={(e) => setForm({ ...form, commercialArea: e.target.value })}
                  className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D26539]"
                >
                  <option value="3,000 - 5,000 sq.ft">3,000 - 5,000 sq.ft</option>
                  <option value="5,000 - 8,000 sq.ft">5,000 - 8,000 sq.ft</option>
                  <option value="8,000 - 15,000 sq.ft">8,000 - 15,000 sq.ft</option>
                  <option value="Seeking Space Identification">Seeking Space Identification</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#D26539] hover:bg-[#C2552F] text-white font-syne font-bold text-sm uppercase tracking-wider transition shadow-xl"
            >
              Submit Franchise Application
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};
