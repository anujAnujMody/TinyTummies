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
  const offset = 80; // navbar height + padding
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
