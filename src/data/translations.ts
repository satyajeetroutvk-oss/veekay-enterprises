export type LanguageCode = 'en' | 'hi' | 'gu' | 'mr' | 'bn' | 'kn' | 'pa';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  regionNote: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', regionNote: 'Global & B2B Standard' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', regionNote: 'Delhi & North India' },
  { code: 'gu', label: 'Gujarati', nativeLabel: 'ગુજરાતી', regionNote: 'Surat & Ahmedabad' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी', regionNote: 'Mumbai & Maharashtra' },
  { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা', regionNote: 'Kolkata & Eastern India' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ', regionNote: 'Bangalore & Karnataka' },
  { code: 'pa', label: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ', regionNote: 'Ludhiana & Punjab' },
];

export interface TranslationDictionary {
  nav: {
    home: string;
    printers: string;
    about: string;
    industries: string;
    blog: string;
    catalogue: string;
    distributor: string;
    eWaste: string;
    quote: string;
  };
  utility: {
    callUs: string;
    emailUs: string;
    hours: string;
    location: string;
    language: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    exploreBtn: string;
    quoteBtn: string;
    statYears: string;
    statYearsLabel: string;
    statProducts: string;
    statProductsLabel: string;
    statRating: string;
    statRatingLabel: string;
    trustTitle: string;
    trustDesc: string;
  };
  categories: {
    title: string;
    subtitle: string;
    viewAll: string;
    viewDetails: string;
    requestQuote: string;
  };
  industries: {
    title: string;
    subtitle: string;
  };
  branches: {
    title: string;
    subtitle: string;
    headOfficeBadge: string;
  };
  reviews: {
    title: string;
    subtitle: string;
    viewOnGoogle: string;
  };
  catalogue: {
    bannerTitle: string;
    bannerDesc: string;
    downloadBtn: string;
  };
  distributorBanner: {
    title: string;
    desc: string;
    cta: string;
  };
  footer: {
    summary: string;
    quickLinks: string;
    contactInfo: string;
    address: string;
    inquiryTitle: string;
    inquiryDesc: string;
    name: string;
    phone: string;
    email: string;
    productInterest: string;
    message: string;
    sendInquiry: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  quoteModal: {
    title: string;
    subtitle: string;
    company: string;
    city: string;
    category: string;
    model: string;
    quantity: string;
    demoDate: string;
    messagePlaceholder: string;
    submitQuote: string;
    whatsappPrompt: string;
    successTitle: string;
    successDesc: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      printers: 'Printers',
      about: 'About Us',
      industries: 'Industries',
      blog: 'Blog & Updates',
      catalogue: 'Catalogue',
      distributor: 'Become a Distributor',
      eWaste: 'E-Waste',
      quote: 'Request a Quote',
    },
    utility: {
      callUs: 'Call: +91 99999 36706',
      emailUs: 'veekayenterprises1@gmail.com',
      hours: 'Mon-Sat: 11:00 AM - 7:00 PM',
      location: 'New Delhi, IN',
      language: 'Language',
    },
    hero: {
      badge: 'Pioneering Industry Standards Since 1990',
      headline: 'High Precision Solutions for Modern Industry',
      subheadline: 'Over 3+ decades of excellence, engineering trust and wholesale distribution from Kirti Nagar, New Delhi to manufacturing hubs across India.',
      exploreBtn: 'Explore Products',
      quoteBtn: 'Request a Quote',
      statYears: '36+',
      statYearsLabel: 'Years of Excellence',
      statProducts: '5000+',
      statProductsLabel: 'Machinery Supplied',
      statRating: '4.9 ★',
      statRatingLabel: 'Google Customer Rating',
      trustTitle: 'Engineering Confidence & Wholesale Support',
      trustDesc: '100% Authentic certified printing machinery, direct manufacturer warranties, bulk consumables logistics and on-site engineering across 12 branch cities.',
    },
    categories: {
      title: 'Industrial Printing Machinery',
      subtitle: 'Engineered for continuous production, precision color reproduction and maximum duty cycles',
      viewAll: 'Explore All Categories',
      viewDetails: 'View Details',
      requestQuote: 'Request Quote',
    },
    industries: {
      title: 'Industries Empowered',
      subtitle: 'Supplying specialized manufacturing workflows across major industrial sectors',
    },
    branches: {
      title: 'Nationwide Distribution & Support Network',
      subtitle: 'Central operations in Kirti Nagar, New Delhi with direct engineering hubs and inventory points across India',
      headOfficeBadge: 'Head Office & Master Showroom',
    },
    reviews: {
      title: '4.9 / 5.0 on Google Business',
      subtitle: 'Trusted by signmakers, textile mills, and packaging manufacturers across India',
      viewOnGoogle: 'View on Google Reviews',
    },
    catalogue: {
      bannerTitle: 'Download the Complete Technical Catalogue',
      bannerDesc: 'Access detailed dimensional drawings, substrate suitability matrices, and wholesale machinery guides.',
      downloadBtn: 'Get Complete Catalogue (PDF)',
    },
    distributorBanner: {
      title: 'Expand With Vee Kay Authorized Distribution',
      desc: 'Join our national partner network. Benefit from direct factory wholesale discount schedules, consignment backup, and dedicated technical training.',
      cta: 'Partner With Us',
    },
    footer: {
      summary: 'Vee Kay Enterprises is an industrial printer supplier and wholesale distributor operating continuously since 1990 from Kirti Nagar, New Delhi.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact & Showroom',
      address: '5/7, Block 5, Kirti Nagar Industrial Area, Kirti Nagar, New Delhi, Delhi 110015',
      inquiryTitle: 'Quick B2B Inquiry',
      inquiryDesc: 'Connect directly with our Kirti Nagar sales and technical desk.',
      name: 'Full Name',
      phone: 'Phone / WhatsApp',
      email: 'Corporate Email',
      productInterest: 'Product or Category of Interest',
      message: 'Briefly describe your production requirement',
      sendInquiry: 'Send Inquiry',
      rights: 'All Rights Reserved. Vee Kay Enterprises.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
    quoteModal: {
      title: 'Request Commercial Quotation & Demo',
      subtitle: 'Get wholesale pricing, shipping lead times, and schedule a live print demonstration',
      company: 'Company / Business Name',
      city: 'City / Manufacturing Location',
      category: 'Printer Category',
      model: 'Machine Model',
      quantity: 'Estimated Quantity / Units',
      demoDate: 'Preferred Live Demo Date & Time',
      messagePlaceholder: 'Specify substrates, volume requirements, or technical questions...',
      submitQuote: 'Submit Quote Request',
      whatsappPrompt: 'Connect with Sales Desk on WhatsApp',
      successTitle: 'Inquiry Submitted Successfully',
      successDesc: 'Our technical sales team will contact you within 2 working hours. You can also chat directly on WhatsApp.',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      printers: 'प्रिंटर्स',
      about: 'हमारे बारे में',
      industries: 'उद्योग',
      blog: 'ब्लॉग व अपडेट्स',
      catalogue: 'कैटलॉग',
      distributor: 'डिस्ट्रिब्यूटर बनें',
      eWaste: 'ई-वेस्ट',
      quote: 'कोटेशन प्राप्त करें',
    },
    utility: {
      callUs: 'कॉल: +91 99999 36706',
      emailUs: 'veekayenterprises1@gmail.com',
      hours: 'सोम-शनि: 11:00 पूर्वाह्न - 7:00 अपराह्न',
      location: 'नई दिल्ली, भारत',
      language: 'भाषा',
    },
    hero: {
      badge: '1990 से उद्योग मानकों का नेतृत्व',
      headline: 'आधुनिक उद्योग के लिए उच्च परिशुद्धता समाधान',
      subheadline: 'कीर्ति नगर, नई दिल्ली से भारत भर के विनिर्माण केंद्रों तक 3+ दशकों का विश्वास, गुणवत्ता और थोक वितरण।',
      exploreBtn: 'उत्पाद देखें',
      quoteBtn: 'कोटेशन प्राप्त करें',
      statYears: '36+',
      statYearsLabel: 'वर्षों का उत्कृष्ट अनुभव',
      statProducts: '5000+',
      statProductsLabel: 'मशीनरी वितरित',
      statRating: '4.9 ★',
      statRatingLabel: 'गूगल ग्राहक रेटिंग',
      trustTitle: 'इंजीनियरिंग भरोसा व थोक सहयोग',
      trustDesc: '100% प्रमाणित प्रिंटिंग मशीनें, निर्माता वारंटी, बड़े पैमाने पर उपभोग्य वस्तुएं और 12 शहरों में ऑन-साइट सहायता।',
    },
    categories: {
      title: 'औद्योगिक प्रिंटिंग मशीनरी',
      subtitle: 'निरंतर उत्पादन, सटीक रंग गुणवत्ता और अधिकतम कार्यक्षमता के लिए निर्मित',
      viewAll: 'सभी श्रेणियां देखें',
      viewDetails: 'विवरण देखें',
      requestQuote: 'कोटेशन लें',
    },
    industries: {
      title: 'सशक्त उद्योग',
      subtitle: 'प्रमुख विनिर्माण क्षेत्रों में विशिष्ट डिजिटल प्रिंटिंग समाधान',
    },
    branches: {
      title: 'राष्ट्रव्यापी वितरण एवं सहायता नेटवर्क',
      subtitle: 'कीर्ति नगर, नई दिल्ली में मुख्य कार्यालय के साथ पूरे भारत में शाखाएं और इन्वेंटरी केंद्र',
      headOfficeBadge: 'मुख्य कार्यालय एवं मास्टर शोरूम',
    },
    reviews: {
      title: 'गूगल बिजनेस पर 4.9 / 5.0 रेटिंग',
      subtitle: 'भारत भर के साइनेज, टेक्सटाइल और पैकेजिंग निर्माताओं का अटूट विश्वास',
      viewOnGoogle: 'गूगल रिव्यू देखें',
    },
    catalogue: {
      bannerTitle: 'पूर्ण तकनीकी कैटलॉग डाउनलोड करें',
      bannerDesc: 'विस्तृत आयाम, सामग्री उपयुक्तता और थोक मशीनरी विवरण प्राप्त करें।',
      downloadBtn: 'कैटलॉग प्राप्त करें (PDF)',
    },
    distributorBanner: {
      title: 'वी के एंटरप्राइजेज के अधिकृत वितरक बनें',
      desc: 'हमारे राष्ट्रीय नेटवर्क से जुड़ें। विशेष थोक छूट, स्टॉक सहायता और तकनीकी प्रशिक्षण का लाभ उठाएं।',
      cta: 'साझेदारी करें',
    },
    footer: {
      summary: 'वी के एंटरप्राइजेज 1990 से कीर्ति नगर, नई दिल्ली से संचालित एक अग्रणी औद्योगिक प्रिंटर आपूर्तिकर्ता और थोक वितरक है।',
      quickLinks: 'त्वरित लिंक',
      contactInfo: 'संपर्क व शोरूम',
      address: '5/7, ब्लॉक 5, कीर्ति नगर इंडस्ट्रियल एरिया, नई दिल्ली, दिल्ली 110015',
      inquiryTitle: 'त्वरित B2B पूछताछ',
      inquiryDesc: 'सीधे हमारे बिक्री एवं तकनीकी प्रतिनिधियों से संपर्क करें।',
      name: 'पूरा नाम',
      phone: 'फ़ोन / व्हाट्सएप',
      email: 'ईमेल',
      productInterest: 'रुचि का उत्पाद या श्रेणी',
      message: 'अपनी उत्पादन आवश्यकता का संक्षेप में विवरण दें',
      sendInquiry: 'पूछताछ भेजें',
      rights: 'सर्वाधिकार सुरक्षित। वी के एंटरप्राइजेज।',
      privacy: 'गोपनीयता नीति',
      terms: 'उपयोग की शर्तें',
    },
    quoteModal: {
      title: 'व्यावसायिक कोटेशन व डेमो का अनुरोध करें',
      subtitle: 'थोक मूल्य और लाइव प्रिंटिंग डेमो का समय निर्धारित करें',
      company: 'कंपनी / व्यवसाय का नाम',
      city: 'शहर / विनिर्माण स्थान',
      category: 'प्रिंटर श्रेणी',
      model: 'मशीन मॉडल',
      quantity: 'अनुमानित मात्रा / इकाइयां',
      demoDate: 'पसंदीदा लाइव डेमो दिनांक व समय',
      messagePlaceholder: 'सामग्री, गति या तकनीकी प्रश्न बताएं...',
      submitQuote: 'कोटेशन अनुरोध भेजें',
      whatsappPrompt: 'व्हाट्सएप पर तुरंत जुड़ें',
      successTitle: 'पूछताछ सफलतापूर्वक प्राप्त हुई',
      successDesc: 'हमारी तकनीकी टीम 2 कार्य घंटों के भीतर आपसे संपर्क करेगी।',
    },
  },
  gu: {
    nav: {
      home: 'હોમ',
      printers: 'પ્રિન્ટર્સ',
      about: 'અમારા વિશે',
      industries: 'ઉદ્યોગો',
      blog: 'બ્લોગ અને અપડેટ્સ',
      catalogue: 'કેટલોગ',
      distributor: 'ડિસ્ટ્રીબ્યુટર બનો',
      eWaste: 'ઈ-વેસ્ટ',
      quote: 'ભાવપત્રક મેળવો',
    },
    utility: {
      callUs: 'કોલ: +91 99999 36706',
      emailUs: 'veekayenterprises1@gmail.com',
      hours: 'સોમ-શનિ: 11:00 AM - 7:00 PM',
      location: 'નવી દિલ્હી, ભારત',
      language: 'ભાષા',
    },
    hero: {
      badge: '1990 થી ઉદ્યોગ ધોરણોમાં અગ્રેસર',
      headline: 'આધુનિક ઉદ્યોગ માટે ઉચ્ચ ચોકસાઇ સોલ્યુશન્સ',
      subheadline: 'કીર્તિ નગર, નવી દિલ્હીથી સુરત, અમદાવાદ અને સમગ્ર ભારતમાં 3+ દાયકાઓથી ઉત્કૃષ્ટ હોલસેલ સપ્લાય.',
      exploreBtn: 'ઉત્પાદનો જુઓ',
      quoteBtn: 'ભાવપત્રક મેળવો',
      statYears: '36+',
      statYearsLabel: 'વર્ષોનો અનુભવ',
      statProducts: '5000+',
      statProductsLabel: 'મશીનરી સપ્લાય',
      statRating: '4.9 ★',
      statRatingLabel: 'ગૂગલ રેટિંગ',
      trustTitle: 'વિશ્વસનીય ટેકનિકલ સપોર્ટ',
      trustDesc: 'સુરત અને અમદાવાદ ટેક્સટાઇલ હબ માટે અધિકૃત મશીનો અને ઝડપી એન્જિનિયરિંગ સપોર્ટ.',
    },
    categories: {
      title: 'ઔદ્યોગિક પ્રિન્ટિંગ મશીનરી',
      subtitle: 'ટેક્સટાઇલ સબલાઈમેશન, યુવી ફ્લેટબેડ અને હાઇ-સ્પીડ રિએક્ટિવ સોલ્યુશન્સ',
      viewAll: 'બધી શ્રેણીઓ જુઓ',
      viewDetails: 'વિગતો જુઓ',
      requestQuote: 'ભાવ પૂછો',
    },
    industries: {
      title: 'સક્ષમ ઉદ્યોગો',
      subtitle: 'સુરત સાડીઓ, કાપડ પ્રોસેસિંગ અને પેકેજિંગ ઉદ્યોગ માટે વિશેષ ટેકનોલોજી',
    },
    branches: {
      title: 'દેશવ્યાપી વિતરણ નેટવર્ક',
      subtitle: 'કીર્તિ નગર હેડ ઓફિસ સાથે સુરત, અમદાવાદ અને 12 મુખ્ય ઔદ્યોગિક શાખાઓ',
      headOfficeBadge: 'મુખ્ય મથક અને શોરૂમ',
    },
    reviews: {
      title: 'ગૂગલ પર 4.9 / 5.0 રેટિંગ',
      subtitle: 'પ્રામાણિક ભાવો, સમયસર ડિલિવરી અને વિશ્વસનીય સર્વિસ',
      viewOnGoogle: 'ગૂગલ રિવ્યુઝ જુઓ',
    },
    catalogue: {
      bannerTitle: 'સંપૂર્ણ ટેકનિકલ કેટલોગ ડાઉનલોડ કરો',
      bannerDesc: 'મશીનરી સ્પષ્ટીકરણો અને હોલસેલ માર્ગદર્શિકા મેળવો.',
      downloadBtn: 'પીડીએફ કેટલોગ મેળવો',
    },
    distributorBanner: {
      title: 'વી કે એન્ટરપ્રાઈઝિસના અધિકૃત ડીલર બનો',
      desc: 'ગુજરાતના ટેક્સટાઇલ અને સાઇનેજ હબમાં અમારી સાથે ભાગીદારી કરો.',
      cta: 'ભાગીદાર બનો',
    },
    footer: {
      summary: 'વી કે એન્ટરપ્રાઈઝિસ 1990 થી કીર્તિ નગર, નવી દિલ્હી સ્થિત ઔદ્યોગિક પ્રિન્ટર સપ્લાયર અને હોલસેલ વિતરક છે.',
      quickLinks: 'ઝડપી લિંક્સ',
      contactInfo: 'સંપર્ક અને શોરૂમ',
      address: '5/7, બ્લોક 5, કીર્તિ નગર ઇન્ડસ્ટ્રીયલ એરિયા, નવી દિલ્હી, દિલ્હી 110015',
      inquiryTitle: 'ઝડપી B2B પૂછપરછ',
      inquiryDesc: 'અમારા ટેકનિકલ સેલ્સ ડેસ્ક સાથે સંપર્ક કરો.',
      name: 'પૂરું નામ',
      phone: 'ફોન / વોટ્સએપ',
      email: 'ઈમેલ',
      productInterest: 'પસંદગીનું ઉત્પાદન',
      message: 'તમારી ઉત્પાદન જરૂરિયાત લખો',
      sendInquiry: 'પૂછપરછ મોકલો',
      rights: 'સર્વાધિકાર સુરક્ષિત. વી કે એન્ટરપ્રાઈઝિસ.',
      privacy: 'ગોપનીયતા નીતિ',
      terms: 'શરતો',
    },
    quoteModal: {
      title: 'કોમર્શિયલ ક્વોટેશન મેળવો',
      subtitle: 'હોલસેલ ભાવો અને ડેમો શેડ્યૂલ કરો',
      company: 'કંપનીનું નામ',
      city: 'શહેર',
      category: 'શ્રેણી',
      model: 'મશીન મોડેલ',
      quantity: 'જથ્થો',
      demoDate: 'ડેમો તારીખ',
      messagePlaceholder: 'કાપડનો પ્રકાર, ગતિ અથવા પ્રશ્નો...',
      submitQuote: 'ક્વોટેશન વિનંતી મોકલો',
      whatsappPrompt: 'વોટ્સએપ પર વાત કરો',
      successTitle: 'વિનંતી સફળતાપૂર્વક મળી ગઈ',
      successDesc: 'અમારી ટીમ ટૂંક સમયમાં તમારો સંપર્ક કરશે.',
    },
  },
  mr: {
    nav: {
      home: 'होम',
      printers: 'प्रिंटर्स',
      about: 'आमच्याबद्दल',
      industries: 'उद्योग',
      blog: 'ब्लॉग व अपडेट्स',
      catalogue: 'कॅटलॉग',
      distributor: 'वितरक बना',
      eWaste: 'ई-कचरा',
      quote: 'कोटेशन मिळवा',
    },
    utility: {
      callUs: 'कॉल: +91 99999 36706',
      emailUs: 'veekayenterprises1@gmail.com',
      hours: 'सोम-शनि: 11:00 AM - 7:00 PM',
      location: 'नवी दिल्ली, भारत',
      language: 'भाषा',
    },
    hero: {
      badge: '1990 पासून उद्योगाचे विश्वासू भागीदार',
      headline: 'आधुनिक उद्योगांसाठी अचूक प्रिंटिंग सोल्यूशन्स',
      subheadline: 'कीर्ती नगर, नवी दिल्ली येथून मुंबई, पुणे आणि देशभरात 3 दशकांहून अधिक काळ औद्योगिक प्रिंटर्सचा पुरवठा.',
      exploreBtn: 'उत्पादने पहा',
      quoteBtn: 'कोटेशन मागा',
      statYears: '36+',
      statYearsLabel: 'उत्कृष्टतेची वर्षे',
      statProducts: '5000+',
      statProductsLabel: 'मशीनरी पुरवठा',
      statRating: '4.9 ★',
      statRatingLabel: 'गुगल रेटिंग',
      trustTitle: 'विश्वासू अभियांत्रिकी आणि घाऊक सहाय्य',
      trustDesc: 'अस्सल प्रमाणित प्रिंटिंग मशिन्स, वॉरंटी आणि मुंबईसह 12 शहरांमध्ये ऑन-साइट सेवा.',
    },
    categories: {
      title: 'औद्योगिक प्रिंटिंग मशिनरी',
      subtitle: 'सतत उत्पादन, अचूक रंग आणि उच्च कार्यक्षमतेसाठी सज्ज',
      viewAll: 'सर्व श्रेणी पहा',
      viewDetails: 'तपशील पहा',
      requestQuote: 'कोटेशन मिळवा',
    },
    industries: {
      title: 'सक्षम उद्योग',
      subtitle: 'जाहिरात, कापड आणि पॅकेजिंग क्षेत्रासाठी आधुनिक उपाय',
    },
    branches: {
      title: 'देशव्यापी वितरण नेटवर्क',
      subtitle: 'कीर्ती नगर मुख्यालय, मुंबई शाखा आणि प्रमुख शहरांमध्ये वितरण केंद्र',
      headOfficeBadge: 'मुख्य कार्यालय व शोरूम',
    },
    reviews: {
      title: 'गुगलवर 4.9 / 5.0 रेटिंग',
      subtitle: 'पारदर्शक दर, वेळेवर डिलिव्हरी आणि तत्पर आफ्टर-सेल्स सपोर्ट',
      viewOnGoogle: 'गुगल रिव्ह्यू पहा',
    },
    catalogue: {
      bannerTitle: 'संपूर्ण तांत्रिक कॅटलॉग डाउनलोड करा',
      bannerDesc: 'मशिनरीचे संपूर्ण तपशील आणि घाऊक मार्गदर्शन मिळवा.',
      downloadBtn: 'कॅटलॉग मिळवा (PDF)',
    },
    distributorBanner: {
      title: 'अधिकृत वितरक व्हा',
      desc: 'महाराष्ट्रात आमच्या भागीदार नेटवर्कमध्ये सामील व्हा आणि आकर्षक दरांचा लाभ घ्या.',
      cta: 'सहभागी व्हा',
    },
    footer: {
      summary: 'व्ही के एंटरप्रायझेस 1990 पासून कीर्ती नगर, नवी दिल्ली येथून औद्योगिक प्रिंटर पुरवठादार व घाऊक वितरक म्हणून कार्यरत आहे.',
      quickLinks: 'महत्त्वाच्या लिंक्स',
      contactInfo: 'संपर्क आणि शोरूम',
      address: '5/7, ब्लॉक 5, कीर्ती नगर इंडस्ट्रियल एरिया, नवी दिल्ली 110015',
      inquiryTitle: 'द्रुत B2B विचारणा',
      inquiryDesc: 'आमच्या तांत्रिक टीमशी त्वरित संपर्क साधा.',
      name: 'पूर्ण नाव',
      phone: 'फोन / व्हॉट्सॲप',
      email: 'ईमेल',
      productInterest: 'उत्पादनात स्वारस्य',
      message: 'आपली गरज स्पष्ट करा',
      sendInquiry: 'चौकशी पाठवा',
      rights: 'सर्व हक्क राखीव. व्ही के एंटरप्रायझेस.',
      privacy: 'गोपनीयता धोरण',
      terms: 'वापराच्या अटी',
    },
    quoteModal: {
      title: 'कोटेशन व प्रात्यक्षिक विनंती',
      subtitle: 'घाऊक दर आणि थेट प्रिंटिंग डेमो निश्चित करा',
      company: 'कंपनीचे नाव',
      city: 'शहर',
      category: 'श्रेणी',
      model: 'मशिन मॉडेल',
      quantity: 'नग',
      demoDate: 'डेमो तारीख',
      messagePlaceholder: 'उत्पादन क्षमता, साहित्य किंवा इतर शंका...',
      submitQuote: 'विनंती सबमिट करा',
      whatsappPrompt: 'व्हॉट्सॲपवर संपर्क करा',
      successTitle: 'विनंती यशस्वीरीत्या मिळाली',
      successDesc: 'आमची टीम लवकरच आपल्याशी संपर्क करेल.',
    },
  },
  bn: {
    nav: {
      home: 'হোম',
      printers: 'প্রিন্টার',
      about: 'আমাদের পরিচয়',
      industries: 'শিল্পসমূহ',
      blog: 'ব্লগ ও খবর',
      catalogue: 'ক্যাটালগ',
      distributor: 'পরিবেশক হন',
      eWaste: 'ই-বর্জ্য',
      quote: 'দরদাম জানুন',
    },
    utility: {
      callUs: 'কল করুন: +91 99999 36706',
      emailUs: 'veekayenterprises1@gmail.com',
      hours: 'সোম-শনি: সকাল ১১টা - সন্ধ্যা ৭টা',
      location: 'নতুন দিল্লি, ভারত',
      language: 'ভাষা',
    },
    hero: {
      badge: '১৯৯০ সাল থেকে শিল্পে নির্ভরযোগ্য নাম',
      headline: 'আধুনিক শিল্পের জন্য উচ্চ নির্ভুলতার সমাধান',
      subheadline: 'কীর্তি নগর, নতুন দিল্লি থেকে কলকাতা ও সমগ্র ভারতে তিন দশকেরও বেশি সময়ের বিশ্বস্ত পাইকারি সরবরাহ।',
      exploreBtn: 'মেশিন দেখুন',
      quoteBtn: 'দরদাম জানুন',
      statYears: '৩৬+',
      statYearsLabel: 'বছরের অভিজ্ঞতা',
      statProducts: '৫০০০+',
      statProductsLabel: 'সরবরাহকৃত মেশিন',
      statRating: '৪.৯ ★',
      statRatingLabel: 'গুগল রেটিং',
      trustTitle: 'ইঞ্জিনিয়ারিং বিশ্বাস ও সেবা',
      trustDesc: '১০০% আসল সার্টিফাইড প্রিন্টার, জেনুইন ওয়্যারেন্টি এবং টেকনিক্যাল সহায়তা।',
    },
    categories: {
      title: 'শিল্প প্রিন্টিং যন্ত্রপাতি',
      subtitle: 'টেক্সটাইল, ইউভি সাইনেজ ও প্যাকেজিংয়ের উন্নত ডিজিটাল প্রিন্টার',
      viewAll: 'সকল বিভাগ দেখুন',
      viewDetails: 'বিস্তারিত দেখুন',
      requestQuote: 'দরদাম নিন',
    },
    industries: {
      title: 'সেবা প্রদানকারী শিল্পসমূহ',
      subtitle: 'বিজ্ঞাপন সাইনেজ, পোশাক ও প্যাকেজিং শিল্পের সম্পূর্ণ সমাধান',
    },
    branches: {
      title: 'দেশব্যাপী বিতরণ নেটওয়ার্ক',
      subtitle: 'কীর্তি নগর হেড অফিস এবং কলকাতা সহ ১২টি শিল্প শহরে আমাদের উপস্থিতি',
      headOfficeBadge: 'প্রধান কার্যালয় ও শোরুম',
    },
    reviews: {
      title: 'গুগল বিজনেসে ৪.৯ / ৫.০ রেটিং',
      subtitle: 'সঠিক মূল্য নির্ধারণ, দ্রুত ডেলিভারি ও দুর্দান্ত আফটার সেলস সার্ভিস',
      viewOnGoogle: 'গুগল রিভিউ দেখুন',
    },
    catalogue: {
      bannerTitle: 'সম্পূর্ণ টেকনিক্যাল ক্যাটালগ ডাউনলোড করুন',
      bannerDesc: 'মেশিনের মাপ ও পাইকারি তথ্য সহজে সংগ্রহ করুন।',
      downloadBtn: 'ক্যাটালগ নিন (PDF)',
    },
    distributorBanner: {
      title: 'অনুমোদিত পরিবেশক হতে আবেদন করুন',
      desc: 'পূর্ব ভারত ও অন্যান্য অঞ্চলে আমাদের সাথে ডিলারশিপ শুরু করুন।',
      cta: 'যোগাযোগ করুন',
    },
    footer: {
      summary: 'ভি কে এন্টারপ্রাইজেস ১৯৯০ সাল থেকে কীর্তি নগর, নতুন দিল্লি ভিত্তিক একটি বিশ্বস্ত শিল্প প্রিন্টার সরবরাহকারী।',
      quickLinks: 'গুরুত্বপূর্ণ লিঙ্ক',
      contactInfo: 'যোগাযোগ ও শোরুম',
      address: '৫/৭, ব্লক ৫, কীর্তি নগর ইন্ডাস্ট্রিয়াল এরিয়া, নতুন দিল্লি ১১০০১৫',
      inquiryTitle: 'দ্রুত B2B অনুসন্ধান',
      inquiryDesc: 'আমাদের সেলস টিমের সাথে সরাসরি যোগাযোগ করুন।',
      name: 'নাম',
      phone: 'ফোন / হোয়াটসঅ্যাপ',
      email: 'ইমেল',
      productInterest: 'আগ্রহী পণ্য',
      message: 'আপনার প্রিন্টিং প্রয়োজনের বিবরণ দিন',
      sendInquiry: 'বার্তা পাঠান',
      rights: 'সর্বস্বত্ব সংরক্ষিত। ভি কে এন্টারপ্রাইজেস।',
      privacy: 'গোপনীয়তা নীতি',
      terms: 'ব্যবহারের শর্তাবলী',
    },
    quoteModal: {
      title: 'বাণিজ্যিক কোটেশন ও ডেমো অনুরোধ',
      subtitle: 'পাইকারি মূল্য ও লাইভ ডেমোর সময় ঠিক করুন',
      company: 'কোম্পানির নাম',
      city: 'শহর',
      category: 'বিভাগ',
      model: 'মডেল',
      quantity: 'পরিমাণ',
      demoDate: 'ডেমোর তারিখ',
      messagePlaceholder: 'আপনার কাজের ধরন বা প্রশ্ন লিখুন...',
      submitQuote: 'অনুরোধ পাঠান',
      whatsappPrompt: 'হোয়াটসঅ্যাপে চ্যাট করুন',
      successTitle: 'অনুরোধ গৃহীত হয়েছে',
      successDesc: 'আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।',
    },
  },
  kn: {
    nav: {
      home: 'ಮುಖಪುಟ',
      printers: 'ಪ್ರಿಂಟರ್‌ಗಳು',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      industries: 'ಉದ್ಯಮಗಳು',
      blog: 'ಬ್ಲಾಗ್ ಮತ್ತು ಅಪ್ಡೇಟ್ಸ್',
      catalogue: 'ಕ್ಯಾಟಲಾಗ್',
      distributor: 'ವಿತರಕರಾಗಿ',
      eWaste: 'ಇ-ತ್ಯಾಜ್ಯ',
      quote: 'ದರಪಟ್ಟಿ ಪಡೆಯಿರಿ',
    },
    utility: {
      callUs: 'ಕರೆ ಮಾಡಿ: +91 99999 36706',
      emailUs: 'veekayenterprises1@gmail.com',
      hours: 'ಸೋಮ-ಶನಿ: 11:00 AM - 7:00 PM',
      location: 'ಹೊಸ ದೆಹಲಿ, ಭಾರತ',
      language: 'ಭಾಷೆ',
    },
    hero: {
      badge: '1990 ರಿಂದ ಕೈಗಾರಿಕಾ ಗುಣಮಟ್ಟದಲ್ಲಿ ಪ್ರಮುಖರು',
      headline: 'ಆಧುನಿಕ ಉದ್ಯಮಕ್ಕೆ ನಿಖರವಾದ ಪ್ರಿಂಟಿಂಗ್ ಪರಿಹಾರಗಳು',
      subheadline: 'ಕೀರ್ತಿ ನಗರ, ಹೊಸ ದೆಹಲಿಯಿಂದ ಬೆಂಗಳೂರು ಮತ್ತು ಭಾರತದಾದ್ಯಂತ 3+ ದಶಕಗಳ ವಿಶ್ವಾಸಾರ್ಹ ಸಗಟು ಪೂರೈಕೆ.',
      exploreBtn: 'ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ',
      quoteBtn: 'ದರಪಟ್ಟಿ ಕೇಳಿ',
      statYears: '36+',
      statYearsLabel: 'ವರ್ಷಗಳ ಶ್ರೇಷ್ಠತೆ',
      statProducts: '5000+',
      statProductsLabel: 'ಯಂತ್ರೋಪಕರಣ ಪೂರೈಕೆ',
      statRating: '4.9 ★',
      statRatingLabel: 'ಗೂಗಲ್ ರೇಟಿಂಗ್',
      trustTitle: 'ಇಂಜಿನಿಯರಿಂಗ್ ವಿಶ್ವಾಸ ಮತ್ತು ಬೆಂಬಲ',
      trustDesc: 'ಅಧಿಕೃತ ಯಂತ್ರಗಳು, ವಾರಂಟಿ ಮತ್ತು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸ್ಥಳೀಯ ಎಂಜಿನಿಯರಿಂಗ್ ಸೇವೆ.',
    },
    categories: {
      title: 'ಕೈಗಾರಿಕಾ ಪ್ರಿಂಟಿಂಗ್ ಯಂತ್ರೋಪಕರಣಗಳು',
      subtitle: 'ಜವಳಿ, ಯುವಿ ಸೈನೇಜ್ ಮತ್ತು ಪ್ಯಾಕೇಜಿಂಗ್‌ಗಾಗಿ ಹೈ-ಸ್ಪೀಡ್ ಪ್ರಿಂಟರ್‌ಗಳು',
      viewAll: 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು',
      viewDetails: 'ವಿವರ ನೋಡಿ',
      requestQuote: 'ದರಪಟ್ಟಿ ಕೇಳಿ',
    },
    industries: {
      title: 'ಬೆಂಬಲಿತ ಕೈಗಾರಿಕೆಗಳು',
      subtitle: 'ಜವಳಿ ರಫ್ತು, ಜಾಹೀರಾತು ಮತ್ತು ಪ್ಯಾಕೇಜಿಂಗ್ ಉದ್ಯಮಗಳ ಸಮಗ್ರ ಪರಿಹಾರ',
    },
    branches: {
      title: 'ರಾಷ್ಟ್ರವ್ಯಾಪಿ ವಿತರಣಾ ಜಾಲ',
      subtitle: 'ಕೀರ್ತಿ ನಗರ ಕೇಂದ್ರ ಕಚೇರಿ ಮತ್ತು ಬೆಂಗಳೂರು ಸೇರಿದಂತೆ 12 ಪ್ರಮುಖ ನಗರಗಳಲ್ಲಿ ಶಾಖೆಗಳು',
      headOfficeBadge: 'ಮುಖ್ಯ ಕಚೇರಿ ಮತ್ತು ಶೋರೂಂ',
    },
    reviews: {
      title: 'ಗೂಗಲ್‌ನಲ್ಲಿ 4.9 / 5.0 ರೇಟಿಂಗ್',
      subtitle: 'ಪಾರದರ್ಶಕ ದರಗಳು, ಸಮಯಕ್ಕೆ ಸರಿಯಾದ ವಿತರಣೆ ಮತ್ತು ಅತ್ಯುತ್ತಮ ಸೇವೆ',
      viewOnGoogle: 'ಗೂಗಲ್ ವಿಮರ್ಶೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    },
    catalogue: {
      bannerTitle: 'ಸಂಪೂರ್ಣ ತಾಂತ್ರಿಕ ಕ್ಯಾಟಲಾಗ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
      bannerDesc: 'ಯಂತ್ರದ ವಿಶೇಷತೆಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶಿಯನ್ನು ಸುಲಭವಾಗಿ ಪಡೆಯಿರಿ.',
      downloadBtn: 'ಕ್ಯಾಟಲಾಗ್ ಪಡೆಯಿರಿ (PDF)',
    },
    distributorBanner: {
      title: 'ಅಧಿಕೃತ ವಿತರಕರಾಗಿ ಸೇರಿ',
      desc: 'ಕರ್ನಾಟಕ ಮತ್ತು ದಕ್ಷಿಣ ಭಾರತದಲ್ಲಿ ನಮ್ಮ ಪಾಲುದಾರರಾಗಿ ಉತ್ತಮ ಲಾಭ ಪಡೆಯಿರಿ.',
      cta: 'ನಮ್ಮೊಂದಿಗೆ ಕೈಜೋಡಿಸಿ',
    },
    footer: {
      summary: 'ವಿ ಕೆ ಎಂಟರ್‌ಪ್ರೈಸಸ್ 1990 ರಿಂದ ಕೀರ್ತಿ ನಗರ, ಹೊಸ ದೆಹಲಿಯಿಂದ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುವ ಕೈಗಾರಿಕಾ ಪ್ರಿಂಟರ್ ಸಗಟು ವಿತರಕರು.',
      quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
      contactInfo: 'ಸಂಪರ್ಕ ಮತ್ತು ಶೋರೂಂ',
      address: '5/7, ಬ್ಲಾಕ್ 5, ಕೀರ್ತಿ ನಗರ ಇಂಡಸ್ಟ್ರಿಯಲ್ ಏರಿಯಾ, ಹೊಸ ದೆಹಲಿ 110015',
      inquiryTitle: 'ತ್ವರಿತ B2B ವಿಚಾರಣೆ',
      inquiryDesc: 'ನಮ್ಮ ತಾಂತ್ರಿಕ ಮಾರಾಟ ತಂಡವನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.',
      name: 'ಪೂರ್ಣ ಹೆಸರು',
      phone: 'ಫೋನ್ / ವಾಟ್ಸಾಪ್',
      email: 'ಇಮೇಲ್',
      productInterest: 'ಆಸಕ್ತಿಯ ಉತ್ಪನ್ನ',
      message: 'ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ಸಂಕ್ಷಿಪ್ತವಾಗಿ ತಿಳಿಸಿ',
      sendInquiry: 'ವಿಚಾರಣೆ ಕಳುಹಿಸಿ',
      rights: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ವಿ ಕೆ ಎಂಟರ್‌ಪ್ರೈಸಸ್.',
      privacy: 'ಗೌಪ್ಯತೆ ನೀತಿ',
      terms: 'ಬಳಕೆಯ ನಿಯಮಗಳು',
    },
    quoteModal: {
      title: 'ದರಪಟ್ಟಿ ಮತ್ತು ಡೆಮೊ ವಿನಂತಿ',
      subtitle: 'ಸಗಟು ಬೆಲೆ ಮತ್ತು ಲೈವ್ ಪ್ರಿಂಟಿಂಗ್ ಡೆಮೊ ದಿನಾಂಕ ನಿಗದಿಪಡಿಸಿ',
      company: 'ಕಂಪನಿಯ ಹೆಸರು',
      city: 'ನಗರ',
      category: 'ವರ್ಗ',
      model: 'ಯಂತ್ರದ ಮಾದರಿ',
      quantity: 'ಪ್ರಮಾಣ',
      demoDate: 'ಡೆಮೊ ದಿನಾಂಕ',
      messagePlaceholder: 'ನಿಮ್ಮ ತಾಂತ್ರಿಕ ಪ್ರಶ್ನೆಗಳನ್ನು ಬರೆಯಿರಿ...',
      submitQuote: 'ವಿನಂತಿ ಕಳುಹಿಸಿ',
      whatsappPrompt: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ',
      successTitle: 'ವಿನಂತಿಯನ್ನು ಸ್ವೀಕರಿಸಲಾಗಿದೆ',
      successDesc: 'ನಮ್ಮ ಎಂಜಿನಿಯರ್‌ಗಳು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲಿದ್ದಾರೆ.',
    },
  },
  pa: {
    nav: {
      home: 'ਹੋਮ',
      printers: 'ਪ੍ਰਿੰਟਰਜ਼',
      about: 'ਸਾਡੇ ਬਾਰੇ',
      industries: 'ਉਦਯੋਗ',
      blog: 'ਬਲੌਗ ਤੇ ਅੱਪਡੇਟ',
      catalogue: 'ਕੈਟਾਲਾਗ',
      distributor: 'ਡਿਸਟ੍ਰੀਬਿਊਟਰ ਬਣੋ',
      eWaste: 'ਈ-ਕੂੜਾ ਪ੍ਰਬੰਧਨ',
      quote: 'ਕੋਟੇਸ਼ਨ ਲਵੋ',
    },
    utility: {
      callUs: 'ਕਾਲ ਕਰੋ: +91 99999 36706',
      emailUs: 'veekayenterprises1@gmail.com',
      hours: 'ਸੋਮ-ਸ਼ਨੀ: 11:00 ਸਵੇਰੇ - 7:00 ਸ਼ਾਮ',
      location: 'ਨਵੀਂ ਦਿੱਲੀ, ਭਾਰਤ',
      language: 'ਭਾਸ਼ਾ',
    },
    hero: {
      badge: '1990 ਤੋਂ ਉਦਯੋਗਿਕ ਮਿਆਰਾਂ ਦੀ ਅਗਵਾਈ',
      headline: 'ਆਧੁਨਿਕ ਉਦਯੋਗ ਲਈ ਉੱਚ ਸ਼ੁੱਧਤਾ ਪ੍ਰਿੰਟਿੰਗ ਹੱਲ',
      subheadline: 'ਕੀਰਤੀ ਨਗਰ, ਨਵੀਂ ਦਿੱਲੀ ਤੋਂ ਲੁਧਿਆਣਾ, ਅੰਮ੍ਰਿਤਸਰ ਅਤੇ ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ 3+ ਦਹਾਕਿਆਂ ਦਾ ਭਰੋਸੇਯੋਗ ਹੋਲਸੇਲ ਸਪਲਾਈ।',
      exploreBtn: 'ਮਸ਼ੀਨਰੀ ਦੇਖੋ',
      quoteBtn: 'ਕੋਟੇਸ਼ਨ ਲਵੋ',
      statYears: '36+',
      statYearsLabel: 'ਸਾਲਾਂ ਦਾ ਤਜਰਬਾ',
      statProducts: '5000+',
      statProductsLabel: 'ਸਪਲਾਈ ਕੀਤੀਆਂ ਮਸ਼ੀਨਾਂ',
      statRating: '4.9 ★',
      statRatingLabel: 'ਗੂਗਲ ਰੇਟਿੰਗ',
      trustTitle: 'ਇੰਜੀਨੀਅਰਿੰਗ ਭਰੋਸਾ ਅਤੇ ਸੇਵਾ',
      trustDesc: 'ਨਕਲੀ ਮੁਕਤ ਅਸਲੀ ਸਰਟੀਫਾਈਡ ਪ੍ਰਿੰਟਰ, ਲੁਧਿਆਣਾ ਨਿਟਵੀਅਰ ਹੱਬ ਲਈ ਵਿਸ਼ੇਸ਼ ਟੈਕਨੀਸ਼ੀਅਨ ਸਪੋਰਟ।',
    },
    categories: {
      title: 'ਉਦਯੋਗਿਕ ਪ੍ਰਿੰਟਿੰਗ ਮਸ਼ੀਨਰੀ',
      subtitle: 'ਉੱਨੀ ਸਵੈਟਰ, ਸ਼ਾਲ, ਸਬਲੀਮੇਸ਼ਨ, ਕੰਪਿਊਟਰਾਈਜ਼ਡ ਕਢਾਈ ਅਤੇ ਯੂਵੀ ਪ੍ਰਿੰਟਰ',
      viewAll: 'ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ ਦੇਖੋ',
      viewDetails: 'ਵੇਰਵਾ ਦੇਖੋ',
      requestQuote: 'ਰੇਟ ਪੁੱਛੋ',
    },
    industries: {
      title: 'ਸਮਰੱਥ ਉਦਯੋਗ',
      subtitle: 'ਕੱਪੜਾ ਨਿਰਮਾਣ, ਹੋਜ਼ਰੀ, ਸਾਈਨੇਜ ਅਤੇ ਪੈਕੇਜਿੰਗ ਲਈ ਸਭ ਤੋਂ ਭਰੋਸੇਯੋਗ ਮਸ਼ੀਨਾਂ',
    },
    branches: {
      title: 'ਦੇਸ਼ ਵਿਆਪੀ ਨੈੱਟਵਰਕ',
      subtitle: 'ਕੀਰਤੀ ਨਗਰ ਹੈੱਡ ਆਫਿਸ, ਲੁਧਿਆਣਾ ਬ੍ਰਾਂਚ ਅਤੇ ਦੇਸ਼ ਭਰ ਵਿੱਚ ਸਪੇਅਰ ਪਾਰਟਸ ਸੈਂਟਰ',
      headOfficeBadge: 'ਮੁੱਖ ਦਫ਼ਤਰ ਅਤੇ ਮਾਸਟਰ ਸ਼ੋਅਰੂਮ',
    },
    reviews: {
      title: 'ਗੂਗਲ ਤੇ 4.9 / 5.0 ਰੇਟਿੰਗ',
      subtitle: 'ਇਮਾਨਦਾਰ ਰੇਟ, ਸਮੇਂ ਸਿਰ ਡਿਸਪੈਚ ਅਤੇ ਭਰੋਸੇਮੰਦ ਆਫਟਰ-ਸੇਲਜ਼ ਇੰਜੀਨੀਅਰਿੰਗ',
      viewOnGoogle: 'ਗੂਗਲ ਰਿਵਿਊ ਦੇਖੋ',
    },
    catalogue: {
      bannerTitle: 'ਪੂਰਾ ਤਕਨੀਕੀ ਕੈਟਾਲਾਗ ਡਾਊਨਲੋਡ ਕਰੋ',
      bannerDesc: 'ਵਿਸਤ੍ਰਿਤ ਮਾਪ, ਸਮੱਗਰੀ ਅਤੇ ਹੋਲਸੇਲ ਗਾਈਡ ਪ੍ਰਾਪਤ ਕਰੋ।',
      downloadBtn: 'ਕੈਟਾਲਾਗ ਪ੍ਰਾਪਤ ਕਰੋ (PDF)',
    },
    distributorBanner: {
      title: 'ਵੀ ਕੇ ਐਂਟਰਪ੍ਰਾਈਜ਼ਿਜ਼ ਦੇ ਅਧਿਕਾਰਤ ਡੀਲਰ ਬਣੋ',
      desc: 'ਪੰਜਾਬ ਅਤੇ ਉੱਤਰੀ ਭਾਰਤ ਵਿੱਚ ਸਾਡੇ ਨੈੱਟਵਰਕ ਨਾਲ ਜੁੜੋ ਅਤੇ ਥੋਕ ਲਾਭ ਪ੍ਰਾਪਤ ਕਰੋ।',
      cta: 'ਸਾਡੇ ਨਾਲ ਜੁੜੋ',
    },
    footer: {
      summary: 'ਵੀ ਕੇ ਐਂਟਰਪ੍ਰਾਈਜ਼ਿਜ਼ 1990 ਤੋਂ ਕੀਰਤੀ ਨਗਰ, ਨਵੀਂ ਦਿੱਲੀ ਤੋਂ ਚੱਲ ਰਿਹਾ ਇੱਕ ਮੋਹਰੀ ਉਦਯੋਗਿਕ ਪ੍ਰਿੰਟਰ ਸਪਲਾਇਰ ਅਤੇ ਥੋਕ ਵਿਤਰਕ ਹੈ।',
      quickLinks: 'ਜ਼ਰੂਰੀ ਲਿੰਕ',
      contactInfo: 'ਸੰਪਰਕ ਅਤੇ ਸ਼ੋਅਰੂਮ',
      address: '5/7, ਬਲਾਕ 5, ਕੀਰਤੀ ਨਗਰ ਇੰਡਸਟਰੀਅਲ ਏਰੀਆ, ਨਵੀਂ ਦਿੱਲੀ 110015',
      inquiryTitle: 'ਤੇਜ਼ B2B ਪੁੱਛਗਿੱਛ',
      inquiryDesc: 'ਸਾਡੇ ਵਿਕਰੀ ਅਤੇ ਤਕਨੀਕੀ ਮਾਹਰਾਂ ਨਾਲ ਸਿੱਧਾ ਸੰਪਰਕ ਕਰੋ।',
      name: 'ਪੂਰਾ ਨਾਮ',
      phone: 'ਫੋਨ / ਵਟਸਐਪ',
      email: 'ਈਮੇਲ',
      productInterest: 'ਦਿਲਚਸਪੀ ਦਾ ਉਤਪਾਦ',
      message: 'ਆਪਣੀ ਉਤਪਾਦਨ ਲੋੜ ਬਾਰੇ ਦੱਸੋ',
      sendInquiry: 'ਪੁੱਛਗਿੱਛ ਭੇਜੋ',
      rights: 'ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ। ਵੀ ਕੇ ਐਂਟਰਪ੍ਰਾਈਜ਼ਿਜ਼।',
      privacy: 'ਪ੍ਰਾਈਵੇਸੀ ਪਾਲਿਸੀ',
      terms: 'ਵਰਤੋਂ ਦੀਆਂ ਸ਼ਰਤਾਂ',
    },
    quoteModal: {
      title: 'ਵਪਾਰਕ ਕੋਟੇਸ਼ਨ ਅਤੇ ਡੈਮੋ ਦੀ ਬੇਨਤੀ ਕਰੋ',
      subtitle: 'ਥੋਕ ਕੀਮਤਾਂ ਅਤੇ ਲਾਈਵ ਪ੍ਰਿੰਟਿੰਗ ਡੈਮੋ ਦਾ ਸਮਾਂ ਨਿਸ਼ਚਿਤ ਕਰੋ',
      company: 'ਕੰਪਨੀ / ਕਾਰੋਬਾਰ ਦਾ ਨਾਮ',
      city: 'ਸ਼ਹਿਰ',
      category: 'ਸ਼੍ਰੇਣੀ',
      model: 'ਮਸ਼ੀਨ ਮਾਡਲ',
      quantity: 'ਮਾਤਰਾ',
      demoDate: 'ਡੈਮੋ ਦੀ ਤਾਰੀਖ',
      messagePlaceholder: 'ਕੱਪੜੇ ਦੀ ਕਿਸਮ ਜਾਂ ਤਕਨੀਕੀ ਸਵਾਲ...',
      submitQuote: 'ਬੇਨਤੀ ਭੇਜੋ',
      whatsappPrompt: 'ਵਟਸਐਪ ਤੇ ਗੱਲਬਾਤ ਕਰੋ',
      successTitle: 'ਬੇਨਤੀ ਸਫਲਤਾਪੂਰਵਕ ਮਿਲ ਗਈ',
      successDesc: 'ਸਾਡੀ ਤਕਨੀਕੀ ਟੀਮ ਜਲਦੀ ਹੀ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੇਗੀ।',
    },
  },
};
