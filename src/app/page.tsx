import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import Hero from "@/components/sections/Hero"
import WhoWeAre from "@/components/sections/WhoWeAre"
import AfricaWeSee from "@/components/sections/AfricaWeSee"
import WhatWeBuild from "@/components/sections/WhatWeBuild"
import WhoWeServe from "@/components/sections/WhoWeServe"
import FlagshipImpact from "@/components/sections/FlagshipImpact"
import FutureBuiltTogether from "@/components/sections/FutureBuiltTogether"
import LatestInsights from "@/components/sections/LatestInsights"
import FinalCta from "@/components/sections/FinalCta"
import Footer from "@/components/layout/Footer"
import { absoluteUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Next Switch — Lighting Africa. Building the Future.",
  description:
    "A frontier company advancing redemptive digital innovation across Africa. We help individuals, startups, businesses, and institutions design, build, and scale technology-driven solutions that create lasting impact.",
  keywords: [
    "Next Switch",
    "Africa technology company",
    "digital innovation Africa",
    "software development",
    "tech talent",
    "innovation lab",
    "African tech ecosystem",
    "redemptive innovation",
    "technology consulting",
  ],
  openGraph: {
    title: "Next Switch — Lighting Africa. Building the Future.",
    description:
      "A frontier company advancing redemptive digital innovation across Africa. We help individuals, startups, businesses, and institutions design, build, and scale technology-driven solutions that create lasting impact.",
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: "Next Switch — Lighting Africa. Building the Future.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Switch — Lighting Africa. Building the Future.",
    description:
      "A frontier company advancing redemptive digital innovation across Africa.",
    images: [absoluteUrl("/og.png")],
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <AfricaWeSee />
        <WhatWeBuild />
        <WhoWeServe />
        <FlagshipImpact />
        <FutureBuiltTogether />
        <LatestInsights />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
