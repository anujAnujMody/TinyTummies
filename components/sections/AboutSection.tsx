"use client";

import { Leaf } from "lucide-react";
import { valueCards, timeline, aboutFeatures } from "@/data/about";
import PandaBackground from "@/components/ui/PandaBackground";
import FeatureBar from "@/components/ui/FeatureBar";
import { useScrollAnimation, useStaggerAnimation } from "@/lib/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref: missionRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: valueCardsRef } = useStaggerAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: storyRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: timelineRef } = useStaggerAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
<section id="about" className="snap-start snap-always min-h-[100dvh] md:h-screen">
      <PandaBackground className="h-full" count={3}>
        <div className="h-full px-5 md:px-[4vw] pt-20 md:pt-[100px] pb-4 md:pb-[2vh] flex flex-col gap-4 md:gap-[2vh]">
          {/* Row 1: Mission */}
          <div ref={missionRef} className="animate-on-scroll fade-up text-center shrink-0">
            <h2 className="font-display text-xl md:text-[clamp(20px,3.5vh,32px)] font-bold text-clay-green-900 leading-tight max-[380px]:text-lg">
              We&apos;re on a mission to{" "}
              <span className="text-clay-orange-500">nourish little tummies</span>{" "}
              and build a healthier tomorrow.
            </h2>
            <p className="font-body text-sm md:text-[clamp(13px,1.8vh,15px)] text-ink-muted mt-2 md:mt-[1vh] leading-relaxed max-w-2xl mx-auto max-[380px]:text-xs">
              Tiny Tummies is more than just a meal service. We&apos;re a team of nutritionists, chefs, parents and caregivers who believe every child deserves real food, made with love.
            </p>
          </div>

          {/* Row 2: 3 Value Cards */}
          <div ref={valueCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-[1.5vw] shrink-0">
            {valueCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  data-animate
                  data-animate-delay={(0.15 + i * 0.06).toFixed(2)}
                  className="animate-on-scroll fade-up rounded-[14px] border-2 border-white bg-white/95 px-4 md:px-[1.5vw] py-4 md:py-[2.5vh] shadow-[0_2px_0_0_#B9DFA0,0_4px_8px_oklch(0_0 0/0.05)] flex flex-col items-center text-center"
                >
                  <span className={`flex size-10 md:size-[clamp(36px,4.5vh,44px)] items-center justify-center rounded-full ring-2 ${card.bg} ${card.ring} max-[380px]:size-9`}>
                    <Icon className={`size-5 md:size-[clamp(18px,2.2vh,22px)] ${card.color}`} strokeWidth={2} />
                  </span>
                  <h3 className={`font-display text-sm md:text-[clamp(14px,2vh,17px)] font-bold mt-2 md:mt-[1.2vh] ${card.color} max-[380px]:text-xs`}>
                    {card.title}
                  </h3>
                  <p className="font-body text-xs md:text-[clamp(12px,1.4vh,13px)] text-ink-muted mt-1.5 md:mt-[0.8vh] leading-relaxed max-[380px]:text-[10px]">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Row 3: Our Story */}
          <div
            ref={storyRef}
            className="animate-on-scroll fade-up rounded-2xl border-2 border-white/60 bg-white/70 px-4 md:px-[3vw] py-4 md:py-[2vh] shadow-[0_2px_0_0_#B9DFA0,0_4px_8px_oklch(0_0 0/0.05)] flex-1 min-h-0 flex flex-col"
          >
            <div className="flex items-center justify-center gap-2 md:gap-[0.8vw]">
              <Leaf className="size-4 md:size-[clamp(14px,1.8vh,16px)] text-clay-green-600" strokeWidth={2} />
              <h3 className="font-display text-lg md:text-[clamp(18px,2.5vh,22px)] font-bold text-clay-green-900 max-[380px]:text-base">
                Our Story
              </h3>
              <Leaf className="size-4 md:size-[clamp(14px,1.8vh,16px)] text-clay-green-600 rotate-180" strokeWidth={2} />
            </div>

            <div className="mt-3 md:mt-[1.5vh] text-center">
              <p className="font-body text-sm md:text-[clamp(13px,1.6vh,15px)] text-ink-muted leading-relaxed max-[380px]:text-xs">
                It all started with a simple question from a mom:
              </p>
              <p className="font-body text-base md:text-[clamp(15px,2vh,18px)] text-clay-green-800 font-semibold mt-1.5 md:mt-[0.8vh] leading-relaxed max-[380px]:text-sm">
                &ldquo;What can I give my child every day that&apos;s healthy, tasty and worry-free?&rdquo;
              </p>
              <p className="font-body text-sm md:text-[clamp(13px,1.6vh,15px)] text-ink-muted mt-1.5 md:mt-[0.8vh] max-[380px]:text-xs">
                That question became Tiny Tummies.
              </p>
            </div>

            {/* Timeline */}
            <div ref={timelineRef} className="relative mt-3 md:mt-[1.5vh] flex-1 flex flex-col justify-center min-h-0">
              {/* Desktop: Original 2-row layout with dashed line */}
              <div className="hidden md:block relative">
                <div className="absolute top-1/2 -translate-y-1/2 left-[10%] right-[10%] border-t-2 border-dashed border-clay-green-200 z-0" />
                <div className="grid grid-cols-5 gap-[1vw] relative z-10">
                  {timeline.map((step) => {
                    const Icon = step.icon;
                    const isOrange = step.tone === "orange";
                    return (
                      <div key={step.title} className="flex justify-center">
                        <span className={`flex size-[clamp(28px,3.5vh,34px)] items-center justify-center rounded-full border-2 shadow-xs bg-white ${isOrange ? "border-clay-orange-200" : "border-clay-green-200"}`}>
                          <Icon className={`size-[clamp(14px,1.8vh,17px)] ${isOrange ? "text-clay-orange-500" : "text-clay-green-700"}`} strokeWidth={2} />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="hidden md:grid grid-cols-5 gap-[1vw] mt-[0.8vh]">
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

              {/* Mobile: Combined icon+text horizontal scroll */}
              <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-3 w-full scrollbar-hide">
                {timeline.map((step, i) => {
                  const Icon = step.icon;
                  const isOrange = step.tone === "orange";
                  return (
                    <div
                      key={step.title}
                      data-animate
                      data-animate-delay={(0.25 + i * 0.06).toFixed(2)}
                      className="animate-on-scroll fade-up flex flex-col items-center text-center min-w-[140px] snap-center"
                    >
                      <span className={`flex size-10 items-center justify-center rounded-full border-2 shadow-xs bg-white ${isOrange ? "border-clay-orange-200" : "border-clay-green-200"}`}>
                        <Icon className={`size-5 ${isOrange ? "text-clay-orange-500" : "text-clay-green-700"}`} strokeWidth={2} />
                      </span>
                      <h4 className={`font-display text-sm font-bold mt-2 ${isOrange ? "text-clay-orange-500" : "text-clay-green-700"}`}>
                        {step.title}
                      </h4>
                      <p className="font-body text-xs text-ink-muted mt-1 leading-relaxed px-1">
                        {step.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Feature Bar */}
          <div className="shrink-0">
            <FeatureBar
              title="Why Parents"
              titleAccent="Trust Us"
              items={aboutFeatures}
              columns={5}
            />
          </div>
        </div>
      </PandaBackground>
    </section>
  );
}
