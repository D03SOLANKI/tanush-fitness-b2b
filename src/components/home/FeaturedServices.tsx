import React from 'react';
import { useApp } from '../../context/AppContext';
import { SectionHeader } from '../common/SectionHeader';
import { BUSINESS_SERVICES } from '../../data/services';
import { Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedServices: React.FC = () => {
  const { navigateTo, openServiceModal } = useApp();

  const featured = BUSINESS_SERVICES.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="FACILITY CONTRACTING & TECH AUTOMATION"
          title="Turnkey Commercial Gym Services"
          description="Contract on-demand equipment technicians, 3D interior floor layout planners, WhatsApp CRM specialists, and performance marketing directors."
          actionText="View All 18 Turnkey Services"
          onActionClick={() => navigateTo('services')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="group rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover-lift overflow-hidden flex flex-col justify-between shadow-sm"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-200">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                {service.badge && (
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded bg-slate-900/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-slate-700">
                      {service.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[10px] font-bold text-blue-700 font-mono uppercase tracking-wide">
                    {service.category}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug font-heading group-hover:text-blue-700 transition-colors mt-1">
                    {service.name}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Booking Action */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => openServiceModal(service)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5 text-blue-400" />
                    <span>Request Proposal</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
