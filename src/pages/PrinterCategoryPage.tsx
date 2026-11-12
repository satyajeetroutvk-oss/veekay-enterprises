import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Printer, ShieldCheck, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { PRINTER_CATEGORIES, PRINTERS_DATA } from '../data/printers';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PrinterVisual } from '../components/PrinterVisual';

export const PrinterCategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { openQuoteModal } = useQuoteModal();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');

  const category = PRINTER_CATEGORIES.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Category Not Found</h2>
        <p className="text-sm text-slate-600">The requested machinery category could not be located.</p>
        <Link to="/printers" className="inline-flex items-center gap-2 text-sky-700 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Printers Overview</span>
        </Link>
      </div>
    );
  }

  // Filter printers belonging to this category
  const categoryPrinters = PRINTERS_DATA.filter((p) => p.categoryId === category.id);

  const TARGET_PRODUCT_ORDER = [
    'VKE-2008A TX',
    'VKE-3208 TX',
    'V1804E',
    'V1808E',
    'Mimaki TS100-160',
  ];

  const getModelOrderIndex = (name: string) => {
    const cleanName = (name || '').toLowerCase();
    const index = TARGET_PRODUCT_ORDER.findIndex((target) => {
      const cleanTarget = target.toLowerCase();
      return cleanName === cleanTarget || cleanName.startsWith(cleanTarget) || cleanName.includes(cleanTarget);
    });
    return index !== -1 ? index : 999;
  };

  const baseFiltered =
    selectedSubcategory === 'all'
      ? categoryPrinters
      : categoryPrinters.filter((p) => p.subcategory === selectedSubcategory);

  const filteredPrinters = [...baseFiltered].sort((a: any, b: any) => {
    if (category.id === 'mimaki') return 0;
    const orderA = getModelOrderIndex(a.name);
    const orderB = getModelOrderIndex(b.name);
    if (orderA !== orderB) return orderA - orderB;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to="/printers" className="hover:text-slate-900 transition-colors">Industrial Printers</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold">{category.title}</span>
      </nav>

      {/* Category Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Machinery Division
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
              {category.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {category.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {category.id === 'textile' && (
              <Link
                to="/sublimation-printers"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center gap-1.5"
              >
                <span>Sublimation Printers Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            <button
              type="button"
              onClick={() => openQuoteModal({ category: category.id })}
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-lg transition-all cursor-pointer"
            >
              Request Category Price Schedule
            </button>
          </div>
        </div>

        {/* Subcategories Filter Chips */}
        <div className="pt-4 border-t border-slate-800 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-medium text-slate-400 mr-2 shrink-0">Filter:</span>
          <button
            type="button"
            onClick={() => setSelectedSubcategory('all')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              selectedSubcategory === 'all'
                ? 'bg-sky-500 text-slate-950'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All Subcategories ({categoryPrinters.length})
          </button>

          {category.subcategories.map((sub: any, i: number) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedSubcategory(sub)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedSubcategory === sub
                  ? 'bg-sky-500 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Printers */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>
            Displaying <strong>{filteredPrinters.length}</strong> equipment models in {category.title}
          </span>
          <span className="italic">Specs: contact us for mechanical & electrical drawings</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrinters.map((printer) => (
            <div
              key={printer.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-500 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="p-3 bg-slate-50 border-b border-slate-100">
                <PrinterVisual
                  categoryId={printer.categoryId}
                  modelName={printer.name}
                  imageUrl={(printer as any).imageUrl}
                  imageAlt={(printer as any).imageAlt}
                  imageCaption={(printer as any).imageCaption}
                  enableLightbox={true}
                  className="w-full"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 truncate">
                      {printer.subcategory}
                    </span>
                    {(printer as any).series && (
                      <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 border border-slate-200/60 px-2 py-0.5 rounded shrink-0">
                        {(printer as any).series}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                    {printer.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {printer.description}
                  </p>
                  
                  <div className="pt-1 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Specs:</span>{' '}
                    <span className="text-sky-800">Contact us (+91 99999 36706)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    to={
                      printer.subcategoryId
                        ? `/printers/${printer.categoryId}/${printer.subcategoryId}/${printer.id}`
                        : `/printer/${printer.id}`
                    }
                    className="text-xs font-semibold text-slate-700 hover:text-sky-700 flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      openQuoteModal({
                        category: printer.categoryId,
                        model: printer.name,
                      })
                    }
                    className="px-3 py-1.5 rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Link */}
      <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-xs">
        <Link
          to="/printers"
          className="font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Categories</span>
        </Link>
        <span className="text-slate-500">
          Vee Kay Enterprises · 5/7, Block 5, Kirti Nagar, New Delhi
        </span>
      </div>

    </div>
  );
};
