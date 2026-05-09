import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tiny Tummies — Little Tummies, Big Nutrition",
  description:
    "Fresh, balanced meals designed for young children — delivered directly to their school or doorstep every day.",
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
      "Fresh, balanced meals designed for young children — delivered directly to their school or doorstep every day.",
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
      className={cn(
        "h-full antialiased",
        poppins.variable,
      )}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
