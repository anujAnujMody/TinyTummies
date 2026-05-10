"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu as MenuIcon, X, ArrowRight } from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";
import { navLinks } from "@/data/site";
import { SECTION_IDS, GOOGLE_FORM_URL } from "@/data/shared-maps";

function PandaLogo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/panda-bento.JPG"
        alt="Tiny Tummies"
        width={56}
        height={56}
        loading="eager"
        className="h-14 w-14 object-contain rounded-lg"
      />
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-xl font-bold tracking-tight text-clay-green-700">Tiny</span>
          <span className="font-display text-xl font-bold tracking-tight text-clay-orange-500">Tummies</span>
        </div>
        <span className="text-xs text-ink-muted leading-tight">Nutrition in every bite</span>
      </div>
    </div>
  );
}

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
    <>
      <header className="fixed top-4 left-4 right-4 z-50">
        <nav className={cn(
          "hidden lg:flex h-18 items-center justify-between px-6 transition-all duration-300 max-w-7xl mx-auto",
          scrolled
            ? "rounded-2xl border-[3px] border-clay-mint-border bg-white/95 backdrop-blur-xl"
            : "rounded-2xl border-[3px] border-clay-mint-border/60 bg-white/85 backdrop-blur-md"
        )}
          style={{ boxShadow: "0 4px 0 0 #B9DFA0, 0 12px 24px oklch(0 0 0 / 0.08)" }}
        >
          <div className="flex items-center justify-between w-full">
<Link href="/" onClick={(e) => handleNavClick(e, "/")} className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay-green-700 cursor-pointer">
               <PandaLogo />
             </Link>

            <div className="flex items-center gap-0.5">
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
                      "relative rounded-full px-4 py-2 font-display text-sm font-medium transition-all duration-200",
                      isActive 
                        ? "text-clay-green-900 bg-clay-mint/70" 
                        : "text-ink-muted hover:text-ink hover:bg-clay-mint/40"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-clay-green-700" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-clay-orange-500 border-[3px] border-clay-orange-700 px-5 font-display text-sm font-bold text-white transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
                style={{ boxShadow: "0 4px 0 0 #E65100, 0 6px 12px oklch(0 0 0 / 0.15)" }}
              >
                Get Started <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex size-12 items-center justify-center rounded-xl border-[3px] border-clay-mint-border bg-white text-clay-green-700 shadow-md lg:hidden"
          aria-label="Open navigation"
        >
          <MenuIcon className="size-6" />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ink/40 p-4 backdrop-blur-sm lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 flex size-12 items-center justify-center rounded-xl border-[3px] border-clay-mint-border bg-white text-clay-green-700"
            aria-label="Close navigation"
          >
            <X className="size-6" />
          </button>
          <div className="mt-20 flex flex-col gap-3 rounded-2xl border-[3px] border-clay-mint-border bg-clay-cream p-5" style={{ boxShadow: "0 4px 0 0 #B9DFA0, 0 16px 40px oklch(0 0 0 / 0.15)" }}>
            <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="mb-2 flex shrink-0 items-center self-center cursor-pointer">
              <PandaLogo />
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-xl px-4 py-3 font-display text-lg font-medium text-ink hover:bg-clay-mint transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-clay-orange-500 border-[3px] border-clay-orange-700 font-display text-base font-bold text-white"
              style={{ boxShadow: "0 4px 0 0 #E65100" }}
            >
              Get Started <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
