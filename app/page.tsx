import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { contact, navLinks } from "@/data/site";
import { GOOGLE_FORM_URL, WHATSAPP_URL } from "@/data/shared-maps";
import Navbar from "@/components/claymorph/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import AboutSection from "@/components/sections/AboutSection";
import { PandaCompanion, Type, ClayCard } from "@/components/claymorph";
import PandaBackground from "@/components/ui/PandaBackground";
import FooterNavLink from "@/components/FooterNavLink";

export const metadata: Metadata = {
  title: "Tiny Tummies | Healthy School Meals for Little Tummies",
  description: "Fresh, hygienic and kid-loved meal boxes for children, delivered to schools and homes across Bengaluru.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="h-screen overflow-y-scroll snap-y snap-mandatory lg:snap-mandatory">
        <HeroSection />
        <HowItWorksSection />
        <PricingSection />
        <AboutSection />

        {/* Contact Section */}
        <footer id="contact" className="snap-start snap-always h-screen flex flex-col bg-clay-cream overflow-hidden">
          <PandaBackground className="flex-1 min-h-0">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 pt-19 pb-4 sm:pb-6 flex flex-col flex-1">
              <div className="flex flex-1 flex-col items-center justify-center text-center pb-4 sm:pb-6">
                <div className="w-36 sm:w-40 mb-4 sm:mb-6">
                  <PandaCompanion pose="wave" />
                </div>
                <Type variant="display-lg" className="text-clay-green-900 max-w-xl text-2xl sm:text-[clamp(2.25rem,4.5vw,3.75rem)]">
                  Get in touch
                </Type>
                <Type variant="lead" className="mt-2 sm:mt-3 text-ink-muted max-w-lg text-sm sm:text-base">
                  Fresh, balanced, kid-loved meals — delivered to school every morning.
                </Type>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <Link
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 sm:h-12 items-center gap-2 rounded-full bg-clay-orange-500 border-[3px] border-clay-orange-700 px-5 sm:px-7 font-display text-sm sm:text-base font-bold text-white transition-all duration-150 hover:translate-y-0.5"
                    style={{ boxShadow: "0 4px 0 0 #E65100, 0 8px 16px oklch(0 0 0 / 0.2)" }}
                  >
                    Get Started <ArrowRight className="size-4 sm:size-5" />
                  </Link>
                  <Link
                    href={WHATSAPP_URL}
                    className="inline-flex h-11 sm:h-12 items-center gap-2 rounded-full border-[3px] border-clay-green-700 bg-white px-5 sm:px-7 font-display text-sm sm:text-base font-bold text-clay-green-700 transition-all duration-150 hover:translate-y-0.5"
                    style={{ boxShadow: "0 4px 0 0 #1B5E20, 0 8px 16px oklch(0 0 0 / 0.1)" }}
                  >
                    <MessageCircle className="size-4 sm:size-5" /> WhatsApp Us
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:gap-6 md:grid-cols-2 w-full py-4 sm:py-8">
                <ClayCard tone="mint" size="md" className="hidden md:block p-4 sm:p-6">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-clay-green-700 mb-3 sm:mb-4">Quick Links</p>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    {navLinks.map((link) => (
                      <FooterNavLink key={link.href} href={link.href}>
                        {link.label}
                      </FooterNavLink>
                    ))}
                  </div>
                </ClayCard>
                <ClayCard tone="mint" size="md" className="p-4 sm:p-6">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-clay-green-700 mb-3 sm:mb-4">Contact</p>
                  <div className="space-y-1 sm:space-y-2 text-sm text-ink">
                    <p className="font-medium text-xs sm:text-sm">{contact.phone}</p>
                    <p className="font-medium text-xs sm:text-sm">{contact.email}</p>
                    <p className="text-xs text-ink-muted">{contact.address}</p>
                    <Link href="/terms" className="block text-ink-muted hover:text-clay-green-700 transition-colors text-xs mt-1 sm:mt-2">Terms & Conditions</Link>
                  </div>
                </ClayCard>
              </div>
              <p className="pb-2 text-center text-xs text-ink-muted">© 2025 Tiny Tummies. Made with ♥ by ShravSaga.</p>
            </div>
          </PandaBackground>
        </footer>
      </main>
    </>
  );
}
