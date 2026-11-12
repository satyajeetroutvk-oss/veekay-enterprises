import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productInterest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    /**
     * PRODUCTION FORM ENDPOINT:
     * To connect your production backend or service like Formspree, Formkeep, or an Express proxy:
     * Example:
     * fetch('/api/inquiries', { method: 'POST', body: JSON.stringify(formData) })
     * or https://formspree.io/f/YOUR_FORM_ID
     */
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Also construct pre-filled WhatsApp link for direct instant sales response
      const messageText = `Hello Vee Kay Enterprises (Kirti Nagar),\nI submitted a website inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProduct: ${formData.productInterest}\nMessage: ${formData.message}`;
      const waUrl = `https://wa.me/919999936706?text=${encodeURIComponent(messageText)}`;
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Company Profile & Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 group transition-all duration-300 ease-out hover:scale-105 hover:brightness-110 origin-left cursor-pointer"
              title="Vee Kay Enterprises - Home"
            >
              {/* Visual Brand Icon Mark / Logo Wrapper */}
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-sky-500 to-sky-600 shadow-sm transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-110 shrink-0 border border-sky-400/30 p-1">
                <img
                  src="/assets/aistudio/8_2fcdd584.png"
                  alt="Vee Kay Enterprises Logo"
                  className="w-full h-full object-contain transition-all duration-300 group-hover:brightness-110"
                />
              </div>

              <div>
                <span
                  className="text-2xl sm:text-3xl font-bold text-white tracking-normal font-brand block leading-tight group-hover:text-sky-300 transition-colors"
                  style={{
                    fontFamily: "'Monotype Corsiva', 'URW Chancery L', 'Apple Chancery', cursive",
                  }}
                >
                  Vee Kay Enterprises
                </span>
                <p className="text-xs uppercase font-semibold tracking-wider text-sky-400 mt-0.5">
                  Excellence Since 1990 · Kirti Nagar, New Delhi
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              {t.footer.summary} Authorized supplier of Mimaki, UV flatbeds, roll-to-roll printers, digital textile sublimation, and industrial packaging solutions across India.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+919999936706" className="hover:text-white transition-colors">
                  +91 99999 36706 (WhatsApp & Direct)
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:veekayenterprises1@gmail.com" className="hover:text-white transition-colors">
                  veekayenterprises1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Mon-Sat, 11:00 AM - 7:00 PM</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://share.google/giQckxTgBtVPaR7WL"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-sky-950 text-slate-300 hover:text-sky-400 transition-colors"
                title="Google Business Profile & 4.9 Star Reviews"
              >
                <span className="text-xs font-semibold">Google 4.9 ★</span>
              </a>
              <a
                href="https://www.instagram.com/vee_kay_enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <span className="text-xs font-medium">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/share/1ZM6f9BKic/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 transition-colors"
                title="Facebook"
              >
                <span className="text-xs font-medium">Facebook</span>
              </a>
              <a
                href="https://youtube.com/@veekayenterprises1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-red-400 transition-colors"
                title="YouTube"
              >
                <span className="text-xs font-medium">YouTube</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/printers" className="hover:text-white transition-colors">Industrial Printers</Link>
              </li>
              <li>
                <Link to="/category/mimaki" className="hover:text-white transition-colors">Mimaki Japanese Range</Link>
              </li>
              <li>
                <Link to="/category/textile" className="hover:text-white transition-colors">Digital Textile Solutions</Link>
              </li>
              <li>
                <Link to="/category/digital-sign" className="hover:text-white transition-colors">Signage UV Flatbeds</Link>
              </li>
              <li>
                <Link to="/category/label-packaging" className="hover:text-white transition-colors">Label & Packaging</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">Industries Served</Link>
              </li>
              <li>
                <Link to="/distributor" className="hover:text-white transition-colors">Become a Distributor</Link>
              </li>
              <li>
                <Link to="/catalogue" className="hover:text-white transition-colors">Download Catalogue</Link>
              </li>
              <li>
                <Link to="/e-waste" className="hover:text-white transition-colors text-emerald-400">E-Waste Management</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Embedded Google Map of Kirti Nagar (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Showroom Location Map
            </h4>
            <p className="text-xs text-slate-400">
              5/7, Block 5, Kirti Nagar Industrial Area, New Delhi 110015
            </p>
            {/* Responsive Map Embed Container */}
            <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900 aspect-video relative group">
              <iframe
                title="Vee Kay Enterprises Kirti Nagar New Delhi Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.464689269584!2d77.1354315!3d28.6457199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0322b7a8a65d%3A0x6b74465aa98485c2!2sKirti%20Nagar%20Industrial%20Area%2C%20New%20Delhi%2C%20Delhi%20110015!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://share.google/giQckxTgBtVPaR7WL"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 px-2 py-1 bg-slate-950/90 text-[10px] font-medium text-sky-400 rounded hover:text-white border border-slate-700 backdrop-blur-sm"
              >
                Open in Maps ↗
              </a>
            </div>
            <p className="text-[11px] text-slate-500">
              Showroom visits available Mon-Sat, 11 AM - 7 PM. Free live print sampling on your substrates.
            </p>
          </div>

          {/* Column 4: Quick B2B Inquiry Form (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              {t.footer.inquiryTitle}
            </h4>
            <p className="text-xs text-slate-400">
              {t.footer.inquiryDesc}
            </p>

            {submitted ? (
              <div className="p-4 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-emerald-200 text-xs space-y-2">
                <div className="flex items-center gap-2 font-semibold text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Inquiry Transmitted</span>
                </div>
                <p>
                  Thank you! Our technical sales engineers in Kirti Nagar have received your inquiry. We have also opened WhatsApp for instant live assistance.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-sky-300 hover:underline pt-1 block"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2 text-xs">
                <div>
                  <input
                    type="text"
                    required
                    placeholder={t.footer.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="tel"
                    required
                    placeholder={t.footer.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder={t.footer.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Product / Machine Name"
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    placeholder={t.footer.message}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 rounded bg-sky-700 hover:bg-sky-600 text-white font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>{t.footer.sendInquiry}</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Legal & Rights Strip */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 1990 - {new Date().getFullYear()} Vee Kay Enterprises. All rights reserved. 5/7, Block 5, Kirti Nagar, New Delhi 110015.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              {t.footer.privacy} & Compliance
            </Link>
            <Link to="/privacy#terms" className="hover:text-slate-300 transition-colors">
              {t.footer.terms}
            </Link>
            <Link to="/e-waste" className="hover:text-slate-300 transition-colors">
              E-Waste Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
