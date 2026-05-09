"use client";

import Image from "next/image";

interface MascotBubbleProps {
  lines: string[];
  mascotSrc?: string;
  mascotAlt?: string;
  mascotWidth?: number;
  mascotHeight?: number;
  className?: string;
}

export default function MascotBubble({
  lines,
  mascotSrc = "/mascot/panda-mascot.png",
  mascotAlt = "",
  mascotWidth = 200,
  mascotHeight = 200,
  className,
}: MascotBubbleProps) {
  return (
    <div className={`relative flex flex-col items-center ${className ?? ""}`}>
      {/* speech bubble — sits above mascot */}
      <div
        className="relative mb-3 rounded-[20px] border-[3px] border-clay-cream-border bg-white px-5 py-4 shadow-[0_4px_0_0_#D8C8A0,0_8px_16px_oklch(0_0_0/0.06)] max-w-[220px]"
      >
        {lines.map((line, i) => (
          <p
            key={i}
            className={`font-body text-sm leading-snug ${
              i === 0 ? "text-ink font-semibold" : "text-ink-muted"
            } ${i > 0 ? "mt-1" : ""}`}
          >
            {line}
          </p>
        ))}
        {/* little triangle pointer */}
        <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-clay-cream-border" />
        <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white" />
      </div>

      {/* mascot */}
      <div className="panda-float">
        <Image
          src={mascotSrc}
          alt={mascotAlt}
          width={mascotWidth}
          height={mascotHeight}
          className="h-auto w-full object-contain drop-shadow-[0_16px_32px_oklch(0_0_0/0.15)]"
        />
      </div>
    </div>
  );
}