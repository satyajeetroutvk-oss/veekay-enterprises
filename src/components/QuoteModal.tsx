import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, ExternalLink, Calendar, Building2, User, Phone, Mail, MapPin } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PRINTER_CATEGORIES, PRINTERS_DATA } from '../data/printers';

export const QuoteModal: React.FC = () => {
  const { isOpen, closeQuoteModal, initialData } = useQuoteModal();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    category: 'mimaki',
    model: '',
    quantity: '1 Unit',
    demoDateTime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      const cat = initialData.category || 'mimaki';
      const mod = initialData.model || '';
      setFormData((prev) => ({
        ...prev,
        category: cat,
        model: mod,
        message: initialData.notes || '',
      }));
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  // Filter models based on selected category
  const availableModels = PRINTERS_DATA.filter((p) => p.categoryId === formData.category);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    /**
     * PRODUCTION INTEGRATION POINT:
     * Plug in your API / Formspree / CRM webhook here:
     * Example:
     * await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify(formData)
     * });
     */

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Pre-filled WhatsApp message
      const text = `*Commercial Quotation & Demo Booking - Vee Kay Enterprises*\n` +
        `• Name: ${formData.name}\n` +
        `• Company: ${formData.company}\n` +
        `• Phone: ${formData.phone}\n` +
        `• Email: ${formData.email}\n` +
        `• City: ${formData.city}\n` +
        `• Category: ${formData.category}\n` +
        `• Model: ${formData.model || 'General Inquiry'}\n` +
        `• Quantity: ${formData.quantity}\n` +
        `• Demo Date/Time: ${formData.demoDateTime || 'To be scheduled'}\n` +
        `• Requirements: ${formData.message || 'N/A'}`;

      const waUrl = `https://wa.me/919999936706?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-start sm:items-center justify-center p-2.5 sm:p-6 animate-in fade-in duration-150">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-6 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-800 to-slate-900 text-white px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-base sm:text-lg font-bold">Request Quotation & Live Demo</h3>
            <p className="text-[11px] sm:text-xs text-sky-200 mt-0.5">
              Direct wholesale distributor pricing from Kirti Nagar, New Delhi
            </p>
          </div>
          <button
            type="button"
            onClick={closeQuoteModal}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Quotation Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our senior technical sales engineers from Kirti Nagar will contact your business at <strong>{formData.phone}</strong> with wholesale price brackets and specifications.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const waUrl = `https://wa.me/919999936706?text=${encodeURIComponent(
                      `Hello Vee Kay Enterprises, I just requested a quote for ${formData.model || formData.category}. Please share the technical PDF and price.`
                    )}`;
                    window.open(waUrl, '_blank');
                  }}
                  className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow"
                >
                  <span>Chat on WhatsApp Directly</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Contact Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Firm Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Print Systems LLP"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                {/* City / Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Manufacturing City / State *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Surat, Gujarat / Delhi NCR"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                {/* Product Category Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Equipment Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        category: e.target.value,
                        model: '',
                      });
                    }}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  >
                    {PRINTER_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Printer Model Dropdown (dynamically updates) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Model
                  </label>
                  <select
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  >
                    <option value="">-- Select Specific Model (or General Inquiry) --</option>
                    {availableModels.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.subcategory})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estimated Quantity */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Planned Machinery Units
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  >
                    <option value="1 Unit">1 Commercial Unit</option>
                    <option value="2-3 Units">2 to 3 Units (Production Expansion)</option>
                    <option value="4+ Units">4+ Units (Industrial Plant Installation)</option>
                    <option value="Wholesale Distributor Batch">Bulk Consignment / Wholesale Dealer</option>
                  </select>
                </div>
              </div>

              {/* Preferred Demo Date & Time */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Live Demonstration Date & Time (Showroom or Video Call)
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="e.g. Next Tuesday 2:00 PM (at Kirti Nagar or Video Conference)"
                    value={formData.demoDateTime}
                    onChange={(e) => setFormData({ ...formData, demoDateTime: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  />
                </div>
              </div>

              {/* Production Requirements / Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Production Requirements & Substrates
                </label>
                <textarea
                  rows={2}
                  placeholder="Specify fabric types, acrylic thickness, expected daily meterage, or custom printhead preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                />
              </div>

              <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border sm:border-transparent border-slate-200 rounded-lg text-center cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 shadow transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Processing Quotation...</span>
                  ) : (
                    <>
                      <span>Transmit Commercial Quote Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
