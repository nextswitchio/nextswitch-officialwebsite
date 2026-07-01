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
