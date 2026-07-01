"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const groups = [
  { label: "Young Innovators", count: "60%", description: "of Africa's population is under 25" },
  { label: "Businesses", count: "750+", description: "startups building across the continent" },
  { label: "Governments", count: "30+", description: "nations embracing digital transformation" },
  { label: "Communities", count: "500M+", description: "people connected through mobile technology" },
  { label: "Creators", count: "1,000+", description: "tech hubs and innovation spaces" },
  { label: "Educators", count: "2,000+", description: "universities training the next generation" },
]

export default function AfricaWeSee() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,255,240,0.03)_0%,transparent_50%)]" />

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            The Africa We See
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            We See An Africa{" "}
            <span className="text-gradient">Full Of Builders.</span>
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/30 leading-relaxed">
            Across 54 countries, a new generation is rising. Young innovators building solutions
            for their communities. Entrepreneurs creating jobs. Governments modernizing services.
            Educators preparing the next wave of talent. We see an Africa not waiting for the future,
            but building it. Every day. In every sector. Against every odd.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-black/50 p-8 group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                {group.count}
              </div>
              <div className="text-sm font-medium text-white/70 mb-1">{group.label}</div>
              <div className="text-sm text-white/30">{group.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
