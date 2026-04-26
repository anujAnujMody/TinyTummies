"use client";

import { useSyncExternalStore } from "react";

// React-recommended way to detect client vs server (no useEffect needed)
function useIsClient() {
  return useSyncExternalStore(
    () => () => {}, // no-op subscribe
    () => true,     // client snapshot
    () => false     // server snapshot
  );
}

// Deterministic pseudo-random based on index (no Math.random in render)
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

const decoShapes = [
  { type: "star", svg: <path d="M10 0 L12 7 L19 7 L13 11 L15 18 L10 14 L5 18 L7 11 L1 7 L8 7 Z" fill="currentColor" /> },
  { type: "heart", svg: <path d="M10 18 C10 18 0 12 0 6 C0 2 3 0 6 0 C8 0 10 2 10 2 C10 2 12 0 14 0 C17 0 20 2 20 6 C20 12 10 18 10 18 Z" fill="currentColor" /> },
  { type: "cherry", svg: <><circle cx="6" cy="14" r="5" fill="currentColor" /><circle cx="14" cy="14" r="5" fill="currentColor" /><path d="M10 9 Q10 2 16 0" stroke="currentColor" strokeWidth="1.5" fill="none" /></> },
  { type: "leaf", svg: <path d="M10 0 Q20 10 10 20 Q0 10 10 0" fill="currentColor" /> },
  { type: "circle", svg: <circle cx="10" cy="10" r="8" fill="currentColor" /> },
  { type: "squiggle", svg: <path d="M0 10 Q5 0 10 10 Q15 20 20 10" stroke="currentColor" strokeWidth="2" fill="none" /> },
];

const colors = ["text-tt-green/20", "text-tt-orange/20", "text-tt-pink/20", "text-tt-yellow/30", "text-tt-blue/15"];

interface ScatterDecorationsProps {
  count?: number;
  className?: string;
}

export default function ScatterDecorations({ count = 12, className = "" }: ScatterDecorationsProps) {
  const isClient = useIsClient();

  // Server renders empty placeholder; client renders actual decorations
  // This avoids Math.sin() floating-point differences between Node.js and browser
  if (!isClient) {
    return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} />;
  }

  const items = Array.from({ length: count }, (_, i) => {
    const shape = decoShapes[i % decoShapes.length];
    const color = colors[i % colors.length];
    const top = seededRandom(i * 7) * 100;
    const left = seededRandom(i * 13) * 100;
    const size = 16 + seededRandom(i * 23) * 24;
    const rotate = seededRandom(i * 31) * 360;
    const delay = seededRandom(i * 41) * 5;
    const duration = 6 + seededRandom(i * 53) * 6;
    return { ...shape, color, top, left, size, rotate, delay, duration, key: i };
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {items.map((item) => (
        <div
          key={item.key}
          className={`absolute ${item.color} animate-float`}
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            width: item.size,
            height: item.size,
            transform: `rotate(${item.rotate}deg)`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          <svg viewBox="0 0 20 20" width="100%" height="100%">
            {item.svg}
          </svg>
        </div>
      ))}
    </div>
  );
}
