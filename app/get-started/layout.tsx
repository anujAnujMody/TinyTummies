import SmoothScroll from "@/components/islands/SmoothScroll";
import FloatingWhatsApp from "@/components/islands/FloatingWhatsApp";
import type { ReactNode } from "react";

export default function GetStartedLayout({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-clay-cream">{children}</main>
      <FloatingWhatsApp />
    </SmoothScroll>
  );
}
