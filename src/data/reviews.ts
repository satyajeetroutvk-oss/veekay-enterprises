/**
 * Google Reviews & Client Testimonials
 * 
 * HOW TO SWAP IN REAL REVIEWS OR CONNECT A LIVE REVIEWS WIDGET:
 * 1. To manually update: Replace the objects in REVIEWS_DATA below with exact customer quotes,
 *    reviewer names, company titles, and verification dates from your Google Business Profile.
 * 2. To embed a live widget: You can connect Google Business Profile API (Places API) using
 *    place_id for Vee Kay Enterprises Kirti Nagar, or embed a 3rd party widget (such as Elfsight,
 *    EmbedReviews, or Trustmary) by placing the script snippet in `ReviewsSection.tsx`.
 * 3. Direct Google Profile URL: https://share.google/giQckxTgBtVPaR7WL
 */

export interface ReviewItem {
  id: string;
  author: string;
  designation: string;
  company: string;
  city: string;
  rating: number;
  date: string;
  theme: 'honest_pricing' | 'punctual_dispatch' | 'after_sales';
  comment: string;
  verifiedPurchase: string;
}

export const GOOGLE_PROFILE_URL = "https://share.google/giQckxTgBtVPaR7WL";

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rajesh Mehra',
    designation: 'Managing Director',
    company: 'Apex Signage Solutions',
    city: 'New Delhi (Naraina Industrial Area)',
    rating: 5,
    date: '3 weeks ago',
    theme: 'honest_pricing',
    comment: 'We have been purchasing printing equipment and inks from Vee Kay Enterprises in Kirti Nagar for over 12 years. Their pricing is completely transparent and fair with zero hidden surprises. Best wholesale rate on UV flatbed machines in entire North India.',
    verifiedPurchase: 'Mimaki JFX200-2513EX & UV Inks'
  },
  {
    id: 'rev-2',
    author: 'Sunil Chawla',
    designation: 'Plant Head',
    company: 'Vibrant Threads Textile Mill',
    city: 'Surat, Gujarat',
    rating: 5,
    date: '1 month ago',
    theme: 'punctual_dispatch',
    comment: 'Dispatch punctuality is critical for our garment export deadlines. Vee Kay shipped our high-speed sublimation printers and 500 liters of ink on schedule without delay. Their logistics coordination from Kirti Nagar to our Surat facility was flawless.',
    verifiedPurchase: 'VKE-2008A TX Sublimation Fleet'
  },
  {
    id: 'rev-3',
    author: 'Harpreet Singh',
    designation: 'Owner',
    company: 'Malwa Knitwear & Woolens',
    city: 'Ludhiana, Punjab',
    rating: 5,
    date: '2 months ago',
    theme: 'after_sales',
    comment: 'What sets Vee Kay apart from other suppliers is their dedicated technical after-sales engineers. Whenever we needed printhead calibration or profile tuning, their service technician was on-site in Ludhiana within 24 hours. Exemplary 30+ year reputation.',
    verifiedPurchase: 'Wool Sweater & Shawl Direct Printing Machine'
  },
  {
    id: 'rev-4',
    author: 'Arun Prakash Nair',
    designation: 'Technical Director',
    company: 'Deccan Graphics & POS',
    city: 'Bengaluru, Karnataka',
    rating: 5,
    date: '3 months ago',
    theme: 'honest_pricing',
    comment: 'Procured two Mimaki UCJV300-160 print & cut systems through their Bangalore branch network. Honest billing, comprehensive warranty backing, and original consumables supplied consistently at wholesale distributor prices.',
    verifiedPurchase: 'Mimaki UCJV300-160 Systems'
  },
  {
    id: 'rev-5',
    author: 'Deepak Agarwal',
    designation: 'Proprietor',
    company: 'Shree Radhey Packagings',
    city: 'Agra, Uttar Pradesh',
    rating: 5,
    date: '4 months ago',
    theme: 'after_sales',
    comment: 'The engineering team trained our local operators thoroughly on the UV DTF transfer machine. Whenever we have ink profiling questions, the Kirti Nagar technical desk resolves it promptly over video call and dispatch.',
    verifiedPurchase: 'UV DTF Printing Machine'
  }
];
