import React from 'react';
import { Building2, Award, User, MapPin, CheckCircle, Package, ArrowRight, ShieldCheck, Factory } from 'lucide-react';
import { companyInfo } from '../../data/company';

export default function AboutSection({ onExploreCatalogue, onOpenEnquiry }) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5 text-brand-red" />
            <span>Manufacturing Excellence & Company Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            About Shri Metro
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A trusted name in heavy-duty plastic moulded furniture, engineered specifically for high-turnover hospitality, banquet, and commercial wholesale markets.
          </p>
        </div>

        {/* Story & Leadership Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden mb-12">
          {/* Subtle Red Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/15 rounded-full filter blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-red">
                Official Company Statement
              </span>
              <blockquote className="text-lg sm:text-2xl font-bold leading-relaxed text-slate-100 border-l-4 border-brand-red pl-5">
                "{companyInfo.aboutStatement}"
              </blockquote>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
                    <User className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base leading-none">{companyInfo.proprietor}</h4>
                    <span className="text-xs text-slate-400">{companyInfo.designation}</span>
                  </div>
                </div>

                <span className="hidden sm:inline text-slate-600">•</span>

                <div className="flex items-center gap-2 text-xs">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>ISO/IEC 27001:2022 Certified Manufacturing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 space-y-4">
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-red" />
                Factory Headquarters
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {companyInfo.address.full}
              </p>
              <div className="pt-2 border-t border-slate-700/80 text-xs text-slate-400 space-y-1">
                <p>GSTIN: <strong className="text-white font-mono">{companyInfo.gst}</strong></p>
                <p>Location: <strong className="text-white">Kumbalagodu Industrial Belt, Bangalore</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Official Product Pillars (From Page 3) */}
        <div className="space-y-6">
          <div className="text-left">
            <h3 className="text-xl font-extrabold text-slate-900">
              Core Manufacturing Capabilities
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Structured output tailored to high-volume procurement contracts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.rangeHighlights.map((range, index) => (
              <div 
                key={index} 
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-brand-red text-brand-red group-hover:text-white flex items-center justify-center font-bold text-sm transition-colors">
                    0{index + 1}
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-red transition-colors">
                    {range.category}
                  </h4>
                  <p className="text-xs font-semibold text-slate-600">
                    {range.tagline}
                  </p>
                  <ul className="pt-2 space-y-1 text-xs text-slate-500">
                    {range.subcategories.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-red transition-colors" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button
                    onClick={onExploreCatalogue}
                    className="text-xs font-bold text-slate-700 group-hover:text-brand-red inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Models</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
