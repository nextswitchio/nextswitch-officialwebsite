"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const audiences = [
  { label: "Individuals", description: "Launch your vision with expert guidance and technology." },
  { label: "Startups", description: "From idea to scale — we build products that win markets." },
  { label: "Businesses", description: "Transform operations, reach customers, and grow smarter." },
  { label: "Corporations", description: "Enterprise innovation programs and digital transformation." },
  { label: "Educational Institutions", description: "Technology systems and talent programs for the future." },
  { label: "NGOs", description: "Impact-driven technology solutions that amplify your mission." },
  { label: "Communities", description: "Platforms that connect, empower, and organize people." },
  { label: "Governments", description: "Digital infrastructure and services for citizens." },
  { label: "Faith Based Organizations", description: "Technology that serves your community's mission." },
]

export default function WhoWeWorkWith() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(13,71,161,0.04)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Who We Work With
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Built For{" "}
            <span className="text-gradient">Builders.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {audiences.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group rounded-xl border border-white/[0.04] bg-white/[0.01] px-5 py-4 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500 cursor-default"
            >
              <h3 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                {item.label}
              </h3>
              <p className="mt-1 text-xs text-white/30 group-hover:text-white/40 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
