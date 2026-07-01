import { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/layout/Header"
import PositionHero from "@/components/sections/position/PositionHero"
import PositionOverview from "@/components/sections/position/PositionOverview"
import PositionRequirements from "@/components/sections/position/PositionRequirements"
import PositionCta from "@/components/sections/position/PositionCta"
import Footer from "@/components/layout/Footer"
import { positions, getPosition } from "@/data/positions"

export function generateStaticParams() {
  return positions.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const position = getPosition(slug)
  if (!position) return {}
  return { title: `${position.title} — Next Switch Careers`, description: position.about }
}

export default async function PositionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const position = getPosition(slug)
  if (!position) notFound()

  return (
    <>
      <Header />
      <main>
        <PositionHero position={position} />
        <PositionOverview position={position} />
        <PositionRequirements position={position} />
        <PositionCta />
      </main>
      <Footer />
    </>
  )
}
