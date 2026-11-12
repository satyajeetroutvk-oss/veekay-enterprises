import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Maximize2,
  Cpu,
  Gauge,
  Sparkles,
  Search,
  ExternalLink,
  ShieldCheck,
  FolderSync,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Printer,
  SlidersHorizontal,
  RefreshCw,
  PhoneCall,
  MessageCircle,
  Download
} from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PrinterVisual } from '../components/PrinterVisual';

// ============================================================================
// 1. CONFIGURATION: GOOGLE DRIVE INTEGRATION (EDITABLE AT TOP)
// ============================================================================

/**
 * Paste your public Google Drive Folder Link or Folder ID below.
 * Example URL: "https://drive.google.com/drive/folders/1A2B3C4D5E6F7G8H9I0J"
 * Example ID:  "1A2B3C4D5E6F7G8H9I0J"
 * NOTE: Ensure the folder is shared as "Anyone with the link can view".
 */
export const GOOGLE_DRIVE_FOLDER_ID = '[PASTE FOLDER LINK / FOLDER ID]';

/**
 * Paste your Google Cloud / Google Drive API v3 key below.
 * Obtain one from Google Cloud Console > APIs & Services > Credentials > Create API Key.
 */
export const GOOGLE_DRIVE_API_KEY = '[YOUR_API_KEY]';

// ============================================================================
// 2. PRODUCT DATA ARRAY (EDITABLE AT TOP)
// ============================================================================

export interface Product {
  modelNumber: string;        // e.g. "SP-1600"
  name: string;               // Full display name
  printWidth: string;         // e.g. "1600 mm (63 in)"
  printHead: string;          // e.g. "Epson i3200-A1 (2 to 4 Heads)"
  speed: string;              // e.g. "Up to 110 m²/hr"
  shortDescription: string;   // Summary description
  driveFileName: string;      // Image file name in Google Drive, e.g. "SP-1600.jpg"
  
  // Optional extra catalog metadata
  resolution?: string;
  inkType?: string;
  series?: 'SP-Series' | 'Fleet-Industrial';
  badge?: string;
  fallbackImage?: string;     // Instant preview before Google Drive credentials are added
}

/**
 * Sublimation Printers Catalog
 * Features sample models [SP-1600, SP-1800, SP-3200, SP-5000] alongside
 * Vee Kay Enterprises industrial fleet machines.
 */
