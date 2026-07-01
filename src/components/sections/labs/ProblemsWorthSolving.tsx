"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { User, Building2, Heart, Users as UsersIcon, TrendingUp } from "lucide-react"

const challenges = [
  {
    label: "Human Challenges",
    description: "Problems that affect how people live, work, learn, and connect.",
    icon: User,
  },
  {
    label: "Business Challenges",
    description: "Barriers that prevent organizations from growing and serving effectively.",
    icon: Building2,
  },
  {
    label: "Institutional Challenges",
    description: "Systemic gaps in education, healthcare, governance, and public services.",
    icon: Heart,
  },
  {
    label: "Community Challenges",
    description: "Collective needs that require shared solutions and collaborative action.",
    icon: UsersIcon,
  },
  {
    label: "Economic Opportunities",
    description: "Emerging sectors where innovation can unlock new value and jobs.",
    icon: TrendingUp,
  },
]

export default function ProblemsWorthSolving() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4])

  return (
    <section ref={ref} className="relative py-32 sm:py-44 overflow-hidden">
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
            Why We Innovate
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Innovation Begins With{" "}
            <span className="text-gradient">Understanding.</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/30 leading-relaxed">
            Before we build, we listen. Before we invest, we understand. The Lab identifies
            challenges that matter — not through assumptions, but through rigorous research
            and deep engagement with the people and communities we serve.
          </p>
        </motion.div>

        <div className="mt-20 space-y-4 max-w-4xl mx-auto">
          {challenges.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] p-6 hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500 shrink-0">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors duration-500">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-white/30 leading-relaxed group-hover:text-white/40 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
