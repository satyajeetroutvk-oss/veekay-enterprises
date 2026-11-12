import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { QuoteModalProvider } from './context/QuoteModalContext';
import { TopUtilityBar } from './components/layout/TopUtilityBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';

// Pages
import { Home } from './pages/Home';
import { PrintersOverview } from './pages/PrintersOverview';
import { PrinterCategoryPage } from './pages/PrinterCategoryPage';
import { IndividualPrinterPage } from './pages/IndividualPrinterPage';
import { AboutUs } from './pages/AboutUs';
import { Industries } from './pages/Industries';
import { BlogPage } from './pages/BlogPage';
import { CataloguePage } from './pages/CataloguePage';
import { BecomeDistributorPage } from './pages/BecomeDistributorPage';
import { QuotePage } from './pages/QuotePage';
import { EWastePage } from './pages/EWastePage';
import { PrivacyTermsPage } from './pages/PrivacyTermsPage';
import { SublimationPrinters } from './pages/SublimationPrinters';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

// App shell wrapped with dynamic language class
function AppShell() {
  const { fontClass } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 ${fontClass}`}>
      <ScrollToTop />
      
      {/* Top Utility Information Bar */}
      <TopUtilityBar />

      {/* Main Sticky Navigation Header */}
      <Header />

      {/* Main Body Router View */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/printers" element={<PrintersOverview />} />
          <Route path="/printers/:categoryId/:subcategoryId/:modelId" element={<IndividualPrinterPage />} />
          <Route path="/sublimation-printers" element={<SublimationPrinters />} />
          <Route path="/textile/sublimation-printers" element={<SublimationPrinters />} />
          <Route path="/category/sublimation" element={<SublimationPrinters />} />
          <Route path="/category/:categoryId" element={<PrinterCategoryPage />} />
          <Route path="/printer/:printerId" element={<IndividualPrinterPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/distributor" element={<BecomeDistributorPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/e-waste" element={<EWastePage />} />
          <Route path="/privacy" element={<PrivacyTermsPage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Comprehensive Industrial Footer */}
      <Footer />

      {/* Interactive Floating WhatsApp Component */}
      <FloatingWhatsApp />

      {/* Global Commercial Quote & Live Demo Modal */}
      <QuoteModal />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <QuoteModalProvider>
          <AppShell />
        </QuoteModalProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
