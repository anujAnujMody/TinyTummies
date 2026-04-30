"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative h-[100svh] pt-16 md:pt-20 scroll-mt-16 md:scroll-mt-20 flex flex-col overflow-hidden bg-tt-warm">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 w-full flex-1 flex flex-col justify-between py-6 md:py-8">
        
        {/* Header */}
        <motion.div
          className="text-center shrink-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-display text-xs font-bold tracking-widest text-tt-orange uppercase mb-2">
            Our Story
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-tt-green-deep leading-tight">
            Why We <span className="text-tt-orange">Started</span> Tiny Tummies
          </h2>
        </motion.div>

        {/* Story Content - fill space */}
        <div className="flex-1 grid md:grid-cols-2 gap-6 md:gap-10 items-center min-h-0 py-4">
          {/* Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[200px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop"
              alt="Parent preparing healthy meal for child"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Story Text */}
          <motion.div
            className="flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl md:text-2xl font-bold text-tt-green-deep mb-3">
              It started with a lunchbox.
            </h3>
            <p className="text-tt-text-secondary text-sm md:text-base leading-relaxed mb-3">
              Every morning, the same question: &ldquo;What should I pack today?&rdquo; And every evening, the same heartbreak: a lunchbox coming home untouched.
            </p>
            <p className="text-tt-text-secondary text-sm md:text-base leading-relaxed mb-4">
              We realized it wasn&apos;t just us. Millions of parents face the same daily struggle. They want their kids to eat healthy, but kids want food that&apos;s fun, tasty, and something their friends are eating too.
            </p>
            <div className="p-4 rounded-xl bg-tt-green-tint">
              <p className="font-display font-bold text-tt-green-deep text-sm md:text-base italic">
                &ldquo;Tiny Tummies was born from one simple belief: every child deserves food that nourishes their body and delights their taste buds.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values - bottom */}
        <motion.div
          className="grid grid-cols-3 gap-3 md:gap-4 shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              ),
              title: "Made with Love",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              ),
              title: "Kid-First Design",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
              title: "Trust Always",
            },
          ].map((value) => (
            <motion.div
              key={value.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-center p-3 md:p-4 rounded-xl bg-tt-green-tint/30 hover:bg-tt-green-tint/50 transition-all duration-300"
            >
              <div className="mb-2 text-tt-green flex justify-center">{value.icon}</div>
              <h3 className="font-display font-bold text-tt-green-deep text-sm md:text-base">
                {value.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
