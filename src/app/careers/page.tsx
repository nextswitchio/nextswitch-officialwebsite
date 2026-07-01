import Header from "@/components/layout/Header"
import CareerHero from "@/components/sections/careers/CareerHero"
import WhyJoin from "@/components/sections/careers/WhyJoin"
import OpenPositions from "@/components/sections/careers/OpenPositions"
import Culture from "@/components/sections/careers/Culture"
import Benefits from "@/components/sections/careers/Benefits"
import HiringProcess from "@/components/sections/careers/HiringProcess"
import CareerCta from "@/components/sections/careers/CareerCta"
import Footer from "@/components/layout/Footer"

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
