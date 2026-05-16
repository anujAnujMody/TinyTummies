"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
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
    <PandaBackground count={3} className="flex flex-col">
      <section id="pricing" className="relative flex flex-col py-12 md:py-24">
        <div className="w-full px-4 sm:px-5 md:px-[5vw] flex flex-col">
          <div className="flex flex-col gap-6 md:gap-12 max-w-250 mx-auto w-full">
              <div className="text-center shrink-0">
                <h2 className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-clay-green-900">
                  Simple plans, <span className="text-clay-green-700">healthy</span>{" "}
                  <span className="text-clay-orange-500">happiness.</span>
                </h2>
              </div>

              <div
                ref={carouselRef}
                className="flex overflow-x-auto gap-3 sm:gap-4 w-full scrollbar-hide items-stretch md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:items-stretch"
              >
                {plans.map((plan, i) => {
                  const colors = planColorMap[plan.color] ?? planColorMap.green;
                  const Icon = planIconMap[plan.icon] ?? planIconMap.sprout;
                  const isPopular = plan.popular;

                  return (
                    <div
                      key={plan.id}
                      className={cn(
                        "relative flex flex-col rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-200 hover:-translate-y-1 min-w-[85vw] flex-shrink-0 md:min-w-0 md:w-full md:flex-shrink-1 bg-white",
                        colors.cardBg,
                        colors.cardBorder
                      )}
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      }}
                    >
                      {isPopular && (
                        <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 z-10">
                          <span className="inline-flex items-center rounded-full bg-clay-orange-500 px-2.5 sm:px-3 py-0.5 sm:py-1 font-display text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="flex justify-center mb-2 sm:mb-3 mt-1 sm:mt-2">
                        <span className={cn("flex size-10 sm:size-11 md:size-12 items-center justify-center rounded-full", colors.iconBg)}>
                          <Icon className={cn("size-5 sm:size-5.5 md:size-6", colors.iconColor)} strokeWidth={2} />
                        </span>
                      </div>

                      <h3 className={cn("font-display text-sm sm:text-base md:text-base font-bold text-center", colors.nameColor)}>
                        {plan.name}
                      </h3>
                      <p className="font-body text-xs text-ink-muted text-center mt-0.5 sm:mt-1">
                        {plan.tagline}
                      </p>

                      <div className="text-center mt-2 sm:mt-3">
                        <span className="font-display text-xl sm:text-2xl md:text-2xl font-bold text-ink">
                          {plan.price}
                        </span>
                        <span className="font-body text-xs text-ink-muted">{plan.period}</span>
                      </div>
                      <p className={cn("font-body text-xs text-center mt-0.5 sm:mt-1 font-medium", colors.perMealColor)}>
                        {plan.perMeal}
                      </p>

                      <div className="flex-grow">
                        <ul className="flex flex-col gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <span className={cn("flex size-4 shrink-0 items-center justify-center rounded-full", colors.checkColor)}>
                                <Check className="size-2.5 text-white" strokeWidth={3} />
                              </span>
                              <span className="font-body text-xs sm:text-xs md:text-sm text-ink">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-end pt-2 sm:pt-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 relative">
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

          {/* bottom: Why parents choose Tiny Tummies */}
          <div className="mt-12 md:mt-16">
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
