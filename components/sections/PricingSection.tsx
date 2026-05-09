"use client";

import Image from "next/image";
import { Leaf, Star, Crown, Check, ChefHat, Shield, Truck, Smile } from "lucide-react";
import { cn } from "@/lib/utils";
import { plans } from "@/data/tiny-tummies";
import FeatureBar from "@/components/ui/FeatureBar";
import PandaBackground from "@/components/ui/PandaBackground";

const planStyles: Record<string, {
  nameColor: string;
  iconBg: string;
  iconColor: string;
  checkColor: string;
  cardBg: string;
  cardBorder: string;
  perMealColor: string;
}> = {
  green: {
    nameColor: "text-clay-green-700",
    iconBg: "bg-clay-green-700",
    iconColor: "text-white",
    checkColor: "bg-clay-green-700",
    cardBg: "bg-[#FAF9F6]",
    cardBorder: "border-[#E8E4D9]",
    perMealColor: "text-clay-green-700",
  },
  orange: {
    nameColor: "text-clay-orange-500",
    iconBg: "bg-clay-orange-500",
    iconColor: "text-white",
    checkColor: "bg-clay-orange-500",
    cardBg: "bg-white",
    cardBorder: "border-clay-orange-500/30",
    perMealColor: "text-clay-orange-500",
  },
  purple: {
    nameColor: "text-[#7B4FA3]",
    iconBg: "bg-[#7B4FA3]",
    iconColor: "text-white",
    checkColor: "bg-[#7B4FA3]",
    cardBg: "bg-[#F8F5FB]",
    cardBorder: "border-[#D4C4E0]",
    perMealColor: "text-[#7B4FA3]",
  },
};

const iconMap: Record<string, React.ElementType> = {
  sprout: Leaf,
  star: Star,
  crown: Crown,
};

const whyChoose = [
  {
    icon: ChefHat,
    title: "Nutritionist Planned Meals",
    text: "Designed for growing children.",
    color: "text-clay-green-700",
    border: "border-clay-green-700/20",
    bg: "bg-clay-mint",
  },
  {
    icon: Leaf,
    title: "No Junk, Ever",
    text: "No preservatives, no artificial colors.",
    color: "text-clay-green-700",
    border: "border-clay-green-700/20",
    bg: "bg-clay-mint",
  },
  {
    icon: Smile,
    title: "Kids Love the Taste",
    text: "Yummy meals they enjoy!",
    color: "text-clay-green-700",
    border: "border-clay-green-700/20",
    bg: "bg-clay-mint",
  },
  {
    icon: Shield,
    title: "Hygienic & 100% Safe",
    text: "Cooked in clean kitchens and packed with care.",
    color: "text-clay-green-700",
    border: "border-clay-green-700/20",
    bg: "bg-clay-mint",
  },
  {
    icon: Truck,
    title: "On-time Delivery Everyday",
    text: "Delivered to your child's school.",
    color: "text-clay-green-700",
    border: "border-clay-green-700/20",
    bg: "bg-clay-mint",
  },
];

export default function PricingSection() {
  return (
    <PandaBackground
      className="snap-start snap-always h-screen flex flex-col"
      style={{ background: "#F4F9ED" }}
    >
      <section
        id="pricing"
        className="relative flex flex-col flex-1"
      >
      <div className="w-full px-[3vw] pt-[calc(72px+2vh)] pb-[1.5vh] flex flex-col flex-1">
        {/* heading + cards — centered as a block between navbar and feature bar */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col gap-[2vh] max-w-250 mx-auto w-full">
            {/* header */}
            <div className="text-center">
              <h2 className="font-display text-[clamp(1.5rem,4.5vh,3rem)] font-bold leading-[1.05] tracking-tight text-clay-green-900">
                Simple plans, <span className="text-clay-green-700">healthy</span>{" "}
                <span className="text-clay-orange-500">happiness.</span>
              </h2>
            </div>

            {/* cards */}
            <div className="grid md:grid-cols-3 gap-[1.5vw] w-full">
          {plans.map((plan, i) => {
            const style = planStyles[plan.color] ?? planStyles.green;
            const Icon = iconMap[plan.icon] ?? Leaf;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col rounded-md border-[3px] p-[1.5vh] transition-all duration-200 hover:translate-y-0.5",
                  style.cardBg,
                  style.cardBorder
                )}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  boxShadow: `0 4px 0 0 ${style.cardBorder.replace("border-", "").replace("[", "").replace("]", "")}, 0 12px 24px oklch(0 0 0 / 0.08)`,
                }}
              >
                {/* Most Popular badge */}
                {isPopular && (
                  <div className="absolute -top-[2.5vh] left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center rounded-full bg-clay-orange-500 px-[1vw] py-[0.4vh] font-display text-[clamp(8px,1vh,10px)] font-bold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* icon */}
                <div className="flex justify-center mb-[1vh]">
                  <span
                    className={cn(
                      "flex size-[clamp(36px,5vh,48px)] items-center justify-center rounded-full",
                      style.iconBg
                    )}
                  >
                    <Icon className={cn("size-[clamp(18px,2.5vh,24px)]", style.iconColor)} strokeWidth={2} />
                  </span>
                </div>

                {/* name & tagline */}
                <h3
                  className={cn(
                    "font-display text-[clamp(14px,2.2vh,18px)] font-bold text-center",
                    style.nameColor
                  )}
                >
                  {plan.name}
                </h3>
                <p className="font-body text-[clamp(10px,1.5vh,12px)] text-ink-muted text-center mt-0.5">
                  {plan.tagline}
                </p>

                {/* price */}
                <div className="text-center mt-[1vh]">
                  <span className="font-display text-[clamp(20px,3.5vh,28px)] font-bold text-ink">
                    {plan.price}
                  </span>
                  <span className="font-body text-[clamp(10px,1.5vh,12px)] text-ink-muted">{plan.period}</span>
                </div>
                <p
                  className={cn(
                    "font-body text-[clamp(9px,1.2vh,11px)] text-center mt-0.5 font-medium",
                    style.perMealColor
                  )}
                >
                  {plan.perMeal}
                </p>

                {/* features */}
                <ul className="flex flex-col gap-[0.8vh] mt-[1.5vh]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-[0.8vw]">
                      <span
                        className={cn(
                          "flex size-[clamp(16px,2vh,18px)] shrink-0 items-center justify-center rounded-full",
                          style.checkColor
                        )}
                      >
                        <Check className="size-[clamp(10px,1.2vh,12px)] text-white" strokeWidth={3} />
                      </span>
                      <span className="font-body text-[clamp(10px,1.5vh,12px)] text-ink">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* panda mascot — pushed to bottom-right */}
                <div className="flex justify-end mt-auto pt-[1vh]">
                  <div className="w-[clamp(100px,14vh,140px)] h-[clamp(100px,14vh,140px)] relative">
                    <Image
                      src={"/images/pandas/" + ["panda-e.png", "panda-c.png", "panda-g.png"][i]}
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

        {/* ── bottom: Why parents choose Tiny Tummies ── */}
        <FeatureBar
          title="Why parents choose Tiny Tummies"
          titleAccent="&#9829;"
          items={whyChoose}
          columns={5}
        />
      </div>
    </section>
    </PandaBackground>
  );
}