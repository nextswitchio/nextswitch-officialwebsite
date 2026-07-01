"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Target, TrendingUp, Heart, Users, Building2, Sparkles } from "lucide-react"

const principles = [
  {
    title: "Solve Meaningful Problems",
    description: "Technology must address real needs, not create imaginary ones.",
    icon: Target,
  },
  {
    title: "Create Opportunities",
    description: "Innovation should open doors for people, not close them.",
    icon: TrendingUp,
  },
  {
    title: "Strengthen Communities",
    description: "The best solutions make communities more resilient and connected.",
    icon: Heart,
  },
  {
    title: "Empower Builders",
    description: "Give people the tools, knowledge, and support to create their own future.",
    icon: Users,
  },
  {
    title: "Improve Institutions",
    description: "Strong institutions are the foundation of lasting progress.",
    icon: Building2,
  },
  {
    title: "Advance Human Flourishing",
    description: "Technology should help people live fuller, richer, more meaningful lives.",
    icon: Sparkles,
  },
]

export default function RedemptiveInnovation() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(1,255,240,0.03)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Our Philosophy
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Technology That <span className="text-gradient">Restores.</span>
            <br />
            Technology That <span className="text-gradient">Empowers.</span>
            <br />
            Technology That <span className="text-gradient">Builds.</span>
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/30 leading-relaxed">
            We call it <span className="text-white/60 font-medium">redemptive digital innovation</span> —
            technology designed not just to disrupt, but to restore, strengthen, and build.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
              >
                <div className="mb-5 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white/80 mb-2 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-white/30 leading-relaxed group-hover:text-white/40 transition-colors duration-500">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
