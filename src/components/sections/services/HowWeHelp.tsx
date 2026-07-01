"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Lightbulb, Target, TrendingUp, Rocket, RefreshCw } from "lucide-react"

const stages = [
  { label: "Ideas", description: "You have a vision for something new.", icon: Lightbulb },
  { label: "Challenges", description: "You face complex problems that need solving.", icon: Target },
  { label: "Opportunities", description: "You see potential waiting to be unlocked.", icon: TrendingUp },
  { label: "Ambitions", description: "You want to grow, scale, or transform.", icon: Rocket },
  { label: "Transformation Goals", description: "You are ready to build for the long term.", icon: RefreshCw },
]

export default function HowWeHelp() {
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
            How We Help
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Every Great Outcome Starts With{" "}
            <br />
            <span className="text-gradient">The Right Partner.</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/30 leading-relaxed">
            Clients come to us with ideas, challenges, opportunities, ambitions, and transformation
            goals. We help turn them into measurable outcomes that last.
          </p>
        </motion.div>

        <div className="mt-20 max-w-5xl mx-auto">
          {stages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-6 border-t border-white/[0.04] py-8 last:border-b"
              >
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500 shrink-0">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white/80 group-hover:text-white transition-colors duration-500">
                    {stage.label}
                  </h3>
                  <p className="mt-1 text-base text-white/30 group-hover:text-white/40 transition-colors duration-500">
                    {stage.description}
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
