"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock, Heart, Lock, ShieldCheck, Truck, User, Star, Crown, Sprout } from "lucide-react";
import { plans } from "@/data/tiny-tummies";
import { cn } from "@/lib/utils";
import { ClayCard, ClayButton, StickerBadge, PandaCompanion, Type } from "@/components/claymorph";

const steps = ["Tell Us About You", "Choose Your Plan", "Select Start Date", "Confirm & Relax"];
const parentBenefits = [
  { icon: ShieldCheck, label: "Hygienic & Safe" },
  { icon: Heart, label: "Kids Love the Taste" },
  { icon: Truck, label: "On-time Delivery" },
  { icon: Clock, label: "Pause Anytime" },
];

const iconMap: Record<string, React.ElementType> = { sprout: Sprout, star: Star, crown: Crown };

const planColorMap: Record<string, { bg: string; border: string; text: string; offset: string }> = {
  green: { bg: "bg-clay-mint", border: "border-clay-mint-border", text: "text-clay-green-700", offset: "#B9DFA0" },
  orange: { bg: "bg-clay-coral", border: "border-clay-coral-border", text: "text-clay-orange-500", offset: "#E8B090" },
  purple: { bg: "bg-clay-blush", border: "border-clay-blush-border", text: "text-clay-pink-500", offset: "#E8A0B8" },
};

export default function SignupWizard() {
  const [step, setStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("growth");

  const plan = plans.find((item) => item.id === selectedPlan) ?? plans[1];

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-275">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border-[3px] border-clay-mint-border bg-white px-5 py-2.5 font-display text-sm font-bold text-clay-green-700 transition-all duration-150 hover:translate-y-0.5" style={{ boxShadow: "0 3px 0 0 #B9DFA0, 0 6px 12px oklch(0 0 0 / 0.06)" }}>
          <ArrowLeft className="size-4" /> Back to Home
        </Link>

        <Stepper current={step} />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.72fr]">
          <div>
            {step === 0 && <DetailsStep />}
            {step === 1 && <PlanStep selected={selectedPlan} onSelect={setSelectedPlan} />}
            {step === 2 && <DateStep />}
            {step === 3 && <ReviewStep planName={plan.name} price={plan.price} />}
          </div>
          <aside className="space-y-6">
            <ClayCard tone="mint" size="lg" className="text-center">
              <div className="rounded-[20px] border-[3px] border-clay-mint-border bg-white p-4" style={{ boxShadow: "0 3px 0 0 #B9DFA0, 0 6px 12px oklch(0 0 0 / 0.06)" }}>
                <Type variant="body" className="font-bold!">
                  {step === 0 ? "Let's start your Tiny Tummies journey." : step === 1 ? "Great choice. Pick a plan that fits your little one's needs." : step === 2 ? "Almost there. Choose a start date and we will handle the rest." : "Yay! Review your details and confirm happy mornings."}
                </Type>
              </div>
              <div className="w-32 mx-auto mt-4">
                <PandaCompanion pose="pop" />
              </div>
            </ClayCard>
            <ClayCard tone="mint" size="md">
              <Type variant="display-md" className="text-clay-green-700!">Why Parents Love Us</Type>
              <div className="mt-5 space-y-4">
                {parentBenefits.map(({ icon: IconComponent, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-full border-[3px] border-clay-mint-border bg-white text-clay-green-700" style={{ boxShadow: "0 3px 0 0 #B9DFA0" }}>
                      <IconComponent className="size-5" />
                    </span>
                    <p className="font-display text-base font-bold text-ink">{label}</p>
                  </div>
                ))}
              </div>
            </ClayCard>
          </aside>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <ClayButton
            variant="secondary"
            onClick={() => setStep((v) => Math.max(0, v - 1))}
            className={cn(step === 0 && "opacity-40 pointer-events-none")}
          >
            <ArrowLeft className="size-5" /> Back
          </ClayButton>
          {step < 3 ? (
            <ClayButton variant="primary" size="lg" onClick={() => setStep((v) => Math.min(3, v + 1))}>
              Continue to Next Step <ArrowRight className="size-5" />
            </ClayButton>
          ) : (
            <ClayButton variant="primary" size="lg" href="/">
              Confirm & Place Order <ArrowRight className="size-5" />
            </ClayButton>
          )}
          <p className="flex items-center gap-2 text-sm text-ink-muted">
            <Lock className="size-4 text-clay-green-700" /> Your information is safe with us.
          </p>
        </div>
      </div>
    </div>
  );
}

