import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  Wrench,
  CheckCircle,
  FileText,
  ExternalLink,
  Phone,
  Sparkles
} from 'lucide-react';
import { HERO_SLIDES } from '../data/heroSlides.js';
import { PrinterVisual } from './PrinterVisual';
import { useQuoteModal } from '../context/QuoteModalContext';

const AUTOPLAY_TIME = 6000; // 6 seconds per slide

/**
 * HeroSlider Component
 * 
 * Accessible 5-slide horizontal carousel with:
 * - Sequential CSS pop-up animation (translateY + scale overshoot) on every slide change
 * - Single H1 tag on the primary hero slide (others are styled H2s for SEO integrity)
 * - Autoplay every 6s with pause on hover/focus/touch
 * - Touch swipe support
 * - Keyboard left/right arrow navigation
 * - Slide indicator dots with filling progress bar
 * - Graceful fallback to PrinterVisual or real image URLs
 */
export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const { openQuoteModal } = useQuoteModal();

  const sliderRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const progressIntervalRef = useRef(null);
  const slideCount = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
    setProgress(0);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
    setProgress(0);
  }, [slideCount]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Autoplay timer with progress calculation
  useEffect(() => {
    if (isPaused) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50; // update progress every 50ms
    const stepIncrement = (stepMs / AUTOPLAY_TIME) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPaused, nextSlide]);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if focus is inside or near the slider
      if (!sliderRef.current) return;
      if (sliderRef.current.contains(document.activeElement)) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevSlide();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          nextSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const deltaX = touchStartXRef.current - touchEndXRef.current;
    const swipeThreshold = 45;

    if (touchEndXRef.current !== 0) {
      if (deltaX > swipeThreshold) {
        nextSlide();
      } else if (deltaX < -swipeThreshold) {
        prevSlide();
      }
    }
    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
  };

  return (
    <div
      ref={sliderRef}
      tabIndex={0}
      role="region"
      aria-label="Industrial Printing Solutions Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-b border-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
    >
      {/* Subtle Ambient Industrial Backdrop Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-sky-500/10 blur-[130px] pointer-events-none" />

      {/* Horizontal Sliding Track */}
      <div
        className="flex transition-transform duration-500 ease-out will-change-transform"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {HERO_SLIDES.map((slide, index) => {
          const isActive = currentSlide === index;

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slideCount}: ${slide.headline}`}
              className="w-full shrink-0 pt-10 pb-16 lg:py-20 px-4 sm:px-6 lg:px-8 select-none"
            >
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[460px]">
                  
                  {/* Left Column: Sequential Animated Copy (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Badge */}
                    <div
                      key={`badge-${currentSlide}`}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-300 text-xs font-semibold tracking-wide shadow-inner ${
                        isActive ? 'animate-hero-pop' : ''
                      }`}
                      style={{ animationDelay: '80ms' }}
                    >
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      <span>{slide.badge}</span>
                    </div>

                    {/* Headline: Only Slide 1 is semantic H1 */}
                    {slide.isMainH1 ? (
                      <h1
                        key={`h1-${currentSlide}`}
                        className={`text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight ${
                          isActive ? 'animate-hero-pop' : ''
                        }`}
                        style={{ animationDelay: '200ms' }}
                      >
                        {slide.headline}
                      </h1>
                    ) : (
                      <h2
                        key={`h2-${currentSlide}`}
                        className={`text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight ${
                          isActive ? 'animate-hero-pop' : ''
                        }`}
                        style={{ animationDelay: '200ms' }}
                      >
                        {slide.headline}
                      </h2>
                    )}

                    {/* Subheadline Text */}
                    <p
                      key={`text-${currentSlide}`}
                      className={`text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed ${
                        isActive ? 'animate-hero-pop' : ''
                      }`}
                      style={{ animationDelay: '320ms' }}
                    >
                      {slide.subheadline}
                    </p>

                    {/* Action Buttons Row */}
                    <div
                      key={`cta-${currentSlide}`}
                      className={`flex flex-wrap items-center gap-3.5 pt-2 ${
                        isActive ? 'animate-hero-pop' : ''
                      }`}
                      style={{ animationDelay: '440ms' }}
                    >
                      {/* Primary CTA */}
                      {slide.ctaPrimary.link ? (
                        <Link
                          to={slide.ctaPrimary.link}
                          className="px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-sky-500/20 transition-all duration-150 flex items-center gap-2 group cursor-pointer"
                        >
                          <span>{slide.ctaPrimary.label}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            openQuoteModal({
                              category: slide.categoryId,
                              model: slide.modelName,
                              notes: slide.ctaPrimary.quoteNotes || 'Hero inquiry',
                            })
                          }
                          className="px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm shadow-lg transition-all duration-150 flex items-center gap-2 cursor-pointer"
                        >
                          <span>{slide.ctaPrimary.label}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )}

                      {/* Secondary CTA */}
                      {slide.ctaSecondary && (
                        slide.ctaSecondary.action === 'quote' ? (
                          <button
                            type="button"
                            onClick={() =>
                              openQuoteModal({
                                category: slide.ctaSecondary.quoteCategory || slide.categoryId,
                                model: slide.modelName,
                              })
                            }
                            className="px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs sm:text-sm transition-all duration-150 flex items-center gap-2 cursor-pointer"
                          >
                            <span>{slide.ctaSecondary.label}</span>
                          </button>
                        ) : (
                          <a
                            href={slide.ctaSecondary.link}
                            className="px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs sm:text-sm transition-all duration-150 flex items-center gap-2"
                          >
                            <Phone className="w-4 h-4 text-sky-400" />
                            <span>{slide.ctaSecondary.label}</span>
                          </a>
                        )
                      )}

                      {/* Tertiary CTA Link */}
                      {slide.ctaTertiary && (
                        slide.ctaTertiary.external ? (
                          <a
                            href={slide.ctaTertiary.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                          >
                            <span>{slide.ctaTertiary.label}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                          </a>
                        ) : (
                          <Link
                            to={slide.ctaTertiary.link}
                            className="px-3.5 py-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                          >
                            <FileText className="w-4 h-4 text-sky-400" />
                            <span>{slide.ctaTertiary.label}</span>
                          </Link>
                        )
                      )}
                    </div>

                  </div>

                  {/* Right Column: Visual Showcase & Trust Card (5 cols) */}
                  <div
                    key={`visual-${currentSlide}`}
                    className={`lg:col-span-5 space-y-4 ${
                      isActive ? 'animate-hero-pop' : ''
                    }`}
                    style={{ animationDelay: '560ms' }}
                  >
                    {/* Visual Asset or Dynamic High-Fidelity SVG Component */}
                    {slide.imagePlaceholder ? (
                      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 sm:p-6 shadow-2xl flex flex-col items-center justify-center group min-h-[250px] sm:min-h-[290px]">
                        {/* Background Engineering Grid */}
                        <div
                          className="absolute inset-0 opacity-20 pointer-events-none"
                          style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.25) 1px, transparent 0)`,
                            backgroundSize: '20px 20px',
                          }}
                        />

                        {/* Ambient Cyan/Sky Backlight Glow */}
                        <div className="absolute w-64 h-32 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

                        {/* Top Technical Badge */}
                        <div className="relative z-10 w-full flex items-center justify-between text-[11px] font-mono text-sky-400 mb-2">
                          <span className="flex items-center gap-1.5 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-800/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>VEE KAY LIVE SYSTEM</span>
                          </span>
                          <span className="text-slate-400 text-[10px] hidden sm:inline">HIGH PRECISION ROLL-TO-ROLL</span>
                        </div>

                        {/* Machine Image with Pop-Up Motion & Floating Physics */}
                        <div className="relative z-10 w-full flex flex-col items-center justify-center py-2">
                          <div
                            key={`machine-pop-wrap-${currentSlide}-${slide.id}`}
                            className="w-full flex items-center justify-center animate-machine-pop"
                          >
                            <img
                              key={`machine-img-${currentSlide}-${slide.id}`}
                              src={slide.imagePlaceholder}
                              alt={slide.imageAlt || slide.headline}
                              style={{ maxWidth: '318px', maxHeight: '228px' }}
                              className="w-full max-w-[318px] h-auto max-h-[228px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] animate-machine-pop animate-machine-float transition-transform duration-300 group-hover:scale-105"
                              loading="eager"
                            />
                          </div>

                          {/* Dynamic 3D Contact Shadow */}
                          <div className="w-full max-w-[280px] sm:max-w-[318px] h-3 sm:h-4 bg-black/75 rounded-full blur-md animate-shadow-pulse -mt-1 pointer-events-none" />
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <PrinterVisual
                          categoryId={slide.categoryId}
                          modelName={slide.modelName}
                          variant="hero"
                          className="w-full shadow-2xl"
                        />
                      </div>
                    )}

                    {/* Trust Card */}
                    <div className="bg-slate-800/90 backdrop-blur border border-slate-700 rounded-xl p-5 shadow-lg space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-sky-400 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4" />
                          <span>{slide.trustCard.title}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-normal normal-case">
                          Slide {index + 1} of {slideCount}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-1">
                        {slide.trustCard.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-white">{item.title}</p>
                              <p className="text-[11px] text-slate-400 leading-tight">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
                        <span>{slide.trustCard.subtitle}</span>
                        <a
                          href="https://share.google/giQckxTgBtVPaR7WL"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center gap-1"
                        >
                          <span>4.9 ★ Profile</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows (Visible on md and larger screens) */}
      <div className="hidden md:flex absolute inset-y-0 left-2 sm:left-4 items-center pointer-events-none">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="pointer-events-auto p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-sm shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="hidden md:flex absolute inset-y-0 right-2 sm:right-4 items-center pointer-events-none">
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="pointer-events-auto p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-sm shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Controls: Slide Dots with Filling Progress Bar */}
      <div className="relative z-20 pb-6 pt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs / Dots */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 scrollbar-none">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = currentSlide === index;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}: ${slide.categoryTag}`}
                  aria-current={isActive ? 'true' : 'false'}
                  className={`group relative py-1.5 px-3 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-white border border-sky-500/60 shadow-sm'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800'
                  }`}
                >
                  <span className="truncate max-w-[120px] sm:max-w-none">
                    {slide.categoryTag}
                  </span>

                  {/* Dot / Progress Bar Indicator */}
                  <div className="w-8 h-1.5 bg-slate-700 rounded-full overflow-hidden shrink-0">
                    {isActive ? (
                      <div
                        className="h-full bg-sky-400 transition-all duration-75 ease-linear rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    ) : (
                      <div className="h-full bg-transparent" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Autoplay Pause State Pill & Keyboard Hint */}
          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            {isPaused && (
              <span className="text-amber-400/90 font-medium">
                Autoplay paused
              </span>
            )}
            <span className="hidden md:inline">
              Use ← / → keys or swipe
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
