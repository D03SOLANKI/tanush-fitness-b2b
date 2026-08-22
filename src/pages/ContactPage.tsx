import React from 'react';
import { SEO } from '../components/common/SEO';
import { VaultContactFormSection } from '../components/home/VaultContactFormSection';
import { OrangeDirectorySection } from '../components/home/OrangeDirectorySection';
import { Phone, Mail, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#090C10] text-[#ECE6DB] overflow-hidden pt-8 pb-0">
      <SEO
        title="VIP Commercial Outfitting Desk | Tanush Fitness"
        description="Direct manufacturer consultation, 3D CAD space proposals, wholesale machinery quotations, and flagship showroom visits."
      />

      {/* Quick Direct Channels Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <div className="font-mono text-xs text-[#D26539] tracking-widest uppercase">
              ✦ DIRECT EXECUTIVE HELPLINE // 24/7 B2B PROCUREMENT
            </div>
            <h1 className="font-satoshi text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
              OUTFITTING <span className="text-[#D26539]">DESK</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/919067800048?text=Hello%20Tanush%20Fitness,%20I%20want%20a%20commercial%20outfitting%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0D1811] border border-white/15 hover:border-[#D26539] text-white px-5 py-2.5 rounded-full font-general text-xs uppercase tracking-wider flex items-center gap-2 transition"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Factory Desk</span>
            </a>

            <a
              href="tel:+919067800048"
              className="btn-vault text-xs flex items-center gap-2 py-2.5 px-6"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 90678 00048</span>
            </a>
          </div>
        </div>
      </section>

      {/* Vault-Style Split Screen Form */}
      <VaultContactFormSection />

      {/* Showroom & Logistics Hubs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0D1118] border border-white/10 rounded-2xl p-7 space-y-3">
            <div className="flex items-center gap-2 text-[#D26539] font-mono text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>National Showroom</span>
            </div>
            <h3 className="font-satoshi text-lg font-bold text-white uppercase">
              Tanush Experience Center
            </h3>
            <p className="font-manrope text-xs text-slate-400 leading-relaxed">
              Industrial Area Phase 2, Okhla, New Delhi, Delhi 110020
            </p>
          </div>

          <div className="bg-[#0D1118] border border-white/10 rounded-2xl p-7 space-y-3">
            <div className="flex items-center gap-2 text-[#D26539] font-mono text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Manufacturing Works</span>
            </div>
            <h3 className="font-satoshi text-lg font-bold text-white uppercase">
              Laser Steel Heavy Fabrication
            </h3>
            <p className="font-manrope text-xs text-slate-400 leading-relaxed">
              Plot 42-45, Precision Engineering Zone, Meerut Industrial Corridor, UP
            </p>
          </div>

          <div className="bg-[#0D1118] border border-white/10 rounded-2xl p-7 space-y-3">
            <div className="flex items-center gap-2 text-[#D26539] font-mono text-xs uppercase tracking-wider">
              <Mail className="w-4 h-4" />
              <span>Official Desk</span>
            </div>
            <h3 className="font-satoshi text-lg font-bold text-white uppercase">
              Invoicing & GST Directorate
            </h3>
            <p className="font-manrope text-xs text-slate-400 leading-relaxed">
              Info@tanushfitness.com • 18% GST ITC Compliant Invoices
            </p>
          </div>
        </div>
      </section>

      {/* Directory Section Above Footer */}
      <OrangeDirectorySection />
    </main>
  );
};
