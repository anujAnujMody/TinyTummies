"use client";

import Image from "next/image";
import { problems, solutions, howItWorksFeatures } from "@/data/how-it-works";
import FeatureBar from "@/components/ui/FeatureBar";
import PandaBackground from "@/components/ui/PandaBackground";
import { useScrollAnimation, useStaggerAnimation } from "@/lib/hooks/useScrollAnimation";

export default function HowItWorksSection() {
  const { ref: leftRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: centerRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: rightRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: problemsRef } = useStaggerAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: solutionsRef } = useStaggerAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <PandaBackground className="snap-start snap-always h-screen flex flex-col">
      <section id="how" className="relative flex flex-col flex-1">
        <div className="w-full px-[3vw] pt-[calc(72px+2vh)] pb-[2vh] flex flex-col flex-1">
          <div className="grid lg:grid-cols-3 gap-[2vw] items-center flex-1">
            {/* LEFT — Problems */}
            <div ref={leftRef} className="animate-on-scroll fade-left flex flex-col gap-[2vh]">
              <h3 className="font-display text-[clamp(14px,2.5vh,20px)] font-bold text-clay-orange-500">
                We know your mornings can be tough...
              </h3>

              <div ref={problemsRef} className="flex flex-col gap-[2vh]">
                {problems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      data-animate
                      data-animate-delay={(0.1 + i * 0.1).toFixed(2)}
                      className="flex items-start gap-[1vw] animate-on-scroll fade-up"
                    >
                      <span className={`flex size-[clamp(36px,5vh,48px)] shrink-0 items-center justify-center rounded-full ${item.iconBg}`}>
                        <Icon className={`size-[clamp(16px,2.2vh,22px)] ${item.iconColor}`} strokeWidth={2} />
                      </span>
                      <div className="pt-0.5">
                        <p className="font-display text-[clamp(12px,2vh,16px)] font-bold text-ink">
                          {item.title}
                        </p>
                        <p className="font-body text-[clamp(11px,1.6vh,14px)] text-ink-muted leading-relaxed mt-0.5">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CENTER — Circular image */}
            <div ref={centerRef} className="animate-on-scroll fade-scale relative hidden lg:flex items-center justify-center">
              <div className="relative w-[min(24vw,320px)] aspect-square">
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#A3D133] to-[#4CAF50] opacity-20" />
                <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-white shadow-[0_8px_32px_rgba(76,175,80,0.2)]">
                  <Image
                    src="/images/hero-kid-eating.jpg"
                    alt="Child enjoying a healthy meal"
                    fill
                    sizes="(max-width: 1024px) 90vw, 320px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT — Solutions */}
            <div ref={rightRef} className="animate-on-scroll fade-right flex flex-col gap-[2vh]">
              <h3 className="font-display text-[clamp(14px,2.5vh,20px)] font-bold text-clay-green-700">
                We make it easy & stress-free!
              </h3>

              <div ref={solutionsRef} className="flex flex-col gap-[2vh]">
                {solutions.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      data-animate
                      data-animate-delay={(0.1 + i * 0.1).toFixed(2)}
                      className="flex items-start gap-[1vw] animate-on-scroll fade-up"
                    >
                      <span className={`flex size-[clamp(36px,5vh,48px)] shrink-0 items-center justify-center rounded-full ${item.iconBg}`}>
                        <Icon className={`size-[clamp(16px,2.2vh,22px)] ${item.iconColor}`} strokeWidth={2} />
                      </span>
                      <div className="pt-0.5">
                        <p className="font-display text-[clamp(12px,2vh,16px)] font-bold text-ink">
                          {item.title}
                        </p>
                        <p className="font-body text-[clamp(11px,1.6vh,14px)] text-ink-muted leading-relaxed mt-0.5">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* bottom feature bar */}
          <FeatureBar
            title="What makes Tiny Tummies special?"
            titleAccent="&#9829;"
            items={howItWorksFeatures}
            columns={4}
          />
        </div>
      </section>
    </PandaBackground>
  );
}
