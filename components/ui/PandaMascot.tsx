interface PandaMascotProps {
  variant: "sad" | "happy" | "chef" | "peeking";
  className?: string;
  size?: number;
}

export default function PandaMascot({ variant, className = "", size = 120 }: PandaMascotProps) {
  const faces: Record<string, { eyes: string; mouth: string; cheeks: string; hat?: string }> = {
    sad: { eyes: "M35 55 Q40 50 45 55 M75 55 Q80 50 85 55", mouth: "M50 75 Q60 70 70 75", cheeks: "M30 65 Q35 60 40 65 M80 65 Q85 60 90 65" },
    happy: { eyes: "M35 50 Q40 45 45 50 M75 50 Q80 45 85 50", mouth: "M45 70 Q60 85 75 70", cheeks: "M30 65 Q35 60 40 65 M80 65 Q85 60 90 65" },
    chef: { eyes: "M35 50 Q40 45 45 50 M75 50 Q80 45 85 50", mouth: "M45 70 Q60 85 75 70", cheeks: "M30 65 Q35 60 40 65 M80 65 Q85 60 90 65", hat: "M20 30 L60 5 L100 30 Z" },
    peeking: { eyes: "M35 50 Q40 45 45 50 M75 50 Q80 45 85 50", mouth: "M50 75 Q60 80 70 75", cheeks: "M30 65 Q35 60 40 65 M80 65 Q85 60 90 65" },
  };

  const f = faces[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={`${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="60" cy="95" rx="45" ry="35" fill="#1B5E20" />
      {/* Ears */}
      <circle cx="25" cy="30" r="18" fill="#1B5E20" />
      <circle cx="95" cy="30" r="18" fill="#1B5E20" />
      {/* Head */}
      <ellipse cx="60" cy="55" rx="50" ry="42" fill="white" />
      {/* Eye patches */}
      <ellipse cx="40" cy="52" rx="18" ry="22" fill="#1B5E20" />
      <ellipse cx="80" cy="52" rx="18" ry="22" fill="#1B5E20" />
      {/* Eyes */}
      <path d={f.eyes} stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Nose */}
      <ellipse cx="60" cy="65" rx="6" ry="4" fill="#1B5E20" />
      {/* Mouth */}
      <path d={f.mouth} stroke="#1B5E20" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Cheeks */}
      <circle cx="35" cy="62" r="5" fill="#FF6B9D" opacity="0.4" />
      <circle cx="85" cy="62" r="5" fill="#FF6B9D" opacity="0.4" />
      {/* Chef hat */}
      {f.hat && (
        <>
          <path d={f.hat} fill="white" stroke="#1B5E20" strokeWidth="2" />
          <rect x="25" y="28" width="70" height="6" rx="3" fill="#1B5E20" />
        </>
      )}
      {/* Peeking hands */}
      {variant === "peeking" && (
        <>
          <ellipse cx="15" cy="85" rx="12" ry="18" fill="#1B5E20" />
          <ellipse cx="105" cy="85" rx="12" ry="18" fill="#1B5E20" />
        </>
      )}
    </svg>
  );
}
