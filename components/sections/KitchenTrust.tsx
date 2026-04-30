"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const trustBadges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Certified Kitchen",
    desc: "FSSAI licensed, regular inspections",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22c4.97 0 9-4.03 9-9-4.5 0-9 4.5-9 9z" />
        <path d="M12 22c-4.97 0-9-4.03-9-9 4.5 0 9 4.5 9 9z" />
        <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      </svg>
    ),
    title: "Fresh Daily",
    desc: "Cooked same morning, never frozen",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.67-13 4.67-2.35.93-5.07 3.2-5 5.33.06 1.62.93 3 2 4 2.67 2.67 5.33 1.67 7-1" />
      </svg>
    ),
    title: "100% Vegetarian",
    desc: "Pure veg, no cross-contamination",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Temperature Controlled",
    desc: "Hot food stays hot, cold stays cold",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "No Preservatives",
    desc: "Zero chemicals, zero shortcuts",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M4 10c0 5 3.5 9 8 9s8-4 8-9" />
        <path d="M4 10h16" />
        <path d="M8 6c1.5-1.5 3.5-2 4-2s2.5.5 4 2" />
      </svg>
    ),
    title: "Eco Packaging",
    desc: "Biodegradable, food-safe containers",
  },
];

export default function KitchenTrust() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="kitchen" className="relative h-[100svh] pt-16 md:pt-20 scroll-mt-16 md:scroll-mt-20 flex flex-col overflow-hidden bg-tt-warm">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 w-full flex-1 flex flex-col justify-between py-6 md:py-8">
        
        {/* Header */}
        <motion.div
          className="text-center shrink-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-display text-xs font-bold tracking-widest text-tt-orange uppercase mb-2">
            Hygiene & Kitchen
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-tt-green-deep leading-tight">
            Where <span className="text-tt-green">Care</span> Meets Clean
          </h2>
        </motion.div>

        {/* Video + Badges - fill space */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6 min-h-0 py-4">
          
          {/* Video Placeholder */}
          <motion.div
            className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-tt-gray flex-1 min-h-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=675&fit=crop"
                alt="Clean professional kitchen with fresh ingredients"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              {/* Play button overlay */}
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer"
                  aria-label="Play kitchen video"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-tt-green ml-1">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </button>
              )}
              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                  <p className="text-white font-display font-bold text-lg">
                    Video placeholder — add your kitchen tour video here
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Trust Badges Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
          >
            {trustBadges.map((badge) => (
              <motion.div
                key={badge.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="flex flex-col items-center text-center p-4 md:p-5 rounded-2xl bg-tt-green-tint/30 hover:bg-tt-green-tint/50 transition-all duration-300"
              >
                <div className="mb-2 text-tt-green">{badge.icon}</div>
                <h3 className="font-display font-bold text-tt-green-deep text-sm md:text-base mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs md:text-sm text-tt-text-secondary leading-relaxed">
                  {badge.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
