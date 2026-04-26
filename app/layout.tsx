import type { Metadata } from "next";
import { Nunito, Inter, Geist, Baloo_2 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tiny Tummies — Little Tummies, Big Nutrition | Coming Soon",
  description:
    "Fresh, balanced meals designed for young children — delivered directly to their school, every day. Coming soon.",
  keywords: [
    "kids meals",
    "school lunch India",
    "children nutrition",
    "healthy food for kids",
    "meal delivery school",
    "Tiny Tummies",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Tiny Tummies — Little Tummies, Big Nutrition",
    description:
      "Fresh, balanced meals designed for young children — delivered directly to their school, every day. Coming soon.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", baloo.variable, nunito.variable, inter.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
