"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Choose Your Plan",
    description: "Pick Starter or Growth. Flexible, no lock-in. Start with a free trial.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "We Cook & Deliver",
    description: "Fresh meals prepared daily in our certified kitchen, delivered to school before lunch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9h1" />
        <path d="M9 13h1" />
        <path d="M9 17h1" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Kids Eat Happy",
    description: "Your child enjoys a nutritious, tasty meal at school. You get peace of mind.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative h-[100svh] pt-16 md:pt-20 scroll-mt-16 md:scroll-mt-20 flex flex-col bg-tt-warm">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 w-full flex-1 flex flex-col justify-between py-6 md:py-8">
        
        {/* Header */}
        <motion.div
          className="text-center shrink-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-display text-xs font-bold tracking-widest text-tt-orange uppercase mb-2">
            How It Works
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-tt-text leading-tight">
            Three Steps to <span className="text-tt-orange">Happy Tummies</span>
          </h2>
          <p className="mt-2 text-tt-text-secondary text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Simple for parents. Delicious for kids. We handle everything from kitchen to classroom.
          </p>
        </motion.div>

        {/* Steps - fill space */}
        <div className="flex-1 grid md:grid-cols-3 gap-6 md:gap-8 items-center min-h-0 py-4 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-tt-green-tint" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative flex flex-col items-center text-center h-full justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              {/* Step number badge */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-tt-green text-white flex items-center justify-center shadow-sm">
                  <span className="font-display font-bold text-xl">{step.num}</span>
                </div>
              </div>

              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-tt-green-tint text-tt-green">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl font-bold text-tt-text mb-3">
                {step.title}
              </h3>
              <p className="text-base text-tt-text-secondary leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
