"use client";

import { cn } from "@/lib/utils";
import { useScrollAnimation, useStaggerAnimation } from "@/lib/hooks/useScrollAnimation";

interface FeatureBarItem {
  icon: React.ElementType;
  title: string;
  text: string;
  color: string;
  border: string;
  bg: string;
}

interface FeatureBarProps {
  title: string;
  titleAccent?: string;
  items: FeatureBarItem[];
  columns?: 4 | 5;
}

export default function FeatureBar({ title, titleAccent, items, columns = 5 }: FeatureBarProps) {
  const { ref: containerRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: itemsRef } = useStaggerAnimation<HTMLDivElement>({ threshold: 0.05 });

  const colClass = columns === 4
    ? "grid-cols-2 md:grid-cols-4"
    : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";

  return (
    <div
      ref={containerRef}
      className="animate-on-scroll fade-up"
    >
      <div className="rounded-[14px] border-2 border-clay-mint-border bg-white/80 backdrop-blur-sm px-4 py-3 md:px-[2vw] md:py-[1.5vh] shadow-[0_2px_0_0_#B9DFA0,0_6px_12px_oklch(0_0 0/0.05)]">
        <h3 className="font-display text-sm md:text-[clamp(13px,2vh,16px)] font-bold text-clay-green-900 text-center mb-3 md:mb-[1.2vh] max-[380px]:text-xs">
          {title}{" "}
          {titleAccent && <span className="text-clay-green-700">{titleAccent}</span>}
        </h3>

        <div ref={itemsRef} className={cn("grid gap-3 md:gap-[1vh]", colClass)}>
          {items.map((item, i) => (
            <div
              key={item.title}
              data-animate
              data-animate-delay={(0.08 + i * 0.06).toFixed(2)}
              className="animate-on-scroll fade-up flex flex-col items-center text-center gap-1.5 md:gap-[0.6vh] px-1 md:px-[0.5vw]"
            >
              <span className={cn(
                "flex size-10 md:size-[clamp(32px,4.5vh,40px)] items-center justify-center rounded-full border-2 max-[380px]:size-9",
                item.bg,
                item.border
              )}>
                <item.icon className={cn("size-5 md:size-[clamp(16px,2.2vh,20px)] max-[380px]:size-4", item.color)} strokeWidth={2} />
              </span>
              <div>
                <p className="font-display text-xs md:text-[clamp(11px,1.5vh,13px)] font-bold text-ink leading-tight max-[380px]:text-[10px]">
                  {item.title}
                </p>
                <p className="font-body text-[10px] md:text-[clamp(10px,1.2vh,11px)] text-ink-muted leading-relaxed mt-0.5 max-[380px]:text-[9px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}