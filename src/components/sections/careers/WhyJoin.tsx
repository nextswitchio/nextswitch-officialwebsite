"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Target, Lightbulb, Globe, Users } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Mission-Driven Work",
    description: "Every project you touch contributes to building Africa's digital future. Your work has real impact on real people.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We don't just follow trends — we set them. You'll work with cutting-edge technology and solve novel problems.",
  },
  {
    icon: Globe,
    title: "Pan-African Reach",
    description: "Collaborate with teams and communities across the continent. Your work spans markets, cultures, and ecosystems.",
  },
  {
    icon: Users,
    title: "Growth Culture",
    description: "We invest in your development through mentorship, learning resources, and opportunities to take on new challenges.",
  },
]

export default function WhyJoin() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(1,255,240,0.015)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">Why Join Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">More Than a Job. <span className="text-gradient">A Mission.</span></h2>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
              >
                <div className="mb-5 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/[0.06]">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-base font-semibold text-white/80">{reason.title}</h3>
                <p className="mt-2 text-sm text-white/40 leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
