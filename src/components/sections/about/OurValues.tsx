"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Shield, Award, Lightbulb, Leaf, Handshake, Clock, Target, Lock } from "lucide-react"

const values = [
  {
    title: "Integrity",
    description: "We do what we say. We build trust through transparency, honesty, and consistency in every relationship.",
    icon: Shield,
  },
  {
    title: "Excellence",
    description: "We pursue the highest standards in everything we build, teach, and create. Africa deserves world-class.",
    icon: Award,
  },
  {
    title: "Innovation",
    description: "We explore what's possible. We embrace new ideas, new approaches, and new ways of solving old problems.",
    icon: Lightbulb,
  },
  {
    title: "Stewardship",
    description: "We manage resources, relationships, and opportunities with care. We build for the long term.",
    icon: Leaf,
  },
  {
    title: "Collaboration",
    description: "We know the best outcomes emerge when diverse minds work together toward shared goals.",
    icon: Handshake,
  },
  {
    title: "Long Term Thinking",
    description: "We invest in what lasts. Products may evolve, but institutions built on principle endure.",
    icon: Clock,
  },
  {
    title: "Impact",
    description: "We measure success by the lives changed, communities strengthened, and opportunities created.",
    icon: Target,
  },
  {
    title: "Trust",
    description: "Trust is our currency. We earn it daily through reliability, competence, and genuine care.",
    icon: Lock,
  },
]

export default function OurValues() {
  const [expanded, setExpanded] = useState<number | null>(null)
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
            Our Values
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            The Principles{" "}
            <br />
            <span className="text-gradient">Behind Every Decision.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = value.icon
            const isExpanded = expanded === i

            return (
              <motion.button
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setExpanded(isExpanded ? null : i)}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-left transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 cursor-pointer"
              >
                <div className="mb-5 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors duration-500">
                  {value.title}
                </h3>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm text-white/40 leading-relaxed">
                        {value.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-3 flex items-center gap-1 text-xs text-white/20 group-hover:text-cyan-400/50 transition-colors">
                  {isExpanded ? "Tap to close" : "Tap to expand"}
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
