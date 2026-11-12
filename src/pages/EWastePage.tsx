import React, { useState } from 'react';
import {
  Recycle,
  ShieldCheck,
  CheckCircle2,
  Send,
  HelpCircle,
  Truck,
  FileCheck,
  Building2,
  Phone,
  Mail,
  User,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const EWastePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    equipmentType: 'Old Industrial Printer',
    quantity: '1 Unit',
    pickupAddress: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What types of industrial print machinery can be submitted for e-waste disposal?',
      a: 'We facilitate responsible take-back for industrial UV flatbeds, solvent and eco-solvent roll printers, dye-sublimation machines, decommissioned printheads, UV lamp assemblies, electronic motherboards, servo motor drivers, and depleted certified ink containers.',
    },
    {
      q: 'How does Vee Kay Enterprises adhere to Indian E-Waste Management Rules?',
      a: 'In accordance with the Ministry of Environment, Forest and Climate Change (MoEFCC) and Central Pollution Control Board (CPCB) E-Waste (Management) Rules, our take-back channel routes industrial electronic waste exclusively through authorized environmental recyclers to prevent hazardous heavy metals from entering landfills.',
    },
    {
      q: 'Is there a buyback or trade-in credit for upgrading to a new Mimaki or UV printer?',
      a: 'Yes. Depending on the chassis condition and residual metal value, Vee Kay Enterprises offers competitive trade-in credit toward the purchase of new Mimaki equipment, high-speed textile sublimation machines, or UV flatbed systems.',
    },
    {
      q: 'How are hazardous UV inks and chemical flushing fluids handled?',
      a: 'Residues of uncured UV monomers and chemical solvents are collected in designated containment drums and transferred to authorized hazardous waste treatment, storage, and disposal facilities (TSDF) per government environmental guidelines.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      const msg = `*E-Waste Take-Back & Pickup Request - Vee Kay Enterprises*\n` +
        `• Name: ${formData.name}\n` +
        `• Company: ${formData.company}\n` +
        `• Phone: ${formData.phone}\n` +
        `• City/State: ${formData.city}\n` +
        `• Equipment: ${formData.equipmentType} (${formData.quantity})\n` +
        `• Address: ${formData.pickupAddress}\n` +
        `• Notes: ${formData.notes || 'None'}`;

      const waUrl = `https://wa.me/919999936706?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-14 border border-emerald-800/60 shadow-xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-semibold">
          <Recycle className="w-4 h-4 text-emerald-400" />
          <span>Environmental Stewardship · Indian E-Waste Rules Compliance</span>
        </div>

        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Responsible Industrial E-Waste Management & Equipment Take-Back
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
            As an industrial printer distributor operating continuously since 1990, Vee Kay Enterprises is committed to sustainable lifecycle handling of commercial printing equipment, electronic circuits, and industrial printheads across India.
          </p>
        </div>

        {/* Clear Placeholder for Certifications */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-700/40 text-xs text-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="font-bold text-white uppercase tracking-wider text-[11px] block">
              Official Environmental Compliance Status:
            </span>
            <p className="text-emerald-300">
              [Certifications: Authorized State PCB / CPCB Partner recycling channel - Contact us for official compliance registration numbers]
            </p>
          </div>
          <a
            href="tel:+919999936706"
            className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs whitespace-nowrap"
          >
            Compliance Desk: +91 99999 36706
          </a>
        </div>
      </div>

      {/* 3-Step Take-Back Process */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Simple 3-Step Lifecycle
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How Our Equipment Take-Back Process Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">Request Pickup & Assessment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Submit your machine details, chassis condition, and warehouse location using our online form or WhatsApp helpline. Our team provides an initial evaluation and trade-in feasibility estimate.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">Secure Decommissioning & Transport</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our technicians coordinate safe mechanical unbolting, ink line flushing to prevent chemical spillage during transit, and secure logistics pick-up directly from your manufacturing floor.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">Authorized Material Segregation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Metals, high-grade aluminum gantries, stainless steel guide rails, and electronics are channeled through authorized Indian e-waste recyclers for green disposal and recycling.
            </p>
          </div>
        </div>
      </section>

      {/* Form & FAQ Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Pickup Request Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg">
          <div className="space-y-1 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Take-Back & Trade-In
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Request Machinery E-Waste Pickup
            </h3>
            <p className="text-xs text-slate-500">
              Schedule inspection and authorized removal for retired printing equipment.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Pickup Request Logged
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our logistics and environmental desk will review your equipment pickup request for <strong>{formData.equipmentType}</strong> in <strong>{formData.city}</strong>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 text-xs font-semibold text-emerald-700 hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Deepak Sethi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Firm Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Krishna Print Works"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99999 36706"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Equipment Category *
                  </label>
                  <select
                    value={formData.equipmentType}
                    onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-emerald-600"
                  >
                    <option value="Old UV Flatbed Printer">Old Industrial UV Flatbed</option>
                    <option value="Solvent / Eco-Solvent Roll Printer">Solvent / Eco-Solvent Roll Printer</option>
                    <option value="Textile Sublimation Line">Textile Sublimation Machine</option>
                    <option value="Decommissioned Printheads / Parts">Printheads & Electronic PCBs</option>
                    <option value="Depleted Ink Drums & Cartridges">Depleted Certified Ink Drums</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City & State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. New Delhi / Surat / Noida"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Factory / Warehouse Pickup Address
                </label>
                <input
                  type="text"
                  placeholder="Street address, industrial plot number, area..."
                  value={formData.pickupAddress}
                  onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Machine Model, Operational Condition, or Trade-In Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="State brand name, years in service, or if you plan to upgrade to a new Mimaki or UV flatbed..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow disabled:opacity-50"
              >
                {submitting ? 'Submitting Request...' : 'Schedule Responsible E-Waste Pickup'}
              </button>
            </form>
          )}
        </div>

        {/* E-Waste FAQs (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-700" />
              <span>Frequently Asked Questions</span>
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl bg-white overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full text-left px-4 py-3 flex items-center justify-between text-xs font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-3 text-[11px] text-slate-500">
              For corporate compliance queries, reach out to our Kirti Nagar environmental coordinator at <a href="mailto:veekayenterprises1@gmail.com" className="text-emerald-700 font-semibold underline">veekayenterprises1@gmail.com</a>.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
