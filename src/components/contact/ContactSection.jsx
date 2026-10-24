import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Building, User, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { companyInfo } from '../../data/company';
import { products } from '../../data/products';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    companyName: '',
    name: '',
    phone: '',
    email: '',
    location: '',
    selectedProduct: 'All Products / Mixed Batch',
    quantity: '100 - 500 units',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Bulk Enquiry from Website Contact Page*\n\n` +
      `• *Company:* ${formState.companyName || 'Wholesale Buyer'}\n` +
      `• *Contact Person:* ${formState.name || 'Purchaser'}\n` +
      `• *Phone:* ${formState.phone}\n` +
      `• *Delivery Location:* ${formState.location || 'India'}\n` +
      `• *Product Range:* ${formState.selectedProduct}\n` +
      `• *Quantity Required:* ${formState.quantity}\n` +
      (formState.message ? `• *Notes:* ${formState.message}\n\n` : `\n`) +
      `Please provide formal factory quotation & dispatch timelines.`;

    const url = getWhatsAppUrl({ customMessage: text });
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-brand-red px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Direct Manufacturer Lead Desk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Contact & Bulk Enquiry
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Connect directly with Shri Metro manufacturing plant in Kumbalagodu, Bangalore. Instant responses for wholesale distributors, caterers, and institutional purchasers.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Factory Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-red" />
                Factory & Registered Location
              </h3>

              <div className="space-y-1 text-sm text-slate-700 leading-relaxed font-mono">
                <p className="font-bold text-slate-900 text-base">{companyInfo.name}</p>
                <p>{companyInfo.address.srNo}</p>
                <p>{companyInfo.address.village}</p>
                <p>{companyInfo.address.hobli}</p>
                <p className="font-bold text-slate-900">{companyInfo.address.city} - {companyInfo.address.pincode}</p>
                <p className="text-slate-500 font-sans text-xs pt-1">{companyInfo.address.state}, {companyInfo.address.country}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">GSTIN / Registration:</span>
                  <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                    {companyInfo.gst}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Proprietor:</span>
                  <span className="font-bold text-slate-900">{companyInfo.proprietor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Quality Standard:</span>
                  <span className="font-bold text-brand-red">ISO/IEC 27001:2022</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp High-Priority Card */}
            <div className="bg-gradient-to-br from-emerald-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-700/40 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-6 h-6 fill-emerald-400" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white">Direct WhatsApp Sales Desk</h4>
                  <span className="text-xs text-emerald-300">Fastest response for price sheets & batch quotes</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our sales coordinator for immediate stock checks, delivery timelines to your state, and high-volume discounts.
              </p>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-2xl shadow-lg transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>Start WhatsApp Chat Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Timings & Email */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Operating Hours: <strong>{companyInfo.workingHours}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Wholesale Desk: <strong>{companyInfo.email}</strong></span>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded B2B Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
            
            <div className="mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Official Bulk Enquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Share your procurement details. We furnish written factory quotation and freight estimates.
              </p>
            </div>

            {isSuccess ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-extrabold text-slate-900">Enquiry Successfully Dispatched!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formState.name}</strong> from <strong>{formState.companyName}</strong>. Our team has received your wholesale request for <strong>{formState.selectedProduct}</strong>.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-emerald-500 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Confirm on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="py-3 px-6 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Business / Organization Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Royal Banquet Hall / Metro Traders"
                      value={formState.companyName}
                      onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Contact Person <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone / WhatsApp Number <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Destination City & State <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bangalore / Mysore / Chennai"
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Product of Interest
                    </label>
                    <select
                      value={formState.selectedProduct}
                      onChange={(e) => setFormState({ ...formState, selectedProduct: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red focus:outline-none transition-all"
                    >
                      <option value="All Products / Mixed Batch">All Products / Mixed Container Load</option>
                      <option value="Monobloc Chairs">Monobloc Chairs (Alexa, Spine, Tip Top, etc.)</option>
                      <option value="Armless Chairs">Armless Chairs (Samrat, Platina, etc.)</option>
                      <option value="Cafeteria Chairs">Cafeteria Chairs (Crystal, Spykar, Web)</option>
                      <option value="Banquet Chairs">Banquet Chairs (Bahubali, Prabhu, etc.)</option>
                      <option value="Dining Tables">Dining Tables (Party Table Print, Round DT)</option>
                      <option value="Center Tables">Center Tables & Teapoy</option>
                      <option value="Stools & Patla">Stools & Patla (Dabangg, Magic, Step Stool)</option>
                      {products.map(p => (
                        <option key={p.id} value={`${p.name} (${p.categoryLabel})`}>
                          Style: {p.name} — {p.dimensions.formatted}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Estimated Order Volume
                    </label>
                    <select
                      value={formState.quantity}
                      onChange={(e) => setFormState({ ...formState, quantity: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red focus:outline-none transition-all"
                    >
                      <option value="50 - 100 units">50 - 100 units (Sample / Pilot Order)</option>
                      <option value="100 - 300 units">100 - 300 units (Tier 1 Wholesale)</option>
                      <option value="300 - 1,000 units">300 - 1,000 units (Commercial Bulk)</option>
                      <option value="1,000+ units">1,000+ units (Fleet / Institutional Contract)</option>
                      <option value="Full Truck Load (FTL)">Full Truck Load (FTL Dispatch)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Specific Requirements or Custom Branding
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us if you require specific color combinations, custom logo embossing, or target dispatch dates..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red focus:outline-none transition-all"
                  ></textarea>
                </div>

                {/* Form Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="flex-1 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-2xl text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Fast Track via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-2xl text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Formal Enquiry</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No spam • Direct factory correspondence • Official price quotations</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
