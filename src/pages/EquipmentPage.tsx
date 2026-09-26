import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { EQUIPMENT_CATEGORIES } from '../data/categories';
import {
  CATEGORY_SERIES_CONFIG,
  resolveProductSeries,
  MAIN_EQUIPMENT_CATEGORY_IDS,
  MainCategoryId,
  SeriesMeta,
} from '../data/seriesConfig';
import { Product } from '../types';
import { EquipmentCompareModal } from '../modules/equipment-marketplace/components/EquipmentCompareModal';
import { SEO } from '../components/common/SEO';
import {
  FileText,
  Eye,
  Search,
  Dumbbell,
  X,
  Phone,
  SlidersHorizontal,
  Activity,
  ShoppingBag,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MarqueeStrip } from '../components/common/MarqueeStrip';

// Dedicated, memoized Product Card for crisp rendering across all series grids
const EquipmentProductCard: React.FC<{
  product: Product;
  isCompared: boolean;
  fallbackImage: string;
  onOpenDetail: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}> = ({ product, isCompared, fallbackImage, onOpenDetail, onToggleCompare, onAddToCart }) => {
  return (
    <div className="bg-[#E8E8E8] text-[#0F1926] border border-[#2A2A2B]/10 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#0F1926] transition-all duration-300 shadow-2xl hover:-translate-y-1.5">
      <div>
        {/* Machinery Visual Frame */}
        <div
          onClick={() => onOpenDetail(product)}
          className="relative aspect-[16/11] w-full overflow-hidden cursor-pointer bg-[#0C1015] flex items-center justify-center p-4 sm:p-5"
        >
          <img
            src={product.image || fallbackImage}
            alt={product.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallbackImage;
            }}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1015]/30 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Card Content & Taxonomy */}
        <div className="p-6 space-y-4">
          <div>
            <div className="text-[11px] font-mono text-[#2A2A2B] uppercase tracking-wider font-bold flex items-center justify-between">
              <span>{product.brand}</span>
              <span className="opacity-60">{product.series || product.category}</span>
            </div>

            <h3
              onClick={() => onOpenDetail(product)}
              className="font-satoshi text-base sm:text-lg font-bold uppercase text-[#0F1926] tracking-[0.03em] mt-1 group-hover:text-[#2A2A2B] transition cursor-pointer line-clamp-1 leading-snug"
              title={product.name}
            >
              {product.name}
            </h3>

            <p className="text-xs text-[#2A2A2B]/80 font-sans leading-relaxed mt-2 line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 space-y-2.5 border-t border-[#0F1926]/10 mt-3">
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="btn-dark w-full py-2.5 text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Add to RFQ Project List</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenDetail(product)}
            className="border border-[#0F1926]/20 hover:border-[#0F1926] text-[#0F1926] flex-1 py-1.5 text-[11px] font-mono uppercase font-bold rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-colors bg-white/50"
          >
            <Eye className="w-3.5 h-3.5 text-[#0F1926]" />
            <span>CAD Specs</span>
          </button>
          <button
            type="button"
            onClick={() => onToggleCompare(product)}
            className={`border flex-1 py-1.5 text-[11px] font-mono uppercase font-bold rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
              isCompared
                ? 'border-[#0F1926] bg-[#0F1926] text-white'
                : 'border-[#0F1926]/20 hover:border-[#0F1926] text-[#0F1926] bg-white/50'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{isCompared ? 'Comparing' : 'Compare'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const EquipmentPage: React.FC = () => {
  const {
    products,
    enquiryCart,
    addToEnquiryCart,
    setIsEnquiryCartOpen,
    filters,
    setFilter,
  } = useApp();

  // Primary Category defaults to 'cardio' or filters.category if specified
  const [activeCategory, setActiveCategory] = useState<string>(filters.category || 'cardio');
  const [activeSeries, setActiveSeries] = useState<string>('all');
  const [activeApplication, setActiveApplication] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [modalQuantity, setModalQuantity] = useState(1);

  const fallbackImage = 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80';

  // Sync with global filter state if navigated from homepage/navbar
  useEffect(() => {
    if (filters.category && filters.category !== activeCategory) {
      setActiveCategory(filters.category);
      setActiveSeries('all');
    }
  }, [filters.category]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setActiveSeries('all');
    setFilter('category', catId);
  };

  // Base filtered products (Search & Facility filters)
  const baseFilteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (activeApplication !== 'all') {
        const apps = p.applicationTypes || ['Commercial & Residential Gym'];
        if (!apps.includes(activeApplication as any)) return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchCat = p.category.toLowerCase().includes(q);
        const matchSeries = (p.series || '').toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchCat && !matchSeries) return false;
      }
      return true;
    });
  }, [products, activeApplication, searchQuery]);

  // Lock body scroll when detail modal is active
  useEffect(() => {
    if (selectedProduct) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedProduct]);

  const handleNestedScrollWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const target = e.currentTarget;
    const isDown = e.deltaY > 0;
    const isUp = e.deltaY < 0;
    const isAtBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 1;
    const isAtTop = target.scrollTop <= 0;

    if ((isDown && isAtBottom) || (isUp && isAtTop)) {
      e.preventDefault();
    }
  };

  const handleOpenDetailModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedImage(0);
    setModalQuantity(1);
  };

  const handleToggleCompare = (product: Product) => {
    setCompareList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      if (prev.length >= 3) {
        alert('You can compare up to 3 commercial machinery models simultaneously.');
        return prev;
      }
      return [...prev, product];
    });
  };

  // Define Primary Spotlight Categories
  const primaryCategories = [
    {
      id: 'cardio',
      name: 'CARDIO',
      sublabel: 'Matrix Performance, Indurance & Lifestyle',
      icon: Activity,
      count: products.filter(p => p.categoryId === 'cardio').length,
    },
    {
      id: 'strength',
      name: 'STRENGTH',
      sublabel: 'Ultra, Versa, Aura, Go, Magnum, Jeevan, Versity',
      icon: Dumbbell,
      count: products.filter(p => p.categoryId === 'strength').length,
    },
    {
      id: 'vision',
      name: 'VISION',
      sublabel: 'Vision 60, 30 & Dual Strength Series',
      icon: Eye,
      count: products.filter(p => p.categoryId === 'vision').length,
    },
  ];

  // Check if active category is one of the 3 main series-organized categories
  const isMainCategory = MAIN_EQUIPMENT_CATEGORY_IDS.includes(activeCategory as MainCategoryId);

  // Get series configuration for the active main category
  const activeSeriesList: SeriesMeta[] = useMemo(() => {
    if (isMainCategory) {
      return CATEGORY_SERIES_CONFIG[activeCategory as MainCategoryId];
    }
    return [];
  }, [activeCategory, isMainCategory]);

  return (
    <main className="pt-24 pb-20 bg-[#0F1926] min-h-screen text-[#E8E8E8]">
      <SEO
        title="Commercial & Residential Equipment Sanctuary | Series-Wise Outfitting | Tanush Fitness B2B"
        description="Official series-wise procurement catalog for Matrix Cardio (Performance, Indurance, Lifestyle), Matrix Strength (Ultra, Versa, Aura, Go, Magnum, Jeevan, Versity), and Vision Fitness."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2A2A2B] pb-8">
          <div className="space-y-3">
            <h1 className="font-satoshi text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#E8E8E8] tracking-[0.04em] leading-snug">
              EQUIPMENT SANCTUARY
            </h1>
            <p className="text-sm sm:text-base text-[#D0CFCA] max-w-2xl font-sans leading-relaxed">
              Explore India's premier commercial fitness equipment catalog organized series-wise across <strong className="text-white">Cardio</strong>, <strong className="text-white">Strength</strong>, and <strong className="text-white">Vision</strong>. Add items directly to your project list for official 18% GST ITC procurement quotes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsEnquiryCartOpen(true)}
              className="btn-primary flex items-center gap-2 text-xs py-3 px-6 shadow-lg cursor-pointer group"
              title="Open Project RFQ Basket"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#0F1926] group-hover:scale-110 transition-transform" />
              <span>Project RFQ Basket</span>
              {enquiryCart.length > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-[#0F1926] text-[#E8E8E8] text-[10px] font-mono font-bold">
                  {enquiryCart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>

            <a
              href="tel:+917383249680"
              className="btn-dark flex items-center gap-2 text-xs py-3 px-6 shadow-lg cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8E8E8]" />
              <span>Direct Outfitting Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeStrip theme="white" speed="slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* ========================================================================= */}
        {/* 1. MAIN CATEGORY SHOWCASE SELECTOR (CARDIO, STRENGTH, VISION)            */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D0CFCA] font-bold">
              <Filter className="w-3.5 h-3.5 text-emerald-400" />
              <span>SELECT PRIMARY EQUIPMENT DISCIPLINE</span>
            </div>
            {activeCategory !== 'all' && (
              <button
                type="button"
                onClick={() => handleCategoryChange('all')}
                className="text-xs font-mono text-[#D0CFCA] hover:text-white underline cursor-pointer"
              >
                View All Machinery ({products.length})
              </button>
            )}
          </div>

          {/* 3 Main Spotlight Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {primaryCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const IconComp = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                    isActive
                      ? 'bg-[#E8E8E8] text-[#0F1926] border-[#E8E8E8] shadow-2xl scale-[1.02]'
                      : 'bg-[#0C1015] text-[#E8E8E8] border-[#2A2A2B] hover:bg-[#E8E8E8] hover:text-[#0F1926] hover:border-[#E8E8E8] hover:shadow-2xl hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#0F1926] text-[#E8E8E8]'
                          : 'bg-white/10 text-white group-hover:bg-[#0F1926] group-hover:text-[#E8E8E8]'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full transition-colors ${
                        isActive
                          ? 'bg-[#0F1926]/10 text-[#0F1926]'
                          : 'bg-white/10 text-[#D0CFCA] group-hover:bg-[#0F1926]/10 group-hover:text-[#0F1926]'
                      }`}
                    >
                      {cat.count} Units
                    </span>
                  </div>

                  <h2 className="font-satoshi text-xl font-black uppercase tracking-wider transition-colors">
                    {cat.name}
                  </h2>
                  <p
                    className={`text-xs mt-1 font-sans line-clamp-1 transition-colors ${
                      isActive ? 'text-[#0F1926]/80' : 'text-[#D0CFCA] group-hover:text-[#0F1926]/80'
                    }`}
                  >
                    {cat.sublabel}
                  </p>

                  <div className={`mt-4 flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                    isActive ? 'text-[#0F1926]' : 'text-[#E8E8E8] group-hover:text-[#0F1926]'
                  }`}>
                    <span>{isActive ? 'Active Category' : 'Browse Series'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Secondary Categories Pill Strip (Free Weights, Flooring, Functional, etc.) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 scrollbar-none">
            <button
              type="button"
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#E8E8E8] text-[#0F1926] font-bold shadow-md'
                  : 'bg-[#0C1015] text-[#D0CFCA] border border-[#2A2A2B] hover:border-[#D0CFCA] hover:text-white'
              }`}
            >
              All Machinery ({products.length})
            </button>
            {EQUIPMENT_CATEGORIES.filter(cat => !MAIN_EQUIPMENT_CATEGORY_IDS.includes(cat.id as any)).map((cat) => {
              const count = products.filter(p => p.categoryId === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${
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

        {/* ========================================================================= */}
        {/* 2. SEARCH & FACILITY APPLICATION BAR                                     */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-y border-[#2A2A2B] py-5">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D0CFCA]" />
            <input
              type="text"
              placeholder="Search equipment model, series, or feature..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[#0C1015] border border-[#2A2A2B] rounded-full pl-10 pr-4 py-2 text-xs text-[#E8E8E8] placeholder-[#D0CFCA] focus:outline-none focus:border-[#E8E8E8] transition-colors"
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

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#D0CFCA] uppercase mr-1 hidden sm:inline font-bold">Space:</span>
            {['all', 'Commercial & Residential Gym', 'CrossFit Box', 'Hotel & Resort', 'Corporate Campus'].map((app) => (
              <button
                key={app}
                type="button"
                onClick={() => setActiveApplication(app)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
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

        {/* ========================================================================= */}
        {/* 3. SERIES QUICK-JUMP ANCHOR PILLS (WHEN IN CARDIO, STRENGTH, OR VISION)   */}
        {/* ========================================================================= */}
        {isMainCategory && activeSeriesList.length > 0 && (
          <div className="space-y-2.5 bg-[#0C1015]/80 border border-[#2A2A2B] p-4 rounded-2xl">
            <div className="flex items-center justify-between text-xs font-mono text-[#D0CFCA]">
              <span className="uppercase font-bold tracking-wider">
                SERIES SELECTION // {activeCategory.toUpperCase()}
              </span>
              <span>{activeSeriesList.length} Series Lines</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveSeries('all')}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition cursor-pointer ${
                  activeSeries === 'all'
                    ? 'bg-[#E8E8E8] text-[#0F1926] font-bold shadow-md'
                    : 'bg-[#0F1926] text-[#D0CFCA] border border-[#2A2A2B] hover:border-[#D0CFCA] hover:text-white'
                }`}
              >
                All Series ({baseFilteredProducts.filter(p => p.categoryId === activeCategory).length})
              </button>
              {activeSeriesList.map((series, idx) => {
                const sProds = baseFilteredProducts.filter(p => p.categoryId === activeCategory && resolveProductSeries(p) === series.id);
                const isActive = activeSeries === series.id;
                return (
                  <button
                    key={series.id}
                    type="button"
                    onClick={() => {
                      setActiveSeries(series.id);
                      const el = document.getElementById(`series-${series.id}`);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#E8E8E8] text-[#0F1926] font-bold shadow-md'
                        : 'bg-[#0F1926] text-[#D0CFCA] border border-[#2A2A2B] hover:border-[#D0CFCA] hover:text-white'
                    }`}
                  >
                    <span className="opacity-60 text-[10px]">0{idx + 1}.</span>
                    <span>{series.name}</span>
                    <span className="opacity-60 text-[10px]">({sProds.length})</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. PRODUCT DISPLAY: GROUPED SERIES-WISE IN EXACT REQUIRED ORDER          */}
        {/* ========================================================================= */}
        <div className="space-y-16">
          {/* CASE A: Active Category is a Main Category (Cardio, Strength, Vision) */}
          {isMainCategory && (
            <div className="space-y-14">
              {activeSeriesList.map((series, sIdx) => {
                // If a specific series is isolated, skip others
                if (activeSeries !== 'all' && activeSeries !== series.id) {
                  return null;
                }

                const seriesProducts = baseFilteredProducts.filter(
                  p => p.categoryId === activeCategory && resolveProductSeries(p) === series.id
                );

                // If searching and this series has 0 matches, skip
                if (searchQuery && seriesProducts.length === 0) {
                  return null;
                }

                return (
                  <section
                    key={series.id}
                    id={`series-${series.id}`}
                    className="space-y-6 pt-2 scroll-mt-28"
                  >
                    {/* Series Header Card */}
                    <div className="bg-[#0C1015] border border-[#2A2A2B] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded bg-[#E8E8E8]/10 text-[#E8E8E8] font-mono text-[11px] font-bold uppercase tracking-wider border border-white/10">
                            SERIES 0{sIdx + 1}
                          </span>
                          <span className="text-[#D0CFCA] font-mono text-xs">
                            // {activeCategory.toUpperCase()} PROCUREMENT
                          </span>
                        </div>
                        <h2 className="font-satoshi text-xl sm:text-2xl font-black uppercase text-[#E8E8E8] tracking-[0.03em]">
                          {series.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#D0CFCA] font-sans max-w-2xl leading-relaxed">
                          {series.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="px-4 py-2 rounded-full bg-[#1A2018] border border-white/10 text-xs font-mono text-[#E8E8E8]">
                          <span className="font-bold">{seriesProducts.length}</span> {seriesProducts.length === 1 ? 'Unit' : 'Units'} Available
                        </div>
                      </div>
                    </div>

                    {/* 3-Per-Row Machinery Grid */}
                    {seriesProducts.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {seriesProducts.map((product) => (
                          <EquipmentProductCard
                            key={product.id}
                            product={product}
                            isCompared={compareList.some(p => p.id === product.id)}
                            fallbackImage={fallbackImage}
                            onOpenDetail={handleOpenDetailModal}
                            onToggleCompare={handleToggleCompare}
                            onAddToCart={(prod) => {
                              addToEnquiryCart(prod, 1);
                              setIsEnquiryCartOpen(true);
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="p-8 text-center bg-[#0C1015]/60 border border-[#2A2A2B] rounded-xl text-xs font-mono text-[#D0CFCA]">
                        No machinery currently matches your active filter in this series line.
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          )}

          {/* CASE B: 'all' category is active -> Display Cardio, Strength, Vision series-wise, then others */}
          {activeCategory === 'all' && (
            <div className="space-y-20">
              {MAIN_EQUIPMENT_CATEGORY_IDS.map((catKey) => {
                const seriesList = CATEGORY_SERIES_CONFIG[catKey];
                const catProducts = baseFilteredProducts.filter(p => p.categoryId === catKey);

                if (catProducts.length === 0) return null;

                return (
                  <div key={catKey} className="space-y-10 border-b border-[#2A2A2B] pb-14">
                    {/* Series within this category in required order */}
                    <div className="space-y-12">
                      {seriesList.map((series, sIdx) => {
                        const seriesProducts = catProducts.filter(p => resolveProductSeries(p) === series.id);
                        if (seriesProducts.length === 0) return null;

                        return (
                          <div key={series.id} className="space-y-6">
                            <div className="flex items-center justify-between bg-[#0C1015] p-5 rounded-xl border border-[#2A2A2B]">
                              <div>
                                <span className="text-[10px] font-mono uppercase font-bold text-[#D0CFCA]">
                                  SERIES 0{sIdx + 1}
                                </span>
                                <h3 className="font-satoshi text-lg font-bold uppercase text-[#E8E8E8]">
                                  {series.name}
                                </h3>
                              </div>
                              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white font-bold">
                                {seriesProducts.length} {seriesProducts.length === 1 ? 'Unit' : 'Units'}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                              {seriesProducts.map((product) => (
                                <EquipmentProductCard
                                  key={product.id}
                                  product={product}
                                  isCompared={compareList.some(p => p.id === product.id)}
                                  fallbackImage={fallbackImage}
                                  onOpenDetail={handleOpenDetailModal}
                                  onToggleCompare={handleToggleCompare}
                                  onAddToCart={(prod) => {
                                    addToEnquiryCart(prod, 1);
                                    setIsEnquiryCartOpen(true);
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Other Auxiliary Categories (Free Weights, Flooring, Functional, etc.) */}
              {EQUIPMENT_CATEGORIES.filter(cat => !MAIN_EQUIPMENT_CATEGORY_IDS.includes(cat.id as any)).map((cat) => {
                const catProducts = baseFilteredProducts.filter(p => p.categoryId === cat.id);
                if (catProducts.length === 0) return null;

                return (
                  <div key={cat.id} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#2A2A2B] pb-3">
                      <div>
                        <span className="text-[10px] font-mono text-[#D0CFCA] uppercase font-bold tracking-widest">
                          SPECIALIZED SECTOR
                        </span>
                        <h3 className="font-satoshi text-xl font-bold uppercase text-[#E8E8E8]">
                          {cat.name}
                        </h3>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0C1015] border border-[#2A2A2B] text-white">
                        {catProducts.length} Units
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {catProducts.map((product) => (
                        <EquipmentProductCard
                          key={product.id}
                          product={product}
                          isCompared={compareList.some(p => p.id === product.id)}
                          fallbackImage={fallbackImage}
                          onOpenDetail={handleOpenDetailModal}
                          onToggleCompare={handleToggleCompare}
                          onAddToCart={(prod) => {
                            addToEnquiryCart(prod, 1);
                            setIsEnquiryCartOpen(true);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* CASE C: An auxiliary category (e.g. Free Weights, Flooring) is active */}
          {!isMainCategory && activeCategory !== 'all' && (
            <div className="space-y-6">
              {(() => {
                const catObj = EQUIPMENT_CATEGORIES.find(c => c.id === activeCategory);
                const prods = baseFilteredProducts.filter(p => p.categoryId === activeCategory);

                return (
                  <>
                    <div className="bg-[#0C1015] border border-[#2A2A2B] rounded-2xl p-6 flex items-center justify-between">
                      <div>
                        <h2 className="font-satoshi text-2xl font-black uppercase text-[#E8E8E8]">
                          {catObj?.name || activeCategory}
                        </h2>
                        <p className="text-xs text-[#D0CFCA] mt-1 font-sans">
                          {catObj?.description}
                        </p>
                      </div>
                      <span className="text-xs font-mono px-4 py-2 rounded-full bg-white/10 text-white font-bold">
                        {prods.length} Units
                      </span>
                    </div>

                    {prods.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {prods.map((product) => (
                          <EquipmentProductCard
                            key={product.id}
                            product={product}
                            isCompared={compareList.some(p => p.id === product.id)}
                            fallbackImage={fallbackImage}
                            onOpenDetail={handleOpenDetailModal}
                            onToggleCompare={handleToggleCompare}
                            onAddToCart={(prod) => {
                              addToEnquiryCart(prod, 1);
                              setIsEnquiryCartOpen(true);
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="p-12 text-center bg-[#0C1015] border border-[#2A2A2B] rounded-2xl text-xs font-mono text-[#D0CFCA]">
                        No machinery currently matches your filter in this category.
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          )}
        </div>

        {/* Global Empty State */}
        {baseFilteredProducts.length === 0 && (
          <div className="py-20 text-center space-y-4 bg-[#0C1015] rounded-3xl border border-[#2A2A2B]">
            <Dumbbell className="w-12 h-12 text-[#D0CFCA] mx-auto opacity-50" />
            <h3 className="font-satoshi text-xl font-bold uppercase text-[#E8E8E8]">
              No machinery found
            </h3>
            <p className="text-xs text-[#D0CFCA] font-mono max-w-md mx-auto">
              No equipment matching your active filters. Clear search or select another category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveApplication('all');
                setActiveCategory('cardio');
                setActiveSeries('all');
              }}
              className="btn-primary text-xs py-2 px-6"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* CAD SPECS / DETAIL MODAL                                                  */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-hidden"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#E8E8E8] text-[#0F1926] rounded-2xl sm:rounded-3xl border border-[#2A2A2B]/20 w-full max-w-5xl h-[94vh] sm:h-[88vh] flex flex-col overflow-hidden shadow-2xl relative"
            >
              {/* Top Header */}
              <div className="px-5 sm:px-8 py-3.5 sm:py-4 border-b border-[#0F1926]/10 flex items-center justify-between bg-white shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs uppercase font-bold text-[#0F1926] tracking-wider">
                    {selectedProduct.brand} // {selectedProduct.series || selectedProduct.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="p-1.5 rounded-full hover:bg-black/5 text-[#0F1926] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-0 overflow-hidden">
                {/* Left Visual Column */}
                <div className="lg:col-span-6 bg-[#0C1015] p-6 sm:p-8 flex flex-col justify-between items-center relative overflow-hidden shrink-0 lg:shrink min-h-[260px] lg:min-h-0">
                  <div className="w-full flex justify-between items-center z-10">
                    <span className="px-2.5 py-1 rounded bg-[#E8E8E8]/10 text-[#E8E8E8] font-mono text-[10px] font-bold border border-white/10 uppercase">
                      18% GST ITC Certified
                    </span>
                    <span className="text-[#D0CFCA] font-mono text-xs">
                      Pan-India Logistics
                    </span>
                  </div>

                  <div className="my-auto relative w-full aspect-[4/3] flex items-center justify-center p-4">
                    <img
                      src={selectedProduct.gallery?.[selectedImage] || selectedProduct.image || fallbackImage}
                      alt={selectedProduct.name}
                      onError={e => { (e.target as HTMLImageElement).src = fallbackImage; }}
                      className="max-h-full max-w-full object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Gallery Thumbs */}
                  {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
                    <div className="flex items-center gap-2 mt-4 z-10">
                      {selectedProduct.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedImage(idx)}
                          className={`w-12 h-12 rounded-lg border overflow-hidden p-1 bg-black/40 transition cursor-pointer ${
                            selectedImage === idx ? 'border-white' : 'border-white/20 opacity-50'
                          }`}
                        >
                          <img src={img} alt="thumb" className="w-full h-full object-contain" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Specs Column */}
                <div
                  onWheel={handleNestedScrollWheel}
                  data-lenis-prevent="true"
                  className="lg:col-span-6 p-5 sm:p-8 overflow-y-auto overscroll-contain flex flex-col justify-between space-y-4 sm:space-y-6 bg-[#E8E8E8] light-scrollbar"
                >
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="font-satoshi text-lg sm:text-2xl font-black uppercase text-[#0F1926] leading-tight">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#2A2A2B]/85 font-sans leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    {/* Features List */}
                    {selectedProduct.features && selectedProduct.features.length > 0 && (
                      <div className="space-y-2 pt-1">
                        <span className="font-mono text-[10px] uppercase font-bold text-[#0F1926] tracking-wider block">
                          Engineering Highlights
                        </span>
                        <div className="space-y-1.5">
                          {selectedProduct.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-[#2A2A2B]/90 font-sans">
                              <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Specifications Grid */}
                    <div className="space-y-2 pt-2 border-t border-[#0F1926]/10">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#0F1926] tracking-wider block">
                        Technical Specifications
                      </span>
                      <div className="grid grid-cols-1 gap-1.5 font-mono text-xs">
                        {Object.entries(selectedProduct.specs || {}).map(([key, val]) => (
                          <div key={key} className="grid grid-cols-12 py-1 border-b border-[#0F1926]/5">
                            <span className="col-span-5 text-[#2A2A2B] text-[10px] uppercase font-semibold">
                              {key}:
                            </span>
                            <span className="col-span-7 text-[#0F1926] font-bold text-[11px] leading-snug break-words">
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quantity & Cart Action */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2 border-t border-[#0F1926]/10">
                    <div className="flex items-center justify-between sm:justify-center gap-3 bg-white border border-[#0F1926]/20 rounded-xl px-4 py-2.5 shrink-0 shadow-sm">
                      <button
                        type="button"
                        onClick={() => setModalQuantity(Math.max(1, modalQuantity - 1))}
                        className="text-[#2A2A2B] hover:text-[#0F1926] font-bold text-base px-2 cursor-pointer transition hover:scale-110"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="font-mono text-sm font-bold text-[#0F1926] px-2 min-w-[1.5rem] text-center">
                        {modalQuantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setModalQuantity(modalQuantity + 1)}
                        className="text-[#2A2A2B] hover:text-[#0F1926] font-bold text-base px-2 cursor-pointer transition hover:scale-110"
                        aria-label="Increase quantity"
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
                      className="btn-dark flex-1 py-3 px-4 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl transition-all !whitespace-normal text-center leading-snug rounded-xl"
                    >
                      <FileText className="w-4 h-4 shrink-0" />
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
