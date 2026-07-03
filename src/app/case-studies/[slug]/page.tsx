import { notFound } from "next/navigation"
import { Metadata } from "next"
import Header from "@/components/layout/Header"
import CaseStudyHero from "@/components/sections/case-study/CaseStudyHero"
import CaseStudyOverview from "@/components/sections/case-study/CaseStudyOverview"
import CaseStudyApproach from "@/components/sections/case-study/CaseStudyApproach"
import CaseStudyResults from "@/components/sections/case-study/CaseStudyResults"
import CaseStudyCta from "@/components/sections/case-study/CaseStudyCta"
import Footer from "@/components/layout/Footer"
import { caseStudies, getCaseStudy } from "@/data/case-studies"
import { absoluteUrl } from "@/lib/utils"

export function generateStaticParams() {
  return caseStudies.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}

  const title = `${study.client} — Next Switch Case Study`
  const description = study.tagline
  const url = absoluteUrl(`/case-studies/${slug}`)

  return {
    title,
    description,
    keywords: [
      `${study.client} case study`,
      `${study.industry} digital transformation`,
      "Africa technology case study",
      "Next Switch portfolio",
      "digital innovation results",
      `African ${study.industry} tech`,
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

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  return (
    <>
      <Header />
      <main>
        <CaseStudyHero study={study} />
        <CaseStudyOverview study={study} />
        <CaseStudyApproach study={study} />
        <CaseStudyResults study={study} />
        <CaseStudyCta />
      </main>
      <Footer />
    </>
  )
}
