"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search, Eye, PenTool, Hammer, Rocket, TrendingUp } from "lucide-react"

const phases = [
  { label: "Discover", description: "We learn about your vision, challenges, goals, and context.", icon: Search },
  { label: "Understand", description: "We research, analyze, and develop deep insight into the problem.", icon: Eye },
  { label: "Design", description: "We craft solutions that are elegant, functional, and human centered.", icon: PenTool },
  { label: "Build", description: "We develop, iterate, and refine until the solution is ready.", icon: Hammer },
  { label: "Launch", description: "We release, measure, learn, and optimize together.", icon: Rocket },
  { label: "Scale", description: "We grow the solution's reach, impact, and sustainability.", icon: TrendingUp },
]

export default function OurApproach() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(1,255,240,0.02)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Our Approach
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            How <span className="text-gradient">We Work.</span>
          </h2>
        </motion.div>

        <div className="mt-20 relative">
          <div className="absolute left-[2.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/20 via-white/5 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {phases.map((phase, i) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={phase.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-start gap-8 group"
                >
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.06] bg-black/80 group-hover:border-cyan-400/20 group-hover:bg-white/[0.02] transition-all duration-500">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="flex-1 pt-4 pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold tracking-widest text-cyan-400/60">
                        PHASE {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white/80 group-hover:text-white transition-colors duration-500">
                      {phase.label}
                    </h3>
                    <p className="mt-2 text-base text-white/30 leading-relaxed max-w-2xl group-hover:text-white/40 transition-colors duration-500">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
