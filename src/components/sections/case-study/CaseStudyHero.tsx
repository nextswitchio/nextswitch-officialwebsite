"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, Building2, Clock, FolderKanban } from "lucide-react"
import type { CaseStudy } from "@/data/case-studies"

const icons = [Building2, Clock, FolderKanban]

export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 80])

  return (
    <section ref={ref} className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010507] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(13,71,161,0.07)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(1,255,240,0.03)_0%,transparent_40%)]" />

      <motion.div style={{ opacity, scale, y }} className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <a href="/services" className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-white/60 transition-colors mb-8">
            <ArrowLeft className="h-3 w-3" /> Back to Services
          </a>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
            <span className="text-xs text-white/40 tracking-wider uppercase">Case Study</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
            <span className="text-white/90">{study.client}</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl text-cyan-400/60 leading-relaxed">
            {study.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { label: "Industry", value: study.industry },
              { label: "Duration", value: study.duration },
            ].map((item, i) => {
              const Icon = icons[i]
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-3">
                  <Icon className="h-4 w-4 text-cyan-400/60" />
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest text-white/20 uppercase">{item.label}</span>
                    <p className="text-sm text-white/70">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
