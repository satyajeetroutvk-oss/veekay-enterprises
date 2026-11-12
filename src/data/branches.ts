export interface Branch {
  id: string;
  city: string;
  state: string;
  isHeadOffice?: boolean;
  address: string;
  phone: string;
  email: string;
  hubFocus: string;
  region: 'North' | 'West' | 'South' | 'East';
}

export const BRANCHES_DATA: Branch[] = [
  {
    id: 'delhi-hq',
    city: 'New Delhi (Head Office)',
    state: 'Delhi',
    isHeadOffice: true,
    address: '5/7, Block 5, Kirti Nagar Industrial Area, Kirti Nagar, New Delhi, Delhi 110015',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'Corporate Headquarters, Master Warehouse, Demo Showroom & Central Parts Depot',
    region: 'North'
  },
  {
    id: 'noida',
    city: 'Noida',
    state: 'Uttar Pradesh',
    address: 'Sector 63, Electronic City Industrial Zone, Noida, UP 201301',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'NCR Signage, UV Flatbeds & Rapid Field Engineering Support',
    region: 'North'
  },
  {
    id: 'panipat',
    city: 'Panipat',
    state: 'Haryana',
    address: 'Sector 25, Industrial Area, Panipat, Haryana 132103',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'Home Textile, Blanket, Carpet & Wide Sublimation Systems',
    region: 'North'
  },
  {
    id: 'ludhiana',
    city: 'Ludhiana',
    state: 'Punjab',
    address: 'Focal Point, Phase V, Industrial Area, Ludhiana, Punjab 141010',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'Knitwear, Woolen Sweater Direct Printing & Industrial Embroidery Hub',
    region: 'North'
  },
  {
    id: 'jaipur',
    city: 'Jaipur',
    state: 'Rajasthan',
    address: 'Sitapura Industrial Area, Tonk Road, Jaipur, Rajasthan 302022',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'Block Print Automation, Direct Reactive & Garment Dye-Sublimation',
    region: 'North'
  },
  {
    id: 'agra',
    city: 'Agra',
    state: 'Uttar Pradesh',
    address: 'Foundry Nagar Industrial Complex, Agra, UP 282006',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'Footwear & Leather Panel UV Direct Printing Systems',
    region: 'North'
  },
  {
    id: 'kanpur',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    address: 'Panki Industrial Area, Site 3, Kanpur, UP 208022',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'Leather Goods, Heavy Textile & Commercial Signage Solutions',
    region: 'North'
  },
  {
    id: 'mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    address: 'MIDC Industrial Area, Andheri East, Mumbai, Maharashtra 400093',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'Commercial Advertising, Luxury Packaging & Port Logistics Hub',
    region: 'West'
  },
  {
    id: 'surat',
    city: 'Surat',
    state: 'Gujarat',
    address: 'Pandesara GIDC Industrial Estate, Surat, Gujarat 394221',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'Textile Capital: Sublimation, High-Speed Reactive & Saree Printing Lines',
    region: 'West'
  },
  {
    id: 'ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    address: 'Naroda Industrial Estate, Ahmedabad, Gujarat 382330',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'Industrial Cotton Processing, Mimaki Fleet & Packaging Labels',
    region: 'West'
  },
  {
    id: 'bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    address: 'Peenya Industrial Area, Phase II, Bengaluru, Karnataka 560058',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'South India Tech Signage, Garment Exporters & UV Precision Flatbeds',
    region: 'South'
  },
  {
    id: 'kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    address: 'Taratala Industrial Area, South Kolkata, West Bengal 700088',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'Eastern India Wholesale Hub, Jute Printing & Regional Sign Supply',
    region: 'East'
  },
  {
    id: 'patna',
    city: 'Patna',
    state: 'Bihar',
    address: 'Patliputra Industrial Estate, Patna, Bihar 800013',
    phone: '+91 99999 36706',
    email: 'veekayenterprises1@gmail.com',
    hubFocus: 'Bihar & Jharkhand Commercial Signage, Flex Printing & Consumables',
    region: 'East'
  }
];
