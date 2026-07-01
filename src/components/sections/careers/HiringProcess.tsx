"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Send, Search, MessageSquare, ClipboardCheck, Handshake } from "lucide-react"

const steps = [
  { icon: Send, label: "Apply", description: "Submit your application with your resume and a brief note on why you want to join." },
  { icon: Search, label: "Portfolio Review", description: "We review your work, experience, and alignment with our mission and values." },
  { icon: MessageSquare, label: "Initial Chat", description: "A 30-minute conversation to get to know each other and discuss your interests." },
  { icon: ClipboardCheck, label: "Skill Assessment", description: "A practical exercise relevant to your role — no whiteboard puzzles, just real work." },
  { icon: Handshake, label: "Offer & Onboarding", description: "If there's a mutual fit, we'll make an offer and get you set up to hit the ground running." },
]

export default function HiringProcess() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">Hiring Process</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">How It <span className="text-gradient">Works.</span></h2>
          <p className="mt-4 text-base text-white/30 max-w-xl mx-auto">
            We&apos;ve designed a process that respects your time and focuses on what matters.
          </p>
        </motion.div>

        <div className="mt-16 space-y-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group flex items-center gap-5 bg-black/50 px-6 py-6 transition-all duration-300 hover:bg-white/[0.02]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all">
                  <Icon className="h-4 w-4 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-white/20">0{i + 1}</span>
                    <h3 className="text-sm font-semibold text-white/80">{step.label}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/40 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
