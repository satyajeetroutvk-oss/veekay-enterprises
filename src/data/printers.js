/**
 * Vee Kay Enterprises - Printer Catalogue Data Hierarchy
 * Structure: Category > Subcategory > Models
 * 
 * NOTE: Specifications not explicitly provided use the placeholder "Specs: contact us"
 */

export const PRINTER_CATALOGUE = [
  {
    id: 'digital-sign',
    name: 'Sign Industry',
    title: 'Digital Printers - Sign Industry',
    tagline: 'High-durability hoardings, illuminated backlit fascias & architectural signage',
    description: 'Heavy-duty industrial UV roll-to-roll, UV flatbed, and hybrid printing machines engineered for architectural signage, hoardings, acrylic displays, and outdoor brand displays.',
    subcategories: [
      {
        id: 'uv-roll-to-roll',
        name: 'UV Roll to Roll Printers',
        description: 'Continuous roll-to-roll printing on vinyl, backlit flex, wallpaper, and synthetic films with instant cold UV LED curing.',
        models: [
          {
            id: 'mimaki-ujv55-320',
            aliases: ['uv-roll-to-roll-320'],
            name: 'Mimaki UJV55-320',
            series: 'UJV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ujv55-320.png',
            imagePng: '/assets/products/mimaki/mimaki-ujv55-320.png',
            imageAlt: 'Mimaki UJV55-320 Grand Format 3.2m UV LED Roll-to-Roll Printer',
            imageCaption: 'Mimaki UJV55-320',
            driveFileName: 'mimaki-ujv55-320.png',
            shortDescription: 'Heavy-duty 3.2m super-wide industrial roll-to-roll UV LED printer for high-volume signage.',
            description: 'Engineered for 24/7 continuous production runs of backlit flex, vinyl hoardings, canvas, wallpaper, and self-adhesive substrates with instant UV LED curing and twin-roll simultaneous printing.',
            features: ['3.2m (126 in) seamless width', 'Twin-roll simultaneous printing capability', 'Built-in LED lightbox for real-time backlit proofing', 'LUS-120 high-durability stretchable UV inks'],
            specs: {
              technicalDetails: 'Specs: contact us. Call +91 99999 36706 for engineering sheet & demonstration.',
            },
            applications: ['Outdoor Billboards & Hoardings', 'Illuminated Backlit Signage', 'Vehicle Fleet Graphics', 'Architectural Murals'],
            isPopular: true
          },
          {
            id: 'mimaki-sij-320uv',
            name: 'Mimaki SIJ-320UV',
            series: 'SIJ Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-sij-320uv.png',
            imagePng: '/assets/products/mimaki/mimaki-sij-320uv.png',
            imageAlt: 'Mimaki SIJ-320UV High-Speed 3.2m UV LED Signage Printer',
            imageCaption: 'Mimaki SIJ-320UV',
            driveFileName: 'mimaki-sij-320uv.png',
            shortDescription: 'Dedicated 3.2m wide-format UV LED printer delivering unbeatable high-density outdoor sign graphics.',
            description: 'High-definition roll-to-roll UV printer featuring advanced pass system (MAPS4) and continuous nozzle recovery (NCU/NRS) for banding-free outdoor hoardings and backlit displays.',
            features: ['3,200 mm print width', 'High speed up to 110 m²/hr', 'MAPS4 anti-banding technology', 'Patented NCU & NRS automatic nozzle maintenance'],
            specs: {
              technicalDetails: 'Specs: contact us. Call +91 99999 36706 for engineering sheet & demonstration.',
            },
            applications: ['Highway Hoardings', 'Airport Lightboxes', 'Building Wraps', 'Window Graphics']
          },
          {
            id: 'mimaki-ujv200-160',
            aliases: ['uv-roll-to-roll-180'],
            name: 'Mimaki UJV200-160',
            series: 'UJV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ujv200-160.png',
            imagePng: '/assets/products/mimaki/mimaki-ujv200-160.png',
            imageAlt: 'Mimaki UJV200-160 High-Precision 1.6m UV LED Roll Printer',
            imageCaption: 'Mimaki UJV200-160',
            driveFileName: 'mimaki-ujv200-160.png',
            shortDescription: 'Precision 1.6m roll UV LED printer with 35% higher throughput for retail signs and wallpapers.',
            description: 'Delivers exceptional image quality on heat-sensitive film, wallpapers, clear films, and self-adhesive vinyl with instant LED UV cold curing.',
            features: ['1,610 mm (63.4 in) width', '35% faster throughput over previous gen', 'LUS-170 / LUS-210 flexible UV inks', 'Cold UV LED curing for heat-sensitive vinyl'],
            specs: {
              technicalDetails: 'Specs: contact us. Available for demonstration at Kirti Nagar facility.',
            },
            applications: ['Retail Window Graphics', 'Exhibition Displays', 'Custom Wall Coverings', 'Point of Sale (POS) Signage'],
            isPopular: true
          },
          {
            id: 'mimaki-ucjv330-160',
            name: 'Mimaki UCJV330-160',
            series: 'UCJV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ucjv330-160.png',
            imagePng: '/assets/products/mimaki/mimaki-ucjv330-160.png',
            imageAlt: 'Mimaki UCJV330-160 Flagship UV Print & Cut with 2.5D Texture',
            imageCaption: 'Mimaki UCJV330-160',
            driveFileName: 'mimaki-ucjv330-160.png',
            shortDescription: 'Flagship industrial UV LED print-and-cut machine with 2.5D texture printing and 5-layer capabilities.',
            description: 'High-end integrated print-and-cut workhorse featuring up to 5-layer printing for day/night backlit transitions, window double-sided graphics, and tactile embossed textures.',
            features: ['High-precision contour cutting integrated', '5-layer day/night backlit printing', '2.5D textured tactile embossing', 'Clear varnish and white ink support'],
            specs: {
              technicalDetails: 'Specs: contact us. Call +91 99999 36706 for sample kit & demo.',
            },
            applications: ['Day/Night Backlit Signage', 'Tactile Textured Labels', 'Window Film Decals', 'Vehicle Wraps']
          },
          {
            id: 'mimaki-ucjv300-160',
            name: 'Mimaki UCJV300-160',
            series: 'UCJV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ucjv300-160.png',
            imagePng: '/assets/products/mimaki/mimaki-ucjv300-160.png',
            imageAlt: 'Mimaki UCJV300-160 Versatile UV Roll Print & Cut',
            imageCaption: 'Mimaki UCJV300-160',
            driveFileName: 'mimaki-ucjv300-160.png',
            shortDescription: 'Versatile 1.6m UV LED roll print-and-cut printer for custom signage and shaped decals.',
            description: 'Instant-dry UV LED printing combined with high-accuracy cutting for on-demand sign production, fleet lettering, and custom display stickers.',
            features: ['1,610 mm print & cut width', 'Continuous register mark detection', 'White ink high-opacity undercoating', 'Greenguard Gold certified UV inks'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Contour Cut Signage', 'Stickers & Decals', 'Retail Display Graphics']
          }
        ]
      },
      {
        id: 'uv-flatbed',
        name: 'UV Flatbed Printers',
        description: 'Direct-to-rigid printing on acrylic, ACP, glass, wood, metal sheets, and composite sign panels with multi-zone vacuum suction.',
        models: [
          {
            id: 'mimaki-jfx600-2513',
            name: 'Mimaki JFX600-2513',
            series: 'JFX Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-jfx600-2513.png',
            imagePng: '/assets/products/mimaki/mimaki-jfx600-2513.png',
            imageAlt: 'Mimaki JFX600-2513 16-Head Ultra High-Speed UV Flatbed',
            imageCaption: 'Mimaki JFX600-2513',
            driveFileName: 'mimaki-jfx600-2513.png',
            shortDescription: '16-head ultra high-speed 2,500 x 1,300 mm (8x4 ft) industrial UV flatbed reaching speeds up to 200 m²/hr.',
            description: 'Industrial-grade heavy duty UV flatbed engineered for extreme productivity. Prints directly on acrylic, ACP, glass, wood, composite aluminum, and architectural panels with 16 staggered printheads.',
            features: ['2,500 x 1,300 mm (8x4 ft) bed size', '16 staggered print heads for up to 200 m²/hr', '2.5D texture printing engine', 'Multi-zone independent vacuum control'],
            specs: {
              technicalDetails: 'Specs: contact us. Industrial power & floor plan layouts available.',
            },
            applications: ['High-Volume Architectural Signage', 'ACP Cladding Graphics', 'Exhibition Panels', 'Interior Acrylic Walls'],
            isPopular: true
          },
          {
            id: 'mimaki-jfx600-2531',
            aliases: ['uv-flatbed-2030'],
            name: 'Mimaki JFX600-2531',
            series: 'JFX Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-jfx600-2531.png',
            imagePng: '/assets/products/mimaki/mimaki-jfx600-2531.png',
            imageAlt: 'Mimaki JFX600-2531 Super-Wide 2.5m x 3.1m Industrial UV Flatbed',
            imageCaption: 'Mimaki JFX600-2531',
            driveFileName: 'mimaki-jfx600-2531.png',
            shortDescription: 'Extra-large 2,500 x 3,100 mm (8x10 ft) industrial flatbed for massive rigid signage and architectural facades.',
            description: 'Allows loading two standard 8x4 ft boards simultaneously with independent dual vacuum zones for continuous non-stop alternate board production.',
            features: ['Massive 2,500 x 3,100 mm (8x10 ft) printable area', 'Simultaneous dual-origin printing (two 8x4 ft boards)', 'Up to 200 m²/hr peak industrial speed', 'Heavy payload table handling up to 50 kg/m²'],
            specs: {
              technicalDetails: 'Specs: contact us for factory floor plans and quotation.',
            },
            applications: ['Oversized Architectural Signage', 'Double-board High Speed Production', 'Wood & Tile Printing', 'Industrial Facades']
          },
          {
            id: 'mimaki-jfx200-2513ex',
            aliases: ['uv-flatbed-2513'],
            name: 'Mimaki JFX200-2513 EX',
            series: 'JFX Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-jfx200-2513ex.png',
            imagePng: '/assets/products/mimaki/mimaki-jfx200-2513ex.png',
            imageAlt: 'Mimaki JFX200-2513 EX Industry Standard 8x4 ft UV Flatbed',
            imageCaption: 'Mimaki JFX200-2513 EX',
            driveFileName: 'mimaki-jfx200-2513ex.png',
            shortDescription: 'The benchmark 8x4 ft Japanese UV flatbed printer for sign & industrial display with 2.5D texture maker.',
            description: 'Direct-to-rigid printing on acrylic, MDF, foam PVC, glass, ACP, metal sheets, and ceramic tiles with vacuum zoned bed, automated pin registration, and draft mode up to 35 sqm/hr.',
            features: ['2,500 x 1,300 mm bed size', '2.5D Texture Maker for textured embossed prints', 'Foot pedal vacuum switch', 'White + Varnish gloss embossing capabilities'],
            specs: {
              technicalDetails: 'Specs: contact us. Best-seller in New Delhi sign industry.',
            },
            applications: ['Acrylic Brand Letters', 'ACP Cladding Graphics', 'Glass Door Decals', 'Exhibition Panels'],
            isPopular: true
          },
          {
            id: 'mimaki-jfx200-1213ex',
            name: 'Mimaki JFX200-1213 EX',
            series: 'JFX Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-jfx200-1213ex.png',
            imagePng: '/assets/products/mimaki/mimaki-jfx200-1213ex.png',
            imageAlt: 'Mimaki JFX200-1213 EX Compact 4x4 ft Industrial UV Flatbed',
            imageCaption: 'Mimaki JFX200-1213 EX',
            driveFileName: 'mimaki-jfx200-1213ex.png',
            shortDescription: 'Compact 4x4 ft (1,200 x 1,300 mm) industrial flatbed for workshops with limited space.',
            description: 'Provides the identical high-resolution print engine and 2.5D texture capability of the full-size JFX200 in a space-saving 4x4 ft form factor.',
            features: ['1,200 x 1,300 mm compact footprint', 'Supports media up to 50 mm thickness', '2.5D textured embossing & clear gloss', 'Energy-efficient LED-UV curing'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Custom Acrylic Awards & Trophies', 'Boutique Signage', 'Braille & ADA Signs', 'Prototype Packaging']
          }
        ]
      },
      {
        id: 'uv-hybrid',
        name: 'UV Hybrid Printers',
        description: 'Dual-purpose vacuum conveyor systems for fast changeovers between rigid boards and roll-to-roll media.',
        models: [
          {
            id: 'mimaki-uj330h-160',
            aliases: ['uv-hybrid-3200'],
            name: 'Mimaki UJ330H-160',
            series: 'UJ Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-uj330h-160.png',
            imagePng: '/assets/products/mimaki/mimaki-uj330h-160.png',
            imageAlt: 'Mimaki UJ330H-160 Industrial UV Hybrid Roll & Flatbed Conveyor Printer',
            imageCaption: 'Mimaki UJ330H-160',
            driveFileName: 'mimaki-uj330h-160.png',
            shortDescription: 'Flagship 1.6m industrial UV LED hybrid machine with vacuum conveyor belt for rigid boards and roll media.',
            description: 'Two-in-one industrial printing solution offering high throughput on both rigid sheets and rolls with fold-down front and rear extension tables, conveyor belt feed, and multi-layer UV printing.',
            features: ['1,610 mm width conveyor vacuum belt system', 'Instant transition between rigid boards and roll media', '2.5D texture printing and white + clear inks', 'Front and rear foldable expansion tables for rigid sheets'],
            specs: {
              technicalDetails: 'Specs: contact us for throughput speeds, carriage configurations, and RIP software compatibility.',
            },
            applications: ['Sign Manufacturing Facilities', 'Trade Print Shops', 'Multi-material Commercial Projects', 'Rigid Board & Roll Dual Production'],
            isPopular: true
          }
        ]
      }
    ]
  },

  {
    id: 'textile',
    name: 'Textile Industry',
    title: 'Textile Industry Printers',
    tagline: 'Direct-to-fabric, roll sublimation, reactive, pigment & garment solutions',
    description: 'Comprehensive high-speed digital textile machinery covering sublimation roll-to-roll, reactive silk and cotton printing, pigment direct systems, digital carpet printing, sweater direct printing, and industrial embroidery.',
    subcategories: [
      {
        id: 'sublimation',
        name: 'Sublimation Printers',
        description: 'Roll-to-roll dye sublimation printing for sportswear, apparel fabrics, drapes, and banners.',
        models: [
          {
            id: 'vke-2008a-tx',
            name: 'VKE-2008A TX',
            brand: 'Vee Kay Enterprises',
            imageUrl: '/assets/products/VKE-2008A TX.webp',
            imagePng: '/assets/products/VKE-2008A TX.png',
            imageAlt: 'VKE-2008A TX – Vee Kay Enterprises',
            imageCaption: 'VKE-2008A TX',
            driveFileName: 'VKE-2008A TX.png',
            shortDescription: 'Vee Kay flagship high-productivity roll sublimation printing workhorse.',
            description: 'Designed specifically for Indian production environments with continuous multi-roll feed, high-capacity tensioning, and low ink consumption.',
            features: ['Multi-head staggered configuration', 'Industrial drying heating rack', 'Continuous degassing bulk feed', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. On-site demonstration available in New Delhi & Surat facilities.',
            },
            applications: ['Sportswear & Activewear', 'Flags & Banners', 'Polyester Fashion Fabrics', 'Home Furnishings'],
            isPopular: true
          },
          {
            id: 'vke-3208-tx',
            name: 'VKE-3208 TX',
            brand: 'Vee Kay Enterprises',
            imageUrl: '/assets/products/VKE-3208 TX.webp?v=2',
            imagePng: '/assets/products/VKE-3208 TX.png?v=2',
            imageAlt: 'VKE-3208 TX – Vee Kay Enterprises',
            imageCaption: 'VKE-3208 TX',
            driveFileName: 'VKE-3208 TX.png',
            shortDescription: 'Extra-wide 3.2m roll dye-sublimation printer for home textile and curtain fabrics.',
            description: 'Handles 3200mm transfer papers smoothly with precision vacuum paper guide preventing paper cockling even at high ink coverage.',
            features: ['3.2m seamless width', 'Heavy jumbo roll feed support (up to 500kg)', 'High speed drying channel', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Call Vee Kay Enterprises Kirti Nagar office for paper weight & speed tests.',
            },
            applications: ['Curtains & Drapes', 'Bedding & Quilt Covers', 'Seamless Soft Signage', 'Tents & Canopies']
          },
          {
            id: 'v1804e-sublimation',
            name: 'V1804E',
            brand: 'Vee Kay Enterprises',
            imageUrl: '/assets/products/V1804E.webp?v=4',
            imagePng: '/assets/products/V1804E.png?v=4',
            imageAlt: 'V1804E – Vee Kay Enterprises',
            imageCaption: 'V1804E',
            driveFileName: 'V1804E.png',
            shortDescription: 'Cost-effective 4-head industrial dye sublimation printer for apparel manufacturers.',
            description: 'Optimal balance of capital investment and high output for small-to-medium apparel factories requiring continuous reliable operation.',
            features: ['4-head array', 'Automatic capping and wiper station', 'Intelligent pinch-roller control', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Complete dye-sub ink and transfer paper packages available.',
            },
            applications: ['Sublimated T-Shirts', 'Saris & Dupattas', 'Promotional Apparel', 'Lanyards & Ribbons']
          },
          {
            id: 'v1808e-sublimation',
            name: 'V1808E',
            brand: 'Vee Kay Enterprises',
            imageUrl: '/assets/products/V1808E.webp?v=5',
            imagePng: '/assets/products/V1808E.png?v=5',
            imageAlt: 'V1808E – Vee Kay Enterprises',
            imageCaption: 'V1808E',
            driveFileName: 'V1808E.png',
            shortDescription: 'High-velocity 8-head sublimation printer for industrial garment exporters.',
            description: 'Built for 24-hour non-stop production lines with redundant ink lines and auto-switch negative pressure system.',
            features: ['8 industrial printheads', 'Heavy duty take-up motor system', 'Low running ink cost formula', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us for certified hourly production rates and paper profile tables.',
            },
            applications: ['Export Garment Batches', 'Fast Fashion Garments', 'Home Textiles', 'Scarves & Stoles']
          },
          {
            id: 'mimaki-ts100-160',
            name: 'Mimaki TS100-160',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki ts100-160.webp',
            imagePng: '/assets/products/mimaki ts100-160.png',
            imageAlt: 'Mimaki TS100-160 – Vee Kay Enterprises',
            imageCaption: 'Mimaki TS100-160',
            driveFileName: 'mimaki ts100-160.png',
            shortDescription: 'Affordable authentic Mimaki Japanese entry dye-sublimation printer.',
            description: 'Genuine Mimaki quality with NCU (Nozzle Check Unit) and NRS (Nozzle Recovery System) ensuring continuous unattended printing.',
            features: ['NCU & NRS automatic nozzle backup', 'Mimaki MAPS4 advanced pass system', 'Original Sb610 high-density sublimation inks', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Official Mimaki warranty and technician dispatch from Kirti Nagar.',
            },
            applications: ['Designer Apparel', 'Fashion Boutiques', 'Sublimated Gifts', 'Custom Sports Jerseys'],
            isPopular: true
          }
        ]
      },
      {
        id: 'reactive',
        name: 'Reactive Printers',
        description: 'Direct-to-fabric reactive inkjet printers with continuous blanket conveyor washing for cotton, silk, rayon, and linen.',
        models: [
          {
            id: 'ysr-1816-reactive',
            name: 'Double Side Reactive Printing Machine With YSR 1816',
            imageUrl: '/assets/products/ysr-1816-ad.webp?v=ysr1816_final',
            imagePng: '/assets/products/ysr-1816-ad.png?v=ysr1816_final',
            imageAlt: 'Double Side Reactive Printing Machine With YSR 1816',
            imageCaption: 'YSR 1816',
            driveFileName: 'YSR1816 textile printing Meta ad.png',
            shortDescription: 'Direct-to-fabric reactive printer with sticky belt for natural fibers (cotton, silk, rayon).',
            description: 'Equipped with continuous washing conveyor belt and precise fabric entry device for printing high color fastness designs directly on natural woven and knit fabrics.',
            features: ['Adhesive blanket belt with automated washing unit', 'High penetration reactive ink compatibility', 'Precise tensionless fabric unwinder', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us for steaming, washing and pretreatment equipment pairing.',
            },
            applications: ['Pure Silk Sarees & Scarves', 'Cotton Dress Material', 'Rayon Kurti Fabrics', 'Designer Linen']
          },
          {
            id: 'ysr-1824-reactive',
            name: 'YSR 1824 High Speed Reactive Printer',
            imageUrl: '/assets/aistudio/YSR_textile_printing_Meta_ad_b58b35ce.png',
            imagePng: '/assets/aistudio/YSR_textile_printing_Meta_ad_b58b35ce.png',
            imageAlt: 'YSR 1824',
            imageCaption: 'YSR 1824',
            shortDescription: '24-head direct reactive printing system for high-volume natural fabric mills.',
            description: 'Industrial high-production digital textile printing press built for textile processing houses handling cotton, viscose, and modal textiles at scale.',
            features: ['24 industrial printheads', 'Integrated inline continuous drying tunnel', 'Variable drop greyscale technology', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Engineering consultation available for fabric processing lines.',
            },
            applications: ['Export Textile Processing', 'Bed Linen Manufacturing', 'Ladies Dress Fabrics']
          },
          {
            id: 'ysr-2232-reactive',
            name: 'YSR 2232 Wide Bed Reactive System',
            imageUrl: '/assets/aistudio/YSR_textile_printing_Meta_ad__1__2135f605.png',
            imagePng: '/assets/aistudio/YSR_textile_printing_Meta_ad__1__2135f605.png',
            imageAlt: 'YSR 2232',
            imageCaption: 'YSR 2232',
            shortDescription: 'Extra-wide 2.2m bed 32-head direct reactive textile machine.',
            description: 'Top-tier production capacity for 2200mm wide natural textiles, offering deep rich blacks and vibrant primary colors.',
            features: ['32-head multi-row matrix', 'High precision magnetic linear motor beam', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Request site preparation and technical power specifications.',
            },
            applications: ['Home Furnishings', 'Luxury Drapery & Upholstery', 'Quilts & Blankets']
          },
          {
            id: 'ysr-2208-reactive',
            name: 'YSR 2208',
            imageUrl: '/assets/aistudio/YSR_textile_printing_Meta_ad__2__1dea61a8.png',
            imagePng: '/assets/aistudio/YSR_textile_printing_Meta_ad__2__1dea61a8.png',
            imageAlt: 'YSR 2208',
            imageCaption: 'YSR 2208',
            driveFileName: 'YSR_textile_printing_Meta_ad__2__1dea61a8.png',
            shortDescription: '2.2-meter versatile reactive printing system for mid-tier textile converters.',
            description: 'Offers high versatility across lightweight silk georgette, medium cotton cambric, and heavier canvas fabrics.',
            features: ['Sticky belt transport with continuous wash', 'De-wrinkling expander rollers', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Vee Kay Enterprises wholesale technical support provided across all branches.',
            },
            applications: ['Ethnic Wear', 'Western Garments', 'Silk Stoles', 'Cushion Covers']
          },
          {
            id: 'ysr-3224-reactive',
            name: 'YSR 3224',
            imageUrl: '/assets/products/YSR-3224.webp',
            imagePng: '/assets/products/YSR-3224.png',
            imageAlt: 'YSR 3224',
            imageCaption: 'YSR 3224',
            shortDescription: 'Ultra-wide 3.2-meter direct reactive printer for wide bedsheets and upholstery.',
            description: 'Built specifically for the home textile centers of Panipat, Ahmedabad, and Surat for massive direct reactive print jobs.',
            features: ['3.2m continuous printing width', 'High stability structural beam', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Direct technician installation and training included.',
            },
            applications: ['King Size Bed Linens', 'Curtains & Drapes', 'Tapestries']
          }
        ]
      },
      {
        id: 'double-side',
        name: 'Double Side Printing Machine',
        description: 'Synchronized dual-carriage printhead architecture for 100% color penetration on sheer fabrics, flags, and scarves.',
        models: [
          {
            id: 'double-side-1816',
            name: 'Double Side Reactive Printing Machine With YSR 1816',
            imageUrl: '/assets/products/ysr-1816-ad.webp?v=ysr1816_final',
            imagePng: '/assets/products/ysr-1816-ad.png?v=ysr1816_final',
            imageAlt: 'Double Side Reactive Printing Machine With YSR 1816',
            imageCaption: 'YSR 1816',
            driveFileName: 'YSR1816 textile printing Meta ad.png',
            shortDescription: 'Synchronized dual-side direct textile printing for 100% penetration on flags & scarves.',
            description: 'Eliminates the pale backside problem on fine fabrics like chiffon, satin, and flags by printing both sides in perfect alignment simultaneously.',
            features: ['Synchronized dual-carriage printheads', 'Optoelectronic front-to-back registry', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Call +91 99999 36706 for fabric test strike-offs in New Delhi.',
            },
            applications: ['Silk Scarves with Double Sided Print', 'National & Corporate Flags', 'Sheer Window Curtains']
          }
        ]
      },
      {
        id: 'pigment',
        name: 'Pigment Printers',
        description: 'Eco-friendly direct-to-fabric pigment printing without required post-washing or steaming treatments.',
        models: [
          {
            id: 'pigment-ysr-1824',
            name: 'YSR 1824 Direct Textile Pigment Printer',
            imageUrl: '/assets/aistudio/YSR_textile_printing_Meta_ad_b58b35ce.png',
            imagePng: '/assets/aistudio/YSR_textile_printing_Meta_ad_b58b35ce.png',
            imageAlt: 'YSR 1824',
            imageCaption: 'YSR 1824',
            shortDescription: 'Eco-friendly direct-to-fabric pigment printing without need for steaming or washing.',
            description: 'Significantly reduces water consumption and process turnaround time by printing pigment inks directly onto cotton, linen, poly-blends, and curing via heat.',
            features: ['Zero post-wash chemical discharge', 'Compatible with blended fabrics (cotton-poly, linen)', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Clean green textile printing without effluent treatment requirements.',
            },
            applications: ['Kids Garments', 'Eco Fashion Collections', 'Home Decor Textiles', 'Kitchen Linens']
          },
          {
            id: 'pigment-ysr-2232',
            name: 'YSR 2232 Wide Direct Pigment Printer',
            imageUrl: '/assets/aistudio/YSR_textile_printing_Meta_ad__1__2135f605.png',
            imagePng: '/assets/aistudio/YSR_textile_printing_Meta_ad__1__2135f605.png',
            imageAlt: 'YSR 2232',
            imageCaption: 'YSR 2232',
            shortDescription: '2.2-meter high speed pigment textile printing line for beddings and drapery.',
            description: 'Industrial pigment printing on wide-width blended fabrics with soft hand-feel ink formulations.',
            features: ['Wide width pigment handling', 'Inline infrared curing integration', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us for ink chemistry data and color-fastness test certificates.',
            },
            applications: ['Bed Covers', 'Drapery Fabrics', 'Hotel Upholstery']
          },
          {
            id: 'pigment-ysr-3224',
            name: 'YSR 3224 3.2m Pigment Textile Printer',
            imageUrl: '/assets/products/YSR-3224.webp',
            imagePng: '/assets/products/YSR-3224.png',
            imageAlt: 'YSR 3224',
            imageCaption: 'YSR 3224',
            shortDescription: '3.2m wide-format direct pigment printer for large home textile products.',
            description: 'Heavy duty direct pigment machine designed for large home furnishings without wet processing.',
            features: ['3.2m seamless width', 'Low running cost pigment technology', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Extra Wide Bed Linen', 'Large Curtains', 'Sofa Fabrics']
          }
        ]
      },
      {
        id: 'digital-carpet',
        name: 'Digital Carpet Printer',
        description: 'Deep fiber penetration long-throw printhead technology for loop and cut pile tufted carpets and rugs.',
        models: [
          {
            id: 'carpet-sd3200',
            name: 'Digital Carpet Printer SD3200',
            imageUrl: '/assets/products/ysr-sdf-carpet.webp?v=carpet_v1',
            imagePng: '/assets/products/ysr-sdf-carpet.png?v=carpet_v1',
            imageAlt: 'Digital Carpet Printer SD3200 – Vee Kay Enterprises',
            imageCaption: 'Digital Carpet Printer SD3200',
            driveFileName: 'YSRsdf carpet.png',
            shortDescription: 'Heavy-duty direct digital inkjet printer for loop and cut pile tufted carpets and rugs.',
            description: 'High-penetration long-throw printhead technology specifically designed to deposit deep color into carpet fibers, prayer mats, and entrance mats.',
            features: ['Extended throw-distance head technology', 'Deep fiber penetration ink management', 'Heavy roll motorized unwinder & rewinder', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. In-person inspection available at Vee Kay Enterprises network.',
            },
            applications: ['Hotel Corridor Carpets', 'Prayer Mats & Rugs', 'Custom Branded Entrance Mats', 'Wall-to-wall Carpeting'],
            isPopular: true
          }
        ]
      },
      {
        id: 'wool-sweater-shawl',
        name: 'Wool Sweater & Shawl Direct Printing Machine',
        description: 'Pneumatic clamping flatbed printers engineered to preserve the natural loft and hand feel of woolen knitwear and cashmere.',
        models: [
          {
            id: 'wool-sweater-shawl-printer',
            name: 'Wool Sweater & Shawl Direct Printing Machine',
            shortDescription: 'Direct flat printing system for finished woolen sweaters, pashmina, and cashmere shawls.',
            description: 'Specially engineered pneumatic clamping beds for finished sweaters, cardigans, and delicate wool shawls with adjustable height to preserve wool loft.',
            features: ['Pneumatic garment platens', 'Preserves knit fiber loft and hand feel', 'Acid / Reactive / Pigment ink modes', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Widely supplied to Ludhiana and Amritsar knitwear manufacturing clusters.',
            },
            applications: ['Kashmiri & Pashmina Shawls', 'Woolen Cardigans & Sweaters', 'Stoles & Scarves'],
            isPopular: true
          }
        ]
      },
      {
        id: 'flatbed-gen6',
        name: 'Flatbed Digital Printing Machine with Gen 6 heads',
        description: 'Ricoh Gen 6 industrial printhead technology for high-density printing on cut-piece panels and leather goods.',
        models: [
          {
            id: 'flatbed-gen6-textile',
            name: 'Flatbed Digital Printing Machine with Gen 6 Heads',
            imageUrl: '/assets/products/flatbed-gen6.png?v=gen6_v1',
            imagePng: '/assets/products/flatbed-gen6.png?v=gen6_v1',
            imageAlt: 'Flatbed Digital Printing Machine with Gen 6 Heads – Vee Kay Enterprises',
            imageCaption: 'Flatbed Printing Machine with Gen 6 Heads',
            driveFileName: 'flatbed-gen6.png',
            shortDescription: 'Precision industrial flatbed powered by Ricoh Gen 6 heads for textiles and leather.',
            description: 'Super-fine droplet control with durable stainless steel industrial heads for printing leather panels, cut piece garments, and specialty fabrics.',
            features: ['Ricoh Gen 6 industrial printheads', 'Greyscale multi-drop technology', 'High clearance gantry', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Engineered for high uptime and low maintenance cycles.',
            },
            applications: ['Leather Shoe Uppers & Handbags', 'Cut Piece Apparel Panels', 'Heavy Canvas Luggage']
          }
        ]
      },
      {
        id: 'seamless-360',
        name: '360 Degree Seamless Digital Printing Machine',
        description: 'Rotary cylinder mandrels for printing seamless continuous wraps on tubular garments, socks, and sports sleeves.',
        models: [
          {
            id: 'seamless-360-textile',
            name: '360 Degree Seamless Digital Printing Machine',
            imageUrl: '/assets/products/seamless-360-rotary.png?v=seamless_v2',
            imagePng: '/assets/products/seamless-360-rotary.png?v=seamless_v2',
            imageAlt: '360 Degree Seamless Digital Printing Machine – Vee Kay Enterprises',
            imageCaption: '360 Degree Seamless Printing Machine',
            driveFileName: 'VeeKayenteprises 360 seamless rotary printing machine.png',
            shortDescription: 'Continuous rotary digital printer for seamless tubular garments, socks and sleeves.',
            description: 'Rotary cylinder mandrel system that prints 360-degree continuous wrap graphics on socks, knitted tubes, sleeves, and yoga leggings without seam distortion.',
            features: ['Synchronized rotary mandrel', 'Zero visual seam overlap', 'High elasticity ink formulations', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Dedicated tooling for various garment diameters.',
            },
            applications: ['Custom Athletic Socks', 'Arm Sleeves & Leg Warmers', 'Seamless Activewear Leggings']
          }
        ]
      }
    ]
  },

  {
    id: 'mimaki',
    name: 'Mimaki Range',
    title: 'Mimaki (Complete Range)',
    tagline: 'Authorized supplier of world-renowned Japanese precision print & cut systems',
    description: 'Authorized supply and deployment of Mimaki\'s full flagship roster organized by model series: JV & SWJ Eco-Solvent, CJV & UCJV Print & Cut, UJV & SIJ UV Roll-to-Roll, UJF Desktop Flatbeds, JFX Industrial Flatbeds, and TS Sublimation Textile Systems.',
    subcategories: [
      {
        id: 'eco-solvent',
        name: 'Eco-Solvent (JV & SWJ Series)',
        series: 'JV & SWJ Series',
        description: 'Mimaki world-standard eco-solvent inkjet printers with exceptional stability, Deep Color profiles, and outdoor weatherability.',
        models: [
          {
            id: 'mimaki-jv200-160',
            name: 'Mimaki JV200-160',
            series: 'JV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-jv200-160.png',
            imagePng: '/assets/products/mimaki/mimaki-jv200-160.png',
            imageAlt: 'Mimaki JV200-160 Eco-Solvent Inkjet Printer',
            imageCaption: 'Mimaki JV200-160',
            driveFileName: 'mimaki-jv200-160.png',
            shortDescription: 'High-speed entry-level eco-solvent printer delivering Mimaki signature quality.',
            description: 'Equipped with the newly developed printhead, this eco-solvent roll printer provides outstanding stability and color rendering for sign makers.',
            features: ['New generation high speed head', 'Eco-solvent high-density inks', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Authentic Japanese Mimaki warranty backed by Vee Kay Enterprises.',
            },
            applications: ['Signboards', 'Stickers & Decals', 'Banner Rolls', 'Exhibition Panels'],
            isPopular: true
          },
          {
            id: 'mimaki-jv330-160',
            name: 'Mimaki JV330-160',
            series: 'JV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-jv330-160.png',
            imagePng: '/assets/products/mimaki/mimaki-jv330-160.png',
            imageAlt: 'Mimaki JV330-160 Eco-Solvent Inkjet Printer',
            imageCaption: 'Mimaki JV330-160',
            driveFileName: 'mimaki-jv330-160.png',
            shortDescription: 'Mid-to-high-end flagship eco-solvent model for unmatched productivity and image quality.',
            description: 'Featuring Mimakis Deep Color Natural profile and XY slitter inline finishing for automatic sheet cutting.',
            features: ['Deep Color Natural printing mode', 'Built-in XY Slitter for automatic trimming', 'Media changer loading up to 3 rolls', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['High-end Retail Graphics', 'Fine Art Reproductions', 'Commercial Fleet Graphics']
          },
          {
            id: 'mimaki-swj-320ea',
            name: 'Mimaki SWJ-320EA',
            series: 'SWJ Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-swj-320ea.png',
            imagePng: '/assets/products/mimaki/mimaki-swj-320ea.png',
            imageAlt: 'Mimaki SWJ-320EA 3.2m Solvent Printer',
            imageCaption: 'Mimaki SWJ-320EA',
            driveFileName: 'mimaki-swj-320ea.png',
            shortDescription: '3.2-meter super-wide solvent printer delivering Japanese reliability at high volume.',
            description: 'Proven super-wide roll workhorse printing twin independent rolls simultaneously or one seamless 3.2m billboard graphic.',
            features: ['3.2m super wide format', 'Twin-roll simultaneous printing capability', 'Proven Japanese solvent printheads', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Highway Billboards', 'Building Wraps', 'High-volume Sign Production'],
            isPopular: true
          }
        ]
      },
      {
        id: 'print-cut',
        name: 'Printer Cutters (CJV & UCJV Series)',
        series: 'CJV & UCJV Series',
        description: 'Integrated print-and-cut workflows with contour cutting, half-cut sticker mode, and multi-layer UV.',
        models: [
          {
            id: 'mimaki-cjv200-160',
            name: 'Mimaki CJV200-160',
            series: 'CJV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-cjv200-160.png',
            imagePng: '/assets/products/mimaki/mimaki-cjv200-160.png',
            imageAlt: 'Mimaki CJV200-160 Integrated Printer Cutter',
            imageCaption: 'Mimaki CJV200-160',
            driveFileName: 'mimaki-cjv200-160.png',
            shortDescription: 'Integrated print-and-cut eco-solvent system for precision contour cut decals.',
            description: 'Combines photo-quality printing with an integrated high-precision contour cutter in a single machine for stickers, labels, and heat transfers.',
            features: ['Seamless Print & Cut workflow', 'Continuous crop mark detection', 'Half-cut function for peel-off stickers', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Die-cut Vinyl Stickers', 'Vehicle Decals', 'T-Shirt Heat Transfers', 'Package Labels'],
            isPopular: true
          },
          {
            id: 'mimaki-cjv330-160',
            name: 'Mimaki CJV330-160',
            series: 'CJV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-cjv330-160.png',
            imagePng: '/assets/products/mimaki/mimaki-cjv330-160.png',
            imageAlt: 'Mimaki CJV330-160 Integrated Printer Cutter',
            imageCaption: 'Mimaki CJV330-160',
            driveFileName: 'mimaki-cjv330-160.png',
            shortDescription: 'Flagship integrated print-and-cut machine with built-in XY slitting technology.',
            description: 'The pinnacle of sign and graphic workflow, combining ultra-fast printing with contour cutting and automatic vertical slitting.',
            features: ['XY Slitter inline sheet cutter', 'High speed cutting carriage', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Packaging Mockups', 'Commercial Signage', 'High Volume Label Production']
          },
          {
            id: 'mimaki-ucjv300-160',
            name: 'Mimaki UCJV300-160',
            series: 'UCJV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ucjv300-160.png',
            imagePng: '/assets/products/mimaki/mimaki-ucjv300-160.png',
            imageAlt: 'Mimaki UCJV300-160 UV LED Print & Cut',
            imageCaption: 'Mimaki UCJV300-160',
            driveFileName: 'mimaki-ucjv300-160.png',
            shortDescription: '4-layer and 5-layer day/night backlit printing with integrated contour cutting.',
            description: 'Unique multi-layer UV print capabilities that transform graphics between day and night illumination, combined with precision cutting.',
            features: ['4-layer & 5-layer print technology for day/night backlit', 'White and Clear ink support', 'Integrated contour cutting', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Day/Night Lightbox Displays', 'Transparent Window Clings', 'Luxury Point-of-Sale'],
            isPopular: true
          },
          {
            id: 'mimaki-ucjv330-160',
            name: 'Mimaki UCJV330-160',
            series: 'UCJV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ucjv330-160.png',
            imagePng: '/assets/products/mimaki/mimaki-ucjv330-160.png',
            imageAlt: 'Mimaki UCJV330-160 UV LED Print & Cut',
            imageCaption: 'Mimaki UCJV330-160',
            driveFileName: 'mimaki-ucjv330-160.png',
            shortDescription: 'High-speed flagship UV print & cut system with 2.5D texture printing.',
            description: 'Produces raised tactile 2.5D embossed surfaces, wood-grain textures, and braille signage at impressive production speeds.',
            features: ['2.5D embossed texture printing', 'Built-in XY slitter', 'High productivity UV curing', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Textured Luxury Wallpapers', 'Embossed Decals', 'ADA Compliant Braille Signage']
          }
        ]
      },
      {
        id: 'uv-roll-to-roll-mimaki',
        name: 'UV Roll-to-Roll (UJV, UJ & SIJ Series)',
        series: 'UJV, UJ & SIJ Series',
        description: 'Cold UV LED roll-to-roll models with instant drying, backlit inspection lightboxes, and twin-roll feeds.',
        models: [
          {
            id: 'mimaki-ujv200-160',
            name: 'Mimaki UJV200-160',
            series: 'UJV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ujv200-160.png',
            imagePng: '/assets/products/mimaki/mimaki-ujv200-160.png',
            imageAlt: 'Mimaki UJV200-160 UV LED Roll Printer',
            imageCaption: 'Mimaki UJV200-160',
            driveFileName: 'mimaki-ujv200-160.png',
            shortDescription: 'Affordable UV LED roll-to-roll printer with instant drying and versatile media support.',
            description: 'Prints on heat-sensitive media like thin film and fabric with cold UV-LED lamps and zero drying delay.',
            features: ['Energy saving UV LED curing', 'Instant post-processing readiness', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Backlit Films', 'Window Vinyls', 'Wallpaper & Wallcoverings']
          },
          {
            id: 'mimaki-uj330h-160',
            name: 'Mimaki UJ330H-160',
            series: 'UJ Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-uj330h-160.png',
            imagePng: '/assets/products/mimaki/mimaki-uj330h-160.png',
            imageAlt: 'Mimaki UJ330H-160 Hybrid UV Workstation',
            imageCaption: 'Mimaki UJ330H-160',
            driveFileName: 'mimaki-uj330h-160.png',
            shortDescription: 'Comprehensive industrial UV printer set for dedicated high-throughput graphics.',
            description: 'Complete integrated UV production workstation engineered for uninterrupted industrial roll graphic fabrication.',
            features: ['Heavy media feed unit', 'High capacity UV curing lamps', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Heavy Duty Signage', 'Commercial Exhibition Graphics']
          },
          {
            id: 'mimaki-sij-320uv',
            name: 'Mimaki SIJ-320UV',
            series: 'SIJ Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-sij-320uv.png',
            imagePng: '/assets/products/mimaki/mimaki-sij-320uv.png',
            imageAlt: 'Mimaki SIJ-320UV 3.2m UV LED Roll Printer',
            imageCaption: 'Mimaki SIJ-320UV',
            driveFileName: 'mimaki-sij-320uv.png',
            shortDescription: '3.2-meter high-precision UV LED printer for high-end wide-format backlit banners.',
            description: 'Combines super-wide format capacity with the precision and instant dry benefits of high-grade UV LED inks and twin-roll feeding.',
            features: ['Super-wide 3.2m UV printing', 'Twin roll simultaneous print', 'High density white ink for backlit applications', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Airport Lightboxes', 'Shopping Mall Giant Banners', 'Exhibition Architecture']
          },
          {
            id: 'mimaki-ujv55-320',
            name: 'Mimaki UJV55-320',
            series: 'UJV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ujv55-320.png',
            imagePng: '/assets/products/mimaki/mimaki-ujv55-320.png',
            imageAlt: 'Mimaki UJV55-320 3.2m UV LED Roll Printer',
            imageCaption: 'Mimaki UJV55-320',
            driveFileName: 'mimaki-ujv55-320.png',
            shortDescription: 'High productivity 3.2m roll UV LED inkjet printer with built-in lightbox proofing.',
            description: 'Features a built-in LED lightbox allowing operators to inspect backlit prints immediately under backlight conditions while printing.',
            features: ['Built-in inspection LED lightbox', 'Simultaneous twin-roll printing', 'Low energy consumption UV-LED', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Premium Backlit Displays', 'Retail Lightboxes', 'Double-sided Banners']
          },
          {
            id: 'mimaki-ujv300dtf-75',
            name: 'Mimaki UJV300DTF-75',
            series: 'UJV Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ujv300dtf-75.png',
            imagePng: '/assets/products/mimaki/mimaki-ujv300dtf-75.png',
            imageAlt: 'Mimaki UJV300DTF-75 Industrial UV DTF Transfer Printer',
            imageCaption: 'Mimaki UJV300DTF-75',
            driveFileName: 'mimaki-ujv300dtf-75.png',
            shortDescription: 'Dedicated industrial UV DTF transfer printer for multi-surface object branding.',
            description: 'Produces high-durability peel-and-stick UV transfer stickers that adhere to curved glass, metal, wood, and irregular hard surfaces.',
            features: ['UV DTF specialized roll-to-roll system', 'Clear varnish gloss & matte finish options', 'High adhesion UV inks', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Curved Glassware Branding', 'Electronic Housings', 'Custom Hard Merchandise']
          }
        ]
      },
      {
        id: 'small-format-uv-flatbed',
        name: 'Small Format UV Flatbed (UJF Series)',
        series: 'UJF Series',
        description: 'Tabletop UV flatbeds with up to 153mm gantry clearance for promotional gifts, bottles, and electronics.',
        models: [
          {
            id: 'mimaki-ujf-3042mkii-e',
            name: 'Mimaki UJF-3042MkII e',
            series: 'UJF Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ujf-3042mkii-e.png',
            imagePng: '/assets/products/mimaki/mimaki-ujf-3042mkii-e.png',
            imageAlt: 'Mimaki UJF-3042MkII e Tabletop UV Flatbed Printer',
            imageCaption: 'Mimaki UJF-3042MkII e',
            driveFileName: 'mimaki-ujf-3042mkii-e.png',
            shortDescription: 'A3 format high-precision UV LED flatbed printer for promotional items and gifts.',
            description: 'Direct printing on objects up to 153mm thickness including phone cases, awards, pens, and metal plates with primer, white, and clear inks.',
            features: ['Print area: 300 x 420 mm (A3)', 'Handles items up to 153 mm height', 'Automatic primer application unit', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Kebab rotary option available for printing 360 degrees on bottles.',
            },
            applications: ['Personalized Corporate Gifts', 'Phone Covers & Gadgets', 'Name Badges & Industrial Dials'],
            isPopular: true
          },
          {
            id: 'mimaki-ujf-6042mkii-e',
            name: 'Mimaki UJF-6042MkII e',
            series: 'UJF Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ujf-6042mkii-e.png',
            imagePng: '/assets/products/mimaki/mimaki-ujf-6042mkii-e.png',
            imageAlt: 'Mimaki UJF-6042MkII e A2 Tabletop UV Flatbed Printer',
            imageCaption: 'Mimaki UJF-6042MkII e',
            driveFileName: 'mimaki-ujf-6042mkii-e.png',
            shortDescription: 'A2 format tabletop UV flatbed for medium-volume customized merchandise.',
            description: 'Expanded bed size (610 x 420 mm) allowing multiple items to be printed simultaneously with exceptional photographic sharpness.',
            features: ['Print area: 610 x 420 mm (A2)', 'Table elevation up to 153 mm', 'Enclosed design to block dust particles', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Membrane Switches', 'Architectural Models', 'Bottles with Kebab Attachment', 'Awards & Trophies']
          },
          {
            id: 'mimaki-ujf-7151-plus-ii',
            name: 'Mimaki UJF-7151 Plus II',
            series: 'UJF Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ujf-7151-plus-ii.png',
            imagePng: '/assets/products/mimaki/mimaki-ujf-7151-plus-ii.png',
            imageAlt: 'Mimaki UJF-7151 Plus II Industrial UV Flatbed Printer',
            imageCaption: 'Mimaki UJF-7151 Plus II',
            driveFileName: 'mimaki-ujf-7151-plus-ii.png',
            shortDescription: 'High-performance industrial production flatbed with 8 printheads.',
            description: 'Engineered for high-precision industrial production runs on metal faceplates, automotive switches, and electrical enclosures with high positional repeatability.',
            features: ['8 printhead configuration with gloss ink', 'High positional precision ball screw drive', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Industrial Control Panels', 'Automotive Interior Parts', 'Luxury Credit Card Blanks']
          }
        ]
      },
      {
        id: 'large-format-flatbed',
        name: 'Large Format UV Flatbed (JFX Series)',
        series: 'JFX Series',
        description: 'Flagship 8x4 ft and extra-long 3.1m Japanese UV flatbeds with 2.5D texture maker and robotic MDL automation.',
        models: [
          {
            id: 'mimaki-jfx200-2513ex',
            name: 'Mimaki JFX200-2513EX',
            series: 'JFX Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-jfx200-2513ex.png',
            imagePng: '/assets/products/mimaki/mimaki-jfx200-2513ex.png',
            imageAlt: 'Mimaki JFX200-2513EX 8x4 ft Industrial UV Flatbed',
            imageCaption: 'Mimaki JFX200-2513EX',
            driveFileName: 'mimaki-jfx200-2513ex.png',
            shortDescription: 'The benchmark 8x4 ft Japanese UV flatbed printer for sign & industrial display.',
            description: 'High stability flatbed featuring 2.5D texture maker, draft print mode up to 35 sqm/hr, and zoned vacuum suction.',
            features: ['2,500 x 1,300 mm bed size', '2.5D Texture Maker for textured embossed prints', 'Foot pedal vacuum switch', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Best-seller in New Delhi sign industry.',
            },
            applications: ['Acrylic Brand Displays', 'Wood & Glass Interior Panels', 'Architectural Signage'],
            isPopular: true
          },
          {
            id: 'mimaki-jfx200-1213ex',
            name: 'Mimaki JFX200-1213EX',
            series: 'JFX Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-jfx200-1213ex.png',
            imagePng: '/assets/products/mimaki/mimaki-jfx200-1213ex.png',
            imageAlt: 'Mimaki JFX200-1213EX Compact 4x4 ft Industrial UV Flatbed',
            imageCaption: 'Mimaki JFX200-1213EX',
            driveFileName: 'mimaki-jfx200-1213ex.png',
            shortDescription: 'Compact 4x4 ft footprint industrial flatbed for workshops with limited space.',
            description: 'Delivers full industrial JFX platform capabilities in a space-saving 1,200 x 1,300 mm printable bed area.',
            features: ['Compact 1.2m x 1.3m bed size', 'Same printhead tech as full-size JFX', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Custom Sign Workshops', 'Prototype & Specialty Print Labs']
          },
          {
            id: 'mimaki-jfx600-2513',
            name: 'Mimaki JFX600-2513',
            series: 'JFX Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-jfx600-2513.png',
            imagePng: '/assets/products/mimaki/mimaki-jfx600-2513.png',
            imageAlt: 'Mimaki JFX600-2513 Ultra High Speed 200 sqm/h UV Flatbed',
            imageCaption: 'Mimaki JFX600-2513',
            driveFileName: 'mimaki-jfx600-2513.png',
            shortDescription: 'Ultra-high-speed industrial flatbed boasting up to 200 sqm/hr productivity.',
            description: 'Equipped with 16 printheads for high-throughput 24/7 industrial manufacturing of signboards, construction materials, and furniture surfaces.',
            features: ['16 printheads for speeds up to 200 sqm/h', 'Supports MDL (Mimaki Device Language) for automated robotic loading', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Industrial High-volume Sign Manufacturing', 'Building Material Surface Finishing']
          },
          {
            id: 'mimaki-jfx600-2531',
            name: 'Mimaki JFX600-2531',
            series: 'JFX Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-jfx600-2531.png',
            imagePng: '/assets/products/mimaki/mimaki-jfx600-2531.png',
            imageAlt: 'Mimaki JFX600-2531 3.1m Architectural Industrial UV Flatbed',
            imageCaption: 'Mimaki JFX600-2531',
            driveFileName: 'mimaki-jfx600-2531.png',
            shortDescription: 'Expanded 3.1-meter length industrial flatbed for architectural doors and oversized panels.',
            description: 'Massive 2,500 x 3,100 mm printable bed size engineered for long architectural sheets, commercial glass doors, and modular partitions.',
            features: ['2,500 x 3,100 mm printable area', 'Simultaneous 2-zone alternate origin printing', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Architectural Doors & Partitions', 'Large Decorative Glass Panels', 'Oversized Retail Exhibits']
          }
        ]
      },
      {
        id: 'textile-sublimation-mimaki',
        name: 'Textile & Sublimation (TS & Tiger Series)',
        series: 'TS & Tiger Series',
        description: 'Authentic Japanese dye-sublimation transfer printers for fashion apparel, sportswear jerseys, and home textiles.',
        models: [
          {
            id: 'mimaki-ts100-160',
            name: 'Mimaki TS100-160',
            series: 'TS Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ts100-160.png',
            imagePng: '/assets/products/mimaki/mimaki-ts100-160.png',
            imageAlt: 'Mimaki TS100-160 Dye Sublimation Printer',
            imageCaption: 'Mimaki TS100-160',
            driveFileName: 'mimaki-ts100-160.png',
            shortDescription: 'Affordable authentic Mimaki Japanese entry dye-sublimation printer.',
            description: 'Genuine Mimaki quality with NCU (Nozzle Check Unit) and NRS (Nozzle Recovery System) ensuring continuous unattended printing.',
            features: ['NCU & NRS automatic nozzle backup', 'Mimaki MAPS4 advanced pass system', 'Original Sb610 high-density sublimation inks', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Official Mimaki warranty and technician dispatch from Kirti Nagar.',
            },
            applications: ['Designer Apparel', 'Fashion Boutiques', 'Sublimated Gifts', 'Custom Sports Jerseys'],
            isPopular: true
          },
          {
            id: 'mimaki-ts330-1600',
            name: 'Mimaki TS330-1600',
            series: 'TS Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-ts330-1600.png',
            imagePng: '/assets/products/mimaki/mimaki-ts330-1600.png',
            imageAlt: 'Mimaki TS330-1600 High Productivity Dye Sublimation Printer',
            imageCaption: 'Mimaki TS330-1600',
            driveFileName: 'mimaki-ts330-1600.png',
            shortDescription: 'Mid-to-high-end flagship dye-sublimation printer with speeds up to 135 sqm/h.',
            description: 'Equipped with Mimaki\'s high-density Sb411/Sb410 sublimation inks and Deep Color Natural mode for rich blacks and vivid sportswear graphics.',
            features: ['Speed up to 135 sqm/h', 'Fluorescent and light color ink support', 'MAPS4 & NCU/NRS system', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['High-volume Activewear', 'Soft Signage & Flags', 'Polyester Fashion Fabrics']
          },
          {
            id: 'mimaki-tiger600-1800ts',
            name: 'Mimaki Tiger600-1800TS',
            series: 'Tiger Series',
            brand: 'Mimaki',
            imageUrl: '/assets/products/mimaki/mimaki-tiger600-1800ts.png',
            imagePng: '/assets/products/mimaki/mimaki-tiger600-1800ts.png',
            imageAlt: 'Mimaki Tiger600-1800TS Industrial High Speed Sublimation Press',
            imageCaption: 'Mimaki Tiger600-1800TS',
            driveFileName: 'mimaki-tiger600-1800ts.png',
            shortDescription: 'Ultra-high-speed industrial textile sublimation press delivering up to 550 sqm/h.',
            description: 'Mass production textile transfer printer built for industrial mills, featuring compact layout with 4 high-speed heads and 10kg mini jumbo ink tanks.',
            features: ['Mass production up to 550 sqm/h', '10kg high capacity ink supply', 'Compact space-saving design', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Industrial Textile Export Houses', 'Continuous Fabric Printing', 'Bedding & Home Textiles']
          }
        ]
      }
    ]
  },

  {
    id: 'label-packaging',
    name: 'Label and Packaging',
    title: 'Label and Packaging',
    tagline: 'Short-run packaging, serialized QR codes, industrial roll labels & UV DTF transfers',
    description: 'Specialized packaging technology designed for fast turnaround labels, custom carton mockups, tamper-evident QR coding, and high-adhesion UV DTF transfer production.',
    subcategories: [
      {
        id: 'uv-dtf-pack',
        name: 'UV DTF Printing Machine',
        description: 'Roll-to-roll UV DTF printing with integrated heated lamination for peel-and-stick labels on hard curved substrates.',
        models: [
          {
            id: 'uv-dtf-packaging',
            name: 'Industrial UV DTF Printing Machine',
            shortDescription: 'Roll-to-roll UV DTF printer with inline laminator for instant peel-and-stick labels.',
            description: 'Prints CMYK + White + Varnish onto film A, then automatically laminates with film B. The transfer can be applied to plastics, curved glassware, ceramics, and metal without heat press.',
            features: ['Integrated roll printer & heated laminator unit', 'Gloss varnish 3D relief finish', 'Waterproof, scratch-proof adhesion', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Curved Bottle Labels', 'Electronic Appliance Badges', 'Helmet & Sports Equipment Graphics'],
            isPopular: true
          }
        ]
      },
      {
        id: 'inkjet-label',
        name: 'Inkjet Label Printer',
        description: 'Continuous roll-to-roll high-resolution color inkjet printing for food, pharma, and cosmetic labels.',
        models: [
          {
            id: 'inkjet-label-printer',
            name: 'Digital Inkjet Roll Label Printer',
            shortDescription: 'Roll-to-roll high-resolution color inkjet printer for short-to-medium label runs.',
            description: 'Direct roll label printer ideal for pharmaceutical, cosmetics, specialty foods, and chemical packaging labels with variable data printing.',
            features: ['Roll-to-roll continuous label feeding', 'Variable data and batch serialization', 'Fast-drying pigment ink chemistry', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Cosmetics & Fragrance Labels', 'Pharma Bottle Labels', 'Specialty Food Packaging']
          }
        ]
      },
      {
        id: 'qr-code',
        name: 'QR Code Printer',
        description: 'High-speed serialized variable data coding for pharmaceutical trace-and-track and batch markings.',
        models: [
          {
            id: 'qr-code-printer',
            name: 'High Speed Industrial QR Code Printer',
            shortDescription: 'Serialized variable data inkjet printer for QR codes, barcodes, and MRP markings.',
            description: 'High-speed inkjet coding machine designed for printing high-contrast, scannable QR codes, trace-and-track codes, and expiry dates on labels, cartons, and blister packs.',
            features: ['High-speed variable QR code generation', 'Micro-character printing capability', 'Inline conveyor integration options', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Pharmaceutical Anti-counterfeiting QR', 'Food Batch & Expiry Coding', 'Warehouse Inventory Barcodes']
          }
        ]
      },
      {
        id: 'carton-packaging',
        name: 'Corrugated & Rigid Box Printers',
        description: 'Single-pass direct printing solutions for folding cartons and corrugated packaging mockups.',
        models: [] // Intentionally empty to fulfill requirement: "Subcategories with no models show 'Models available on request' with a quote button"
      }
    ]
  },

  {
    id: 'inks',
    name: 'Inks & Consumables',
    title: 'Industrial Inks & Consumables',
    tagline: 'Certified sublimation dyes, UV curable formulations, and maintenance fluids',
    description: 'Complete wholesale inventory of authentic sublimation inks, UV curable inks, reactive dyes, pigment inks, cleaning flushes, and head protection solutions.',
    subcategories: [
      {
        id: 'sublimation-inks',
        name: 'Sublimation Inks',
        description: 'High-density certified sublimation ink drums for Kyocera, Ricoh, and Epson printheads.',
        models: [
          {
            id: 'sublimation-inks-vke',
            name: 'Vee Kay Ultra-HD Sublimation Inks',
            imageUrl: '/assets/products/sublimation-ink.png?v=subink_v1',
            imagePng: '/assets/products/sublimation-ink.png?v=subink_v1',
            imageAlt: 'Vee Kay Ultra-HD Sublimation Inks – Archroma 16L Formulation',
            imageCaption: 'Ultra-HD Sublimation Inks',
            driveFileName: 'sublimation-ink.png',
            shortDescription: 'High-optical density dye-sublimation ink formulation for vibrant, clean transfer.',
            description: 'Specially filtered dye-sublimation ink engineered to prevent nozzle clogging during long production shifts, offering deep rich blacks and brilliant primaries.',
            features: ['High transfer yield from paper to fabric', 'Wide color gamut with intense deep black', 'Fast drying on low GSM transfer paper', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us. Wholesale bulk drums (5L, 16L, 20L) available from Kirti Nagar.',
            },
            applications: ['Polyester Apparel', 'Sportswear', 'Flags', 'Promotional Blankets']
          }
        ]
      },
      {
        id: 'uv-curable-inks',
        name: 'UV Curable Inks',
        description: 'Hard, flexible, and optical white LED UV curable ink formulations for signboards and rigid sheets.',
        models: [
          {
            id: 'uv-curable-inks-industrial',
            name: 'Vee Kay Industrial LED UV Curable Inks',
            shortDescription: 'Universal flexible and hard LED UV curable ink formulation with high scratch resistance.',
            description: 'Formulated for Ricoh Gen5/Gen6, Konica Minolta, and Toshiba heads with excellent adhesion to acrylic, glass, metal, and PVC.',
            features: ['Instant curing under LED UV lamps', 'Flexible options for roll media, rigid for boards', 'High opacity dense white ink', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Signboards', 'Acrylic Displays', 'Exterior ACP Panels']
          }
        ]
      },
      {
        id: 'reactive-inks',
        name: 'Reactive Inks',
        description: 'Micro-filtered reactive digital dyes for pure silk, cotton, modal, and viscose fibers.',
        models: [
          {
            id: 'reactive-textile-dyes',
            name: 'High-Purity Reactive Digital Textile Inks',
            imageUrl: '/assets/products/reactive-ink.png?v=reactink_v1',
            imagePng: '/assets/products/reactive-ink.png?v=reactink_v1',
            imageAlt: 'High-Purity Reactive Digital Textile Inks – Archroma 16L Formulation',
            imageCaption: 'High-Purity Reactive Digital Textile Inks',
            driveFileName: 'reactive-ink.png',
            shortDescription: 'Industrial reactive dye inks for natural fibers with superior wash-fastness.',
            description: 'Micro-filtered to 0.2 microns for Kyocera, Ricoh, and Epson industrial heads, giving soft natural hand-feel and vibrant colors on cotton, viscose, and silk.',
            features: ['Grade 4-5 wash and light fastness', 'Preserves natural drape of fine silk and cotton', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Cotton Ethnic Wear', 'Pure Silk Sarees', 'Rayon Dress Materials']
          }
        ]
      },
      {
        id: 'maintenance-fluids',
        name: 'Flushing & Maintenance Solutions',
        description: 'Specialized chemical flushing solutions to preserve printhead longevity during standbys.',
        models: [
          {
            id: 'cleaning-flushing-solutions',
            name: 'Industrial Printhead Flush & Maintenance Fluids',
            shortDescription: 'Specialized chemical flushing solutions to preserve printhead longevity.',
            description: 'Formulated to safely dissolve dried UV, eco-solvent, or sublimation pigment residues without degrading head piezo elements or nozzle plate coatings.',
            features: ['Compatible with all major printhead brands', 'Safe storage fluid for long machine standbys', 'Specs: contact us'],
            specs: {
              technicalDetails: 'Specs: contact us.',
            },
            applications: ['Daily Maintenance', 'Color Line Conversion', 'Extended Standby Protection']
          }
        ]
      }
    ]
  }
];

// Helper functions for easy querying
export function getAllCategories() {
  return PRINTER_CATALOGUE;
}

export function getCategoryById(categoryId) {
  return PRINTER_CATALOGUE.find((c) => c.id === categoryId) || null;
}

export function getSubcategory(categoryId, subcategoryId) {
  const cat = getCategoryById(categoryId);
  if (!cat) return null;
  return cat.subcategories.find((s) => s.id === subcategoryId) || null;
}

export function getModel(categoryId, subcategoryId, modelId) {
  const sub = getSubcategory(categoryId, subcategoryId);
  if (!sub) return null;
  return sub.models.find((m) => m.id === modelId || m.aliases?.includes(modelId)) || null;
}

// Flat list of all models with their category and subcategory info attached
export function getAllModels() {
  const models = [];
  for (const cat of PRINTER_CATALOGUE) {
    for (const sub of cat.subcategories) {
      for (const m of sub.models) {
        models.push({
          ...m,
          categoryId: cat.id,
          categoryName: cat.name,
          categoryTitle: cat.title,
          subcategoryId: sub.id,
          subcategoryName: sub.name,
        });
      }
    }
  }
  return models;
}

// Lookup model across entire catalogue by modelId (for fallback routes)
export function findModelById(modelId) {
  for (const cat of PRINTER_CATALOGUE) {
    for (const sub of cat.subcategories) {
      const match = sub.models.find((m) => m.id === modelId || m.aliases?.includes(modelId));
      if (match) {
        return {
          model: match,
          category: cat,
          subcategory: sub,
        };
      }
    }
  }
  return null;
}

// Backwards compatibility exports
export const PRINTERS_DATA = getAllModels().map((m) => ({
  ...m,
  subcategory: m.subcategoryName || '',
}));

export const PRINTER_CATEGORIES = PRINTER_CATALOGUE.map((c) => ({
  id: c.id,
  name: c.name,
  title: c.title,
  tagline: c.tagline,
  description: c.description,
  subcategories: c.subcategories.map((s) => s.name),
  featuredModelCount: c.subcategories.reduce((acc, s) => acc + s.models.length, 0),
}));
