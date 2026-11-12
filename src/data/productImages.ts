/**
 * Vee Kay Enterprises - Official Product Image Registry
 * 
 * Maps the 5 specified product images exactly by brand/model filename:
 * 1. VKE-2008A TX.png -> product "VKE-2008A TX"
 * 2. VKE-3208 TX.png -> product "VKE-3208 TX"
 * 3. V1804E.png -> product "V1804E"
 * 4. V1808E.png -> product "V1808E"
 * 5. mimaki ts100-160.png -> product "Mimaki TS100-160" (brand: Mimaki)
 */

export interface ProductImageMeta {
  modelName: string;
  brand: string;
  fileName: string;
  webpUrl: string;
  pngUrl: string;
  altText: string;
  caption: string;
  description: string;
  specsSummary: string;
}

export const OFFICIAL_PRODUCT_IMAGES: ProductImageMeta[] = [
  {
    modelName: 'VKE-2008A TX',
    brand: 'Vee Kay Enterprises',
    fileName: 'VKE-2008A TX.png',
    webpUrl: '/assets/products/VKE-2008A TX.webp?v=7',
    pngUrl: '/assets/products/VKE-2008A TX.png?v=7',
    altText: 'VKE-2008A TX',
    caption: 'VKE-2008A TX',
    description: 'Flagship high-productivity roll sublimation workhorse engineered for fashion textiles, sports jerseys, and polyester transfer papers.',
    specsSummary: '1900 mm (1.9m) · 8x Epson i3200-A1 · 280 m²/hr',
  },
  {
    modelName: 'VKE-3208 TX',
    brand: 'Vee Kay Enterprises',
    fileName: 'VKE-3208 TX.png',
    webpUrl: '/assets/products/VKE-3208 TX.webp?v=3',
    pngUrl: '/assets/products/VKE-3208 TX.png?v=3',
    altText: 'VKE-3208 TX',
    caption: 'VKE-3208 TX',
    description: 'Extra-wide 3.2m roll dye-sublimation printer designed for home textiles, drapes, bedding sets, and seamless illuminated banners.',
    specsSummary: '3200 mm (3.2m) · 8x Micro-Piezo · 320 m²/hr',
  },
  {
    modelName: 'V1804E',
    brand: 'Vee Kay Enterprises',
    fileName: 'V1804E.png',
    webpUrl: '/assets/products/V1804E.webp?v=4',
    pngUrl: '/assets/products/V1804E.png?v=4',
    altText: 'V1804E',
    caption: 'V1804E',
    description: 'Cost-effective 4-head industrial dye sublimation printer for apparel brands, activewear converters, and boutique garment manufacturers.',
    specsSummary: '1800 mm (1.8m) · 4x Micro-Piezo Heads · 140 m²/hr',
  },
  {
    modelName: 'V1808E',
    brand: 'Vee Kay Enterprises',
    fileName: 'V1808E.png',
    webpUrl: '/assets/products/V1808E.webp?v=5',
    pngUrl: '/assets/products/V1808E.png?v=5',
    altText: 'V1808E',
    caption: 'V1808E',
    description: 'High-velocity 8-head sublimation printer for garment export houses in Surat, Panipat, Ludhiana, and Tirupur requiring 24/7 continuous output.',
    specsSummary: '1800 mm (1.8m) · 8x Staggered Heads · 260 m²/hr',
  },
  {
    modelName: 'Mimaki TS100-160',
    brand: 'Mimaki',
    fileName: 'mimaki-ts100-160.png',
    webpUrl: '/assets/products/mimaki/mimaki-ts100-160.png',
    pngUrl: '/assets/products/mimaki/mimaki-ts100-160.png',
    altText: 'Mimaki TS100-160 Dye Sublimation Printer',
    caption: 'Mimaki TS100-160',
    description: 'Authentic entry dye-sublimation printer with NCU (Nozzle Check Unit) and NRS (Nozzle Recovery System) continuous reliability.',
    specsSummary: '1610 mm (63.4 in) · 2x Piezo Variable-Dot · 70 m²/hr',
  },
  {
    modelName: 'Mimaki JV200-160',
    brand: 'Mimaki',
    fileName: 'mimaki-jv200-160.png',
    webpUrl: '/assets/products/mimaki/mimaki-jv200-160.png',
    pngUrl: '/assets/products/mimaki/mimaki-jv200-160.png',
    altText: 'Mimaki JV200-160 Eco-Solvent Printer',
    caption: 'Mimaki JV200-160',
    description: 'High-speed entry-level eco-solvent printer delivering Mimaki signature quality.',
    specsSummary: '1610 mm (1.6m) · High Speed Head · Eco-Solvent',
  },
  {
    modelName: 'Mimaki JV330-160',
    brand: 'Mimaki',
    fileName: 'mimaki-jv330-160.png',
    webpUrl: '/assets/products/mimaki/mimaki-jv330-160.png',
    pngUrl: '/assets/products/mimaki/mimaki-jv330-160.png',
    altText: 'Mimaki JV330-160 Flagship Eco-Solvent',
    caption: 'Mimaki JV330-160',
    description: 'Mid-to-high-end flagship eco-solvent model for unmatched productivity with XY slitter.',
    specsSummary: '1610 mm (1.6m) · Deep Color Natural · XY Slitter',
  },
  {
    modelName: 'Mimaki SWJ-320EA',
    brand: 'Mimaki',
    fileName: 'mimaki-swj-320ea.png',
    webpUrl: '/assets/products/mimaki/mimaki-swj-320ea.png',
    pngUrl: '/assets/products/mimaki/mimaki-swj-320ea.png',
    altText: 'Mimaki SWJ-320EA 3.2m Solvent Printer',
    caption: 'Mimaki SWJ-320EA',
    description: '3.2-meter super-wide solvent printer delivering Japanese reliability at high volume.',
    specsSummary: '3200 mm (3.2m) · Twin Roll Print · Super-Wide Solvent',
  },
  {
    modelName: 'Mimaki CJV200-160',
    brand: 'Mimaki',
    fileName: 'mimaki-cjv200-160.png',
    webpUrl: '/assets/products/mimaki/mimaki-cjv200-160.png',
    pngUrl: '/assets/products/mimaki/mimaki-cjv200-160.png',
    altText: 'Mimaki CJV200-160 Printer Cutter',
    caption: 'Mimaki CJV200-160',
    description: 'Integrated print-and-cut eco-solvent system for precision contour cut decals.',
    specsSummary: '1610 mm (1.6m) · Integrated Contour Cut · Half-Cut Mode',
  },
  {
    modelName: 'Mimaki CJV330-160',
    brand: 'Mimaki',
    fileName: 'mimaki-cjv330-160.png',
    webpUrl: '/assets/products/mimaki/mimaki-cjv330-160.png',
    pngUrl: '/assets/products/mimaki/mimaki-cjv330-160.png',
    altText: 'Mimaki CJV330-160 Flagship Printer Cutter',
    caption: 'Mimaki CJV330-160',
    description: 'Flagship integrated print-and-cut machine with built-in XY slitting technology.',
    specsSummary: '1610 mm (1.6m) · High Speed Cut · XY Slitter',
  },
  {
    modelName: 'Mimaki UCJV300-160',
    brand: 'Mimaki',
    fileName: 'mimaki-ucjv300-160.png',
    webpUrl: '/assets/products/mimaki/mimaki-ucjv300-160.png',
    pngUrl: '/assets/products/mimaki/mimaki-ucjv300-160.png',
    altText: 'Mimaki UCJV300-160 UV LED Print & Cut',
    caption: 'Mimaki UCJV300-160',
    description: '4-layer and 5-layer day/night backlit printing with integrated contour cutting.',
    specsSummary: '1610 mm (1.6m) · 5-Layer Day/Night UV · Print & Cut',
  },
  {
    modelName: 'Mimaki UCJV330-160',
    brand: 'Mimaki',
    fileName: 'mimaki-ucjv330-160.png',
    webpUrl: '/assets/products/mimaki/mimaki-ucjv330-160.png',
    pngUrl: '/assets/products/mimaki/mimaki-ucjv330-160.png',
    altText: 'Mimaki UCJV330-160 High Speed UV Print & Cut',
    caption: 'Mimaki UCJV330-160',
    description: 'High-speed flagship UV print & cut system with 2.5D texture printing.',
    specsSummary: '1610 mm (1.6m) · 2.5D Embossed UV · XY Slitter',
  },
  {
    modelName: 'Mimaki UJV200-160',
    brand: 'Mimaki',
    fileName: 'mimaki-ujv200-160.png',
    webpUrl: '/assets/products/mimaki/mimaki-ujv200-160.png',
    pngUrl: '/assets/products/mimaki/mimaki-ujv200-160.png',
    altText: 'Mimaki UJV200-160 UV LED Roll Printer',
    caption: 'Mimaki UJV200-160',
    description: 'Affordable UV LED roll-to-roll printer with instant drying and versatile media support.',
    specsSummary: '1610 mm (1.6m) · Energy-Saving UV LED · Instant Cure',
  },
  {
    modelName: 'Mimaki UJ330H-160',
    brand: 'Mimaki',
    fileName: 'mimaki-uj330h-160.png',
    webpUrl: '/assets/products/mimaki/mimaki-uj330h-160.png',
    pngUrl: '/assets/products/mimaki/mimaki-uj330h-160.png',
    altText: 'Mimaki UJ330H-160 Hybrid UV Workstation',
    caption: 'Mimaki UJ330H-160',
    description: 'Industrial hybrid UV printer set for dedicated high-throughput roll graphics.',
    specsSummary: '1610 mm (1.6m) · Heavy Media Feed · UV LED Workstation',
  },
  {
    modelName: 'Mimaki SIJ-320UV',
    brand: 'Mimaki',
    fileName: 'mimaki-sij-320uv.png',
    webpUrl: '/assets/products/mimaki/mimaki-sij-320uv.png',
    pngUrl: '/assets/products/mimaki/mimaki-sij-320uv.png',
    altText: 'Mimaki SIJ-320UV 3.2m UV LED Roll Printer',
    caption: 'Mimaki SIJ-320UV',
    description: '3.2-meter high-precision UV LED printer for high-end wide-format backlit banners.',
    specsSummary: '3200 mm (3.2m) · Twin Roll UV · Backlit Specialist',
  },
  {
    modelName: 'Mimaki UJV55-320',
    brand: 'Mimaki',
    fileName: 'mimaki-ujv55-320.png',
    webpUrl: '/assets/products/mimaki/mimaki-ujv55-320.png',
    pngUrl: '/assets/products/mimaki/mimaki-ujv55-320.png',
    altText: 'Mimaki UJV55-320 3.2m UV LED Roll Printer',
    caption: 'Mimaki UJV55-320',
    description: 'High productivity 3.2m roll UV LED inkjet printer with built-in lightbox proofing.',
    specsSummary: '3200 mm (3.2m) · Built-in Lightbox · Twin-Roll Feeder',
  },
  {
    modelName: 'Mimaki UJV300DTF-75',
    brand: 'Mimaki',
    fileName: 'mimaki-ujv300dtf-75.png',
    webpUrl: '/assets/products/mimaki/mimaki-ujv300dtf-75.png',
    pngUrl: '/assets/products/mimaki/mimaki-ujv300dtf-75.png',
    altText: 'Mimaki UJV300DTF-75 Industrial UV DTF Transfer Printer',
    caption: 'Mimaki UJV300DTF-75',
    description: 'Dedicated industrial UV DTF transfer printer for multi-surface object branding.',
    specsSummary: '750 mm · UV DTF Peel Transfers · Varnish & Gloss',
  },
  {
    modelName: 'Mimaki UJF-3042MkII e',
    brand: 'Mimaki',
    fileName: 'mimaki-ujf-3042mkii-e.png',
    webpUrl: '/assets/products/mimaki/mimaki-ujf-3042mkii-e.png',
    pngUrl: '/assets/products/mimaki/mimaki-ujf-3042mkii-e.png',
    altText: 'Mimaki UJF-3042MkII e Tabletop UV Flatbed Printer',
    caption: 'Mimaki UJF-3042MkII e',
    description: 'A3 format high-precision UV LED flatbed printer for promotional items and gifts.',
    specsSummary: 'A3 (300 x 420 mm) · 153mm Height Clearance · Primer & Clear',
  },
  {
    modelName: 'Mimaki UJF-6042MkII e',
    brand: 'Mimaki',
    fileName: 'mimaki-ujf-6042mkii-e.png',
    webpUrl: '/assets/products/mimaki/mimaki-ujf-6042mkii-e.png',
    pngUrl: '/assets/products/mimaki/mimaki-ujf-6042mkii-e.png',
    altText: 'Mimaki UJF-6042MkII e A2 Tabletop UV Flatbed Printer',
    caption: 'Mimaki UJF-6042MkII e',
    description: 'A2 format tabletop UV flatbed for medium-volume customized merchandise.',
    specsSummary: 'A2 (610 x 420 mm) · 153mm Height Clearance · Enclosed Bed',
  },
  {
    modelName: 'Mimaki UJF-7151 Plus II',
    brand: 'Mimaki',
    fileName: 'mimaki-ujf-7151-plus-ii.png',
    webpUrl: '/assets/products/mimaki/mimaki-ujf-7151-plus-ii.png',
    pngUrl: '/assets/products/mimaki/mimaki-ujf-7151-plus-ii.png',
    altText: 'Mimaki UJF-7151 Plus II Industrial UV Flatbed Printer',
    caption: 'Mimaki UJF-7151 Plus II',
    description: 'High-performance industrial production flatbed with 8 printheads.',
    specsSummary: '710 x 510 mm · 8 Printheads · Ball Screw Drive Precision',
  },
  {
    modelName: 'Mimaki JFX200-2513EX',
    brand: 'Mimaki',
    fileName: 'mimaki-jfx200-2513ex.png',
    webpUrl: '/assets/products/mimaki/mimaki-jfx200-2513ex.png',
    pngUrl: '/assets/products/mimaki/mimaki-jfx200-2513ex.png',
    altText: 'Mimaki JFX200-2513EX 8x4 ft Industrial UV Flatbed',
    caption: 'Mimaki JFX200-2513EX',
    description: 'The benchmark 8x4 ft Japanese UV flatbed printer for sign & industrial display.',
    specsSummary: '2500 x 1300 mm (8x4 ft) · 2.5D Texture Maker · Zoned Vacuum',
  },
  {
    modelName: 'Mimaki JFX200-1213EX',
    brand: 'Mimaki',
    fileName: 'mimaki-jfx200-1213ex.png',
    webpUrl: '/assets/products/mimaki/mimaki-jfx200-1213ex.png',
    pngUrl: '/assets/products/mimaki/mimaki-jfx200-1213ex.png',
    altText: 'Mimaki JFX200-1213EX Compact 4x4 ft Industrial UV Flatbed',
    caption: 'Mimaki JFX200-1213EX',
    description: 'Compact 4x4 ft footprint industrial flatbed for workshops with limited space.',
    specsSummary: '1200 x 1300 mm (4x4 ft) · JFX Platform · Space-Saving',
  },
  {
    modelName: 'Mimaki JFX600-2513',
    brand: 'Mimaki',
    fileName: 'mimaki-jfx600-2513.png',
    webpUrl: '/assets/products/mimaki/mimaki-jfx600-2513.png',
    pngUrl: '/assets/products/mimaki/mimaki-jfx600-2513.png',
    altText: 'Mimaki JFX600-2513 Ultra High Speed 200 sqm/h UV Flatbed',
    caption: 'Mimaki JFX600-2513',
    description: 'Ultra-high-speed industrial flatbed boasting up to 200 sqm/hr productivity.',
    specsSummary: '2500 x 1300 mm · 16 Heads · Up to 200 m²/hr · MDL Robotics',
  },
  {
    modelName: 'Mimaki JFX600-2531',
    brand: 'Mimaki',
    fileName: 'mimaki-jfx600-2531.png',
    webpUrl: '/assets/products/mimaki/mimaki-jfx600-2531.png',
    pngUrl: '/assets/products/mimaki/mimaki-jfx600-2531.png',
    altText: 'Mimaki JFX600-2531 3.1m Extended Architectural UV Flatbed',
    caption: 'Mimaki JFX600-2531',
    description: 'Massive 2,500 x 3,100 mm printable bed size engineered for architectural sheets.',
    specsSummary: '2500 x 3100 mm · 3.1m Length · 2-Zone Alternate Origin',
  },
  {
    modelName: 'Mimaki TS330-1600',
    brand: 'Mimaki',
    fileName: 'mimaki-ts330-1600.png',
    webpUrl: '/assets/products/mimaki/mimaki-ts330-1600.png',
    pngUrl: '/assets/products/mimaki/mimaki-ts330-1600.png',
    altText: 'Mimaki TS330-1600 High Productivity Dye Sublimation Printer',
    caption: 'Mimaki TS330-1600',
    description: 'Mid-to-high-end flagship dye-sublimation printer with speeds up to 135 sqm/h.',
    specsSummary: '1610 mm (1.6m) · Up to 135 m²/hr · Sb411/Sb410 Sublimation',
  },
  {
    modelName: 'Mimaki Tiger600-1800TS',
    brand: 'Mimaki',
    fileName: 'mimaki-tiger600-1800ts.png',
    webpUrl: '/assets/products/mimaki/mimaki-tiger600-1800ts.png',
    pngUrl: '/assets/products/mimaki/mimaki-tiger600-1800ts.png',
    altText: 'Mimaki Tiger600-1800TS Industrial High Speed Sublimation Press',
    caption: 'Mimaki Tiger600-1800TS',
    description: 'Ultra-high-speed industrial textile sublimation press delivering up to 550 sqm/h.',
    specsSummary: '1850 mm · Up to 550 m²/hr · 10kg Mini-Jumbo Ink Tanks',
  },
  {
    modelName: 'Double Side Reactive Printing Machine With YSR 1816',
    brand: 'Vee Kay Enterprises',
    fileName: 'YSR1816 textile printing Meta ad.png',
    webpUrl: '/assets/products/ysr-1816-ad.webp?v=ysr1816_final',
    pngUrl: '/assets/products/ysr-1816-ad.png?v=ysr1816_final',
    altText: 'Double Side Reactive Printing Machine With YSR 1816',
    caption: 'YSR 1816',
    description: 'Synchronized dual-carriage direct reactive textile printing machine for natural fibers (cotton, silk, rayon, linen).',
    specsSummary: '1800 mm (1.8m) · Synchronized Dual-Carriage · Double-Side Reactive',
  },
  {
    modelName: 'YSR 1824 High Speed Reactive Printer',
    brand: 'Vee Kay Enterprises',
    fileName: 'YSR_textile_printing_Meta_ad_b58b35ce.png',
    webpUrl: '/assets/aistudio/YSR_textile_printing_Meta_ad_b58b35ce.png',
    pngUrl: '/assets/aistudio/YSR_textile_printing_Meta_ad_b58b35ce.png',
    altText: 'YSR 1824',
    caption: 'YSR 1824',
    description: 'Direct-to-fabric 24-head industrial reactive printer with sticky belt for high-production natural textiles.',
    specsSummary: '1800 mm (1.8m) · 24 Industrial Heads · Direct Reactive',
  },
  {
    modelName: 'YSR 2232 Wide Bed Reactive System',
    brand: 'Vee Kay Enterprises',
    fileName: 'YSR_textile_printing_Meta_ad__1__2135f605.png',
    webpUrl: '/assets/aistudio/YSR_textile_printing_Meta_ad__1__2135f605.png',
    pngUrl: '/assets/aistudio/YSR_textile_printing_Meta_ad__1__2135f605.png',
    altText: 'YSR 2232',
    caption: 'YSR 2232',
    description: 'Extra-wide 2.2m bed 32-head direct reactive textile machine for natural textiles.',
    specsSummary: '2200 mm (2.2m) · 32 Industrial Heads · Direct Reactive',
  },
  {
    modelName: 'YSR 2208',
    brand: 'Vee Kay Enterprises',
    fileName: 'YSR_textile_printing_Meta_ad__2__1dea61a8.png',
    webpUrl: '/assets/aistudio/YSR_textile_printing_Meta_ad__2__1dea61a8.png',
    pngUrl: '/assets/aistudio/YSR_textile_printing_Meta_ad__2__1dea61a8.png',
    altText: 'YSR 2208',
    caption: 'YSR 2208',
    description: 'Direct-to-fabric 2.2-meter versatile reactive printing system with sticky belt for mid-tier textile converters.',
    specsSummary: '2200 mm (2.2m) · Industrial Belt Transport · Direct Reactive',
  },
  {
    modelName: 'YSR 3224',
    brand: 'Vee Kay Enterprises',
    fileName: 'YSR-3224.png',
    webpUrl: '/assets/products/YSR-3224.webp',
    pngUrl: '/assets/products/YSR-3224.png',
    altText: 'YSR 3224',
    caption: 'YSR 3224',
    description: 'Ultra-wide 3.2-meter direct reactive printer with high stability structural beam for large-format natural textiles.',
    specsSummary: '3200 mm (3.2m) · 24 Industrial Heads · Direct Reactive',
  },
  {
    modelName: 'Digital Carpet Printer SD3200',
    brand: 'Vee Kay Enterprises',
    fileName: 'YSRsdf carpet.png',
    webpUrl: '/assets/products/ysr-sdf-carpet.webp?v=carpet_v1',
    pngUrl: '/assets/products/ysr-sdf-carpet.png?v=carpet_v1',
    altText: 'Digital Carpet Printer SD3200',
    caption: 'Digital Carpet Printer SD3200',
    description: 'Heavy-duty direct digital inkjet printer for loop and cut pile tufted carpets and rugs.',
    specsSummary: '3200 mm (3.2m) · Deep Fiber Penetration · Long-Throw Head Technology',
  },
  {
    modelName: '360 Degree Seamless Digital Printing Machine',
    brand: 'Vee Kay Enterprises',
    fileName: 'VeeKayenteprises 360 seamless rotary printing machine.png',
    webpUrl: '/assets/products/seamless-360-rotary.png?v=seamless_v2',
    pngUrl: '/assets/products/seamless-360-rotary.png?v=seamless_v2',
    altText: '360 Degree Seamless Digital Printing Machine',
    caption: '360 Degree Seamless Printing Machine',
    description: 'Rotary cylinder mandrel system that prints 360-degree continuous wrap graphics on socks, knitted tubes, sleeves, and yoga leggings.',
    specsSummary: 'Rotary Mandrel Carousel · Seamless Continuous 360° · Athletic & Tubular Wear',
  },
  {
    modelName: 'Flatbed Digital Printing Machine with Gen 6 Heads',
    brand: 'Vee Kay Enterprises',
    fileName: 'flatbed-gen6.png',
    webpUrl: '/assets/products/flatbed-gen6.png?v=gen6_v1',
    pngUrl: '/assets/products/flatbed-gen6.png?v=gen6_v1',
    altText: 'Flatbed Digital Printing Machine with Gen 6 Heads',
    caption: 'Flatbed Printing Machine with Gen 6 Heads',
    description: 'Precision industrial flatbed powered by Ricoh Gen 6 heads for textiles, leather, and rigid media.',
    specsSummary: 'Industrial Flatbed · Ricoh Gen 6 Heads · Greyscale Multi-Drop',
  },
  {
    modelName: 'Vee Kay Ultra-HD Sublimation Inks',
    brand: 'Vee Kay Enterprises',
    fileName: 'sublimation-ink.png',
    webpUrl: '/assets/products/sublimation-ink.png?v=subink_v1',
    pngUrl: '/assets/products/sublimation-ink.png?v=subink_v1',
    altText: 'Vee Kay Ultra-HD Sublimation Inks',
    caption: 'Ultra-HD Sublimation Inks',
    description: 'High-optical density dye-sublimation ink formulation for vibrant, clean transfer.',
    specsSummary: '16L Drum · High Density Textile Sublimation · Kyocera & Epson Heads',
  },
  {
    modelName: 'High-Purity Reactive Digital Textile Inks',
    brand: 'Vee Kay Enterprises',
    fileName: 'reactive-ink.png',
    webpUrl: '/assets/products/reactive-ink.png?v=reactink_v1',
    pngUrl: '/assets/products/reactive-ink.png?v=reactink_v1',
    altText: 'High-Purity Reactive Digital Textile Inks',
    caption: 'High-Purity Reactive Digital Textile Inks',
    description: 'Micro-filtered reactive digital dyes for pure silk, cotton, modal, and viscose fibers.',
    specsSummary: '16L Drum · Premium Reactive Dye · Cotton & Silk Natural Fibers',
  },
];

