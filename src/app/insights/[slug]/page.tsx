import { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/layout/Header"
import ContentHero from "@/components/sections/insight-detail/ContentHero"
import ContentBody from "@/components/sections/insight-detail/ContentBody"
import ContentMeta from "@/components/sections/insight-detail/ContentMeta"
import ContentCta from "@/components/sections/insight-detail/ContentCta"
import Footer from "@/components/layout/Footer"
import { insightsContent, getInsight } from "@/data/insights"

export function generateStaticParams() {
  return insightsContent.map(i => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const insight = getInsight(slug)
  if (!insight) return {}
  return { title: `${insight.title} — Next Switch Insights`, description: insight.excerpt }
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const insight = getInsight(slug)
  if (!insight) notFound()

  return (
    <>
      <Header />
      <main>
        <ContentHero insight={insight} />
        <ContentBody insight={insight} />
        <ContentMeta insight={insight} />
        <ContentCta />
      </main>
      <Footer />
    </>
  )
}
