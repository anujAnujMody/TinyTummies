"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode, ElementType } from "react";

import { cn } from "@/lib/utils";

export type Tone =
  | "cream"
  | "mint"
  | "butter"
  | "blush"
  | "sky"
  | "coral"
  | "white";

const toneBg: Record<Tone, string> = {
  cream: "bg-clay-cream",
  mint: "bg-clay-mint",
  butter: "bg-clay-butter",
  blush: "bg-clay-blush",
  sky: "bg-clay-sky",
  coral: "bg-clay-coral",
  white: "bg-white",
};

const toneBorder: Record<Tone, string> = {
  cream: "border-clay-cream-border",
  mint: "border-clay-mint-border",
  butter: "border-clay-butter-border",
  blush: "border-clay-blush-border",
  sky: "border-clay-sky-border",
  coral: "border-clay-coral-border",
  white: "border-gray-200",
};

const toneShadowOffset: Record<Tone, string> = {
  cream: "#C8B880",
  mint: "#B9DFA0",
  butter: "#E8D5A0",
  blush: "#E8A0B8",
  sky: "#A0C8E8",
  coral: "#E8B090",
  white: "#D1D5DB",
};

export function ClaySection({
  tone = "cream",
  id,
  children,
  className,
}: {
  tone?: Tone;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate min-h-screen flex flex-col overflow-hidden",
        toneBg[tone],
        className,
      )}
    >
      {/* pt-19 = navbar height. pb-6 = bottom breathing room. flex-1 fills remaining height. */}
      <div className="mx-auto w-full max-w-300 px-5 sm:px-8 pt-19 pb-6 flex flex-col flex-1">
        {children}
      </div>
    </section>
  );
}

