"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

const bridgeElements = [
  { size: "h-64 w-64", x: -300, y: -100, rotate: 15, delay: 0 },
  { size: "h-48 w-96", x: 200, y: 150, rotate: -8, delay: 1 },
  { size: "h-32 w-32", x: -100, y: -250, rotate: 45, delay: 0.5 },
  { size: "h-40 w-40", x: 350, y: -50, rotate: -25, delay: 2 },
  { size: "h-24 w-56", x: -250, y: 200, rotate: 10, delay: 1.5 },
]

export default function AboutHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 80])

  return (
    <section
      ref={ref}
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/95" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(13,71,161,0.08)_0%,transparent_50%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(1,255,240,0.03)_0%,transparent_50%)]" />

      {bridgeElements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.size} rounded-2xl border border-white/[0.04] bg-white/[0.01]`}
          style={{ rotate: el.rotate }}
          initial={{ opacity: 0, x: el.x, y: el.y }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
            x: [el.x, el.x + 30, el.x],
            y: [el.y, el.y - 20, el.y],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: el.delay,
          }}
        />
      ))}

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
            <span className="text-xs text-white/40 tracking-wider uppercase">
              The Company
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]">
            <span className="text-white/90">We Exist To Build</span>
            <br />
            <span className="text-gradient">What Matters.</span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-white/40 leading-relaxed">
            Next Switch is a technology and innovation company helping people, organizations,
            and societies create meaningful solutions through technology, talent, research, and collaboration.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#vision"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/15"
            >
              Explore Our Vision
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/booking?service=partnership"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white/60 transition-all hover:border-white/20 hover:text-white/80"
            >
              Partner With Us
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
