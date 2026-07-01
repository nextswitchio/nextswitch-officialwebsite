"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, User, Rocket, Building2, Heart, Users, Briefcase } from "lucide-react"

const groups = [
  { label: "Entrepreneurs", icon: User },
  { label: "Innovators", icon: Rocket },
  { label: "Researchers", icon: Building2 },
  { label: "Students", icon: Heart },
  { label: "Creators", icon: Users },
  { label: "Professionals", icon: Briefcase },
]

export default function ForFounders() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

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
            For Builders
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient">Builders Wanted.</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/30 leading-relaxed">
            If you have an idea that could change how Africa works, learns, connects, or grows —
            the Lab is your home. We provide the research, validation, technology, and network
            to turn your vision into a venture.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {groups.map((group, i) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group"
              >
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-4 flex items-center gap-3 hover:bg-white/[0.04] hover:border-cyan-400/10 hover:-translate-y-1 transition-all duration-500 cursor-default">
                  <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500">
                    <Icon className="h-4 w-4 text-cyan-400" />
                  </div>
                  <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">
                    {group.label}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#join"
            className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/15"
          >
            Apply To The Lab
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
