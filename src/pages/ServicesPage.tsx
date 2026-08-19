import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BUSINESS_SERVICES } from '../data/services';
import { BusinessService } from '../types';
import { Badge } from '../components/common/Badge';
import { SEO } from '../components/common/SEO';
import { Briefcase, ArrowRight, CheckCircle2, Star, Send, X, Building2, Sparkles, Layers, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ServicesPage: React.FC = () => {
  const { submitServiceEnquiry } = useApp();

  const [selectedService, setSelectedService] = useState<BusinessService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    gymName: '',
    serviceRequired: '',
    mobile: '',
    email: '',
    additionalRequirements: '',
  });

  const handleOpenEnquiryModal = (service: BusinessService) => {
    setSelectedService(service);
    setFormState(prev => ({ ...prev, serviceRequired: service.name }));
    setIsModalOpen(true);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.mobile || !formState.gymName) {
      alert('Please provide Name, Gym Name, and Mobile Number.');
      return;
    }

    submitServiceEnquiry({
      name: formState.name,
      gymName: formState.gymName,
      serviceRequired: formState.serviceRequired || selectedService?.name || 'General Business Service',
      mobile: formState.mobile,
      email: formState.email,
      additionalRequirements: formState.additionalRequirements,
    });

    setIsModalOpen(false);
    setSelectedService(null);
    setFormState({
      name: '',
      gymName: '',
      serviceRequired: '',
      mobile: '',
      email: '',
      additionalRequirements: '',
    });
  };

  return (
    <main className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <SEO
        title="18 Commercial Gym Business Services | Tanush Fitness B2B"
        description="Meta/Google ad campaigns, Instagram management, 3D interior floor plans, website/app dev, & AI WhatsApp lead generation funnels for health clubs."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[3px] bg-blue-600 rounded-full" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 font-mono">
              BUSINESS 3: GYM BUSINESS SERVICES
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading uppercase">
            Gym Growth, 3D Design & Tech Automation
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl font-normal">
            18 premium business services engineered exclusively for commercial health clubs: Meta/Google Ads, Instagram Content, 3D CAD Floor Plans, Mobile Apps, & AI WhatsApp CRM.
          </p>
        </div>

        {/* 18 Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover-lift shadow-sm flex flex-col justify-between overflow-hidden"
            >
              {/* Header Image */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {service.badge && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="gold">{service.badge}</Badge>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 font-mono">
                <div>
                  <div className="text-[10px] font-bold uppercase text-blue-600">
                    {service.category}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 font-heading uppercase mt-0.5 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* 1. Overview */}
                  <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">1. Overview</div>
                    <p className="text-[11px] text-slate-700 leading-tight font-normal line-clamp-2">
                      {service.overview}
                    </p>
                  </div>

                  {/* 2. What's Included */}
                  <div className="mt-3 space-y-1 text-[11px] text-slate-700">
                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">2. What's Included:</div>
                    {service.benefits.slice(0, 3).map((b, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* 3. Case Study Results */}
                  {service.caseStudies.length > 0 && (
                    <div className="mt-4 p-3 rounded-2xl bg-blue-50/60 border border-blue-200/80">
                      <div className="text-[10px] font-bold text-blue-700 uppercase">3. Proven Case Study</div>
                      <div className="text-xs font-black text-slate-900">{service.caseStudies[0].result}</div>
                      <div className="text-[10px] text-slate-600 italic">"{service.caseStudies[0].quote}"</div>
                    </div>
                  )}
                </div>

                {/* Enquire Now Button (NO PRICING) */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleOpenEnquiryModal(service)}
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail & Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-slate-200 relative my-8 font-mono"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase text-blue-600">
                  {selectedService.category}
                </span>
                <h3 className="text-xl font-black text-slate-900 font-heading uppercase mt-0.5">
                  Request Quotation for {selectedService.name}
                </h3>
                <p className="text-xs text-slate-500">No online payment. A Tanush growth consultant will contact you.</p>
              </div>

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
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
                      Gym / Club Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Apex Health Club"
                      value={formState.gymName}
                      onChange={e => setFormState({ ...formState, gymName: e.target.value })}
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
                      placeholder="+91 90678 00048"
                      value={formState.mobile}
                      onChange={e => setFormState({ ...formState, mobile: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    placeholder="vikram@apexhealth.com"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">
                    Additional Deliverable Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention targeted membership goal, timeframe, or specific deliverables..."
                    value={formState.additionalRequirements}
                    onChange={e => setFormState({ ...formState, additionalRequirements: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Service RFQ</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};
