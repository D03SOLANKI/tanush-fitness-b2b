import React from 'react';
import { useApp } from '../../context/AppContext';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { Star, FileText, Heart, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedProducts: React.FC = () => {
  const { products, navigateTo, addToEnquiryCart, toggleWishlist, isInWishlist } = useApp();

  const featured = products.slice(0, 6);
  const fallbackImage = 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80';

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="FACTORY DIRECT INDUSTRIAL MACHINERY"
          title="Featured Commercial Equipment"
          description="Source 11-gauge power rigs, pin-selected stacks, commercial cardio, and urethane free weights directly from verified manufacturers."
          actionText="View Full Equipment Catalog"
          onActionClick={() => navigateTo('equipment')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, idx) => {
            const inWishlist = isInWishlist(product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover-lift overflow-hidden flex flex-col justify-between shadow-sm"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                    }}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />

                  {product.badge && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded bg-slate-900/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-slate-700">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-2.5 right-2.5 p-1.5 rounded-lg border transition-colors ${
                      inWishlist
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white/90 text-slate-400 border-slate-200 hover:text-slate-900'
                    }`}
                    title="Save to Project Wishlist"
                  >
                    <Heart className={`w-3.5 h-3.5 ${inWishlist ? 'fill-white' : ''}`} />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-blue-700 font-bold uppercase tracking-wide">{product.brand}</span>
                      <div className="flex items-center gap-1 text-slate-700 font-bold">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => navigateTo('equipment')}
                      className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors leading-snug cursor-pointer line-clamp-1 font-heading uppercase"
                    >
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* B2B Logistics & RFQ Actions */}
                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" /> Commercial Batch Ready
                      </span>
                      <span className="text-slate-500">MOQ: {product.minOrderQty || 1} Unit</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 font-mono">
                      <button
                        onClick={() => addToEnquiryCart(product, 1)}
                        className="w-full py-2 px-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>+ Add to RFQ</span>
                      </button>

                      <button
                        onClick={() => navigateTo('equipment')}
                        className="w-full py-2 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-bold text-xs uppercase flex items-center justify-center gap-1 transition-colors"
                      >
                        <span>Full Specs</span>
                        <ArrowRight className="w-3 h-3 text-slate-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
