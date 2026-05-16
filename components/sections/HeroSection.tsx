"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Smile } from "lucide-react";
import { cn, clayShadow } from "@/lib/utils";
import { heroBadge, heroHeading, heroSubtitle } from "@/data/hero";
import { GOOGLE_FORM_URL, WHATSAPP_URL } from "@/data/shared-maps";
import PandaBackground from "@/components/ui/PandaBackground";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

export default function HeroSection() {
  const { ref: contentRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: rightRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const BadgeIcon = heroBadge.icon;

  const featureChips = [
    { icon: Clock, line1: "Freshly", line2: "prepared daily", color: "bg-clay-green-700" },
    { icon: ShieldCheck, line1: "Hygienic stainless", line2: "steel boxes", color: "bg-clay-orange-500" },
    { icon: Smile, line1: "Kid-approved", line2: "presentation", color: "bg-clay-green-700" },
  ] as const;

  return (
    <PandaBackground count={3} className="flex flex-col">
      <section id="hero" className="relative">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[length:24px_24px] text-clay-green-900 pointer-events-none" />

        {/* Mobile mascot - top center, animated */}
        <div className="flex md:hidden justify-center md:pt-20 pb-4">
          <div className="w-46 h-46 relative panda-float">
            <Image
              src="/mascot/panda-mascot.png"
              alt="Tiny Tummies mascot"
              fill
              className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>

        {/* Content - natural height, no forced centering */}
        <div className="relative w-full px-4 sm:px-5 md:px-[5vw] pt-4 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20 w-full max-w-7xl mx-auto">
            {/* LEFT - Content */}
            <div
              ref={contentRef}
              className="animate-on-scroll fade-up flex flex-col gap-4 sm:gap-5 w-full"
            >
              <span className="inline-flex items-center gap-2 self-start rounded-full border-2 border-clay-green-700/20 bg-white/80 px-3 sm:px-4 py-1.5 sm:py-2 font-body text-xs sm:text-sm font-medium text-clay-green-700 backdrop-blur-sm">
                <BadgeIcon className="size-3.5 sm:size-4 text-clay-green-700" />
                {heroBadge.text}
              </span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-clay-green-900">
                {heroHeading.prefix}
                <span className="text-clay-green-700">{heroHeading.bold}</span>{" "}
                <span className="text-clay-orange-500">{heroHeading.accent}</span>
              </h1>

              <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed text-ink-muted max-w-lg">
                {heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-full bg-clay-orange-500 px-6 sm:px-7 font-display text-sm sm:text-base font-bold text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
                  style={{ boxShadow: clayShadow("orange") }}
                >
                  Get Started <ArrowRight className="size-4 sm:size-5" />
                </Link>
                <Link
                  href={WHATSAPP_URL}
                  className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-full border-[3px] border-clay-green-700 bg-white px-6 sm:px-7 font-display text-sm sm:text-base font-bold text-clay-green-700 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  style={{ boxShadow: clayShadow("green") }}
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </Link>
              </div>

              {/* Feature chips - marquee on mobile */}
              <div className="relative overflow-hidden sm:overflow-visible">
                <div className="flex gap-2 animate-marquee sm:animate-none sm:flex-wrap sm:overflow-visible">
                  {[...featureChips, ...featureChips].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={`${item.line1}-${i}`}
                        className="flex items-center gap-1.5 rounded-full bg-white/60 border border-clay-green-200/40 px-3 py-1.5 shrink-0 backdrop-blur-sm"
                      >
                        <span className={cn("flex size-5 shrink-0 items-center justify-center rounded-full text-white", item.color)}>
                          <Icon className="size-3" />
                        </span>
                        <span className="text-xs font-medium text-ink whitespace-nowrap">{item.line1} {item.line2}</span>
                      </div>
                    );
                  })}
                </div>
                {/* Eclipse fade edges - mobile only */}
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-clay-cream to-transparent pointer-events-none sm:hidden" />
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-clay-cream to-transparent pointer-events-none sm:hidden" />
              </div>
            </div>

            {/* RIGHT - Kid image + Mascot (hidden on mobile) */}
            <div
              ref={rightRef}
              className="animate-on-scroll fade-scale relative hidden md:flex items-start justify-center flex-shrink-0"
            >
              <div className="relative w-[280px] h-[320px] md:w-[340px] md:h-[380px]">
                {/* Background blob */}
                <div className="absolute inset-0 bg-linear-to-br from-clay-mint/50 to-clay-butter/30 rounded-3xl blob-outer" />

                {/* Kid image */}
                <div className="absolute inset-2 overflow-hidden rounded-2xl border-4 border-white/60 shadow-2xl">
                  <Image
                    src="/images/hero-kid-eating.jpg"
                    alt="Happy child enjoying Tiny Tummies meal"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                </div>

                {/* 100% Fresh badge */}
                <div className="absolute -top-3 -right-3 flex items-center gap-1.5 rounded-full bg-clay-orange-500 px-3.5 py-2 shadow-lg border-2 border-white/50">
                  <span className="font-display text-sm font-bold text-white leading-none">100%</span>
                  <span className="text-xs text-white/90 font-medium">Fresh</span>
                </div>

                {/* Mascot peeking from bottom-right */}
                <div className="absolute -bottom-10 -right-10 w-[150px] md:w-[180px] lg:w-[200px] z-20">
                  <Image
                    src="/mascot/panda-mascot.png"
                    alt="Tiny Tummies mascot"
                    width={240}
                    height={240}
                    className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.2)] panda-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PandaBackground>
  );
}
