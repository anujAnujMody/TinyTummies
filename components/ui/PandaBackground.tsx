"use client";

import Image from "next/image";

interface PandaBackgroundProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  count?: number;
}

const pandaImages = [
  "/images/pandas/panda-lunchbox.png",
  "/images/pandas/panda-carrot.png",
  "/images/pandas/panda-bottle.png",
];

function seededRandom(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generatePandas(count: number) {
  const rand = seededRandom(42);
  const placed: { top: number; left: number; size: number }[] = [];
  const MIN_DIST = 14;
  const MAX_RETRIES = 80;

  for (let i = 0; i < count; i++) {
    let top = 0, left = 0, size = 0, retries = 0;
    let ok = false;

    while (!ok && retries < MAX_RETRIES) {
      top = 5 + rand() * 80;
      left = 5 + rand() * 85;
      size = 70 + Math.floor(rand() * 55);
      ok = placed.every((p) => {
        const dy = p.top - top;
        const dx = p.left - left;
        return Math.sqrt(dx * dx + dy * dy) > MIN_DIST;
      });
      retries++;
    }

    placed.push({ top, left, size });
  }

  return placed.map((p, i) => ({
    top: `${p.top.toFixed(2)}%`,
    left: `${p.left.toFixed(2)}%`,
    size: p.size,
    opacity: 0.12 + rand() * 0.08,
    delay: rand() * 3,
    duration: 5 + rand() * 4,
    image: pandaImages[i % 3],
    isAlt: i % 2 === 1,
  }));
}

const pandas = generatePandas(7);

export default function PandaBackground({ children, className, style, count = 7 }: PandaBackgroundProps) {
  const displayPandas = count === 7 ? pandas : generatePandas(count);

  return (
    <div className={`relative flex flex-col ${className ?? ""}`} style={style}>
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {displayPandas.map((p, i) => (
          <div
            key={i}
            className={`absolute ${p.isAlt ? "panda-float-alt" : "panda-float"}`}
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          >
            <Image src={p.image} alt="" fill className="object-contain" style={{ opacity: p.opacity }} />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        {children}
      </div>
    </div>
  );
}
