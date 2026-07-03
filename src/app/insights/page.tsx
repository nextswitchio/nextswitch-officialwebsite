import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import NewsroomHero from "@/components/sections/insights/NewsroomHero"
import FeaturedStory from "@/components/sections/insights/FeaturedStory"
import PressReleases from "@/components/sections/insights/PressReleases"
import ResearchReports from "@/components/sections/insights/ResearchReports"
import InsightsGrid from "@/components/sections/insights/InsightsGrid"
import ImpactStories from "@/components/sections/insights/ImpactStories"
import MediaCoverage from "@/components/sections/insights/MediaCoverage"
import EventsAnnouncements from "@/components/sections/insights/EventsAnnouncements"
import LeadershipPerspectives from "@/components/sections/insights/LeadershipPerspectives"
import PressKit from "@/components/sections/insights/PressKit"
import Subscribe from "@/components/sections/insights/Subscribe"
import InsightsCta from "@/components/sections/insights/InsightsCta"
import Footer from "@/components/layout/Footer"
import { absoluteUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Insights — Next Switch",
  description:
    "Explore insights, research, press releases, and thought leadership from Next Switch. Stay informed about Africa's digital transformation and redemptive innovation.",
  keywords: [
    "Next Switch insights",
    "Africa technology news",
    "digital innovation research",
    "African tech thought leadership",
    "redemptive innovation articles",
    "Africa AI research",
    "tech talent development Africa",
    "African startup ecosystem news",
  ],
  openGraph: {
    title: "Insights — Next Switch",
    description:
      "Explore insights, research, press releases, and thought leadership from Next Switch about Africa's digital transformation.",
    url: absoluteUrl("/insights"),
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: "Next Switch Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights — Next Switch",
    description:
      "Explore insights, research, and thought leadership from Next Switch about Africa's digital transformation.",
    images: [absoluteUrl("/og.png")],
  },
  alternates: {
    canonical: absoluteUrl("/insights"),
  },
}

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main>
        <NewsroomHero />
        <FeaturedStory />
        <PressReleases />
        <ResearchReports />
        <InsightsGrid />
        <ImpactStories />
        <MediaCoverage />
        <EventsAnnouncements />
        <LeadershipPerspectives />
        <PressKit />
        <Subscribe />
        <InsightsCta />
      </main>
      <Footer />
    </>
  )
}
