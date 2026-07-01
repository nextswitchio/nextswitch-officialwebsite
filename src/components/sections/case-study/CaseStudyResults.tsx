"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function CaseStudyResults({ study }: { study: { impact: string; metrics: { label: string; value: string }[] } }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Results</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">The <span className="text-gradient">Impact.</span></h2>
          <p className="mt-6 text-lg text-white/30 max-w-2xl mx-auto">{study.impact}</p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {study.metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
            >
              <span className="text-4xl font-bold text-gradient">{metric.value}</span>
              <p className="mt-2 text-xs text-white/30 uppercase tracking-wider">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
