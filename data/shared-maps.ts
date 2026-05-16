import { Star, Crown, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── Centralized icon map for plan icons ── */
export const planIconMap: Record<string, LucideIcon> = {
  sprout: Sprout,
  star: Star,
  crown: Crown,
};

/* ── Plan color configuration ── */
export interface PlanColorConfig {
  nameColor: string;
  iconBg: string;
  iconColor: string;
  checkColor: string;
  cardBg: string;
  cardBorder: string;
  perMealColor: string;
}

export const planColorMap: Record<string, PlanColorConfig> = {
  green: {
    nameColor: "text-clay-green-700",
    iconBg: "bg-clay-green-700",
    iconColor: "text-white",
    checkColor: "bg-clay-green-700",
    cardBg: "bg-[#FAF9F6]",
    cardBorder: "border-[#E8E4D9]",
    perMealColor: "text-clay-green-700",
  },
  orange: {
    nameColor: "text-clay-orange-500",
    iconBg: "bg-clay-orange-500",
    iconColor: "text-white",
    checkColor: "bg-clay-orange-500",
    cardBg: "bg-white",
    cardBorder: "border-clay-orange-500/30",
    perMealColor: "text-clay-orange-500",
  },
  purple: {
    nameColor: "text-[#7B4FA3]",
    iconBg: "bg-[#7B4FA3]",
    iconColor: "text-white",
    checkColor: "bg-[#7B4FA3]",
    cardBg: "bg-[#F8F5FB]",
    cardBorder: "border-[#D4C4E0]",
    perMealColor: "text-[#7B4FA3]",
  },
};

/* ── Shadow presets — eliminates inline style duplication ── */
export const shadows = {
  clay: "0 4px 0 0 var(--color-clay-mint-border), 0 12px 24px oklch(0 0 0 / 0.1)",
  clayPressed: "0 2px 0 0 var(--color-clay-mint-border), 0 6px 12px oklch(0 0 0 / 0.08)",
  orange: "0 4px 0 0 var(--color-clay-orange-700), 0 12px 24px oklch(0 0 0 / 0.1)",
  orangePressed: "0 2px 0 0 var(--color-clay-orange-700), 0 6px 12px oklch(0 0 0 / 0.08)",
  green: "0 4px 0 0 var(--color-clay-green-900), 0 12px 24px oklch(0 0 0 / 0.1)",
  greenPressed: "0 2px 0 0 var(--color-clay-green-900), 0 6px 12px oklch(0 0 0 / 0.08)",
  cream: "0 4px 0 0 #D8C8A0, 0 8px 16px oklch(0 0 0 / 0.06)",
  mint: "0 3px 0 0 #B9DFA0, 0 6px 12px oklch(0 0 0 / 0.06)",
  mintHeavy: "0 4px 0 0 #B9DFA0, 0 16px 40px oklch(0 0 0 / 0.12)",
  navbar: "0 4px 0 0 #B9DFA0, 0 12px 24px oklch(0 0 0 / 0.08)",
  navbarScrolled: "0 4px 0 0 #B9DFA0, 0 12px 24px oklch(0 0 0 / 0.08)",
  whatsapp: "0 4px 12px rgba(37, 211, 102, 0.3)",
  whatsappPulse: "0 4px 24px rgba(37, 211, 102, 0.5)",
} as const;

/* ── WhatsApp URL (single source of truth) ── */
export const WHATSAPP_URL = "https://wa.me/917975465679?text=Hi%20Tiny%20Tummies%2C%20I%20want%20to%20get%20started";
export const WHATSAPP_URL_SHORT = "https://wa.me/917975465679";

/* ── Google Form URL (single source of truth) ── */
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSegxxacmX0Udhjpdl_7lcsMVtiVaudhonyVKcfnNwJ9j4-tTA/viewform";

/* ── Section IDs for scroll navigation ── */
export const SECTION_IDS = ["hero", "how", "pricing", "gallery", "about", "contact"] as const;
