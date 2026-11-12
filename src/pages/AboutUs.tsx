import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Clock,
  Phone,
  CheckCircle,
  Truck,
  Wrench,
  ArrowRight
} from 'lucide-react';
import { BRANCHES_DATA } from '../data/branches';
import { useQuoteModal } from '../context/QuoteModalContext';

export const AboutUs: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="space-y-16 py-10">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950 border border-sky-800/60 text-sky-300 text-xs font-semibold">
            <span>Operating Since 1990 · Kirti Nagar, New Delhi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Three Decades of Precision Engineering & Industrial Printing Trust
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Headquartered in the Kirti Nagar Industrial Area of New Delhi, Vee Kay Enterprises is an authorized distributor and wholesale supplier of high-precision industrial printing machinery, Mimaki Japanese equipment, digital textile printers, and certified inks across India.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow transition-all cursor-pointer"
            >
              Request Commercial Consultation
            </button>
            <Link
              to="/printers"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold transition-all"
            >
              Explore Machinery Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Our Roots in Kirti Nagar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Our Industrial Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              From Kirti Nagar Roots to Pan-India Manufacturing Backbone
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              When Vee Kay Enterprises opened its doors in 1990 at <strong>5/7, Block 5, Kirti Nagar Industrial Area</strong>, the Indian digital printing landscape was in its infancy. Local converters and signage fabricators struggled with unreliable grey-market machinery, inconsistent ink batches, and lack of trained field technicians.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our founders made an uncompromising commitment: provide only factory-certified equipment, transparent wholesale billing, and dedicated in-house technical support. Today, over 36 years later, that core philosophy has earned the enduring trust of over 5,000 businesses across Delhi NCR, Gujarat, Punjab, Maharashtra, Karnataka, and Eastern India.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-bold text-sky-700">36+</div>
                <div className="text-xs text-slate-600 font-medium mt-1">Years Operating Continuous Service</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-bold text-sky-700">12+</div>
                <div className="text-xs text-slate-600 font-medium mt-1">Industrial Branch Hubs Across India</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 text-slate-100 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-sky-400" />
              <span>The Vee Kay Three-Pillar Guarantee</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <h4 className="font-bold text-sky-300">1. Honest & Fair Wholesale Pricing</h4>
                <p className="text-slate-400 leading-relaxed">
                  Clear, upfront quotations with no hidden charges. Machine pricing is backed by official factory invoice channels and direct OEM warranty terms.
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <h4 className="font-bold text-sky-300">2. Punctual Freight & Logistics Dispatch</h4>
                <p className="text-slate-400 leading-relaxed">
                  Buffered central inventory in New Delhi guarantees immediate dispatch of high-speed sublimation printers, UV curable systems, and certified ink drums.
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <h4 className="font-bold text-sky-300">3. Rapid Technical Field Engineering</h4>
                <p className="text-slate-400 leading-relaxed">
                  Trained engineers stationed across North, West, South, and East India for on-site machine commissioning, ICC color profiling, and printhead maintenance.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Historical Milestones */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Timeline of Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Decades of Evolution & Technical Milestone
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                year: '1990',
                title: 'Founding in Kirti Nagar',
                desc: 'Established in Kirti Nagar Industrial Area, New Delhi as a dedicated distributor of industrial print machinery and precision spares.',
              },
              {
                year: '2004',
                title: 'Textile Digital Shift',
                desc: 'Pioneered roll sublimation and reactive direct textile machinery distribution into the booming export hubs of Surat, Panipat, and Ludhiana.',
              },
              {
                year: '2014',
                title: 'Mimaki Partnership Expansion',
                desc: 'Expanded authorized distribution of Japanese Mimaki wide-format printers, UV flatbeds, and high-precision print-and-cut systems.',
              },
              {
                year: '2026',
                title: 'Nationwide 12-Branch Reach',
                desc: 'Operating with 36+ years of heritage, a comprehensive 5000+ machine track record, and a 4.9 ★ verified Google reputation.',
              },
            ].map((milestone, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 relative"
              >
                <div className="text-2xl font-black text-sky-700">{milestone.year}</div>
                <h3 className="text-sm font-bold text-slate-900">{milestone.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Demonstration Showroom */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Live Testing Facility
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Kirti Nagar Central Demonstration Suite & Warehouse
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We welcome factory managers, trade printers, and commercial print entrepreneurs to visit our Kirti Nagar facility. Bring your actual production substrates—whether genuine leather, delicate pashmina wool, 5mm acrylic, or custom corrugated cartons—and watch them printed live on our demonstration machines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="text-xs font-bold text-white mb-1">Substrate Testing Lab</div>
              <p className="text-[11px] text-slate-400">Free test strike-offs and ICC ink density calibration before purchasing.</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="text-xs font-bold text-white mb-1">Central Parts Depot</div>
              <p className="text-[11px] text-slate-400">Thousands of certified spare parts, wiper blades, dampers, and factory inks on shelf.</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="text-xs font-bold text-white mb-1">Operator Training Center</div>
              <p className="text-[11px] text-slate-400">Hands-on training for your machine operators on RIP software and head maintenance.</p>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-slate-800">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>5/7, Block 5, Kirti Nagar Industrial Area, New Delhi 110015</span>
            </div>
            <a
              href="https://share.google/giQckxTgBtVPaR7WL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
            >
              <span>Get Directions on Google Maps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
