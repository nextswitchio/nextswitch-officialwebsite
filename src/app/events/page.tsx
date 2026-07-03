import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { insightsContent } from "@/data/insights"
import { absoluteUrl, formatDate } from "@/lib/utils"
import type { InsightContent } from "@/data/insights"

export const metadata: Metadata = {
  title: "Events & Announcements — Next Switch",
  description:
    "Discover upcoming events, conferences, roundtables, and announcements from Next Switch. Join us as we shape Africa's technology future.",
  keywords: [
    "Next Switch events",
    "Africa tech events",
    "innovation summit",
    "AI ethics roundtable",
    "tech conferences Africa",
    "Next Switch announcements",
    "African innovation events",
  ],
  openGraph: {
    title: "Events & Announcements — Next Switch",
    description:
      "Discover upcoming events, conferences, and announcements from Next Switch across Africa.",
    url: absoluteUrl("/events"),
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: "Next Switch Events & Announcements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Announcements — Next Switch",
    description:
      "Discover upcoming events, conferences, and announcements from Next Switch.",
    images: [absoluteUrl("/og.png")],
  },
  alternates: {
    canonical: absoluteUrl("/events"),
  },
}

const eventTypeOrder: Record<string, number> = {
  "featured-story": 0,
  "press-release": 1,
  "research-report": 2,
  "article": 3,
  "leadership-essay": 4,
  "impact-story": 5,
  "event": 6,
}

export default function EventsPage() {
  const events = insightsContent.filter((i) => i.type === "event")
  const upcoming = events.filter((e) => e.eventType === "Upcoming")
  const past = events.filter((e) => e.eventType === "Past")

  const otherAnnouncements = insightsContent.filter(
    (i) =>
      i.type !== "event" &&
      i.type !== "featured-story" &&
      i.type !== "impact-story" &&
      i.type !== "leadership-essay",
  )

  const sortedAnnouncements = otherAnnouncements.sort(
    (a, b) => (eventTypeOrder[a.type] ?? 99) - (eventTypeOrder[b.type] ?? 99),
  )

  return (
    <>
      <Header />
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-32">
          <div className="mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">
              Events & Announcements
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              Shaping What&apos;s <span className="text-gradient">Next.</span>
            </h1>
            <p className="max-w-2xl text-base text-white/40">
              Join us at upcoming events and stay informed about the latest announcements
              from Next Switch.
            </p>
          </div>

          {upcoming.length > 0 && (
            <section className="mb-20">
              <h2 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-6">
                Upcoming Events
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {upcoming.map((event) => (
                  <EventCard key={event.slug} event={event} upcoming />
                ))}
              </div>
            </section>
          )}

          {past.length > 0 && (
            <section className="mb-20">
              <h2 className="text-sm font-semibold tracking-widest text-white/30 uppercase mb-6">
                Past Events
              </h2>
              <div className="space-y-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
                {past.map((event) => (
                  <EventRow key={event.slug} event={event} />
                ))}
              </div>
            </section>
          )}

          {sortedAnnouncements.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold tracking-widest text-white/30 uppercase mb-6">
                Announcements
              </h2>
              <div className="space-y-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
                {sortedAnnouncements.map((item) => (
                  <AnnouncementRow key={item.slug} item={item} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

function EventCard({ event, upcoming }: { event: InsightContent; upcoming?: boolean }) {
  return (
    <Link
      href={`/insights/${event.slug}`}
      className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
    >
      {upcoming && (
        <span className="mb-3 inline-block rounded-full bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-0.5 text-[10px] font-medium text-cyan-400 uppercase tracking-wider">
          Upcoming
        </span>
      )}
      <h3 className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors mb-2">
        {event.title}
      </h3>
      <p className="text-sm text-white/40 line-clamp-2 mb-4">{event.excerpt}</p>
      <div className="flex items-center gap-4 text-xs text-white/20">
        {event.location && (
          <span>{event.location}</span>
        )}
        <span>{event.date}</span>
      </div>
    </Link>
  )
}

function EventRow({ event }: { event: InsightContent }) {
  return (
    <Link
      href={`/insights/${event.slug}`}
      className="group flex items-center justify-between bg-black/50 px-6 py-5 transition-all duration-300 hover:bg-black/70"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors truncate">
            {event.title}
          </h3>
        </div>
        {event.location && (
          <span className="mt-1.5 block text-xs text-white/20">{event.location}</span>
        )}
      </div>
      <span className="shrink-0 ml-4 text-xs text-white/20">{event.date}</span>
    </Link>
  )
}

function AnnouncementRow({ item }: { item: InsightContent }) {
  const typeLabel = item.category || item.type.replace("-", " ")
  return (
    <Link
      href={`/insights/${item.slug}`}
      className="group flex items-center justify-between bg-black/50 px-6 py-5 transition-all duration-300 hover:bg-black/70"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-white/40 uppercase tracking-wider">
            {typeLabel}
          </span>
          <h3 className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors truncate">
            {item.title}
          </h3>
        </div>
      </div>
      <span className="shrink-0 ml-4 text-xs text-white/20">{item.date}</span>
    </Link>
  )
}
