import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, Check, SlidersHorizontal, Sparkles, X } from 'lucide-react';
import { products, productCategories } from '../../data/products';
import ProductCard from './ProductCard';

export default function CatalogueSection({ selectedCategory, onCategoryChange, onViewProduct, onOpenEnquiry }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [stackableOnly, setStackableOnly] = useState(false);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = { all: products.length };
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory && selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Stackable filter
      if (stackableOnly && !p.stackable) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCat = p.categoryLabel.toLowerCase().includes(query);
        const matchesFeatures = p.features.some((f) => f.toLowerCase().includes(query));
        const matchesDimensions = p.dimensions.formatted.toLowerCase().includes(query);
        return matchesName || matchesCat || matchesFeatures || matchesDimensions;
      }
      return true;
    });
  }, [selectedCategory, stackableOnly, searchQuery]);

  return (
    <section id="catalogue" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-3.5 py-1 rounded-full text-xs font-extrabold text-brand-red uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Factory Product Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Shri Metro Catalogue
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Browse our full 43-model range across Monobloc, Armless, Cafeteria, Banquet, Relax, and Baby Chairs, alongside Heavy-Duty Tables, Stools, and Patla.
          </p>
        </div>

        {/* Filter & Search Bar Container */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-4 mb-8">
          
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search style (e.g. Alexa, Crystal, Bahubali, Panda)..."
                className="w-full pl-10 pr-9 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Toggle for Stackable */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700 select-none">
                <input
                  type="checkbox"
                  checked={stackableOnly}
                  onChange={(e) => setStackableOnly(e.target.checked)}
                  className="w-4 h-4 text-brand-red rounded border-slate-300 focus:ring-brand-red"
                />
                <span className="flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-slate-500" />
                  Stackable Models Only
                </span>
              </label>

              <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of {products.length} Items
              </div>
            </div>
          </div>

          {/* Category Tabs (Scrollable on mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-100">
            {productCategories.map((cat) => {
              const isSelected = (selectedCategory || 'all') === cat.id;
              const count = categoryCounts[cat.id] || 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected ? 'bg-brand-red text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProduct}
                onEnquire={onOpenEnquiry}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">No matching models found</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for another style name or clear active filters to view all products.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setStackableOnly(false);
                onCategoryChange('all');
              }}
              className="py-2 px-5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
