import React, { useState, useEffect } from 'react';
import { Maximize2, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { getProductImage } from '../data/productImages';

export interface PrinterVisualProps {
  categoryId?: string;
  modelName?: string;
  className?: string;
  variant?: 'card' | 'hero' | 'banner' | 'detail';
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  enableLightbox?: boolean;
}

export const PrinterVisual: React.FC<PrinterVisualProps> = ({
  categoryId = 'textile',
  modelName = 'Industrial Machine',
  className = '',
  variant = 'card',
  imageUrl,
  imageAlt,
  imageCaption,
  enableLightbox = true,
}) => {
  const [imgError, setImgError] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Reset error when src changes
  useEffect(() => {
    setImgError(false);
  }, [imageUrl, modelName]);

  // Match official product metadata
  const matchedProduct = getProductImage(modelName);

  // Image source priorities:
  // 1. Explicitly passed imageUrl
  // 2. Matched webpUrl from official product registry
  // 3. Fallback to matched pngUrl
  const primarySrc = imageUrl || matchedProduct?.webpUrl || '/assets/products/VKE-2008A TX.webp';
  const fallbackPng = matchedProduct?.pngUrl || imageUrl || '/assets/products/VKE-2008A TX.png';

  // Clean brand details and generic descriptors to align model codes consistently
  const cleanBrandDetails = (text?: string): string => {
    if (!text) return '';
    return text
      .replace(/[–—\-]\s*(Vee\s*Kay\s*Enterprises|Vee\s*Kay|Mimaki)/gi, '')
      .replace(/\b(Vee\s*Kay\s*Enterprises|Vee\s*Kay\s*Fleet|Vee\s*Kay|Mimaki)\b/gi, '')
      .replace(/\b(Double\s+Side\s+Reactive\s+Printing\s+Machine\s+With|Double\s+Side\s+Printing\s+Machine|3\.2m\s+Wide\s+Reactive\s+Textile\s+Machine|3\.2m\s+Pigment\s+Textile\s+Printer|Medium\s+Width\s+Reactive\s+Printer|Wide\s+Reactive\s+Textile\s+Machine|Pigment\s+Textile\s+Printer|Direct\s+Reactive\s+Textile\s+Printer|High\s+Speed\s+Reactive\s+Printer|Direct\s+Textile\s+Pigment\s+Printer|Direct\s+Reactive\s+Printer|Wide\s+Bed\s+Reactive\s+System|Wide\s+Direct\s+Pigment\s+Printer)\b/gi, '')
      .replace(/\bYSR(\d{4})\b/i, 'YSR $1')
      .replace(/\s{2,}/g, ' ')
      .trim();
  };

  // Alt text, clean caption, and non-brand technical subtitle
  const rawCaption = imageCaption || matchedProduct?.caption || modelName;
  const cleanCaption = imageCaption || (cleanBrandDetails(rawCaption) || rawCaption);
  
  // Clean subtitle for line 2: technical specifications or category without brand mentions
  const cleanSubtitle = cleanBrandDetails(
    matchedProduct?.specsSummary || (imageAlt && !imageAlt.includes('Vee Kay') ? imageAlt : '')
  ) || 'Industrial Print System';

  const finalAlt = `${cleanCaption} - Industrial Machinery`;

  // Handle ESC key for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setZoomLevel(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // Color accents based on industrial discipline for fallback diagram
  const getTheme = () => {
    switch (categoryId) {
      case 'textile':
        return {
          bg: 'from-slate-900 via-indigo-950 to-slate-900',
          accent: '#818cf8',
          label: 'TEXTILE DIRECT / SUBLIMATION'
        };
      case 'mimaki':
        return {
          bg: 'from-slate-900 via-sky-950 to-slate-900',
          accent: '#38bdf8',
          label: 'HIGH-PRECISION PRINTING'
        };
      default:
        return {
          bg: 'from-slate-900 via-blue-950 to-slate-900',
          accent: '#60a5fa',
          label: 'INDUSTRIAL PRINTING MACHINERY'
        };
    }
  };

  const theme = getTheme();

  return (
    <>
      {/* ==================================================================== */}
      {/* MAIN UNIFORM 4:3 CONTAINER (WHITE/LIGHT BACKGROUND, OBJECT-FIT: CONTAIN) */}
      {/* ==================================================================== */}
      <figure
        className={`relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-xs flex flex-col items-center justify-between p-4 sm:p-5 select-none overflow-hidden group transition-all duration-300 hover:shadow-lg hover:border-sky-400/90 ${
          enableLightbox ? 'cursor-zoom-in' : ''
        } ${className}`}
        onClick={() => {
          if (enableLightbox && !imgError) {
            setIsLightboxOpen(true);
            setZoomLevel(1);
          }
        }}
      >
        {/* Subtle Background Pattern Accent */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.15) 1px, transparent 0)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Top Header Bar inside Container - No brand details */}
        <div className="relative z-10 w-full flex items-center justify-end text-[11px] font-medium text-slate-500 min-h-[22px]">
          {enableLightbox && !imgError && (
            <span
              className="inline-flex items-center gap-1 text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200/60 opacity-80 group-hover:opacity-100 group-hover:bg-sky-100 group-hover:border-sky-300 transition-all shadow-2xs"
              title="Click to enlarge image"
            >
              <Maximize2 className="w-3 h-3 text-sky-600" />
              <span className="hidden sm:inline">Enlarge</span>
            </span>
          )}
        </div>

        {/* Machine Image Showcase with Responsive Centering & Pop-up Motion */}
        <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center my-1">
          {!imgError ? (
            <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
              <picture className="w-full h-full flex items-center justify-center">
                {primarySrc.includes('.webp') && <source srcSet={primarySrc} type="image/webp" />}
                <img
                  src={primarySrc.includes('.webp') ? fallbackPng : primarySrc}
                  alt={finalAlt}
                  onError={() => setImgError(true)}
                  loading="lazy"
                  decoding="async"
                  className={`w-auto h-auto max-w-[86%] ${
                    variant === 'detail'
                      ? 'max-h-[220px] sm:max-h-[260px] md:max-h-[300px]'
                      : 'max-h-[150px] sm:max-h-[175px]'
                  } object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out group-hover:scale-104 group-hover:-translate-y-1.5 group-hover:drop-shadow-[0_16px_26px_rgba(0,0,0,0.22)] animate-machine-pop`}
                />
              </picture>

              {/* Dynamic Ground Contact Shadow with Synchronized Pop Expansion */}
              <div className="w-3/5 max-w-[240px] h-2 bg-slate-400/25 rounded-full blur-xs mt-1 pointer-events-none transition-all duration-300 ease-out group-hover:scale-105 group-hover:opacity-75" />
            </div>
          ) : (
            /* Graceful Fallback Vector Schematic if Image Fails */
            <div className={`w-full h-full rounded-xl bg-gradient-to-br ${theme.bg} p-4 flex items-center justify-center text-white`}>
              <div className="text-center space-y-1">
                <p className="text-xs font-bold text-sky-300">{cleanCaption}</p>
                <p className="text-[10px] text-slate-400">{theme.label}</p>
              </div>
            </div>
          )}
        </div>

        {/* Accessible Caption at bottom of Container */}
        <figcaption className="relative z-10 w-full text-center border-t border-slate-100 pt-2 px-2">
          <p className="text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors truncate leading-tight text-center">
            {cleanCaption}
          </p>
          <p className="text-[10px] font-medium text-slate-400 group-hover:text-sky-600 transition-colors mt-0.5 leading-tight text-center tracking-wide">
            (Click for More View)
          </p>
        </figcaption>
      </figure>

      {/* ==================================================================== */}
      {/* CLICK-TO-ENLARGE LIGHTBOX MODAL */}
      {/* ==================================================================== */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${cleanCaption} Lightbox Preview`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => {
            setIsLightboxOpen(false);
            setZoomLevel(1);
          }}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-between space-y-6 select-none overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header - No brand details */}
            <div className="w-full flex items-center justify-between border-b border-slate-800 pb-4 text-white">
              <div className="space-y-0.5 min-w-0 pr-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Machinery View
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:inline">High-Resolution Industrial Photography</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white truncate">
                  {cleanCaption}
                </h3>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                  title="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                  title="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel(1)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                  title="Reset zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsLightboxOpen(false);
                    setZoomLevel(1);
                  }}
                  className="p-2 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-800/50 text-rose-200 transition-colors cursor-pointer ml-1"
                  title="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* High-Resolution Machine Viewport */}
            <div className="w-full flex-1 min-h-[300px] sm:min-h-[460px] flex items-center justify-center p-4 bg-slate-950/60 rounded-2xl border border-slate-800/80 overflow-auto">
              <picture className="flex items-center justify-center">
                {primarySrc.includes('.webp') && <source srcSet={primarySrc} type="image/webp" />}
                <img
                  src={primarySrc.includes('.webp') ? fallbackPng : primarySrc}
                  alt={finalAlt}
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="max-h-[60vh] max-w-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] transition-transform duration-200 ease-out"
                />
              </picture>
            </div>

            {/* Modal Footer Caption - No brand details */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800 gap-2">
              <p className="font-medium text-slate-300 truncate">
                <span className="text-slate-400">Model: </span>
                <span className="text-sky-300">{cleanCaption}</span>
                {cleanSubtitle && (
                  <>
                    <span className="mx-2 text-slate-600">·</span>
                    <span className="text-slate-300">{cleanSubtitle}</span>
                  </>
                )}
              </p>
              <span className="text-[11px] text-slate-500 shrink-0">
                Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[10px]">ESC</kbd> to exit
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
