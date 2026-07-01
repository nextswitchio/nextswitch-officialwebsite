"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

function generateParticles() {
  const items: Array<{
    left: string
    width: string
    height: string
    opacity: number
    animation: string
  }> = []

  for (let i = 0; i < 30; i++) {
    let h = i * 137 + 42
    const rng = () => {
      h = (h * 9301 + 49297) % 233280
      return h / 233280
    }

    items.push({
      left: `${rng() * 100}%`,
      width: `${rng() * 3 + 1}px`,
      height: `${rng() * 3 + 1}px`,
      opacity: rng() * 0.5 + 0.1,
      animation: `particle-drift ${rng() * 10 + 10}s linear ${rng() * 10}s infinite`,
    })
  }

  return items
}

export default function FinalCta() {
  const [particles] = useState(generateParticles)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  return (
    <section id="cta" ref={ref} className="relative min-h-[80dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,255,240,0.05)_0%,transparent_50%)]" />

      {particles.map((style, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={style}
        />
      ))}

      <motion.div
        style={{ scale }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">That Matters.</span>
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-white/30 leading-relaxed">
            Whether you&apos;re an individual with a vision, a startup ready to scale, or an
            institution seeking transformation — we&apos;re here to build with you.
          </p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="/booking?service=strategy-session"
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-10 py-5 text-base font-medium text-white transition-all hover:bg-cyan-400/10 hover:border-cyan-400/30 glow-cyan"
            >
              Book A Strategy Session
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <p className="mt-6 text-xs text-white/15">
            Or email us directly at hello@nextswitch.org
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
