import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import LabsHero from "@/components/sections/labs/LabsHero"
import ProblemsWorthSolving from "@/components/sections/labs/ProblemsWorthSolving"
import InnovationFramework from "@/components/sections/labs/InnovationFramework"
import WhatWeDo from "@/components/sections/labs/WhatWeDo"
import InnovationThemes from "@/components/sections/labs/InnovationThemes"
import FeaturedVentures from "@/components/sections/labs/FeaturedVentures"
import ForFounders from "@/components/sections/labs/ForFounders"
import ResearchThinking from "@/components/sections/labs/ResearchThinking"
import Partnerships from "@/components/sections/labs/Partnerships"
import AfricaWeAreBuilding from "@/components/sections/labs/AfricaWeAreBuilding"
import JoinTheLab from "@/components/sections/labs/JoinTheLab"
import Footer from "@/components/layout/Footer"
import { absoluteUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Labs — Next Switch Innovation Lab",
  description:
    "Next Switch Labs builds transformative technology ventures that solve Africa's biggest challenges. Explore our innovation framework, ventures, and research in AI, fintech, edtech, and more.",
  keywords: [
    "Next Switch Labs",
    "innovation lab Africa",
    "technology venture building",
    "African AI research",
    "startup incubator Africa",
    "tech venture studio",
    "African innovation lab",
    "AI research Africa",
    "venture building Africa",
    "tech incubator Lagos",
  ],
  openGraph: {
    title: "Labs — Next Switch Innovation Lab",
    description:
      "Next Switch Labs builds transformative technology ventures that solve Africa's biggest challenges. Explore our innovation framework, ventures, and research.",
    url: absoluteUrl("/labs"),
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: "Next Switch Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Labs — Next Switch Innovation Lab",
    description:
      "Next Switch Labs builds transformative technology ventures that solve Africa's biggest challenges.",
    images: [absoluteUrl("/og.png")],
  },
  alternates: {
    canonical: absoluteUrl("/labs"),
  },
}

export default function LabsPage() {
  return (
    <>
      <Header />
      <main>
        <LabsHero />
        <ProblemsWorthSolving />
        <InnovationFramework />
        <WhatWeDo />
        <InnovationThemes />
        <FeaturedVentures />
        <ForFounders />
        <ResearchThinking />
        <Partnerships />
        <AfricaWeAreBuilding />
        <JoinTheLab />
      </main>
      <Footer />
    </>
  )
}
