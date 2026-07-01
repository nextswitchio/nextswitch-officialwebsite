"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const structures = [
  { size: "h-48 w-48", x: -240, y: -100, rotate: 25, delay: 0 },
  { size: "h-32 w-56", x: 220, y: -60, rotate: -15, delay: 1 },
  { size: "h-28 w-28", x: -100, y: 180, rotate: 40, delay: 0.8 },
  { size: "h-40 w-40", x: 180, y: 140, rotate: -22, delay: 1.8 },
  { size: "h-20 w-52", x: -280, y: 40, rotate: 10, delay: 1.2 },
]

export default function ContactHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 80])

  return (
    <section ref={ref} className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(13,71,161,0.07)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(1,255,240,0.03)_0%,transparent_40%)]" />

      {structures.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.size} rounded-[2rem] border border-white/[0.04] bg-white/[0.01]`}
          style={{ rotate: el.rotate }}
          initial={{ opacity: 0, x: el.x, y: el.y }}
          animate={{ opacity: [0.08, 0.25, 0.08], x: [el.x, el.x + 30, el.x], y: [el.y, el.y - 15, el.y] }}
          transition={{ duration: 9 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: el.delay }}
        />
      ))}

      <motion.div style={{ opacity, scale, y }} className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
            <span className="text-xs text-white/40 tracking-wider uppercase">Connect</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]">
            <span className="text-white/90">Let&apos;s Start A</span>
            <br />
            <span className="text-gradient">Conversation.</span>
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-white/40 leading-relaxed">
            Whether you have a question, a project idea, or want to explore partnership opportunities — we&apos;d love to hear from you.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
