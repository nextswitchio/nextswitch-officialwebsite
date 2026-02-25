"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Search, MapPin, Clock } from "lucide-react";
import { EventCard } from "@/components/events/EventCard";

const events = [
  {
    id: "innovate-1",
    title: "InnovateTech Summit",
    date: "17",
    month: "JAN",
    location: "Next Switch Hubspace",
    time: "21:30",
    imageSrc: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop&crop=faces",
    imageAlt: "People taking notes at a tech summit",
    ctaLabel: "Join event",
  },
  {
    id: "innovate-2",
    title: "InnovateTech Summit",
    date: "17",
    month: "JAN",
    location: "Next Switch Hubspace",
    time: "21:30",
    imageSrc: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop&crop=faces",
    imageAlt: "People taking notes at a tech summit",
    ctaLabel: "Join event",
  },
  {
    id: "innovate-3",
    title: "InnovateTech Summit",
    date: "17",
    month: "JAN",
    location: "Next Switch Hubspace",
    time: "21:30",
    imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop&crop=faces",
    imageAlt: "People taking notes at a tech summit",
    ctaLabel: "Join event",
  },
  {
    id: "innovate-4",
    title: "InnovateTech Summit",
    date: "17",
    month: "JAN",
    location: "Next Switch Hubspace",
    time: "21:30",
    imageSrc: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=800&fit=crop&crop=faces",
    imageAlt: "People taking notes at a tech summit",
    ctaLabel: "Join event",
  },
  {
    id: "innovate-5",
    title: "InnovateTech Summit",
    date: "17",
    month: "JAN",
    location: "Next Switch Hubspace",
    time: "21:30",
    imageSrc: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&h=800&fit=crop&crop=faces",
    imageAlt: "People taking notes at a tech summit",
    ctaLabel: "Join event",
  },
  {
    id: "innovate-6",
    title: "InnovateTech Summit",
    date: "17",
    month: "JAN",
    location: "Next Switch Hubspace",
    time: "21:30",
    imageSrc: "https://images.unsplash.com/photo-1545235617-9465c4b8ba06?w=1200&h=800&fit=crop&crop=faces",
    imageAlt: "People taking notes at a tech summit",
    ctaLabel: "Join event",
  },
  {
    id: "innovate-7",
    title: "InnovateTech Summit",
    date: "17",
    month: "JAN",
    location: "Next Switch Hubspace",
    time: "21:30",
    imageSrc: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&h=800&fit=crop&crop=faces",
    imageAlt: "People taking notes at a tech summit",
    ctaLabel: "Join event",
  },
  {
    id: "design-expo-1",
    title: "Design Expo 2023",
    date: "20",
    month: "FEB",
    location: "Creative Center",
    time: "10:00",
    imageSrc: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&h=800&fit=crop&crop=faces",
    imageAlt: "Audience at a design conference",
    ctaLabel: "RSVP now",
  },
  {
    id: "green-tech-1",
    title: "Green Tech Conference",
    date: "25",
    month: "MAR",
    location: "Eco Pavilion",
    time: "14:00",
    imageSrc: "https://images.unsplash.com/photo-1520686441443-57b3425a98c8?w=1200&h=800&fit=crop&crop=faces",
    imageAlt: "Green tech conference",
    ctaLabel: "Register here",
  },
  {
    id: "ux-workshop-1",
    title: "UX Design Workshop",
    date: "30",
    month: "APR",
    location: "Innovate Hub",
    time: "09:30",
    imageSrc: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop&crop=faces",
    imageAlt: "Designers collaborating in a workshop",
    ctaLabel: "Sign up",
  },
];

const featuredEvents = events.slice(0, 3);

