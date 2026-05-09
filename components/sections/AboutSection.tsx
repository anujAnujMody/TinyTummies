"use client";

import {
  Target,
  Heart,
  Star,
  Lightbulb,
  ChefHat,
  Rocket,
  TrendingUp,
  Sparkles,
  Leaf,
  ShieldCheck,
  Truck,
  Sprout,
} from "lucide-react";
import PandaBackground from "@/components/ui/PandaBackground";
import FeatureBar from "@/components/ui/FeatureBar";
import { useScrollAnimation, useStaggerAnimation } from "@/lib/hooks/useScrollAnimation";

const valueCards = [
  {
    icon: Target,
    title: "Our Vision",
    text: "A world where every child grows up healthy, happy and full of potential.",
    color: "text-clay-green-700",
    ring: "ring-clay-green-200",
    bg: "bg-clay-green-50",
  },
  {
    icon: Heart,
    title: "Our Mission",
    text: "To make nutritious, hygienic and delicious meals simple, accessible and joyful for every child.",
    color: "text-clay-orange-500",
    ring: "ring-clay-orange-200",
    bg: "bg-clay-orange-50",
  },
  {
    icon: Star,
    title: "Our Promise",
    text: "Real ingredients. Honest nutrition. Made with love, delivered with care.",
    color: "text-clay-green-700",
    ring: "ring-clay-green-200",
    bg: "bg-clay-green-50",
  },
];

const timeline = [
  { icon: Lightbulb, title: "The Spark", text: "Busy parents struggling to find healthy meals for kids.", tone: "green" },
  { icon: ChefHat, title: "The Idea", text: "Nutrition experts and chefs creating meals kids love.", tone: "orange" },
  { icon: Rocket, title: "The Beginning", text: "Born with a promise of real food, real care, real impact.", tone: "green" },
  { icon: TrendingUp, title: "The Growth", text: "From one kitchen to many happy tummies across Bengaluru.", tone: "orange" },
  { icon: Sparkles, title: "The Future", text: "Continuing to innovate and inspire healthier generations.", tone: "green" },
];

const featureItems = [
  { icon: Leaf, title: "100% Natural", text: "No preservatives", color: "text-clay-green-700", border: "border-clay-green-200", bg: "bg-clay-green-50" },
  { icon: ShieldCheck, title: "Hygienic", text: "FSSAI certified", color: "text-clay-green-700", border: "border-clay-green-200", bg: "bg-clay-green-50" },
  { icon: Sprout, title: "Nutritious", text: "Expert planned", color: "text-clay-green-700", border: "border-clay-green-200", bg: "bg-clay-green-50" },
  { icon: Heart, title: "Made with Love", text: "Like parents do", color: "text-clay-orange-500", border: "border-clay-orange-200", bg: "bg-clay-orange-50" },
  { icon: Truck, title: "On-time", text: "Every morning", color: "text-clay-green-700", border: "border-clay-green-200", bg: "bg-clay-green-50" },
];

