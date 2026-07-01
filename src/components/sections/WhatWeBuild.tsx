"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  AppWindow,
  Building2,
  Smartphone,
  Lightbulb,
  Users,
  Sprout,
  Globe,
  Cpu,
  Landmark,
} from "lucide-react"

const offerings = [
  {
    title: "Digital Products",
    description: "World-class software products designed for African and global markets.",
    icon: AppWindow,
  },
  {
    title: "Enterprise Systems",
    description: "Robust, scalable systems that power organizations across the continent.",
    icon: Building2,
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile experiences that reach users where they are.",
    icon: Smartphone,
  },
  {
    title: "Innovation Programs",
    description: "Structured programs that turn ideas into impactful, investable ventures.",
    icon: Lightbulb,
  },
  {
    title: "Talent Development",
    description: "Comprehensive training that builds Africa's next generation of tech leaders.",
    icon: Users,
  },
  {
    title: "Startup Ecosystems",
    description: "Infrastructure and support that helps early-stage startups launch and scale.",
    icon: Sprout,
  },
  {
    title: "Community Platforms",
    description: "Digital spaces that connect people, ideas, and resources across boundaries.",
    icon: Globe,
  },
  {
    title: "AI Solutions",
    description: "Intelligent systems that solve African problems with African context.",
    icon: Cpu,
  },
  {
    title: "Institutional Technology",
    description: "Technology infrastructure for governments, NGOs, and educational institutions.",
    icon: Landmark,
  },
]

export default function WhatWeBuild() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section id="what-we-build" ref={ref} className="relative py-32 overflow-hidden">
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
            What We Build
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Technology That{" "}
            <span className="text-gradient">Moves Africa Forward.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                className="group relative bg-black/50 p-8 cursor-default transition-colors duration-500"
              >
                <div className="mb-4 inline-flex rounded-lg bg-white/5 p-2.5 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500">
                  <Icon className="h-4 w-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-500" />
                </div>
                <h3 className="text-base font-semibold text-white/80 mb-2 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-white/30 leading-relaxed group-hover:text-white/40 transition-colors duration-500">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
