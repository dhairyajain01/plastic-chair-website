import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import CatalogueSection from './components/catalogue/CatalogueSection';
import AboutSection from './components/about/AboutSection';
import WhyChooseUsSection from './components/why/WhyChooseUsSection';
import ContactSection from './components/contact/ContactSection';
import ProductModal from './components/catalogue/ProductModal';
import EnquiryModal from './components/common/EnquiryModal';
import WhatsAppFloatingButton from './components/common/WhatsAppFloatingButton';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalProduct, setModalProduct] = useState(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryTargetProduct, setEnquiryTargetProduct] = useState(null);

  // Smooth scroll and active section tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'catalogue', 'about', 'why-us', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquiryModal = (product = null) => {
    setEnquiryTargetProduct(product);
    setEnquiryModalOpen(true);
  };

  const handleViewProduct = (product) => {
    setModalProduct(product);
  };

  const handleSelectCategoryFromFooter = (catId) => {
    setSelectedCategory(catId);
    handleNavigate('catalogue');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-red selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiryModal(null)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          onExploreCatalogue={() => handleNavigate('catalogue')}
          onOpenEnquiry={() => handleOpenEnquiryModal(null)}
        />

        <CatalogueSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onViewProduct={handleViewProduct}
          onOpenEnquiry={handleOpenEnquiryModal}
        />

        <AboutSection
          onExploreCatalogue={() => handleNavigate('catalogue')}
          onOpenEnquiry={() => handleOpenEnquiryModal(null)}
        />

        <WhyChooseUsSection
          onOpenEnquiry={() => handleOpenEnquiryModal(null)}
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiryModal(null)}
        onSelectCategory={handleSelectCategoryFromFooter}
      />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppFloatingButton />

      {/* Technical Detail Sheet Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onOpenEnquiry={handleOpenEnquiryModal}
      />

      {/* Universal B2B Bulk Enquiry Lead Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => {
          setEnquiryModalOpen(false);
          setEnquiryTargetProduct(null);
        }}
        initialProduct={enquiryTargetProduct}
      />
    </div>
  );
}
