import React from 'react';
import { Shield, FileText, Scale, CheckCircle2 } from 'lucide-react';

export const PrivacyTermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
          Legal & Compliance Documentation
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Privacy Policy & Terms of Commercial Use
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated: October 2026 · Vee Kay Enterprises, Kirti Nagar Industrial Area, New Delhi 110015
        </p>
      </div>

      {/* Part 1: Privacy Policy */}
      <section id="privacy" className="space-y-6 text-sm text-slate-700 leading-relaxed">
        <div className="flex items-center gap-2 text-slate-900 border-b border-slate-200 pb-2">
          <Shield className="w-5 h-5 text-sky-700" />
          <h2 className="text-xl font-bold">1. Privacy Policy & B2B Data Stewardship</h2>
        </div>

        <p>
          Vee Kay Enterprises ("we", "us", or "our"), operating from 5/7, Block 5, Kirti Nagar Industrial Area, New Delhi, Delhi 110015, respects the confidentiality and commercial privacy of our business clients, trade partners, and prospective buyers across India.
        </p>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
            1.1 Information Collected
          </h3>
          <p className="text-xs text-slate-600">
            When you request a quotation, schedule a live demonstration, download technical catalogues, or submit a dealership application, we collect commercial contact details including company name, authorized representative name, corporate email address, telephone/WhatsApp contact, delivery city, and machine substrate requirements.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
            1.2 Use of Information
          </h3>
          <p className="text-xs text-slate-600">
            We use your business information strictly for: (a) Preparing commercial price schedules and proforma invoices; (b) Scheduling technical site demonstrations; (c) Coordinating freight transport and transit insurance; and (d) Providing preventive maintenance reminders for printhead preservation. We never sell or license your contact details to third-party telemarketers.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
            1.3 WhatsApp Communication Protocol
          </h3>
          <p className="text-xs text-slate-600">
            By initiating or submitting a quotation request via our WhatsApp sales desk (+91 99999 36706), you consent to receiving machinery brochures, PDF specifications, and quotation updates via WhatsApp during normal business hours (Mon-Sat, 11 AM - 7 PM). You may opt-out at any time by messaging "STOP".
          </p>
        </div>
      </section>

      {/* Part 2: Terms of Use */}
      <section id="terms" className="space-y-6 text-sm text-slate-700 leading-relaxed pt-6 border-t border-slate-200">
        <div className="flex items-center gap-2 text-slate-900 border-b border-slate-200 pb-2">
          <Scale className="w-5 h-5 text-sky-700" />
          <h2 className="text-xl font-bold">2. Terms of Commercial Use & Machinery Quotations</h2>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
            2.1 Machinery Specifications & Placeholder Disclaimers
          </h3>
          <p className="text-xs text-slate-600">
            Machinery dimensions, hourly throughput speeds, and power requirements presented on this website are general guidelines. Because industrial configurations vary based on printhead selection (e.g. Ricoh Gen 6 vs. Kyocera vs. Epson) and UV lamp wattage, binding technical parameters are confirmed only on our official signed engineering proforma invoice. Where marked "Specs: contact us", detailed physical test prints are conducted prior to binding commitments.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
            2.2 Manufacturer Warranty & Consumables Authenticity
          </h3>
          <p className="text-xs text-slate-600">
            All Mimaki and industrial machines supplied by Vee Kay Enterprises carry authentic manufacturer warranty backed by registered serial numbers. Warranties are contingent upon using certified ink chemistry and following daily capping/cleaning procedures prescribed by our engineering desk.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
            2.3 Jurisdiction & Dispute Resolution
          </h3>
          <p className="text-xs text-slate-600">
            All commercial inquiries, distributor partnerships, orders, and contracts with Vee Kay Enterprises are governed by the laws of India. Any legal proceedings or arbitration arising from transactions shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
            2.4 Contact Details for Legal Inquiries
          </h3>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 text-slate-700">
            <div className="font-bold text-slate-900">Vee Kay Enterprises (Head Office)</div>
            <div>5/7, Block 5, Kirti Nagar Industrial Area, Kirti Nagar, New Delhi, Delhi 110015</div>
            <div>Phone: +91 99999 36706</div>
            <div>Email: veekayenterprises1@gmail.com</div>
          </div>
        </div>
      </section>

    </div>
  );
};
