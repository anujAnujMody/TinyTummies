import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import WhyUs from "@/components/sections/WhyUs";
import HowItWorks from "@/components/sections/HowItWorks";
import KitchenTrust from "@/components/sections/KitchenTrust";
import Pricing from "@/components/sections/Pricing";
import AboutSection from "@/components/sections/AboutSection";
import RegistrationFooter from "@/components/sections/RegistrationFooter";
import FloatingWhatsApp from "@/components/islands/FloatingWhatsApp";
import SmoothScroll from "@/components/islands/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Menu />
        <WhyUs />
        <HowItWorks />
        <KitchenTrust />
        <Pricing />
        <AboutSection />
        <RegistrationFooter />
      </main>
      <FloatingWhatsApp />
    </SmoothScroll>
  );
}
