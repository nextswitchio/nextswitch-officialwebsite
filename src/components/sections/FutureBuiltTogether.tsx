"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const stats = [
  { value: "54", label: "Countries" },
  { value: "1.5B+", label: "People" },
  { value: "500+", label: "Languages" },
  { value: "1", label: "Future" },
]

export default function FutureBuiltTogether() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4])

  return (
    <section ref={ref} className="relative py-32 sm:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(1,255,240,0.04)_0%,transparent_50%)]" />

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Together
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            The Future Is Too Important{" "}
            <span className="text-gradient">To Build Alone.</span>
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/30 leading-relaxed">
            Africa&apos;s transformation requires all of us. Individuals with vision.
            Businesses with resources. Governments with mandate. Communities with
            energy. Educators with knowledge. We believe the most important
            innovations emerge when diverse minds come together around a shared
            purpose. That&apos;s why partnership is at the heart of everything we build.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <a
            href="/booking?service=partnership"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:border-white/20"
          >
            Partner With Us
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
