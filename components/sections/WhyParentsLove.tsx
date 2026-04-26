import SectionShell from "@/components/ui/SectionShell";
import ScrollReveal from "@/components/islands/ScrollReveal";
import ScatterDecorations from "@/components/ui/ScatterDecorations";

const benefits = [
  {
    icon: "🥬",
    title: "Fresh & High Quality Produce",
    description: "Every serving is prepared from fresh, seasonal fruits and vegetables — never frozen, never processed.",
    color: "tt-green",
  },
  {
    icon: "🛡️",
    title: "Hygienic, Safe & Kid-Friendly",
    description: "Prepared in certified kitchens with strict hygiene standards. Safe for little hands and tummies.",
    color: "tt-orange",
  },
  {
    icon: "😋",
    title: "Kids Actually Eat, Not Waste",
    description: "Kid-approved flavors and fun presentation mean less waste and happier lunch breaks.",
    color: "tt-pink",
  },
  {
    icon: "📅",
    title: "Daily Variety, No Boredom",
    description: "A rotating weekly menu so your child never sees the same meal twice. Excitement every day.",
    color: "tt-blue",
  },
  {
    icon: "⏰",
    title: "Saves 30-45 Mins of Daily Prep Time",
    description: "No more morning rush. Reclaim your time while your child gets a nutritious meal at school.",
    color: "tt-yellow",
  },
  {
    icon: "💪",
    title: "Builds Lifelong Healthy Habits",
    description: "When healthy food is fun and familiar, children develop eating habits that last a lifetime.",
    color: "tt-green",
  },
];

const colorStyles: Record<string, { topBorder: string; iconBg: string; iconText: string }> = {
  "tt-green": { topBorder: "border-t-4 border-tt-green", iconBg: "bg-tt-green-tint", iconText: "text-tt-green" },
  "tt-orange": { topBorder: "border-t-4 border-tt-orange", iconBg: "bg-tt-orange-tint", iconText: "text-tt-orange" },
  "tt-pink": { topBorder: "border-t-4 border-tt-pink", iconBg: "bg-tt-pink-tint", iconText: "text-tt-pink" },
  "tt-blue": { topBorder: "border-t-4 border-tt-blue", iconBg: "bg-tt-blue-tint", iconText: "text-tt-blue" },
  "tt-yellow": { topBorder: "border-t-4 border-tt-yellow", iconBg: "bg-tt-yellow/15", iconText: "text-tt-yellow-dark" },
};

export default function WhyParentsLove() {
  return (
    <SectionShell background="green-tint" id="why">
      <ScatterDecorations count={8} />

      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="font-display text-sm font-bold tracking-widest text-tt-green uppercase mb-3">
            💚 Why Parents Love Tiny Tummies 💚
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-tt-green-deep">
            6 Reasons Parents Are <span className="text-tt-orange">Choosing Us</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, i) => {
          const styles = colorStyles[benefit.color];
          return (
            <ScrollReveal key={benefit.title} delay={i * 0.08}>
              <div className={`h-full flex flex-col items-center text-center rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${styles.topBorder}`}>
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${styles.iconBg} ${styles.iconText} text-2xl shadow-sm`}>
                  {benefit.icon}
                </div>
                <h3 className="font-display text-base font-bold text-tt-green-deep leading-tight">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-tt-text-secondary leading-relaxed flex-grow text-sm">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="mt-10 md:mt-14 text-center">
          <div className="inline-block bg-tt-green-deep text-white font-display font-bold text-base md:text-lg px-6 py-3 rounded-full shadow-md">
            🌱 Not Just Food. A Little Care Box for Your Child.
          </div>
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}
