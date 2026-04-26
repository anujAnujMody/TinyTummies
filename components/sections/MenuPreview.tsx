"use client";

import { motion } from "framer-motion";

// Compact SVG food icons
const FoodIcons = {
  idli: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <ellipse cx="12" cy="7" rx="5" ry="2.5" />
      <ellipse cx="12" cy="12" rx="5" ry="2.5" />
      <ellipse cx="12" cy="17" rx="5" ry="2.5" />
    </svg>
  ),
  rice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 3C8 3 5 6 5 10c0 3 2 5 4 6v3a3 3 0 0 0 6 0v-3c2-1 4-3 4-6 0-4-3-7-7-7z" />
      <path d="M9 14h6" />
    </svg>
  ),
  paratha: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="7" />
      <path d="M12 5v14" /><path d="M5 12h14" />
    </svg>
  ),
  dosa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M3 12c0-4 4-7 9-7s9 3 9 7-4 7-9 7-9-3-9-7z" />
      <path d="M5 12h14" />
    </svg>
  ),
  bowl: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M4 10c0 4 3 7 8 7s8-3 8-7" />
      <path d="M4 10h16" />
    </svg>
  ),
  sandwich: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M4 7h16v4H4z" />
      <path d="M4 11l2 6h12l2-6" />
      <path d="M8 7V5" /><path d="M12 7V5" /><path d="M16 7V5" />
    </svg>
  ),
};

// Nutrition icons
const NutritionIcons = {
  protein: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v8H2z" /><path d="M6 8V5" /><path d="M10 8V5" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
    </svg>
  ),
  fiber: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  calcium: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M12 2v20" /><path d="M8 6v12" /><path d="M16 6v12" /><path d="M4 10v8" /><path d="M20 10v8" />
    </svg>
  ),
  energy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  vitamin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  ),
  probiotics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M4.5 12.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z" />
      <path d="M7.5 9.5V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v2.5" />
    </svg>
  ),
};

