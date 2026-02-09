import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/landing-page/hero";
import ConnectSection from "@/components/landing-page/ConnectSection";
import ProjectsSection from "@/components/landing-page/ProjectsSection";
import IdentitySection from "@/components/landing-page/identity-section";
import ServicesSection from "@/components/landing-page/ServiceSection";
import Technologies from "@/components/landing-page/Technologies";
import TestimonialsSection from "@/components/landing-page/TestimonialSection";
import OurEvents from "@/components/landing-page/our-events";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      {/* <StatsBar /> */}
      <IdentitySection />
      <TestimonialsSection />
      <ServicesSection />
      <ProjectsSection />
      <Technologies />
      <OurEvents />
      <ConnectSection />
    </main>
  );
}
