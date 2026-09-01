import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { EQUIPMENT_CATEGORIES } from '../data/categories';
import { Product } from '../types';
import { EquipmentCompareModal } from '../modules/equipment-marketplace/components/EquipmentCompareModal';
import { SEO } from '../components/common/SEO';
import {
  Sparkles,
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
  Phone,
  SlidersHorizontal,
  CheckCircle2,
  Zap,
  Activity,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MarqueeStrip } from '../components/common/MarqueeStrip';

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

  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [modalQuantity, setModalQuantity] = useState(1);

  const fallbackImage = 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80';

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
        const apps = p.applicationTypes || ['Commercial & Residential Gym'];
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
    <main className="pt-24 pb-20 bg-[#0F1926] min-h-screen text-[#E8E8E8]">
      <SEO
        title="Commercial & Residential Equipment Sanctuary | Tanush Fitness B2B"
        description="Factory direct heavy power racks, plate-loaded selectorized machines, cardio consoles, and urethane free weights. 100% itemized RFQ quotations."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2A2A2B] pb-8">
          <div className="space-y-3">
            <h1 className="font-satoshi text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#E8E8E8] tracking-[0.04em] leading-snug">
              EQUIPMENT SANCTUARY
            </h1>

            <p className="text-sm sm:text-base text-[#D0CFCA] max-w-2xl font-sans leading-relaxed">
              Precision-engineered commercial & residential strength lines, selectorized pin-loaded stacks, and Olympic competition platforms. Add items to your project list for official 18% GST ITC procurement quotes.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+917383249680"
              className="btn-primary flex items-center gap-2 text-xs py-3 px-6 shadow-lg cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#0F1926]" />
              <span>Direct Outfitting Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeStrip theme="white" speed="slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Controls Bar: Search & Category Pills */}
        <div className="space-y-4 border-b border-[#2A2A2B] pb-6">
          {/* Search & Brands Strip */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D0CFCA]" />
              <input
                type="text"
                placeholder="Search power racks, cable crossover, dumbbells..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-[#0C1015] border border-[#2A2A2B] rounded-full pl-10 pr-4 py-2.5 text-xs text-[#E8E8E8] placeholder-[#D0CFCA] focus:outline-none focus:border-[#E8E8E8] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#D0CFCA] hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Application Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#D0CFCA] uppercase mr-1 hidden sm:inline font-bold">Facility:</span>
              {['all', 'Commercial & Residential Gym', 'CrossFit Box', 'Hotel & Resort', 'Corporate Campus'].map((app) => (
                <button
                  key={app}
                  type="button"
                  onClick={() => setActiveApplication(app)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
                    activeApplication === app
                      ? 'bg-[#E8E8E8] text-[#0F1926] font-bold shadow-md'
                      : 'bg-[#0C1015] text-[#D0CFCA] border border-[#2A2A2B] hover:border-[#D0CFCA] hover:text-white'
                  }`}
                >
                  {app === 'all' ? 'All Spaces' : app}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#E8E8E8] text-[#0F1926] font-bold shadow-md'
                  : 'bg-[#0C1015] text-[#D0CFCA] border border-[#2A2A2B] hover:border-[#D0CFCA] hover:text-white'
              }`}
            >
              All Machinery ({products.length})
            </button>
            {EQUIPMENT_CATEGORIES.map((cat) => {
              const count = products.filter(p => p.categoryId === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#E8E8E8] text-[#0F1926] font-bold shadow-md'
                      : 'bg-[#0C1015] text-[#D0CFCA] border border-[#2A2A2B] hover:border-[#D0CFCA] hover:text-white'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="opacity-60 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid (3 PER ROW) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isWish = isInWishlist(product.id);
            const isCompared = compareList.some(p => p.id === product.id);

            return (
              <div
                key={product.id}
                className="bg-[#E8E8E8] text-[#0F1926] border border-[#2A2A2B]/10 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#0F1926] transition-all duration-300 shadow-2xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Visual Image Header */}
                  <div
                    onClick={() => handleOpenDetailModal(product)}
                    className="relative aspect-[16/10] w-full overflow-hidden cursor-pointer bg-[#0F1926]"
                  >
                    <img
                      src={product.image || fallbackImage}
                      alt={product.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = fallbackImage;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1926]/60 via-transparent to-transparent" />

                    {/* Bottom Right Steel Spec Pill */}
                    <div className="absolute bottom-3 right-3 bg-[#0F1926] px-2.5 py-1 rounded-md text-[9px] font-mono text-[#E8E8E8] font-bold border border-white/15">
                      ⚡ {product.specs?.['Steel Frame'] || 'HEAVY STEEL FRAME'}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full border transition cursor-pointer ${
                        isWish
                          ? 'bg-[#0F1926] text-[#E8E8E8] border-[#0F1926]'
                          : 'bg-[#0C1015]/80 text-[#D0CFCA] border-white/15 hover:text-white'
                      }`}
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-[11px] font-mono text-[#2A2A2B] uppercase tracking-wider font-bold">
                        {product.brand} // {product.category}
                      </div>

                      <h3
                        onClick={() => handleOpenDetailModal(product)}
                        className="font-satoshi text-base sm:text-lg font-bold uppercase text-[#0F1926] tracking-[0.03em] mt-1 group-hover:text-[#2A2A2B] transition cursor-pointer line-clamp-1 leading-snug"
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-[#2A2A2B]/80 font-sans leading-relaxed mt-2 line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#0F1926]/10 font-mono text-[10px]">
                      <div className="bg-[#0F1926]/5 p-2 rounded-lg border border-[#0F1926]/10">
                        <span className="text-[#2A2A2B] block text-[9px] font-mono uppercase font-semibold">CAPACITY:</span>
                        <span className="text-[#0F1926] font-bold">{product.specs?.['Max Load'] || product.specs?.['Weight Capacity'] || '600 KG'}</span>
                      </div>
                      <div className="bg-[#0F1926]/5 p-2 rounded-lg border border-[#0F1926]/10">
                        <span className="text-[#2A2A2B] block text-[9px] font-mono uppercase font-semibold">WARRANTY:</span>
                        <span className="text-[#0F1926] font-bold">{product.specs?.['Warranty'] || '10 Yrs Frame'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 pt-0 space-y-2.5 border-t border-[#0F1926]/10 mt-3">
                  <button
                    type="button"
                    onClick={() => {
                      addToEnquiryCart(product, 1);
                      setIsEnquiryCartOpen(true);
                    }}
                    className="btn-dark w-full py-2.5 text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Add to RFQ Project List</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenDetailModal(product)}
                      className="border border-[#0F1926]/20 hover:border-[#0F1926] text-[#0F1926] flex-1 py-1.5 text-[11px] font-mono uppercase font-bold rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-colors bg-white/50"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#0F1926]" />
                      <span>CAD Specs</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleToggleCompare(product)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-mono border transition cursor-pointer ${
                        isCompared
                          ? 'bg-[#0F1926] text-white border-[#0F1926] font-bold'
                          : 'bg-transparent text-[#2A2A2B] border-[#0F1926]/20 hover:text-[#0F1926] hover:border-[#0F1926]'
                      }`}
                    >
                      {isCompared ? 'Compared' : 'Compare'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Machinery Detail CAD Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0C1015]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#E8E8E8] text-[#0F1926] border border-[#2A2A2B]/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-8 shadow-2xl"
            >
              <div className="flex items-start justify-between border-b border-[#0F1926]/15 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#2A2A2B] uppercase tracking-widest block mb-1 font-bold">
                    COMMERCIAL & RESIDENTIAL MACHINERY SCHEMATICS // {selectedProduct.brand}
                  </span>
                  <h2 className="font-satoshi text-2xl sm:text-3xl font-extrabold text-[#0F1926] uppercase">
                    {selectedProduct.name}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 rounded-full bg-[#0F1926]/10 hover:bg-[#0F1926]/20 text-[#0F1926] transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Images */}
                <div className="space-y-4">
                  <div className="h-72 rounded-xl overflow-hidden bg-[#0F1926] border border-[#0F1926]/15 shadow-inner">
                    <img
                      src={selectedProduct.gallery?.[selectedImage] || selectedProduct.image || fallbackImage}
                      alt={selectedProduct.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = fallbackImage;
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
                    <div className="flex items-center gap-2">
                      {selectedProduct.gallery.map((img: string, idx: number) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedImage(idx)}
                          className={`w-16 h-16 rounded-xl overflow-hidden cursor-pointer border ${
                            selectedImage === idx ? 'border-[#0F1926] bg-[#0F1926]/10' : 'border-[#0F1926]/15 opacity-60'
                          }`}
                        >
                          <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Specifications & Actions */}
                <div className="space-y-6">
                  <p className="text-sm text-[#2A2A2B] font-sans leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Spec List */}
                  <div className="space-y-2.5 font-mono text-xs text-[#2A2A2B] bg-white p-4 rounded-xl border border-[#0F1926]/15 shadow-sm">
                    <div className="flex justify-between py-1 border-b border-[#0F1926]/10">
                      <span className="text-[#2A2A2B]/70">FRAME STEEL:</span>
                      <span className="text-[#0F1926] font-bold">{selectedProduct.specs?.['Steel Frame'] || 'Heavy Structural Laser Cut'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#0F1926]/10">
                      <span className="text-[#2A2A2B]/70">WEIGHT CAPACITY:</span>
                      <span className="text-[#0F1926] font-bold">{selectedProduct.specs?.['Max Load'] || selectedProduct.specs?.['Weight Capacity'] || '650 KG Tested Load'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#0F1926]/10">
                      <span className="text-[#2A2A2B]/70">FINISH:</span>
                      <span className="text-[#0F1926] font-bold">{selectedProduct.specs?.['Coating'] || 'Dual Electrostatic Powder Coat'}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#2A2A2B]/70">WARRANTY:</span>
                      <span className="text-[#0F1926] font-bold">{selectedProduct.specs?.['Warranty'] || '10 Years Structural Frame'}</span>
                    </div>
                  </div>

                  {/* Quantity & Cart Button */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 bg-white border border-[#0F1926]/20 rounded-full px-4 py-2">
                      <button
                        type="button"
                        onClick={() => setModalQuantity(Math.max(1, modalQuantity - 1))}
                        className="text-[#2A2A2B] hover:text-[#0F1926] font-bold cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-mono text-sm font-bold text-[#0F1926] px-2">{modalQuantity}</span>
                      <button
                        type="button"
                        onClick={() => setModalQuantity(modalQuantity + 1)}
                        className="text-[#2A2A2B] hover:text-[#0F1926] font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        addToEnquiryCart(selectedProduct, modalQuantity);
                        setSelectedProduct(null);
                        setIsEnquiryCartOpen(true);
                      }}
                      className="btn-dark flex-1 py-3 text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Add to Outfitting RFQ Project</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compare Modal */}
      {isCompareModalOpen && (
        <EquipmentCompareModal
          products={compareList}
          isOpen={isCompareModalOpen}
          onClose={() => setIsCompareModalOpen(false)}
          onRemoveItem={(id) => setCompareList(prev => prev.filter(p => p.id !== id))}
        />
      )}
    </main>
  );
};
