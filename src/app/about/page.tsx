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
