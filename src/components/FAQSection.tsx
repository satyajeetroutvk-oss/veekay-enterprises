import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Wrench,
  ShieldCheck,
  Truck,
  Sparkles,
  Phone,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { FAQS_DATA, FAQItem } from '../data/faqs';
import { useQuoteModal } from '../context/QuoteModalContext';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  initialCategory?: 'all' | 'maintenance' | 'warranty' | 'lead-times' | 'general';
  showCategoryTabs?: boolean;
  className?: string;
  maxItems?: number;
  highlightedModel?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Frequently Asked Questions',
  subtitle = 'Clear, practical answers about machine maintenance, OEM warranty coverage, transit logistics, and lead times from our Kirti Nagar engineering desk.',
  initialCategory = 'all',
  showCategoryTabs = true,
  className = '',
  maxItems,
  highlightedModel,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [expandedId, setExpandedId] = useState<string | null>(FAQS_DATA[0]?.id || null);
  const { openQuoteModal } = useQuoteModal();

  const categories = [
    { id: 'all', label: 'All Queries', icon: HelpCircle },
    { id: 'maintenance', label: 'Maintenance & Upkeep', icon: Wrench },
    { id: 'warranty', label: 'Warranty & OEM Terms', icon: ShieldCheck },
    { id: 'lead-times', label: 'Lead Times & Dispatch', icon: Truck },
  ];

  const filteredFaqs = FAQS_DATA.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  }).slice(0, maxItems || undefined);

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="space-y-1 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <span>Procurement & Technical FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {highlightedModel && (
          <div className="text-xs text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-lg shrink-0">
            <span className="font-semibold">Context:</span> {highlightedModel}
          </div>
        )}
      </div>

      {/* Category Tabs */}
      {showCategoryTabs && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-400' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isExpanded = expandedId === faq.id;
          return (
            <div
              key={faq.id}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? 'bg-white border-sky-400/80 shadow-md ring-1 ring-sky-300/40'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={isExpanded}
                className="w-full text-left p-4 sm:p-5 md:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 cursor-pointer"
              >
                <div className="flex flex-col md:grid md:grid-cols-[165px_minmax(0,1fr)] items-start gap-2.5 md:gap-5 w-full">
                  {/* Left Column (Desktop) / Top Row (Mobile): Category Badge */}
                  <div className="flex items-center md:items-start shrink-0">
                    <span className="inline-flex items-center text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-800 bg-sky-100/90 border border-sky-200/80 px-2.5 py-1 rounded-md md:mt-0.5 whitespace-nowrap">
                      {faq.categoryLabel}
                    </span>
                  </div>

                  {/* Right Column (Desktop) / Question Row (Mobile): Question Heading + Chevron Arrow */}
                  <div className="flex items-start justify-between gap-3 min-w-0 w-full">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug break-words min-w-0 flex-1 text-left">
                      {faq.question}
                    </h3>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-0.5 ${
                        isExpanded ? 'bg-sky-100 text-sky-800 rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="w-full px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 pt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                  <p className="leading-relaxed text-slate-600">{faq.answer}</p>

                  {faq.tags && faq.tags.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center flex-wrap gap-2 text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-700">Keywords:</span>
                      {faq.tags.map((tag, idx) => (
                        <span key={idx} className="bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Technical Support Callout */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1">
          <h4 className="text-sm sm:text-base font-bold text-white">
            Have a custom machinery or operational question?
          </h4>
          <p className="text-xs text-slate-400">
            Our Kirti Nagar engineering desk can review your specific factory layout, power stability, and ink consumption estimates.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="tel:+919999936706"
            className="px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-600 text-white text-xs font-semibold flex items-center gap-2 shadow transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 99999 36706</span>
          </a>

          <button
            type="button"
            onClick={() => openQuoteModal({ notes: 'Inquiring regarding machine warranty and delivery timelines' })}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
