import type { ContactInfo, NavLink, TrustStripItem } from "./types";

export const contact: ContactInfo = {
  phone: "+91 7975465679",
  phoneHref: "tel:+917975465679",
  whatsapp: "https://wa.me/917975465679?text=Hi%20Tiny%20Tummies%2C%20I%20want%20to%20get%20started",
  email: "hello@tinytummies.com",
  emailHref: "mailto:hello@tinytummies.com",
  address: "Tiny Tummies Kitchen, 123, Healthy Lane, Green Park, Bengaluru - 560001",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const trustStrip: TrustStripItem[] = [
  { title: "100% Hygienic", text: "& Safe", icon: "shield" },
  { title: "No Preservatives", text: "No Junk", icon: "leaf" },
  { title: "Made with Love", text: "Just for Kids", icon: "heart" },
  { title: "On-time Delivery", text: "Everyday", icon: "truck" },
];

export const SITE_URL = "https://tinytummies.com";
export const SITE_NAME = "Tiny Tummies";
export const SITE_TAGLINE = "Little Tummies, Big Nutrition";
