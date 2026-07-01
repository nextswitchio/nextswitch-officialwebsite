"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, Clock, Calendar, MapPin, BookOpen, FileText, Mic, Award, Star, Rss } from "lucide-react"
import type { InsightContent, ContentType } from "@/data/insights"

const typeConfig: Record<ContentType, { label: string; icon: typeof BookOpen }> = {
  "featured-story": { label: "Featured Story", icon: Star },
  "press-release": { label: "Press Release", icon: Rss },
  "research-report": { label: "Research Report", icon: FileText },
  "leadership-essay": { label: "Leadership Essay", icon: BookOpen },
  "impact-story": { label: "Impact Story", icon: Award },
  article: { label: "Article", icon: Mic },
  event: { label: "Event", icon: Calendar },
}

function getTypeLabel(type: ContentType) {
  return typeConfig[type]?.label ?? type
}

function getTypeIcon(type: ContentType) {
  return typeConfig[type]?.icon ?? BookOpen
}

export default function ContentHero({ insight }: { insight: InsightContent }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 80])
  const Icon = getTypeIcon(insight.type)

  return (
    <section ref={ref} className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010507] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(13,71,161,0.07)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(1,255,240,0.03)_0%,transparent_40%)]" />

      <motion.div style={{ opacity, scale, y }} className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <a href="/insights" className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-white/60 transition-colors mb-8">
            <ArrowLeft className="h-3 w-3" /> Back to Insights
          </a>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 mb-6">
            <Icon className="h-3 w-3 text-cyan-400" />
            <span className="text-xs text-white/40 tracking-wider uppercase">{getTypeLabel(insight.type)}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
            <span className="text-white/90">{insight.title}</span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-white/30">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {insight.date}</span>
            {insight.readTime && <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {insight.readTime}</span>}
            {insight.topic && <span className="inline-flex items-center gap-1.5">{insight.topic}</span>}
            {insight.location && <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {insight.location}</span>}
            {insight.author && (
              <span className="inline-flex items-center gap-2 ml-2 pl-4 border-l border-white/10">
                <span className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center text-[9px] font-semibold text-cyan-400">
                  {insight.author.name.split(" ").map(n => n[0]).join("")}
                </span>
                By {insight.author.name}
              </span>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
