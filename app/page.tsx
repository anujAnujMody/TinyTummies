import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import MenuPreview from "@/components/sections/MenuPreview";
import Pricing from "@/components/sections/Pricing";
import RegistrationFooter from "@/components/sections/RegistrationFooter";
import SmoothScroll from "@/components/islands/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <WhyUs />
        <MenuPreview />
        <Pricing />
        <RegistrationFooter />
      </main>
    </SmoothScroll>
  );
}
