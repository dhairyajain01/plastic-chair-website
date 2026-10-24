import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageSquare, Send, Building, MapPin, User, Phone, Package, ShieldCheck } from 'lucide-react';
import { products } from '../../data/products';
import { companyInfo } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function EnquiryModal({ isOpen, onClose, initialProduct = null }) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    city: '',
    productId: initialProduct?.id || 'general',
    quantity: '100-500 units',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        productId: initialProduct.id,
      }));
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const selectedProduct = products.find((p) => p.id === formData.productId);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const prodName = selectedProduct ? selectedProduct.name : 'General Bulk Portfolio';
    const prodCat = selectedProduct ? selectedProduct.categoryLabel : 'Plastic Moulded Furniture';
    const prodDim = selectedProduct ? selectedProduct.dimensions.formatted : 'Standard';

    const text = `*New B2B Bulk Enquiry - Shri Metro*\n\n` +
      `• *Company/Business:* ${formData.companyName || 'Not specified'}\n` +
      `• *Contact Person:* ${formData.contactName || 'Buyer'}\n` +
      `• *Phone:* ${formData.phone || 'Direct WhatsApp'}\n` +
      `• *Location/City:* ${formData.city || 'India'}\n` +
      `• *Product Selected:* ${prodName} (${prodCat})\n` +
      `• *Dimensions:* ${prodDim}\n` +
      `• *Estimated Volume:* ${formData.quantity}\n` +
      (formData.notes ? `• *Requirements:* ${formData.notes}\n\n` : `\n`) +
      `Please provide factory quotation and dispatch lead times.`;

    const url = getWhatsAppUrl({ customMessage: text });
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        
        {/* Header Strip */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red bg-red-950/80 px-2.5 py-1 rounded-md mb-2">
            <Building className="w-3.5 h-3.5" />
            <span>Direct Manufacturer Bulk Procurement</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Request Official Wholesale Quotation
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Fill out your batch requirements or connect directly on WhatsApp for immediate pricing.
          </p>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-extrabold text-slate-900">Enquiry Received!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for reaching out to <strong>Shri Metro</strong>. Our wholesale sales desk will review your requirements for <strong>{selectedProduct ? selectedProduct.name : 'Bulk Furniture'}</strong> and contact you promptly.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <p><strong>Factory Location:</strong> {companyInfo.address.full}</p>
              <p><strong>GST Number:</strong> {companyInfo.gst}</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleSendViaWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Fast Track on WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="py-3 px-6 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {/* Product Highlight Banner */}
            {selectedProduct && (
              <div className="bg-red-50 border border-red-100 p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-brand-red uppercase tracking-wide">Selected Model:</span>
                  <p className="text-sm font-extrabold text-slate-900">{selectedProduct.name} ({selectedProduct.categoryLabel})</p>
                  <p className="text-xs text-slate-500">{selectedProduct.dimensions.formatted}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-white text-slate-700 font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                    {selectedProduct.colors.length} Colors
                  </span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Company / Business Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Business / Firm Name <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Metro Event Rentals"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Contact Person <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone / WhatsApp Number <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* City / State */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Delivery City / Region <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bangalore, Karnataka"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Product Selector (If changing or general) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product Range
                </label>
                <div className="relative">
                  <Package className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <select
                    value={formData.productId}
                    onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none bg-white"
                  >
                    <option value="general">Entire Product Catalogue (Mixed Load)</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — {p.categoryLabel}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Estimated Order Volume */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Estimated Quantity
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none bg-white"
                >
                  <option value="50 - 100 units">50 - 100 units (Sample / Pilot)</option>
                  <option value="100 - 300 units">100 - 300 units (Wholesale Tier 1)</option>
                  <option value="300 - 1,000 units">300 - 1,000 units (Commercial Bulk)</option>
                  <option value="1,000+ units">1,000+ units (Fleet / Institutional)</option>
                  <option value="Full Truck Load (FTL)">Full Truck Load (FTL)</option>
                </select>
              </div>
            </div>

            {/* Special Instructions / Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Specific Colors, Custom Logo Emboss or Delivery Timeline
              </label>
              <textarea
                rows="2"
                placeholder="Mention desired color combination, custom event requirements, or target delivery date..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Submit Directly via WhatsApp</span>
              </button>

              <button
                type="submit"
                className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Request Email Quote</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct factory pricing • Zero broker fee • ISO 27001 verified quality</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
