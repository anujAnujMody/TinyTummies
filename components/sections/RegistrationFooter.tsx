"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const steps = [
  { 
    num: "1", 
    text: "Choose Your Plan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  { 
    num: "2", 
    text: "Fill Quick Form",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  { 
    num: "3", 
    text: "We Deliver Daily",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const footerLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Why Us", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "Register", href: "#register" },
];

export default function RegistrationFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blobY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="register" ref={sectionRef} className="relative overflow-hidden bg-tt-warm">
      {/* Parallax background blob */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{
          y: blobY,
          background: "radial-gradient(circle, rgba(132,204,22,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[8%] w-[180px] h-[180px] rounded-full pointer-events-none"
        style={{
          y: blobY,
          background: "radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* CTA Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6 py-16 md:py-20">
        <div className="flex flex-col items-center text-center">
          {/* Social proof badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-tt-green to-tt-lime text-white font-display font-bold text-xs px-4 py-2 rounded-full shadow-md mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Join 500+ Happy Parents
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-tt-green-deep leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Ready to Get <span className="text-tt-orange">Started?</span>
          </motion.h2>

          <motion.p
            className="mt-2 text-tt-text-secondary text-sm md:text-base leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            Register in 3 easy steps. Let&apos;s make healthy eating the easiest part of your child&apos;s day.
          </motion.p>

          {/* Steps + QR Code */}
          <motion.div
            className="mt-8 w-full max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              {/* Steps */}
              <div className="flex items-center justify-center gap-3 md:gap-4">
                {steps.map((step, i) => (
                  <div key={step.num} className="flex items-center gap-2 md:gap-3">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-tt-green to-tt-lime text-white shadow-md mb-1">
                        {step.icon}
                      </div>
                      <span className="font-display text-[10px] font-bold text-tt-green-deep uppercase tracking-wider">
                        Step {step.num}
                      </span>
                      <span className="text-xs text-tt-text-secondary mt-0.5 font-medium">
                        {step.text}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden md:flex items-center text-tt-green/30 mt-[-20px]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="relative w-28 h-28 md:w-32 md:h-32">
                  <Image
                    src="/images/registration-qr.png"
                    alt="Scan QR code to register"
                    fill
                    className="object-contain rounded-xl bg-white p-2 shadow-lg"
                    sizes="128px"
                  />
                </div>
                <p className="text-tt-text-secondary/60 text-[10px] font-display text-center">
                  Scan to register instantly
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSegxxacmX0Udhjpdl_7lcsMVtiVaudhonyVKcfnNwJ9j4-tTA/viewform"
              variant="gradient-cta"
              size="lg"
              className="text-sm px-8"
            >
              Register Now
            </Button>
            <Button
              href="https://wa.me/917975465679"
              variant="gradient-green"
              size="lg"
              className="text-sm px-8"
            >
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <a 
              href="tel:+917975465679" 
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-tt-green-deep font-display font-semibold text-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-tt-green">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 79754 65679
            </a>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-tt-green/20 to-transparent" />
      </div>

      {/* Footer - merged into warm background */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-tt-green">
              <path d="M12 22c4.97 0 9-4.03 9-9-4.5 0-9 4.5-9 9z" />
              <path d="M12 22c-4.97 0-9-4.03-9-9 4.5 0 9 4.5 9 9z" />
              <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
            </svg>
            <span className="font-display text-base font-bold text-tt-green-deep">Tiny Tummies</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-xs text-tt-text-secondary hover:text-tt-green-deep transition-colors font-display font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact + Social */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+917975465679" 
              className="text-xs text-tt-text-secondary hover:text-tt-green-deep transition-colors font-display flex items-center gap-1"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 79754 65679
            </a>

            <div className="flex items-center gap-2">
              <a 
                href="https://instagram.com/tinytummies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-tt-green/10 hover:bg-tt-green/20 transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-tt-green-deep">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a 
                href="https://wa.me/917975465679" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-tt-green/10 hover:bg-tt-green/20 transition-colors"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-tt-green-deep">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-tt-green/10 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-tt-text-secondary/50 font-display">
            &copy; {new Date().getFullYear()} Tiny Tummies. All rights reserved.
          </p>
          <p className="text-[10px] text-tt-text-secondary/50 font-display">
            Made with love for happy, healthy kids
          </p>
        </div>
      </div>
    </section>
  );
}
