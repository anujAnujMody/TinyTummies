"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { cn, clayShadow } from "@/lib/utils";
import { plans, whyChooseFeatures } from "@/data/pricing";
import { planIconMap, planColorMap } from "@/data/shared-maps";
import FeatureBar from "@/components/ui/FeatureBar";
import PandaBackground from "@/components/ui/PandaBackground";

const pandaImages = ["panda-e.png", "panda-c.png", "panda-g.png"];

export default function PricingSection() {
  return (
    <PandaBackground className="snap-start snap-always h-screen flex flex-col">
      <section id="pricing" className="relative flex flex-col flex-1">
        <div className="w-full px-[3vw] pt-[calc(72px+2vh)] pb-[1.5vh] flex flex-col flex-1">
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col gap-[2vh] max-w-250 mx-auto w-full">
              <div className="text-center">
                <h2 className="font-display text-[clamp(1.5rem,4.5vh,3rem)] font-bold leading-[1.05] tracking-tight text-clay-green-900">
                  Simple plans, <span className="text-clay-green-700">healthy</span>{" "}
                  <span className="text-clay-orange-500">happiness.</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-[1.5vw] w-full">
                {plans.map((plan, i) => {
                  const colors = planColorMap[plan.color] ?? planColorMap.green;
                  const Icon = planIconMap[plan.icon] ?? planIconMap.sprout;
                  const isPopular = plan.popular;

                  return (
                    <div
                      key={plan.id}
                      className={cn(
                        "relative flex flex-col rounded-md border-[3px] p-[1.5vh] transition-all duration-200 hover:translate-y-0.5",
                        colors.cardBg,
                        colors.cardBorder
                      )}
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        boxShadow: clayShadow("clay"),
                      }}
                    >
                      {isPopular && (
                        <div className="absolute -top-[2.5vh] left-1/2 -translate-x-1/2 z-10">
                          <span className="inline-flex items-center rounded-full bg-clay-orange-500 px-[1vw] py-[0.4vh] font-display text-[clamp(8px,1vh,10px)] font-bold text-white">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="flex justify-center mb-[1vh]">
                        <span className={cn("flex size-[clamp(36px,5vh,48px)] items-center justify-center rounded-full", colors.iconBg)}>
                          <Icon className={cn("size-[clamp(18px,2.5vh,24px)]", colors.iconColor)} strokeWidth={2} />
                        </span>
                      </div>

                      <h3 className={cn("font-display text-[clamp(14px,2.2vh,18px)] font-bold text-center", colors.nameColor)}>
                        {plan.name}
                      </h3>
                      <p className="font-body text-[clamp(10px,1.5vh,12px)] text-ink-muted text-center mt-0.5">
                        {plan.tagline}
                      </p>

                      <div className="text-center mt-[1vh]">
                        <span className="font-display text-[clamp(20px,3.5vh,28px)] font-bold text-ink">
                          {plan.price}
                        </span>
                        <span className="font-body text-[clamp(10px,1.5vh,12px)] text-ink-muted">{plan.period}</span>
                      </div>
                      <p className={cn("font-body text-[clamp(9px,1.2vh,11px)] text-center mt-0.5 font-medium", colors.perMealColor)}>
                        {plan.perMeal}
                      </p>

                      <ul className="flex flex-col gap-[0.8vh] mt-[1.5vh]">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-[0.8vw]">
                            <span className={cn("flex size-[clamp(16px,2vh,18px)] shrink-0 items-center justify-center rounded-full", colors.checkColor)}>
                              <Check className="size-[clamp(10px,1.2vh,12px)] text-white" strokeWidth={3} />
                            </span>
                            <span className="font-body text-[clamp(10px,1.5vh,12px)] text-ink">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex justify-end mt-auto pt-[1vh]">
                        <div className="w-[clamp(100px,14vh,140px)] h-[clamp(100px,14vh,140px)] relative">
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
          <FeatureBar
            title="Why parents choose Tiny Tummies"
            titleAccent="&#9829;"
            items={whyChooseFeatures}
            columns={5}
          />
        </div>
      </section>
    </PandaBackground>
  );
}
