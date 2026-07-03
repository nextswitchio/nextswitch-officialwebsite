import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import ServicesHero from "@/components/sections/services/ServicesHero"
import HowWeHelp from "@/components/sections/services/HowWeHelp"
import Capabilities from "@/components/sections/services/Capabilities"
import WhoWeWorkWith from "@/components/sections/services/WhoWeWorkWith"
import OurApproach from "@/components/sections/services/OurApproach"
import WhyNextSwitch from "@/components/sections/services/WhyNextSwitch"
import SuccessStories from "@/components/sections/services/SuccessStories"
import Industries from "@/components/sections/services/Industries"
import FutureCollaborative from "@/components/sections/services/FutureCollaborative"
import ServicesCta from "@/components/sections/services/ServicesCta"
import Footer from "@/components/layout/Footer"
import { absoluteUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Services — Next Switch",
  description:
    "Next Switch offers technology consulting, software development, digital transformation, AI solutions, and innovation lab services across Africa. Partner with us to build impactful technology.",
  keywords: [
    "Next Switch services",
    "technology consulting Africa",
    "software development Africa",
    "digital transformation services",
    "AI solutions Africa",
    "tech innovation consulting",
    "African tech agency",
    "custom software development",
    "digital strategy Africa",
    "technology partnership",
  ],
  openGraph: {
    title: "Services — Next Switch",
    description:
      "Next Switch offers technology consulting, software development, digital transformation, AI solutions, and innovation lab services across Africa.",
    url: absoluteUrl("/services"),
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: "Next Switch Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Next Switch",
    description:
      "Next Switch offers technology consulting, software development, digital transformation, and AI solutions across Africa.",
    images: [absoluteUrl("/og.png")],
  },
  alternates: {
    canonical: absoluteUrl("/services"),
  },
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <HowWeHelp />
        <Capabilities />
        <WhoWeWorkWith />
        <OurApproach />
        <WhyNextSwitch />
        <SuccessStories />
        <Industries />
        <FutureCollaborative />
        <ServicesCta />
      </main>
      <Footer />
    </>
  )
}
