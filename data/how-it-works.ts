import { Clock, AlertTriangle, ShieldCheck, Heart, Star, Smile, School } from "lucide-react";
import type { ProblemSolutionItem, FeatureItem } from "./types";

export const problems: ProblemSolutionItem[] = [
  {
    icon: Clock,
    title: "Busy mornings & no time to cook?",
    text: "The rush leaves little time for nutritious meals.",
    iconBg: "bg-[#FFF3E0]",
    iconColor: "text-[#FF8C42]",
  },
  {
    icon: Smile,
    title: "Kids skip breakfast or eat unhealthy?",
    text: "It affects their energy and concentration.",
    iconBg: "bg-[#E8F5E9]",
    iconColor: "text-[#4CAF50]",
  },
  {
    icon: AlertTriangle,
    title: "Unhealthy options are everywhere!",
    text: "Finding clean, safe & tasty food is hard.",
    iconBg: "bg-[#FFF8E0]",
    iconColor: "text-[#FFD93D]",
  },
];

export const solutions: ProblemSolutionItem[] = [
  {
    icon: Heart,
    title: "We handle everything",
    text: "You relax, we take care of meals.",
    iconBg: "bg-[#FFE4EC]",
    iconColor: "text-[#FF6B9D]",
  },
  {
    icon: Star,
    title: "Healthy meals they'll love",
    text: "Fuel for their growth, focus & happiness.",
    iconBg: "bg-[#FFF8E0]",
    iconColor: "text-[#FFD93D]",
  },
  {
    icon: Smile,
    title: "Peace of mind, every morning",
    text: "Because your child deserves the best.",
    iconBg: "bg-[#E8F5E9]",
    iconColor: "text-[#4CAF50]",
  },
];

export const howItWorksFeatures: FeatureItem[] = [
  {
    icon: Clock,
    title: "Freshly prepared daily",
    text: "Made every morning with love.",
    color: "text-clay-green-700",
    border: "border-clay-green-700/20",
    bg: "bg-clay-mint",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic & Safe",
    text: "Stainless steel boxes only.",
    color: "text-clay-orange-500",
    border: "border-clay-orange-500/20",
    bg: "bg-clay-coral",
  },
  {
    icon: Smile,
    title: "Kid-approved",
    text: "Presentation they love.",
    color: "text-clay-green-700",
    border: "border-clay-green-700/20",
    bg: "bg-clay-mint",
  },
  {
    icon: School,
    title: "School-friendly",
    text: "Delivered before first bell.",
    color: "text-clay-orange-500",
    border: "border-clay-orange-500/20",
    bg: "bg-clay-coral",
  },
];
