"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  BookOpen, Wallet, Landmark, Cpu, Globe,
  Heart, GraduationCap, Palette, Leaf,
  HardDrive, Briefcase, Smartphone,
} from "lucide-react"

const themes = [
  { label: "Education", icon: BookOpen },
  { label: "Financial Inclusion", icon: Wallet },
  { label: "Government Technology", icon: Landmark },
  { label: "Artificial Intelligence", icon: Cpu },
  { label: "Community Platforms", icon: Globe },
  { label: "Health Innovation", icon: Heart },
  { label: "Talent Development", icon: GraduationCap },
  { label: "Creative Economy", icon: Palette },
  { label: "Climate Innovation", icon: Leaf },
  { label: "Digital Infrastructure", icon: HardDrive },
  { label: "Future of Work", icon: Briefcase },
  { label: "Smart Communities", icon: Smartphone },
]

export default function InnovationThemes() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(13,71,161,0.04)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Innovation Themes
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            The Future Areas{" "}
            <span className="text-gradient">We Explore.</span>
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
          {themes.map((theme, i) => {
            const Icon = theme.icon
            return (
              <motion.div
                key={theme.label}
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
                    {theme.label}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
