"use client";

import SectionShell from "@/components/ui/SectionShell";
import ScrollReveal from "@/components/islands/ScrollReveal";
import PandaMascot from "@/components/ui/PandaMascot";
import ScatterDecorations from "@/components/ui/ScatterDecorations";

export default function Transformation() {
  return (
    <SectionShell background="white" id="transformation">
      <ScatterDecorations count={8} />

      <div className="text-center mb-10 md:mb-14">
        <ScrollReveal>
          <p className="font-display text-sm font-bold tracking-widest text-tt-orange uppercase mb-3">
            The Transformation
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-tt-green-deep">
            From Morning Stress to <span className="text-tt-orange">Peace of Mind</span>
          </h2>
        </ScrollReveal>
      </div>

      <div className="grid items-center gap-6 md:gap-10 md:grid-cols-3">
        <ScrollReveal direction="left" delay={0}>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <PandaMascot variant="sad" size={140} className="drop-shadow-lg" />
            </div>
            <div className="bg-tt-pink-tint rounded-2xl p-6 max-w-xs shadow-sm border-t-4 border-tt-pink w-full">
              <h3 className="font-display text-xl font-bold text-tt-pink-dark mb-2">
                😢 The Morning Struggle
              </h3>
              <p className="text-tt-text-secondary text-sm leading-relaxed">
                &ldquo;What do I pack today?&rdquo; &ldquo;Will they even eat it?&rdquo; Decision fatigue, wasted food, and guilt — every single morning.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="hidden md:flex flex-col items-center gap-2">
              <div className="w-0.5 h-12 bg-gradient-to-b from-tt-pink to-tt-green rounded-full" />
              <div className="bg-tt-green text-white font-display font-bold text-sm px-5 py-2.5 rounded-full shadow-md animate-bounce-gentle">
                ✨ Tiny Tummies ✨
              </div>
              <div className="w-0.5 h-12 bg-gradient-to-b from-tt-green to-tt-green-light rounded-full" />
            </div>
            <div className="md:hidden flex items-center gap-3 my-3">
              <div className="w-10 h-0.5 bg-gradient-to-r from-tt-pink to-tt-green rounded-full" />
              <div className="bg-tt-green text-white font-display font-bold text-sm px-4 py-2 rounded-full shadow-md">
                ✨ Tiny Tummies ✨
              </div>
              <div className="w-10 h-0.5 bg-gradient-to-l from-tt-pink to-tt-green rounded-full" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.4}>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <PandaMascot variant="happy" size={140} className="drop-shadow-lg" />
            </div>
            <div className="bg-tt-green-tint rounded-2xl p-6 max-w-xs shadow-sm border-t-4 border-tt-green w-full">
              <h3 className="font-display text-xl font-bold text-tt-green-dark mb-2">
                😊 Happy Tummies
              </h3>
              <p className="text-tt-text-secondary text-sm leading-relaxed">
                Fresh meals delivered to school. Kid-approved flavors, balanced nutrition, zero morning stress. Your child eats happily — you relax completely.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.5}>
        <div className="mt-10 md:mt-14 text-center max-w-2xl mx-auto">
          <p className="font-display text-lg md:text-xl font-bold text-tt-green-deep italic leading-relaxed">
            &ldquo;Tiny Tummies was born from watching parents struggle every morning. We&apos;re on a mission to make healthy eating the easiest part of your child&apos;s day.&rdquo;
          </p>
          <p className="text-sm text-tt-text-secondary mt-3 font-display font-semibold">
            — The Tiny Tummies Team
          </p>
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}