const EventList = () => {
  const featuredScrollRef = useRef<HTMLDivElement | null>(null);
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);

  const handleFeaturedToggle = (index: number) => {
    setActiveFeaturedIndex(index);
    const container = featuredScrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement | undefined;
    if (child) {
      container.scrollTo({
        left: child.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#f3f4f6] py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          
          <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <div className="mb-6">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7280]">
                Event Type
              </label>
              <div className="space-y-2 text-sm text-[#111827]">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-[#d1d5db]" />
                  <span>All</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-[#d1d5db]" />
                  <span>Workshop</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-[#d1d5db]" />
                  <span>Webinar</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-[#d1d5db]" />
                  <span>Conference</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-[#d1d5db]" />
                  <span>Bootcamp</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-[#d1d5db]" />
                  <span>Community Event</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-[#d1d5db]" />
                  <span>Mix Session</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7280]">
                Location
              </label>
              <select className="w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm text-[#111827]">
                <option>Anyplace</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7280]">
                Price
              </label>
              <select className="w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm text-[#111827]">
                <option>Free</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7280]">
                Date
              </label>
              <div className="space-y-2 text-sm text-[#111827]">
                <label className="flex items-center gap-2">
                  <input type="radio" name="date-range" className="h-4 w-4 border-[#d1d5db]" />
                  <span>This week</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="date-range" className="h-4 w-4 border-[#d1d5db]" />
                  <span>This month</span>
                </label>
              </div>
            </div>

            <button className="mt-2 w-full rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold text-white">
              Apply filters
            </button>
          </aside>

          <div className="space-y-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex flex-1 items-center rounded-full border border-[#e5e7eb] bg-[#f9fafb] px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#0065ff] focus-within:ring-offset-0">
                <Search className="mr-2 h-4 w-4 text-[#9ca3af]" />
                <input
                  type="text"
                  placeholder="Search events"
                  className="flex-1 bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9ca3af]"
                />
              </div>
              <button className="rounded-full bg-[#0065ff] px-8 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#0050d6]">
                Search
              </button>
            </div>

            <section className="space-y-4">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111827]">
                  Featured Events
                </h2>
                <div className="flex items-center gap-2">
                  {featuredEvents.map((event, index) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => handleFeaturedToggle(index)}
                      className={`h-2.5 w-2.5 rounded-full border border-[#0065ff] transition-colors ${index === activeFeaturedIndex ? "bg-[#0065ff]" : "bg-transparent"
                        }`}
                      aria-label={`Show featured event ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div
                ref={featuredScrollRef}
                className="flex gap-6 overflow-x-auto pb-2"
              >
                {featuredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px]"
                  >
                    <article className="relative h-72 overflow-hidden rounded-3xl bg-[#050616] shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                      <Image
                        src={event.imageSrc}
                        alt={event.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 360px, 80vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute inset-5 flex flex-col justify-between">
                        <div className="flex justify-between gap-4">
                          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-[#00e5ff] text-[#050616] shadow-lg">
                            <span className="text-lg font-bold leading-tight">
                              {event.date}
                            </span>
                            <span className="text-xs font-semibold tracking-wide uppercase">
                              {event.month}
                            </span>
                          </div>
                          <div className="flex flex-1 flex-col items-end justify-center text-right text-xs text-white/80">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-white/80" />
                              <span className="truncate text-[13px] font-medium">
                                {event.location}
                              </span>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                              <Clock className="h-4 w-4 text-white/80" />
                              <span className="text-[13px] font-medium">
                                {event.time}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold text-white">
                            {event.title}
                          </h3>
                          <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-2 text-sm font-semibold text-[#050616] shadow-md hover:bg-white"
                          >
                            {event.ctaLabel}
                          </button>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111827]">
                  All Events
                </h2>
                <p className="mt-1 text-sm md:text-base text-[#6b7280]">
                  Everything you need to know about what we do.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {events.map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    date={event.date}
                    month={event.month}
                    location={event.location}
                    time={event.time}
                    imageSrc={event.imageSrc}
                    imageAlt={event.imageAlt}
                    ctaLabel={event.ctaLabel}
                  />
                ))}
              </div>
            </section>

            <div className="flex justify-center pt-4">
              <button className="text-sm font-semibold text-[#0065ff]">
                Load more
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventList;
