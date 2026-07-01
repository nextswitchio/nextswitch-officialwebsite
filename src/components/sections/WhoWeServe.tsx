"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowRight, User, Rocket, Building2, Heart, GraduationCap, HandHeart, Users, Landmark } from "lucide-react"

const audiences = [
  {
    label: "Individuals",
    icon: User,
    pathway: "Launch your career in technology. Access world-class training, mentorship, and opportunities to build real solutions.",
  },
  {
    label: "Startups",
    icon: Rocket,
    pathway: "From idea to scale. We help startups design, build, and launch technology products that solve real problems.",
  },
  {
    label: "Businesses",
    icon: Building2,
    pathway: "Transform your operations with custom enterprise systems, digital platforms, and technology strategy.",
  },
  {
    label: "Organizations",
    icon: Heart,
    pathway: "Build technology that amplifies your mission. We help organizations reach more people with greater impact.",
  },
  {
    label: "Educational Institutions",
    icon: GraduationCap,
    pathway: "Prepare students for the digital economy. Curriculum design, labs, and institutional technology systems.",
  },
  {
    label: "NGOs",
    icon: HandHeart,
    pathway: "Technology for social impact. We build systems that help NGOs track, measure, and scale their work.",
  },
  {
    label: "Communities",
    icon: Users,
    pathway: "Connected communities drive change. We build platforms that unite people around shared purpose.",
  },
  {
    label: "Governments",
    icon: Landmark,
    pathway: "Digital infrastructure for public good. We help governments modernize services for citizens.",
  },
]

export default function WhoWeServe() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Who We Serve
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Everyone Building{" "}
            <span className="text-gradient">Africa&apos;s Future.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-2">
              {audiences.map((item, i) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveIndex(i)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all duration-300 ${
                      i === activeIndex
                        ? "bg-white/5 text-white ring-1 ring-white/10"
                        : "text-white/30 hover:text-white/60 hover:bg-white/[0.02]"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative min-h-[300px] rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mb-6 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/[0.06]">
                    {(() => {
                      const Icon = audiences[activeIndex].icon
                      return <Icon className="h-6 w-6 text-cyan-400" />
                    })()}
                  </div>
                  <h3 className="text-2xl font-semibold text-white/90 mb-4">
                    {audiences[activeIndex].label}
                  </h3>
                  <p className="text-base text-white/40 leading-relaxed max-w-xl">
                    {audiences[activeIndex].pathway}
                  </p>
                  <a
                    href="/booking"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Start Your Innovation Journey
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
