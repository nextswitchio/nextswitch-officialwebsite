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
