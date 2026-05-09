"use client";

import Image from "next/image";
import {
  Clock,
  AlertTriangle,
  ShieldCheck,
  Heart,
  Star,
  Smile,
  School,
} from "lucide-react";
import FeatureBar from "@/components/ui/FeatureBar";
import PandaBackground from "@/components/ui/PandaBackground";
import { useScrollAnimation, useStaggerAnimation } from "@/lib/hooks/useScrollAnimation";

const problems = [
  {
    icon: Clock,
    title: "Busy mornings & no time to cook?",
    text: "The rush leaves little time for nutritious meals.",
    iconBg: "bg-[#FFF3E0]",
    iconColor: "text-[#FF8C42]",
  },
  {
    icon: Smile,
    title: "Kids skip breakfast or eat unhealthy?",
    text: "It affects their energy and concentration.",
    iconBg: "bg-[#E8F5E9]",
    iconColor: "text-[#4CAF50]",
  },
  {
    icon: AlertTriangle,
    title: "Unhealthy options are everywhere!",
    text: "Finding clean, safe & tasty food is hard.",
    iconBg: "bg-[#FFF8E0]",
    iconColor: "text-[#FFD93D]",
  },
];

const solutions = [
  {
    icon: Heart,
    title: "We handle everything",
    text: "You relax, we take care of meals.",
    iconBg: "bg-[#FFE4EC]",
    iconColor: "text-[#FF6B9D]",
  },
  {
    icon: Star,
    title: "Healthy meals they'll love",
    text: "Fuel for their growth, focus & happiness.",
    iconBg: "bg-[#FFF8E0]",
    iconColor: "text-[#FFD93D]",
  },
  {
    icon: Smile,
    title: "Peace of mind, every morning",
    text: "Because your child deserves the best.",
    iconBg: "bg-[#E8F5E9]",
    iconColor: "text-[#4CAF50]",
  },
];

const howItWorksFeatures = [
  {
    icon: Clock,
    title: "Freshly prepared daily",
    text: "Made every morning with love.",
    color: "text-clay-green-700",
    border: "border-clay-green-700/20",
    bg: "bg-clay-mint",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic & Safe",
    text: "Stainless steel boxes only.",
    color: "text-clay-orange-500",
    border: "border-clay-orange-500/20",
    bg: "bg-clay-coral",
  },
  {
    icon: Smile,
    title: "Kid-approved",
    text: "Presentation they love.",
    color: "text-clay-green-700",
    border: "border-clay-green-700/20",
    bg: "bg-clay-mint",
  },
  {
    icon: School,
    title: "School-friendly",
    text: "Delivered before first bell.",
    color: "text-clay-orange-500",
    border: "border-clay-orange-500/20",
    bg: "bg-clay-coral",
  },
];

export default function HowItWorksSection() {
  const { ref: leftRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: centerRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: rightRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: problemsRef } = useStaggerAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: solutionsRef } = useStaggerAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <PandaBackground
      className="snap-start snap-always h-screen flex flex-col"
      style={{ background: "#F4F9ED" }}
    >
      <section
        id="how"
        className="relative flex flex-col flex-1"
      >
      <div className="w-full px-[3vw] pt-[calc(72px+2vh)] pb-[2vh] flex flex-col flex-1">
        {/* ── top: problem / image / solution ── */}
        <div className="grid lg:grid-cols-3 gap-[2vw] items-center flex-1">
          {/* LEFT — Problems */}
          <div
            ref={leftRef}
            className="animate-on-scroll fade-left flex flex-col gap-[2vh]"
          >
            <h3 className="font-display text-[clamp(14px,2.5vh,20px)] font-bold text-clay-orange-500">
              We know your mornings can be tough...
            </h3>

            <div ref={problemsRef} className="flex flex-col gap-[2vh]">
              {problems.map((item, i) => (
                <div
                  key={item.title}
                  data-animate
                  data-animate-delay={(0.1 + i * 0.1).toFixed(2)}
                  className="flex items-start gap-[1vw] animate-on-scroll fade-up"
                >
                  <span
                    className={`flex size-[clamp(36px,5vh,48px)] shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
                  >
                    <item.icon className={`size-[clamp(16px,2.2vh,22px)] ${item.iconColor}`} strokeWidth={2} />
                  </span>
                  <div className="pt-0.5">
                    <p className="font-display text-[clamp(12px,2vh,16px)] font-bold text-ink">
                      {item.title}
                    </p>
                    <p className="font-body text-[clamp(11px,1.6vh,14px)] text-ink-muted leading-relaxed mt-0.5">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER — Circular image */}
          <div
            ref={centerRef}
            className="animate-on-scroll fade-scale relative hidden lg:flex items-center justify-center"
          >
            {/* circle image */}
            <div className="relative w-[min(24vw,320px)] aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#A3D133] to-[#4CAF50] opacity-20" />
              <div className="absolute inset-3 rounded-full overflow-hidden border-[4px] border-white shadow-[0_8px_32px_rgba(76,175,80,0.2)]">
                <Image
                  src="/images/hero-kid-eating.jpg"
                  alt="Child enjoying a healthy meal"
                  fill
                  sizes="(max-width: 1024px) 90vw, 320px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Solutions */}
          <div
            ref={rightRef}
            className="animate-on-scroll fade-right flex flex-col gap-[2vh]"
          >
            <h3 className="font-display text-[clamp(14px,2.5vh,20px)] font-bold text-clay-green-700">
              We make it easy & stress-free!
            </h3>

            <div ref={solutionsRef} className="flex flex-col gap-[2vh]">
              {solutions.map((item, i) => (
                <div
                  key={item.title}
                  data-animate
                  data-animate-delay={(0.1 + i * 0.1).toFixed(2)}
                  className="flex items-start gap-[1vw] animate-on-scroll fade-up"
                >
                  <span
                    className={`flex size-[clamp(36px,5vh,48px)] shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
                  >
                    <item.icon className={`size-[clamp(16px,2.2vh,22px)] ${item.iconColor}`} strokeWidth={2} />
                  </span>
                  <div className="pt-0.5">
                    <p className="font-display text-[clamp(12px,2vh,16px)] font-bold text-ink">
                      {item.title}
                    </p>
                    <p className="font-body text-[clamp(11px,1.6vh,14px)] text-ink-muted leading-relaxed mt-0.5">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── bottom feature bar ── */}
        <FeatureBar
          title="What makes Tiny Tummies special?"
          titleAccent="&#9829;"
          items={howItWorksFeatures}
          columns={4}
        />
      </div>
    </section>
    </PandaBackground>
  );
}