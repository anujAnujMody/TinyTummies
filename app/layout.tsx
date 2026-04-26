import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

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
      className={`${nunito.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
