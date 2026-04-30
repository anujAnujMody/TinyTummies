"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Plan {
  id: string;
  name: string;
  subName: string;
  price: string;
  originalPrice: string;
  period: string;
  pricePerMeal: string;
  features: string[];
  isPopular: boolean;
  iconColor: string;
  accentColor: string;
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    subName: "Munch Plan",
    price: "599",
    originalPrice: "665",
    period: "week",
    pricePerMeal: "120",
    features: [
      "5 days of fruit & veggie servings",
      "Fresh & high quality produce",
      "Flexible scheduling",
      "Cancel anytime",
    ],
    isPopular: false,
    iconColor: "text-tt-green",
    accentColor: "bg-tt-green",
  },
  {
    id: "growth",
    name: "Growth",
    subName: "Munch Plan",
    price: "1,499",
    originalPrice: "1,665",
    period: "month",
    pricePerMeal: "68",
    features: [
      "20-22 days monthly coverage",
      "Daily curated fruits & veggies",
      "Priority delivery to school",
      "Daily variety — no boredom",
      "Free surprise treat on Fridays",
    ],
    isPopular: true,
    iconColor: "text-tt-orange",
    accentColor: "bg-tt-orange",
  },
];

const trustSignals = [
  { text: "Cancel anytime" },
  { text: "No hidden fees" },
  { text: "Prepared fresh daily" },
  { text: "Delivered safely to school" },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative h-[100svh] pt-16 md:pt-20 scroll-mt-16 md:scroll-mt-20 flex flex-col bg-tt-warm"
    >
      <div className="relative z-10 mx-auto max-w-[1000px] px-4 md:px-6 w-full flex-1 flex flex-col justify-between py-6 md:py-8">
        
        {/* Header */}
        <motion.div
          className="text-center shrink-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-extrabold text-tt-green-deep leading-tight">
            Two Plans. <span className="text-tt-orange">Healthy Habits.</span> Happy Tummies.
          </h2>
        </motion.div>

        {/* Pricing Cards - fill available space */}
        <motion.div
          className="flex-1 flex items-center min-h-0 py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full grid gap-4 md:gap-6 md:grid-cols-2 items-stretch h-full">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl bg-tt-green-tint/30 overflow-hidden hover:bg-tt-green-tint/50 transition-all duration-300 h-full ${
                  plan.isPopular ? "ring-2 ring-tt-orange/30" : ""
                }`}
              >
                {/* Popular badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-tt-orange text-white font-display font-bold text-[10px] px-3 py-1 rounded-bl-xl flex items-center gap-1">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Top accent */}
                <div className={`h-1.5 ${plan.accentColor} shrink-0`} />

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  {/* Plan name */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-display text-xl md:text-2xl font-extrabold text-tt-green-deep">
                      {plan.name}
                    </h3>
                    <span className="font-display text-sm font-bold text-tt-text-secondary">
                      {plan.subName}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-tt-text-secondary/40 line-through text-base font-display">
                      ₹{plan.originalPrice}
                    </span>
                    <span className={`font-display text-4xl md:text-5xl font-extrabold ${plan.isPopular ? "text-tt-orange" : "text-tt-green"}`}>
                      ₹{plan.price}
                    </span>
                    <span className="text-tt-text-secondary text-sm font-display">
                      /{plan.period}
                    </span>
                  </div>

                  {/* Per meal */}
                  <span className="text-sm text-tt-text-secondary/70 font-display mb-4">
                    ~₹{plan.pricePerMeal}/meal
                  </span>

                  {/* Features - grow to fill space */}
                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tt-green-tint ${plan.iconColor}`}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        <span className="text-sm md:text-base text-tt-text-secondary leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-5">
                    <Button
                      href="https://docs.google.com/forms/d/e/1FAIpQLSegxxacmX0Udhjpdl_7lcsMVtiVaudhonyVKcfnNwJ9j4-tTA/viewform"
                      variant={plan.isPopular ? "default" : "outline"}
                      size="lg"
                      className="w-full justify-center"
                    >
                      {plan.isPopular ? "Register — Best Value" : "Register Now"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust signals - bottom */}
        <motion.div
          className="shrink-0 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {trustSignals.map((signal) => (
              <span key={signal.text} className="text-sm text-tt-green-deep/80 font-display font-semibold flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-tt-green">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {signal.text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
