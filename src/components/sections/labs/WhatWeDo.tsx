"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Search, Rocket, Building2, Lightbulb, Cpu,
  Globe, RefreshCw, Target, Layers, Compass,
} from "lucide-react"

const offerings = [
  { title: "Research & Insights", description: "Deep research that uncovers opportunities and informs strategy.", icon: Search },
  { title: "Startup Incubation", description: "Structured programs that turn ideas into investable ventures.", icon: Rocket },
  { title: "Venture Building", description: "Co-building new ventures from concept to market launch.", icon: Building2 },
  { title: "Product Innovation", description: "Designing and developing products that solve real problems.", icon: Lightbulb },
  { title: "Artificial Intelligence", description: "Building intelligent systems tailored to African contexts.", icon: Cpu },
  { title: "Emerging Technology", description: "Exploring blockchain, IoT, Web3, and frontier technologies.", icon: Globe },
  { title: "Digital Transformation", description: "Helping organizations modernize through technology.", icon: RefreshCw },
  { title: "Market Validation", description: "Testing ideas against real market conditions before building.", icon: Target },
  { title: "Prototyping", description: "Rapid prototyping to visualize, test, and refine concepts.", icon: Layers },
  { title: "Innovation Consulting", description: "Strategic guidance for organizations navigating innovation.", icon: Compass },
]

export default function WhatWeDo() {
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
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            The Full Spectrum{" "}
            <br />
            <span className="text-gradient">Of Innovation.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {offerings.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                className="group relative bg-black/50 p-6 transition-all duration-500 cursor-default"
              >
                <div className="mb-4 inline-flex rounded-lg bg-white/5 p-2.5 ring-1 ring-white/[0.06] group-hover:ring-cyan-400/20 transition-all duration-500">
                  <Icon className="h-4 w-4 text-cyan-400" />
                </div>
                <h3 className="text-sm font-semibold text-white/80 mb-1.5 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-xs text-white/30 leading-relaxed group-hover:text-white/40 transition-colors duration-500">
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
