import React from 'react';
import { useApp } from '../../context/AppContext';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { SERVICES } from '../../data/services';
import { Star, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedServices: React.FC = () => {
  const { navigateTo, openBookingModal } = useApp();

  const featuredServices = SERVICES.slice(0, 4);
  const fallbackImage = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80';

  return (
    <section className="py-20 sm:py-28 bg-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="EXPERT FACILITY SOLUTIONS"
          title="Featured Commercial Services"
          description="Contract certified master trainers, on-demand equipment technicians, and AI automation platforms designed for health clubs."
          actionText="View All 9 Service Categories"
          onActionClick={() => navigateTo('services')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-stripe hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Bright Crisp Service Image */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={service.image}
                  alt={service.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackImage;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="gold">{service.badge}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-mono">
                    <span className="text-blue-600 font-bold uppercase">{service.category}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-black">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-black text-slate-900 leading-snug font-heading group-hover:text-blue-600 transition-colors uppercase">
                    {service.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-semibold mt-0.5">
                    {service.title}
                  </div>

                  <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {service.bio}
                  </p>
                </div>

                {/* Pricing & Booking */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-baseline justify-between font-mono">
                    <span className="text-base font-black text-slate-900">
                      {service.pricing}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold">
                      {service.pricingPeriod}
                    </span>
                  </div>

                  <button
                    onClick={() => openBookingModal(service)}
                    className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Service / RFQ</span>
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
