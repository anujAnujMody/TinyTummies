"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  ClipboardList,
  Clock,
  ShieldCheck,
  Smile,
  School,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { contact } from "@/data/tiny-tummies";
import PandaBackground from "@/components/ui/PandaBackground";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

export default function HeroSection() {
  const { ref: contentRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: rightRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: bottomRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <PandaBackground
      className="snap-start snap-always h-screen flex flex-col"
      style={{ background: "#F4F9ED" }}
    >
      <section
        id="hero"
        className="relative flex flex-col flex-1"
      >
        {/* ── main content ── */}
        <div className="relative w-full px-[3vw] pt-[calc(72px+2vh)] pb-[2vh] flex flex-col flex-1">
          {/* content grid — centered in available space */}
          <div className="flex-1 flex items-center">
            <div className="grid lg:grid-cols-2 gap-[3vw] items-center w-full">
              {/* LEFT */}
              <div
                ref={contentRef}
                className="animate-on-scroll fade-up flex flex-col gap-[1.5vh]"
              >
                {/* badge */}
                <span className="inline-flex items-center gap-2 self-start rounded-full border-[2px] border-clay-green-700/20 bg-white/80 px-[1vw] py-[0.6vh] font-body text-[clamp(12px,1.3vw,15px)] font-medium text-clay-green-700 backdrop-blur-sm">
                  <Leaf className="size-[clamp(14px,1.2vw,16px)] text-clay-green-700" />
                  Healthy Meals. Happy Tummies. Brilliant Mornings.
                </span>

                {/* heading */}
                <h1 className="font-display text-[clamp(2.2rem,6vh,5rem)] font-bold leading-[1.05] tracking-tight text-clay-green-900">
                  Little Tummies Deserve{" "}
                  <span className="text-clay-green-700">Big</span>{" "}
                  <span className="text-clay-orange-500">Nutrition.</span>
                </h1>

                {/* subtitle */}
                <p className="max-w-md font-body text-[clamp(15px,2.2vh,20px)] leading-relaxed text-ink-muted">
                  Nutritious, hygienic & delicious meal boxes for kids (2–6 yrs) — made to delight both parents and schools.
                </p>

                {/* info card */}
                <div className="flex items-start gap-3 rounded-[16px] border-[3px] border-clay-cream-border bg-white p-[1.2vh] shadow-[0_4px_0_0_#D8C8A0,0_8px_16px_oklch(0_0_0/0.06)] max-w-md">
                  <span className="flex size-[clamp(36px,4vh,48px)] shrink-0 items-center justify-center rounded-full bg-clay-orange-500 text-white">
                    <ClipboardList className="size-[clamp(16px,1.8vh,20px)]" />
                  </span>
                  <div>
                    <p className="font-body text-[clamp(13px,1.8vh,15px)] leading-relaxed text-ink">
                      No more rushed mornings, messy tiffins, or skipped breakfasts.
                    </p>
                    <p className="mt-0.5 font-body text-[clamp(13px,1.8vh,15px)] font-semibold text-clay-green-700">
                      We make mornings stress-free!
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-[1vh] mt-[0.5vh] w-full max-w-md">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSegxxacmX0Udhjpdl_7lcsMVtiVaudhonyVKcfnNwJ9j4-tTA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex h-[clamp(44px,6vh,56px)] items-center justify-center gap-2 rounded-[20px] bg-clay-orange-500 border-[3px] border-clay-orange-700 px-[2vw] font-display text-[clamp(14px,2vh,18px)] font-bold text-white transition-all duration-180 hover:translate-y-[2px] whitespace-nowrap"
                    style={{ boxShadow: "0 4px 0 0 #E65100, 0 8px 16px oklch(0 0 0 / 0.1)" }}
                  >
                    Get Started <ArrowRight className="size-[clamp(16px,1.8vh,20px)]" />
                  </Link>
                  <Link
                    href={contact.whatsapp}
                    className="flex-1 inline-flex h-[clamp(44px,6vh,56px)] items-center justify-center gap-2 rounded-[20px] border-[3px] border-clay-green-700 bg-white px-[2vw] font-display text-[clamp(14px,2vh,18px)] font-bold text-clay-green-700 transition-all duration-180 hover:translate-y-[2px] whitespace-nowrap"
                    style={{ boxShadow: "0 4px 0 0 #1B5E20, 0 8px 16px oklch(0 0 0 / 0.06)" }}
                  >
                    <svg className="size-[clamp(16px,1.8vh,20px)]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              {/* RIGHT — placeholder blob */}
              <div
                ref={rightRef}
                className="animate-on-scroll fade-scale relative hidden lg:flex items-center justify-center"
              >
                {/* blob container */}
                <div className="relative w-[min(32vw,420px)] aspect-square">
                  {/* animated outer blob — soft green gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-emerald-50/40 border-[3px] border-green-300/60 blob-outer"
                  />
                  {/* animated inner blob with panda mascot */}
                  <div
                    className="absolute inset-4 overflow-hidden bg-white/30 backdrop-blur-sm border-[2px] border-green-200/40 blob-inner"
                  >
                    <Image
                      src="/mascot/panda-mascot.png"
                      alt="Tiny Tummies mascot"
                      fill
                      className="object-contain p-[8%]"
                      priority
                    />
                  </div>

                  {/* 100% badge */}
                  <div className="absolute -top-[2%] -right-[8%] flex flex-col items-center justify-center rounded-full bg-white border-[3px] border-clay-mint-border shadow-[0_4px_0_0_#B9DFA0,0_8px_16px_oklch(0_0_0/0.08)] w-[clamp(110px,13vh,150px)] h-[clamp(110px,13vh,150px)] p-[clamp(8px,1.2vh,14px)]">
                    <span className="font-display text-[clamp(20px,2.8vh,28px)] font-bold text-clay-green-700 leading-none">100%</span>
                    <span className="font-display text-[clamp(10px,1.3vh,13px)] font-semibold text-clay-green-700 leading-tight mt-0.5">Fresh</span>
                    <span className="font-display text-[clamp(10px,1.3vh,13px)] font-semibold text-clay-green-700 leading-tight">& Hygienic</span>
                    <Leaf className="size-[clamp(14px,1.8vh,18px)] text-clay-green-700 mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── bottom bar: 4 chips + mascot ── */}
          <div
            ref={bottomRef}
            className="animate-on-scroll fade-up pt-[2vh]"
          >
            <div className="flex flex-row items-end gap-[clamp(6px,0.8vw,12px)] w-full">
              {/* 4 feature chips */}
              {[
                { icon: Clock, line1: "Freshly", line2: "prepared daily", color: "bg-clay-green-700" },
                { icon: ShieldCheck, line1: "Hygienic stainless", line2: "steel boxes", color: "bg-clay-orange-500" },
                { icon: Smile, line1: "Kid-approved", line2: "presentation", color: "bg-clay-green-700" },
                { icon: School, line1: "School-friendly", line2: "delivery", color: "bg-clay-orange-500" },
              ].map((item) => (
                <div
                  key={item.line1}
                  className="flex items-center gap-[clamp(8px,0.8vw,12px)] rounded-[14px] border-[2px] border-clay-cream-border bg-white px-[clamp(12px,1.2vw,18px)] py-[clamp(10px,1.5vh,14px)] shadow-[0_3px_0_0_#D8C8A0,0_6px_12px_oklch(0_0_0/0.05)] flex-1 min-w-0"
                >
                  <span
                    className={cn(
                      "flex size-[clamp(36px,4.5vh,44px)] shrink-0 items-center justify-center rounded-full text-white",
                      item.color
                    )}
                  >
                    <item.icon className="size-[clamp(18px,2.2vh,22px)]" />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-body text-[clamp(12px,1.5vh,14px)] font-semibold text-ink leading-tight whitespace-nowrap">
                      {item.line1}
                    </span>
                    <span className="font-body text-[clamp(11px,1.3vh,13px)] text-ink-muted leading-tight whitespace-nowrap">
                      {item.line2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PandaBackground>
  );
}
