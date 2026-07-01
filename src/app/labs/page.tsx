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