export function ClayCard({
  tone = "white",
  size = "md",
  tilt,
  interactive = false,
  children,
  className,
  onClick,
  style,
}: {
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  tilt?: number;
  interactive?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  const offset = toneShadowOffset[tone];
  const radiusMap = { sm: "rounded-[20px]", md: "rounded-[28px]", lg: "rounded-4xl" };
  const padMap = { sm: "p-4", md: "p-6", lg: "p-8" };

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative border-[3px] bg-white",
        tone !== "white" && toneBg[tone],
        toneBorder[tone],
        radiusMap[size],
        padMap[size],
        interactive &&
          "cursor-pointer transition-all duration-150 hover:translate-y-0.5 active:translate-y-0.5",
        className,
      )}
      style={{
        boxShadow: `0 4px 0 0 ${offset}, 0 12px 24px oklch(0 0 0 / 0.1)`,
        ...(tilt ? { transform: `rotate(${tilt}deg)` } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function ClayButton({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className,
  type = "button",
}: {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  href?: string;
  onClick?: React.MouseEventHandler;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
}) {
  const sizeClasses =
    size === "lg"
      ? "h-14 px-8 text-lg rounded-3xl"
      : "h-12 px-6 text-base rounded-full";

  const variantClasses = {
    primary:
      "bg-clay-orange-500 text-white border-[3px] border-clay-orange-700 hover:translate-y-0.5 active:translate-y-0.5 focus-visible:ring-2 focus-visible:ring-clay-green-700 focus-visible:ring-offset-2",
    secondary:
      "bg-white text-clay-green-700 border-[3px] border-clay-green-700 hover:translate-y-0.5 active:translate-y-0.5 focus-visible:ring-2 focus-visible:ring-clay-green-700 focus-visible:ring-offset-2",
    ghost:
      "text-clay-green-700 border-[3px] border-transparent hover:border-clay-green-700 focus-visible:ring-2 focus-visible:ring-clay-green-700 focus-visible:ring-offset-2",
  };

  const shadowMap = {
    primary: "0 4px 0 0 #E65100, 0 12px 24px oklch(0 0 0 / 0.1)",
    secondary: "0 4px 0 0 #1B5E20, 0 12px 24px oklch(0 0 0 / 0.1)",
    ghost: "none",
  };

  const shared = cn(
    "inline-flex items-center justify-center gap-2 font-display font-bold transition-all duration-150",
    sizeClasses,
    variantClasses[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={shared} style={{ boxShadow: shadowMap[variant] }}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={shared}
      style={{ boxShadow: shadowMap[variant] }}
    >
      {children}
    </button>
  );
}

export function StickerBadge({
  tone = "mint",
  label,
  tilt,
  className,
  children,
}: {
  tone?: Tone;
  label: string;
  tilt?: number;
  className?: string;
  children?: ReactNode;
}) {
  const offset = toneShadowOffset[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-[3px] px-4 py-1.5 font-display text-sm font-bold",
        toneBg[tone],
        toneBorder[tone],
        className,
      )}
      style={{
        boxShadow: `0 3px 0 0 ${offset}, 0 6px 12px oklch(0 0 0 / 0.08)`,
        ...(tilt ? { transform: `rotate(${tilt}deg)` } : {}),
      }}
    >
      {children}
      {label}
    </span>
  );
}

export function Marquee({
  children,
  speed = 30,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-clay-orange-500 py-3",
        className,
      )}
      role="marquee"
      aria-label="Trust badges"
    >
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="flex items-center gap-8 px-4 font-display text-lg font-bold text-white">
          {children}
        </span>
        <span className="flex items-center gap-8 px-4 font-display text-lg font-bold text-white">
          {children}
        </span>
      </div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  accent,
  className,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  className?: string;
}) {
  const parts = accent ? title.split(accent) : [title];
  return (
    <div className={cn("text-center", className)}>
      {eyebrow && (
        <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-clay-green-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-clay-green-900">
        {parts[0]}
        {accent && (
          <>
            <span className="text-clay-orange-500">{accent}</span>
            {parts[1]}
          </>
        )}
      </h2>
    </div>
  );
}

type Pose = "peek" | "wave" | "point" | "pop";

export function PandaCompanion({
  className,
}: {
  pose?: Pose;
  className?: string;
}) {
  return (
    <div className={cn("relative panda-float", className)}>
      <Image
        src="/mascot/panda-mascot.png"
        alt=""
        aria-hidden="true"
        width={400}
        height={400}
        className="h-auto w-full object-contain drop-shadow-[0_16px_32px_oklch(0_0_0/0.15)]"
        sizes="(max-width: 768px) 160px, 280px"
      />
    </div>
  );
}

type TypeVariant =
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "h2"
  | "lead"
  | "body"
  | "small"
  | "eyebrow";

const typeStyles: Record<
  TypeVariant,
  { className: string; defaultTag: ElementType }
> = {
  "display-xl": {
    className:
      "font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-ink",
    defaultTag: "h1",
  },
  "display-lg": {
    className:
      "font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-ink",
    defaultTag: "h2",
  },
  "display-md": {
    className:
      "font-display text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-[1.1] text-ink",
    defaultTag: "h3",
  },
  h2: {
    className: "font-display text-2xl font-semibold leading-[1.2] text-ink",
    defaultTag: "h2",
  },
  lead: {
    className: "font-body text-lg leading-[1.6] text-ink-muted",
    defaultTag: "p",
  },
  body: {
    className: "font-body text-base leading-[1.6] text-ink",
    defaultTag: "p",
  },
  small: {
    className: "font-body text-sm font-medium leading-[1.5] text-ink-muted",
    defaultTag: "span",
  },
  eyebrow: {
    className:
      "font-display text-xs font-bold uppercase tracking-[0.2em] text-clay-green-700",
    defaultTag: "p",
  },
};

export function Type({
  variant,
  as,
  children,
  className,
}: {
  variant: TypeVariant;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}) {
  const style = typeStyles[variant];
  const Tag = as ?? style.defaultTag;
  return (
    <Tag className={cn(style.className, className)}>{children}</Tag>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn("animate-on-scroll fade-up", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
