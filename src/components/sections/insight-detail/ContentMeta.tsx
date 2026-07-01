"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Download, MapPin, Calendar, Clock, BookOpen, Award, Rss, FileText, Star } from "lucide-react"
import type { InsightContent, ContentType } from "@/data/insights"

const typeIcons: Record<ContentType, typeof BookOpen> = {
  "featured-story": Star,
  "press-release": Rss,
  "research-report": FileText,
  "leadership-essay": BookOpen,
  "impact-story": Award,
  article: BookOpen,
  event: Calendar,
}

export default function ContentMeta({ insight }: { insight: InsightContent }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {insight.metric && (
            <motion.div
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.02] p-8 text-center"
            >
              <span className="text-4xl font-bold text-gradient">{insight.metric}</span>
              <p className="mt-2 text-xs text-white/30 uppercase tracking-wider">{insight.metricLabel}</p>
            </motion.div>
          )}

          {insight.author && (
            <motion.div
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
            >
              <span className="text-xs font-semibold tracking-widest text-white/20 uppercase">Author</span>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center text-xs font-semibold text-cyan-400">
                  {insight.author.name.split(" ").map(n => n[0]).join("")}
                </span>
                <div>
                  <p className="text-sm font-medium text-white/80">{insight.author.name}</p>
                  <p className="text-xs text-white/30">{insight.author.role}</p>
                </div>
              </div>
            </motion.div>
          )}

          {insight.pages && (
            <motion.div
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex flex-col items-center justify-center text-center"
            >
              <Download className="h-5 w-5 text-cyan-400/60 mb-2" />
              <span className="text-sm font-medium text-white/70">{insight.pages}</span>
              <span className="text-xs text-white/30 mt-1">Download Full Report</span>
            </motion.div>
          )}

          {insight.eventType && (
            <motion.div
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
            >
              <span className="text-xs font-semibold tracking-widest text-white/20 uppercase">Event Details</span>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Calendar className="h-3.5 w-3.5 text-cyan-400/60" />
                  {insight.date}
                </div>
                {insight.location && (
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400/60" />
                    {insight.location}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
