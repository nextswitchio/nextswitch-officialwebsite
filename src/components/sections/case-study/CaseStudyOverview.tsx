"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function CaseStudyOverview({ study }: { study: { challenge: string; challengeDetail: string; strategy: string; strategyDetail: string; outcome: string; outcomeDetail: string } }) {
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
          className="grid gap-16 md:grid-cols-2"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-3">01 / Challenge</span>
            <h3 className="text-2xl font-bold text-white/90 mb-4">{study.challenge}</h3>
            <p className="text-sm text-white/40 leading-relaxed">{study.challengeDetail}</p>
          </div>
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-3">02 / Strategy</span>
            <h3 className="text-2xl font-bold text-white/90 mb-4">{study.strategy}</h3>
            <p className="text-sm text-white/40 leading-relaxed">{study.strategyDetail}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-3">03 / Outcome</span>
          <p className="text-xl sm:text-2xl font-semibold text-cyan-400/90">{study.outcome}</p>
          <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-3xl mx-auto">{study.outcomeDetail}</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
