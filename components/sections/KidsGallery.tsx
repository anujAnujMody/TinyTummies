"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const kidsItems = [
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
    alt: "Happy child eating lunch",
    caption: "Meals they actually finish",
    quote: "I want more!",
  },
  {
    src: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?w=600&h=400&fit=crop",
    alt: "Kids enjoying school lunch",
    caption: "Lunchbox excitement",
    quote: "Best lunch ever!",
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop",
    alt: "Child with colorful food plate",
    caption: "Colorful plates, happy faces",
    quote: "Yummy!",
  },
  {
    src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&h=400&fit=crop",
    alt: "Kids sharing healthy snacks",
    caption: "Sharing is caring",
    quote: "Can I have more?",
  },
  {
    src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=400&fit=crop",
    alt: "Child eating fruit happily",
    caption: "Fruit lovers in the making",
    quote: "I love this!",
  },
  {
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop",
    alt: "Happy kids at lunchtime",
    caption: "No more lunchbox battles",
    quote: "So good!",
  },
];

export default function KidsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % kidsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (scrollRef.current) {
      const card = scrollRef.current.children[currentIndex] as HTMLElement;
      if (card) {
        const container = scrollRef.current;
        const scrollLeft = card.offsetLeft - container.clientWidth / 2 + card.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [currentIndex]);

  const scroll = (direction: "left" | "right") => {
    const newIndex = direction === "left"
      ? (currentIndex - 1 + kidsItems.length) % kidsItems.length
      : (currentIndex + 1) % kidsItems.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="kids" className="relative py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-xs font-bold tracking-widest text-tt-orange uppercase mb-2">
            Kids Experience
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-tt-text leading-tight">
            The Proof Is in the <span className="text-tt-orange">Empty Plates</span>
          </h2>
          <p className="mt-3 text-tt-text-secondary text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            No more lunchbox battles. No more wasted food. Just happy kids who actually look forward to lunchtime.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-all cursor-pointer border border-gray-100"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-tt-text">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            data-lenis-prevent
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-12 md:px-16"
          >
            {kidsItems.map((item, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-[300px] md:w-[380px] snap-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-sm bg-white group border border-gray-100">
                  <div className="relative w-full h-[220px] md:h-[280px] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 300px, 380px"
                    />
                    {/* Quote bubble */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                      <p className="font-display font-bold text-tt-orange text-xs md:text-sm">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-display font-bold text-tt-text text-sm md:text-base">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-all cursor-pointer border border-gray-100"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-tt-text">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {kidsItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-tt-orange scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
