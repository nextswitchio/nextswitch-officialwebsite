"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Building2, GraduationCap, FlaskConical, Users } from "lucide-react"

const entities = [
  {
    title: "Next Switch Ltd",
    subtitle: "The Company",
    description: "Driving redemptive digital innovation through technology, talent, and institution building.",
    icon: Building2,
  },
  {
    title: "Next Switch Academy",
    subtitle: "Talent Development",
    description: "Developing Africa's next generation of technology leaders and innovators.",
    icon: GraduationCap,
  },
  {
    title: "Next Switch Labs",
    subtitle: "Research & Innovation",
    description: "Exploring emerging technologies and building prototypes for Africa's future.",
    icon: FlaskConical,
  },
  {
    title: "Next Switch CoWork",
    subtitle: "Collaborative Spaces",
    description: "Where innovators, founders, and creators connect and build together.",
    icon: Users,
  },
]

export default function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

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
            Our Ecosystem
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            One Mission.{" "}
            <span className="text-gradient">Multiple Platforms.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] lg:grid-cols-4">
          {entities.map((entity, i) => {
            const Icon = entity.icon
            if (entity.title === "Next Switch Academy") {
              return (
                <a
                  key={entity.title}
                  href="http://www.nextswitchacademy.com"
                  className="relative bg-black/50 p-8 group hover:bg-white/[0.02] transition-all duration-500"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <span className="text-xs font-semibold tracking-widest text-cyan-400/60 uppercase mb-1 block">
                    {entity.subtitle}
                  </span>
                  <h3 className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors duration-500">
                    {entity.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/30 leading-relaxed group-hover:text-white/40 transition-colors duration-500">
                    {entity.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-xs font-medium text-white/20 group-hover:text-cyan-400/60 transition-colors">
                    Learn More
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              )
            }
            return (
              <motion.div
                key={entity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-black/50 p-8 group hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="mb-5 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-cyan-400/60 uppercase mb-1 block">
                  {entity.subtitle}
                </span>
                <h3 className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors duration-500">
                  {entity.title}
                </h3>
                <p className="mt-3 text-sm text-white/30 leading-relaxed group-hover:text-white/40 transition-colors duration-500">
                  {entity.description}
                </p>
                <div className="mt-6 flex items-center gap-1 text-xs font-medium text-white/20 group-hover:text-cyan-400/60 transition-colors">
                  Learn More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
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
            Every entity in the Next Switch ecosystem works in concert toward one mission:{" "}
            <span className="text-white/50">building Africa&apos;s future through redemptive digital innovation.</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
