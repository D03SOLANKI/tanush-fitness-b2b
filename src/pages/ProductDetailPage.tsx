import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Badge } from '../components/common/Badge';
import { PRODUCTS } from '../data/products';
import { Star, ShoppingBag, Heart, ShieldCheck, Truck, ArrowLeft, Check, Plus, Minus, Building2, Award } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { selectedProductId, navigateTo, addToCart, toggleWishlist, isInWishlist } = useApp();

  const product = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'vendor' | 'reviews'>('specs');

  const fallbackImage = 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80';
  const inWishlist = isInWishlist(product.id);
  const isBulk = product.bulkPrice && quantity >= (product.bulkThreshold || 3);
  const unitPrice = isBulk ? product.bulkPrice! : product.price;

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && p.categoryId === product.categoryId).slice(0, 4);

  return (
    <main className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <button
          onClick={() => navigateTo('marketplace')}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 mb-6 transition-colors font-mono uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Commercial Marketplace</span>
        </button>

        {/* Top Product Header & Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Gallery Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Preview with Hover Zoom Effect */}
            <div className="relative aspect-square sm:aspect-[4/3] bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-stripe group">
              <img
                src={product.gallery[activeImage] || product.image}
                alt={product.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackImage;
                }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-zoom-in"
              />

              {product.badge && (
                <div className="absolute top-4 left-4">
                  <Badge variant="gold" size="md">{product.badge}</Badge>
                </div>
              )}

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 p-3 rounded-full border backdrop-blur-md transition-all shadow-sm ${
                  inWishlist
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white/90 text-slate-400 border-slate-200 hover:text-slate-900'
                }`}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-white' : ''}`} />
              </button>
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-blue-600 scale-105 shadow-sm' : 'border-slate-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt="thumb"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = fallbackImage;
                      }}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Buying & Pricing Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase font-mono tracking-wider mb-2">
                <span className="text-blue-600">{product.brand}</span>
                <div className="flex items-center gap-1 text-amber-500 font-black">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-slate-900">{product.rating}</span>
                  <span className="text-slate-400 font-medium">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight font-heading uppercase">
                {product.name}
              </h1>

              {/* Price Calculation Box */}
              <div className="mt-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-stripe space-y-3">
                <div className="flex items-baseline justify-between font-mono">
                  <div>
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">
                      ${(unitPrice * quantity).toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 block font-medium">
                      (${unitPrice.toLocaleString()} / unit)
                    </span>
                  </div>
                  {product.bulkPrice && (
                    <div className="text-right">
                      <span className="text-xs text-slate-400 line-through block font-medium">
                        MSRP ${(product.price * quantity).toLocaleString()}
                      </span>
                      <span className="text-xs font-bold text-emerald-600">
                        Save ${((product.price - unitPrice) * quantity).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Bulk Tier Notification */}
                {product.bulkPrice && (
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600 flex items-center gap-2 font-mono uppercase">
                    <Award className="w-4 h-4 shrink-0" />
                    <span>
                      {isBulk
                        ? `✓ Tier 1 Wholesale Applied (${quantity} units)`
                        : `Add ${ (product.bulkThreshold || 3) - quantity } more unit(s) to unlock $${product.bulkPrice.toLocaleString()} wholesale tier pricing!`}
                    </span>
                  </div>
                )}

                {/* Lead time & Stock */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-600 font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <Check className="w-4 h-4 stroke-[3]" /> Commercial Stock Ready
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-blue-600" /> Freight: {product.leadTime}
                  </span>
                </div>
              </div>

              {/* Key Feature Highlights */}
              <div className="mt-6 space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider">
                  Commercial Grade Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 font-normal">
                  {product.features.slice(0, 4).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky Action Controls */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-stripe space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-xs font-bold text-slate-700 uppercase font-mono">Quantity:</div>
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => addToCart(product, quantity)}
                  className="w-full py-4 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(59,130,246,0.3)] transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to B2B Cart</span>
                </button>

                <button
                  onClick={() => alert(`Custom Leasing Request initiated for ${product.name}. A Tanush Equipment Finance Manager will issue a formal proposal.`)}
                  className="w-full py-4 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Building2 className="w-4 h-4 text-blue-400" />
                  <span>Request Leasing</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Specs, Vendor Info & Reviews */}
        <div className="mb-20">
          <div className="flex border-b border-slate-200 gap-8 mb-8 font-mono">
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-4 text-sm font-black tracking-wide uppercase transition-all border-b-2 ${
                activeTab === 'specs'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Technical Specifications
            </button>
            <button
              onClick={() => setActiveTab('vendor')}
              className={`pb-4 text-sm font-black tracking-wide uppercase transition-all border-b-2 ${
                activeTab === 'vendor'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Verified Manufacturer Info
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 text-sm font-black tracking-wide uppercase transition-all border-b-2 ${
                activeTab === 'reviews'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Verified Gym Owner Reviews ({product.reviewCount})
            </button>
          </div>

          {/* Specs Tab */}
          {activeTab === 'specs' && (
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-stripe">
              <h3 className="text-lg font-black text-slate-900 mb-6 font-heading uppercase">
                Engineering Specifications Table
              </h3>
              <div className="divide-y divide-slate-100">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="py-3.5 grid grid-cols-1 sm:grid-cols-3 text-xs sm:text-sm">
                    <span className="font-semibold text-slate-500">{key}</span>
                    <span className="sm:col-span-2 font-bold text-slate-900 font-mono">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vendor Tab */}
          {activeTab === 'vendor' && (
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start gap-8 shadow-stripe">
              <img
                src={product.vendor.logo}
                alt={product.vendor.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackImage;
                }}
                className="w-20 h-20 rounded-2xl object-cover border border-slate-200 shrink-0 shadow-sm"
              />
              <div className="space-y-4 flex-1">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-slate-900 font-heading uppercase">{product.vendor.name}</h3>
                    <Badge variant="gold" size="sm" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                      Verified Manufacturer
                    </Badge>
                  </div>
                  <div className="text-xs text-slate-500 font-semibold mt-1">{product.vendor.location}</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-slate-100 font-mono">
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Vendor Rating</div>
                    <div className="text-base font-black text-amber-500">{product.vendor.rating} / 5.0</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Response Rate</div>
                    <div className="text-base font-black text-slate-900">{product.vendor.responseRate}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Freight Dispatch Accuracy</div>
                    <div className="text-base font-black text-emerald-600">{product.vendor.fulfillmentRate}</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  TitanForge Commercial Direct manufactures industrial fitness gear strictly compliant with ISO 9001 and EN 957 commercial safety standards. All shipments pass factory pre-assembly testing prior to pallet freight.
                </p>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {[
                {
                  author: 'Jason Vance',
                  gym: 'Vanguard Athletics (Miami, FL)',
                  rating: 5,
                  date: '2 weeks ago',
                  comment: 'Installed 6 units in our main weight room. Heavy 7-gauge structural steel with zero wobble under heavy 600+ lb squats. Freight arrived cleanly on liftgate trucks.'
                },
                {
                  author: 'Claire Sterling',
                  gym: 'Apex Club (Dallas, TX)',
                  rating: 5,
                  date: '1 month ago',
                  comment: 'The volume bulk discount saved our franchise over $8,000 on our outfitting purchase order. Solid craftsmanship and high quality upholstery.'
                },
                {
                  author: 'Derek Miller',
                  gym: 'OmniFit Studio (Chicago, IL)',
                  rating: 5,
                  date: '2 months ago',
                  comment: 'Top tier B2B equipment. The cable pulley action is smoother than anything else on the commercial market.'
                }
              ].map((rev, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-black text-slate-900 font-heading">{rev.author}</span>
                      <span className="text-xs text-blue-600 font-bold font-mono block">{rev.gym}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 font-black">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 italic pt-2 font-normal">"{rev.comment}"</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-12 border-t border-slate-200">
            <h3 className="text-xl font-black text-slate-900 mb-8 font-heading uppercase">
              Complementary Commercial Equipment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigateTo('product-detail', rel.id)}
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500 transition-all cursor-pointer group shadow-sm hover:shadow-stripe"
                >
                  <img
                    src={rel.image}
                    alt={rel.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                    }}
                    className="w-full h-40 object-cover rounded-xl border border-slate-100 mb-3 group-hover:scale-105 transition-transform"
                  />
                  <div className="text-[10px] font-bold uppercase text-blue-600 font-mono">{rel.brand}</div>
                  <h4 className="text-xs font-black text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                    {rel.name}
                  </h4>
                  <div className="mt-2 text-sm font-black text-slate-900 font-mono">
                    ${rel.price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
