import React, { useState } from 'react';
import { X, Layers, ShieldCheck, Check, MessageSquare, ArrowRight, Ruler, CheckCircle2 } from 'lucide-react';
import ProductVisual from './ProductVisual';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function ProductModal({ product, onClose, onOpenEnquiry }) {
  if (!product) return null;

  const [activeColor, setActiveColor] = useState(product.colors[0] || null);

  const handleWhatsAppInquiry = () => {
    const url = getWhatsAppUrl({
      productName: product.name,
      category: product.categoryLabel,
      dimensions: product.dimensions.formatted,
      selectedColor: activeColor?.name,
    });
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Interactive Visual Showcase */}
          <div className="bg-gradient-to-br from-slate-50 via-slate-100/70 to-slate-200/50 p-8 flex flex-col justify-between items-center relative border-b md:border-b-0 md:border-r border-slate-200">
            <div className="w-full flex items-center justify-between">
              <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-slate-900 text-white">
                {product.categoryLabel}
              </span>
              {product.stackable && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-white/80 px-2.5 py-1 rounded-md border border-slate-200">
                  <Layers className="w-3.5 h-3.5 text-slate-500" />
                  Stackable Design
                </span>
              )}
            </div>

            {/* Product Rendering */}
            <div className="py-6 w-full flex items-center justify-center">
              <ProductVisual 
                product={product} 
                activeColor={activeColor} 
                className="h-64 sm:h-72 w-full"
              />
            </div>

            {/* Current Color Indicator */}
            <div className="w-full bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full border border-slate-400" 
                  style={{ backgroundColor: activeColor?.hex }}
                />
                <span className="text-xs font-bold text-slate-800">
                  Selected Shade: {activeColor?.name}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">Click below to change</span>
            </div>
          </div>

          {/* Right Column: Technical Specifications & Bulk CTAs */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Product Header */}
              <div>
                <span className="text-xs font-bold text-brand-red uppercase tracking-widest">
                  Manufacturer Catalogue Specifications
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Style: {product.name}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Designed & Manufactured by Shri Metro, Bangalore
                </p>
              </div>

              {/* Exact Dimensions Box */}
              <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <Ruler className="w-4 h-4 text-brand-red" />
                  <span>Technical Dimensions</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
                  <div className="bg-white p-2 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">Height</span>
                    <span className="text-sm font-bold text-slate-900">{product.dimensions.h || 'Standard'} mm</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">Width</span>
                    <span className="text-sm font-bold text-slate-900">{product.dimensions.w || 'Standard'} mm</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">Depth</span>
                    <span className="text-sm font-bold text-slate-900">{product.dimensions.d || 'Standard'} mm</span>
                  </div>
                </div>
              </div>

              {/* Color Swatches Grid */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">Available Batch Colours ({product.colors.length}):</span>
                  <span className="text-slate-500 font-medium">{activeColor?.name}</span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {product.colors.map((c, i) => {
                    const isSelected = activeColor?.name === c.name;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveColor(c)}
                        title={c.name}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                        }`}
                      >
                        <span 
                          className="w-3 h-3 rounded-full border border-black/20" 
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Manufacturing & Commercial Features */}
              <div className="mt-5 space-y-2">
                <span className="text-xs font-bold text-slate-800 block">Engineering Highlights:</span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Recommended for: <strong className="text-slate-700">{product.bestFor}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>ISO/IEC 27001:2022 certified manufacturing precision</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bulk CTAs */}
            <div className="space-y-2.5 pt-4 border-t border-slate-200">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Enquire via WhatsApp for {product.name}</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  if (onOpenEnquiry) onOpenEnquiry(product);
                }}
                className="w-full py-3 px-4 bg-brand-red hover:bg-brand-redHover text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-red-200"
              >
                <span>Request Formal Bulk Price Sheet</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
