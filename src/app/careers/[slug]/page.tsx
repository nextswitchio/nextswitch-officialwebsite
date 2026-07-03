import { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/layout/Header"
import PositionHero from "@/components/sections/position/PositionHero"
import PositionOverview from "@/components/sections/position/PositionOverview"
import PositionRequirements from "@/components/sections/position/PositionRequirements"
import PositionCta from "@/components/sections/position/PositionCta"
import Footer from "@/components/layout/Footer"
import { positions, getPosition } from "@/data/positions"
import { absoluteUrl } from "@/lib/utils"

export function generateStaticParams() {
  return positions.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const position = getPosition(slug)
  if (!position) return {}

  const title = `${position.title} — Next Switch Careers`
  const description = position.about
  const url = absoluteUrl(`/careers/${slug}`)

  return {
    title,
    description,
    keywords: [
      `${position.title} job`,
      `${position.department} careers Africa`,
      `tech jobs ${position.location}`,
      `${position.title} ${position.location}`,
      "African tech careers",
      "Next Switch hiring",
    ],
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: absoluteUrl("/og.png"),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og.png")],
    },
    alternates: { canonical: url },
  }
}

export default async function PositionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const position = getPosition(slug)
  if (!position) notFound()

  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: position.title,
    description: position.about,
    datePosted: "2026-01-01",
    hiringOrganization: {
      "@type": "Organization",
      name: "Next Switch",
      sameAs: absoluteUrl(""),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: position.location.split(",")[0].trim(),
        addressCountry: position.location.includes("Remote") ? null : "NG",
      },
    },
    employmentType: position.type,
    responsibilities: position.responsibilities,
    qualifications: position.requirements,
    ...(position.location === "Remote" ? { jobLocationType: "TELECOMMUTE" } : {}),
  }

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
        />
        <PositionHero position={position} />
        <PositionOverview position={position} />
        <PositionRequirements position={position} />
        <PositionCta />
      </main>
      <Footer />
    </>
  )
}
