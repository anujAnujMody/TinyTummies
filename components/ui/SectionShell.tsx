import { ReactNode } from "react";

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "cream" | "white" | "blue-tint" | "pink-tint" | "green-tint" | "orange-tint" | "dark" | "gradient-green-orange";
  fullHeight?: boolean;
}

const bgMap = {
  cream: "bg-tt-cream",
  white: "bg-white",
  "blue-tint": "bg-tt-blue-tint",
  "pink-tint": "bg-tt-pink-tint",
  "green-tint": "bg-tt-green-tint",
  "orange-tint": "bg-tt-orange-tint",
  "gradient-green-orange": "bg-gradient-to-b from-tt-green-tint via-tt-cream to-tt-orange-tint",
  dark: "bg-tt-green-deep text-white",
};

export default function SectionShell({
  children,
  className = "",
  id,
  background = "cream",
  fullHeight = true,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`w-full ${fullHeight ? "min-h-[100svh] flex items-center" : "py-16 md:py-24"} ${bgMap[background]} ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 w-full">{children}</div>
    </section>
  );
}
