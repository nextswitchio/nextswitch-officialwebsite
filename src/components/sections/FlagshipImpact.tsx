"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, Code, Globe, Building2, Lightbulb } from "lucide-react"
import AnimatedCounter from "@/components/ui/AnimatedCounter"

const metrics = [
  {
    value: 5000,
    suffix: "+",
    label: "Students Trained",
    icon: BookOpen,
  },
  {
    value: 150,
    suffix: "+",
    label: "Products Built",
    icon: Code,
  },
  {
    value: 1000000,
    suffix: "+",
    label: "Communities Reached",
    icon: Globe,
    format: (n: number) => {
      if (n >= 1000000) return (n / 1000000).toFixed(0) + "M"
      if (n >= 1000) return (n / 1000).toFixed(0) + "K"
      return n.toString()
    },
  },
  {
    value: 200,
    suffix: "+",
    label: "Businesses Supported",
    icon: Building2,
  },
  {
    value: 50,
    suffix: "+",
    label: "Innovation Programs Delivered",
    icon: Lightbulb,
  },
]

export default function FlagshipImpact() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,71,161,0.05)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Our Impact
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient">Flagship Impact</span> In Numbers.
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-black/50 p-8 text-center group hover:bg-white/[0.02] transition-colors duration-500"
              >
                <div className="mb-4 inline-flex rounded-lg bg-white/5 p-2.5 ring-1 ring-white/[0.06]">
                  <Icon className="h-4 w-4 text-cyan-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {metric.format ? (
                    <AnimatedCounter
                      from={0}
                      to={metric.value}
                      duration={2}
                      delay={i * 0.1}
                      format={metric.format}
                    />
                  ) : (
                    <AnimatedCounter
                      from={0}
                      to={metric.value}
                      duration={2}
                      delay={i * 0.1}
                    />
                  )}
                  <span className="text-gradient">{metric.suffix}</span>
                </div>
                <div className="text-sm text-white/40">{metric.label}</div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
