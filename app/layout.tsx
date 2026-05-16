import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_NAME, SITE_URL } from "@/data/site";
import { OrganizationSchema, ServiceSchema, FAQSchema } from "@/components/seo";
import SmoothScroll from "@/components/islands/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Little Tummies, Big Nutrition`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Fresh, balanced meals designed for young children — delivered directly to their school or doorstep every day in Bengaluru.",
  keywords: [
    "kids meals",
    "school lunch India",
    "children nutrition",
    "healthy food for kids",
    "meal delivery school",
    "Tiny Tummies",
    "Bengaluru kids food",
  ],
  authors: [{ name: "Tiny Tummies" }],
  creator: "Tiny Tummies",
  publisher: "Tiny Tummies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Little Tummies, Big Nutrition`,
    description: "Fresh, balanced meals designed for young children — delivered directly to their school or doorstep every day.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tiny Tummies - Healthy meals for kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Little Tummies, Big Nutrition`,
    description: "Fresh, balanced meals designed for young children — delivered directly to their school or doorstep every day.",
    images: ["/images/og-image.png"],
    creator: "@tinytummies",
  },
  alternates: {
    canonical: SITE_URL,
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
      className={cn("h-full antialiased", poppins.variable)}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <OrganizationSchema />
        <ServiceSchema />
        <FAQSchema />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}