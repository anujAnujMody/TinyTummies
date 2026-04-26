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
  description: string;
  features: string[];
  launchTag: string;
  isPopular: boolean;
  gradient: string;
  borderColor: string;
  bgTint: string;
  iconColor: string;
  ctaVariant: string;
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
    description: "5 days of fresh fruit & veggie servings. Perfect for trying us out.",
    features: [
      "5 days of fruit & veggie servings",
      "Fresh & high quality produce",
      "Flexible scheduling",
      "Cancel anytime",
    ],
    launchTag: "Limited Early Bird Access",
    isPopular: false,
    gradient: "from-tt-green to-tt-lime",
    borderColor: "border-tt-green/20",
    bgTint: "bg-tt-green/5",
    iconColor: "text-tt-green",
    ctaVariant: "ghost",
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
    isPopular: true,
    gradient: "from-tt-orange via-tt-tomato to-tt-bubblegum",
    borderColor: "border-tt-orange/20",
    bgTint: "bg-tt-orange/5",
    iconColor: "text-tt-orange",
    ctaVariant: "gradient-cta",
  },
];

const trustSignals = [
  { icon: "✓", text: "Cancel anytime" },
  { icon: "✓", text: "No hidden fees" },
  { icon: "✓", text: "Prepared fresh daily" },
  { icon: "✓", text: "Delivered safely to school" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardSlideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const cardSlideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative h-[100svh] flex flex-col overflow-hidden bg-tt-warm"
    >
      {/* Background blob */}
      <div
        className="absolute top-[15%] left-[5%] w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(251,191,36,0.06) 0%, rgba(244,114,182,0.04) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1000px] px-4 md:px-6 w-full flex flex-col h-full">
        {/* Navbar spacer */}
        <div className="h-14 md:h-16 shrink-0" />

        {/* Header */}
        <motion.div
          className="text-center shrink-0 py-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-tt-orange to-tt-tomato text-white font-display font-bold text-xs px-4 py-1.5 rounded-full shadow-md mb-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            LAUNCH OFFER — First 50 Subscribers Only
          </div>
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-extrabold text-tt-green-deep leading-tight">
            Two Plans. <span className="text-tt-orange">Healthy Habits.</span> Happy Tummies.
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="flex-1 min-h-0 flex items-center py-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div 
            className="w-full grid gap-4 md:grid-cols-2 items-stretch"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                variants={i === 0 ? cardSlideIn : cardSlideInRight}
                className={`relative flex flex-col rounded-2xl bg-white shadow-lg border-2 ${plan.borderColor} overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full`}
              >
                {/* Popular badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-tt-orange to-tt-tomato text-white font-display font-bold text-[10px] px-4 py-1.5 rounded-bl-xl shadow-sm flex items-center gap-1">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Gradient top border */}
                <div className={`h-2 bg-gradient-to-r ${plan.gradient} shrink-0`} />

                <div className="p-5 flex flex-col flex-1">
                  {/* Plan name */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-display text-xl font-extrabold text-tt-green-deep">
                      {plan.name}
                    </h3>
                    <span className="font-display text-sm font-bold text-tt-text-secondary">
                      {plan.subName}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-tt-text-secondary/40 line-through text-lg font-display font-semibold">
                      ₹{plan.originalPrice}
                    </span>
                    <span className={`font-display text-5xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      ₹{plan.price}
                    </span>
                    <span className="text-tt-text-secondary text-sm font-display font-semibold">
                      /{plan.period}
                    </span>
                  </div>

                  {/* Per meal + savings */}
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-tt-text-secondary/70 font-display">
                      ~₹{plan.pricePerMeal}/meal
                    </span>
                    {plan.isPopular && (
                      <span className="text-xs font-display font-bold text-tt-tomato bg-tt-tomato/10 px-2 py-0.5 rounded-full">
                        43% savings!
                      </span>
                    )}
                  </div>

                  {/* Launch tag */}
                  <div className={`mt-2 inline-flex items-center rounded-lg px-2.5 py-1 text-[10px] font-bold ${plan.bgTint} ${plan.iconColor} w-fit`}>
                    10% OFF — {plan.launchTag}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-tt-text-secondary leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-4 space-y-2 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.bgTint} ${plan.iconColor}`}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        <span className="text-sm text-tt-text-secondary leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-5">
                    <Button
                      href="https://docs.google.com/forms/d/e/1FAIpQLSegxxacmX0Udhjpdl_7lcsMVtiVaudhonyVKcfnNwJ9j4-tTA/viewform"
                      variant={plan.isPopular ? "gradient-cta" : "gradient-green"}
                      size="lg"
                      className="w-full justify-center text-sm"
                    >
                      {plan.isPopular ? "Register Now — Best Value" : "Register Now"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="shrink-0 py-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {trustSignals.map((signal) => (
              <span key={signal.text} className="text-sm text-tt-green-deep/80 font-display font-semibold flex items-center gap-1.5">
                <span className="text-tt-green text-xs">{signal.icon}</span>
                {signal.text}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          className="shrink-0 pb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <p className="font-display text-lg md:text-xl font-extrabold text-tt-green-deep">
            Small Bites Today, <span className="text-tt-orange">Stronger Tomorrow!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
