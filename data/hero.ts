import { Leaf, ClipboardList, Clock, ShieldCheck, Smile, School } from "lucide-react";

export const heroBadge = {
  text: "Healthy Meals. Happy Tummies. Brilliant Mornings.",
  icon: Leaf,
};

export const heroHeading = {
  prefix: "Little Tummies Deserve ",
  bold: "Big",
  accent: "Nutrition.",
};

export const heroSubtitle =
  "Nutritious, hygienic & delicious meal boxes for kids (2–6 yrs) — made to delight both parents and schools.";

export const heroInfoCard = {
  text: "No more rushed mornings, messy tiffins, or skipped breakfasts.",
  highlight: "We make mornings stress-free!",
  icon: ClipboardList,
};

export const heroFeatureChips = [
  { icon: Clock, line1: "Freshly", line2: "prepared daily", color: "bg-clay-green-700" },
  { icon: ShieldCheck, line1: "Hygienic stainless", line2: "steel boxes", color: "bg-clay-orange-500" },
  { icon: Smile, line1: "Kid-approved", line2: "presentation", color: "bg-clay-green-700" },
  { icon: School, line1: "School-friendly", line2: "delivery", color: "bg-clay-orange-500" },
] as const;
