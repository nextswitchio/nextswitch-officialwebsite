"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  User, Rocket, Building2, Heart, GraduationCap,
  HandHeart, Users, Landmark, Cross,
} from "lucide-react"

const audiences = [
  { label: "Individuals", icon: User },
  { label: "Startups", icon: Rocket },
  { label: "Businesses", icon: Building2 },
  { label: "Organizations", icon: Heart },
  { label: "Communities", icon: Users },
  { label: "Educational Institutions", icon: GraduationCap },
  { label: "Governments", icon: Landmark },
  { label: "NGOs", icon: HandHeart },
  { label: "Faith Based Organizations", icon: Cross },
]

export default function WhoWeWorkWith() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="partners" ref={ref} className="relative py-32 overflow-hidden">
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
            Who We Work With
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient">Builders Welcome.</span>
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {audiences.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-4 flex items-center gap-3 hover:bg-white/[0.04] hover:border-cyan-400/10 transition-all duration-500 cursor-default">
                  <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500">
                    <Icon className="h-4 w-4 text-cyan-400" />
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
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-base text-white/25 leading-relaxed">
            Whether you are an individual with a vision, a startup ready to scale, a government
            seeking transformation, or a faith community serving your people —{" "}
            <span className="text-white/50">if you are building, you belong here.</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
