"use client";

import Link from "next/link";
import { cn, scrollToSection } from "@/lib/utils";

export default function FooterNavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const hash = href.includes("#") ? href.split("#")[1] : null;
    if (hash) {
      e.preventDefault();
      scrollToSection(hash);
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
    }
  };

  return (
    <Link href={href} onClick={handleClick} scroll={false} className={cn("text-sm text-ink hover:text-clay-green-700 transition-colors font-medium", className)}>
      {children}
    </Link>
  );
}
