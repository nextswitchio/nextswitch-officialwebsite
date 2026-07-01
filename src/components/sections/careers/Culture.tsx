"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, Shield, Sparkles, Handshake, Zap, Hash } from "lucide-react"

const values = [
  { icon: Heart, label: "Redemptive Purpose" },
  { icon: Shield, label: "Integrity First" },
  { icon: Sparkles, label: "Excellence Always" },
  { icon: Handshake, label: "Collaborative Spirit" },
  { icon: Zap, label: "Bias For Action" },
  { icon: Hash, label: "African Identity" },
]

export default function Culture() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="culture" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-16 lg:grid-cols-2 items-center"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Our Culture</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">How We <span className="text-gradient">Work.</span></h2>
            <p className="mt-6 text-base text-white/30 leading-relaxed">
              We&apos;re a distributed team across Africa united by a shared mission. We move fast, 
              trust deeply, and hold ourselves to the highest standards — not because someone is watching, 
              but because the people we serve deserve nothing less.
            </p>
            <p className="mt-4 text-base text-white/30 leading-relaxed">
              Remote-first, collaboration-heavy. We believe the best ideas emerge when diverse 
              perspectives come together with psychological safety and a shared sense of purpose.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center hover:bg-white/[0.04] hover:border-cyan-400/10 transition-all duration-500"
                >
                  <Icon className="mx-auto h-5 w-5 text-cyan-400" />
                  <span className="mt-2 block text-[11px] font-medium text-white/60 leading-tight">{v.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
