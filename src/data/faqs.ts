export interface FAQItem {
  id: string;
  category: 'maintenance' | 'warranty' | 'lead-times' | 'general';
  categoryLabel: string;
  question: string;
  answer: string;
  tags?: string[];
}

export const FAQS_DATA: FAQItem[] = [
  // --- MAINTENANCE ---
  {
    id: 'faq-maint-1',
    category: 'maintenance',
    categoryLabel: 'Maintenance & Upkeep',
    question: 'What daily and weekly maintenance routines do industrial printers require?',
    answer: 'Industrial printing machinery requires simple but disciplined daily and weekly care: (1) Daily capping and wiper blade inspection to prevent dried ink crust; (2) Daily automatic purge or nozzle check print before beginning high-volume shifts; (3) Weekly cleaning of printhead carriage edges, flushing boxes, and waste ink bottles with certified cleaning solutions; (4) Monthly inspection of linear guide rails and applying high-viscosity bearing lubricant. Vee Kay Enterprises provides full on-site operator training on these procedures during initial installation.',
    tags: ['Daily Care', 'Printhead Cleaning', 'Lubrication']
  },
  {
    id: 'faq-maint-2',
    category: 'maintenance',
    categoryLabel: 'Maintenance & Upkeep',
    question: 'What are the ambient temperature and humidity requirements for optimal printhead longevity?',
    answer: 'For both Japanese Mimaki units and industrial UV flatbed or sublimation printers, the recommended operating room temperature is 20°C to 28°C (68°F to 82°F) with a relative humidity level of 40% to 65% (non-condensing). Excessive dry heat causes rapid ink solvent evaporation at nozzle plates, while excessive humidity interferes with ink drying and substrate tension. We recommend dedicating an air-conditioned, dust-controlled bay in your printing facility.',
    tags: ['Room Environment', 'Temperature', 'Humidity']
  },
  {
    id: 'faq-maint-3',
    category: 'maintenance',
    categoryLabel: 'Maintenance & Upkeep',
    question: 'How do I protect printheads if our factory will be shut down for several weeks or holidays?',
    answer: 'If a printer will remain idle for more than 5 to 7 days, our engineering protocol prescribes filling the sub-tanks and head cavities with certified moisturizing storage flush fluid and capping the nozzles firmly in dedicated cleaning stations. This prevents pigment or UV monomer crystallization inside microscopic piezo chambers. Never leave solvent, UV, or sublimation inks stagnant in unpowered heads.',
    tags: ['Shutdown Protocol', 'Storage Fluid', 'Idle Heads']
  },

  // --- WARRANTY ---
  {
    id: 'faq-warr-1',
    category: 'warranty',
    categoryLabel: 'Warranty & OEM Support',
    question: 'What warranty coverage is included with new Mimaki and industrial machines?',
    answer: 'All new equipment supplied by Vee Kay Enterprises comes with comprehensive authentic manufacturer warranty coverage (typically 12 to 24 months depending on the specific model and series). This covers electrical boards, gantry servo motors, linear encoders, power supplies, UV lamp drivers, and mechanical chassis components against manufacturing defects.',
    tags: ['OEM Warranty', 'Motors & Boards', 'Coverage Terms']
  },
  {
    id: 'faq-warr-2',
    category: 'warranty',
    categoryLabel: 'Warranty & OEM Support',
    question: 'Are printheads covered under the warranty policy?',
    answer: 'Industrial printheads (Ricoh Gen 5/6, Kyocera, Mimaki OEM, and Epson) are precision consumable piezo assemblies. Factory policies cover printheads against out-of-the-box physical defects and nozzle dropout upon initial installation by an authorized Vee Kay field engineer. Continued warranty protection requires using 100% certified inks supplied through our authorized distribution channels and strictly adhering to voltage stabilization requirements.',
    tags: ['Printheads', 'Piezo Heads', 'Ink Authenticity']
  },
  {
    id: 'faq-warr-3',
    category: 'warranty',
    categoryLabel: 'Warranty & OEM Support',
    question: 'Does Vee Kay Enterprises offer Annual Maintenance Contracts (AMC) after standard warranty expires?',
    answer: 'Yes. Upon completion of the initial manufacturer warranty period, clients can enroll in Vee Kay Enterprise Comprehensive or Non-Comprehensive AMCs. This grants priority engineer dispatch, quarterly preventive check-ups, color profiling recalibration, and discounted wholesale pricing on replacement mechanical spares and consumables.',
    tags: ['AMC', 'Service Contracts', 'Preventive Care']
  },

  // --- LEAD TIMES & DISPATCH ---
  {
    id: 'faq-lead-1',
    category: 'lead-times',
    categoryLabel: 'Lead Times & Logistics',
    question: 'What is the typical dispatch timeline from your Kirti Nagar central warehouse?',
    answer: 'For standard stock models (including high-runner Mimaki JV/CJV series, 3.2m sublimation workhorses, UV flatbeds, and certified inks), dispatch occurs within 24 to 48 hours of commercial order confirmation. For specialized configurations, extra-wide custom beds (e.g., 3.1m JFX600-2531), or multi-head direct reactive setups, transit time typically ranges between 10 to 20 working days depending on port customs clearance and factory crating.',
    tags: ['Stock Dispatch', '24-48 Hours', 'Custom Configurations']
  },
  {
    id: 'faq-lead-2',
    category: 'lead-times',
    categoryLabel: 'Lead Times & Logistics',
    question: 'How are heavy industrial printers transported across India and what about transit insurance?',
    answer: 'All machinery is securely packaged in reinforced, moisture-resistant industrial wooden crates with internal shock mounts. Shipments are transported via dedicated freight logistics partners and covered under 100% Comprehensive Transit Marine Insurance from our Kirti Nagar warehouse to your factory unloading dock across all 12 branch cities and nationwide locations.',
    tags: ['Wooden Crating', 'Transit Insurance', 'Nationwide Freight']
  },
  {
    id: 'faq-lead-3',
    category: 'lead-times',
    categoryLabel: 'Lead Times & Logistics',
    question: 'How quickly does your engineer arrive for on-site commissioning and training?',
    answer: 'A certified Vee Kay field engineer is scheduled to arrive at your site within 24 to 48 hours of the physical delivery of your machine crate. The engineer conducts crate unboxing, precision gantry leveling, voltage line verification, ink loading, RIP software setup, and 2 full days of hands-on operator training.',
    tags: ['Commissioning', 'Engineer Arrival', 'Hands-on Training']
  },

  // --- GENERAL / DEMO ---
  {
    id: 'faq-gen-1',
    category: 'general',
    categoryLabel: 'Demonstration & Consultation',
    question: 'Can I test my actual production substrates at your Kirti Nagar showroom before buying?',
    answer: 'Absolutely. We actively encourage clients to bring their actual production substrates—whether genuine leather shoe uppers, high-micron acrylic sheets, delicate pashmina wool, or custom corrugated cardboard. Our senior applications team in Kirti Nagar will run live strike-offs, measure ink adhesion, and calibrate color density at zero charge before you commit.',
    tags: ['Live Demonstration', 'Substrate Testing', 'Kirti Nagar Showroom']
  }
];
