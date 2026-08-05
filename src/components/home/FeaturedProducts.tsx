import React from 'react';
import { useApp } from '../../context/AppContext';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { PRODUCTS } from '../../data/products';
import { Star, FileText, Heart, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedProducts: React.FC = () => {
  const { products, navigateTo, addToEnquiryCart, toggleWishlist, isInWishlist } = useApp();

  const featured = products.slice(0, 6);
  const fallbackImage = 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80';

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="FACTORY DIRECT COMMERCIAL MACHINERY"
          title="Featured Commercial Equipment"
          description="Source 7-gauge power racks, pin-selected stacks, curved treadmills, and urethane weights directly from verified manufacturers."
          actionText="View Full Equipment Catalog"
          onActionClick={() => navigateTo('equipment')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product, idx) => {
            const inWishlist = isInWishlist(product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-stripe hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-video bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="gold">{product.badge}</Badge>
                    </div>
                  )}

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full border backdrop-blur-md transition-all shadow-sm ${
                      inWishlist
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white/90 text-slate-400 border-slate-200 hover:text-slate-900'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${inWishlist ? 'fill-white' : ''}`} />
                  </button>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1 font-mono">
                      <span className="text-blue-600 uppercase tracking-wider">{product.brand}</span>
                      <div className="flex items-center gap-1 text-amber-500 font-black">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => navigateTo('equipment')}
                      className="text-base font-black text-slate-900 hover:text-blue-600 transition-colors leading-snug cursor-pointer line-clamp-2 font-heading uppercase"
                    >
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2 font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* Actions (NO PRICING) */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-emerald-600 font-bold">
                      <span className="flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 stroke-[3]" /> Commercial Stock Ready
                      </span>
                      <span className="text-slate-500 font-normal">MOQ: {product.minOrderQty || 1} Unit</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => addToEnquiryCart(product, 1)}
                        className="w-full py-2.5 px-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1 shadow-md transition-all"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>

                      <button
                        onClick={() => navigateTo('equipment')}
                        className="w-full py-2.5 px-2 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-900 font-black text-xs font-mono uppercase flex items-center justify-center transition-all"
                      >
                        <span>Enquire Now</span>
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
