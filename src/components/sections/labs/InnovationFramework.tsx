"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Eye, Search, CheckCircle, Hammer, Rocket, TrendingUp } from "lucide-react"

const stages = [
  { label: "Observe", description: "Watch, listen, and learn. Understand the problem before solving it.", icon: Eye },
  { label: "Research", description: "Gather data, insights, and evidence. Build knowledge foundations.", icon: Search },
  { label: "Validate", description: "Test assumptions. Prove viability. Confirm that the solution matters.", icon: CheckCircle },
  { label: "Build", description: "Design and develop. Transform validated concepts into working solutions.", icon: Hammer },
  { label: "Launch", description: "Release into the world. Measure response. Learn and iterate.", icon: Rocket },
  { label: "Scale", description: "Grow reach and impact. Build infrastructure for long-term success.", icon: TrendingUp },
]

export default function InnovationFramework() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(1,255,240,0.02)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Our Framework
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            From Insight{" "}
            <span className="text-gradient">To Institution.</span>
          </h2>
        </motion.div>

        <div className="mt-20 relative">
          <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/20 via-white/5 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {stages.map((stage, i) => {
              const Icon = stage.icon
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative flex items-start gap-8 group"
                >
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-white/[0.06] bg-black/80 group-hover:border-cyan-400/20 group-hover:bg-white/[0.02] transition-all duration-500">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>
                  </div>
                  <div className="flex-1 pt-3 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold tracking-widest text-cyan-400/60">
                        STAGE {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="sm:hidden rounded-lg bg-white/5 p-2 ring-1 ring-white/[0.06]">
                        <Icon className="h-4 w-4 text-cyan-400" />
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white/80 group-hover:text-white transition-colors duration-500">
                      {stage.label}
                    </h3>
                    <p className="mt-2 text-base text-white/30 leading-relaxed max-w-2xl group-hover:text-white/40 transition-colors duration-500">
                      {stage.description}
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
