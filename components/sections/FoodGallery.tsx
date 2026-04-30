"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "fruits", label: "Fresh Fruits", emoji: "🍎" },
  { id: "meals", label: "Daily Meals", emoji: "🍱" },
  { id: "snacks", label: "Fun Snacks", emoji: "🥪" },
];

const galleryItems: Record<string, { src: string; alt: string; caption: string }[]> = {
  fruits: [
    { src: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&h=400&fit=crop", alt: "Fresh watermelon slices", caption: "Juicy watermelon cubes" },
    { src: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=400&fit=crop", alt: "Mixed berries bowl", caption: "Berry power bowls" },
    { src: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=400&fit=crop", alt: "Fresh banana bunch", caption: "Banana bites" },
    { src: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&h=400&fit=crop", alt: "Orange slices", caption: "Vitamin C boost" },
    { src: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&h=400&fit=crop", alt: "Apple slices", caption: "Crisp apple wedges" },
    { src: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&h=400&fit=crop", alt: "Mango pieces", caption: "Tropical mango" },
  ],
  meals: [
    { src: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&h=400&fit=crop", alt: "Colorful idli plate", caption: "Soft mini idlis" },
    { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop", alt: "Fresh dosa", caption: "Mini dosa delight" },
    { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop", alt: "Healthy lunch bowl", caption: "Balanced lunch bowls" },
    { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop", alt: "Fresh salad", caption: "Rainbow salads" },
    { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop", alt: "Colorful veggie plate", caption: "Veggie power plates" },
    { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop", alt: "Pancake stack", caption: "Weekend treats" },
  ],
  snacks: [
    { src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=400&fit=crop", alt: "Veggie sandwich", caption: "Veggie sandwiches" },
    { src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop", alt: "Cookie treats", caption: "Healthy cookie bites" },
    { src: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=400&fit=crop", alt: "Cracker snacks", caption: "Crunchy crackers" },
    { src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop", alt: "Trail mix", caption: "Trail mix energy" },
    { src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop", alt: "Fruit muffins", caption: "Fruit muffins" },
    { src: "https://images.unsplash.com/photo-1587668178277-27666e48b809?w=600&h=400&fit=crop", alt: "Yogurt parfait", caption: "Yogurt parfaits" },
  ],
};

export default function FoodGallery() {
  const [activeTab, setActiveTab] = useState("fruits");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const items = galleryItems[activeTab];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentIndex(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

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
      ? (currentIndex - 1 + items.length) % items.length
      : (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="food" className="relative py-16 md:py-24 bg-tt-warm">
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
            Food Experience
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-tt-text leading-tight">
            Meals That Make <span className="text-tt-orange">Little Faces</span> Light Up
          </h2>
          <p className="mt-3 text-tt-text-secondary text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Every plate is a colorful adventure. Fresh ingredients, fun presentation, zero compromise on nutrition.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 md:gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-xl font-display font-bold text-sm transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-tt-green text-white shadow-sm scale-105"
                  : "bg-white text-tt-text-secondary hover:bg-tt-green-tint shadow-sm"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

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
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <motion.div
                  key={`${activeTab}-${i}`}
                  className="flex-shrink-0 w-[280px] md:w-[340px] snap-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: i === currentIndex ? 1 : 0.7,
                    scale: i === currentIndex ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-sm bg-white group border border-gray-100">
                    <div className="relative w-full h-[200px] md:h-[240px] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 280px, 340px"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-display font-bold text-tt-text text-sm md:text-base">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
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
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-tt-green scale-125"
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