const menuDays = [
  {
    id: "monday",
    day: "Mon",
    theme: "Mini Munch",
    items: ["Soft Mini Idlis + Chutney", "Juicy Watermelon Cubes"],
    gradient: "from-tt-green to-tt-lime",
    bgTint: "bg-tt-green/5",
    textColor: "text-tt-green-deep",
    icon: "idli",
    benefits: [
      { icon: "protein", label: "Protein", desc: "Builds strong muscles", color: "text-tt-green" },
      { icon: "vitamin", label: "Vit C", desc: "Boosts immunity", color: "text-tt-orange" },
      { icon: "energy", label: "Energy", desc: "All-day energy", color: "text-tt-yellow-dark" },
    ],
  },
  {
    id: "tuesday",
    day: "Tue",
    theme: "Energy Boost",
    items: ["Poha / Semiya Upma", "Sweet Corn Crunch Salad", "Tropical Fruit"],
    gradient: "from-tt-orange to-tt-yellow",
    bgTint: "bg-tt-orange/5",
    textColor: "text-tt-orange-dark",
    icon: "rice",
    benefits: [
      { icon: "brain", label: "Iron", desc: "Sharp brain focus", color: "text-tt-blue" },
      { icon: "fiber", label: "Fiber", desc: "Happy digestion", color: "text-tt-pink" },
      { icon: "protein", label: "Protein", desc: "Growing strong", color: "text-tt-green" },
    ],
  },
  {
    id: "wednesday",
    day: "Wed",
    theme: "Power Pocket",
    items: ["Aloo Paratha Pockets", "Fresh Curd", "Banana Bites"],
    gradient: "from-tt-pink to-tt-tomato",
    bgTint: "bg-tt-pink/5",
    textColor: "text-tt-pink-dark",
    icon: "paratha",
    benefits: [
      { icon: "calcium", label: "Calcium", desc: "Strong bones & teeth", color: "text-tt-orange" },
      { icon: "protein", label: "Protein", desc: "Muscle growth", color: "text-tt-green" },
      { icon: "probiotics", label: "Gut", desc: "Healthy tummy", color: "text-tt-blue" },
    ],
  },
  {
    id: "thursday",
    day: "Thu",
    theme: "Dosa Delight",
    items: ["Mini Dosas + Chutney", "Seasonal Fruit"],
    gradient: "from-tt-blue to-tt-sky",
    bgTint: "bg-tt-blue/5",
    textColor: "text-tt-blue-dark",
    icon: "dosa",
    benefits: [
      { icon: "brain", label: "B12", desc: "Brain & nerve health", color: "text-tt-blue" },
      { icon: "fiber", label: "Fiber", desc: "Healthy digestion", color: "text-tt-pink" },
      { icon: "vitamin", label: "Vitamins", desc: "Immunity boost", color: "text-tt-orange" },
    ],
  },
  {
    id: "friday",
    day: "Fri",
    theme: "Desi Lunch",
    items: ["Lemon Rice", "Sprouts Mix", "Cucumber & Carrot Salad"],
    gradient: "from-tt-yellow to-tt-sunny",
    bgTint: "bg-tt-yellow/5",
    textColor: "text-tt-yellow-dark",
    icon: "bowl",
    benefits: [
      { icon: "protein", label: "Plant Prot", desc: "Natural growth", color: "text-tt-green" },
      { icon: "brain", label: "Folate", desc: "Brain development", color: "text-tt-blue" },
      { icon: "fiber", label: "Fiber", desc: "Digestive health", color: "text-tt-pink" },
    ],
  },
  {
    id: "saturday",
    day: "Sat",
    theme: "Treat Day",
    items: ["Veg Sandwich", "Ketchup Dip"],
    gradient: "from-tt-orange via-tt-tomato to-tt-bubblegum",
    bgTint: "bg-tt-orange/5",
    textColor: "text-tt-orange-dark",
    icon: "sandwich",
    benefits: [
      { icon: "vitamin", label: "5-a-Day", desc: "Veggie power", color: "text-tt-orange" },
      { icon: "protein", label: "Protein", desc: "Steady growth", color: "text-tt-green" },
      { icon: "energy", label: "Energy", desc: "Play all day", color: "text-tt-yellow-dark" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function MenuPreview() {
  return (
    <section
      id="menu"
      className="relative h-[100svh] flex flex-col overflow-hidden bg-tt-warm"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6 w-full flex flex-col h-full">
        {/* Navbar spacer */}
        <div className="h-14 md:h-16 shrink-0" />

        {/* Compact Header */}
        <motion.div
          className="text-center shrink-0 py-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-display text-xs font-bold tracking-widest text-tt-orange uppercase mb-1">
            Weekly Menu
          </p>
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-extrabold text-tt-green-deep leading-tight">
            What&apos;s on the Menu <span className="text-tt-orange">This Week</span>
          </h2>
          <p className="mt-1 text-tt-text-secondary text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            Fresh meals, zero repeats — packed with nutrients kids need.
          </p>
        </motion.div>

        {/* Desktop: 3x2 Grid - fills remaining space */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-3 flex-1 min-h-0 py-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {menuDays.map((day) => {
            const FoodIcon = FoodIcons[day.icon as keyof typeof FoodIcons];
            return (
              <motion.div
                key={day.id}
                variants={cardFadeUp}
                className={`flex flex-col rounded-2xl ${day.bgTint} border border-white/50 shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default h-full`}
              >
                {/* Rainbow gradient header */}
                <div className={`bg-gradient-to-r ${day.gradient} px-4 py-3 flex items-center gap-3 shrink-0`}>
                  <span className="text-white/90 shrink-0">
                    {FoodIcon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-white/80" />
                      <span className="font-display text-xs font-bold uppercase tracking-wider text-white/80">
                        {day.day}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white leading-tight truncate">
                      {day.theme}
                    </h3>
                  </div>
                </div>

                {/* Card content - fills space */}
                <div className="flex flex-col flex-1 p-4 min-h-0">
                  {/* Food items - bigger text */}
                  <div className="flex-1">
                    {day.items.map((item) => (
                      <p key={item} className="text-[15px] text-tt-text-secondary leading-relaxed flex items-start gap-2 py-0.5">
                        <span className="text-tt-green mt-2 text-[6px]">●</span>
                        <span className="font-medium">{item}</span>
                      </p>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-tt-green/20 to-transparent my-3" />

                  {/* Nutrition benefits - stacked, bigger */}
                  <div className="shrink-0 space-y-2">
                    {day.benefits.map((benefit) => {
                      const NutriIcon = NutritionIcons[benefit.icon as keyof typeof NutritionIcons];
                      return (
                        <div
                          key={benefit.label}
                          className="flex items-center gap-2"
                          title={`${benefit.label}: ${benefit.desc}`}
                        >
                          <span className={benefit.color}>{NutriIcon}</span>
                          <div className="flex-1 min-w-0">
                            <span className={`text-sm font-display font-bold ${benefit.color}`}>
                              {benefit.label}
                            </span>
                            <span className="text-xs text-tt-text-secondary/60 ml-1.5">
                              {benefit.desc}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 pt-2 flex-1 min-h-0">
          {menuDays.map((day) => {
            const FoodIcon = FoodIcons[day.icon as keyof typeof FoodIcons];
            return (
              <div
                key={day.id}
                className={`flex-shrink-0 w-[320px] snap-center flex flex-col rounded-2xl ${day.bgTint} border border-white/50 shadow-lg overflow-hidden h-full`}
              >
                {/* Rainbow gradient header */}
                <div className={`bg-gradient-to-r ${day.gradient} px-4 py-3 flex items-center gap-3 shrink-0`}>
                  <span className="text-white/90 shrink-0">
                    {FoodIcon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-white/80" />
                      <span className="font-display text-xs font-bold uppercase tracking-wider text-white/80">
                        {day.day}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white leading-tight truncate">
                      {day.theme}
                    </h3>
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-col flex-1 p-4">
                  {/* Food items */}
                  <div className="flex-1">
                    {day.items.map((item) => (
                      <p key={item} className="text-base text-tt-text-secondary leading-relaxed flex items-start gap-2 py-1">
                        <span className="text-tt-green mt-2 text-[6px]">●</span>
                        <span className="font-medium">{item}</span>
                      </p>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-tt-green/20 to-transparent my-4" />

                  {/* Nutrition benefits */}
                  <div className="shrink-0 space-y-3">
                    {day.benefits.map((benefit) => {
                      const NutriIcon = NutritionIcons[benefit.icon as keyof typeof NutritionIcons];
                      return (
                        <div
                          key={benefit.label}
                          className="flex items-center gap-2"
                          title={`${benefit.label}: ${benefit.desc}`}
                        >
                          <span className={benefit.color}>{NutriIcon}</span>
                          <div className="flex-1 min-w-0">
                            <span className={`text-sm font-display font-bold ${benefit.color}`}>
                              {benefit.label}
                            </span>
                            <span className="text-xs text-tt-text-secondary/60 ml-1.5">
                              {benefit.desc}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
