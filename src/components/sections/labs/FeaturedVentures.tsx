"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"

const ventures = [
  {
    id: "guestly",
    name: "GUESTLY",
    tagline: "Discover. Experience. Belong.",
    description:
      "The event discovery, booking, ticketing, and experience platform helping people connect with meaningful events and experiences across Africa.",
    status: "Active",
    href: "#",
    color: "from-cyan-400/20",
  },
  {
    id: "coming-soon",
    name: "Next Venture",
    tagline: "Coming Soon",
    description:
      "A new venture currently in stealth. Solving a critical challenge in the African market.",
    status: "In Development",
    href: "#",
    color: "from-blue-500/20",
    placeholder: true,
  },
  {
    id: "future-venture",
    name: "Future Venture",
    tagline: "On The Horizon",
    description:
      "Space reserved for the next transformative venture emerging from the Lab.",
    status: "Exploring",
    href: "#",
    color: "from-cyan-400/20",
    placeholder: true,
  },
]

export default function FeaturedVentures() {
  const [activeVenture, setActiveVenture] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="ventures" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(1,255,240,0.03)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Our Ventures
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Ideas Becoming{" "}
            <span className="text-gradient">Reality.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {ventures.map((venture, i) => {
            const isActive = activeVenture === venture.id

            return (
              <motion.div
                key={venture.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setActiveVenture(venture.id)}
                onMouseLeave={() => setActiveVenture(null)}
                onClick={() => venture.href !== "#" && window.open(venture.href, "_blank")}
                className={`group relative rounded-2xl border transition-all duration-700 cursor-pointer overflow-hidden ${
                  isActive
                    ? "border-white/20 bg-white/[0.04]"
                    : "border-white/[0.06] bg-white/[0.02]"
                }`}
              >
                {!venture.placeholder && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${venture.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                )}

                <div className="relative p-8 lg:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-semibold tracking-widest uppercase ${
                      isActive ? "text-cyan-400" : "text-white/20"
                    } transition-colors duration-500`}>
                      {venture.status}
                    </span>
                    {!venture.placeholder && (
                      <div className="rounded-full border border-white/10 p-2 group-hover:border-cyan-400/30 transition-all duration-500">
                        <ExternalLink className={`h-3.5 w-3.5 ${
                          isActive ? "text-cyan-400" : "text-white/30"
                        } transition-colors duration-500`} />
                      </div>
                    )}
                  </div>

                  <h3 className={`text-2xl font-bold tracking-tight mb-3 transition-colors duration-500 ${
                    venture.placeholder ? "text-white/20" : isActive ? "text-white" : "text-white/70"
                  }`}>
                    {venture.name}
                  </h3>

                  <p className={`text-sm font-medium mb-4 transition-colors duration-500 ${
                    isActive ? "text-cyan-400/80" : "text-white/40"
                  }`}>
                    {venture.tagline}
                  </p>

                  <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                    isActive ? "text-white/50" : "text-white/30"
                  }`}>
                    {venture.description}
                  </p>

                  {!venture.placeholder && (
                    <div className={`mt-8 flex items-center gap-1 text-xs font-medium transition-colors duration-500 ${
                      isActive ? "text-cyan-400" : "text-white/20"
                    }`}>
                      Learn More
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
