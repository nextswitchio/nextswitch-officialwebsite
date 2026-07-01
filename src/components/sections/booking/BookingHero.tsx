"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const particles = Array.from({ length: 20 }, (_, i) => {
  let h = i * 61 + 17
  const rng = () => { h = (h * 9301 + 49297) % 233280; return h / 233280 }
  return {
    top: `${rng() * 100}%`,
    left: `${rng() * 100}%`,
    width: `${rng() * 2 + 1}px`,
    height: `${rng() * 2 + 1}px`,
    opacity: rng() * 0.2 + 0.05,
    delay: `${rng() * 10}s`,
  }
})

const flowLines = [
  { w: "h-32 w-px", x: -200, y: -100, rotate: -15, delay: 0 },
  { w: "h-24 w-px", x: 180, y: -150, rotate: 10, delay: 1 },
  { w: "h-40 w-px", x: -150, y: 120, rotate: 20, delay: 0.5 },
  { w: "h-20 w-px", x: 220, y: 140, rotate: -25, delay: 1.5 },
]

export default function BookingHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 80])

  return (
    <section ref={ref} className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010507] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(13,71,161,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(1,255,240,0.02)_0%,transparent_40%)]" />

      {flowLines.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.w} bg-gradient-to-b from-transparent via-white/5 to-transparent`}
          style={{ rotate: el.rotate }}
          initial={{ opacity: 0, x: el.x, y: el.y }}
          animate={{ opacity: [0.1, 0.3, 0.1], x: [el.x, el.x + 30, el.x], y: [el.y, el.y - 20, el.y] }}
          transition={{ duration: 8 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: el.delay }}
        />
      ))}

      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            top: p.top, left: p.left, width: p.width, height: p.height,
            opacity: p.opacity, animation: `pulse-glow ${3 + (i % 4)}s ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      <motion.div style={{ opacity, scale, y }} className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
            <span className="text-xs text-white/40 tracking-wider uppercase">Schedule</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]">
            <span className="text-white/90">Book Your</span>
            <br />
            <span className="text-gradient">Session.</span>
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-white/40 leading-relaxed">
            Tell us what you&apos;re looking for and we&apos;ll set up a time to explore how we can help you build, scale, or transform.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
