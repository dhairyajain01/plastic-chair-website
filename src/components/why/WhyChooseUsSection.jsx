import React from 'react';
import { Layers, Sun, ShieldCheck, Truck, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyInfo } from '../../data/company';

export default function WhyChooseUsSection({ onOpenEnquiry }) {
  const icons = {
    Layers: Layers,
    Sun: Sun,
    ShieldCheck: ShieldCheck,
    Truck: Truck,
    Award: Award,
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background radial pattern */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-red/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-3.5 py-1 rounded-full text-xs font-bold text-brand-red uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Industrial Strength & Reliability</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Why Choose Shri Metro?
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            Engineered to endure the rigorous demands of commercial events, large banquets, and heavy rental logistics without compromising on elegance.
          </p>
        </div>

        {/* 5 Official Catalogue Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyInfo.whyChooseUs.map((pillar, idx) => {
            const IconComponent = icons[pillar.icon] || ShieldCheck;
            const isFeatured = idx === 4; // ISO certification card

            return (
              <div
                key={idx}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-br from-red-950/80 to-slate-900 border-brand-red/50 shadow-xl md:col-span-2 lg:col-span-1'
                    : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-red">
                    <IconComponent className="w-6 h-6 text-brand-red" />
                  </div>

                  <h3 className="text-xl font-extrabold text-white">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-700/60 mt-6 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Verified Catalogue Standard
                  </span>
                  <span className="font-mono text-slate-500">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wholesale Procurement Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-red to-red-700 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-200">
              Bulk Ordering & Custom Branding
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Planning Bulk Procurement for Banquets or Dealership?
            </h3>
            <p className="text-xs sm:text-sm text-red-100">
              Direct factory pricing with zero middleman commissions. Custom color runs and branding available on qualified volume orders.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="py-3.5 px-7 bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm rounded-2xl shadow-lg transition-transform active:scale-95 flex items-center gap-2"
            >
              <span>Get Wholesale Price List</span>
              <ArrowRight className="w-4 h-4 text-brand-red" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
