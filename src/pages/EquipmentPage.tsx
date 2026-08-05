import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { EQUIPMENT_CATEGORIES } from '../data/categories';
import { Badge } from '../components/common/Badge';
import { Product } from '../types';
import { EquipmentCompareModal } from '../modules/equipment-marketplace/components/EquipmentCompareModal';
import { SEO } from '../components/common/SEO';
import {
  Star,
  FileText,
  Eye,
  Heart,
  Search,
  Check,
  Dumbbell,
  Send,
  X,
  Layers,
  ArrowRight,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const EquipmentPage: React.FC = () => {
  const {
    products,
    addToEnquiryCart,
    toggleWishlist,
    isInWishlist,
    setIsEnquiryCartOpen,
  } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeApplication, setActiveApplication] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Compare Equipment State (up to 3 items)
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Recently Viewed State
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);

  // Selected Product Detail Modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [modalQuantity, setModalQuantity] = useState(1);

  const fallbackImage = 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80';

  // Extract unique brands
  const brandsList = useMemo(() => {
    return Array.from(new Set(products.map(p => p.brand)));
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (activeCategory !== 'all' && p.categoryId !== activeCategory) {
        return false;
      }
      if (selectedBrand !== 'all' && p.brand !== selectedBrand) {
        return false;
      }
      if (activeApplication !== 'all') {
        const apps = p.applicationTypes || ['Commercial Gym'];
        if (!apps.includes(activeApplication as any)) return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchCat = p.category.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchCat) return false;
      }
      return true;
    });
  }, [activeCategory, selectedBrand, activeApplication, searchQuery]);

  const handleOpenDetailModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedImage(0);
    setModalQuantity(1);

    // Track Recently Viewed
    setRecentlyViewed(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      return [product, ...filtered].slice(0, 5);
    });
  };

  const handleToggleCompare = (product: Product) => {
    setCompareList(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      if (prev.length >= 3) {
        alert('You can compare up to 3 commercial models at a time.');
        return prev;
      }
      return [...prev, product];
    });
  };

  return (
    <main className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <SEO
        title="Commercial Gym Equipment Catalog | Tanush Fitness B2B"
        description="Browse ISO-certified strength machinery, curved treadmills, urethane weights, and lockers. Zero online prices with direct RFQ quotation requests."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[3px] bg-blue-600 rounded-full" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 font-mono">
              BUSINESS 1: COMMERCIAL GYM EQUIPMENT
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading uppercase">
            Commercial Equipment & Machinery Catalog
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl font-normal">
            Browse ISO-certified heavy strength racks, selectorized stacks, curved treadmills, & urethane weights. Select items and click <strong>"Request Quotation"</strong> for formal wholesale pricing.
          </p>
        </div>

        {/* 7 Equipment Category Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-6 scrollbar-none border-b border-slate-200">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase font-mono tracking-wider whitespace-nowrap transition-all shadow-sm ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            All 7 Categories
          </button>
          {EQUIPMENT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shadow-sm ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Faceted Filter Toolbar: Search, Application Filter, Brand Filter */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm font-mono text-xs">
          {/* Search */}
          <div className="sm:col-span-5 relative">
            <input
              type="text"
              placeholder="Search power racks, dumbbells, treadmills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 pl-9 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-mono"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>

          {/* Application Filter */}
          <div className="sm:col-span-4 flex items-center gap-1 overflow-x-auto">
            <span className="text-[10px] font-bold text-slate-500 uppercase shrink-0 mr-1">App:</span>
            {['all', 'Commercial Gym', 'Hotel & Resort Gym', 'Corporate Wellness Hub'].map(app => (
              <button
                key={app}
                onClick={() => setActiveApplication(app)}
                className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold whitespace-nowrap uppercase transition-all ${
                  activeApplication === app
                    ? 'bg-slate-900 text-white font-black'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {app === 'all' ? 'All Facilities' : app.replace(' Gym', '')}
              </button>
            ))}
          </div>

          {/* Brand Selector */}
          <div className="sm:col-span-3">
            <select
              value={selectedBrand}
              onChange={e => setSelectedBrand(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-bold focus:outline-none focus:border-blue-600 font-mono uppercase"
            >
              <option value="all">All Brands ({brandsList.length})</option>
              {brandsList.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isCompared = compareList.some(p => p.id === product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
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

                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    {/* Compare Button */}
                    <button
                      onClick={() => handleToggleCompare(product)}
                      className={`p-2 rounded-full border backdrop-blur-md transition-all shadow-sm ${
                        isCompared
                          ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold'
                          : 'bg-white/90 text-slate-500 border-slate-200 hover:text-slate-900'
                      }`}
                      title={isCompared ? 'In Compare List' : 'Add to Compare'}
                    >
                      <Layers className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-2 rounded-full border backdrop-blur-md transition-all shadow-sm ${
                        isInWishlist(product.id)
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white/90 text-slate-400 border-slate-200 hover:text-slate-900'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isInWishlist(product.id) ? 'fill-white' : ''}`} />
                    </button>
                  </div>
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
                      onClick={() => handleOpenDetailModal(product)}
                      className="text-sm font-black text-slate-900 hover:text-blue-600 transition-colors leading-snug cursor-pointer line-clamp-2 font-heading uppercase"
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
                        onClick={() => handleOpenDetailModal(product)}
                        className="w-full py-2.5 px-2 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-900 font-black text-xs font-mono uppercase flex items-center justify-center gap-1 transition-all"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Enquire Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recently Viewed Equipment Bar */}
        {recentlyViewed.length > 0 && (
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="text-sm font-black text-slate-900 font-mono uppercase mb-4 flex items-center gap-2">
              <Eye className="w-4 h-4 text-blue-600" />
              <span>Recently Viewed Models ({recentlyViewed.length})</span>
            </h3>

            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
              {recentlyViewed.map(rv => (
                <div
                  key={rv.id}
                  onClick={() => handleOpenDetailModal(rv)}
                  className="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-slate-200 shrink-0 hover:border-blue-500 cursor-pointer transition-all shadow-sm"
                >
                  <img src={rv.image} alt={rv.name} className="w-12 h-12 object-cover rounded-xl border border-slate-100" />
                  <div>
                    <div className="text-xs font-black text-slate-900 uppercase font-heading line-clamp-1">{rv.name}</div>
                    <div className="text-[10px] font-mono text-blue-600">{rv.brand}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900 text-white rounded-full px-6 py-3.5 shadow-2xl border border-slate-700 flex items-center gap-4 font-mono">
          <div className="flex items-center gap-2 text-xs font-bold">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Compared Models ({compareList.length}/3)</span>
          </div>

          <button
            onClick={() => setIsCompareModalOpen(true)}
            className="px-4 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black uppercase flex items-center gap-1 shadow-md"
          >
            <span>Compare Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setCompareList([])}
            className="text-slate-400 hover:text-white p-1"
            title="Clear compare list"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Equipment Compare Modal */}
      <EquipmentCompareModal
        products={compareList}
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        onRemoveItem={(id) => setCompareList(prev => prev.filter(p => p.id !== id))}
      />

      {/* Equipment Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-slate-200 relative my-8"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Gallery */}
                <div className="md:col-span-6 space-y-3">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                    <img
                      src={selectedProduct.gallery[selectedImage] || selectedProduct.image}
                      alt={selectedProduct.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = fallbackImage;
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {selectedProduct.gallery.length > 1 && (
                    <div className="flex gap-2">
                      {selectedProduct.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(idx)}
                          className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                            selectedImage === idx ? 'border-blue-600 scale-105' : 'border-slate-200 opacity-60'
                          }`}
                        >
                          <img src={img} alt="thumb" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs font-bold uppercase text-blue-600 font-mono">
                      {selectedProduct.brand} • {selectedProduct.category}
                    </div>
                    <h2 className="text-xl font-black text-slate-900 font-heading uppercase mt-1">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                      {selectedProduct.description}
                    </p>

                    {/* Applications */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {(selectedProduct.applicationTypes || ['Commercial Gym', 'Hotel & Resort Gym']).map((app, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-100">
                          {app}
                        </span>
                      ))}
                    </div>

                    {/* Specs Table */}
                    <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="text-[10px] font-bold uppercase text-slate-500 font-mono">
                        Key Specifications
                      </div>
                      <div className="divide-y divide-slate-200 text-xs font-mono">
                        {Object.entries(selectedProduct.specs).slice(0, 5).map(([k, v]) => (
                          <div key={k} className="py-1 flex justify-between">
                            <span className="text-slate-500 font-medium">{k}:</span>
                            <span className="font-bold text-slate-900 font-mono">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-3 border-t border-slate-200">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase text-slate-700 font-mono">Quantity:</span>
                      <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
                        <button
                          onClick={() => setModalQuantity(Math.max(1, modalQuantity - 1))}
                          className="px-2 py-0.5 text-slate-600 font-bold"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-black font-mono">
                          {modalQuantity}
                        </span>
                        <button
                          onClick={() => setModalQuantity(modalQuantity + 1)}
                          className="px-2 py-0.5 text-slate-600 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 font-mono">
                      <button
                        onClick={() => {
                          addToEnquiryCart(selectedProduct, modalQuantity);
                          setSelectedProduct(null);
                        }}
                        className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Add to Enquiry Cart</span>
                      </button>

                      <button
                        onClick={() => {
                          addToEnquiryCart(selectedProduct, modalQuantity);
                          setSelectedProduct(null);
                          setIsEnquiryCartOpen(true);
                        }}
                        className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                      >
                        <Send className="w-4 h-4 text-blue-400" />
                        <span>Request Quotation</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};
