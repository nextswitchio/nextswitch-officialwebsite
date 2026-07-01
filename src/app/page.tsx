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
