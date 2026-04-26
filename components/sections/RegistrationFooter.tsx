"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/islands/ScrollReveal";

const steps = [
  { num: "1", text: "Scan QR or click Register" },
  { num: "2", text: "Fill the quick form" },
  { num: "3", text: "We'll WhatsApp you within 24h" },
];

export default function RegistrationFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [100, -50]);

  return (
    <footer ref={sectionRef} className="bg-tt-green-deep text-white">
      <section className="h-[100svh] flex items-center relative overflow-hidden">
        {/* Parallax background elements */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-white/3 rounded-full blur-3xl pointer-events-none"
          style={{ y: contentY }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] bg-tt-orange/10 rounded-full blur-3xl pointer-events-none"
          style={{ y: contentY }}
        />

        {/* Navbar spacer */}
        <div className="h-14 md:h-16 shrink-0" />

        <div className="mx-auto max-w-[1200px] px-4 md:px-8 w-full relative z-10">
          <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <p className="font-display text-sm font-bold tracking-widest text-tt-orange uppercase mb-2">
                  Enroll Now
                </p>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                  Join the <span className="text-tt-orange">Tiny Tummies</span> Family!
                </h2>
                <p className="mt-3 text-white/70 leading-relaxed text-sm md:text-base">
                  Register in 3 easy steps. Let&apos;s make healthy eating the easiest part of your child&apos;s day.
                </p>

                <div className="mt-4 space-y-2">
                  {steps.map((step) => (
                    <div key={step.num} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-tt-orange text-white font-display font-bold text-xs shrink-0">
                        {step.num}
                      </span>
                      <span className="text-white/80 font-display font-semibold text-sm">
                        {step.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href="https://docs.google.com/forms/d/e/1FAIpQLSegxxacmX0Udhjpdl_7lcsMVtiVaudhonyVKcfnNwJ9j4-tTA/viewform"
                    variant="secondary"
                    size="lg"
                  >
                    Register Now
                  </Button>
                  <Button
                    href="https://wa.me/917975465679"
                    variant="whatsapp"
                    size="lg"
                  >
                    Chat on WhatsApp
                  </Button>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 font-display font-semibold text-sm px-3 py-1.5 rounded-full">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    +91 79754 65679
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-40 h-40 md:w-48 md:h-48">
                  <Image
                    src="/images/registration-qr.png"
                    alt="Scan QR code to register"
                    fill
                    className="object-contain rounded-xl bg-white p-2 shadow-lg"
                    sizes="200px"
                  />
                </div>
                <p className="text-white/50 text-xs text-center font-display">
                  Scan QR code to register instantly
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-5">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Tiny Tummies"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="font-display text-base font-bold">Tiny Tummies</span>
            </div>

            <p className="text-xs text-white/40 text-center md:text-left font-display">
              Little Tummies, Big Nutrition.
            </p>

            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Tiny Tummies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
