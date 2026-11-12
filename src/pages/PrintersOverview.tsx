import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  Printer,
  ArrowRight,
  Send,
  ExternalLink,
  ChevronRight,
  Layers,
  Inbox,
  Filter,
  X,
  Phone
} from 'lucide-react';
import {
  PRINTER_CATALOGUE,
  getAllModels,
  getCategoryById,
} from '../data/printers.js';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PrinterVisual } from '../components/PrinterVisual';

export const PrintersOverview: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { openQuoteModal } = useQuoteModal();

  // Read URL query parameters (?cat=&sub=&q=)
  const categoryParam = searchParams.get('cat') || 'all';
  const subcategoryParam = searchParams.get('sub') || 'all';
  const searchQuery = searchParams.get('q') || '';

  // Update URL search parameters
  const updateUrlParams = (updates: { cat?: string; sub?: string; q?: string }) => {
    const nextParams = new URLSearchParams(searchParams);

    if (updates.cat !== undefined) {
      if (updates.cat && updates.cat !== 'all') {
        nextParams.set('cat', updates.cat);
      } else {
        nextParams.delete('cat');
      }
    }

    if (updates.sub !== undefined) {
      if (updates.sub && updates.sub !== 'all') {
        nextParams.set('sub', updates.sub);
      } else {
        nextParams.delete('sub');
      }
    }

    if (updates.q !== undefined) {
      if (updates.q && updates.q.trim()) {
        nextParams.set('q', updates.q.trim());
      } else {
        nextParams.delete('q');
      }
    }

    setSearchParams(nextParams);
  };

  // Active Category Data
  const activeCategory = useMemo(() => {
    if (categoryParam === 'all') return null;
    return getCategoryById(categoryParam) || null;
  }, [categoryParam]);

  // Subcategories to display in sidebar/tabs
  const visibleSubcategories = useMemo(() => {
    if (activeCategory) {
      return activeCategory.subcategories;
    }
    // When "all" categories is selected, aggregate all subcategories
    const list: any[] = [];
    for (const cat of PRINTER_CATALOGUE) {
      for (const sub of cat.subcategories) {
        list.push({
          ...sub,
          parentCategoryId: cat.id,
          parentCategoryName: cat.name,
        });
      }
    }
    return list;
  }, [activeCategory]);

  // Active Subcategory Object
  const activeSubcategory = useMemo(() => {
    if (subcategoryParam === 'all') return null;
    return visibleSubcategories.find((s: any) => s.id === subcategoryParam) || null;
  }, [subcategoryParam, visibleSubcategories]);

  // Filtered Models
  const allFlattenedModels = useMemo(() => getAllModels(), []);

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

  const filteredModels = useMemo(() => {
    const list = allFlattenedModels.filter((model: any) => {
      // Category filter
      if (categoryParam !== 'all' && model.categoryId !== categoryParam) {
        return false;
      }

      // Subcategory filter
      if (subcategoryParam !== 'all' && model.subcategoryId !== subcategoryParam) {
        return false;
      }

      // Search query across name, description, subcategory, applications
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = model.name.toLowerCase().includes(query);
        const matchesDesc = (model.shortDescription || '').toLowerCase().includes(query) ||
                            (model.description || '').toLowerCase().includes(query);
        const matchesSub = (model.subcategoryName || '').toLowerCase().includes(query);
        const matchesApps = (model.applications || []).some((app: string) =>
          app.toLowerCase().includes(query)
        );
        return matchesName || matchesDesc || matchesSub || matchesApps;
      }

      return true;
    });

    return [...list].sort((a: any, b: any) => {
      if (categoryParam === 'mimaki') return 0;
      const orderA = getModelOrderIndex(a.name);
      const orderB = getModelOrderIndex(b.name);
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      return 0;
    });
  }, [allFlattenedModels, categoryParam, subcategoryParam, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold">Industrial Printers</span>
        {activeCategory && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button
              type="button"
              onClick={() => updateUrlParams({ sub: 'all' })}
              className="hover:text-slate-900 transition-colors text-slate-700"
            >
              {activeCategory.name}
            </button>
          </>
        )}
        {activeSubcategory && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-sky-800 font-bold">{activeSubcategory.name}</span>
          </>
        )}
      </nav>

      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
              <Printer className="w-4 h-4" />
              <span>Hierarchical Machinery Catalogue</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
              {activeCategory ? activeCategory.title : 'Industrial Printing Systems & Wholesale Supply'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeCategory
                ? activeCategory.description
                : 'Browse our complete B2B industrial machinery catalogue categorized by industry and technology. Authorized distributor for Mimaki Japan, heavy-duty textile printers, UV flatbeds, and packaging equipment from Kirti Nagar, New Delhi.'}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                openQuoteModal({
                  category: categoryParam !== 'all' ? categoryParam : 'mimaki',
                  model: activeSubcategory ? activeSubcategory.name : '',
                })
              }
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Request Wholesale Pricing</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Global Search Box Across All Models */}
        <div className="pt-2">
          <div className="relative max-w-2xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search across all models (e.g. JV330, Sublimation, Flatbed 2513, QR Code)..."
              value={searchQuery}
              onChange={(e) => updateUrlParams({ q: e.target.value })}
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-700 bg-slate-950/80 text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => updateUrlParams({ q: '' })}
                className="absolute right-3 top-3 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 1. Category Tabs Navigation */}
      <div className="border-b border-slate-200 pb-2">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
          <button
            type="button"
            onClick={() => updateUrlParams({ cat: 'all', sub: 'all' })}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              categoryParam === 'all'
                ? 'bg-slate-900 text-white shadow'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Categories ({allFlattenedModels.length})</span>
          </button>

          {PRINTER_CATALOGUE.map((cat: any) => {
            const isSelected = categoryParam === cat.id;
            const modelTotal = cat.subcategories.reduce(
              (acc: number, s: any) => acc + s.models.length,
              0
            );

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => updateUrlParams({ cat: cat.id, sub: 'all' })}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-sky-700 text-white shadow'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected
                      ? 'bg-sky-800 text-sky-100'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {modelTotal}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Body: Subcategory Sidebar (Desktop) / Horizontal Scroll (Mobile) + Models Grid */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Subcategory List: Left Sidebar on Desktop, Horizontal Scroll on Mobile */}
        <aside className="w-full lg:w-72 xl:w-80 shrink-0">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-sky-700" />
                <span>Subcategories</span>
              </span>
              {subcategoryParam !== 'all' && (
                <button
                  type="button"
                  onClick={() => updateUrlParams({ sub: 'all' })}
                  className="text-[11px] font-semibold text-sky-700 hover:underline"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Subcategory Buttons */}
            <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => updateUrlParams({ sub: 'all' })}
                className={`shrink-0 w-auto lg:w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between whitespace-nowrap lg:whitespace-normal cursor-pointer ${
                  subcategoryParam === 'all'
                    ? 'bg-sky-50 text-sky-900 border border-sky-300 shadow-xs'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>All Subcategories</span>
                <span className="text-[11px] font-bold text-slate-400 ml-2">
                  {visibleSubcategories.reduce(
                    (acc: number, s: any) => acc + s.models.length,
                    0
                  )}
                </span>
              </button>

              {visibleSubcategories.map((sub: any) => {
                const isSelected = subcategoryParam === sub.id;
                const modelCount = sub.models ? sub.models.length : 0;

                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => updateUrlParams({ sub: sub.id })}
                    className={`shrink-0 w-auto lg:w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between whitespace-nowrap lg:whitespace-normal cursor-pointer ${
                      isSelected
                        ? 'bg-sky-50 text-sky-900 border border-sky-300 font-semibold shadow-xs'
                        : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    <span className="truncate pr-2">{sub.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-bold shrink-0 ${
                        modelCount === 0
                          ? 'bg-amber-100 text-amber-800'
                          : isSelected
                          ? 'bg-sky-200 text-sky-900'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {modelCount}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Helpline footnote */}
            <div className="pt-3 border-t border-slate-100 text-slate-600 space-y-1.5 w-full">
              <p className="font-semibold text-slate-800 text-xs flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                <span>Need specific width or head?</span>
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed break-words text-left">
                Call our Kirti Nagar engineering desk at{' '}
                <a
                  href="tel:+919999936706"
                  className="font-semibold text-sky-700 hover:text-sky-800 hover:underline whitespace-nowrap"
                >
                  +91 99999 36706
                </a>{' '}
                for customized gantry setups.
              </p>
            </div>
          </div>
        </aside>

        {/* Models Grid & Empty States */}
        <main className="flex-1 w-full space-y-6">
          
          {/* Active Filter Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 border-b border-slate-200 pb-3">
            <div>
              Showing <strong>{filteredModels.length}</strong> machinery models
              {activeCategory && <span> in <strong>{activeCategory.name}</strong></span>}
              {activeSubcategory && <span> › <strong>{activeSubcategory.name}</strong></span>}
              {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
            </div>

            <div className="flex items-center gap-3">
              <span className="italic">Specs: contact us for mechanical drawings</span>
            </div>
          </div>

          {/* Special Case: Subcategory Selected with 0 Models */}
          {activeSubcategory && activeSubcategory.models.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-5 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto">
                <Inbox className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  {activeSubcategory.name}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Models available on request
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We supply custom-configured machinery, industrial tooling, and factory direct consignments for {activeSubcategory.name}. Connect with our Kirti Nagar sales and engineering desk for blueprints and commercial quotes.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    openQuoteModal({
                      category: categoryParam,
                      model: activeSubcategory.name,
                      notes: `Inquiry for ${activeSubcategory.name} (Models available on request)`,
                    })
                  }
                  className="px-6 py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-semibold text-xs shadow transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Request a quote for {activeSubcategory.name}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/919999936706?text=${encodeURIComponent(
                    `Hello Vee Kay Enterprises, I am inquiring about machinery models available on request in: ${activeSubcategory.name}. Please share available specs and pricing.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors flex items-center gap-2"
                >
                  <span>Ask on WhatsApp (+91 99999 36706)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : filteredModels.length === 0 ? (
            /* Search Query Returned Zero Results */
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-4 shadow-sm">
              <Printer className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">
                No machinery matching "{searchQuery}"
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Try checking for typos, searching by broader keywords (e.g. UV, Mimaki, Reactive), or clearing your subcategory filter.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => updateUrlParams({ q: '', cat: 'all', sub: 'all' })}
                  className="px-4 py-2 rounded-lg bg-sky-50 text-sky-700 font-semibold text-xs hover:bg-sky-100"
                >
                  Clear All Filters & Search
                </button>
              </div>
            </div>
          ) : (
            /* Grid of Model Cards */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredModels.map((printer: any) => {
                const detailUrl = `/printers/${printer.categoryId}/${printer.subcategoryId}/${printer.id}`;

                return (
                  <div
                    key={`${printer.categoryId}-${printer.subcategoryId}-${printer.id}`}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-500 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                  >
                    {/* Image / Vector Machine Visual Slot */}
                    <div className="p-3 bg-slate-50 border-b border-slate-100">
                      <PrinterVisual
                        categoryId={printer.categoryId}
                        modelName={printer.name}
                        imageUrl={printer.imageUrl}
                        imageAlt={printer.imageAlt}
                        imageCaption={printer.imageCaption}
                        enableLightbox={true}
                        className="w-full"
                      />
                    </div>

                    {/* Model Details Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700">
                            {printer.categoryName}
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded truncate max-w-[160px]">
                            {printer.series || printer.subcategoryName}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                          {printer.name}
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {printer.shortDescription}
                        </p>

                        <div className="pt-1 text-[11px] text-slate-500 flex items-center gap-1.5">
                          <span className="font-semibold text-slate-700">Specs:</span>
                          <span className="italic text-sky-800">Contact us (+91 99999 36706)</span>
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <Link
                          to={detailUrl}
                          className="text-xs font-semibold text-slate-700 hover:text-sky-700 flex items-center gap-1 cursor-pointer"
                        >
                          <span>View details</span>
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
                          Request a quote
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </main>

      </div>

      {/* Consultation Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <h4 className="text-base sm:text-lg font-bold text-white">Unsure which machine configuration fits your facility?</h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Our engineering desk in Kirti Nagar conducts free sample test strike-offs on your actual production fabrics, boards, and packaging materials.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
          <a
            href="tel:+919999936706"
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 whitespace-nowrap shadow-sm transition-all"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>Call +91 99999 36706</span>
          </a>
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center cursor-pointer transition-colors whitespace-nowrap"
          >
            Book Live Demo
          </button>
        </div>
      </div>

    </div>
  );
};
