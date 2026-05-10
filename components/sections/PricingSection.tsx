"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn, clayShadow } from "@/lib/utils";
import { plans, whyChooseFeatures } from "@/data/pricing";
import { planIconMap, planColorMap } from "@/data/shared-maps";
import FeatureBar from "@/components/ui/FeatureBar";
import PandaBackground from "@/components/ui/PandaBackground";

const pandaImages = ["panda-e.png", "panda-c.png", "panda-g.png"];

export default function PricingSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current && plans.length > 1) {
      const cards = carouselRef.current.children;
      const middleCard = cards[1] as HTMLElement;
      if (middleCard) {
        const containerWidth = carouselRef.current.offsetWidth;
        carouselRef.current.scrollLeft = middleCard.offsetLeft - (containerWidth - middleCard.offsetWidth) / 2;
      }
    }
  }, []);

  return (
    <PandaBackground count={3} className="snap-start snap-always min-h-[100dvh] flex flex-col">
      <section id="pricing" className="relative flex flex-col flex-1">
        <div className="w-full px-4 md:px-[3vw] pt-16 md:pt-[calc(72px+2vh)] pb-3 md:pb-[1.5vh] flex flex-col flex-1">
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col gap-3 md:gap-[2vh] max-w-250 mx-auto w-full">
              <div className="text-center shrink-0">
                <h2 className="font-display text-xl md:text-[clamp(1.5rem,4.5vh,3rem)] font-bold leading-[1.05] tracking-tight text-clay-green-900 max-[380px]:text-lg">
                  Simple plans, <span className="text-clay-green-700">healthy</span>{" "}
                  <span className="text-clay-orange-500">happiness.</span>
                </h2>
              </div>

              <div
                ref={carouselRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-3 w-full scrollbar-hide items-stretch md:grid md:grid-cols-3 md:gap-[1.5vw] md:overflow-visible md:items-stretch"
              >
                {plans.map((plan, i) => {
                  const colors = planColorMap[plan.color] ?? planColorMap.green;
                  const Icon = planIconMap[plan.icon] ?? planIconMap.sprout;
                  const isPopular = plan.popular;

                  return (
                    <div
                      key={plan.id}
                      className={cn(
                        "relative flex flex-col rounded-xl md:rounded-md border-[3px] p-3 md:p-[1.5vh] transition-all duration-200 hover:translate-y-0.5 min-w-[80vw] snap-center flex-shrink-0 md:min-w-0 md:w-full md:flex-shrink-1",
                        colors.cardBg,
                        colors.cardBorder
                      )}
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        boxShadow: clayShadow("clay"),
                      }}
                    >
                      {isPopular && (
                        <div className="absolute -top-2.5 md:-top-[2.5vh] left-1/2 -translate-x-1/2 z-10">
                          <span className="inline-flex items-center rounded-full bg-clay-orange-500 px-2.5 py-0.5 md:px-[1vw] md:py-[0.4vh] font-display text-[9px] md:text-[clamp(8px,1vh,10px)] font-bold text-white">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="flex justify-center mb-1.5 md:mb-[1vh] mt-4">
                        <span className={cn("flex size-9 md:size-[clamp(36px,5vh,48px)] items-center justify-center rounded-full", colors.iconBg)}>
                          <Icon className={cn("size-4.5 md:size-[clamp(18px,2.5vh,24px)]", colors.iconColor)} strokeWidth={2} />
                        </span>
                      </div>

                      <h3 className={cn("font-display text-xs md:text-[clamp(14px,2.2vh,18px)] font-bold text-center max-[380px]:text-[11px]", colors.nameColor)}>
                        {plan.name}
                      </h3>
                      <p className="font-body text-[11px] md:text-[clamp(10px,1.5vh,12px)] text-ink-muted text-center mt-0.5 max-[380px]:text-[10px]">
                        {plan.tagline}
                      </p>

                      <div className="text-center mt-1.5 md:mt-[1vh]">
                        <span className="font-display text-lg md:text-[clamp(20px,3.5vh,28px)] font-bold text-ink max-[380px]:text-base">
                          {plan.price}
                        </span>
                        <span className="font-body text-[11px] md:text-[clamp(10px,1.5vh,12px)] text-ink-muted max-[380px]:text-[10px]">{plan.period}</span>
                      </div>
                      <p className={cn("font-body text-[9px] md:text-[clamp(9px,1.2vh,11px)] text-center mt-0.5 font-medium max-[380px]:text-[8px]", colors.perMealColor)}>
                        {plan.perMeal}
                      </p>

                      <div className="flex-grow">
                        <ul className="flex flex-col gap-1 md:gap-[0.8vh] mt-2 md:mt-[1.5vh]">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-1.5 md:gap-[0.8vw]">
                              <span className={cn("flex size-4 md:size-[clamp(16px,2vh,18px)] shrink-0 items-center justify-center rounded-full max-[380px]:size-3.5", colors.checkColor)}>
                                <Check className="size-2.5 md:size-[clamp(10px,1.2vh,12px)] text-white max-[380px]:size-2" strokeWidth={3} />
                              </span>
                              <span className="font-body text-[11px] md:text-[clamp(10px,1.5vh,12px)] text-ink max-[380px]:text-[10px]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-end pt-2 md:pt-[1vh]">
                        <div className="w-20 h-20 md:w-[clamp(100px,14vh,140px)] md:h-[clamp(100px,14vh,140px)] relative max-[380px]:w-16 max-[380px]:h-16">
                          <Image
                            src={`/images/pandas/${pandaImages[i]}`}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* bottom: Why parents choose Tiny Tummies */}
          <div className="pt-3 md:pt-4">
            <FeatureBar
              title="Why parents choose Tiny Tummies"
              titleAccent="&#9829;"
              items={whyChooseFeatures}
              columns={4}
            />
          </div>
        </div>
      </section>
    </PandaBackground>
  );
}
