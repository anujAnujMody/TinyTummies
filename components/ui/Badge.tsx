type BadgeVariant = "coming-soon" | "veg" | "nut-free" | "best-value" | "kid-favorite" | "high-protein" | "launch-offer" | "early-bird";

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, { bg: string; text: string; label: string }> = {
  "coming-soon": { bg: "bg-tt-yellow/20", text: "text-tt-yellow-dark", label: "Coming Soon" },
  "veg": { bg: "bg-tt-green/15", text: "text-tt-green", label: "Vegetarian" },
  "nut-free": { bg: "bg-tt-blue/15", text: "text-tt-blue", label: "Nut-Free" },
  "best-value": { bg: "bg-tt-yellow", text: "text-tt-dark", label: "Best Value" },
  "kid-favorite": { bg: "bg-tt-pink/15", text: "text-tt-pink", label: "Kid Favorite" },
  "high-protein": { bg: "bg-tt-orange/15", text: "text-tt-orange", label: "High Protein" },
  "launch-offer": { bg: "bg-tt-orange", text: "text-white", label: "10% OFF Launch Offer" },
  "early-bird": { bg: "bg-tt-green/15", text: "text-tt-green-dark", label: "Early Bird Access" },
};

export default function Badge({ variant, className = "" }: BadgeProps) {
  const { bg, text, label } = variants[variant];
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${bg} ${text} ${className}`}>
      {label}
    </span>
  );
}
