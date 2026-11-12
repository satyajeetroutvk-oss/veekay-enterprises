import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Wrench,
  Star,
  CheckCircle,
  Building,
  FileText,
  Users,
  Recycle,
  MapPin,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PRINTER_CATEGORIES, PRINTERS_DATA } from '../data/printers';
import { BRANCHES_DATA } from '../data/branches';
import { REVIEWS_DATA, GOOGLE_PROFILE_URL } from '../data/reviews';
import { BLOG_POSTS } from '../data/blog';
import { PrinterVisual } from '../components/PrinterVisual';
import { FAQ } from '../components/FAQ.jsx';
import { HeroSlider } from '../components/HeroSlider.jsx';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 sm:pb-32">
      
      {/* ========================================================
          1. HERO SLIDER & THREE STAT COUNTERS UNDER HERO
         ======================================================== */}
      <section className="relative">
        <HeroSlider />

        {/* Three Animated / Quantitative Stat Counters Under Hero */}
        <div className="bg-slate-900 border-b border-slate-800 py-6 sm:py-8 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 text-center">
              
              <div className="pt-2 sm:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">
                  {t.hero.statYears}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  {t.hero.statYearsLabel}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Continuous operations from Kirti Nagar since 1990</p>
              </div>

              <div className="pt-4 sm:pt-0 sm:px-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 tabular-nums tracking-tight">
                  {t.hero.statProducts}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  {t.hero.statProductsLabel}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Supplying manufacturing plants across India</p>
              </div>

              <div className="pt-4 sm:pt-0 sm:px-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 tabular-nums tracking-tight">
                  {t.hero.statRating}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  {t.hero.statRatingLabel}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Verified customer reviews on Google Business</p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          2. PRINTER CATEGORIES OVERVIEW
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Machinery Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {t.categories.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {t.categories.subtitle}
            </p>
          </div>
          <Link
            to="/printers"
            className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 shrink-0"
          >
            <span>{t.categories.viewAll}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINTER_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-500 hover:shadow-xl transition-all duration-200 flex flex-col group"
            >
              <div className="p-4 bg-slate-950">
                <PrinterVisual categoryId={cat.id} modelName={cat.title} />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
                    {cat.subcategories.length} Specialized Subcategories
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {cat.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {cat.subcategories.slice(0, 3).map((sub: any, i: number) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                      >
                        {sub}
                      </span>
                    ))}
                    {cat.subcategories.length > 3 && (
                      <span className="text-[11px] font-medium text-slate-400 self-center">
                        +{cat.subcategories.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    to={`/printers?cat=${cat.id}`}
                    className="text-xs font-semibold text-slate-700 hover:text-sky-700 flex items-center gap-1"
                  >
                    <span>{t.categories.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openQuoteModal({ category: cat.id })}
                    className="px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {t.categories.requestQuote}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================
          3. INDUSTRIES EMPOWERED GRID
         ======================================================== */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Sector Specializations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t.industries.title}
            </h2>
            <p className="text-sm text-slate-600">
              {t.industries.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: 'Signage & Advertising',
                desc: 'Large format outdoor hoardings, illuminated backlit acrylics, ACP panels, and vehicle wraps.',
                tag: 'UV Flatbed & Roll',
                link: '/category/digital-sign',
              },
              {
                title: 'Textile Industry',
                desc: 'Direct reactive printing on natural silk & cotton, roll sublimation, and carpet decoration.',
                tag: 'Sublimation & Reactive',
                link: '/category/textile',
              },
              {
                title: 'Mimaki Complete Range',
                desc: 'Japanese engineered precision eco-solvent, UV print-and-cut, and 2.5D texture printing.',
                tag: 'Japanese Technology',
                link: '/category/mimaki',
              },
              {
                title: 'Label & Packaging',
                desc: 'High speed UV DTF peel transfers, serialized anti-counterfeit QR codes, and roll labels.',
                tag: 'Packaging Automation',
                link: '/category/label-packaging',
              },
              {
                title: 'Apparel & Knitwear',
                desc: 'Specialty machines for finished sweaters, pashmina shawls, DTG t-shirts, and embroidery.',
                tag: 'Garments & Woolens',
                link: '/category/textile',
              },
            ].map((ind, i) => (
              <Link
                key={i}
                to={ind.link}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-sky-500 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block">
                    {ind.tag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-sky-700 group-hover:underline">
                  <span>Explore machinery</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================
          4. LEGACY / ABOUT PREVIEW
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Heritage Since 1990
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Building Industrial Confidence Since 1990
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Founded in <strong>5/7, Block 5, Kirti Nagar Industrial Area, New Delhi</strong>, Vee Kay Enterprises was established with a singular mission: bridging international manufacturing precision with dependable local wholesale supply. Over 36 years, we have grown from a specialized parts distributor into one of India’s premier suppliers of industrial printing systems.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Whether equipping textile mills in Surat, knitwear factories in Ludhiana, or premier sign manufacturers in Delhi NCR and Mumbai, our heritage is built on honest pricing, certified equipment authenticity, and lifelong technical hand-holding.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <span>Read Our Full Story & Milestones</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/distributor"
                  className="px-5 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-colors"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Core Operating Tenets
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Counterfeit Policy:</strong> 100% original inks, printheads, and factory-sealed assemblies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Stock Buffer in Delhi:</strong> Heavy machinery and immediate replacement parts ready for immediate transport.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Showroom Sampling:</strong> Test actual print strike-offs on your unique substrates in Kirti Nagar.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          5. NATIONWIDE BRANCH NETWORK
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              National Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {t.branches.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {t.branches.subtitle}
            </p>
          </div>
          <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-sky-600" />
            <span>12 Strategic Industrial Branches + Central Kirti Nagar Depot</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BRANCHES_DATA.map((branch) => (
            <div
              key={branch.id}
              className={`p-4 rounded-xl border transition-all ${
                branch.isHeadOffice
                  ? 'bg-sky-50/70 border-sky-400 shadow-sm ring-1 ring-sky-300'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                  <span>{branch.city}</span>
                </span>
                {branch.isHeadOffice ? (
                  <span className="text-[10px] font-bold text-sky-800 bg-sky-200/80 px-2 py-0.5 rounded-full">
                    HQ
                  </span>
                ) : (
                  <span className="text-[10px] font-medium text-slate-500 uppercase">
                    {branch.region} Hub
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {branch.address}
              </p>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">{branch.state}</span>
                <a
                  href={`tel:${branch.phone}`}
                  className="font-semibold text-sky-700 hover:text-sky-900"
                >
                  {branch.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================
          6. GOOGLE REVIEWS & TESTIMONIALS
         ======================================================== */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">4.9 / 5.0 on Google</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t.reviews.title}
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                {t.reviews.subtitle}
              </p>
            </div>

            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-sky-300 hover:text-white flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>{t.reviews.viewOnGoogle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500">{review.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-xs font-bold text-white">{review.author}</div>
                  <div className="text-[11px] text-slate-400">{review.designation}, {review.company}</div>
                  <div className="text-[10px] text-sky-400 mt-0.5">{review.city}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8">
            Verified B2B feedback from Google Business Profile. For real-time review widgets or Google Places API sync, refer to <code className="text-slate-400">src/data/reviews.ts</code>.
          </p>
        </div>
      </section>


      {/* ========================================================
          7 & 8. BANNERS: CATALOGUE CALLOUT & DISTRIBUTOR
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Catalogue Banner */}
          <div className="bg-gradient-to-br from-sky-900 to-slate-900 text-white rounded-2xl p-8 border border-sky-800/60 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>Engineering Documentation</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.catalogue.bannerTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.catalogue.bannerDesc} Complete with substrate compatibility tables and floor footprint requirements.
              </p>
            </div>

            <div>
              <Link
                to="/catalogue"
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-sky-900 font-bold text-xs inline-flex items-center gap-2 shadow"
              >
                <span>{t.catalogue.downloadBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Distributor Banner */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-8 border border-indigo-900/60 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>Wholesale Partnership</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.distributorBanner.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.distributorBanner.desc}
              </p>
            </div>

            <div>
              <Link
                to="/distributor"
                className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs inline-flex items-center gap-2 shadow"
              >
                <span>{t.distributorBanner.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          9. BLOG / KNOWLEDGE INSIGHTS PREVIEW
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Technical Insights
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Industrial Printing Knowledge & Updates
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Engineering guides, machine maintenance protocols, and wholesale distribution perspectives
            </p>
          </div>
          <Link
            to="/blog"
            className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 shrink-0"
          >
            <span>View All Articles</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-500 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-sky-700">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">{post.publishDate}</span>
                <Link
                  to={`/blog#${post.slug}`}
                  className="font-semibold text-sky-700 group-hover:underline flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* ========================================================
          10. RESPONSIBLE E-WASTE PREVIEW CARD
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 border border-emerald-800/60 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Recycle className="w-4 h-4" />
              <span>Environmental Responsibility & Indian E-Waste Compliance</span>
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Responsible Printer & Electronic Component Take-Back
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 max-w-2xl">
              Old UV curable printheads, ink containers, control PCBs, and decommissioned machines handled in compliance with official Indian e-waste disposal standards.
            </p>
          </div>

          <Link
            to="/e-waste"
            className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs whitespace-nowrap shadow transition-colors flex items-center gap-1.5"
          >
            <span>Learn About E-Waste & Request Pickup</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>


      {/* ========================================================
          11. FREQUENTLY ASKED QUESTIONS (FAQ)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQ
          heading="Frequently Asked Questions"
          subheading="Essential operational guidance on industrial printer maintenance, manufacturer warranty terms, and nationwide dispatch lead times."
        />
      </section>

    </div>
  );
};
