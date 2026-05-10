"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { cn, clayShadow } from "@/lib/utils";
import { heroBadge, heroHeading, heroSubtitle, heroInfoCard, heroFeatureChips } from "@/data/hero";
import { GOOGLE_FORM_URL, WHATSAPP_URL } from "@/data/shared-maps";
import PandaBackground from "@/components/ui/PandaBackground";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

export default function HeroSection() {
  const { ref: contentRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: rightRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: bottomRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const BadgeIcon = heroBadge.icon;
  const InfoIcon = heroInfoCard.icon;

  return (
    <PandaBackground count={3} className="snap-start snap-always min-h-[100dvh] md:h-screen flex flex-col">
      <section id="hero" className="relative flex flex-col flex-1">
        <div className="relative w-full px-5 md:px-[3vw] pt-20 md:pt-[calc(72px+2vh)] pb-4 md:pb-[2vh] flex flex-col flex-1">
          <div className="flex-1 flex items-center">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-[3vw] items-center w-full">
              {/* LEFT */}
              <div
                ref={contentRef}
                className="animate-on-scroll fade-up flex flex-col gap-3 md:gap-[1.5vh]"
              >
                <span className="inline-flex items-center gap-2 self-start rounded-full border-2 border-clay-green-700/20 bg-white/80 px-3 py-1.5 font-body text-xs md:text-[clamp(12px,1.3vw,15px)] font-medium text-clay-green-700 backdrop-blur-sm max-[380px]:px-2 max-[380px]:py-1 max-[380px]:text-[10px]">
                  <BadgeIcon className="size-3.5 md:size-[clamp(14px,1.2vw,16px)] text-clay-green-700" />
                  {heroBadge.text}
                </span>

                <h1 className="font-display text-3xl md:text-[clamp(2.2rem,6vh,5rem)] font-bold leading-tight md:leading-[1.05] tracking-tight text-clay-green-900 max-[380px]:text-2xl">
                  {heroHeading.prefix}
                  <span className="text-clay-green-700">{heroHeading.bold}</span>{" "}
                  <span className="text-clay-orange-500">{heroHeading.accent}</span>
                </h1>

                <p className="max-w-md font-body text-base md:text-[clamp(15px,2.2vh,20px)] leading-relaxed text-ink-muted max-[380px]:text-sm">
                  {heroSubtitle}
                </p>

                <div className="flex items-start gap-3 rounded-2xl border-[3px] border-clay-cream-border bg-white p-3 md:p-[1.2vh] max-w-md" style={{ boxShadow: clayShadow("cream") }}>
                  <span className="flex size-10 md:size-[clamp(36px,4vh,48px)] shrink-0 items-center justify-center rounded-full bg-clay-orange-500 text-white">
                    <InfoIcon className="size-4 md:size-[clamp(16px,1.8vh,20px)]" />
                  </span>
                  <div>
                    <p className="font-body text-sm md:text-[clamp(13px,1.8vh,15px)] leading-relaxed text-ink">
                      {heroInfoCard.text}
                    </p>
                    <p className="mt-0.5 font-body text-sm md:text-[clamp(13px,1.8vh,15px)] font-semibold text-clay-green-700">
                      {heroInfoCard.highlight}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-[1vh] mt-2 md:mt-[0.5vh] w-full max-w-md">
                  <Link
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex h-14 md:h-[clamp(44px,6vh,56px)] items-center justify-center gap-2 rounded-2xl md:rounded-[20px] bg-clay-orange-500 border-[3px] border-clay-orange-700 px-5 md:px-[2vw] font-display text-base md:text-[clamp(14px,2vh,18px)] font-bold text-white transition-all duration-150 hover:translate-y-0.5 whitespace-nowrap max-[380px]:h-12 max-[380px]:text-sm max-[380px]:px-4"
                    style={{ boxShadow: clayShadow("orange") }}
                  >
                    Get Started <ArrowRight className="size-5 md:size-[clamp(16px,1.8vh,20px)]" />
                  </Link>
                  <Link
                    href={WHATSAPP_URL}
                    className="flex-1 inline-flex h-14 md:h-[clamp(44px,6vh,56px)] items-center justify-center gap-2 rounded-2xl md:rounded-[20px] border-[3px] border-clay-green-700 bg-white px-5 md:px-[2vw] font-display text-base md:text-[clamp(14px,2vh,18px)] font-bold text-clay-green-700 transition-all duration-150 hover:translate-y-0.5 whitespace-nowrap max-[380px]:h-12 max-[380px]:text-sm max-[380px]:px-4"
                    style={{ boxShadow: clayShadow("green") }}
                  >
                    <svg className="size-5 md:size-[clamp(16px,1.8vh,20px)]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              {/* RIGHT */}
              <div
                ref={rightRef}
                className="animate-on-scroll fade-scale relative hidden lg:flex items-center justify-center"
              >
                <div className="relative w-[min(32vw,420px)] aspect-square">
                  <div className="absolute inset-0 bg-linear-to-br from-green-100/40 to-emerald-50/40 border-[3px] border-green-300/60 blob-outer" />
                  <div className="absolute inset-4 overflow-hidden bg-white/30 backdrop-blur-sm border-2 border-green-200/40 blob-inner">
                    <Image
                      src="/mascot/panda-mascot.png"
                      alt="Tiny Tummies mascot"
                      fill
                      className="object-contain p-[8%]"
                      priority
                    />
                  </div>

                  <div className="absolute -top-[2%] -right-[8%] flex flex-col items-center justify-center rounded-full bg-white border-[3px] border-clay-mint-border" style={{ boxShadow: clayShadow("mint") }}>
                    <span className="font-display text-[clamp(20px,2.8vh,28px)] font-bold text-clay-green-700 leading-none p-[clamp(8px,1.2vh,14px)]">100%</span>
                    <span className="font-display text-[clamp(10px,1.3vh,13px)] font-semibold text-clay-green-700 leading-tight">Fresh</span>
                    <span className="font-display text-[clamp(10px,1.3vh,13px)] font-semibold text-clay-green-700 leading-tight">& Hygienic</span>
                    <Leaf className="size-[clamp(14px,1.8vh,18px)] text-clay-green-700 mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom bar: 4 chips */}
          <div ref={bottomRef} className="animate-on-scroll fade-up pt-4 md:pt-[2vh]">
            <div className="grid grid-cols-2 md:flex md:flex-row md:items-end gap-2 md:gap-[clamp(6px,0.8vw,12px)] w-full">
              {heroFeatureChips.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.line1}
                    className="flex items-center gap-2 md:gap-[clamp(8px,0.8vw,12px)] rounded-[14px] border-2 border-clay-cream-border bg-white px-3 md:px-[clamp(12px,1.2vw,18px)] py-3 md:py-[clamp(10px,1.5vh,14px)] md:flex-1 md:min-w-0"
                    style={{ boxShadow: clayShadow("cream") }}
                  >
                    <span className={cn("flex size-9 md:size-[clamp(36px,4.5vh,44px)] shrink-0 items-center justify-center rounded-full text-white", item.color)}>
                      <Icon className="size-4 md:size-[clamp(18px,2.2vh,22px)]" />
                    </span>
                    <div className="flex flex-col min-w-0 justify-center">
                      <span className="font-body text-xs md:text-[clamp(12px,1.5vh,14px)] font-semibold text-ink leading-tight whitespace-nowrap">
                        {item.line1}
                      </span>
                      <span className="font-body text-[11px] md:text-[clamp(11px,1.3vh,13px)] text-ink-muted leading-tight whitespace-nowrap">
                        {item.line2}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PandaBackground>
  );
}
