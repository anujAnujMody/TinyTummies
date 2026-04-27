"use client";

import { motion } from "framer-motion";

const trustItems = [
  { icon: "📅", text: "5 Days a Week Delivery" },
  { icon: "🥬", text: "100% Vegetarian Meals" },
  { icon: "🏫", text: "Delivered to School" },
  { icon: "👨‍🍳", text: "Chef-Prepared Fresh Daily" },
  { icon: "😊", text: "Kid-Approved Taste" },
  { icon: "🌿", text: "No Preservatives" },
  { icon: "📦", text: "Eco-Friendly Packaging" },
  { icon: "💚", text: "Balanced Nutrition" },
];

export default function TrustBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-tt-green/5 via-tt-sunny/5 to-tt-bubblegum/5 py-4 md:py-5 border-y border-tt-green/10">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-8 md:gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...trustItems, ...trustItems].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 shrink-0"
            >
              <span className="text-lg md:text-xl">{item.icon}</span>
              <span className="font-display font-semibold text-sm md:text-base text-tt-green-deep/70">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
