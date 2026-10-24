import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import ShriMetroLogo from '../common/ShriMetroLogo';
import { companyInfo } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function Navbar({ onOpenEnquiry, activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Products Catalogue", id: "catalogue", badge: "43 Items" },
    { label: "About Us", id: "about" },
    { label: "Why Choose Us", id: "why-us" },
    { label: "Contact", id: "contact" },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-2.5'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        {/* Top Mini Bar for Direct Factory Info (B2B Authority) */}
        <div className="hidden lg:block border-b border-slate-100 pb-2 mb-2 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Direct Manufacturer | Bangalore Facility
              </span>
              <span>•</span>
              <span>GST: <strong className="font-semibold text-slate-700">{companyInfo.gst}</strong></span>
              <span>•</span>
              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href={getWhatsAppUrl()} 
                target="_blank" 
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1 hover:underline"
              >
                <span>Bulk WhatsApp Desk:</span> {companyInfo.phone}
              </a>
              <span>•</span>
              <span>{companyInfo.workingHours}</span>
            </div>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick("home")}
            className="flex items-center focus:outline-none group text-left"
          >
            <ShriMetroLogo className="h-10 sm:h-12" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all relative flex items-center gap-1.5 ${
                    isActive
                      ? 'text-brand-red bg-red-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-[10px] bg-slate-900 text-white font-bold px-1.5 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-red rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3.5 py-2 rounded-xl text-sm font-bold border border-emerald-200 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redHover text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm shadow-red-200 hover:shadow-md transition-all active:scale-95"
            >
              <span>Get Bulk Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <ShriMetroLogo className="h-9" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-800"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-left text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-red transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-xs bg-slate-900 text-white font-semibold px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry && onOpenEnquiry();
                }}
                className="w-full py-3 bg-brand-red text-white text-center font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <span>Request Bulk Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-emerald-600 text-white text-center font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="text-center text-xs text-slate-500 pt-2">
                <p>Factory: Kumbalagodu, Bangalore</p>
                <p className="font-semibold text-slate-700 mt-0.5">GST: {companyInfo.gst}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
