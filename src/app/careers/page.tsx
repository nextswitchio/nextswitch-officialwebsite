import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import CareerHero from "@/components/sections/careers/CareerHero"
import WhyJoin from "@/components/sections/careers/WhyJoin"
import OpenPositions from "@/components/sections/careers/OpenPositions"
import Culture from "@/components/sections/careers/Culture"
import Benefits from "@/components/sections/careers/Benefits"
import HiringProcess from "@/components/sections/careers/HiringProcess"
import CareerCta from "@/components/sections/careers/CareerCta"
import Footer from "@/components/layout/Footer"
import { absoluteUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Careers — Next Switch",
  description:
    "Join Next Switch and help build Africa's technology future. Explore open positions across engineering, design, AI research, marketing, and more.",
  keywords: [
    "Next Switch careers",
    "tech jobs Africa",
    "software engineering jobs Lagos",
    "AI research jobs Nairobi",
    "product design careers Africa",
    "work in African tech",
    "technology jobs Africa",
    "join Next Switch team",
  ],
  openGraph: {
    title: "Careers — Next Switch",
    description:
      "Join Next Switch and help build Africa's technology future. Explore open positions across engineering, design, AI research, marketing, and more.",
    url: absoluteUrl("/careers"),
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: "Careers at Next Switch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — Next Switch",
    description:
      "Join Next Switch and help build Africa's technology future.",
    images: [absoluteUrl("/og.png")],
  },
  alternates: {
    canonical: absoluteUrl("/careers"),
  },
}

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <CareerHero />
        <WhyJoin />
        <OpenPositions />
        <Culture />
        <Benefits />
        <HiringProcess />
        <CareerCta />
      </main>
      <Footer />
    </>
  )
}
