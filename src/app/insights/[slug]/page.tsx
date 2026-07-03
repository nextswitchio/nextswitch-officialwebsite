import { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/layout/Header"
import ContentHero from "@/components/sections/insight-detail/ContentHero"
import ContentBody from "@/components/sections/insight-detail/ContentBody"
import ContentMeta from "@/components/sections/insight-detail/ContentMeta"
import ContentCta from "@/components/sections/insight-detail/ContentCta"
import Footer from "@/components/layout/Footer"
import { insightsContent, getInsight } from "@/data/insights"
import { absoluteUrl } from "@/lib/utils"

export function generateStaticParams() {
  return insightsContent.map(i => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const insight = getInsight(slug)
  if (!insight) return {}

  const title = `${insight.title} — Next Switch Insights`
  const description = insight.excerpt
  const url = absoluteUrl(`/insights/${slug}`)

  return {
    title,
    description,
    keywords: [
      insight.topic || "",
      insight.type,
      "Africa technology insights",
      "Next Switch research",
      insight.category || "",
      "African tech thought leadership",
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      url,
      type: insight.type === "article" ? "article" : "website",
      publishedTime: insight.date ? new Date(insight.date).toISOString() : undefined,
      authors: insight.author ? [insight.author.name] : undefined,
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
