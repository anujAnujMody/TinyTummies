"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.67-13 4.67-2.35.93-5.07 3.2-5 5.33.06 1.62.93 3 2 4 2.67 2.67 5.33 1.67 7-1" />
      </svg>
    ),
    text: "100% Vegetarian",
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
  },
];

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
  return (
    <section
      id="hero"
      className="relative h-[100svh] pt-16 md:pt-20 scroll-mt-16 md:scroll-mt-20 flex flex-col bg-tt-warm overflow-hidden"
    >
      <div className="relative z-10 w-full flex flex-col h-full">
        {/* Navbar spacer */}
        <div className="h-12 md:h-16 shrink-0" />

        {/* Main content - 50/50 split */}
        <div className="flex-1 flex flex-col md:flex-row relative min-h-0">
          
          {/* LEFT: Text - exactly 50% */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[40%] shrink-0 py-2 md:py-0 px-6 md:px-8 lg:px-12 justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Logo with gentle float animation */}
            <motion.div 
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -6, 0]
              }}
              transition={{ 
                scale: { type: "spring", stiffness: 200, damping: 15, delay: 0.1 },
                opacity: { duration: 0.4, delay: 0.1 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
              className="mb-2 md:mb-3"
            >
              <Image
                src="/images/logo-full.png"
                alt="Tiny Tummies"
                width={320}
                height={160}
                className="w-40 h-20 md:w-56 md:h-28 lg:w-72 lg:h-36 object-contain"
                priority
              />
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h1 className="font-display font-extrabold leading-[1.1] tracking-tight text-tt-text">
                <span className="block text-3xl sm:text-4xl md:text-[2.4rem] lg:text-[3rem]">Struggling to Make</span>
                <span className="block text-3xl sm:text-4xl md:text-[2.4rem] lg:text-[3rem]">Your Child Eat</span>
                <span className="block text-3xl sm:text-4xl md:text-[2.4rem] lg:text-[3rem] text-tt-orange">Healthy?</span>
              </h1>
            </motion.div>

            {/* Agitation */}
            <motion.div variants={fadeUp}>
              <p className="mt-2 md:mt-3 text-tt-text-secondary font-body text-sm md:text-base max-w-md leading-relaxed">
                Every morning, the same battle. Wasted food. Guilt. Stress. We make healthy eating the easiest part of your child&apos;s day.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp}>
              <div className="mt-3 md:mt-4 flex flex-col sm:flex-row items-center md:items-start gap-3">
                <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLSegxxacmX0Udhjpdl_7lcsMVtiVaudhonyVKcfnNwJ9j4-tTA/viewform"
                  variant="default"
                  size="lg"
                >
                  Get Started — Free Trial
                </Button>
                <Button
                  href="https://wa.me/917975465679"
                  variant="outline"
                  size="lg"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>

            {/* Trust pills - single row, compact */}
            <motion.div variants={fadeUp}>
              <div className="mt-3 md:mt-4 flex flex-nowrap items-center justify-center md:justify-start gap-1.5 md:gap-2">
                {trustPills.map((pill, i) => (
                  <motion.div
                    key={pill.text}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.07, type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-1 bg-tt-green-tint rounded-lg px-2 py-1 md:px-2.5 md:py-1.5 cursor-default shrink-0"
                  >
                    <span className="text-tt-green shrink-0">{pill.icon}</span>
                    <span className="font-display font-semibold text-[10px] md:text-[11px] whitespace-nowrap text-tt-text-secondary">
                      {pill.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Image - exactly 50%, bleeds to edge, seamless merge */}
          <motion.div
            className="hidden md:block absolute inset-y-0 left-[40%] right-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Image
              src="/images/hero-kid-eating.jpg"
              alt="Happy mother feeding her child a healthy meal"
              fill
              className="object-cover object-center"
              sizes="50vw"
              priority
            />
            
            {/* Left edge fade - merges image into warm background */}
            <div 
              className="absolute inset-y-0 left-0 w-32 lg:w-48"
              style={{
                background: "linear-gradient(to right, #F7F5F2 0%, #F7F5F2 30%, rgba(247,245,242,0.8) 60%, transparent 100%)"
              }}
            />
            
            {/* Bottom fade - merges into next section */}
            <div 
              className="absolute inset-x-0 bottom-0 h-24"
              style={{
                background: "linear-gradient(to top, #F7F5F2 0%, rgba(247,245,242,0.6) 40%, transparent 100%)"
              }}
            />

            {/* Quote overlay */}
            <motion.div
              className="absolute bottom-8 left-8 right-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <p className="font-display font-bold text-white text-lg text-center" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
                &ldquo;Happy kids, relieved parents&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Mobile image */}
          <motion.div
            className="md:hidden relative w-full h-56 mt-4 mx-4 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Image
              src="/images/hero-kid-eating.jpg"
              alt="Happy mother feeding her child a healthy meal"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
            <motion.div
              className="absolute bottom-4 left-4 right-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="font-display font-bold text-white text-sm text-center" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                &ldquo;Happy kids, relieved parents&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scrolling trust banner */}
        <motion.div
          className="shrink-0 w-full py-2 md:py-3 bg-tt-warm"
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
              {[...Array(2)].flatMap(() => [
                { icon: "📅", text: "5 Days a Week" },
                { icon: "🥬", text: "100% Vegetarian" },
                { icon: "🏫", text: "School Delivery" },
                { icon: "👨‍🍳", text: "Chef-Prepared Fresh" },
                { icon: "😊", text: "Kid-Approved" },
                { icon: "🌿", text: "No Preservatives" },
                { icon: "📦", text: "Eco Packaging" },
                { icon: "💚", text: "Balanced Nutrition" },
              ]).map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 shrink-0">
                  <span className="text-base md:text-lg">{item.icon}</span>
                  <span className="font-display font-semibold text-xs md:text-sm text-tt-text-secondary whitespace-nowrap">
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
