import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { FilterSidebar } from '../components/marketplace/FilterSidebar';
import { CategoryComingSoon } from '../components/marketplace/CategoryComingSoon';
import { SkeletonCard } from '../components/common/SkeletonCard';
import { Badge } from '../components/common/Badge';
import { PRODUCTS } from '../data/products';
import { EQUIPMENT_CATEGORIES } from '../data/categories';
import { Star, ShoppingBag, Eye, Heart, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const MarketplacePage: React.FC = () => {
  const {
    filters,
    setFilter,
    resetFilters,
    addToCart,
    openQuickView,
    toggleWishlist,
    isInWishlist,
    navigateTo,
    isLoading,
  } = useApp();

  const activeCategoryTile = EQUIPMENT_CATEGORIES.find(c => c.id === filters.category);
  const fallbackImage = 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80';

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Category filter
      if (filters.category !== 'all' && p.categoryId !== filters.category) {
        return false;
      }
      // Search query
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchCat = p.category.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchCat) return false;
      }
      // Brands
      if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) {
        return false;
      }
      // Price range
      if (p.price > filters.priceRange[1]) {
        return false;
      }
      // Rating
      if (filters.minRating > 0 && p.rating < filters.minRating) {
        return false;
      }
      // Stock
      if (filters.inStockOnly && !p.inStock) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-low') return a.price - b.price;
      if (filters.sortBy === 'price-high') return b.price - a.price;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [filters]);

  return (
    <main className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Marketplace Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[3px] bg-blue-600 rounded-full" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 font-mono">
              Commercial B2B Equipment Catalog
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading uppercase">
            {activeCategoryTile && filters.category !== 'all' ? activeCategoryTile.name : 'Commercial Marketplace'}
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl font-normal">
            Source power racks, pin-selected stacks, curved treadmills, and bulk supplements directly from verified manufacturers with volume tier pricing.
          </p>
        </div>

        {/* 12 Category Filter Pills Horizontal Scroll Bar */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-200">
          <button
            onClick={() => setFilter('category', 'all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase font-mono tracking-wider whitespace-nowrap transition-all shadow-sm ${
              filters.category === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            All 12 Categories
          </button>
          {EQUIPMENT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shadow-sm ${
                filters.category === cat.id
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                filters.category === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {cat.itemCount}
              </span>
            </button>
          ))}
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Faceted Filter Sidebar */}
          <FilterSidebar />

          {/* Product Grid Area */}
          <div className="flex-1 w-full">
            {/* Sort & Count Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm mb-6">
              <div className="text-xs text-slate-600 font-bold uppercase font-mono">
                Showing <span className="text-slate-900 font-black">{filteredProducts.length}</span> Commercial Products
                {filters.searchQuery && <span> for "<span className="text-blue-600">{filters.searchQuery}</span>"</span>}
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs font-bold text-slate-500 uppercase font-mono">Sort by:</span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilter('sortBy', e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 rounded-xl py-1.5 px-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                >
                  <option value="featured">Featured Manufacturers</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Check if Category is Unpopulated / Coming Soon */}
            {activeCategoryTile && !activeCategoryTile.isPopulated && filters.category !== 'all' ? (
              <CategoryComingSoon category={activeCategoryTile} />
            ) : isLoading ? (
              /* Shimmer Loading Skeletons */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              /* Empty Search / Filter Results State */
              <div className="p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-4 my-8 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 text-slate-400 mx-auto flex items-center justify-center">
                  <SlidersHorizontal className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase font-heading">No Commercial Products Match Filters</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try adjusting your price slider, brand selections, or search keyword to find commercial equipment.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-black text-xs uppercase tracking-wider font-mono shadow-md"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* Live Product Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const inWishlist = isInWishlist(product.id);

                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="group rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-stripe hover:shadow-2xl hover:-translate-y-1"
                    >
                      {/* Product Image */}
                      <div className="relative aspect-video bg-slate-100 overflow-hidden border-b border-slate-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = fallbackImage;
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3">
                          {product.badge && <Badge variant="gold">{product.badge}</Badge>}
                        </div>

                        {/* Wishlist Button */}
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

                        {/* Quick View Trigger */}
                        <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            onClick={() => openQuickView(product)}
                            className="py-2 px-4 rounded-xl bg-white text-slate-900 font-black text-xs uppercase tracking-wider font-mono flex items-center gap-2 shadow-xl hover:bg-blue-600 hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>

                      {/* Product Body */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1 font-mono">
                            <span className="text-blue-600 uppercase tracking-wider">{product.brand}</span>
                            <div className="flex items-center gap-1 text-amber-500 font-black">
                              <Star className="w-3.5 h-3.5 fill-amber-400" />
                              <span>{product.rating}</span>
                            </div>
                          </div>

                          <h3
                            onClick={() => navigateTo('product-detail', product.id)}
                            className="text-sm font-black text-slate-900 hover:text-blue-600 transition-colors leading-snug cursor-pointer line-clamp-2 font-heading"
                          >
                            {product.name}
                          </h3>
                        </div>

                        {/* Price & Action Buttons */}
                        <div className="pt-3 border-t border-slate-100 space-y-3">
                          <div className="flex items-baseline justify-between">
                            <div>
                              <span className="text-lg font-black text-slate-900 font-mono">
                                ${product.price.toLocaleString()}
                              </span>
                              <span className="text-[10px] text-slate-400 block font-medium">excl. freight</span>
                            </div>
                            {product.bulkPrice && (
                              <div className="text-[10px] font-bold text-blue-600 text-right font-mono">
                                Bulk: ${product.bulkPrice.toLocaleString()}
                              </div>
                            )}
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => addToCart(product, 1)}
                              className="w-full py-2.5 px-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-1 shadow-[0_4px_12px_rgba(59,130,246,0.25)] transition-all"
                            >
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Cart</span>
                            </button>

                            <button
                              onClick={() => navigateTo('product-detail', product.id)}
                              className="w-full py-2.5 px-2 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-800 font-extrabold text-xs uppercase font-mono flex items-center justify-center transition-all"
                            >
                              <span>Specs →</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
