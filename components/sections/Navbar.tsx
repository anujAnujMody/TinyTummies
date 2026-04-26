"use client";

import { useState } from "react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Why Us", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "Register", href: "#register" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm border-b border-tt-green/10">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo - text only with small leaf icon */}
          <a href="#" className="flex items-center gap-2 cursor-pointer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-tt-green">
              <path d="M12 22c4.97 0 9-4.03 9-9-4.5 0-9 4.5-9 9z" />
              <path d="M12 22c-4.97 0-9-4.03-9-9 4.5 0 9 4.5 9 9z" />
              <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
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
                className="font-display text-sm font-semibold text-tt-green-deep/70 hover:text-tt-green transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/917975465679"
              className="font-display text-sm font-bold px-5 py-2 rounded-full bg-tt-green text-white hover:bg-tt-green-dark transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 cursor-pointer"
            aria-label="Toggle menu"
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
              className="block font-display text-sm font-bold bg-tt-green text-white text-center px-5 py-3 rounded-full cursor-pointer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