function Stepper({ current }: { current: number }) {
  return (
    <div className="mt-6 grid gap-3 md:grid-cols-4">
      {steps.map((label, index) => {
        const done = index < current;
        const active = index === current;
        return (
          <ClayCard
            key={label}
            tone={done || active ? "mint" : "white"}
            size="sm"
            className={cn(!done && !active && "opacity-60")}
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex size-10 items-center justify-center rounded-full border-[3px] font-display text-lg font-bold",
                  done || active
                    ? "border-clay-green-700 bg-clay-green-700 text-white"
                    : "border-gray-300 bg-white text-ink-muted",
                )}
              >
                {done ? <Check className="size-5" /> : index + 1}
              </span>
              <p className={cn("font-display text-sm font-bold", active ? "text-clay-green-900" : "text-ink-muted")}>
                {label}
              </p>
            </div>
          </ClayCard>
        );
      })}
    </div>
  );
}

function DetailsStep() {
  const fields = ["Parent's Full Name", "Mobile Number", "Email Address", "Your Location", "Child's Name", "Child's Age"];
  return (
    <ClayCard size="lg">
      <div className="flex items-center gap-4">
        <span className="flex size-14 items-center justify-center rounded-full border-[3px] border-clay-mint-border bg-clay-mint text-clay-green-700" style={{ boxShadow: "0 3px 0 0 #B9DFA0" }}>
          <User className="size-7" />
        </span>
        <div>
          <Type variant="display-md">Tell Us About You</Type>
          <Type variant="body" className="text-ink-muted!">Fill in a few details and we will take care of the rest.</Type>
        </div>
      </div>
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field} className="font-display text-sm font-bold text-ink">
            {field} <span className="text-clay-orange-500">*</span>
            <input
              className="mt-2 h-14 w-full rounded-xl border-[3px] border-clay-mint-border px-4 font-body font-normal outline-none focus:border-clay-green-700 transition-colors"
              placeholder={`Enter ${field.toLowerCase()}`}
            />
          </label>
        ))}
      </div>
      <label className="mt-6 flex items-center gap-3 rounded-xl border-[3px] border-clay-mint-border bg-clay-mint p-4 font-display text-sm font-bold text-clay-green-700">
        <input type="checkbox" className="size-5 rounded" /> I agree to the Terms & Conditions and Privacy Policy.
      </label>
    </ClayCard>
  );
}

function PlanStep({ selected, onSelect }: { selected: string; onSelect: (_id: string) => void }) {
  return (
    <div>
      <Type variant="display-lg" className="text-clay-green-900!">
        Choose the <span className="text-clay-orange-500">perfect plan</span> for your little one
      </Type>
      <Type variant="lead" className="mt-3">Wholesome meals. Flexible plans. Happy tummies.</Type>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => {
          const colors = planColorMap[plan.color] ?? planColorMap.green;
          const Icon = iconMap[plan.icon] ?? Sprout;
          const active = selected === plan.id;
          return (
            <ClayCard
              key={plan.id}
              tone={plan.color === "orange" ? "coral" : plan.color === "purple" ? "blush" : "mint"}
              interactive
              tilt={i === 1 ? 0 : i === 0 ? -2 : 2}
              className={cn("relative text-center cursor-pointer", active && "ring-4 ring-clay-green-700/30")}
              onClick={() => onSelect(plan.id)}
            >
              {plan.popular && (
                <StickerBadge tone="coral" label="Most Loved" tilt={-5} className="absolute -top-4 left-1/2 -translate-x-1/2" />
              )}
              <div className="flex justify-center">
                <span className={cn("flex size-14 items-center justify-center rounded-full border-[3px]", colors.bg, colors.border)}>
                  <Icon className={cn("size-7", colors.text)} strokeWidth={2.2} />
                </span>
              </div>
              <Type variant="display-md" className={cn("mt-3", colors.text)}>{plan.name}</Type>
              <Type variant="small" className="mt-1">{plan.tagline}</Type>
              <div className="mt-3">
                <span className="font-display text-3xl font-bold text-ink">{plan.price}</span>
                <span className="font-display text-base text-ink-muted"> {plan.period}</span>
              </div>
              <StickerBadge tone="mint" label={plan.perMeal} tilt={2} className="mt-2" />
              <ul className="mt-5 space-y-2 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-ink">
                    <span className={cn("mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full text-white", colors.bg, "border-2", colors.border)}>
                      <Check className="size-2.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <ClayButton
                variant={active ? "primary" : "secondary"}
                className="w-full mt-5"
                onClick={(e: React.MouseEvent) => { e.stopPropagation(); onSelect(plan.id); }}
              >
                {active ? "Selected" : `Choose ${plan.name.split(" ")[0]}`}
              </ClayButton>
            </ClayCard>
          );
        })}
      </div>
    </div>
  );
}

