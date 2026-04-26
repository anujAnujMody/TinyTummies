"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Snap to sections
    lenis.on("scroll", (e: { velocity: number; targetScroll: number }) => {
      const sections = document.querySelectorAll("main > section, main > footer");
      const windowHeight = window.innerHeight;
      
      // Only snap when velocity is low (user stopped scrolling)
      if (Math.abs(e.velocity) < 0.5) {
        let closestSection: Element | null = null;
        let closestDistance = Infinity;
        
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        });
        
        if (closestSection && closestDistance > 50) {
          const target = closestSection as HTMLElement;
          lenis.scrollTo(target, { offset: 0, duration: 0.8 });
        }
      }
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
