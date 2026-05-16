import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { contact } from "@/data/site";
import { GOOGLE_FORM_URL, WHATSAPP_URL } from "@/data/shared-maps";
import Navbar from "@/components/claymorph/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import GallerySection from "@/components/sections/GallerySection";
import AboutSection from "@/components/sections/AboutSection";
import { PandaCompanion, Type } from "@/components/claymorph";
import PandaBackground from "@/components/ui/PandaBackground";

export const metadata: Metadata = {
  title: "Tiny Tummies | Healthy School Meals for Little Tummies",
  description: "Fresh, hygienic and kid-loved meal boxes for children, delivered to schools and homes across Bengaluru.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="h-screen overflow-y-scroll snap-y snap-mandatory lg:snap-mandatory pt-24">
        <HeroSection />
        <HowItWorksSection />
        <PricingSection />
        <GallerySection />
        <AboutSection />

        {/* Contact Section */}
        <footer id="contact" className="snap-start snap-always min-h-[100dvh] flex flex-col bg-clay-cream">
          <PandaBackground count={3} className="flex-1 flex flex-col">
            <div className="mx-auto w-full max-w-3xl px-5 pt-20 pb-8 flex flex-col flex-1 items-center justify-center">
              {/* Mascot */}
              <div className="w-32 sm:w-36 mb-5 sm:mb-6">
                <PandaCompanion pose="wave" />
              </div>

              {/* Heading */}
              <Type variant="display-lg" className="text-clay-green-900 text-center text-2xl sm:text-3xl">
                Get in touch
              </Type>
              <Type variant="lead" className="mt-2 sm:mt-3 text-ink-muted text-center text-sm sm:text-base max-w-md">
                Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </Type>

              {/* Contact Methods */}
              <div className="flex items-center gap-4 sm:gap-8 mt-6 sm:mt-8">
                <a href={contact.phoneHref} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                  <span className="flex size-11 sm:size-12 items-center justify-center rounded-full bg-clay-mint border-[2px] border-clay-green-700 text-clay-green-700 transition-all duration-200 group-hover:bg-clay-green-700 group-hover:text-white group-hover:scale-105">
                    <Phone className="size-4.5 sm:size-5" />
                  </span>
                  <span className="text-xs font-medium text-ink-muted group-hover:text-clay-green-700 transition-colors">Call</span>
                </a>
                <a href={contact.emailHref} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                  <span className="flex size-11 sm:size-12 items-center justify-center rounded-full bg-clay-mint border-[2px] border-clay-green-700 text-clay-green-700 transition-all duration-200 group-hover:bg-clay-green-700 group-hover:text-white group-hover:scale-105">
                    <Mail className="size-4.5 sm:size-5" />
                  </span>
                  <span className="text-xs font-medium text-ink-muted group-hover:text-clay-green-700 transition-colors">Email</span>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group cursor-pointer">
                  <span className="flex size-11 sm:size-12 items-center justify-center rounded-full bg-clay-mint border-[2px] border-clay-green-700 text-clay-green-700 transition-all duration-200 group-hover:bg-clay-green-700 group-hover:text-white group-hover:scale-105">
                    <MessageCircle className="size-4.5 sm:size-5" />
                  </span>
                  <span className="text-xs font-medium text-ink-muted group-hover:text-clay-green-700 transition-colors">WhatsApp</span>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex justify-center mt-6 sm:mt-8">
                <Link
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 sm:h-12 items-center gap-2 rounded-full bg-clay-orange-500 border-[3px] border-clay-orange-700 px-6 sm:px-7 font-display text-sm sm:text-base font-bold text-white transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
                  style={{ boxShadow: "0 4px 0 0 #E65100, 0 8px 16px oklch(0 0 0 / 0.2)" }}
                >
                  Get Started <ArrowRight className="size-4 sm:size-5" />
                </Link>
              </div>

              {/* Address */}
              <div className="flex items-center gap-2 mt-6 text-ink-muted">
                <MapPin className="size-4" />
                <span className="text-xs sm:text-sm">{contact.address}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="py-4 text-center">
              <p className="text-xs text-ink-muted">
                © 2025 Tiny Tummies. Made with ♥ by ShravSaga
                {/* <span className="mx-2">•</span>
                <Link href="/terms" className="hover:text-clay-green-700 transition-colors">Terms & Conditions</Link> */}
              </p>
            </div>
          </PandaBackground>
        </footer>
      </main>
    </>
  );
}