function DateStep() {
  const days = Array.from({ length: 35 }, (_, index) => index + 1);
  return (
    <div>
      <Type variant="display-lg" className="text-clay-green-900!">
        When would you <span className="text-clay-orange-500">like to start?</span>
      </Type>
      <Type variant="lead" className="mt-3">Pick your preferred start date. We will take care of the rest.</Type>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.34fr_1fr]">
        <ClayCard tone="mint" size="md" className="text-center">
          <CalendarDays className="mx-auto size-14 text-clay-green-700" />
          <Type variant="display-md" className="mt-4 text-clay-green-700!">Start Date</Type>
          <Type variant="body" className="mt-3 text-ink-muted!">Orders placed before 8 PM are considered for next day delivery.</Type>
        </ClayCard>
        <ClayCard size="md">
          <Type variant="display-md" className="text-center!">May 2025</Type>
          <div className="mt-6 grid grid-cols-7 gap-2 text-center font-display text-sm font-bold text-ink-muted">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <span key={day}>{day}</span>)}
            {days.map((day) => (
              <button
                type="button"
                key={day}
                className={cn(
                  "mx-auto flex size-11 items-center justify-center rounded-full font-display text-sm font-bold transition-colors",
                  day === 21
                    ? "bg-clay-green-700 text-white"
                    : "hover:bg-clay-mint text-ink",
                )}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="mt-6 rounded-xl border-[3px] border-clay-mint-border bg-clay-mint p-4 text-center font-display text-lg font-bold text-clay-green-700">
            Wednesday, 21 May 2025
          </div>
        </ClayCard>
      </div>
    </div>
  );
}

function ReviewStep({ planName, price }: { planName: string; price: string }) {
  return (
    <div>
      <Type variant="display-lg" className="text-clay-green-900!">
        You&apos;re all set. Let&apos;s make mornings <span className="text-clay-orange-500">amazing.</span>
      </Type>
      <Type variant="lead" className="mt-3">Review your details below and confirm your order.</Type>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.48fr]">
        <ClayCard size="lg">
          {[
            ["Child Details", "Vihaan Sharma · Age 3 Years · Bengaluru"],
            ["Plan Details", `${planName} · ${price} / month`],
            ["Start Date", "Wednesday, 21 May 2025"],
            ["Cut-off Time", "Orders before 8 PM considered for next day delivery"],
          ].map(([title, text]) => (
            <div key={title} className="flex items-start gap-5 border-b border-clay-mint-border py-5 last:border-b-0">
              <span className="flex size-12 items-center justify-center rounded-full border-[3px] border-clay-mint-border bg-clay-mint text-clay-green-700" style={{ boxShadow: "0 3px 0 0 #B9DFA0" }}>
                <Check className="size-6" />
              </span>
              <div>
                <Type variant="display-md" className="text-clay-green-700!">{title}</Type>
                <Type variant="body" className="mt-1">{text}</Type>
              </div>
            </div>
          ))}
        </ClayCard>
        <ClayCard size="md">
          <Type variant="display-md" className="text-clay-green-700!">Order Summary</Type>
          <div className="mt-5 space-y-3 text-base">
            <p className="flex justify-between"><span>{planName}</span><strong>{price}</strong></p>
            <p className="flex justify-between"><span>Start Date</span><span>21 May 2025</span></p>
            <p className="flex justify-between"><span>Delivery</span><span>Daily</span></p>
          </div>
          <div className="mt-5 border-t-[3px] border-clay-mint-border pt-5 font-display text-2xl font-bold text-clay-green-700">
            Total {price}
          </div>
        </ClayCard>
      </div>
    </div>
  );
}
