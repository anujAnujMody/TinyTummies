"use client";

import { motion } from "framer-motion";
import menuData from "@/data/menu.json";

const dayIcons: Record<string, string> = {
  Monday: "🍚",
  Tuesday: "🌾",
  Wednesday: "🥔",
  Thursday: "🫓",
  Friday: "🍋",
  Saturday: "🥪",
};

export default function Menu() {
  return (
    <section id="menu" className="relative h-[100svh] pt-16 md:pt-20 scroll-mt-16 md:scroll-mt-20 flex flex-col bg-tt-warm">
      <div className="relative z-10 mx-auto max-w-[1000px] px-4 md:px-6 w-full flex-1 flex flex-col justify-between py-6 md:py-8">
        
        {/* Header */}
        <motion.div
          className="text-center shrink-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block font-display font-bold text-xs tracking-widest uppercase text-tt-orange mb-2">
            Weekly Menu
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-tt-text">
            What&apos;s Cooking This Week?
          </h2>
        </motion.div>

        {/* Menu Grid - fill space */}
        <motion.div
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 items-center min-h-0 py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          {menuData.menu.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="flex flex-col rounded-xl bg-tt-green-tint/30 p-4 md:p-5 hover:bg-tt-green-tint/50 transition-all duration-300 h-full justify-center"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{dayIcons[item.day]}</span>
                <div>
                  <span className="font-display font-bold text-xs text-tt-text-secondary uppercase tracking-wider">
                    {item.day}
                  </span>
                  <span className="block font-display font-bold text-sm text-tt-text">
                    {item.theme}
                  </span>
                </div>
              </div>
              
              <h3 className="font-display font-bold text-base md:text-lg text-tt-text mb-2">
                {item.name}
              </h3>
              
              <p className="text-tt-text-secondary text-sm leading-relaxed mb-3">
                {item.kidDescription}
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center font-display font-semibold text-[10px] px-2 py-0.5 rounded-full bg-tt-green-tint text-tt-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
