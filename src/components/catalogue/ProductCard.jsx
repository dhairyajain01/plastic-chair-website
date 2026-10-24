import React, { useState } from 'react';
import { Layers, MessageSquare, ArrowRight, Eye, ShieldCheck } from 'lucide-react';
import ProductVisual from './ProductVisual';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function ProductCard({ product, onViewDetails, onEnquire }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || null);

  const handleWhatsAppClick = (e) => {
    e.stopPropagation();
    const url = getWhatsAppUrl({
      productName: product.name,
      category: product.categoryLabel,
      dimensions: product.dimensions.formatted,
      selectedColor: selectedColor?.name,
    });
    window.open(url, '_blank');
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
      {/* Top Banner & Badge */}
      <div className="p-4 pb-0 flex items-center justify-between">
        <span className="text-[11px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
          {product.categoryLabel}
        </span>

        {product.badge ? (
          <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-brand-red border border-red-200">
            {product.badge}
          </span>
        ) : product.stackable ? (
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-medium">
            <Layers className="w-3 h-3 text-slate-400" />
            Stackable
          </span>
        ) : null}
      </div>

      {/* Interactive Visual Preview with Live Color Switcher */}
      <div 
        onClick={() => onViewDetails(product)}
        className="cursor-pointer bg-gradient-to-b from-slate-50/60 to-slate-100/40 mt-2 mx-3 rounded-xl p-3 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-slate-100/70 transition-colors"
      >
        <ProductVisual 
          product={product} 
          activeColor={selectedColor} 
          className="h-48 w-full"
        />

        {/* Quick View overlay button */}
        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 bg-white text-slate-900 text-xs font-bold py-2 px-3.5 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            View Technical Specs
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title and Style Name */}
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-red transition-colors">
              {product.name}
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Style: {product.name}
            </span>
          </div>

          {/* Dimensions */}
          <div className="mt-1.5 inline-block bg-slate-50 border border-slate-200/80 rounded-md px-2 py-1 text-xs text-slate-600 font-mono">
            {product.dimensions.formatted}
          </div>

          {/* Color Swatches */}
          <div className="mt-3.5">
            <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5 font-medium">
              <span>Colours: <strong className="text-slate-700">{selectedColor?.name || 'Standard'}</strong></span>
              <span>{product.colors.length} Available</span>
            </div>
            
            <div className="flex items-center gap-1.5 flex-wrap">
              {product.colors.map((c, idx) => {
                const isSelected = selectedColor?.name === c.name;
                return (
                  <button
                    key={idx}
                    type="button"
                    title={c.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedColor(c);
                    }}
                    style={{ backgroundColor: c.hex }}
                    className={`w-5 h-5 rounded-full border transition-all transform ${
                      isSelected
                        ? 'ring-2 ring-brand-red ring-offset-2 scale-110 border-slate-900'
                        : 'border-slate-300 hover:scale-105 opacity-85 hover:opacity-100'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => onEnquire && onEnquire(product)}
            className="flex-1 inline-flex items-center justify-center gap-1 bg-brand-red hover:bg-brand-redHover text-white py-2.5 px-3 rounded-xl text-xs font-bold transition-colors shadow-sm"
          >
            <span>Bulk Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
