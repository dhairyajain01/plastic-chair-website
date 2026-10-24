import React from 'react';
import { MapPin, Phone, Mail, Award, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import ShriMetroLogo from '../common/ShriMetroLogo';
import { companyInfo } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function Footer({ onNavigate, onOpenEnquiry, onSelectCategory }) {
  const categories = [
    { label: "Monobloc Chairs", id: "monobloc-chairs" },
    { label: "Armless Chairs", id: "armless-chairs" },
    { label: "Cafeteria Chairs", id: "cafeteria-chairs" },
    { label: "Banquet Chairs", id: "banquet-chairs" },
    { label: "Relax Chairs", id: "relax-chairs" },
    { label: "Dining Tables", id: "dining-tables" },
    { label: "Center Tables & Teapoy", id: "center-tables" },
    { label: "Stools & Patla", id: "stools" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Factory Identity */}
          <div className="lg:col-span-4 space-y-4">
            <ShriMetroLogo variant="light" className="h-12" />
            
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Leading manufacturer of premium plastic moulded furniture, specially designed for the events, catering, outdoor hospitality, and commercial wholesale markets.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs">
                <Award className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span className="font-semibold text-slate-200">ISO/IEC 27001:2022 Certified</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <p><span className="text-slate-200 font-semibold">Leadership:</span> {companyInfo.proprietor} ({companyInfo.designation})</p>
              <p><span className="text-slate-200 font-semibold">GSTIN:</span> {companyInfo.gst}</p>
            </div>
          </div>

          {/* Product Catalogue Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Catalogue Categories</h4>
            <ul className="space-y-2 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      if (onSelectCategory) onSelectCategory(cat.id);
                      if (onNavigate) onNavigate('catalogue');
                    }}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group text-left"
                  >
                    <span className="text-brand-red group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>{cat.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us & Industries */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Industries Served</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                <span>Event & Tent Rentals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                <span>Wedding Banquets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                <span>Catering Companies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                <span>Hotels & Cafeterias</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                <span>Distributors & Dealers</span>
              </li>
            </ul>
          </div>

          {/* Verified Factory Coordinates & Direct Inquiries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Factory & Enquiries</h4>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-slate-200 block">Manufacturing Plant:</strong>
                  {companyInfo.address.full}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Sales Desk: {companyInfo.phone}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>{companyInfo.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Direct Factory WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Shri Metro. All Rights Reserved. ISO/IEC 27001:2022 Certified.</p>
          <p className="text-center sm:text-right">
            Bulk manufacturing portfolio. Direct factory quotation & supply to institutional buyers.
          </p>
        </div>
      </div>
    </footer>
  );
}
