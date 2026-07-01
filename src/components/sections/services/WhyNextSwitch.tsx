"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, Handshake, Lightbulb, Award, Search, Globe, Layers, Building2 } from "lucide-react"

const reasons = [
  {
    title: "Human Centered Thinking",
    description: "We start with people, not technology. Every solution is designed around the humans it serves.",
    icon: Heart,
  },
  {
    title: "Long Term Partnership",
    description: "We don't build and leave. We build and stay. Our success is measured by your long-term outcomes.",
    icon: Handshake,
  },
  {
    title: "Innovation Mindset",
    description: "We challenge assumptions, explore possibilities, and find better ways to solve hard problems.",
    icon: Lightbulb,
  },
  {
    title: "Execution Excellence",
    description: "Vision without execution is just intention. We deliver with rigor, discipline, and craft.",
    icon: Award,
  },
  {
    title: "Research Driven Decisions",
    description: "Every solution is grounded in research, data, and a deep understanding of context and need.",
    icon: Search,
  },
  {
    title: "African Context Expertise",
    description: "We understand the markets, ecosystems, infrastructure, and cultural nuances of African innovation.",
    icon: Globe,
  },
  {
    title: "Technology + Talent + Ecosystem",
    description: "We combine all three — not just technology, but the talent to use it and the ecosystem to sustain it.",
    icon: Layers,
  },
  {
    title: "Institution Building Perspective",
    description: "We build solutions designed to outlive us. Organizations, not just outputs.",
    icon: Building2,
  },
]

export default function WhyNextSwitch() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Why Next Switch
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Why Organizations Choose{" "}
            <span className="text-gradient">Next Switch.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
              >
                <div className="mb-5 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-base font-semibold text-white/80 mb-2 group-hover:text-white transition-colors duration-500">
                  {reason.title}
                </h3>
                <p className="text-sm text-white/30 leading-relaxed group-hover:text-white/40 transition-colors duration-500">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
