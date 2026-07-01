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

export function generateStaticParams() {
  return caseStudies.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  return { title: `${study.client} — Next Switch Case Study`, description: study.tagline }
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
