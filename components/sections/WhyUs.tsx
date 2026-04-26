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
    color: "green",
    gradient: "from-tt-green to-tt-lime",
    bgTint: "bg-tt-green/5",
    borderColor: "border-tt-green/20",
    iconBg: "bg-tt-green/10",
    iconColor: "text-tt-green",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Hygienic & Safe",
    description: "Prepared in certified kitchens with strict hygiene standards. Safe for little hands and tummies.",
    color: "blue",
    gradient: "from-tt-blue to-tt-sky",
    bgTint: "bg-tt-blue/5",
    borderColor: "border-tt-blue/20",
    iconBg: "bg-tt-blue/10",
    iconColor: "text-tt-blue",
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
    color: "pink",
    gradient: "from-tt-pink to-tt-bubblegum",
    bgTint: "bg-tt-pink/5",
    borderColor: "border-tt-pink/20",
    iconBg: "bg-tt-pink/10",
    iconColor: "text-tt-pink",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Builds Healthy Habits",
    description: "When healthy food is fun and familiar, children develop eating habits that last a lifetime.",
    color: "orange",
    gradient: "from-tt-orange to-tt-tomato",
    bgTint: "bg-tt-orange/5",
    borderColor: "border-tt-orange/20",
    iconBg: "bg-tt-orange/10",
    iconColor: "text-tt-orange",
  },
];

const steps = [
  {
    num: "01",
    title: "Choose Your Plan",
    description: "Pick Starter or Growth. Flexible, no lock-in.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "We Cook & Deliver",
    description: "Fresh meals prepared daily and delivered to school before lunch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 10c0 5 3.5 9 8 9s8-4 8-9" />
        <path d="M4 10h16" />
        <path d="M8 6c1.5-1.5 3.5-2 4-2s2.5.5 4 2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Your Child Enjoys",
    description: "Nutritious, tasty meals they actually look forward to.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyUs() {
  return (
    <section
      id="why"
      className="relative h-[100svh] flex flex-col overflow-hidden bg-tt-warm"
    >
      {/* Background blob */}
      <div
        className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(132,204,22,0.06) 0%, rgba(251,191,36,0.04) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6 w-full flex flex-col h-full">
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
          <p className="font-display text-xs font-bold tracking-widest text-tt-orange uppercase mb-1">
            Why Parents Love Us
          </p>
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-extrabold text-tt-green-deep leading-tight">
            Fresh Meals. <span className="text-tt-orange">Zero Stress.</span> Happy Kids.
          </h2>
        </motion.div>

        {/* Benefits Grid - 2x2 */}
        <motion.div
          className="grid grid-cols-2 gap-3 flex-1 min-h-0 content-center py-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardFadeUp}
              className={`flex flex-col rounded-2xl bg-white shadow-sm border ${benefit.borderColor} overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default h-full`}
            >
              {/* Rainbow gradient top border */}
              <div className={`h-1.5 bg-gradient-to-r ${benefit.gradient} shrink-0`} />
              
              <div className="flex flex-col flex-1 p-4 min-h-0">
                {/* Icon */}
                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${benefit.iconBg} ${benefit.iconColor} shrink-0`}>
                  {benefit.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-display text-base font-bold text-tt-green-deep leading-tight mb-2">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-tt-text-secondary leading-relaxed flex-1">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="shrink-0 py-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-center mb-3">
            <p className="font-display text-[10px] font-bold tracking-widest text-tt-orange uppercase">
              How It Works
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-center gap-2 md:gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-tt-green to-tt-lime text-white shadow-md mb-1.5">
                    {step.icon}
                  </div>
                  <span className="font-display text-[10px] font-bold text-tt-green-deep uppercase tracking-wider">
                    Step {step.num}
                  </span>
                  <h4 className="font-display text-xs md:text-sm font-bold text-tt-green-deep mt-0.5">
                    {step.title}
                  </h4>
                  <p className="text-[10px] md:text-xs text-tt-text-secondary mt-0.5 max-w-[120px] leading-tight">
                    {step.description}
                  </p>
                </div>
                
                {i < steps.length - 1 && (
                  <div className="hidden md:flex items-center text-tt-green/30">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
