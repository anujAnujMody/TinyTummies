import { Target, Heart, Star, Lightbulb, ChefHat, Rocket, TrendingUp, Sparkles, Leaf, ShieldCheck, Truck } from "lucide-react";
import type { ValueCard, TimelineStep, FeatureItem } from "./types";

export const valueCards: ValueCard[] = [
  {
    icon: Target,
    title: "Our Vision",
    text: "A world where every child grows up healthy, happy and full of potential.",
    color: "text-clay-green-700",
    ring: "ring-clay-green-200",
    bg: "bg-clay-green-50",
  },
  {
    icon: Heart,
    title: "Our Mission",
    text: "To make nutritious, hygienic and delicious meals simple, accessible and joyful for every child.",
    color: "text-clay-orange-500",
    ring: "ring-clay-orange-200",
    bg: "bg-clay-orange-50",
  },
  {
    icon: Star,
    title: "Our Promise",
    text: "Real ingredients. Honest nutrition. Made with love, delivered with care.",
    color: "text-clay-green-700",
    ring: "ring-clay-green-200",
    bg: "bg-clay-green-50",
  },
];

export const timeline: TimelineStep[] = [
  { icon: Lightbulb, title: "The Spark", text: "Busy parents struggling to find healthy meals for kids.", tone: "green" },
  { icon: ChefHat, title: "The Idea", text: "Nutrition experts and chefs creating meals kids love.", tone: "orange" },
  { icon: Rocket, title: "The Beginning", text: "Born with a promise of real food, real care, real impact.", tone: "green" },
  { icon: TrendingUp, title: "The Growth", text: "From one kitchen to many happy tummies across Bengaluru.", tone: "orange" },
  { icon: Sparkles, title: "The Future", text: "Continuing to innovate and inspire healthier generations.", tone: "green" },
];

export const aboutFeatures: FeatureItem[] = [
  { icon: Leaf, title: "100% Natural", text: "No preservatives", color: "text-clay-green-700", border: "border-clay-green-200", bg: "bg-clay-green-50" },
  { icon: ShieldCheck, title: "Hygienic", text: "FSSAI certified", color: "text-clay-green-700", border: "border-clay-green-200", bg: "bg-clay-green-50" },
  { icon: Heart, title: "Made with Love", text: "Like parents do", color: "text-clay-orange-500", border: "border-clay-orange-200", bg: "bg-clay-orange-50" },
  { icon: Truck, title: "On-time", text: "Every morning", color: "text-clay-green-700", border: "border-clay-green-200", bg: "bg-clay-green-50" },
];
