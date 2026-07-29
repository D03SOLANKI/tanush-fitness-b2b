import React from 'react';
import { useApp } from '../../context/AppContext';
import { EQUIPMENT_CATEGORIES } from '../../data/categories';
import { Search, RotateCcw, Filter, Star, Check } from 'lucide-react';

export const FilterSidebar: React.FC = () => {
  const { filters, setFilter, resetFilters } = useApp();

  const brandsList = ['TitanForge', 'PowerCore', 'EliteMotion', 'PrimeFit', 'Velocity Pro', 'AuraPure', 'Kinetix AI'];

  const handleBrandToggle = (brand: string) => {
    const current = filters.brands;
    if (current.includes(brand)) {
      setFilter('brands', current.filter(b => b !== brand));
    } else {
      setFilter('brands', [...current, brand]);
    }
  };

  return (
    <aside className="w-full lg:w-72 bg-white border border-slate-200/90 rounded-3xl p-5 space-y-6 shrink-0 h-fit text-slate-900 shadow-stripe">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2 text-sm font-black text-slate-900 font-heading uppercase">
          <Filter className="w-4 h-4 text-blue-600" />
          <span>Faceted Search</span>
        </div>
        <button
          onClick={resetFilters}
          className="text-xs text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors font-bold font-mono uppercase"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Live Search Input */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
          Keyword Search
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search racks, bikes, whey..."
            value={filters.searchQuery}
            onChange={(e) => setFilter('searchQuery', e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 pl-9 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Categories */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
          Equipment Category
        </label>
        <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
          <button
            onClick={() => setFilter('category', 'all')}
            className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${
              filters.category === 'all'
                ? 'bg-slate-900 text-white font-black'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <span>All Categories</span>
            <span className="text-[10px] opacity-80 font-mono">148</span>
          </button>
          {EQUIPMENT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${
                filters.category === cat.id
                  ? 'bg-slate-900 text-white font-black'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span className="truncate">{cat.name}</span>
              <span className="text-[10px] opacity-70 shrink-0 ml-2 font-mono">({cat.itemCount})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brand Selector */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
          Commercial Brands
        </label>
        <div className="space-y-2">
          {brandsList.map(brand => {
            const isSelected = filters.brands.includes(brand);
            return (
              <label
                key={brand}
                onClick={() => handleBrandToggle(brand)}
                className="flex items-center gap-2.5 text-xs text-slate-700 hover:text-slate-900 cursor-pointer select-none font-semibold"
              >
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-white border-slate-300'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>{brand}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Slider */}
      <div>
        <div className="flex justify-between items-center mb-2 font-mono">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Price Cap
          </label>
          <span className="text-xs font-bold text-blue-600">
            Up to ${filters.priceRange[1].toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min="100"
          max="10000"
          step="250"
          value={filters.priceRange[1]}
          onChange={(e) => setFilter('priceRange', [filters.priceRange[0], Number(e.target.value)])}
          className="w-full accent-blue-600 bg-slate-200 h-1.5 rounded-lg cursor-pointer"
        />
      </div>

      {/* Minimum Rating */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
          Minimum Rating
        </label>
        <div className="flex gap-2">
          {[0, 4.5, 4.8, 4.9].map(rate => (
            <button
              key={rate}
              onClick={() => setFilter('minRating', rate)}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center justify-center gap-1 font-mono ${
                filters.minRating === rate
                  ? 'bg-blue-50 border-blue-200 text-blue-600'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {rate === 0 ? 'All' : <><Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {rate}+</>}
            </button>
          ))}
        </div>
      </div>

      {/* In Stock Only Checkbox */}
      <div className="pt-2 border-t border-slate-100">
        <label
          onClick={() => setFilter('inStockOnly', !filters.inStockOnly)}
          className="flex items-center gap-2.5 text-xs font-bold text-slate-700 hover:text-slate-900 cursor-pointer select-none"
        >
          <div
            className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
              filters.inStockOnly
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'bg-white border-slate-300'
            }`}
          >
            {filters.inStockOnly && <Check className="w-3 h-3 stroke-[3]" />}
          </div>
          <span>In Stock & Ready for Freight</span>
        </label>
      </div>
    </aside>
  );
};
