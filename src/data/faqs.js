/**
 * Frequently Asked Questions (FAQ) Data
 * 
 * NOTE FOR OWNER:
 * Warranty periods and delivery timelines contain bracketed placeholders (e.g., [X months], [X days]).
 * Replace these placeholders with your actual contractual terms whenever you wish.
 */

export const FAQ_CATEGORIES = ['Maintenance', 'Warranty', 'Lead times'];

export const FAQS_DATA = [
  // --- MAINTENANCE ---
  {
    id: 'maint-1',
    category: 'Maintenance',
    question: 'What is the recommended daily maintenance routine for industrial printheads?',
    answer: 'At the end of each production shift, operators must execute automated capping station alignment, clean the rubber wiper blades with lint-free swabs and certified cleaning solution, and inspect the capping seal. Before prolonged shutdown (such as weekends), a solvent flush or capping moisturizing fluid should be applied to prevent ink drying on nozzle plates.',
    tag: 'Daily Care'
  },
  {
    id: 'maint-2',
    category: 'Maintenance',
    question: 'What ambient room conditions and power requirements are necessary to preserve machine health?',
    answer: 'Industrial UV and sublimation printers require a dust-controlled environment with room temperatures maintained between [X°C to Y°C] and relative humidity kept between [X% and Y%]. A dedicated online servo voltage stabilizer of [X kVA] with proper neutral-to-earth grounding (< 1V) is mandatory to protect sensitive printhead drive boards.',
    tag: 'Site Preparation'
  },
  {
    id: 'maint-3',
    category: 'Maintenance',
    question: 'How often should ink filters, dampers, and UV curing lamps be replaced?',
    answer: 'Inline ink filters and sub-tank dampers should be inspected and typically replaced every [X months] or after running [X liters] of ink to prevent microscopic particulate buildup. LED UV curing lamps require periodic quartz lens wipe-down and have an operational lifespan of approximately [X,000 hours] before requiring inspection.',
    tag: 'Consumables & Spares'
  },
  {
    id: 'maint-4',
    category: 'Maintenance',
    question: 'Does Vee Kay Enterprises provide on-site operator training and preventive maintenance visits?',
    answer: 'Yes. Our factory-trained field engineers provide comprehensive on-site installation and operator training covering RIP color profiling, media tension setup, and routine nozzle care. Scheduled preventive maintenance visits can be arranged at intervals of [X months] through our Kirti Nagar head office and regional branch hubs.',
    tag: 'Training & Support'
  },

  // --- WARRANTY ---
  {
    id: 'warr-1',
    category: 'Warranty',
    question: 'What is the standard warranty coverage for industrial printers and Mimaki machines?',
    answer: 'All commercial printing machinery supplied by Vee Kay Enterprises comes with an authentic manufacturer warranty of [X months / X years] covering the machine chassis, linear guide beams, mainboards, servo motors, and electronic drive boards against manufacturing defects.',
    tag: 'Machine Warranty'
  },
  {
    id: 'warr-2',
    category: 'Warranty',
    question: 'Are industrial printheads covered under warranty?',
    answer: 'Printheads (such as Ricoh Gen 6, Kyocera, or Mimaki piezo assemblies) carry a manufacturer-backed warranty of [X months] or [X billion firings / shots], contingent upon the exclusive use of original certified inks and adherence to verified daily capping protocols. Mechanical head strike damage caused by substrate collision is excluded.',
    tag: 'Printhead Policy'
  },
  {
    id: 'warr-3',
    category: 'Warranty',
    question: 'Are extended warranties or Annual Maintenance Contracts (AMC) available?',
    answer: 'Yes. Following the expiration of the initial warranty, Vee Kay Enterprises offers comprehensive and non-comprehensive Annual Maintenance Contracts (AMC) for [X months / annual terms]. AMCs include [X scheduled preventive visits per year], priority emergency technician dispatch, and discounted genuine spare parts buffered at our Delhi warehouse.',
    tag: 'AMC & Extended Cover'
  },
  {
    id: 'warr-4',
    category: 'Warranty',
    question: 'How quickly does a technician respond in case of an on-site breakdown?',
    answer: 'For customers within the Delhi NCR region, our service engineers respond on-site within [X to Y hours]. For other major manufacturing hubs (Surat, Ludhiana, Mumbai, Panipat, Bangalore, etc.), field engineers from our nearest regional branch hub are dispatched within [X business hours / X days].',
    tag: 'Service Turnaround'
  },

  // --- LEAD TIMES ---
  {
    id: 'lead-1',
    category: 'Lead times',
    question: 'What is the standard dispatch lead time for ready stock machines?',
    answer: 'Machines readily buffered in our Kirti Nagar central demonstration warehouse are inspected, test-printed, and dispatched in heavy wooden crate packing within [X business days] of commercial purchase order confirmation and advance payment clearance.',
    tag: 'Warehouse Dispatch'
  },
  {
    id: 'lead-2',
    category: 'Lead times',
    question: 'What is the lead time for specialized or custom-configured factory models?',
    answer: 'Specialized machinery—such as 3.2-meter wide direct reactive textile lines, double-side carpet printers, or customized Japanese Mimaki flatbed configurations—requires a production, import clearance, and factory calibration timeline of approximately [X to Y weeks].',
    tag: 'Custom Orders'
  },
  {
    id: 'lead-3',
    category: 'Lead times',
    question: 'How long does freight transit take to regional industrial hubs across India?',
    answer: 'Transit via dedicated air-ride logistics vehicles typically takes [X to Y days] to North India manufacturing clusters, [X to Y days] to Western India (Surat, Ahmedabad, Mumbai), and [X to Y days] to South and Eastern industrial zones. All shipments are fully transit-insured.',
    tag: 'Transit Times'
  },
  {
    id: 'lead-4',
    category: 'Lead times',
    question: 'What is the dispatch turnaround for inks, wipers, and emergency spare parts?',
    answer: 'Wholesale ink drums, solvent flushes, wiper blades, dampers, and standard electronic boards are maintained in stock in Kirti Nagar and dispatched within [X hours / same-day] for air courier delivery across all 12 branch cities.',
    tag: 'Parts & Inks Dispatch'
  }
];
