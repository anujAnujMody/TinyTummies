import { shadows } from "@/data/shared-maps";

/* ── Claymorph shadow builder — replaces inline style duplication ── */
export function clayShadow(preset: keyof typeof shadows = "clay"): React.CSSProperties["boxShadow"] {
  return shadows[preset];
}

/* ── Stagger delay generator ── */
export function staggerDelay(index: number, base = 0.08, step = 0.06): string {
  return (base + index * step).toFixed(2);
}

/* ── Scroll-to-section helper (used by Navbar) ── */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const container = document.getElementById("main");
  if (container) {
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const scrollTop = container.scrollTop + elRect.top - containerRect.top;
    container.scrollTo({ top: scrollTop, behavior: "smooth" });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
