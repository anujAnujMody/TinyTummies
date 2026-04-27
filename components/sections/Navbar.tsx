"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Why Us", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "Register", href: "#register" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-tt-green/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 cursor-pointer">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 md:w-8 md:h-8 text-tt-green">
              {/* Panda head */}
              <circle cx="16" cy="17" r="10" />
              {/* Left ear */}
              <circle cx="8" cy="8" r="3.5" fill="currentColor" stroke="none" />
              {/* Right ear */}
              <circle cx="24" cy="8" r="3.5" fill="currentColor" stroke="none" />
              {/* Left eye patch */}
              <ellipse cx="12" cy="15" rx="2.8" ry="3.2" fill="currentColor" stroke="none" />
              {/* Right eye patch */}
              <ellipse cx="20" cy="15" rx="2.8" ry="3.2" fill="currentColor" stroke="none" />
              {/* Left eye */}
              <circle cx="12.5" cy="14.5" r="1" fill="white" stroke="none" />
              {/* Right eye */}
              <circle cx="20.5" cy="14.5" r="1" fill="white" stroke="none" />
              {/* Nose */}
              <ellipse cx="16" cy="19.5" rx="1.5" ry="1" fill="currentColor" stroke="none" />
              {/* Mouth */}
              <path d="M14 21.5 Q16 23 18 21.5" strokeWidth="1.5" />
            </svg>
            <span className="font-display text-lg font-extrabold text-tt-green-deep">
              Tiny Tummies
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm font-semibold text-tt-green-deep/70 hover:text-tt-green transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tt-green after:transition-all hover:after:w-full cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/917975465679"
              className="font-display text-sm font-bold px-5 py-2 rounded-full bg-gradient-to-r from-tt-green to-tt-lime text-white hover:from-tt-green/90 hover:to-tt-lime/90 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2 bg-tt-green-deep" : "bg-tt-green-deep"}`} />
              <span className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "opacity-0" : "bg-tt-green-deep"}`} />
              <span className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2 bg-tt-green-deep" : "bg-tt-green-deep"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-tt-dark/5 shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-display text-sm font-semibold text-tt-green-deep/70 hover:text-tt-green py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/917975465679"
              className="block font-display text-sm font-bold bg-gradient-to-r from-tt-green to-tt-lime text-white text-center px-5 py-3 rounded-full cursor-pointer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
