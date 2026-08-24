import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BUSINESS_SERVICES } from '../data/services';
import { BusinessService } from '../types';
import { SEO } from '../components/common/SEO';
import {
  Briefcase,
  CheckCircle2,
  Send,
  X,
  Sparkles,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MarqueeStrip } from '../components/common/MarqueeStrip';

export const ServicesPage: React.FC = () => {
  const { submitServiceEnquiry, showToast } = useApp();

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
      showToast('Please provide Name, Gym/Facility Name, and Mobile Number.', 'error');
      return;
    }

    submitServiceEnquiry({
      name: formState.name,
      gymName: formState.gymName,
      serviceRequired: formState.serviceRequired || selectedService?.name || 'GYM MANAGEMENT SERVICE',
      mobile: formState.mobile,
      email: formState.email,
      additionalRequirements: formState.additionalRequirements,
    });

    showToast('GYM MANAGEMENT consultation request received! Our Outfitting Director will connect with you.', 'success');

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
    <main className="pt-24 pb-20 bg-[#090C10] min-h-screen text-[#F0EBE3] ">
      <SEO
        title="GYM MANAGEMENT Gym Architecture & Outfitting Services | Tanush Fitness"
        description="3D CAD space modeling, acoustic rubber flooring, digital access turnstiles, marketing launch funnels, and AMC facility maintenance."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#A8A090] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>360° COMMERCIAL & RESIDENTIAL GYM MANAGEMENT</span>
            </div>

            <h1 className="font-satoshi text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
              GYM MANAGEMENT OUTFITTING
            </h1>

            <p className="text-sm sm:text-base text-[#A8A090] max-w-2xl font-sans leading-relaxed">
              From raw commercial square footage to fully commissioned athletic destinations. 3D CAD blueprints, high-density acoustic flooring, turnstiles, and automated operational management.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+918160918894"
              className="btn-vault flex items-center gap-2 text-xs py-2.5 px-5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book GYM MANAGEMENT Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeStrip theme="gold" speed="slow" />

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#0D1118] border border-white/10 rounded-none overflow-hidden luxury-card flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image */}
                <div className="relative h-56 overflow-hidden bg-[#090C10]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1118] via-transparent to-black/30" />
                  {service.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#090C10]/80  border border-white/10 text-[10px] font-mono text-[#D26539] uppercase tracking-wider font-bold">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <span className="text-[10px] font-mono text-[#6B6358] uppercase tracking-wider block">
                    {service.category || 'COMMERCIAL & RESIDENTIAL SETUP'}
                  </span>

                  <h3 className="font-satoshi text-xl font-bold text-white group-hover:text-[#D26539] transition uppercase">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8A090] font-sans leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights */}
                  {service.benefits && service.benefits.length > 0 && (
                    <div className="pt-3 border-t border-white/5 space-y-2 font-mono text-xs text-[#A8A090]">
                      {service.benefits.slice(0, 3).map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D26539] shrink-0" />
                          <span className="font-sans text-xs">{f}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => handleOpenEnquiryModal(service)}
                  className="btn-vault w-full py-2.5 text-xs flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Request Service Proposal</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80  flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0D1118] border border-white/10 rounded-none max-w-xl w-full p-6 sm:p-8 space-y-6 "
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#D26539] uppercase tracking-widest block mb-1">
                    GYM MANAGEMENT PROPOSAL
                  </span>
                  <h3 className="font-satoshi text-2xl font-bold text-white uppercase">
                    {selectedService?.name || 'GYM MANAGEMENT Commercial Consultation'}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A8A090] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Sameer Kapoor"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Gym / Project Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Iron Sanctuary Club"
                    value={formState.gymName}
                    onChange={e => setFormState({ ...formState, gymName: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Mobile Hotline</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formState.mobile}
                      onChange={e => setFormState({ ...formState, mobile: e.target.value })}
                      className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Work Email</label>
                    <input
                      type="email"
                      placeholder="sameer@ironclub.in"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Specific Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your square footage, location, floor acoustic needs..."
                    value={formState.additionalRequirements}
                    onChange={e => setFormState({ ...formState, additionalRequirements: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl p-3 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-vault w-full py-3 text-xs uppercase tracking-wider mt-2"
                >
                  Submit Proposal Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
