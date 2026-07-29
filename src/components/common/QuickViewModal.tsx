import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Badge } from './Badge';
import { X, Star, ShoppingBag, Heart, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const QuickViewModal: React.FC = () => {
  const { isQuickViewOpen, quickViewProduct, closeQuickView, addToCart, toggleWishlist, isInWishlist, navigateTo } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!isQuickViewOpen || !quickViewProduct) return null;

  const inWishlist = isInWishlist(quickViewProduct.id);
  const bulkActive = quickViewProduct.bulkPrice && quantity >= (quickViewProduct.bulkThreshold || 3);
  const effectiveUnitPrice = bulkActive ? quickViewProduct.bulkPrice! : quickViewProduct.price;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickView}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto text-slate-900"
        >
          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Column */}
            <div className="p-6 sm:p-8 bg-slate-50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200 mb-4 group shadow-sm">
                <img
                  src={quickViewProduct.gallery[activeImage] || quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {quickViewProduct.badge && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="gold">{quickViewProduct.badge}</Badge>
                  </div>
                )}
              </div>

              {/* Gallery Thumbnails */}
              {quickViewProduct.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {quickViewProduct.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        activeImage === idx ? 'border-blue-600 scale-105 shadow-sm' : 'border-slate-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details Column */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs font-bold tracking-wider text-slate-500 uppercase mb-2 font-mono">
                  <span className="text-blue-600">{quickViewProduct.brand}</span>
                  <div className="flex items-center gap-1 text-amber-500 font-black">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{quickViewProduct.rating} ({quickViewProduct.reviewCount} reviews)</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug font-heading uppercase">
                  {quickViewProduct.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-3 font-mono">
                  <span className="text-3xl font-black text-slate-900">
                    ${effectiveUnitPrice.toLocaleString()}
                  </span>
                  {quickViewProduct.bulkPrice && (
                    <span className="text-sm text-slate-400 line-through font-medium">
                      (MSRP ${quickViewProduct.price.toLocaleString()})
                    </span>
                  )}
                  <span className="text-xs text-slate-500 font-medium">/ unit (excl. freight)</span>
                </div>

                {quickViewProduct.bulkPrice && (
                  <div className="mt-2 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 p-2.5 rounded-xl uppercase font-mono">
                    ⚡ B2B Tiering: Save ${(quickViewProduct.price - quickViewProduct.bulkPrice).toLocaleString()}/unit when ordering {quickViewProduct.bulkThreshold || 3}+ units!
                  </div>
                )}

                <p className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                  {quickViewProduct.description}
                </p>

                {/* Micro specs bullet list */}
                <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                  {Object.entries(quickViewProduct.specs).slice(0, 3).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-xs">
                      <span className="text-slate-500 font-semibold">{key}:</span>
                      <span className="text-slate-900 font-bold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                {/* Quantity selector & Wishlist */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl p-1 shadow-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-black text-slate-900 text-sm font-mono">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => toggleWishlist(quickViewProduct.id)}
                    className={`p-3 rounded-xl border transition-all flex items-center gap-2 text-xs font-black uppercase font-mono ${
                      inWishlist
                        ? 'bg-blue-50 border-blue-200 text-blue-600'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${inWishlist ? 'fill-blue-600' : ''}`} />
                    <span>{inWishlist ? 'Saved' : 'Wishlist'}</span>
                  </button>
                </div>

                {/* Primary Add to Cart */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      addToCart(quickViewProduct, quantity);
                      closeQuickView();
                    }}
                    className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(59,130,246,0.3)] transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to B2B Cart</span>
                  </button>

                  <button
                    onClick={() => {
                      closeQuickView();
                      navigateTo('product-detail', quickViewProduct.id);
                    }}
                    className="w-full py-3.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>Full Specifications →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
