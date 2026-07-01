"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Download } from "lucide-react"

const reports = [
  { title: "Digital Infrastructure in Africa 2026", type: "Industry Report", pages: "48 pages", date: "Apr 2026", slug: "digital-infrastructure-in-africa-2026" },
  { title: "Redemptive Innovation: A Framework for African Technology", type: "White Paper", pages: "32 pages", date: "Mar 2026", slug: "redemptive-innovation-a-framework-for-african-technology" },
  { title: "AI Readiness Across African Economies", type: "Research Brief", pages: "24 pages", date: "Feb 2026", slug: "ai-readiness-across-african-economies" },
  { title: "The Future of Work in Africa: 2026-2030", type: "Market Insight", pages: "56 pages", date: "Jan 2026", slug: "the-future-of-work-in-africa-2026-2030" },
]

export default function ResearchReports() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="research" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">Research & Reports</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Research For A <span className="text-gradient">Better Future.</span></h2>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {reports.map((report, i) => (
            <Link
              key={report.title}
              href={`/insights/${report.slug}`}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-semibold tracking-widest text-cyan-400/60 uppercase">{report.type}</span>
                <div className="rounded-full border border-white/10 p-2 group-hover:border-cyan-400/30 transition-all duration-500">
                  <Download className="h-3.5 w-3.5 text-white/30 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors duration-300">{report.title}</h3>
              <div className="mt-4 flex items-center gap-4 text-xs text-white/30">
                <span>{report.pages}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{report.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