export default function AboutSection() {
  const { ref: missionRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: valueCardsRef } = useStaggerAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: storyRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: timelineRef } = useStaggerAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="snap-start snap-always h-screen">
      <PandaBackground
        className="h-full"
        style={{ backgroundColor: "#F4F9ED" }}
        count={10}
      >
        <div className="h-full px-[4vw] pt-[100px] pb-[2vh] flex flex-col gap-[2vh]">
          {/* ── Row 1: Mission ── */}
          <div
            ref={missionRef}
            className="animate-on-scroll fade-up text-center shrink-0"
          >
            <h2 className="font-display text-[clamp(20px,3.5vh,32px)] font-bold text-clay-green-900 leading-tight">
              We&apos;re on a mission to{" "}
              <span className="text-clay-orange-500">nourish little tummies</span>{" "}
              and build a healthier tomorrow.
            </h2>
            <p className="font-body text-[clamp(13px,1.8vh,15px)] text-ink-muted mt-[1vh] leading-relaxed max-w-2xl mx-auto">
              Tiny Tummies is more than just a meal service. We&apos;re a team of nutritionists, chefs, parents and caregivers who believe every child deserves real food, made with love.
            </p>
          </div>

          {/* ── Row 2: 3 Value Cards ── */}
          <div
            ref={valueCardsRef}
            className="grid grid-cols-3 gap-[1.5vw] shrink-0"
          >
            {valueCards.map((card, i) => (
              <div
                key={card.title}
                data-animate
                data-animate-delay={(0.15 + i * 0.06).toFixed(2)}
                className="animate-on-scroll fade-up rounded-[14px] border-[2px] border-white bg-white/95 px-[1.5vw] py-[2.5vh] shadow-[0_2px_0_0_#B9DFA0,0_4px_8px_oklch(0_0_0/0.05)] flex flex-col items-center text-center"
              >
                <span className={`flex size-[clamp(36px,4.5vh,44px)] items-center justify-center rounded-full ring-2 ${card.bg} ${card.ring}`}>
                  <card.icon className={`size-[clamp(18px,2.2vh,22px)] ${card.color}`} strokeWidth={2} />
                </span>
                <h3 className={`font-display text-[clamp(14px,2vh,17px)] font-bold mt-[1.2vh] ${card.color}`}>
                  {card.title}
                </h3>
                <p className="font-body text-[clamp(12px,1.4vh,13px)] text-ink-muted mt-[0.8vh] leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* ── Row 3: Our Story ── */}
          <div
            ref={storyRef}
            className="animate-on-scroll fade-up rounded-[16px] border-[2px] border-white/60 bg-white/70 px-[3vw] py-[2vh] shadow-[0_2px_0_0_#B9DFA0,0_4px_8px_oklch(0_0 0/0.05)] flex-1 min-h-0 flex flex-col"
          >
            {/* Title */}
            <div className="flex items-center justify-center gap-[0.8vw]">
              <Leaf className="size-[clamp(14px,1.8vh,16px)] text-clay-green-600" strokeWidth={2} />
              <h3 className="font-display text-[clamp(18px,2.5vh,22px)] font-bold text-clay-green-900">
                Our Story
              </h3>
              <Leaf className="size-[clamp(14px,1.8vh,16px)] text-clay-green-600 rotate-180" strokeWidth={2} />
            </div>

            {/* Quote */}
            <div className="mt-[1.5vh] text-center">
              <p className="font-body text-[clamp(13px,1.6vh,15px)] text-ink-muted leading-relaxed">
                It all started with a simple question from a mom:
              </p>
              <p className="font-body text-[clamp(15px,2vh,18px)] text-clay-green-800 font-semibold mt-[0.8vh] leading-relaxed">
                &ldquo;What can I give my child every day that&apos;s healthy, tasty and worry-free?&rdquo;
              </p>
              <p className="font-body text-[clamp(13px,1.6vh,15px)] text-ink-muted mt-[0.8vh]">
                That question became Tiny Tummies.
              </p>
            </div>

            {/* Timeline */}
            <div ref={timelineRef} className="relative mt-[1.5vh] flex-1 flex flex-col justify-center min-h-0">
              {/* Icons row with dotted line */}
              <div className="relative">
                <div className="absolute top-1/2 -translate-y-1/2 left-[10%] right-[10%] border-t-[2px] border-dashed border-clay-green-200 z-0" />
                <div className="grid grid-cols-5 gap-[1vw] relative z-10">
                  {timeline.map((step) => {
                    const isOrange = step.tone === "orange";
                    return (
                      <div key={step.title} className="flex justify-center">
                        <span className={`flex size-[clamp(28px,3.5vh,34px)] items-center justify-center rounded-full border-[2px] shadow-sm bg-white ${isOrange ? "border-clay-orange-200" : "border-clay-green-200"}`}>
                          <step.icon className={`size-[clamp(14px,1.8vh,17px)] ${isOrange ? "text-clay-orange-500" : "text-clay-green-700"}`} strokeWidth={2} />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Text row */}
              <div className="grid grid-cols-5 gap-[1vw] mt-[0.8vh]">
                {timeline.map((step, i) => {
                  const isOrange = step.tone === "orange";
                  return (
                    <div
                      key={step.title}
                      data-animate
                      data-animate-delay={(0.25 + i * 0.06).toFixed(2)}
                      className="animate-on-scroll fade-up flex flex-col items-center text-center"
                    >
                      <h4 className={`font-display text-[clamp(12px,1.6vh,14px)] font-bold ${isOrange ? "text-clay-orange-500" : "text-clay-green-700"}`}>
                        {step.title}
                      </h4>
                      <p className="font-body text-[clamp(11px,1.3vh,12px)] text-ink-muted mt-[0.4vh] leading-relaxed px-[0.3vw]">
                        {step.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Feature Bar ── */}
          <div className="shrink-0">
            <FeatureBar
              title="Why Parents"
              titleAccent="Trust Us"
              items={featureItems}
              columns={5}
            />
          </div>
        </div>
      </PandaBackground>
    </section>
  );
}