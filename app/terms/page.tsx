import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { terms } from "@/data/terms";
import { ClayCard, ClayButton, Type } from "@/components/claymorph";
export const metadata: Metadata = {
  title: "Terms & Conditions | Tiny Tummies",
  description: "Tiny Tummies terms, subscription and delivery conditions.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-clay-cream py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-225">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border-[3px] border-clay-mint-border bg-white px-5 py-2.5 font-display text-sm font-bold text-clay-green-700 transition-all duration-150 hover:translate-y-0.5"
          style={{ boxShadow: "0 3px 0 0 #B9DFA0, 0 6px 12px oklch(0 0 0 / 0.06)" }}
        >
          <ArrowLeft className="size-4" /> Back to Home
        </Link>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.7fr]">
          <ClayCard size="lg">
            <Type variant="display-lg" className="text-clay-green-900">Terms & Conditions</Type>
            <Type variant="lead" className="mt-4">Please read these terms carefully before using our services.</Type>
            <div className="mt-8 space-y-6">
              {terms.map((term, index) => (
                <section key={term.title} className="border-b-[3px] border-clay-mint-border pb-5 last:border-b-0">
                  <Type variant="display-md" className="text-clay-green-700">{index + 1}. {term.title}</Type>
                  <Type variant="body" className="mt-2">{term.text}</Type>
                </section>
              ))}
            </div>
          </ClayCard>
          <ClayCard tone="mint" size="lg">
            <Type variant="display-md" className="text-clay-green-700">Where it appears during signup</Type>
            <Type variant="body" className="mt-3">Consent appears during registration and before final confirmation so the flow stays simple, clear and transparent.</Type>
            <div
              className="mt-8 rounded-xl border-[3px] border-clay-mint-border bg-white p-6"
              style={{ boxShadow: "0 3px 0 0 #B9DFA0, 0 6px 12px oklch(0 0 0 / 0.06)" }}
            >
              <label className="flex gap-3 font-display text-sm font-bold text-ink">
                <input type="checkbox" className="size-5 rounded" /> I agree to the Terms & Conditions
              </label>
              <ClayButton variant="primary" className="mt-5">Confirm & Proceed</ClayButton>
            </div>
          </ClayCard>
        </div>
      </div>
    </main>
  );
}