export const products: Product[] = [
  {
    modelNumber: 'VKE-2008A TX',
    name: 'VKE-2008A TX',
    printWidth: '1900 mm (1.9m Roll-to-Roll)',
    printHead: '8x Epson i3200-A1 High-Definition Printheads',
    speed: '280 m²/hr Peak Production',
    shortDescription: 'Vee Kay flagship high-productivity roll sublimation workhorse engineered for fashion textiles, sports jerseys, and premium polyester transfers.',
    driveFileName: 'VKE-2008A TX.png',
    resolution: 'Up to 3200 DPI',
    inkType: 'Vee Kay High-Optical Density Sublimation Dyes',
    series: 'Fleet-Industrial',
    badge: 'Flagship 8-Head',
    fallbackImage: '/assets/products/VKE-2008A TX.webp?v=7',
  },
  {
    modelNumber: 'VKE-3208 TX',
    name: 'VKE-3208 TX',
    printWidth: '3200 mm (3.2m Width)',
    printHead: '8x Industrial Micro-Piezo Printheads',
    speed: '320 m²/hr Mass Output',
    shortDescription: 'Extra-wide 3.2m roll dye-sublimation printer built for home textiles, drapes, bedding sets, and illuminated trade show banners.',
    driveFileName: 'VKE-3208 TX.png',
    resolution: 'Up to 2400 DPI',
    inkType: 'High-Purity Sublimation Formulations',
    series: 'Fleet-Industrial',
    badge: '3.2m Jumbo Roll',
    fallbackImage: '/assets/products/VKE-3208 TX.webp?v=3',
  },
  {
    modelNumber: 'V1804E',
    name: 'V1804E',
    printWidth: '1800 mm (1.8m Roll)',
    printHead: '4x Industrial Piezoelectric Heads',
    speed: '140 m²/hr Stable Production',
    shortDescription: 'Cost-effective 4-head industrial dye sublimation printer for growing apparel brands and boutique textile converters.',
    driveFileName: 'V1804E.png',
    resolution: 'Up to 2400 DPI',
    inkType: 'Fast-Dry Dye Sublimation Inks',
    series: 'Fleet-Industrial',
    badge: 'Economical 4-Head',
    fallbackImage: '/assets/products/V1804E.webp?v=4',
  },
  {
    modelNumber: 'V1808E',
    name: 'V1808E',
    printWidth: '1800 mm (1.8m Roll)',
    printHead: '8x Staggered Industrial Micro-Piezo Heads',
    speed: '260 m²/hr Continuous Output',
    shortDescription: 'High-velocity 8-head sublimation printer for garment export houses in Surat, Panipat, Ludhiana, and Tirupur.',
    driveFileName: 'V1808E.png',
    resolution: 'Up to 2400 DPI',
    inkType: 'Certified Sublimation Inks',
    series: 'Fleet-Industrial',
    badge: '8-Head Velocity',
    fallbackImage: '/assets/products/V1808E.webp?v=5',
  },
  {
    modelNumber: 'Mimaki TS100-160',
    name: 'Mimaki TS100-160',
    printWidth: '1610 mm (63.4 inches)',
    printHead: '2x Piezo Japanese Precision Variable-Dot Heads',
    speed: '70 m²/hr Japanese Quality Standard',
    shortDescription: 'Authentic Mimaki entry dye-sublimation printer with NCU (Nozzle Check Unit) and NRS (Nozzle Recovery System) continuous reliability.',
    driveFileName: 'mimaki ts100-160.png',
    resolution: 'Up to 1200 DPI',
    inkType: 'Original Mimaki Sb610 Sublimation Inks',
    series: 'Fleet-Industrial',
    badge: 'Authentic Japanese',
    fallbackImage: '/assets/products/mimaki ts100-160.webp',
  },
  {
    modelNumber: 'SP-1600',
    name: 'SP-1600',
    printWidth: '1600 mm (63 inches / 1.6m)',
    printHead: 'Epson i3200-A1 Industrial Micro-Piezo (2 to 4 Heads)',
    speed: 'Up to 110 m²/hr (High-Speed Production Mode)',
    shortDescription: 'Precision 1.6m roll-to-roll dye-sublimation printer engineered for sportswear, polyester activewear, and custom sublimation flags.',
    driveFileName: 'SP-1600.jpg',
    resolution: 'Up to 3200 DPI Variable Droplet',
    inkType: 'Certified High-Density Water-Based Sublimation Dye',
    series: 'SP-Series',
    badge: 'Popular Entry Workhorse',
    fallbackImage: '/assets/products/VKE-2008A TX.webp',
  },
  {
    modelNumber: 'SP-1800',
    name: 'SP-1800',
    printWidth: '1800 mm (71 inches / 1.8m)',
    printHead: 'Epson i3200-A1 / Kyocera KJ4B (4 to 8 Heads)',
    speed: 'Up to 240 m²/hr (Continuous 24/7 Run)',
    shortDescription: 'Heavy-chassis 1.8m sublimation printer optimized for garment exporters, high-yield apparel production, and fast-dry transfer paper.',
    driveFileName: 'SP-1800.jpg',
    resolution: 'Up to 3200 DPI Micro-Precision',
    inkType: 'Ultra-Fine High-Yield Dye Sublimation Inks',
    series: 'SP-Series',
    badge: 'Flagship Export Grade',
    fallbackImage: '/assets/products/V1808E.webp?v=5',
  },
  {
    modelNumber: 'SP-3200',
    name: 'SP-3200',
    printWidth: '3200 mm (126 inches / 3.2m)',
    printHead: 'Staggered Dual-Row Industrial Heads (8 Heads)',
    speed: 'Up to 360 m²/hr (Heavy Roll-to-Roll)',
    shortDescription: 'Extra-wide 3.2-meter sublimation printing system engineered for bedding, curtains, upholstery fabrics, soft signage, and architectural textiles.',
    driveFileName: 'SP-3200.jpg',
    resolution: 'Up to 2400 DPI High-Density',
    inkType: 'Industrial Sublimation Disperse Formulations',
    series: 'SP-Series',
    badge: 'Wide Format 3.2m',
    fallbackImage: '/assets/products/VKE-3208 TX.webp?v=3',
  },
  {
    modelNumber: 'SP-5000',
    name: 'SP-5000',
    printWidth: '3300 mm – 5000 mm (Super-Wide Production)',
    printHead: 'Multi-Array High-Frequency Industrial Heads (16 Heads)',
    speed: 'Up to 600 m²/hr (Round-the-clock Mill Duty)',
    shortDescription: 'Heavyweight industrial sublimation press engineered for major textile processing mills, non-stop mass apparel, and seamless architectural backdrops.',
    driveFileName: 'SP-5000.jpg',
    resolution: 'Up to 2400 DPI Production Grade',
    inkType: 'Automated Bulk Sublimation Ink Delivery System',
    series: 'SP-Series',
    badge: 'Mass Production Press',
    fallbackImage: '/assets/products/VKE-3208 TX.webp?v=3',
  },
];