/**
 * Normalizes any model name, ID, or filename and returns the matching ProductImageMeta.
 * Matches case-insensitively, handling hyphens, spaces, and substrings.
 */
export function getProductImage(input?: string): ProductImageMeta | null {
  if (!input) return null;
  const clean = input.trim().toLowerCase();

  // 1. Check exact modelName
  for (const item of OFFICIAL_PRODUCT_IMAGES) {
    if (item.modelName.toLowerCase() === clean) return item;
    if (item.fileName.toLowerCase() === clean) return item;
    const baseFile = item.fileName.replace(/\.[^/.]+$/, '').toLowerCase();
    if (baseFile === clean) return item;
  }

  // 2. Check partial model matching with specific model codes prioritized
  // Mimaki Models First (exact model codes)
  if (clean.includes('jv200')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('JV200')) || null;
  }
  if (clean.includes('jv330')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('JV330')) || null;
  }
  if (clean.includes('swj') || clean.includes('320ea')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('SWJ')) || null;
  }
  if (clean.includes('cjv200')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('CJV200')) || null;
  }
  if (clean.includes('cjv330')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('CJV330')) || null;
  }
  if (clean.includes('ucjv300')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('UCJV300')) || null;
  }
  if (clean.includes('ucjv330')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('UCJV330')) || null;
  }
  if (clean.includes('ujv200') || clean.includes('uv-roll-to-roll-180') || clean.includes('roll to roll 1.8') || clean.includes('roll-to-roll 1.8')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('UJV200')) || null;
  }
  if (clean.includes('uj330') || clean.includes('uj330h') || clean.includes('uv-hybrid') || clean.includes('hybrid 3.2')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('UJ330H')) || null;
  }
  if (clean.includes('sij') || clean.includes('sij-320') || clean.includes('sij320')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('SIJ')) || null;
  }
  if (clean.includes('ujv55') || clean.includes('uv-roll-to-roll-320') || clean.includes('roll to roll 3.2') || clean.includes('roll-to-roll 3.2')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('UJV55')) || null;
  }
  if (clean.includes('ujv300dtf') || clean.includes('dtf-75')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('UJV300DTF')) || null;
  }
  if (clean.includes('3042')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('3042')) || null;
  }
  if (clean.includes('6042')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('6042')) || null;
  }
  if (clean.includes('7151')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('7151')) || null;
  }
  if (clean.includes('2513ex') || clean.includes('2513-ex') || (clean.includes('jfx200') && clean.includes('2513')) || clean.includes('uv-flatbed-2513') || clean.includes('flatbed 2513')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('JFX200-2513EX')) || null;
  }
  if (clean.includes('1213') || (clean.includes('jfx200') && clean.includes('1213'))) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('JFX200-1213EX')) || null;
  }
  if (clean.includes('2531') || (clean.includes('jfx600') && clean.includes('2531')) || clean.includes('uv-flatbed-2030') || clean.includes('flatbed 2030')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('JFX600-2531')) || null;
  }
  if (clean.includes('jfx600') || (clean.includes('jfx') && clean.includes('600'))) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('JFX600-2513')) || null;
  }
  if (clean.includes('tiger') || clean.includes('tiger600')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('Tiger600')) || null;
  }
  if (clean.includes('ts330')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('TS330')) || null;
  }
  if (clean.includes('ts100')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('TS100')) || null;
  }

  // Vee Kay models
  if (clean.includes('2208') || clean.includes('ysr2208') || clean.includes('2228') || clean.includes('ysr2228')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('2208') || p.modelName.includes('2228')) || null;
  }
  if (clean.includes('3224') || clean.includes('ysr3224')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('3224')) || null;
  }
  if (clean.includes('2232') || clean.includes('ysr2232')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('2232')) || null;
  }
  if (clean.includes('1824') || clean.includes('ysr1824')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('1824')) || null;
  }
  if (clean.includes('1816') || clean.includes('ysr1816') || clean.includes('double side')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('1816')) || null;
  }
  if (clean.includes('2008') || clean.includes('vke-2008')) {
    return OFFICIAL_PRODUCT_IMAGES[0];
  }
  if (clean.includes('3208') || clean.includes('vke-3208')) {
    return OFFICIAL_PRODUCT_IMAGES[1];
  }
  if (clean.includes('1804') || clean.includes('v1804')) {
    return OFFICIAL_PRODUCT_IMAGES[2];
  }
  if (clean.includes('1808') || clean.includes('v1808')) {
    return OFFICIAL_PRODUCT_IMAGES[3];
  }
  if (clean.includes('carpet') || clean.includes('sd3200')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('Carpet')) || null;
  }
  if (clean.includes('seamless') || clean.includes('360')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('Seamless')) || null;
  }
  if (clean.includes('gen 6') || clean.includes('gen6') || (clean.includes('flatbed') && clean.includes('textile'))) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('Gen 6')) || null;
  }
  if (clean.includes('sublimation ink') || clean.includes('sub ink') || clean.includes('ultra-hd')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('Sublimation Inks')) || null;
  }
  if (clean.includes('reactive digital') || clean.includes('reactive ink') || clean.includes('reactive dye')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('Reactive Digital')) || null;
  }
  if (clean.includes('ysr')) {
    return OFFICIAL_PRODUCT_IMAGES.find(p => p.modelName.includes('1816')) || null;
  }

  return null;
}
