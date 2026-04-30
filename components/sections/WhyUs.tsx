"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Hygienic & Safe",
    description: "Prepared in certified kitchens with strict hygiene standards. Safe for little hands and tummies.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Kids Actually Eat",
    description: "Kid-approved flavors and fun presentation mean less waste and happier lunch breaks every day.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Builds Healthy Habits",
    description: "When healthy food is fun and familiar, children develop eating habits that last a lifetime.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      className="relative h-[100svh] pt-16 md:pt-20 scroll-mt-16 md:scroll-mt-20 flex flex-col bg-tt-warm"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6 w-full flex-1 flex flex-col justify-between py-6 md:py-8">
        
        {/* Header */}
        <motion.div
          className="text-center shrink-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-display text-xs font-bold tracking-widest text-tt-orange uppercase mb-2">
            Why Parents Love Us
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-tt-text leading-tight">
            Fresh Meals. <span className="text-tt-orange">Zero Stress.</span> Happy Kids.
          </h2>
        </motion.div>

        {/* Benefits Grid - fill space */}
        <motion.div
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 items-center min-h-0 py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col rounded-2xl bg-tt-green-tint/40 p-6 md:p-8 hover:bg-tt-green-tint/60 transition-all duration-300 cursor-default h-full justify-center"
            >
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-tt-green-tint text-tt-green">
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-display text-xl font-bold text-tt-text leading-tight mb-3">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-base text-tt-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
