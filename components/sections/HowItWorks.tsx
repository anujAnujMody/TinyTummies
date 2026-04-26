"use client";

import SectionShell from "@/components/ui/SectionShell";
import ScrollReveal from "@/components/islands/ScrollReveal";
import PandaMascot from "@/components/ui/PandaMascot";
import ScatterDecorations from "@/components/ui/ScatterDecorations";

const steps = [
  {
    num: "01",
    title: "Choose Your Plan",
    description: "Pick Starter or Growth. Flexible, no lock-in.",
    color: "tt-green",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="6" width="28" height="28" rx="6" />
        <path d="M6 16h28M16 6v10" strokeLinecap="round" />
        <circle cx="26" cy="26" r="4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "We Cook & Deliver",
    description: "Fresh meals prepared daily and delivered to school before lunch.",
    color: "tt-orange",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 18c0-4 3-7 6-7s6 3 6 7" strokeLinecap="round" />
        <path d="M10 18h20v4c0 5-5 9-10 9s-10-4-10-9v-4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 31v4M16 35h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Your Child Enjoys",
    description: "Nutritious, tasty meals they actually look forward to.",
    color: "tt-yellow",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="20" r="14" />
        <path d="M14 24c0 0 3 4 6 4s6-4 6-4" strokeLinecap="round" />
        <circle cx="16" cy="17" r="2" fill="currentColor" />
        <circle cx="24" cy="17" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { bg: string; text: string; num: string; border: string }> = {
  "tt-green": { bg: "bg-tt-green-tint", text: "text-tt-green", num: "text-tt-green/10", border: "border-t-4 border-tt-green" },
  "tt-orange": { bg: "bg-tt-orange-tint", text: "text-tt-orange", num: "text-tt-orange/10", border: "border-t-4 border-tt-orange" },
  "tt-yellow": { bg: "bg-tt-yellow/15", text: "text-tt-yellow-dark", num: "text-tt-yellow/10", border: "border-t-4 border-tt-yellow" },
};

export default function HowItWorks() {
  return (
    <SectionShell background="white" id="how">
      <ScatterDecorations count={8} />

      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="font-display text-sm font-bold tracking-widest text-tt-green uppercase mb-3">
            How It Will Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-tt-green-deep">
            Healthy lunches, <span className="text-tt-orange">zero morning stress.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:gap-8 md:grid-cols-3 relative">
        {steps.map((step, i) => {
          const colors = colorMap[step.color];
          return (
            <ScrollReveal key={step.num} delay={i * 0.2}>
              <div className={`h-full flex flex-col items-center text-center rounded-2xl bg-white p-7 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${colors.border}`}>
                <span className={`font-display text-5xl font-extrabold ${colors.num} select-none leading-none`}>
                  {step.num}
                </span>
                <div className={`relative z-10 -mt-2 mb-5 flex h-16 w-16 items-center justify-center rounded-full ${colors.bg} ${colors.text}`}>
                  {step.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-tt-green-deep">
                  {step.title}
                </h3>
                <p className="mt-3 text-tt-text-secondary leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}

        <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-0.5">
          <div className="w-full h-full flex items-center">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-tt-green via-tt-orange to-tt-yellow rounded-full" />
          </div>
        </div>
      </div>

      <ScrollReveal delay={0.6}>
        <div className="mt-8 md:mt-10 flex justify-center">
          <div className="relative w-28 h-28 md:w-32 md:h-32 animate-bounce-gentle">
            <PandaMascot variant="chef" size={128} className="drop-shadow-lg" />
          </div>
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}
