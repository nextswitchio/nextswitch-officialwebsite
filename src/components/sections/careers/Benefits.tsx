"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Globe, GraduationCap, Heart, Users, Laptop, Plane } from "lucide-react"

const benefits = [
  { icon: Laptop, title: "Remote-First", description: "Work from anywhere across Africa. We trust you to do your best work on your own terms." },
  { icon: GraduationCap, title: "Learning Budget", description: "Annual stipend for courses, conferences, books, and any learning investment you choose." },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance and wellness support for you and your family." },
  { icon: Users, title: "Equity Ownership", description: "Every full-time team member receives equity. You're not an employee — you're a builder." },
  { icon: Globe, title: "Flexible Time Off", description: "Take the time you need. We focus on outcomes, not hours logged." },
  { icon: Plane, title: "Team Retreats", description: "Twice-yearly gatherings across the continent to connect, collaborate, and celebrate." },
]

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(1,255,240,0.015)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">Benefits</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">How We <span className="text-gradient">Support You.</span></h2>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
              >
                <Icon className="h-5 w-5 text-cyan-400/60" />
                <h3 className="mt-4 text-base font-semibold text-white/80">{benefit.title}</h3>
                <p className="mt-2 text-sm text-white/40 leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
