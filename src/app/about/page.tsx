import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import AboutHero from "@/components/sections/about/AboutHero"
import WhyWeExist from "@/components/sections/about/WhyWeExist"
import OurStory from "@/components/sections/about/OurStory"
import RedemptiveInnovation from "@/components/sections/about/RedemptiveInnovation"
import OurVision from "@/components/sections/about/OurVision"
import OurMission from "@/components/sections/about/OurMission"
import OurBeliefs from "@/components/sections/about/OurBeliefs"
import OurValues from "@/components/sections/about/OurValues"
import Ecosystem from "@/components/sections/about/Ecosystem"
import WhoWeWorkWith from "@/components/sections/about/WhoWeWorkWith"
import LeadershipPhilosophy from "@/components/sections/about/LeadershipPhilosophy"
import MeetOurTeam from "@/components/sections/about/MeetOurTeam"
import FutureWeAreBuilding from "@/components/sections/about/FutureWeAreBuilding"
import AboutCta from "@/components/sections/about/AboutCta"
import Footer from "@/components/layout/Footer"
import { absoluteUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About — Next Switch",
  description:
    "Learn about Next Switch's mission to advance redemptive digital innovation across Africa. Discover our story, vision, values, and the team building Africa's technology future.",
  keywords: [
    "about Next Switch",
    "redemptive innovation",
    "Africa technology company",
    "digital innovation mission",
    "African tech ecosystem builders",
    "technology for social impact",
    "Next Switch team",
    "Africa innovation story",
  ],
  openGraph: {
    title: "About — Next Switch",
    description:
      "Learn about Next Switch's mission to advance redemptive digital innovation across Africa.",
    url: absoluteUrl("/about"),
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: "About Next Switch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Next Switch",
    description:
      "Learn about Next Switch's mission to advance redemptive digital innovation across Africa.",
    images: [absoluteUrl("/og.png")],
  },
  alternates: {
    canonical: absoluteUrl("/about"),
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <WhyWeExist />
        <OurStory />
        <RedemptiveInnovation />
        <OurVision />
        <OurMission />
        <OurBeliefs />
        <OurValues />
        <Ecosystem />
        <WhoWeWorkWith />
        <LeadershipPhilosophy />
        <MeetOurTeam />
        <FutureWeAreBuilding />
        <AboutCta />
      </main>
      <Footer />
    </>
  )
}
