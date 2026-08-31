import React from 'react';
import { SEO } from '../components/common/SEO';
import { VaultContactFormSection } from '../components/home/VaultContactFormSection';
import { OrangeDirectorySection } from '../components/home/OrangeDirectorySection';
import { Phone, Mail, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#0F1926] text-[#5E656E] overflow-hidden pt-8 pb-0">
      <SEO
        title="VIP Commercial & Residential Outfitting Desk | Tanush Fitness"
        description="Direct manufacturer consultation, 3D CAD space proposals, wholesale machinery quotations, and flagship showroom visits."
      />

      {/* Quick Direct Channels Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#2A2A2B] pb-8">
          <div className="space-y-2">
            <h1 className="font-satoshi text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#5E656E] tracking-[0.04em] leading-snug">
              OUTFITTING DESK
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/918160918894?text=Hello%20Tanush%20Fitness,%20I%20want%20a%20commercial%20outfitting%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0C1015] border border-[#2A2A2B] hover:border-[#D0CFCA] text-[#5E656E] px-5 py-2.5 rounded-full font-satoshi text-xs uppercase tracking-wider flex items-center gap-2 transition cursor-pointer shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#5E656E]" />
              <span>WhatsApp Factory Desk</span>
            </a>

            <a
              href="tel:+918160918894"
              className="btn-primary text-xs flex items-center gap-2 py-2.5 px-6 cursor-pointer shadow-lg"
            >
              <Phone className="w-3.5 h-3.5 text-[#0F1926]" />
              <span>+91 81609 18894</span>
            </a>
          </div>
        </div>
      </section>

      {/* Vault-Style Split Screen Form */}
      <VaultContactFormSection />

      {/* Showroom & Logistics Hubs (#5E656E LIGHT CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-[#2A2A2B]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#5E656E] text-[#0F1926] border border-[#2A2A2B]/10 rounded-2xl p-8 space-y-3 group hover:border-[#0F1926] transition-all duration-300 shadow-2xl hover:-translate-y-1">
            <div className="flex items-center gap-2 text-[#0F1926] font-mono text-xs uppercase tracking-wider font-bold">
              <MapPin className="w-4 h-4" />
              <span>National Showroom</span>
            </div>
            <h3 className="font-satoshi text-lg font-bold text-[#0F1926] uppercase">
              Tanush Experience Center
            </h3>
            <p className="font-sans text-xs text-[#2A2A2B]/80 leading-relaxed">
              Industrial Area Phase 2, Okhla, New Delhi, Delhi 110020
            </p>
          </div>

          <div className="bg-[#5E656E] text-[#0F1926] border border-[#2A2A2B]/10 rounded-2xl p-8 space-y-3 group hover:border-[#0F1926] transition-all duration-300 shadow-2xl hover:-translate-y-1">
            <div className="flex items-center gap-2 text-[#0F1926] font-mono text-xs uppercase tracking-wider font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Manufacturing Works</span>
            </div>
            <h3 className="font-satoshi text-lg font-bold text-[#0F1926] uppercase">
              Laser Steel Heavy Fabrication
            </h3>
            <p className="font-sans text-xs text-[#2A2A2B]/80 leading-relaxed">
              Plot 42-45, Precision Engineering Zone, Meerut Industrial Corridor, UP
            </p>
          </div>

          <div className="bg-[#5E656E] text-[#0F1926] border border-[#2A2A2B]/10 rounded-2xl p-8 space-y-3 group hover:border-[#0F1926] transition-all duration-300 shadow-2xl hover:-translate-y-1">
            <div className="flex items-center gap-2 text-[#0F1926] font-mono text-xs uppercase tracking-wider font-bold">
              <Mail className="w-4 h-4" />
              <span>Official Desk</span>
            </div>
            <h3 className="font-satoshi text-lg font-bold text-[#0F1926] uppercase">
              Invoicing & GST Directorate
            </h3>
            <p className="font-sans text-xs text-[#2A2A2B]/80 leading-relaxed">
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
