import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { contact, navLinks } from "@/data/tiny-tummies";
import Navbar from "@/components/claymorph/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import AboutSection from "@/components/sections/AboutSection";
import {
  PandaCompanion,
  Type,
} from "@/components/claymorph";

export const metadata: Metadata = {
  title: "Tiny Tummies | Healthy School Meals for Little Tummies",
  description: "Fresh, hygienic and kid-loved meal boxes for children, delivered to schools and homes across Bengaluru.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="h-screen overflow-y-scroll snap-y snap-mandatory">

        {/* ── 1: Hero ── */}
        <HeroSection />

        {/* ── 2: How It Works ── */}
        <HowItWorksSection />

        {/* ── 3: Pricing ── */}
        <PricingSection />

        {/* ── 4: About ── */}
        <AboutSection />

        {/* ── 5: Footer + CTA (merged) ── */}
        <footer className="snap-start snap-always h-screen flex flex-col bg-clay-green-900 px-5 text-white overflow-hidden">
          {/* CTA band — top half */}
          <div className="flex flex-1 flex-col items-center justify-center text-center border-b border-white/10 pb-8 pt-[76px]">
            <div className="w-28 mb-4">
              <PandaCompanion pose="wave" />
            </div>
            <Type variant="display-lg" className="text-white! max-w-xl">
              Ready to never pack a tiffin again?
            </Type>
            <Type variant="lead" className="mt-3 text-white/70! max-w-lg">
              Fresh, balanced, kid-loved meals — delivered to school every morning.
            </Type>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSegxxacmX0Udhjpdl_7lcsMVtiVaudhonyVKcfnNwJ9j4-tTA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-clay-orange-500 border-[3px] border-clay-orange-700 px-7 font-display font-bold text-white transition-all duration-180 hover:translate-y-[2px]"
                style={{ boxShadow: "0 4px 0 0 #E65100, 0 8px 16px oklch(0 0 0 / 0.2)" }}
              >
                Get Started <ArrowRight className="size-5" />
              </Link>
              <Link
                href={contact.whatsapp}
                className="inline-flex h-12 items-center gap-2 rounded-full border-[3px] border-white/30 bg-white/10 px-7 font-display font-bold text-white backdrop-blur-sm transition-all duration-180 hover:bg-white/20"
              >
                <MessageCircle className="size-5" /> WhatsApp Us
              </Link>
            </div>
          </div>

          {/* Footer links — bottom half */}
          <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3 w-full py-8">
            <div>
              <Image src="/images/logo-full.png" alt="Tiny Tummies" width={140} height={48} className="h-9 w-auto object-contain brightness-0 invert" />
              <p className="mt-3 text-sm leading-6 text-white/60">Fresh, balanced meals for little tummies. Delivered to school every morning.</p>
            </div>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-wider text-white/40 mb-3">Quick Links</p>
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">{link.label}</Link>
                ))}
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSegxxacmX0Udhjpdl_7lcsMVtiVaudhonyVKcfnNwJ9j4-tTA/viewform" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">Get Started</Link>
              </div>
            </div>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-wider text-white/40 mb-3">Contact</p>
              <div className="space-y-1.5 text-sm text-white/70">
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <p className="text-xs text-white/50">{contact.address}</p>
                <Link href="/terms" className="block text-white/50 hover:text-white transition-colors text-xs">Terms & Conditions</Link>
              </div>
            </div>
          </div>
          <p className="pb-4 text-center text-xs text-white/30">© 2025 Tiny Tummies. All rights reserved.</p>
        </footer>

      </main>
    </>
  );
}
