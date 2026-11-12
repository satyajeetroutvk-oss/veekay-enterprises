import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Building2,
  User,
  ExternalLink,
  ShieldCheck,
  Truck,
  Wrench
} from 'lucide-react';
import { PRINTER_CATEGORIES, PRINTERS_DATA } from '../data/printers';

export const QuotePage: React.FC = () => {
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

  const availableModels = PRINTERS_DATA.filter((p) => p.categoryId === formData.category);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    /**
     * PRODUCTION QUOTE INTAKE ENDPOINT:
     * Connect your backend Express route or CRM webhook:
     * await fetch('/api/quotes', { method: 'POST', body: JSON.stringify(formData) });
     */
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      const text = `*Commercial Quotation Request - Vee Kay Enterprises*\n` +
        `• Name: ${formData.name}\n` +
        `• Company: ${formData.company}\n` +
        `• Phone: ${formData.phone}\n` +
        `• Email: ${formData.email}\n` +
        `• City: ${formData.city}\n` +
        `• Category: ${formData.category}\n` +
        `• Model: ${formData.model || 'General Category Inquiry'}\n` +
        `• Units: ${formData.quantity}\n` +
        `• Live Demo Preference: ${formData.demoDateTime || 'To be scheduled'}\n` +
        `• Requirement Notes: ${formData.message || 'Standard commercial quote'}`;

      const waUrl = `https://wa.me/919999936706?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
          Commercial Procurement Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Request Commercial Quotation & Schedule Live Demo
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Access official factory invoice pricing, freight schedules to your manufacturing site, and arrange live test print strike-offs on your unique substrates in our Kirti Nagar showroom.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Trust signals and direct helpline (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white">
              Why Partner With Vee Kay?
            </h3>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Official Warranties:</strong>
                  Genuine Japanese & OEM backed coverage with registered machine serials.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Truck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Pan-India Transit:</strong>
                  Insured wooden crating and expedited freight dispatch to 12 branch cities.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Wrench className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Engineer Commissioning:</strong>
                  On-site physical leveling, vacuum bed calibration, and operator software training.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
              <div className="font-semibold text-sky-300">Direct Kirti Nagar Helpline:</div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <a href="tel:+919999936706" className="text-white hover:underline font-semibold">
                  +91 99999 36706
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <a href="mailto:veekayenterprises1@gmail.com" className="text-slate-300 hover:underline">
                  veekayenterprises1@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>5/7, Block 5, Kirti Nagar Industrial Area, New Delhi 110015</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Full Interactive Booking Form (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg">
          {submitted ? (
            <div className="text-center py-12 space-y-5 animate-in fade-in duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Commercial Inquiry Submitted!
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong> from <strong>{formData.company}</strong>. Our senior technical sales engineers from Kirti Nagar will review your machine requirements for <strong>{formData.model || formData.category}</strong> and contact you within 2 working hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const waUrl = `https://wa.me/919999936706?text=${encodeURIComponent(
                      `Hello Vee Kay Enterprises, I just sent a quotation request for ${formData.model || formData.category}. Please share the technical PDF.`
                    )}`;
                    window.open(waUrl, '_blank');
                  }}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow"
                >
                  <span>Chat on WhatsApp Directly</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                >
                  Submit Another Machine Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alok Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
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
                      placeholder="e.g. Apex Industrial Graphics"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 99999 36706"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
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
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                    />
                  </div>
                </div>

                {/* City */}
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
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                    />
                  </div>
                </div>

                {/* Equipment Category */}
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
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-sky-600"
                  >
                    {PRINTER_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Specific Model */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Machine Model
                  </label>
                  <select
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-sky-600"
                  >
                    <option value="">-- Select Specific Model (or General Inquiry) --</option>
                    {availableModels.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.subcategory})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Units */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Planned Machinery Quantity
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-sky-600"
                  >
                    <option value="1 Unit">1 Commercial Unit</option>
                    <option value="2-3 Units">2 to 3 Units (Expansion)</option>
                    <option value="4+ Units">4+ Units (Industrial Production Line)</option>
                    <option value="Dealer Batch">Wholesale Dealer Consignment</option>
                  </select>
                </div>
              </div>

              {/* Demo Booking Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Demonstration Date & Time (Showroom Demo in Kirti Nagar or Video Stream)
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="e.g. Wednesday 3:00 PM at Kirti Nagar Demo Suite"
                    value={formData.demoDateTime}
                    onChange={(e) => setFormData({ ...formData, demoDateTime: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                  />
                </div>
              </div>

              {/* Production Requirements / Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Substrate Details, Daily Meterage, or Technical Specifications
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify fabrics, media width, rigid board thickness, or ink chemistry requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md disabled:opacity-50 flex items-center gap-2"
                >
                  {submitting ? (
                    <span>Transmitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Commercial Quotation Request</span>
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
