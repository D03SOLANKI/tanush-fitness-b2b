import React from 'react';
import { useApp } from '../../context/AppContext';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { BUSINESS_SERVICES } from '../../data/services';
import { Star, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedServices: React.FC = () => {
  const { navigateTo, openServiceModal } = useApp();

  const featured = BUSINESS_SERVICES.slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="GYM GROWTH, DESIGN & TECH AUTOMATION"
          title="Featured Gym Business Services"
          description="Contract certified master trainers, on-demand equipment technicians, Meta/Google ad growth experts, and 3D interior CAD designers."
          actionText="View All 18 Business Services"
          onActionClick={() => navigateTo('services')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-stripe hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image */}
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

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[10px] font-bold text-blue-600 font-mono uppercase">
                    {service.category}
                  </div>

                  <h3 className="text-base font-black text-slate-900 leading-snug font-heading group-hover:text-blue-600 transition-colors uppercase mt-0.5">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Booking */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => openServiceModal(service)}
                    className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all shadow-md"
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
    </section>
  );
};
