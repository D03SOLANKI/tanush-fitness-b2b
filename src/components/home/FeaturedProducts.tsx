import React from 'react';
import { useApp } from '../../context/AppContext';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { PRODUCTS } from '../../data/products';
import { Star, ShoppingBag, Eye, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedProducts: React.FC = () => {
  const { navigateTo, addToCart, openQuickView, toggleWishlist, isInWishlist } = useApp();

  const featuredList = PRODUCTS.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="FLAGSHIP COMMERCIAL GEAR"
          title="Featured Equipment & Supplies"
          description="Hand-selected B2B bestsellers from leading manufacturers including TitanForge, PowerCore, and EliteMotion."
          actionText="Explore Full Marketplace"
          onActionClick={() => navigateTo('marketplace')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((product, idx) => {
            const inWishlist = isInWishlist(product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-stripe hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-video bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    {product.badge && <Badge variant="gold">{product.badge}</Badge>}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-3 right-3 p-2.5 rounded-full border backdrop-blur-md transition-all shadow-sm ${
                      inWishlist
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white/90 text-slate-400 border-slate-200 hover:text-slate-900'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${inWishlist ? 'fill-white' : ''}`} />
                  </button>

                  {/* Quick View Overlay Button */}
                  <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => openQuickView(product)}
                      className="py-2.5 px-5 rounded-xl bg-white text-slate-900 font-black text-xs uppercase tracking-wider font-mono flex items-center gap-2 shadow-xl hover:bg-blue-600 hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1.5 font-mono">
                      <span className="text-blue-600 uppercase tracking-wider">{product.brand}</span>
                      <div className="flex items-center gap-1 text-amber-500 font-black">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{product.rating} ({product.reviewCount})</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => navigateTo('product-detail', product.id)}
                      className="text-base font-black text-slate-900 hover:text-blue-600 transition-colors leading-snug cursor-pointer line-clamp-2 font-heading"
                    >
                      {product.name}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xl font-black text-slate-900">
                          ${product.price.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-slate-400 block font-medium">excl. freight tax</span>
                      </div>
                      {product.bulkPrice && (
                        <div className="text-[11px] font-bold text-blue-600 text-right font-mono">
                          Bulk: ${product.bulkPrice.toLocaleString()}
                          <span className="block text-[9px] text-slate-400 font-normal">({product.bulkThreshold}+ units)</span>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(59,130,246,0.25)] transition-all"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>

                      <button
                        onClick={() => navigateTo('product-detail', product.id)}
                        className="w-full py-2.5 px-3 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-800 font-extrabold text-xs flex items-center justify-center transition-all uppercase font-mono"
                      >
                        <span>Details →</span>
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
