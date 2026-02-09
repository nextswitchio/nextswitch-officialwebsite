import AboutHero from "@/components/about-page/AboutHero";
import TeamSection from "@/components/about-page/TeamSection";
import TimelineSection from "@/components/about-page/TimelineSection";
import CTASection from "@/components/about-page/CTASection";
import OurIdeas from "@/components/about-page/OurIdeas";
import AboutVision from "@/components/about-page/AboutVision";
import TrustedBy from "@/components/about-page/TrustedBy";
import OurValues from "@/components/careers/our-values";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <TrustedBy />
      <OurIdeas />
      <AboutVision />
      <OurValues />
      <TimelineSection />
      <TeamSection />
      <CTASection />
    </main>
  );
}
