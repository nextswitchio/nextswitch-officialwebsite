"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check, Star } from "lucide-react"
import type { Position } from "@/data/positions"

export default function PositionRequirements({ position }: { position: Position }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(1,255,240,0.015)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-12 lg:grid-cols-2"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Requirements</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What We&apos;re <span className="text-gradient">Looking For.</span></h2>
            <ul className="mt-8 space-y-3">
              {position.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 mt-0.5">
                    <Check className="h-3 w-3 text-cyan-400" />
                  </span>
                  <span className="text-sm text-white/50 leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Nice to Have</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Bonus <span className="text-gradient">Points.</span></h2>
            <ul className="mt-8 space-y-3">
              {position.niceToHave.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 mt-0.5">
                    <Star className="h-3 w-3 text-white/30" />
                  </span>
                  <span className="text-sm text-white/40 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
