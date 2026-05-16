"use client";

import Image from "next/image";
import { useLenis } from "lenis/react";
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

  useLenis((lenis) => {
    const scroll = lenis.scroll;
    const circleDesktop = document.getElementById("parallax-circle-desktop");
    const circleMobile = document.getElementById("parallax-circle-mobile");
    if (circleDesktop) {
      const offsetTop = circleDesktop.offsetTop;
      const translateY = (scroll - offsetTop) * 0.08;
      circleDesktop.style.transform = `translateY(${translateY}px)`;
    }
    if (circleMobile) {
      const offsetTop = circleMobile.offsetTop;
      const translateY = (scroll - offsetTop) * 0.08;
      circleMobile.style.transform = `translateY(${translateY}px)`;
    }
  });

  return (
    <PandaBackground count={3} showMascots={false}>
      <section id="how" className="relative flex flex-col py-12 md:py-24">
        <div className="w-full px-4 sm:px-5 md:px-[5vw] flex flex-col">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
            {/* LEFT — Problems */}
            <div ref={leftRef} className="animate-on-scroll fade-left flex flex-col gap-5 sm:gap-6 md:gap-8">
              <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-clay-orange-500">
                We know your mornings can be tough...
              </h3>

              <div ref={problemsRef} className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                {problems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      data-animate
                      data-animate-delay={(0.1 + i * 0.1).toFixed(2)}
                      className="flex items-start gap-3 sm:gap-4 animate-on-scroll fade-up"
                    >
                      <span className={`flex size-11 sm:size-12 md:size-14 shrink-0 items-center justify-center rounded-2xl ${item.iconBg}`}>
                        <Icon className={`size-5 sm:size-6 md:size-7 ${item.iconColor}`} strokeWidth={2} />
                      </span>
                      <div className="pt-0.5 sm:pt-1">
                        <p className="font-display text-sm sm:text-sm md:text-base font-bold text-ink">
                          {item.title}
                        </p>
                        <p className="font-body text-xs sm:text-xs md:text-sm text-ink-muted leading-relaxed mt-0.5 sm:mt-1">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CENTER — Circular image with organic blob */}
            <div ref={centerRef} className="animate-on-scroll fade-scale relative hidden lg:flex items-center justify-center order-last lg:order-none lg:pt-8">
              <div id="parallax-circle-desktop" className="relative w-[min(28vw,360px)] aspect-square will-change-transform">
                {/* Organic blob background */}
                <div
                  className="absolute inset-[-10%] rounded-[45%_55%_55%_45%_/_55%_45%_55%_45%] bg-gradient-to-br from-clay-mint/40 to-clay-butter/30 blob-outer"
                  style={{
                    transform: "rotate(-15deg)",
                  }}
                />
                {/* Image container */}
                <div className="absolute inset-[3%] rounded-[45%_55%_55%_45%_/_55%_45%_55%_45%] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/images/gallery/gallery-05.JPG"
                    alt="Child enjoying a healthy meal"
                    fill
                    sizes="(max-width: 1024px) 90vw, 360px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT — Solutions */}
            <div ref={rightRef} className="animate-on-scroll fade-right flex flex-col gap-5 sm:gap-6 md:gap-8">
              <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-clay-green-700">
                We make it easy & stress-free!
              </h3>

              <div ref={solutionsRef} className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                {solutions.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      data-animate
                      data-animate-delay={(0.1 + i * 0.1).toFixed(2)}
                      className="flex items-start gap-3 sm:gap-4 animate-on-scroll fade-up"
                    >
                      <span className={`flex size-11 sm:size-12 md:size-14 shrink-0 items-center justify-center rounded-2xl ${item.iconBg}`}>
                        <Icon className={`size-5 sm:size-6 md:size-7 ${item.iconColor}`} strokeWidth={2} />
                      </span>
                      <div className="pt-0.5 sm:pt-1">
                        <p className="font-display text-sm sm:text-sm md:text-base font-bold text-ink">
                          {item.title}
                        </p>
                        <p className="font-body text-xs sm:text-xs md:text-sm text-ink-muted leading-relaxed mt-0.5 sm:mt-1">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile image between problems and solutions - hidden */}
          {/* <div ref={centerRef} className="animate-on-scroll fade-scale relative lg:hidden flex items-center justify-center mt-10 mb-8">
            <div id="parallax-circle-mobile" className="relative w-[min(60vw,300px)] aspect-square will-change-transform">
              <div
                className="absolute inset-[-10%] rounded-[45%_55%_55%_45%_/_55%_45%_55%_45%] bg-gradient-to-br from-clay-mint/40 to-clay-butter/30 blob-outer"
                style={{
                  transform: "rotate(-15deg)",
                }}
              />
              <div className="absolute inset-[3%] rounded-[45%_55%_55%_45%_/_55%_45%_55%_45%] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/gallery/gallery-05.JPG"
                  alt="Child enjoying a healthy meal"
                  fill
                  sizes="60vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div> */}

          {/* bottom feature bar */}
          <div className="mt-12 md:mt-16">
            <FeatureBar
              title="What makes Tiny Tummies special?"
              titleAccent="&#9829;"
              items={howItWorksFeatures}
              columns={4}
            />
          </div>
        </div>
      </section>
    </PandaBackground>
  );
}
