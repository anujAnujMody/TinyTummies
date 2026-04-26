"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/islands/ScrollReveal";
import Button from "@/components/ui/Button";

interface Plan {
  id: string;
  name: string;
  subName: string;
  price: string;
  originalPrice: string;
  period: string;
  pricePerMeal: string;
  description: string;
  features: string[];
  launchTag: string;
  theme: "green" | "orange";
}

interface ThemeStyle {
  topBorder: string;
  price: string;
  launchBg: string;
  launchText: string;
  featureIcon: string;
  cta: "ghost" | "glow-orange";
  ctaClass: string;
}

const themeStyles: Record<string, ThemeStyle> = {
  green: {
    topBorder: "border-t-4 border-tt-green",
    price: "text-tt-green",
    launchBg: "bg-tt-green-tint",
    launchText: "text-tt-green-deep",
    featureIcon: "bg-tt-green/10 text-tt-green",
    cta: "ghost",
    ctaClass: "border-tt-green text-tt-green hover:bg-tt-green hover:text-white",
  },
  orange: {
    topBorder: "border-t-4 border-tt-orange",
    price: "text-tt-orange",
    launchBg: "bg-tt-orange-tint",
    launchText: "text-tt-orange-dark",
    featureIcon: "bg-tt-orange/10 text-tt-orange",
    cta: "glow-orange",
    ctaClass: "",
  },
};

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    subName: "Munch Plan",
    price: "599",
    originalPrice: "665",
    period: "week",
    pricePerMeal: "120",
    description: "5 days of fresh fruit & veggie servings. Perfect for trying us out.",
    features: [
      "5 days of fruit & veggie servings",
      "Fresh & high quality produce",
      "Flexible scheduling",
      "Cancel anytime",
    ],
    launchTag: "Limited Early Bird Access",
    theme: "green",
  },
  {
    id: "growth",
    name: "Growth",
    subName: "Munch Plan",
    price: "1,499",
    originalPrice: "1,665",
    period: "month",
    pricePerMeal: "68",
    description: "20-22 days of daily curated fruits & veggies. Full month coverage with consistent nutrition.",
    features: [
      "20-22 days monthly",
      "Daily curated fruits & veggies",
      "Priority delivery",
      "Daily variety — no boredom",
      "Free surprise treat on Fridays",
    ],
    launchTag: "First 50 Subscribers",
    theme: "orange",
  },
];

const trustSignals = [
  "Cancel anytime",
  "No hidden fees",
  "Prepared fresh daily",
  "Delivered safely to school",
];

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const theme = themeStyles[plan.theme];
  const isGrowth = plan.id === "growth";

  return (
    <ScrollReveal key={plan.id} delay={index * 0.12}>
      <div
        className={`h-full flex flex-col relative rounded-2xl bg-white overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${theme.topBorder} ${
          isGrowth ? "md:scale-[1.02]" : ""
        }`}
      >
        {isGrowth && (
          <div className="absolute top-0 right-0 z-10">
            <div className="bg-tt-orange text-white font-display font-bold text-[10px] px-3 py-1 rounded-bl-xl shadow-sm">
              MOST POPULAR
            </div>
          </div>
        )}

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-baseline gap-2 mb-1">
            <h3 className="font-display text-xl font-extrabold text-tt-green-deep">
              {plan.name}
            </h3>
            <span className="font-display text-sm font-bold text-tt-text-secondary">
              {plan.subName}
            </span>
          </div>

          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-tt-text-secondary/50 line-through text-lg font-display">
              {plan.originalPrice}
            </span>
            <span className={`font-display text-4xl font-extrabold ${theme.price}`}>
              {plan.price}
            </span>
            <span className="text-tt-text-secondary text-sm font-display font-semibold">
              /{plan.period}
            </span>
          </div>
          <p className="text-xs text-tt-text-secondary/70 font-display">
            ~{plan.pricePerMeal}/meal {isGrowth && "· 43% less!"}
          </p>

          <div className={`mt-2 inline-flex items-center rounded-lg px-2.5 py-1.5 text-[10px] font-bold ${theme.launchBg} ${theme.launchText} w-fit`}>
            10% OFF — {plan.launchTag}
          </div>

          <p className="mt-2 text-xs text-tt-text-secondary leading-relaxed">
            {plan.description}
          </p>

          <ul className="mt-3 space-y-1.5 flex-grow">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs">
                <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${theme.featureIcon}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-tt-text-secondary">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSegxxacmX0Udhjpdl_7lcsMVtiVaudhonyVKcfnNwJ9j4-tTA/viewform"
              variant={theme.cta}
              size="md"
              className={`w-full justify-center ${theme.ctaClass}`}
            >
              {isGrowth ? "Register Now — Best Value" : "Register Now"}
            </Button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative h-[100svh] flex flex-col justify-center overflow-hidden bg-tt-cream"
    >
      {/* Navbar spacer */}
      <div className="h-14 md:h-16 shrink-0" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8 w-full">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 bg-tt-orange text-white font-display font-bold text-xs px-3 py-1.5 rounded-full shadow-md mb-3">
              LAUNCH OFFER — First 50 Subscribers Only
            </div>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-tt-green-deep">
              Two Plans. <span className="text-tt-orange">Healthy Habits.</span> Happy Tummies.
            </h2>
          </div>
        </ScrollReveal>

        <motion.div
          className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2 items-start"
          style={{ y: cardsY }}
        >
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </motion.div>

        <ScrollReveal delay={0.3}>
          <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1.5">
            {trustSignals.map((signal) => (
              <span key={signal} className="text-xs text-tt-green-deep/80 font-display font-semibold flex items-center gap-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-tt-green">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {signal}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-4 text-center">
            <p className="font-display text-lg md:text-xl font-extrabold text-tt-green-deep">
              Small Bites Today, <span className="text-tt-orange">Stronger Tomorrow!</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
