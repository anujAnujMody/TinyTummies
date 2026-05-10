import type { LucideIcon } from "lucide-react";

/* ── Shared interfaces for all section data ── */

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  text: string;
  color: string;
  border: string;
  bg: string;
}

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  perMeal: string;
  color: "green" | "orange" | "purple";
  icon: "sprout" | "star" | "crown";
  popular?: boolean;
  features: string[];
}

export interface TimelineStep {
  icon: LucideIcon;
  title: string;
  text: string;
  tone: "green" | "orange";
}

export interface ValueCard {
  icon: LucideIcon;
  title: string;
  text: string;
  color: string;
  ring: string;
  bg: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  phoneHref: string;
  whatsapp: string;
  email: string;
  emailHref: string;
  address: string;
}

export interface MenuItem {
  id: string;
  day: string;
  theme: string;
  name: string;
  kidDescription: string;
  parentDescription: string;
  tags: string[];
}

export interface MenuPlan {
  id: string;
  name: string;
  mealsPerWeek: number;
  price: string;
  originalPrice: string;
  period: string;
  pricePerMeal: string;
  description: string;
  features: string[];
  launchTag?: string;
}

export interface ProblemSolutionItem {
  icon: LucideIcon;
  title: string;
  text: string;
  iconBg: string;
  iconColor: string;
}

export interface TrustStripItem {
  title: string;
  text: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TermItem {
  title: string;
  text: string;
}
