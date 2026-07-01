"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const principles = [
  {
    title: "Service",
    description: "Leadership begins with serving others. Every decision, every product, every partnership exists to serve a greater purpose.",
  },
  {
    title: "Stewardship",
    description: "We are caretakers of resources, talent, and trust. Our job is to leave what we touch better than we found it.",
  },
  {
    title: "Responsibility",
    description: "With the ability to build comes the responsibility to build well. We take ownership of outcomes.", 
  },
  {
    title: "Innovation",
    description: "We lead through curiosity. The best ideas often come from listening to those we serve.",
  },
  {
    title: "Institution Building",
    description: "Products solve today's problems. Institutions solve tomorrow's. We build structures that outlive us.",
  },
]

export default function LeadershipPhilosophy() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Leadership Philosophy
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Building For{" "}
            <span className="text-gradient">The Long Term.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base text-white/30">
            We believe leadership is not about personality — it is about principle.
          </p>
        </motion.div>

        <div className="mt-20 space-y-6">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-white/[0.04] rounded-2xl p-8 hover:border-white/[0.08] hover:bg-white/[0.01] transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <span className="hidden sm:inline-flex text-3xl font-bold text-white/10 group-hover:text-cyan-400/30 transition-colors duration-500 tabular-nums w-12 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-white/80 group-hover:text-white transition-colors duration-500">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-base text-white/30 leading-relaxed max-w-3xl group-hover:text-white/40 transition-colors duration-500">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
