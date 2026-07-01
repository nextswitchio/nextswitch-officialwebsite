"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = ["All", "Company News", "Partnerships", "Product Launches", "Awards"]

const releases = [
  { title: "Next Switch Ventures Expands to Three New African Markets", date: "Apr 10, 2026", category: "Company News", slug: "next-switch-ventures-expands-to-three-new-african-markets" },
  { title: "Next Switch Academy Partners with 10 Universities Across Africa", date: "Mar 28, 2026", category: "Partnerships", slug: "next-switch-academy-partners-with-10-universities-across-africa" },
  { title: "Next Switch Labs Launches AI Research Division", date: "Mar 15, 2026", category: "Product Launches", slug: "next-switch-labs-launches-ai-research-division" },
  { title: "Next Switch CoWork Opens in Nairobi", date: "Mar 5, 2026", category: "Company News", slug: "next-switch-cowork-opens-in-nairobi" },
  { title: "Next Switch Wins African Innovation Award 2026", date: "Feb 20, 2026", category: "Awards", slug: "next-switch-wins-african-innovation-award-2026" },
  { title: "GUESTLY Platform Reaches 500,000 Users", date: "Feb 10, 2026", category: "Product Launches", slug: "guestly-platform-reaches-500000-users" },
]

export default function PressReleases() {
  const [active, setActive] = useState("All")
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  const filtered = active === "All" ? releases : releases.filter(r => r.category === active)

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Press Releases</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Official <span className="text-gradient">Announcements.</span></h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors shrink-0">
            View All <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-white/10 text-white border border-white/10"
                  : "text-white/30 border border-white/[0.06] hover:text-white/60 hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
          {filtered.map((item, i) => (
            <Link
              key={item.title}
              href={`/insights/${item.slug}`}
              className="group flex items-center justify-between bg-black/50 px-6 py-5 transition-all duration-300 hover:bg-white/[0.03]"
            >
              <div className="flex-1 min-w-0">
                <span className="text-xs font-medium text-cyan-400/60 uppercase tracking-wider">{item.category}</span>
                <h3 className="mt-1 text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors truncate">{item.title}</h3>
              </div>
              <div className="flex items-center gap-4 shrink-0 ml-4">
                <span className="text-xs text-white/20">{item.date}</span>
                <ArrowRight className="h-3.5 w-3.5 text-white/20 group-hover:text-cyan-400 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
