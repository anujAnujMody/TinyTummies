"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const trustPills = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    text: "5 Days/Week",
    bg: "bg-tt-sky/15",
    border: "border-tt-sky/25",
    iconC: "text-tt-sky",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.67-13 4.67-2.35.93-5.07 3.2-5 5.33.06 1.62.93 3 2 4 2.67 2.67 5.33 1.67 7-1" />
      </svg>
    ),
    text: "100% Vegetarian",
    bg: "bg-tt-lime/15",
    border: "border-tt-lime/25",
    iconC: "text-tt-lime",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9h1" />
        <path d="M9 13h1" />
        <path d="M9 17h1" />
      </svg>
    ),
    text: "School Delivery",
    bg: "bg-tt-sunny/15",
    border: "border-tt-sunny/25",
    iconC: "text-tt-sunny-dark",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    text: "Kid-Approved",
    bg: "bg-tt-bubblegum/15",
    border: "border-tt-bubblegum/25",
    iconC: "text-tt-bubblegum",
  },
];

const bannerItems = [
  { icon: "📅", text: "5 Days a Week" },
  { icon: "🥬", text: "100% Vegetarian" },
  { icon: "🏫", text: "School Delivery" },
  { icon: "👨‍🍳", text: "Chef-Prepared Fresh" },
  { icon: "😊", text: "Kid-Approved" },
  { icon: "🌿", text: "No Preservatives" },
  { icon: "📦", text: "Eco Packaging" },
  { icon: "💚", text: "Balanced Nutrition" },
];

const marqueeItems = Array.from({ length: 2 }, () => bannerItems).flat();

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mascotY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] flex flex-col overflow-hidden bg-tt-warm"
    >
      {/* Background gradient blob behind mascot */}
      <motion.div
        className="absolute top-[5%] right-[3%] w-[450px] h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] rounded-full pointer-events-none bg-tt-sunny/10 blur-3xl"
        style={{ y: blobY }}
      />

      {/* Accent blob top-left */}
      <motion.div
        className="absolute top-[12%] left-[6%] w-[150px] h-[150px] rounded-full pointer-events-none bg-tt-lime/10 blur-2xl"
        style={{ y: blobY }}
      />

      <div className="relative z-10 w-full flex flex-col h-full">
        {/* Navbar spacer */}
        <div className="h-14 md:h-16 shrink-0" />

        {/* Main two-column layout */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 min-h-0 py-2 md:py-0 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
          {/* LEFT: Text content */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left md:w-[52%] lg:w-[50%] shrink-0 md:pl-4 lg:pl-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h1 className="font-display font-extrabold leading-[1.08] tracking-tight text-tt-green-deep">
                <span className="block text-2xl sm:text-3xl md:text-[2.4rem] lg:text-[3rem]">Struggling to Make</span>
                <span className="block text-2xl sm:text-3xl md:text-[2.4rem] lg:text-[3rem]">Your Child Eat</span>
                <span className="block text-2xl sm:text-3xl md:text-[2.4rem] lg:text-[3rem] text-tt-orange">Healthy?</span>
              </h1>
            </motion.div>

            {/* Agitation */}
            <motion.div variants={fadeUp}>
              <p className="mt-2 md:mt-3 text-tt-text-secondary font-body text-sm md:text-[0.95rem] max-w-lg leading-relaxed">
                Every morning, the same battle. Wasted food. Guilt. Stress.
              </p>
            </motion.div>

            {/* Solution badge */}
            <motion.div variants={fadeUp}>
              <div className="mt-2 md:mt-3 inline-flex items-center gap-2 bg-gradient-to-r from-tt-green to-tt-lime text-white font-display font-bold text-xs md:text-sm px-4 py-1.5 rounded-full shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Tiny Tummies Makes Healthy Fun
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeUp}>
              <p className="mt-2 md:mt-3 text-tt-green-dark/70 font-body text-sm md:text-[0.95rem] max-w-lg leading-relaxed">
                Fresh, balanced vegetarian meals delivered to school — Monday to Saturday.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp}>
              <div className="mt-3 md:mt-4 flex flex-col sm:flex-row items-center md:items-start gap-2.5">
                <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLSegxxacmX0Udhjpdl_7lcsMVtiVaudhonyVKcfnNwJ9j4-tTA/viewform"
                  variant="gradient-cta"
                  size="lg"
                  className="text-sm md:text-base px-6 md:px-7 py-2.5"
                >
                  Get Started — Free Trial
                </Button>
                <Button
                  href="https://wa.me/917975465679"
                  variant="gradient-green"
                  size="lg"
                  className="text-sm md:text-base px-6 md:px-7 py-2.5"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>

            {/* Trust pills */}
            <motion.div variants={fadeUp}>
              <div className="mt-3 md:mt-4 flex flex-wrap items-center justify-center md:justify-start gap-1.5">
                {trustPills.map((pill, i) => (
                  <motion.div
                    key={pill.text}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.07, type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex items-center gap-1 ${pill.bg} ${pill.border} rounded-full px-2.5 py-1 shadow-sm border cursor-default`}
                  >
                    <span className={pill.iconC}>{pill.icon}</span>
                    <span className="font-display font-semibold text-[11px] whitespace-nowrap text-tt-green-deep/70">
                      {pill.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Mascot */}
          <motion.div
            className="relative flex items-center justify-center shrink-0 md:w-[48%] lg:w-[50%]"
            style={{ y: mascotY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <div className="relative">
              {/* Glow behind mascot */}
              <div className="absolute inset-[-15%] bg-gradient-to-br from-tt-sunny/20 via-tt-bubblegum/12 to-tt-sky/10 blur-2xl rounded-full" />
              {/* Mascot image */}
              <div className="relative animate-float">
                <Image
                  src="/images/panda-bento.png"
                  alt="Tiny Tummies mascot with healthy bento meal"
                  width={480}
                  height={480}
                  className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[440px] lg:h-[440px] drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scrolling trust banner - full width, inside 100vh */}
        <motion.div
          className="shrink-0 w-full py-2.5 md:py-3 bg-gradient-to-r from-tt-green/5 via-tt-sunny/5 to-tt-bubblegum/5 border-t border-tt-green/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="flex overflow-hidden px-4 md:px-8">
            <motion.div
              className="flex items-center gap-6 md:gap-10"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {marqueeItems.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 shrink-0">
                  <span className="text-base md:text-lg">{item.icon}</span>
                  <span className="font-display font-semibold text-xs md:text-sm text-tt-green-deep/60 whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
