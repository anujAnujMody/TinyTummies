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
      <main id="main" className="pt-24">
        <HeroSection />
        <HowItWorksSection />
        <PricingSection />
        <GallerySection />
        <AboutSection />

        {/* Contact Section */}
        <footer id="contact" className="bg-clay-cream">
          <PandaBackground count={3}>
            {/* Organic blob background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-clay-mint/30 to-clay-butter/20 rounded-full blur-3xl" />
              <div className="absolute bottom-40 right-1/4 w-48 h-48 bg-gradient-to-br from-clay-orange-200/20 to-clay-green-200/20 rounded-full blur-2xl" />
            </div>

            <div className="relative mx-auto w-full max-w-3xl px-5 py-12 md:py-16 flex flex-col items-center gap-6">
              {/* Mascot */}
              <div className="w-28 sm:w-32">
                <PandaCompanion pose="wave" />
              </div>

              {/* Heading */}
              <Type variant="display-lg" className="text-clay-green-900 text-center text-2xl sm:text-3xl">
                Get in touch
              </Type>
              <Type variant="lead" className="text-ink-muted text-center text-sm sm:text-base max-w-md">
                Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </Type>

              {/* Contact Methods */}
              <div className="flex items-center gap-6 sm:gap-10">
                <a href={contact.phoneHref} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                  <span className="flex size-12 sm:size-14 items-center justify-center rounded-full bg-clay-mint/80 border border-clay-green-200 text-clay-green-700 transition-all duration-200 group-hover:bg-clay-green-700 group-hover:text-white group-hover:scale-105 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                    <Phone className="size-5 sm:size-6" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-ink-muted group-hover:text-clay-green-700 transition-colors">Call</span>
                </a>
                <a href={contact.emailHref} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                  <span className="flex size-12 sm:size-14 items-center justify-center rounded-full bg-clay-mint/80 border border-clay-green-200 text-clay-green-700 transition-all duration-200 group-hover:bg-clay-green-700 group-hover:text-white group-hover:scale-105 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                    <Mail className="size-5 sm:size-6" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-ink-muted group-hover:text-clay-green-700 transition-colors">Email</span>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group cursor-pointer">
                  <span className="flex size-12 sm:size-14 items-center justify-center rounded-full bg-clay-mint/80 border border-clay-green-200 text-clay-green-700 transition-all duration-200 group-hover:bg-clay-green-700 group-hover:text-white group-hover:scale-105 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                    <MessageCircle className="size-5 sm:size-6" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-ink-muted group-hover:text-clay-green-700 transition-colors">WhatsApp</span>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex justify-center">
                <Link
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 sm:h-14 items-center gap-2 rounded-full bg-clay-orange-500 border-[3px] border-clay-orange-700 px-7 sm:px-9 font-display text-sm sm:text-base font-bold text-white transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
                  style={{ boxShadow: "0 4px 0 0 #E65100, 0 8px 16px oklch(0 0 0 / 0.2)" }}
                >
                  Get Started <ArrowRight className="size-4 sm:size-5" />
                </Link>
              </div>

              {/* Address */}
              <div className="flex items-center gap-2 text-ink-muted">
                <MapPin className="size-4" />
                <span className="text-xs sm:text-sm">{contact.address}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="py-4 text-center border-t border-clay-green-200/30">
              <p className="text-xs text-ink-muted">
                © 2026 Tiny Tummies.
              </p>
            </div>
          </PandaBackground>
        </footer>
      </main>
    </>
  );
}
