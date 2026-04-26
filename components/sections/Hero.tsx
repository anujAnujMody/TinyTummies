"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/islands/ScrollReveal";
import Button from "@/components/ui/Button";

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

function TrustPills() {
  return (
    <div className="mt-4 md:mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2">
      {trustPills.map((pill) => (
        <div
          key={pill.text}
          className="flex items-center gap-1.5 bg-white/90 rounded-full px-3 py-1.5 shadow-sm border border-tt-green/10 cursor-default"
        >
          <span className="text-tt-green shrink-0">{pill.icon}</span>
          <span className="text-tt-green-deep font-display font-semibold text-xs whitespace-nowrap">
            {pill.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mascotY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] flex flex-col overflow-hidden bg-[linear-gradient(135deg,#FFF8E7_0%,#FFEFC2_50%,#FFF4CC_100%)]"
    >
      {/* Parallax background blob */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-tt-green/5 rounded-full blur-3xl pointer-events-none"
        style={{ y: bgY }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-tt-orange/5 rounded-full blur-3xl pointer-events-none"
        style={{ y: bgY }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8 w-full flex flex-col h-full">
        {/* Navbar spacer */}
        <div className="h-14 md:h-16 shrink-0" />

        {/* Main hero content */}
        <div className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-12 min-h-0 py-4 md:py-0">
          {/* Left — Text content with parallax */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left md:w-[55%] lg:w-[52%] shrink-0 z-10"
            style={{ y: textY }}
          >
            <ScrollReveal delay={0}>
              <h1 className="font-display font-extrabold leading-[1.08] tracking-tight text-tt-green-deep">
                <span className="block text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.4rem]">Struggling to Make</span>
                <span className="block text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.4rem]">Your Child Eat</span>
                <span className="block text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.4rem] text-tt-orange">Healthy?</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-3 md:mt-4 inline-flex items-center gap-2 bg-tt-orange text-white font-display font-bold text-xs md:text-sm px-4 py-2 rounded-full shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                We&apos;ve got it covered!
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-3 md:mt-4 text-tt-green-dark/80 font-body text-sm md:text-base max-w-md leading-relaxed">
                Fresh, balanced vegetarian meals delivered to school — Monday to Saturday. No more morning stress, no more wasted food.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-4 md:mt-5 flex flex-col sm:flex-row items-center md:items-start gap-3">
                <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLSegxxacmX0Udhjpdl_7lcsMVtiVaudhonyVKcfnNwJ9j4-tTA/viewform"
                  variant="glow-orange"
                  size="lg"
                  className="text-sm md:text-base px-6 md:px-8 py-3"
                >
                  Get Started — Free Trial
                </Button>
                <Button
                  href="https://wa.me/917975465679"
                  variant="whatsapp"
                  size="lg"
                  className="text-sm md:text-base px-6 md:px-8 py-3"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <TrustPills />
            </ScrollReveal>
          </motion.div>

          {/* Right — Mascot visual with parallax */}
          <motion.div
            className="relative flex items-center justify-center shrink-0 md:w-[45%] lg:w-[48%]"
            style={{ y: mascotY }}
          >
            <ScrollReveal delay={0.15} direction="right" duration={0.8}>
              <div className="relative">
                <div className="absolute inset-0 bg-tt-green/8 blur-3xl rounded-full scale-110 pointer-events-none" />
                <div className="relative animate-float" style={{ animationDuration: '6s' }}>
                  <Image
                    src="/images/panda-bento.png"
                    alt="Tiny Tummies mascot with healthy bento meal"
                    width={400}
                    height={400}
                    className="object-contain w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] drop-shadow-xl"
                    priority
                  />
                </div>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
