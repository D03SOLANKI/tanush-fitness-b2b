import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../data/categories';
import { SERVICES } from '../data/services';
import { Badge } from '../components/common/Badge';
import { Star, Calendar, Clock, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServicesPage: React.FC = () => {
  const { openBookingModal } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCategoryTile = SERVICE_CATEGORIES.find(c => c.id === activeCategory);
  const fallbackImage = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80';

  const filteredServices = SERVICES.filter(s => {
    if (activeCategory !== 'all' && s.categoryId !== activeCategory) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = s.name.toLowerCase().includes(q);
      const matchTitle = s.title.toLowerCase().includes(q);
      const matchCat = s.category.toLowerCase().includes(q);
      if (!matchName && !matchTitle && !matchCat) return false;
    }
    return true;
  });

  return (
    <main className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[3px] bg-blue-600 rounded-full" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 font-mono">
              Commercial Facility Solutions
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading uppercase">
            Certified Gym Services & Contracting
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl font-normal">
            Hire vetted personal trainers, dispatch 24/7 equipment repair technicians, and integrate AI retention software engineered for commercial facilities.
          </p>
        </div>

        {/* 9 Category Filter Tiles Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`p-3 rounded-2xl text-xs font-black uppercase tracking-wider font-mono border transition-all text-center flex flex-col items-center justify-center gap-1.5 shadow-sm ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>All 9 Services</span>
            <span className="text-[10px] opacity-80">(65 Listings)</span>
          </button>

          {SERVICE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`p-3 rounded-2xl text-xs font-extrabold border transition-all text-center flex flex-col items-center justify-center gap-1 leading-tight shadow-sm ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white border-blue-600 font-black shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="line-clamp-2">{cat.name}</span>
              <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                cat.isPopulated ? 'bg-emerald-50 text-emerald-700 font-bold' : 'bg-amber-50 text-amber-700 font-bold'
              }`}>
                {cat.isPopulated ? 'Live' : 'RFQ'}
              </span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search trainers, repair techs, AI tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 pl-10 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Check if Selected Category is Coming Soon */}
        {activeCategoryTile && !activeCategoryTile.isPopulated && activeCategory !== 'all' ? (
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto shadow-stripe my-8">
            <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 mx-auto flex items-center justify-center">
              <Clock className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
                Enterprise Contracting Concierge
              </span>
              <h3 className="text-2xl font-black text-slate-900 font-heading uppercase">
                {activeCategoryTile.name} Service Concierge
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                Direct contractor placement for this category is currently in partner onboarding. Submit a service RFQ below to receive custom bids.
              </p>
            </div>
            <button
              onClick={() => alert(`Custom Contracting Concierge dispatches bids for ${activeCategoryTile.name}. An account manager will reach out within 2 hours.`)}
              className="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-black text-xs uppercase tracking-wider font-mono shadow-md"
            >
              Request Enterprise Bids →
            </button>
          </div>
        ) : (
          /* Service Provider Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-stripe hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Header Image & Badge */}
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

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-mono">
                      <span className="text-blue-600 font-bold uppercase">{service.category}</span>
                      <div className="flex items-center gap-1 text-amber-500 font-black">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{service.rating} ({service.reviewCount})</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 leading-snug font-heading uppercase group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <div className="text-xs text-slate-500 font-semibold mt-0.5">
                      {service.title} {service.company && `• ${service.company}`}
                    </div>

                    <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                      {service.bio}
                    </p>

                    {/* Specialties Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5 font-mono">
                      {service.specialties.map((spec, i) => (
                        <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 uppercase">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Booking Button */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-baseline justify-between font-mono">
                      <span className="text-lg font-black text-slate-900">
                        {service.pricing}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">
                        {service.pricingPeriod}
                      </span>
                    </div>

                    <button
                      onClick={() => openBookingModal(service)}
                      className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Service / Request RFQ</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
