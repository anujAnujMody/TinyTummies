"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu as MenuIcon, X, ArrowRight } from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";
import { navLinks } from "@/data/site";
import { SECTION_IDS, GOOGLE_FORM_URL } from "@/data/shared-maps";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const main = document.getElementById("main");
    if (!main) return;

    const onScroll = () => {
      const scrollTop = main.scrollTop;
      const sectionHeight = window.innerHeight;
      const index = Math.round(scrollTop / sectionHeight);
      const clampedIndex = Math.max(0, Math.min(index, SECTION_IDS.length - 1));
      setActiveId(SECTION_IDS[clampedIndex]);
      setScrolled(scrollTop > 12);
    };

    onScroll();
    main.addEventListener("scroll", onScroll, { passive: true });
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.includes("#") ? href.split("#")[1] : null;
    if (hash) {
      e.preventDefault();
      scrollToSection(hash);
      setOpen(false);
      return;
    }
    if (href === "/" && window.location.pathname === "/") {
      e.preventDefault();
      const container = document.getElementById("main");
      if (container) {
        container.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setOpen(false);
    }
  };

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "top-3" : "top-4")}>
      <nav className={cn(
        "mx-auto flex h-18 max-w-275 items-center justify-between px-4 sm:px-6 transition-all duration-300",
        scrolled
          ? "rounded-full border-[3px] border-clay-mint-border bg-white/92 backdrop-blur-xl"
          : "rounded-full border-[3px] border-clay-mint-border/50 bg-white/80 backdrop-blur-md"
      )}
        style={{ boxShadow: "0 4px 0 0 #B9DFA0, 0 12px 24px oklch(0 0 0 / 0.08)" }}
      >
        <Link href="/" className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay-green-700">
          <Image src="/images/logo-full.png" alt="Tiny Tummies" width={160} height={54} priority className="h-10 w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.includes("#") ? link.href.split("#")[1] : "";
            const isActive = activeId === id || (id === "" && activeId === "hero");
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors duration-200",
                  isActive ? "bg-clay-mint text-clay-green-900" : "text-ink hover:bg-clay-mint/50"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-clay-orange-500 border-[3px] border-clay-orange-700 px-6 font-display text-sm font-bold text-white transition-all duration-150 hover:translate-y-0.5"
            style={{ boxShadow: "0 4px 0 0 #E65100, 0 8px 16px oklch(0 0 0 / 0.1)" }}
          >
            Get Started <ArrowRight className="size-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex size-11 items-center justify-center rounded-full border-[3px] border-clay-mint-border bg-white text-clay-green-700 lg:hidden"
          aria-label="Open navigation"
        >
          <MenuIcon className="size-5" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ink/30 p-4 backdrop-blur-sm lg:hidden" role="dialog" aria-modal="true">
          <div className="ml-auto flex max-w-sm flex-col gap-2 rounded-[28px] border-[3px] border-clay-mint-border bg-clay-cream p-5" style={{ boxShadow: "0 4px 0 0 #B9DFA0, 0 16px 40px oklch(0 0 0 / 0.12)" }}>
            <div className="mb-2 flex items-center justify-between">
              <Image src="/images/logo-full.png" alt="Tiny Tummies" width={130} height={44} className="h-9 w-auto object-contain" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-full border-[3px] border-clay-mint-border bg-white text-clay-green-700"
                aria-label="Close navigation"
              >
                <X className="size-5" />
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-2xl px-4 py-3 font-display text-lg font-bold text-ink hover:bg-clay-mint"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-clay-orange-500 border-[3px] border-clay-orange-700 font-display font-bold text-white"
              style={{ boxShadow: "0 4px 0 0 #E65100" }}
            >
              Get Started <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
