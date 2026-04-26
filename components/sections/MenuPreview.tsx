"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/islands/ScrollReveal";

const menuDays = [
  {
    id: "monday",
    day: "Mon",
    dayFull: "Monday",
    theme: "Mini Munch",
    items: ["Soft Mini Idlis + Chutney", "Juicy Watermelon Cubes"],
    tags: ["Vegetarian", "Nut-Free"],
    color: "green",
  },
  {
    id: "tuesday",
    day: "Tue",
    dayFull: "Tuesday",
    theme: "Energy Boost",
    items: ["Poha / Semiya Upma", "Sweet Corn Crunch Salad", "Tropical Fruit"],
    tags: ["Vegetarian", "High-Protein"],
    color: "orange",
  },
  {
    id: "wednesday",
    day: "Wed",
    dayFull: "Wednesday",
    theme: "Power Pocket",
    items: ["Aloo Paratha Pockets", "Fresh Curd", "Banana Bites"],
    tags: ["Vegetarian", "Kid-Favorite"],
    color: "pink",
  },
  {
    id: "thursday",
    day: "Thu",
    dayFull: "Thursday",
    theme: "Dosa Delight",
    items: ["Mini Dosas + Chutney", "Seasonal Fruit"],
    tags: ["Vegetarian", "Nut-Free"],
    color: "blue",
  },
  {
    id: "friday",
    day: "Fri",
    dayFull: "Friday",
    theme: "Desi Lunch",
    items: ["Lemon Rice", "Sprouts Mix", "Cucumber & Carrot Salad"],
    tags: ["Vegetarian", "Nut-Free"],
    color: "yellow",
  },
  {
    id: "saturday",
    day: "Sat",
    dayFull: "Saturday",
    theme: "Treat Day",
    items: ["Veg Sandwich", "Ketchup Dip"],
    tags: ["Vegetarian", "Kid-Favorite"],
    color: "green",
  },
];

const colorMap: Record<string, { dot: string; bg: string; text: string; border: string }> = {
  green: { dot: "bg-tt-green", bg: "bg-tt-green-tint", text: "text-tt-green-deep", border: "border-tt-green/20" },
  orange: { dot: "bg-tt-orange", bg: "bg-tt-orange-tint", text: "text-tt-orange-dark", border: "border-tt-orange/20" },
  pink: { dot: "bg-tt-pink", bg: "bg-tt-pink-tint", text: "text-tt-pink-dark", border: "border-tt-pink/20" },
  blue: { dot: "bg-tt-blue", bg: "bg-tt-blue-tint", text: "text-tt-blue-dark", border: "border-tt-blue/20" },
  yellow: { dot: "bg-tt-yellow", bg: "bg-tt-yellow/15", text: "text-tt-yellow-dark", border: "border-tt-yellow/20" },
};

const tagStyles: Record<string, string> = {
  "Vegetarian": "bg-tt-green/10 text-tt-green-deep",
  "Nut-Free": "bg-tt-blue/10 text-tt-blue-dark",
  "High-Protein": "bg-tt-orange/10 text-tt-orange-dark",
  "Kid-Favorite": "bg-tt-pink/10 text-tt-pink-dark",
};

export default function MenuPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="relative h-[100svh] flex flex-col justify-center overflow-hidden bg-tt-cream"
    >
      {/* Navbar spacer */}
      <div className="h-14 md:h-16 shrink-0" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8 w-full">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
            <p className="font-display text-sm font-bold tracking-widest text-tt-orange uppercase mb-2">
              Weekly Menu
            </p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-tt-green-deep">
              What&apos;s on the Menu <span className="text-tt-orange">This Week</span>
            </h2>
            <p className="mt-2 text-tt-text-secondary leading-relaxed text-sm">
              A different meal every day — so kids never get bored. Rotating weekly with seasonal produce.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: elegant 3x2 grid */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-4"
          style={{ y: cardsY }}
        >
          {menuDays.map((day, i) => {
            const c = colorMap[day.color];
            return (
              <ScrollReveal key={day.id} delay={i * 0.06}>
                <div className={`h-full flex flex-col rounded-xl bg-white p-4 shadow-sm border ${c.border} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-tt-text-secondary">
                      {day.dayFull}
                    </span>
                    <span className="ml-auto font-display text-sm font-bold text-tt-green-deep">
                      {day.theme}
                    </span>
                  </div>

                  <div className="space-y-1.5 mb-3 flex-grow">
                    {day.items.map((item) => (
                      <div key={item} className={`flex items-center rounded-lg px-3 py-1.5 ${c.bg}`}>
                        <span className={`font-display font-semibold text-sm ${c.text}`}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {day.tags.map((tag) => (
                      <span key={tag} className={`text-[10px] font-display font-semibold px-2 py-0.5 rounded-full ${tagStyles[tag] || "bg-tt-green/10 text-tt-green-deep"}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </motion.div>

        {/* Mobile: horizontal swipe */}
        <div
          className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
        >
          {menuDays.map((day) => {
            const c = colorMap[day.color];
            return (
              <div
                key={day.id}
                className={`flex-shrink-0 w-[85vw] max-w-[320px] snap-center flex flex-col rounded-xl bg-white p-4 shadow-sm border ${c.border}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-tt-text-secondary">
                    {day.dayFull}
                  </span>
                  <span className="ml-auto font-display text-sm font-bold text-tt-green-deep">
                    {day.theme}
                  </span>
                </div>

                <div className="space-y-1.5 mb-3 flex-grow">
                  {day.items.map((item) => (
                    <div key={item} className={`flex items-center rounded-lg px-3 py-1.5 ${c.bg}`}>
                      <span className={`font-display font-semibold text-sm ${c.text}`}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {day.tags.map((tag) => (
                    <span key={tag} className={`text-[10px] font-display font-semibold px-2 py-0.5 rounded-full ${tagStyles[tag] || "bg-tt-green/10 text-tt-green-deep"}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
