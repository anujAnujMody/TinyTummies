import FloatingWhatsApp from "@/components/islands/FloatingWhatsApp";
import type { ReactNode } from "react";

export default function GetStartedLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="min-h-screen bg-clay-cream">{children}</main>
      <FloatingWhatsApp />
    </>
  );
}
