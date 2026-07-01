"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"

const mentions = [
  { publication: "Financial Times", title: "The African Startup Ecosystem is Maturing", date: "Apr 12, 2026" },
  { publication: "Forbes Africa", title: "How Next Switch is Building the Infrastructure for Innovation", date: "Mar 20, 2026" },
  { publication: "TechCrunch", title: "Next Switch Labs Opens AI Division in Lagos", date: "Mar 16, 2026" },
  { publication: "Bloomberg", title: "African Tech Investment Reaches $8.2B in 2026", date: "Feb 22, 2026" },
  { publication: "CNN International", title: "The Next Generation of African Innovators", date: "Feb 8, 2026" },
  { publication: "Quartz Africa", title: "GUESTLY Platform Proves Demand for African Hospitality", date: "Jan 30, 2026" },
]

export default function MediaCoverage() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

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
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Media Coverage</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">In the <span className="text-gradient">Spotlight.</span></h2>
            <p className="mt-4 text-base text-white/30 max-w-xl">
              What the world is saying about our work across Africa.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors shrink-0">
            Press Inquiries <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {mentions.map((m, i) => (
            <motion.a
              key={m.title}
              href="#"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500"
            >
              <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">{m.publication}</span>
              <h3 className="mt-2 text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors leading-snug">{m.title}</h3>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/20">
                <span>{m.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
