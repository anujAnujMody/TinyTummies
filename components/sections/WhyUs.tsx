"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/islands/ScrollReveal";

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22c4.97 0 9-4.03 9-9-4.5 0-9 4.5-9 9z" />
        <path d="M12 22c-4.97 0-9-4.03-9-9 4.5 0 9 4.5 9 9z" />
        <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      </svg>
    ),
    title: "Fresh & High Quality",
    description: "Every serving is prepared from fresh, seasonal fruits and vegetables — never frozen, never processed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Hygienic & Safe",
    description: "Prepared in certified kitchens with strict hygiene standards. Safe for little hands and tummies.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Kids Actually Eat",
    description: "Kid-approved flavors and fun presentation mean less waste and happier lunch breaks.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Daily Variety",
    description: "A rotating weekly menu so your child never sees the same meal twice. Excitement every day.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Saves Time",
    description: "No more morning rush. Reclaim 30-45 minutes while your child gets a nutritious meal at school.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Builds Healthy Habits",
    description: "When healthy food is fun and familiar, children develop eating habits that last a lifetime.",
  },
];

const steps = [
  {
    num: "01",
    title: "Choose Your Plan",
    description: "Pick Starter or Growth. Flexible, no lock-in.",
  },
  {
    num: "02",
    title: "We Cook & Deliver",
    description: "Fresh meals prepared daily and delivered to school before lunch.",
  },
  {
    num: "03",
    title: "Your Child Enjoys",
    description: "Nutritious, tasty meals they actually look forward to.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="why"
      className="relative h-[100svh] flex flex-col justify-center overflow-hidden bg-tt-cream"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-tt-green/3 rounded-full blur-3xl pointer-events-none"
        style={{ y: bgY }}
      />

      {/* Navbar spacer */}
      <div className="h-14 md:h-16 shrink-0" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8 w-full">
        {/* Benefits */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <p className="font-display text-sm font-bold tracking-widest text-tt-orange uppercase mb-2">
              Why Parents Love Us
            </p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-tt-green-deep">
              Fresh Meals. <span className="text-tt-orange">Zero Stress.</span> Happy Kids.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.06}>
              <div className="h-full flex flex-col items-center text-center rounded-xl bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-tt-green/10 text-tt-green">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-sm font-bold text-tt-green-deep leading-tight">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-tt-text-secondary leading-relaxed flex-grow text-xs">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-8 md:mt-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
              <p className="font-display text-sm font-bold tracking-widest text-tt-orange uppercase mb-2">
                How It Works
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-tt-green-deep">
                Three Simple <span className="text-tt-orange">Steps</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="h-full flex flex-col items-center text-center rounded-xl bg-white p-5 shadow-sm">
                  <span className="font-display text-4xl font-extrabold text-tt-green/10 select-none leading-none mb-1">
                    {step.num}
                  </span>
                  <h3 className="font-display text-base font-bold text-tt-green-deep mt-1">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-tt-text-secondary leading-relaxed flex-grow text-xs">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
