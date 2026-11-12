import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Printer,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ChevronRight,
  Phone,
  FileText,
  Truck,
  Wrench,
  Clock,
  Send
} from 'lucide-react';
import {
  getModel,
  findModelById,
  getCategoryById,
  getSubcategory,
  getAllModels
} from '../data/printers.js';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PrinterVisual } from '../components/PrinterVisual';
import { FAQ } from '../components/FAQ.jsx';

export const IndividualPrinterPage: React.FC = () => {
  const { categoryId, subcategoryId, modelId, printerId } = useParams<{
    categoryId?: string;
    subcategoryId?: string;
    modelId?: string;
    printerId?: string;
  }>();
  const { openQuoteModal } = useQuoteModal();

  // Robust lookup supporting /printers/:categoryId/:subcategoryId/:modelId and legacy /printer/:printerId
  const lookupModelId = modelId || printerId || '';
  const directLookup = categoryId && subcategoryId && modelId
    ? getModel(categoryId, subcategoryId, modelId)
    : null;

  const resolved = directLookup
    ? {
        model: directLookup,
        category: getCategoryById(categoryId!),
        subcategory: getSubcategory(categoryId!, subcategoryId!),
      }
    : findModelById(lookupModelId);

  if (!resolved || !resolved.model) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Machinery Model Not Found</h2>
        <p className="text-sm text-slate-600">
          The requested model could not be found in our industrial catalogue.
        </p>
        <Link
          to="/printers"
          className="inline-flex items-center gap-2 text-sky-700 font-semibold text-sm hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Complete Printers Catalogue</span>
        </Link>
      </div>
    );
  }

  const { model, category, subcategory } = resolved;

  // Flattened related models in same subcategory or category
  const allModels = getAllModels();
  const relatedPrinters = allModels
    .filter((m: any) => m.categoryId === category?.id && m.id !== model.id)
    .slice(0, 3);

  const handleWhatsAppInquiry = () => {
    const text = `Hello Vee Kay Enterprises,\nI am interested in *${model.name}* (${category?.name || 'Category'} - ${subcategory?.name || 'Subcategory'}).\nPlease share the detailed engineering specifications, current stock availability, and commercial quotation.`;
    const waUrl = `https://wa.me/919999936706?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 sm:pb-32 space-y-12">
      
      {/* Required Breadcrumb: Printers > Category > Subcategory > Model */}
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs text-slate-500">
        <Link to="/printers" className="hover:text-slate-900 transition-colors font-medium">
          Printers
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        
        {category ? (
          <Link
            to={`/printers?cat=${category.id}`}
            className="hover:text-slate-900 transition-colors font-medium"
          >
            {category.name}
          </Link>
        ) : (
          <span>Category</span>
        )}
        
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        
        {category && subcategory ? (
          <Link
            to={`/printers?cat=${category.id}&sub=${subcategory.id}`}
            className="hover:text-slate-900 transition-colors font-medium"
          >
            {subcategory.name}
          </Link>
        ) : (
          <span>Subcategory</span>
        )}
        
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-slate-900 font-bold truncate max-w-xs">{model.name}</span>
      </nav>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Visual Asset Display (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-4 bg-slate-50 rounded-2xl shadow-sm border border-slate-200">
            <PrinterVisual
              categoryId={category?.id || 'mimaki'}
              modelName={model.name}
              imageUrl={(model as any).imageUrl}
              imageAlt={(model as any).imageAlt}
              imageCaption={(model as any).imageCaption}
              variant="detail"
              enableLightbox={true}
              className="w-full aspect-[4/3]"
            />
          </div>

          {/* Verification Badges Strip */}
          <div className="grid grid-cols-3 gap-3 text-xs bg-slate-100 p-3 rounded-xl border border-slate-200 text-slate-700">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" />
              <span className="font-medium text-[11px]">Authentic Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-sky-700 shrink-0" />
              <span className="font-medium text-[11px]">12-City Logistics</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-sky-700 shrink-0" />
              <span className="font-medium text-[11px]">Kirti Nagar Spares</span>
            </div>
          </div>
        </div>

        {/* Right Column: Specifications & Commercial Action (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                to={`/printers?cat=${category?.id}`}
                className="text-xs font-bold uppercase tracking-wider text-sky-700 hover:underline"
              >
                {category?.name}
              </Link>
              <span className="text-slate-300">/</span>
              <Link
                to={`/printers?cat=${category?.id}&sub=${subcategory?.id}`}
                className="text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded transition-colors"
              >
                {subcategory?.name}
              </Link>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {model.name}
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              {model.description}
            </p>
          </div>

          {/* Action CTAs: Request Quote & WhatsApp */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() =>
                openQuoteModal({
                  category: category?.id,
                  model: model.name,
                })
              }
              className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-semibold text-xs shadow-md hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Commercial Quotation</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Instant WhatsApp Quote</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Key Features & Placeholder Specifications Notice */}
          <div className="border border-slate-200 rounded-xl p-5 bg-white space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Printer className="w-4 h-4 text-sky-700" />
              <span>Key Features & Engineering Highlights</span>
            </h3>

            <ul className="space-y-2 text-xs text-slate-700">
              {model.features.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Clearly marked placeholder specifications */}
            <div className="p-3.5 bg-sky-50/70 border border-sky-200 rounded-lg text-xs space-y-1.5">
              <div className="font-semibold text-sky-950 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-sky-700" />
                <span>Technical Specifications: Specs: contact us</span>
              </div>
              <p className="text-sky-900 text-[11px] leading-relaxed">
                {model.specs?.technicalDetails || 'Specs: contact us for mechanical & electrical drawings.'} As an authorized wholesale distributor since 1990, Vee Kay Enterprises provides factory-direct dimensional drawings, power requirements, and RIP software compatibility upon request.
              </p>
              <div className="pt-1 flex items-center gap-3 text-[11px] font-semibold text-sky-800">
                <span>Phone / WhatsApp: +91 99999 36706</span>
                <span>·</span>
                <span>Email: veekayenterprises1@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Target Production Applications */}
          {model.applications && model.applications.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Industrial Applications & Substrates
              </h4>
              <div className="flex flex-wrap gap-2">
                {model.applications.map((app: string, i: number) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-medium text-slate-700"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Demo Booking Strip */}
          <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between text-xs gap-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Schedule an in-person live print trial in Kirti Nagar</span>
            </div>
            <button
              type="button"
              onClick={() =>
                openQuoteModal({
                  category: category?.id,
                  model: model.name,
                  notes: `Scheduling live substrate trial for ${model.name}`,
                })
              }
              className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 rounded text-white font-semibold text-[11px] whitespace-nowrap cursor-pointer"
            >
              Book Slot
            </button>
          </div>

        </div>

      </div>

      {/* Required Model-Specific FAQ Section Below */}
      <FAQ
        heading={`${model.name}: common questions`}
        subheading={`Specific maintenance protocols, manufacturer warranty terms, and dispatch lead times for ${model.name}.`}
        printer={model}
      />

      {/* Related Models in Category */}
      {relatedPrinters.length > 0 && (
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">
              Other Machinery in {category?.name}
            </h3>
            <Link
              to={`/printers?cat=${category?.id}`}
              className="text-xs font-semibold text-sky-700 hover:underline"
            >
              View all {category?.name} models →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPrinters.map((rel: any) => (
              <div
                key={rel.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-sky-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="p-3 bg-slate-50 border-b border-slate-100">
                  <PrinterVisual
                    categoryId={rel.categoryId}
                    modelName={rel.name}
                    imageUrl={(rel as any).imageUrl}
                    imageAlt={(rel as any).imageAlt}
                    imageCaption={(rel as any).imageCaption}
                    enableLightbox={true}
                    className="w-full"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase text-sky-700">
                    {rel.subcategoryName}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{rel.name}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{rel.shortDescription}</p>
                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      to={`/printers/${rel.categoryId}/${rel.subcategoryId}/${rel.id}`}
                      className="text-xs font-semibold text-sky-700 hover:underline"
                    >
                      View Specs →
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        openQuoteModal({ category: rel.categoryId, model: rel.name })
                      }
                      className="text-xs text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back Link */}
      <div className="pt-4 border-t border-slate-200">
        <Link
          to={category ? `/printers?cat=${category.id}` : '/printers'}
          className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {category ? category.name : 'All Printers'}</span>
        </Link>
      </div>

    </div>
  );
};
