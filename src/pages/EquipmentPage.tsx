import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { EQUIPMENT_CATEGORIES } from '../data/categories';
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
  ShieldCheck,
  Download,
  PhoneCall,
  SlidersHorizontal,
  CheckCircle2
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
        alert('You can compare up to 3 commercial machinery models simultaneously.');
        return prev;
      }
      return [...prev, product];
    });
  };

  return (
    <main className="pt-28 pb-20 bg-slate-50 min-h-screen text-slate-900">
      <SEO
        title="Commercial Gym Equipment & Machinery Catalog | Tanush Fitness B2B"
        description="Factory direct 11-gauge power racks, plate-loaded selectorized machines, cardio consoles, and urethane free weights. 100% itemized RFQ quotations."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Master Section Header */}
        <div className="mb-8 border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-200/80 text-slate-800 font-mono text-[11px] font-bold uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span>
            <span>DIRECT INDUSTRIAL PROCUREMENT // ISO 9001:2015 CERTIFIED</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading uppercase">
                Commercial Equipment & Machinery Catalog
              </h1>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl font-normal leading-relaxed">
                Direct factory procurement for health clubs, CrossFit boxes, and athletic centers. Add items to your project list to receive formal itemized GST quotations within 24 hours.
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs shrink-0">
              <a
                href="tel:+919067800048"
                className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                <span>+91 90678 00048</span>
              </a>

              <button
                onClick={() => setIsEnquiryCartOpen(true)}
                className="px-3.5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View RFQ List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase font-mono tracking-wider whitespace-nowrap transition-colors ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            All Categories ({products.length})
          </button>
          {EQUIPMENT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white font-bold'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Faceted Filter Toolbar */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm font-mono text-xs">
          
          {/* Search Input */}
          <div className="sm:col-span-5 relative">
            <input
              type="text"
              placeholder="Search power racks, plate loaded, dumbbells, consoles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 pl-8 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-mono"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>

          {/* Facility Application Filter */}
          <div className="sm:col-span-4 flex items-center gap-1 overflow-x-auto">
            <span className="text-[10px] font-bold text-slate-500 uppercase shrink-0 mr-1">Facility:</span>
            {['all', 'Commercial Gym', 'Hotel & Resort Gym', 'Corporate Wellness Hub'].map(app => (
              <button
                key={app}
                onClick={() => setActiveApplication(app)}
                className={`px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap uppercase transition-colors ${
                  activeApplication === app
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {app === 'all' ? 'All Types' : app.replace(' Gym', '')}
              </button>
            ))}
          </div>

          {/* Manufacturer / Brand Selector */}
          <div className="sm:col-span-3">
            <select
              value={selectedBrand}
              onChange={e => setSelectedBrand(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 font-bold focus:outline-none focus:border-blue-600 font-mono uppercase"
            >
              <option value="all">All Brands ({brandsList.length})</option>
              {brandsList.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Industrial Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isCompared = compareList.some(p => p.id === product.id);
            const inWishlist = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="group rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover-lift overflow-hidden flex flex-col justify-between shadow-sm"
              >
                {/* Product Image & Badges */}
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                    }}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                    {product.badge && (
                      <span className="px-2 py-0.5 rounded bg-slate-900/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-slate-700">
                        {product.badge}
                      </span>
                    )}
                    <span className="px-1.5 py-0.5 rounded bg-blue-900/90 text-blue-200 font-mono text-[9px] font-bold uppercase tracking-wider border border-blue-700">
                      11-GAUGE STEEL
                    </span>
                  </div>

                  {/* Actions Header (Compare + Wishlist) */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
                    <button
                      onClick={() => handleToggleCompare(product)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isCompared
                          ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold'
                          : 'bg-white/95 text-slate-500 border-slate-200 hover:text-slate-900'
                      }`}
                      title={isCompared ? 'In Compare List' : 'Add to Compare'}
                    >
                      <Layers className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        inWishlist
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white/95 text-slate-400 border-slate-200 hover:text-slate-900'
                      }`}
                      title="Add to Project Wishlist"
                    >
                      <Heart className={`w-3.5 h-3.5 ${inWishlist ? 'fill-white' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-blue-800 font-bold uppercase tracking-wide">{product.brand}</span>
                      <div className="flex items-center gap-1 text-slate-700 font-bold">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => handleOpenDetailModal(product)}
                      className="text-base font-bold text-slate-900 hover:text-blue-800 transition-colors leading-snug cursor-pointer line-clamp-1 font-heading"
                    >
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Technical Spec Matrix (2x2 Pillbox) */}
                  <div className="grid grid-cols-2 gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200 text-[10px] font-mono text-slate-700">
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase">Steel Frame</span>
                      <span className="font-bold text-slate-900">11-Gauge 3x3"</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase">Max Load</span>
                      <span className="font-bold text-slate-900">850 KG Tested</span>
                    </div>
                  </div>

                  {/* RFQ Procurement Actions */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="flex items-center gap-1 text-slate-700 font-semibold">
                        <Check className="w-3.5 h-3.5 text-blue-800 stroke-[2.5]" /> Commercial Batch
                      </span>
                      <span className="text-slate-500 font-normal">MOQ: {product.minOrderQty || 1} Unit</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 font-sans">
                      <button
                        onClick={() => addToEnquiryCart(product, 1)}
                        className="w-full py-2 px-2 rounded-lg bg-blue-800 hover:bg-blue-900 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5 text-blue-200" />
                        <span>+ Add to RFQ</span>
                      </button>

                      <button
                        onClick={() => handleOpenDetailModal(product)}
                        className="w-full py-2 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-semibold text-xs flex items-center justify-center gap-1 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-600" />
                        <span>Spec Sheet</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recently Viewed Equipment Bar */}
        {recentlyViewed.length > 0 && (
          <div className="mt-14 pt-6 border-t border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 font-mono uppercase mb-3 flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-blue-700" />
              <span>Recently Viewed Models ({recentlyViewed.length})</span>
            </h3>

            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {recentlyViewed.map(rv => (
                <div
                  key={rv.id}
                  onClick={() => handleOpenDetailModal(rv)}
                  className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200 shrink-0 hover:border-slate-400 cursor-pointer transition-colors shadow-sm"
                >
                  <img src={rv.image} alt={rv.name} className="w-10 h-10 object-cover rounded border border-slate-100" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 uppercase font-heading line-clamp-1">{rv.name}</div>
                    <div className="text-[10px] font-mono text-blue-700 font-semibold">{rv.brand}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900 text-white rounded-lg px-5 py-3 shadow-xl border border-slate-700 flex items-center gap-4 font-mono">
          <div className="flex items-center gap-2 text-xs font-bold">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Compared Models ({compareList.length}/3)</span>
          </div>

          <button
            onClick={() => setIsCompareModalOpen(true)}
            className="px-3.5 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase flex items-center gap-1 shadow-sm transition-colors"
          >
            <span>Compare Specs</span>
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
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-slate-200 relative my-8"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Gallery */}
                <div className="md:col-span-6 space-y-3">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
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
                          className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            selectedImage === idx ? 'border-blue-600 scale-102' : 'border-slate-200 opacity-60'
                          }`}
                        >
                          <img src={img} alt="thumb" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content & Specs */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs font-bold uppercase text-blue-700 font-mono">
                      {selectedProduct.brand} • {selectedProduct.category}
                    </div>
                    <h2 className="text-xl font-extrabold text-slate-900 font-heading uppercase mt-1">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    {/* Applications */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {(selectedProduct.applicationTypes || ['Commercial Gym', 'Hotel & Resort Gym']).map((app, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200">
                          {app}
                        </span>
                      ))}
                    </div>

                    {/* Technical Specification Matrix */}
                    <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                      <div className="text-[10px] font-bold uppercase text-slate-500 font-mono">
                        Technical Specifications & Load Ratings
                      </div>
                      <div className="divide-y divide-slate-200 text-xs font-mono">
                        {Object.entries(selectedProduct.specs).slice(0, 5).map(([k, v]) => (
                          <div key={k} className="py-1 flex justify-between">
                            <span className="text-slate-500">{k}:</span>
                            <span className="font-bold text-slate-900">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* RFQ Order Block */}
                  <div className="space-y-3 pt-3 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase text-slate-700 font-mono">Order Units:</span>
                      <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                        <button
                          onClick={() => setModalQuantity(Math.max(1, modalQuantity - 1))}
                          className="px-2.5 py-0.5 text-slate-700 font-bold hover:bg-slate-200 rounded"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-bold font-mono">
                          {modalQuantity}
                        </span>
                        <button
                          onClick={() => setModalQuantity(modalQuantity + 1)}
                          className="px-2.5 py-0.5 text-slate-700 font-bold hover:bg-slate-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 font-mono">
                      <button
                        onClick={() => {
                          addToEnquiryCart(selectedProduct, modalQuantity);
                          setSelectedProduct(null);
                        }}
                        className="py-2.5 px-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Add to RFQ</span>
                      </button>

                      <button
                        onClick={() => {
                          addToEnquiryCart(selectedProduct, modalQuantity);
                          setSelectedProduct(null);
                          setIsEnquiryCartOpen(true);
                        }}
                        className="py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                      >
                        <Send className="w-3.5 h-3.5 text-blue-400" />
                        <span>Request Quote</span>
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
