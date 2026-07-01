"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Cpu, BookOpen, Lightbulb, Briefcase, Search, Handshake } from "lucide-react"

const areas = [
  { label: "Technology", icon: Cpu, description: "Building solutions that work for Africa." },
  { label: "Education", icon: BookOpen, description: "Developing talent for the digital economy." },
  { label: "Innovation", icon: Lightbulb, description: "Creating new possibilities through research." },
  { label: "Entrepreneurship", icon: Briefcase, description: "Supporting founders and ventures." },
  { label: "Research", icon: Search, description: "Understanding what Africa needs." },
  { label: "Collaboration", icon: Handshake, description: "Building ecosystems that scale impact." },
]

export default function OurMission() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Our Mission
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Creating Systems{" "}
            <br />
            <span className="text-gradient">That Help People Thrive.</span>
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {areas.map((area, i) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group"
              >
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5 flex items-center gap-4 hover:bg-white/[0.04] hover:border-cyan-400/10 transition-all duration-500 cursor-default">
                  <div className="rounded-lg bg-white/5 p-2.5 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500">
                    <Icon className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {area.label}
                    </div>
                    <div className="text-xs text-white/30 mt-0.5">{area.description}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-20 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-white/25 leading-relaxed">
            Every area is interconnected. Progress in one accelerates progress in all.
            That is why we work across the full spectrum of innovation.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
