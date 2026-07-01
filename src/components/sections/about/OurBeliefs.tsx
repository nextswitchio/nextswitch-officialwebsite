"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, Sparkles, Target, Users, Building2, Globe, Sun } from "lucide-react"

const beliefs = [
  {
    text: "Technology should serve humanity.",
    icon: Heart,
  },
  {
    text: "Innovation should create value.",
    icon: Sparkles,
  },
  {
    text: "Talent should be developed intentionally.",
    icon: Target,
  },
  {
    text: "Communities should be strengthened.",
    icon: Users,
  },
  {
    text: "Institutions should outlive individuals.",
    icon: Building2,
  },
  {
    text: "Collaboration creates scale.",
    icon: Globe,
  },
  {
    text: "Africa's future can be built.",
    icon: Sun,
  },
]

export default function OurBeliefs() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(1,255,240,0.03)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Our Beliefs
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            What <span className="text-gradient">We Believe.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((belief, i) => {
            const Icon = belief.icon
            return (
              <motion.div
                key={belief.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 cursor-default"
              >
                <div className="mb-5 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <p className="text-lg font-medium text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                  {belief.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
