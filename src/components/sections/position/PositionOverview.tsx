"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check } from "lucide-react"
import type { Position } from "@/data/positions"

export default function PositionOverview({ position }: { position: Position }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">About The Role</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What You&apos;ll <span className="text-gradient">Do.</span></h2>
          <p className="mt-6 text-base text-white/40 leading-relaxed max-w-3xl">{position.about}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">Key Responsibilities</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {position.responsibilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 mt-0.5">
                  <Check className="h-3 w-3 text-cyan-400" />
                </span>
                <span className="text-sm text-white/50 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
