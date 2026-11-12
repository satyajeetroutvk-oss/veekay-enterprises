import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
  Printer,
  Package,
  Shirt,
  Building
} from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

export const Industries: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  const industryList = [
    {
      id: 'signage',
      title: 'Signage & Outdoor Advertising',
      tagline: 'High-durability hoardings, illuminated backlit fascias, vehicle fleets & retail displays',
      icon: Building,
      substrates: ['Backlit Flex Banners', 'Cast Vinyl & Vehicle Wraps', 'Cast Acrylic Sheets (3mm-25mm)', 'Aluminium Composite Panels (ACP)', 'Fluted Polypropylene', 'Foam PVC Forex Boards'],
      inks: ['LED UV Curable Inks', 'Hard & Flexible UV Formulations', 'Eco-Solvent Inks'],
      recommendedModels: ['Mimaki JFX200-2513EX (8x4 ft)', 'Industrial UV Roll to Roll 3.2m', 'Mimaki UCJV300-160 Print & Cut', 'Industrial UV Flatbed 2030'],
      categoryId: 'digital-sign',
      overview: 'Sign manufacturers require reliable high-density opacity, weatherproof exterior longevity, and fast curing. Our industrial UV roll and flatbed systems ensure deep rich black density and scratch resistance without lamination overhead.'
    },
    {
      id: 'textile',
      title: 'Textile Mills & Garment Manufacturers',
      tagline: 'Sublimation sportswear, direct natural silk sarees, cotton kurti fabrics, and carpets',
      icon: Shirt,
      substrates: ['Polyester Knit & Woven Fabrics', 'Pure Mulberry Silk & Chiffon', 'Combed Cotton & Viscose Rayon', 'Loop & Cut Pile Tufted Carpets', 'Woolen Knitwear & Pashmina Shawls'],
      inks: ['Ultra-HD Sublimation Inks', 'Direct Reactive Inks', 'Eco Pigment Inks', 'Acid Dyes for Wool'],
      recommendedModels: ['VKE-2008A TX High Speed Sublimation', 'YSR 1816 Direct Reactive Printer', 'Digital Carpet Printer SD3200', 'Wool Sweater & Shawl Direct Printing Machine', 'DTF Fuji Combo'],
      categoryId: 'textile',
      overview: 'From the saree processing houses of Surat to the home textile hubs of Panipat and knitwear mills of Ludhiana, Vee Kay delivers heavy-duty textile printers engineered for continuous 24-hour factory shifts.'
    },
    {
      id: 'mimaki-tech',
      title: 'Mimaki Japanese Engineering Fleet',
      tagline: 'World-standard precision inkjet, integrated contour cutting, and 2.5D texture printing',
      icon: Printer,
      substrates: ['High-tack Vinyl', 'Cast Films', 'Wood Panels', 'Ceramic Tiles', 'Cylindrical Bottles (Kebab)'],
      inks: ['Mimaki Original LUS & CS UV Inks', 'Original Sb610 Sublimation', 'Eco-Solvent SS21 / BS4'],
      recommendedModels: ['Mimaki JV330-160', 'Mimaki CJV200-160', 'Mimaki UJF-7151 Plus II', 'Mimaki JFX600-2513 (200 sqm/h)'],
      categoryId: 'mimaki',
      overview: 'As an authorized distributor of Mimaki Japan, we provide guaranteed factory support, genuine consumables, and factory-certified engineers for commercial shops requiring millimeter-precise Japanese accuracy.'
    },
    {
      id: 'label-pack',
      title: 'Label, Carton & Specialized Packaging',
      tagline: 'On-demand short run labels, serialized anti-counterfeit QR codes & 3D UV DTF stickers',
      icon: Package,
      substrates: ['Roll-fed BOPP Labels', 'Glass Bottles & Drinkware', 'Kraft Paperboard & Folding Cartons', 'Hard Electronic Appliance Housings'],
      inks: ['Fast Dry Pigment Label Inks', 'UV DTF Film A/B Curing Inks', 'High Tack Transfer Varnishes'],
      recommendedModels: ['Industrial UV DTF Printing Machine', 'Digital Inkjet Roll Label Printer', 'High Speed Industrial QR Code Printer'],
      categoryId: 'label-packaging',
      overview: 'Eliminate costly cylinder and plate tooling for short-to-medium packaging batches. Print serialized track-and-trace QR codes, product labels, and UV DTF transfers on demand.'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
          Target Manufacturing Sectors
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Industrial Solutions Tailored for Indian Manufacturing
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Over 36 years, Vee Kay Enterprises has architected tailored machinery deployments across signage, apparel, commercial packaging, and specialized manufacturing lines.
        </p>
      </div>

      {/* Industry Sections */}
      <div className="space-y-10">
        {industryList.map((ind) => {
          const IconComponent = ind.icon;
          return (
            <div
              key={ind.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow space-y-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{ind.title}</h2>
                    <p className="text-xs sm:text-sm text-sky-800 font-medium">{ind.tagline}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openQuoteModal({ category: ind.categoryId })}
                    className="px-4 py-2 rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold cursor-pointer shadow-sm"
                  >
                    Request Sector Quotation
                  </button>
                  <Link
                    to={`/category/${ind.categoryId}`}
                    className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1"
                  >
                    <span>View Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {ind.overview}
              </p>

              {/* Substrates and Recommended Hardware Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                
                {/* Substrates */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Compatible Substrates
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {ind.substrates.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ink Formulations */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Recommended Ink Formulations
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {ind.inks.map((ink, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ink}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Flagship Machines */}
                <div className="space-y-2.5 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Flagship Machinery Line
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {ind.recommendedModels.map((m, idx) => (
                      <li key={idx} className="font-medium text-slate-800">
                        • {m}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 text-[11px] text-slate-500">
                    Specs: contact us for speed curves and factory electrical loads.
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
