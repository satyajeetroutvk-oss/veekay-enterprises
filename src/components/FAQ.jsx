import React, { useState, useId } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Wrench,
  ShieldCheck,
  Clock,
  Send,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Phone
} from 'lucide-react';
import { FAQ_CATEGORIES, FAQS_DATA } from '../data/faqs.js';
import { useQuoteModal } from '../context/QuoteModalContext';

/**
 * @typedef {Object} FAQProps
 * @property {string} [heading]
 * @property {string} [subheading]
 * @property {any} [printer]
 * @property {string} [className]
 */

/**
 * Reusable FAQ Component
 * @param {FAQProps} props
 */
export const FAQ = ({
  heading = 'Frequently Asked Questions',
  subheading = 'Technical maintenance protocols, manufacturer warranty coverage, and regional dispatch timelines.',
  printer = null,
  className = '',
}) => {
  const { openQuoteModal } = useQuoteModal();
  const [activeCategory, setActiveCategory] = useState('Maintenance');
  const [openItems, setOpenItems] = useState({
    'maint-1': true, // First item open by default for immediate preview
  });

  const baseId = useId();

  // Filter FAQs by selected category tab
  const currentFaqs = FAQS_DATA.filter((item) => item.category === activeCategory);

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Maintenance':
        return <Wrench className="w-4 h-4 text-sky-600" />;
      case 'Warranty':
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'Lead times':
        return <Clock className="w-4 h-4 text-amber-600" />;
      default:
        return <HelpCircle className="w-4 h-4 text-sky-600" />;
    }
  };

  // WhatsApp link preparation with pre-filled machine context
  const whatsappSubject = printer
    ? `${printer.name} (${printer.categoryName || 'Industrial Printer'})`
    : 'industrial printing machinery';
  const whatsappMessage = `Hello Vee Kay Enterprises,\nI have a question regarding ${whatsappSubject} (Maintenance, Warranty, or Delivery timelines). Please assist me with technical details.`;
  const whatsappUrl = `https://wa.me/919999936706?text=${encodeURIComponent(whatsappMessage)}`;

  // Generate FAQPage JSON-LD structured data for SEO
  const faqSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      aria-labelledby={`${baseId}-heading`}
      className={`bg-white rounded-3xl border border-slate-200 p-4 sm:p-8 lg:p-10 shadow-sm space-y-6 sm:space-y-8 ${className}`}
    >
      {/* FAQPage JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      {/* Header & Badging */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
            <HelpCircle className="w-4 h-4" />
            <span>Industrial Support & Procurement Guidance</span>
          </div>
          <h2
            id={`${baseId}-heading`}
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
          >
            {heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Quick Action Buttons (Quote + WhatsApp) */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() =>
              openQuoteModal({
                category: printer?.categoryId || 'mimaki',
                model: printer?.name || '',
                notes: printer ? `Inquiry from FAQ for ${printer.name}` : 'General FAQ inquiry',
              })
            }
            className="px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Request a quote</span>
            <Send className="w-3.5 h-3.5 text-sky-200" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap"
            title="Chat with Vee Kay Sales & Technical Desk on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Ask on WhatsApp</span>
            <ExternalLink className="w-3 h-3 text-emerald-200" />
          </a>
        </div>
      </div>

      {/* Accessible 3-Category Tab Bar */}
      <div className="space-y-4">
        <div
          role="tablist"
          aria-label="FAQ Categories"
          className="flex items-center gap-1.5 sm:gap-2 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none"
        >
          {FAQ_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                id={`${baseId}-tab-${cat}`}
                aria-selected={isSelected}
                aria-controls={`${baseId}-panel-${cat}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-sky-50 text-sky-900 border border-sky-300 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                }`}
              >
                {getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panel & Accordion Group */}
        <div
          role="tabpanel"
          id={`${baseId}-panel-${activeCategory}`}
          aria-labelledby={`${baseId}-tab-${activeCategory}`}
          className="space-y-3 pt-2"
        >
          {currentFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            const headerId = `${baseId}-header-${faq.id}`;
            const panelId = `${baseId}-answer-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-150 overflow-hidden ${
                  isOpen
                    ? 'border-sky-300 bg-sky-50/20 shadow-sm ring-1 ring-sky-100'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-4 sm:p-5 md:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 cursor-pointer"
                >
                  <div className="flex flex-col md:grid md:grid-cols-[165px_minmax(0,1fr)] items-start gap-2.5 md:gap-5 w-full">
                    {/* Left Column (Desktop) / Top Row (Mobile): Category Badge */}
                    <div className="flex items-center md:items-start shrink-0">
                      <span className="inline-flex items-center text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-800 bg-sky-100/90 border border-sky-200/80 px-2.5 py-1 rounded-md md:mt-0.5 whitespace-nowrap">
                        {faq.tag}
                      </span>
                    </div>

                    {/* Right Column (Desktop) / Question Row (Mobile): Question Heading + Chevron Arrow */}
                    <div className="flex items-start justify-between gap-3 min-w-0 w-full">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug break-words min-w-0 flex-1 text-left">
                        {faq.question}
                      </h3>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-0.5 ${
                          isOpen
                            ? 'rotate-180 bg-sky-100 text-sky-700'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className="w-full px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 pt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150"
                  >
                    <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Helpful Technical Assistance Callout Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
        <div className="space-y-1">
          <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
            <span>Have a technical question not listed here?</span>
          </div>
          <p className="text-slate-500 leading-relaxed text-xs">
            Our engineers in Kirti Nagar, New Delhi provide custom factory floor layouts, electrical ratings, and substrate profiling.
          </p>
        </div>

        {/* Selected element: action buttons container */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() =>
              openQuoteModal({
                category: printer?.categoryId || 'mimaki',
                model: printer?.name || '',
                notes: 'Technical specification question',
              })
            }
            className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-semibold text-xs transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs whitespace-nowrap"
          >
            <span>Request custom specs</span>
            <span aria-hidden="true">→</span>
          </button>
          
          <a
            href="tel:+919999936706"
            className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 hover:text-sky-700 font-bold text-xs transition-all duration-150 flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>+91 99999 36706</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
