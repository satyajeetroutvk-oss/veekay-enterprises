import React, { useState } from 'react';
import {
  Users,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  Send,
  Building,
  MapPin,
  Calendar,
  Briefcase,
  Phone,
  Mail,
  User,
  ArrowRight
} from 'lucide-react';

export const BecomeDistributorPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    yearEstablished: '',
    hqCity: '',
    employeeCount: '1-10',
    branchCount: '1',
    currentBrands: '',
    contactName: '',
    designation: '',
    phone: '',
    email: '',
    productsDealt: '',
    targetIndustries: [] as string[],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const industryOptions = [
    'Signage & Advertising',
    'Textile & Leather',
    'Engineering & Industrial',
    'Wood & Furniture',
    'Stone & Ceramics',
    'Awards & Promotional Gifts',
    'Packaging & Labels',
  ];

  const handleIndustryToggle = (industry: string) => {
    setFormData((prev) => {
      const exists = prev.targetIndustries.includes(industry);
      return {
        ...prev,
        targetIndustries: exists
          ? prev.targetIndustries.filter((i) => i !== industry)
          : [...prev.targetIndustries, industry],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    /**
     * PRODUCTION DISTRIBUTOR ONBOARDING ENDPOINT:
     * e.g. await fetch('/api/distributor-applications', { method: 'POST', body: JSON.stringify(formData) });
     */
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      const summary = `*Authorized Distributor Application - Vee Kay Enterprises*\n` +
        `• Company: ${formData.companyName} (Est. ${formData.yearEstablished})\n` +
        `• HQ City: ${formData.hqCity}\n` +
        `• Contact: ${formData.contactName} (${formData.designation})\n` +
        `• Phone: ${formData.phone}\n` +
        `• Email: ${formData.email}\n` +
        `• Current Brands: ${formData.currentBrands || 'None'}\n` +
        `• Target Sectors: ${formData.targetIndustries.join(', ') || 'All'}\n` +
        `• Message: ${formData.message || 'Ready for partnership discussion.'}`;

      const waUrl = `https://wa.me/919999936706?text=${encodeURIComponent(summary)}`;
      window.open(waUrl, '_blank');
    }, 650);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Partnership Hero Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-indigo-900/60 shadow-xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-900/80 border border-indigo-700/60 text-indigo-200 text-xs font-semibold">
          <Users className="w-4 h-4 text-indigo-400" />
          <span>Authorized Partner Channel · National Wholesale Network</span>
        </div>

        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Become an Authorized Vee Kay Distributor
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Expand your regional machinery dealership with India’s trusted industrial supplier since 1990. Gain exclusive wholesale discount schedules, comprehensive technical catalogues, central inventory buffer from Kirti Nagar, and factory-trained engineer backup.
          </p>
        </div>

        {/* 4 Core Pillars of Vee Kay Dealership */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-indigo-900/80 text-xs">
          <div className="bg-slate-950/60 p-4 rounded-xl border border-indigo-900/40 space-y-1">
            <TrendingUp className="w-4 h-4 text-indigo-400" />
            <h4 className="font-bold text-white">Tiered Wholesale Discounts</h4>
            <p className="text-slate-400">Competitive margin structures on Mimaki, UV flatbeds, textile lines, and consumables.</p>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-indigo-900/40 space-y-1">
            <Building className="w-4 h-4 text-indigo-400" />
            <h4 className="font-bold text-white">Central Inventory Backing</h4>
            <p className="text-slate-400">Never lose a deal to stockouts. Rely on our heavy Delhi inventory buffer for rapid fulfillment.</p>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-indigo-900/40 space-y-1">
            <Award className="w-4 h-4 text-indigo-400" />
            <h4 className="font-bold text-white">Technical Training</h4>
            <p className="text-slate-400">Comprehensive training for your service technicians at our Kirti Nagar engineering showroom.</p>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-indigo-900/40 space-y-1">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <h4 className="font-bold text-white">Regional Protection</h4>
            <p className="text-slate-400">Qualified leads passed directly to authorized regional distributors in designated territories.</p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Information (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Who We Look For
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We partner with established machinery dealers, graphic consumables distributors, and industrial supply companies with active local sales networks in manufacturing, textile, or signage hubs.
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              Territories Open for Dealership
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                <span>Tier 1: Western & Southern Textile Centers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                <span>Tier 2: Fast-Growing Signage Clusters in Central & East India</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                <span>Industrial Export Corridors & Special Economic Zones</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="font-bold text-slate-800">Direct Partner Desk:</div>
              <div>Phone: +91 99999 36706</div>
              <div>Email: veekayenterprises1@gmail.com</div>
              <div>Head Office: 5/7, Block 5, Kirti Nagar, New Delhi</div>
            </div>
          </div>
        </div>

        {/* Right Form (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg">
          {submitted ? (
            <div className="text-center py-12 space-y-5 animate-in fade-in duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Application Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Thank you for applying, <strong>{formData.contactName}</strong> from <strong>{formData.companyName}</strong>. Our director of dealer networks will evaluate your firm profile and reach out within 1 business day.
              </p>
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Edit or Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Authorized Distributor Application Form
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Please provide thorough business details to expedite your partnership tier assessment.
                </p>
              </div>

              {/* Company Details Block */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-800 border-b border-slate-100 pb-1">
                  1. Corporate Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gujarat Print Solutions Pvt Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Year of Establishment *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2008"
                      value={formData.yearEstablished}
                      onChange={(e) => setFormData({ ...formData, yearEstablished: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Headquarters City / Country *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Surat, Gujarat, India"
                      value={formData.hqCity}
                      onChange={(e) => setFormData({ ...formData, hqCity: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Number of Employees
                    </label>
                    <select
                      value={formData.employeeCount}
                      onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-sky-600"
                    >
                      <option value="1-10">1 - 10 employees</option>
                      <option value="11-50">11 - 50 employees</option>
                      <option value="51-100">51 - 100 employees</option>
                      <option value="100+">100+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Number of Branches / Offices
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2 Offices (Surat and Ahmedabad)"
                      value={formData.branchCount}
                      onChange={(e) => setFormData({ ...formData, branchCount: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Brands Distributed
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Local Inks, Plotters, Heat Presses"
                      value={formData.currentBrands}
                      onChange={(e) => setFormData({ ...formData, currentBrands: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Person Details */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-800 border-b border-slate-100 pb-1">
                  2. Authorized Contact Person
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Person Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sandeep Patel"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Designation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Managing Partner / Director"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Direct Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sandeep@dealership.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                    />
                  </div>
                </div>
              </div>

              {/* Target Sectors & Portfolio */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-800 border-b border-slate-100 pb-1">
                  3. Market Focus & Industries
                </h4>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Target Industries (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {industryOptions.map((ind) => {
                      const checked = formData.targetIndustries.includes(ind);
                      return (
                        <button
                          key={ind}
                          type="button"
                          onClick={() => handleIndustryToggle(ind)}
                          className={`text-left p-2 rounded-lg text-xs font-medium border transition-colors flex items-center justify-between ${
                            checked
                              ? 'bg-sky-50 border-sky-600 text-sky-900 font-semibold'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span>{ind}</span>
                          {checked && <CheckCircle2 className="w-3.5 h-3.5 text-sky-700" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Products Currently Dealt With
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Eco-Solvent inks, media rolls, signage materials"
                    value={formData.productsDealt}
                    onChange={(e) => setFormData({ ...formData, productsDealt: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Partnership Vision or Specific Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current distribution coverage, annual machinery turnover, or specific territories of interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md disabled:opacity-50"
                >
                  {submitting ? 'Submitting Application...' : 'Submit Authorized Distributor Application'}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>

    </div>
  );
};
