import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  Lock,
  Unlock,
  CheckCircle2,
  Users,
  Building2,
  Mail,
  Phone,
  User,
  MapPin,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export const CataloguePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
  });

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    /**
     * PRODUCTION LEAD STORAGE:
     * To capture catalogue leads directly into your CRM or Google Sheets:
     * e.g. await fetch('/api/catalogue-leads', { method: 'POST', body: JSON.stringify(formData) });
     */
    setTimeout(() => {
      setSubmitting(false);
      setIsUnlocked(true);
    }, 500);
  };

  const handleDownloadPdf = () => {
    // Placeholder file path as specified in requirements
    const placeholderPdfUrl = '/assets/catalogues/vee_kay_enterprises_complete_catalogue_2026.pdf';
    
    // Create an anchor and initiate download simulation or open window
    const link = document.createElement('a');
    link.href = placeholderPdfUrl;
    link.setAttribute('download', 'Vee_Kay_Enterprises_Industrial_Catalogue_2026.pdf');
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Also offer WhatsApp prompt to receive it directly on mobile
    const waText = `Hello Vee Kay Enterprises,\nI just requested the 2026 Technical Catalogue for ${formData.company || 'my printing business'} in ${formData.city || 'India'}. Please also share the latest wholesale price schedule PDF.`;
    const waUrl = `https://wa.me/919999936706?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
          Official Documentation & Price Schedules
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Vee Kay Enterprises Technical Catalogue
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Comprehensive 48-page technical compendium covering Mimaki Japanese models, industrial textile sublimation, direct reactive lines, UV flatbeds, substrate tension tables, electrical layouts, and wholesale distributor tiers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Catalogue Preview & Features (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-300 text-xs font-semibold">
                Edition: 2026-2027 Full Range
              </span>
              <span className="text-xs text-slate-400">PDF · 48 Pages · 18.4 MB</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white">
                What’s Inside the Complete Technical Guide
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Authored by our senior engineering desk in Kirti Nagar to help print shop owners, textile plant engineers, and purchasing directors evaluate precise operational metrics.
              </p>
            </div>

            {/* Industrial Machinery Visual Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 p-4 flex flex-col items-center justify-center group">
              <div className="w-full flex items-center justify-center animate-machine-pop">
                <img
                  src="/assets/aistudio/mimaki_ts100-160_e31a64b1.png"
                  alt="Vee Kay Enterprises Technical Machinery Documentation"
                  className="w-full max-h-[170px] object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.85)] animate-machine-float transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="w-3/4 h-2.5 bg-black/75 rounded-full blur-sm mt-1 animate-shadow-pulse pointer-events-none" />
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Dimensional & Weight Footprints:</strong> Exact clearances required for 3.2m roll feeds and 8x4 flatbed gantries.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Hourly Productivity & Speed Curves:</strong> Production vs. fine art pass modes across Ricoh Gen 6, Kyocera, and Epson printheads.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Substrate Suitability Matrix:</strong> Tested ink penetration and wash-fastness charts for 40+ fabrics, rigid boards, and films.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Wholesale Consumables Guide:</strong> Bulk ink drum logistics, cleaning flushes, and scheduled preventive maintenance intervals.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Verified Publisher: Vee Kay Enterprises</span>
              <span>Kirti Nagar, New Delhi</span>
            </div>
          </div>

          {/* Become a Distributor Callout Banner */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-indigo-900 font-bold text-sm">
                <Users className="w-4 h-4 text-indigo-700" />
                <span>Are You a Regional Reseller or Dealer?</span>
              </div>
              <p className="text-xs text-indigo-800">
                Apply for our authorized distributor partnership to access wholesale trade discounts and showroom demo support.
              </p>
            </div>
            <Link
              to="/distributor"
              className="px-4 py-2.5 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-semibold whitespace-nowrap shadow-sm transition-colors flex items-center gap-1.5"
            >
              <span>Become a Distributor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Lead Gate Form or Download State (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg">
          {isUnlocked ? (
            <div className="text-center py-6 space-y-6 animate-in fade-in duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Unlock className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">
                  Access Unlocked!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your copy of the Vee Kay Enterprises 2026 Technical Catalogue is ready for immediate download.
                </p>
              </div>

              {/* Download Action Button */}
              <div className="space-y-3 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  className="w-full py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Catalogue (PDF)</span>
                </button>

                <p className="text-[11px] text-slate-400">
                  File path: <code className="text-slate-600">/assets/catalogues/vee_kay_enterprises_complete_catalogue_2026.pdf</code>
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3">
                <p className="text-xs text-slate-600">
                  Prefer receiving the PDF and pricing directly on your mobile?
                </p>
                <a
                  href={`https://wa.me/919999936706?text=${encodeURIComponent(
                    `Hello Vee Kay Enterprises, please share the technical catalogue PDF directly to ${formData.phone} for ${formData.company}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:underline"
                >
                  <span>Open PDF in WhatsApp (+91 99999 36706)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
                  <Lock className="w-4 h-4" />
                  <span>Lead-Gated Commercial Access</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Complete Details to Unlock Technical PDF
                </h3>
                <p className="text-xs text-slate-500">
                  Provide your business credentials to receive the direct download link and technical pricing.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Printing Studio Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Modern Flex & Graphics"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 99999 36706"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Corporate Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="buyer@yourcompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
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
                      placeholder="e.g. New Delhi / Surat / Ludhiana"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow disabled:opacity-50"
                >
                  {submitting ? 'Verifying Details...' : 'Unlock & Download Complete PDF'}
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Your contact details are strictly kept confidential per Indian B2B standards.
                </p>
              </form>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
