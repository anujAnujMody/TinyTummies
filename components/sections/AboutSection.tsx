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
    <section id="about">
      <PandaBackground className="h-full" showMascots={false}>
        <div className="h-full px-4 sm:px-5 md:px-[5vw] py-12 sm:py-16 md:py-24 flex flex-col gap-8 sm:gap-10 md:gap-14">
          {/* Row 1: Mission */}
          <div ref={missionRef} className="animate-on-scroll fade-up text-center shrink-0">
            <h2 className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-clay-green-900 leading-tight max-w-3xl mx-auto">
              We&apos;re on a mission to{" "}
              <span className="text-clay-orange-500">nourish little tummies</span>{" "}
              and build a healthier tomorrow.
            </h2>
            <p className="font-body text-sm sm:text-sm md:text-base text-ink-muted mt-3 sm:mt-4 leading-relaxed max-w-2xl mx-auto">
              Tiny Tummies is more than just a meal service. We&apos;re a team of nutritionists, chefs, parents and caregivers who believe every child deserves real food, made with love.
            </p>
          </div>

          {/* Row 2: 3 Value Cards */}
          <div ref={valueCardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 shrink-0">
            {valueCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  data-animate
                  data-animate-delay={(0.15 + i * 0.06).toFixed(2)}
                  className="animate-on-scroll fade-up rounded-2xl bg-white/80 px-4 sm:px-5 md:px-6 py-5 sm:py-6 md:py-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className={`flex size-11 sm:size-12 md:size-14 items-center justify-center rounded-full ring-2 ${card.bg} ${card.ring}`}>
                    <Icon className={`size-5 sm:size-6 md:size-7 ${card.color}`} strokeWidth={2} />
                  </span>
                  <h3 className={`font-display text-sm sm:text-base md:text-lg font-bold mt-3 sm:mt-4 ${card.color}`}>
                    {card.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-ink-muted mt-1.5 sm:mt-2 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Row 3: Our Story */}
          <div
            ref={storyRef}
            className="animate-on-scroll fade-up rounded-2xl bg-gradient-to-br from-clay-mint/20 to-clay-butter/20 px-5 md:px-8 py-8 md:py-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col relative overflow-hidden"
          >
            {/* Organic gradient blob accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-clay-mint/10 blur-3xl pointer-events-none blob-outer" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-clay-butter/15 blur-3xl pointer-events-none blob-inner" />

            <div className="flex items-center justify-center gap-3 relative z-10">
              <Leaf className="size-5 md:size-6 text-clay-green-600" strokeWidth={2} />
              <h3 className="font-display text-xl md:text-2xl font-bold text-clay-green-900">
                Our Story
              </h3>
              <Leaf className="size-5 md:size-6 text-clay-green-600 rotate-180" strokeWidth={2} />
            </div>

            <div className="mt-6 text-center relative z-10">
              <p className="font-body text-sm md:text-base text-ink-muted leading-relaxed">
                It all started with a simple question from a mom:
              </p>
              <p className="font-body text-lg md:text-xl text-clay-green-800 font-semibold mt-3 leading-relaxed">
                &ldquo;What can I give my child every day that&apos;s healthy, tasty and worry-free?&rdquo;
              </p>
              <p className="font-body text-sm md:text-base text-ink-muted mt-3">
                That question became Tiny Tummies.
              </p>
            </div>

            {/* Timeline */}
            <div ref={timelineRef} className="relative mt-8 flex flex-col justify-center relative z-10">
              {/* Desktop: 2-row layout with gradient line */}
              <div className="hidden md:block relative">
                <div className="absolute top-1/2 -translate-y-1/2 left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-clay-green-200 via-clay-mint-300 to-clay-orange-200 rounded-full z-0" />
                <div className="grid grid-cols-5 gap-6 relative z-10">
                  {timeline.map((step) => {
                    const Icon = step.icon;
                    const isOrange = step.tone === "orange";
                    return (
                      <div key={step.title} className="flex justify-center">
                        <span className={`flex size-10 items-center justify-center rounded-full border border-clay-green-200/50 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${isOrange ? "border-clay-orange-200/50" : "border-clay-green-200/50"}`}>
                          <Icon className={`size-5 ${isOrange ? "text-clay-orange-500" : "text-clay-green-700"}`} strokeWidth={2} />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="hidden md:grid grid-cols-5 gap-6 mt-4">
                {timeline.map((step, i) => {
                  const isOrange = step.tone === "orange";
                  return (
                    <div
                      key={step.title}
                      data-animate
                      data-animate-delay={(0.25 + i * 0.06).toFixed(2)}
                      className="animate-on-scroll fade-up flex flex-col items-center text-center"
                    >
                      <h4 className={`font-display text-sm font-bold ${isOrange ? "text-clay-orange-500" : "text-clay-green-700"}`}>
                        {step.title}
                      </h4>
                      <p className="font-body text-xs text-ink-muted mt-1 leading-relaxed px-2">
                        {step.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Mobile: Combined icon+text horizontal scroll without snap */}
              <div className="flex md:hidden overflow-x-auto gap-4 w-full scrollbar-hide pb-2">
                {timeline.map((step, i) => {
                  const Icon = step.icon;
                  const isOrange = step.tone === "orange";
                  return (
                    <div
                      key={step.title}
                      data-animate
                      data-animate-delay={(0.25 + i * 0.06).toFixed(2)}
                      className="animate-on-scroll fade-up flex flex-col items-center text-center min-w-[140px]"
                    >
                      <span className={`flex size-10 items-center justify-center rounded-full border border-clay-green-200/50 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${isOrange ? "border-clay-orange-200/50" : "border-clay-green-200/50"}`}>
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
              columns={4}
            />
          </div>
        </div>
      </PandaBackground>
    </section>
  );
}
