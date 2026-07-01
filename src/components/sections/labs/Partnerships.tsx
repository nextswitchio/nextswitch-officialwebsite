"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, GraduationCap, Landmark, Building2, Heart, Users, Banknote, Cross, Globe } from "lucide-react"

const partners = [
  { label: "Universities", icon: GraduationCap },
  { label: "Governments", icon: Landmark },
  { label: "Corporations", icon: Building2 },
  { label: "Development Organizations", icon: Heart },
  { label: "Communities", icon: Users },
  { label: "Investors", icon: Banknote },
  { label: "Foundations", icon: Cross },
  { label: "Technology Partners", icon: Globe },
]

export default function Partnerships() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(13,71,161,0.04)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Partnerships
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Innovation Happens{" "}
            <span className="text-gradient">Together.</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-base text-white/30 leading-relaxed">
            The Lab collaborates with organizations that share our conviction that Africa&apos;s
            most important innovations will emerge from intentional partnerships.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {partners.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group"
              >
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-3.5 flex items-center gap-3 hover:bg-white/[0.04] hover:border-cyan-400/10 hover:-translate-y-1 transition-all duration-500 cursor-default">
                  <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500">
                    <Icon className="h-3.5 w-3.5 text-cyan-400" />
                  </div>
                  <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="/booking?service=partnership"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:border-white/20 hover:text-white/90"
          >
            Become A Partner
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
