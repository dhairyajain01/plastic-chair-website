import React from 'react';
import { ArrowRight, MessageSquare, Award, ShieldCheck, CheckCircle2, ChevronRight, PackageCheck, Layers } from 'lucide-react';
import { companyInfo } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import ProductVisual from '../catalogue/ProductVisual';
import { products } from '../../data/products';

export default function HeroSection({ onExploreCatalogue, onOpenEnquiry }) {
  // Flagship showcase product (Crystal Cafeteria Chair from Page 1 cover)
  const flagshipProduct = products.find(p => p.id === "crystal") || products[0];

  return (
    <section id="home" className="relative pt-6 sm:pt-10 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-100/80 via-white to-slate-50">
      
      {/* Subtle Background Geometric Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-slate-200/50 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Copy & Direct Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Certification Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200/90 shadow-sm px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
              <Award className="w-4 h-4 text-brand-red" />
              <span>ISO/IEC 27001:2022 Certified Manufacturing</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-mono">GST: {companyInfo.gst}</span>
            </div>

            {/* Main Primary Headline (Strictly from Catalogue) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Manufacturer of <br className="hidden sm:inline" />
              <span className="text-brand-red">Plastic Moulded Furniture</span>
            </h1>

            {/* Verbatim Catalogue Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {companyInfo.aboutStatement}
            </p>

            {/* 4 Core Pillars Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white/80 border border-slate-200/80 p-2.5 rounded-xl">
                <Layers className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">Lightweight & Stackable</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-slate-200/80 p-2.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">Indoor & Outdoor Ready</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 bg-white/80 border border-slate-200/80 p-2.5 rounded-xl">
                <PackageCheck className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">Bulk Supply & Custom</span>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3.5 sm:items-center">
              <button
                onClick={onExploreCatalogue}
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-redHover text-white font-extrabold text-sm sm:text-base py-3.5 px-7 rounded-2xl shadow-lg shadow-red-200 hover:shadow-xl transition-all active:scale-95"
              >
                <span>View 43 Products Catalogue</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-100 hover:shadow-xl transition-all active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Instant WhatsApp Quote</span>
              </a>

              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-1.5 py-3.5 px-5 rounded-2xl text-slate-700 hover:text-slate-900 font-bold text-sm bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <span>Request B2B Pricing</span>
              </button>
            </div>

            {/* Leadership Signoff */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
              <span>Proprietor: <strong className="text-slate-800 font-semibold">{companyInfo.proprietor}</strong></span>
              <span>•</span>
              <span>Plant: <strong className="text-slate-800 font-semibold">Kumbalagodu, Bangalore</strong></span>
            </div>

          </div>

          {/* Right Column: Interactive Flagship Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container mimicking catalogue cover elegance */}
              <div className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 overflow-hidden">
                
                {/* Decorative Arch Backdrop (Matching Catalogue Page 1 arch!) */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4/5 h-3/4 rounded-t-full bg-gradient-to-b from-amber-900/10 to-transparent -z-0 pointer-events-none" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between mb-2">
                  <div className="bg-slate-900 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Catalogue Spotlight
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-brand-red">Style: {flagshipProduct.name}</span>
                  </div>
                </div>

                {/* Render Showcase Graphic */}
                <div className="relative z-10 py-6 flex items-center justify-center">
                  <ProductVisual 
                    product={flagshipProduct} 
                    className="h-64 sm:h-72 w-full animate-float"
                  />
                </div>

                {/* Specs Pill */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-slate-900 text-base">{flagshipProduct.name} Cafeteria Chair</h3>
                    <span className="text-xs font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">
                      {flagshipProduct.dimensions.formatted}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Organic tree-branch lattice design. Weatherproof, UV-stabilized, high load bearing.
                  </p>
                  <div className="pt-1 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {flagshipProduct.colors.slice(0, 6).map((c, i) => (
                        <span 
                          key={i} 
                          title={c.name}
                          className="w-3.5 h-3.5 rounded-full border border-slate-300" 
                          style={{ backgroundColor: c.hex }} 
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => onOpenEnquiry && onOpenEnquiry(flagshipProduct)}
                      className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1"
                    >
                      <span>Inquire This Model</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Floating Quality Assurance Seal */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900 text-white p-3.5 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-red/20 border border-brand-red/40 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-brand-red" />
                </div>
                <div className="text-left text-xs">
                  <span className="font-bold block text-white">ISO 27001 Certified</span>
                  <span className="text-slate-400">Standardized Factory Output</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Bottom Metric Counters */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-subtle">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-heading block">43+</span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide mt-1 block">Catalogue Models</span>
            <span className="text-[11px] text-slate-400">Chairs, Tables, Stools, Patla</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-subtle">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-heading block">100%</span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide mt-1 block">Virgin Polymer</span>
            <span className="text-[11px] text-slate-400">Weatherproof & heavy duty</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-subtle">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-heading block">Bulk</span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide mt-1 block">Wholesale Supply</span>
            <span className="text-[11px] text-slate-400">Direct factory dispatch</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-subtle">
            <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-heading block">Verified</span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide mt-1 block">GST Registered</span>
            <span className="text-[11px] text-slate-400">GST: {companyInfo.gst}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
