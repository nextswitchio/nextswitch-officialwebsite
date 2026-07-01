"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

const events = [
  { title: "Next Switch Annual Summit 2026", location: "Lagos, Nigeria", date: "Jun 15-17, 2026", type: "Upcoming", slug: "next-switch-annual-summit-2026" },
  { title: "African AI Ethics Roundtable", location: "Nairobi, Kenya", date: "May 10, 2026", type: "Upcoming", slug: "african-ai-ethics-roundtable" },
  { title: "Innovation Lab Groundbreaking Ceremony", location: "Accra, Ghana", date: "Apr 22, 2026", type: "Past", slug: "innovation-lab-groundbreaking-ceremony" },
  { title: "Digital Infrastructure Conference", location: "Kigali, Rwanda", date: "Mar 3-5, 2026", type: "Past", slug: "digital-infrastructure-conference" },
]

export default function EventsAnnouncements() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Events & Announcements</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Shaping What&apos;s <span className="text-gradient">Next.</span></h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors shrink-0">
            <Calendar className="h-3.5 w-3.5" /> RSVP <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
          {events.map((event, i) => (
            <Link
              key={event.title}
              href={`/insights/${event.slug}`}
              className="group flex items-center justify-between bg-black/50 px-6 py-5 transition-all duration-300"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  {event.type === "Upcoming" && (
                    <span className="rounded-full bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-0.5 text-[10px] font-medium text-cyan-400 uppercase tracking-wider">
                      Upcoming
                    </span>
                  )}
                  <h3 className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors truncate">{event.title}</h3>
                </div>
                <span className="mt-1.5 block text-xs text-white/20">{event.location}</span>
              </div>
              <span className="shrink-0 ml-4 text-xs text-white/20">{event.date}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
