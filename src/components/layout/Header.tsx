import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useQuoteModal } from '../../context/QuoteModalContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const location = useLocation();

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.printers, path: '/printers' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.industries, path: '/industries' },
    { name: t.nav.blog, path: '/blog' },
    { name: t.nav.catalogue, path: '/catalogue' },
    { name: t.nav.distributor, path: '/distributor' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname === '/' && !window.location.search && !window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.location.reload();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-0 md:border-b md:border-slate-200 transition-shadow duration-200 shadow-sm md:shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Wordmark & Heritage Subtitle */}
          <a
            href="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 focus:outline-none min-w-0 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:brightness-110 origin-left"
            title="Vee Kay Enterprises - Home (Click to refresh)"
            aria-label="Vee Kay Enterprises - Home"
          >
            {/* Visual Brand Icon Mark / Logo Wrapper */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-sky-500 to-sky-600 shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:brightness-110 group-hover:scale-105 group-hover:brightness-110 shrink-0 border border-sky-400/30 p-1">
              <img
                src="/assets/aistudio/8_2fcdd584.png"
                alt="Vee Kay Enterprises Logo"
                className="w-full h-full object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span
                className="text-base sm:text-2xl lg:text-[27px] font-bold text-slate-900 tracking-normal leading-tight font-brand truncate transition-colors duration-200 group-hover:text-sky-900"
                style={{
                  fontFamily: "'Monotype Corsiva', 'URW Chancery L', 'Apple Chancery', cursive",
                }}
              >
                Vee Kay Enterprises
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-sky-700 tracking-wider uppercase flex items-center gap-1 sm:gap-1.5 -mt-0.5 whitespace-nowrap">
                <span>Since 1990</span>
                <span className="text-sky-500 font-bold">·</span>
                <span className="text-slate-500 font-normal truncate">Kirti Nagar, Delhi</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={item.path === '/' ? handleHomeClick : undefined}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive(item.path)
                    ? 'text-sky-700 bg-sky-50 font-semibold'
                    : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 shadow-sm hover:shadow transition-all duration-150 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>{t.nav.quote}</span>
              <ArrowUpRight className="w-4 h-4 text-sky-200" />
            </button>
          </div>

          {/* Mobile Actions: Quote CTA & Hamburger Button */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="sm:hidden px-3 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 active:bg-sky-900 rounded-lg min-h-[40px] flex items-center justify-center transition-colors shadow-xs"
            >
              Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-lg text-slate-700 hover:text-sky-700 hover:bg-slate-100 transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (item.path === '/') {
                    handleHomeClick(e);
                  }
                }}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-sky-700 bg-sky-50 font-semibold'
                    : 'text-slate-800 hover:text-sky-700 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3 rounded-lg text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 text-center flex items-center justify-center gap-2"
              >
                <span>{t.nav.quote}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              <Link
                to="/e-waste"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-center text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                Responsible E-Waste Disposal & Pick-up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
