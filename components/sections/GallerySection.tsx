"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, X, Maximize2 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { galleryImages, testimonials } from "@/data/gallery";
import PandaBackground from "@/components/ui/PandaBackground";


function ClayArrowButton({
  onClick,
  disabled,
  children,
  className,
  "aria-label": ariaLabel,
}: {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  "aria-label": string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex items-center justify-center rounded-full bg-white/90 border border-white/40 text-clay-green-700 transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100 z-10 backdrop-blur-sm",
        className
      )}
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

function ImageCarousel({
  images,
  onImageClick,
}: {
  images: typeof galleryImages;
  onImageClick: (_index: number) => void;
}) {
  const autoplayPlugin = useMemo(() => Autoplay({ delay: 4000, stopOnInteraction: true }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [autoplayPlugin]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    const rafId = requestAnimationFrame(() => setSelectedIndex(emblaApi.selectedScrollSnap()));
    return () => {
      emblaApi.off("select", onSelect);
      cancelAnimationFrame(rafId);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      {/* Prev Arrow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex">
        <ClayArrowButton onClick={scrollPrev} className="size-10 -translate-x-3" aria-label="Previous image">
          <ChevronLeft className="size-5" />
        </ClayArrowButton>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex">
          {images.map((image, idx) => (
            <div
              key={`${image.src}-${idx}`}
              className="flex-[0_0_75%] md:flex-[0_0_55%] min-w-0 px-1.5 md:px-2"
            >
              <div
                className="relative aspect-[3/4] md:aspect-[3/2] rounded-2xl border-2 border-white/60 overflow-hidden group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                onClick={() => onImageClick(idx)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 55vw"
                  priority={idx === selectedIndex}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {image.alt && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2 md:p-3">
                    <p className="text-white text-xs md:text-sm font-medium truncate">{image.alt}</p>
                  </div>
                )}
                {/* Expand button */}
                <button
                  onClick={(e) => { e.stopPropagation(); onImageClick(idx); }}
                  className="absolute top-2 right-2 z-10 flex size-8 md:size-9 items-center justify-center rounded-full bg-white/90 border border-white/40 text-clay-green-700 opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 hover:scale-110 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                  aria-label={`View ${image.alt}`}
                >
                  <Maximize2 className="size-4 md:size-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Arrow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex">
        <ClayArrowButton onClick={scrollNext} className="size-10 translate-x-3" aria-label="Next image">
          <ChevronRight className="size-5" />
        </ClayArrowButton>
      </div>

      {/* Dots */}
      <div className="hidden md:flex justify-center gap-1.5 mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "rounded-full transition-all duration-300",
              index === selectedIndex
                ? "w-6 h-2 bg-clay-orange-500"
                : "w-2 h-2 bg-clay-cream-border hover:bg-clay-mint-border"
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      {/* Mobile counter */}
      <div className="flex md:hidden justify-center mt-2">
        <span className="font-display text-xs font-bold text-clay-green-700 bg-white/80 rounded-full px-3 py-1 border border-white/40 backdrop-blur-md">
          {selectedIndex + 1} / {images.length}
        </span>
      </div>

      {/* Mobile Arrows */}
      <div className="flex md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <ClayArrowButton onClick={scrollPrev} className="size-8 -translate-x-1" aria-label="Previous image">
          <ChevronLeft className="size-4" />
        </ClayArrowButton>
      </div>
      <div className="flex md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <ClayArrowButton onClick={scrollNext} className="size-8 translate-x-1" aria-label="Next image">
          <ChevronRight className="size-4" />
        </ClayArrowButton>
      </div>
    </div>
  );
}

function TestimonialCarousel() {
  const autoplayPlugin = useMemo(() => Autoplay({ delay: 6000, stopOnInteraction: true }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [autoplayPlugin]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    const rafId = requestAnimationFrame(() => setSelectedIndex(emblaApi.selectedScrollSnap()));
    return () => {
      emblaApi.off("select", onSelect);
      cancelAnimationFrame(rafId);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      {/* Prev Arrow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex">
        <ClayArrowButton onClick={scrollPrev} className="size-7 -translate-x-2" aria-label="Previous testimonial">
          <ChevronLeft className="size-4" />
        </ClayArrowButton>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex-[0_0_80%] md:flex-[0_0_60%] min-w-0 px-2"
            >
              <div
                className="rounded-2xl border border-white/40 bg-white/80 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 h-[150px] md:h-[190px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                <div className="flex gap-0.5 mb-1.5 md:mb-2 shrink-0">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-3 md:size-4 fill-clay-orange-500 text-clay-orange-500" />
                  ))}
                </div>
                <p className="font-body text-xs md:text-base text-ink leading-relaxed italic line-clamp-3 flex-1 overflow-hidden">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-2 md:mt-3 flex items-center gap-2 shrink-0">
                  <div className="flex size-6 md:size-8 items-center justify-center rounded-full bg-clay-mint/50 border border-white/40">
                    <span className="font-display text-xs md:text-sm font-bold text-clay-green-700">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-xs md:text-base font-bold text-clay-green-900">
                      {t.name}
                    </p>
                    <p className="font-body text-[10px] md:text-sm text-ink-muted">
                      {t.childAge}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Arrow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex">
        <ClayArrowButton onClick={scrollNext} className="size-7 translate-x-2" aria-label="Next testimonial">
          <ChevronRight className="size-4" />
        </ClayArrowButton>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1 mt-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "rounded-full transition-all duration-300",
              index === selectedIndex
                ? "w-4 h-1.5 bg-clay-green-700"
                : "w-1.5 h-1.5 bg-clay-cream-border hover:bg-clay-mint-border"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Arrows */}
      <div className="flex md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <ClayArrowButton onClick={scrollPrev} className="size-6 -translate-x-1" aria-label="Previous testimonial">
          <ChevronLeft className="size-3.5" />
        </ClayArrowButton>
      </div>
      <div className="flex md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <ClayArrowButton onClick={scrollNext} className="size-6 translate-x-1" aria-label="Next testimonial">
          <ChevronRight className="size-3.5" />
        </ClayArrowButton>
      </div>
    </div>
  );
}

function LightboxModal({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof galleryImages;
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const image = images[activeIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext();
      else onPrev();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Close Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-[201] flex size-10 md:size-12 items-center justify-center rounded-full bg-white/90 border border-white/40 text-clay-green-700 transition-all duration-200 hover:scale-110 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
        aria-label="Close"
      >
        <X className="size-5 md:size-6" />
      </button>

      {/* Prev Arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-[201] flex size-10 md:size-12 items-center justify-center rounded-full bg-white/90 border border-white/40 text-clay-green-700 transition-all duration-200 hover:scale-110 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
        aria-label="Previous image"
      >
        <ChevronLeft className="size-5 md:size-6" />
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-[92vw] max-h-[88vh] rounded-2xl overflow-hidden border border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-[min(92vw,900px)] h-[min(88vh,600px)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 92vw, 900px"
            priority
          />
        </div>
        {image.alt && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:p-4">
            <p className="text-white text-sm md:text-base font-medium">{image.alt}</p>
          </div>
        )}
      </div>

      {/* Next Arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-[201] flex size-10 md:size-12 items-center justify-center rounded-full bg-white/90 border border-white/40 text-clay-green-700 transition-all duration-200 hover:scale-110 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
        aria-label="Next image"
      >
        <ChevronRight className="size-5 md:size-6" />
      </button>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[201]">
        <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 font-display text-xs font-bold text-clay-green-900 border border-white/40 backdrop-blur-md">
          {activeIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const lightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <PandaBackground count={3} className="flex flex-col">
      <section id="gallery" className="relative flex flex-col py-12 sm:py-16 md:py-24">
        <div className="w-full px-4 sm:px-5 md:px-[5vw] flex flex-col">
          {/* Header */}
          <div className="text-center shrink-0 mb-6 sm:mb-8 md:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-clay-green-900">
              Happy <span className="text-clay-green-700">moments</span>{" "}
              <span className="text-clay-orange-500">captured.</span>
            </h2>
            <p className="font-body text-sm sm:text-sm md:text-base text-ink-muted mt-1.5 sm:mt-2">
              See the joy in every bite
            </p>
          </div>

          {/* Image Carousel */}
          <div className="shrink-0">
            <ImageCarousel images={galleryImages} onImageClick={openLightbox} />
          </div>

          {/* Testimonials Section */}
          <div className="mt-8 sm:mt-10 md:mt-14 shrink-0">
            <p className="font-display text-sm sm:text-sm md:text-base font-bold text-clay-green-700 text-center mb-3 sm:mb-4">
              What Parents Say
            </p>
            <TestimonialCarousel />
          </div>


        </div>
      </section>

      {/* Lightbox Modal — rendered via portal to escape <main> stacking context */}
      {mounted && lightboxOpen && createPortal(
        <LightboxModal
          images={galleryImages}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
        />,
        document.body
      )}
    </PandaBackground>
  );
}