// Helper to extract Google Drive Folder ID from a raw ID or full URL
export function extractFolderId(input: string): string {
  if (!input) return '';
  const trimmed = input.trim();
  const folderMatch = trimmed.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch && folderMatch[1]) {
    return folderMatch[1];
  }
  const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1]) {
    return idMatch[1];
  }
  if (!trimmed.includes('/') && !trimmed.startsWith('[') && trimmed.length > 5) {
    return trimmed;
  }
  return '';
}

export const SublimationPrinters: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  // State for user-configurable Drive parameters (defaults to top constants)
  const [activeFolderIdInput, setActiveFolderIdInput] = useState<string>(GOOGLE_DRIVE_FOLDER_ID);
  const [activeApiKeyInput, setActiveApiKeyInput] = useState<string>(GOOGLE_DRIVE_API_KEY);
  const [showConfigPanel, setShowConfigPanel] = useState<boolean>(false);

  // Google Drive state
  const [driveImages, setDriveImages] = useState<Record<string, string>>({});
  const [driveStatus, setDriveStatus] = useState<'idle' | 'loading' | 'connected' | 'error'>('idle');
  const [driveError, setDriveError] = useState<string | null>(null);
  const [driveFileList, setDriveFileList] = useState<Array<{ id: string; name: string }>>([]);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Fetch images from Google Drive API v3
  const syncGoogleDrive = () => {
    const rawFolderId = activeFolderIdInput.trim();
    const cleanFolderId = extractFolderId(rawFolderId);
    const rawApiKey = activeApiKeyInput.trim();

    // Check if configuration constants are default placeholders
    const isPlaceholderKey = !rawApiKey || rawApiKey === '[YOUR_API_KEY]';
    const isPlaceholderFolder = !cleanFolderId || cleanFolderId.includes('[PASTE');

    if (isPlaceholderKey || isPlaceholderFolder) {
      setDriveStatus('idle');
      setDriveImages({});
      setDriveFileList([]);
      setDriveError(null);
      return;
    }

    setDriveStatus('loading');
    setDriveError(null);

    // Google Drive API v3 files.list endpoint
    const query = `'${cleanFolderId}' in parents and mimeType contains 'image/' and trashed = false`;
    const endpoint = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=files(id,name,mimeType)&pageSize=100&key=${encodeURIComponent(rawApiKey)}`;

    fetch(endpoint)
      .then(async (response) => {
        if (!response.ok) {
          const errorJson = await response.json().catch(() => ({}));
          throw new Error(errorJson.error?.message || `Google Drive API responded with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const files: Array<{ id: string; name: string }> = data.files || [];
        setDriveFileList(files);

        // Build mapping: modelNumber -> https://lh3.googleusercontent.com/d/<FILE_ID>
        const matchedMap: Record<string, string> = {};

        files.forEach((file) => {
          // Normalize Drive filename: remove extension, trim, lowercase
          // e.g. "SP-1600.jpg" -> "sp-1600"
          const cleanDriveFileName = file.name.replace(/\.[^/.]+$/, '').trim().toLowerCase();

          products.forEach((product) => {
            const normalizedModel = product.modelNumber.trim().toLowerCase();
            const normalizedConfigFileName = product.driveFileName.replace(/\.[^/.]+$/, '').trim().toLowerCase();

            if (cleanDriveFileName === normalizedModel || cleanDriveFileName === normalizedConfigFileName) {
              matchedMap[product.modelNumber] = `https://lh3.googleusercontent.com/d/${file.id}`;
            }
          });
        });

        setDriveImages(matchedMap);
        setDriveStatus('connected');
      })
      .catch((err: Error) => {
        setDriveStatus('error');
        setDriveError(err.message || 'Failed to fetch from Google Drive API');
      });
  };

  useEffect(() => {
    syncGoogleDrive();
  }, [activeFolderIdInput, activeApiKeyInput]);

  // Filter products by search and series
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      const matchesSeries =
        selectedSeries === 'all' ||
        (selectedSeries === 'sp' && prod.series === 'SP-Series') ||
        (selectedSeries === 'fleet' && prod.series === 'Fleet-Industrial');

      const matchesSearch =
        searchQuery === '' ||
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.modelNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.printWidth.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.printHead.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSeries && matchesSearch;
    });
  }, [searchQuery, selectedSeries]);

  const handleImageError = (modelNumber: string) => {
    setImageErrors((prev) => ({ ...prev, [modelNumber]: true }));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-20 selection:bg-sky-500 selection:text-white">
      {/* ==================================================================== */}
      {/* BREADCRUMB & HEADER SECTION */}
      {/* ==================================================================== */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Exact User Specification Breadcrumb:
              Home › Textile Industry › Sublimation Printers */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-sky-400 transition-colors flex items-center gap-1">
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <Link to="/category/textile" className="hover:text-sky-400 transition-colors">
              Textile Industry
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-sky-400 font-semibold" aria-current="page">
              Sublimation Printers
            </span>
          </nav>

          {/* Page Title & Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60 text-sky-400 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Textile Industry</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Sublimation Printers
              </h1>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                High-productivity roll-to-roll dye sublimation machinery engineered for sportswear, polyester apparel, home furnishings, soft signage, and continuous 24/7 industrial manufacturing.
              </p>
            </div>

            {/* Quick Actions & Live Sync Toggle */}
            <div className="flex items-center flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setShowConfigPanel(!showConfigPanel)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                  showConfigPanel || driveStatus === 'connected'
                    ? 'bg-sky-500/10 border-sky-500/40 text-sky-300'
                    : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700 text-slate-300'
                }`}
                title="Configure Google Drive public folder & API key"
              >
                <FolderSync className={`w-4 h-4 ${driveStatus === 'loading' ? 'animate-spin text-sky-400' : ''}`} />
                <span>Google Drive Sync</span>
                {driveStatus === 'connected' && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </button>

              <button
                type="button"
                onClick={() => openQuoteModal({ category: 'textile', model: 'Sublimation Printers Catalogue' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-lg shadow-sky-900/30 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Request Quotation</span>
              </button>
            </div>
          </div>

          {/* ==================================================================== */}
          {/* GOOGLE DRIVE LIVE SYNC STATUS & CONFIGURATION PANEL */}
          {/* ==================================================================== */}
          {showConfigPanel && (
            <div className="rounded-2xl border border-sky-900/50 bg-slate-950/80 backdrop-blur-md p-5 sm:p-6 space-y-5 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <FolderSync className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Google Drive API v3 Dynamic Image Sync</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-900/60 text-sky-300 font-mono">
                        v3 files.list
                      </span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Syncs images dynamically from your public Google Drive folder using file names matching model numbers (e.g. <code className="text-sky-300">SP-1600.jpg</code>).
                    </p>
                  </div>
                </div>

                {/* Connection Status Badge */}
                <div className="shrink-0">
                  {driveStatus === 'connected' && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-400 text-xs font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Connected ({Object.keys(driveImages).length} models matched)</span>
                    </div>
                  )}
                  {driveStatus === 'loading' && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-700/50 text-sky-400 text-xs font-medium">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Fetching Google Drive...</span>
                    </div>
                  )}
                  {driveStatus === 'error' && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-700/50 text-rose-300 text-xs font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Drive Error</span>
                    </div>
                  )}
                  {driveStatus === 'idle' && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium">
                      <span>Local Showcase Mode</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Input Fields to live-test without code editing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                    <span>Google Drive Folder Link or Folder ID</span>
                    <span className="text-[10px] text-slate-400 font-normal">Must be "Anyone with the link can view"</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={activeFolderIdInput}
                      onChange={(e) => setActiveFolderIdInput(e.target.value)}
                      placeholder="Paste folder link or ID (e.g. 1a2B3c4D...)"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                    <span>Google Cloud API Key (API v3)</span>
                    <span className="text-[10px] text-slate-400 font-normal">Stored in GOOGLE_DRIVE_API_KEY</span>
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={activeApiKeyInput}
                      onChange={(e) => setActiveApiKeyInput(e.target.value)}
                      placeholder="Paste your Google Drive API key"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Helpful Guidance & Error Display */}
              {driveError && (
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-900/50 text-rose-300 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold">Google Drive API Notice: </strong>
                    <span>{driveError}</span>
                    <p className="mt-1 text-[11px] text-rose-400">
                      Falling back cleanly to local high-resolution machine renders. Verify that the folder sharing is set to "Anyone with the link can view" and that the Google Drive API v3 is enabled on your Cloud Project.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
                  <span>Images are loaded via direct CDN: <code className="text-sky-300">https://lh3.googleusercontent.com/d/&lt;FILE_ID&gt;</code></span>
                </span>
                <span className="text-slate-500">
                  You can also edit constants at lines 27–34 in <code className="text-slate-400">src/pages/SublimationPrinters.tsx</code>.
                </span>
              </div>
            </div>
          )}

          {/* Quick Filter & Search Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedSeries('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedSeries === 'all'
                    ? 'bg-sky-500 text-slate-950 shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                All Machinery ({products.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedSeries('sp')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedSeries === 'sp'
                    ? 'bg-sky-500 text-slate-950 shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                SP-Series Models (4)
              </button>
              <button
                type="button"
                onClick={() => setSelectedSeries('fleet')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedSeries === 'fleet'
                    ? 'bg-sky-500 text-slate-950 shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Vee Kay Fleet & Mimaki (5)
              </button>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px] sm:max-w-xs">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models, heads, widths..."
                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* PRODUCT CATALOG GRID */}
      {/* ==================================================================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Results summary bar */}
        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
          <span>
            Showing <strong className="text-white">{filteredProducts.length}</strong> sublimation printing machine{filteredProducts.length === 1 ? '' : 's'}
          </span>
          <span className="hidden sm:inline text-slate-400">
            Precision Dye-Sublimation · High Optical Density · 24/7 Chassis
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-slate-800 bg-slate-950/50 space-y-4">
            <Printer className="w-10 h-10 text-slate-600 mx-auto" />
            <h3 className="text-base font-semibold text-white">No models match your search</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try searching with another keyword like "SP", "1600", "i3200", or reset your filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedSeries('all');
              }}
              className="px-4 py-2 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => {
              // Determine active image URL:
              // 1. Google Drive direct CDN if matched
              // 2. Local uploaded image fallback
              const isDriveSynced = Boolean(driveImages[product.modelNumber]);
              const driveImageUrl = driveImages[product.modelNumber];
              const resolvedImage = isDriveSynced && !imageErrors[product.modelNumber]
                ? driveImageUrl
                : (product.fallbackImage || '/assets/aistudio/ChatGPT_Image_Aug_26__2026__04_55_56_PM_a4b2454d.png');

              return (
                <div
                  key={product.modelNumber}
                  className="group rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-sky-400/80 shadow-xl hover:shadow-2xl hover:shadow-sky-950/50 hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Top Header & Model Badge */}
                  <div className="p-5 pb-0 flex items-start justify-between gap-2">
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-sky-400 bg-sky-950/80 border border-sky-800/50 px-2.5 py-0.5 rounded-md">
                          {product.modelNumber}
                        </span>
                        {product.badge && (
                          <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <h2 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1 pt-1">
                        {product.name}
                      </h2>
                    </div>

                    {/* Google Drive Status Indicator */}
                    {isDriveSynced ? (
                      <span
                        className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded-full shrink-0"
                        title={`Synced from Google Drive file: ${product.driveFileName}`}
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Drive Sync</span>
                      </span>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1 text-[10px] text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full shrink-0"
                        title={`File target: ${product.driveFileName}`}
                      >
                        <span>{product.driveFileName}</span>
                      </span>
                    )}
                  </div>

                  {/* ========================================================== */}
                  {/* MACHINE VISUAL SHOWCASE (UNIFORM 4:3 LIGHT CONTAINER WITH LIGHTBOX) */}
                  {/* ========================================================== */}
                  <div className="p-4 sm:p-5 pb-0">
                    <PrinterVisual
                      modelName={product.name}
                      imageUrl={resolvedImage}
                      imageAlt={`${product.name} – Vee Kay Enterprises`}
                      imageCaption={product.name}
                      enableLightbox={true}
                    />
                  </div>

                  {/* ========================================================== */}
                  {/* SPECIFICATIONS & DESCRIPTIVE CONTENT */}
                  {/* ========================================================== */}
                  <div className="p-5 pt-0 space-y-4 flex-1 flex flex-col justify-between">
                    
                    {/* Short Description */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {product.shortDescription}
                    </p>

                    {/* Technical Specifications Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800/80">
                      
                      {/* Print Width */}
                      <div className="flex items-start gap-2 p-2 rounded-lg bg-slate-900/70 border border-slate-800/60">
                        <Maximize2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                            Print Width
                          </span>
                          <span className="text-slate-200 font-medium text-xs truncate block" title={product.printWidth}>
                            {product.printWidth}
                          </span>
                        </div>
                      </div>

                      {/* Speed */}
                      <div className="flex items-start gap-2 p-2 rounded-lg bg-slate-900/70 border border-slate-800/60">
                        <Gauge className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                            Max Velocity
                          </span>
                          <span className="text-slate-200 font-medium text-xs truncate block" title={product.speed}>
                            {product.speed}
                          </span>
                        </div>
                      </div>

                      {/* Printhead Assembly */}
                      <div className="col-span-1 sm:col-span-2 flex items-start gap-2 p-2 rounded-lg bg-slate-900/70 border border-slate-800/60">
                        <Cpu className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                            Printhead Architecture
                          </span>
                          <span className="text-slate-200 font-medium text-xs truncate block" title={product.printHead}>
                            {product.printHead}
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => openQuoteModal({ category: 'textile', model: `${product.modelNumber} - ${product.name}` })}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md shadow-sky-950/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Request Pricing</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={`https://wa.me/919999936706?text=${encodeURIComponent(
                          `Hello Vee Kay Enterprises, I would like to inquire about specifications and pricing for the Sublimation Printer ${product.modelNumber} (${product.name}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer shrink-0"
                        title="Chat on WhatsApp about this model"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================================================================== */}
        {/* INDUSTRIAL ASSURANCE & ENGINEERING STANDARDS SECTION */}
        {/* ==================================================================== */}
        <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Textile Division Engineering Protocol
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Vee Kay Enterprises · Kirti Nagar Center of Excellence
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Full Machinery Compendium</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-bold text-white text-sm">Industrial Tension Feed</h4>
              <p className="text-slate-400 leading-relaxed">
                Heavy synchronized rubber rollers maintain flat, wrinkle-free paper travel even with ultra-thin 28–45 GSM sublimation transfer papers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-bold text-white text-sm">Dual Infrared Curing</h4>
              <p className="text-slate-400 leading-relaxed">
                Integrated front radiant heaters and turbo blowers ensure instant ink drying before winding on the automated pneumatic take-up roll.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-bold text-white text-sm">Bulk Degassed Ink</h4>
              <p className="text-slate-400 leading-relaxed">
                Negative pressure continuous ink supply system with sub-tank agitation prevents micro-bubbles from causing nozzle drops during fast runs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                04
              </div>
              <h4 className="font-bold text-white text-sm">Factory Installation</h4>
              <p className="text-slate-400 leading-relaxed">
                Direct on-site mechanical alignment, voltage stabilizer verification, RIP software profiling, and staff operator training included across India.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
