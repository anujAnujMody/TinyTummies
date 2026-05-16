import type { LucideIcon } from "lucide-react";
import { Star, Heart, Shield, Clock, Smile } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  childAge: string;
  rating: number;
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/gallery-01.JPG", alt: "Colorful meal box with fresh vegetables", category: "Meals" },
  { src: "/images/gallery/gallery-02.JPG", alt: "Kids enjoying their lunch together", category: "Kids" },
  { src: "/images/gallery/gallery-03.JPG", alt: "Freshly prepared healthy snack box", category: "Meals" },
  { src: "/images/gallery/gallery-04.JPG", alt: "Happy child with a big smile at lunchtime", category: "Kids" },
  { src: "/images/gallery/gallery-05.JPG", alt: "Balanced meal with roti, rice and vegetables", category: "Meals" },
  { src: "/images/gallery/gallery-06.JPG", alt: "Our clean and hygienic kitchen", category: "Kitchen" },
  { src: "/images/gallery/gallery-07.JPG", alt: "Kids sharing meals and laughing", category: "Kids" },
  { src: "/images/gallery/gallery-08.JPG", alt: "Fresh fruit and snack preparation", category: "Meals" },
  { src: "/images/gallery/gallery-09.JPG", alt: "Meal packing in progress", category: "Kitchen" },
  { src: "/images/gallery/gallery-10.JPG", alt: "Child enjoying a tasty homemade meal", category: "Kids" },
  { src: "/images/gallery/gallery-11.JPG", alt: "Nutritious lunch box ready for delivery", category: "Meals" },
  { src: "/images/gallery/gallery-12.JPG", alt: "Our team preparing fresh meals", category: "Kitchen" },
  { src: "/images/gallery/gallery-13.JPG", alt: "Colorful and healthy kids meal", category: "Meals" },
  { src: "/images/gallery/gallery-14.JPG", alt: "Happy kids at school lunchtime", category: "Kids" },
  { src: "/images/gallery/gallery-15.JPG", alt: "Fresh ingredients being prepped", category: "Kitchen" },
  { src: "/images/gallery/gallery-16.JPG", alt: "Delicious homemade dal and rice", category: "Meals" },
  { src: "/images/gallery/gallery-17.JPG", alt: "Children excited about their meals", category: "Kids" },
  { src: "/images/gallery/gallery-18.JPG", alt: "Kitchen team at work", category: "Kitchen" },
  { src: "/images/gallery/gallery-19.JPG", alt: "Healthy snack box with variety", category: "Meals" },
  { src: "/images/gallery/gallery-20.JPG", alt: "Kids enjoying food with friends", category: "Kids" },
  { src: "/images/gallery/gallery-21.JPG", alt: "Meal boxes ready for school delivery", category: "Kitchen" },
  { src: "/images/gallery/gallery-22.JPG", alt: "Fresh and colorful vegetable dish", category: "Meals" },
  { src: "/images/gallery/gallery-23.JPG", alt: "Happy little tummies after lunch", category: "Kids" },
  { src: "/images/gallery/gallery-24.JPG", alt: "Our kitchen team with love and care", category: "Kitchen" },
];

export const categories = ["All", "Meals", "Kids", "Kitchen"];

export const testimonials: Testimonial[] = [
  {
    quote: "My son used to come home with a full tiffin. Now he asks for Tiny Tummies every morning. Best decision we ever made.",
    name: "Priya Sharma",
    childAge: "Mom of 7-year-old",
    rating: 5,
  },
  {
    quote: "No more 6 AM packing. No more guilt. Just happy kids and balanced meals. Tiny Tummies saved our mornings.",
    name: "Anita Reddy",
    childAge: "Mom of 5-year-old",
    rating: 5,
  },
  {
    quote: "The variety is amazing. My daughter actually looks forward to lunchtime now. She tells me what she had with so much excitement!",
    name: "Meera Joshi",
    childAge: "Mom of 9-year-old",
    rating: 5,
  },
  {
    quote: "As a working mom, this is a lifesaver. Fresh, hygienic food delivered to school. I can focus on my day knowing she's eating well.",
    name: "Kavita Nair",
    childAge: "Mom of 6-year-old",
    rating: 5,
  },
  {
    quote: "Both my kids are on the plan. One is picky, one eats everything. Both love Tiny Tummies. That says it all.",
    name: "Deepa Menon",
    childAge: "Mom of 4 and 8-year-old",
    rating: 5,
  },
];

export const galleryFeatures = [
  { icon: Star, title: "Kid-Approved", text: "Tastes they love", color: "text-clay-orange-500", bg: "bg-clay-orange-500/10", border: "border-clay-orange-500/20" },
  { icon: Shield, title: "100% Hygienic", text: "Safe & clean", color: "text-clay-green-700", bg: "bg-clay-green-700/10", border: "border-clay-green-700/20" },
  { icon: Heart, title: "Made with Love", text: "Just for kids", color: "text-clay-pink-500", bg: "bg-clay-pink-500/10", border: "border-clay-pink-500/20" },
  { icon: Clock, title: "On-Time Delivery", text: "Every school day", color: "text-clay-green-700", bg: "bg-clay-green-700/10", border: "border-clay-green-700/20" },
  { icon: Smile, title: "Happy Parents", text: "500+ families", color: "text-clay-orange-500", bg: "bg-clay-orange-500/10", border: "border-clay-orange-500/20" },
];
