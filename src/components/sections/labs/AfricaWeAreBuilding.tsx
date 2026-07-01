"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const pillars = [
  { label: "Opportunity Creation", description: "Building pathways for economic participation" },
  { label: "Economic Development", description: "Driving growth through technology ventures" },
  { label: "Innovation Ecosystems", description: "Creating environments where ideas thrive" },
  { label: "Job Creation", description: "Developing industries that employ millions" },
  { label: "Entrepreneurship", description: "Supporting founders who build the future" },
  { label: "Human Flourishing", description: "Technology that serves people" },
]

function generateDots() {
  const items: Array<{ top: string; left: string; size: string; opacity: number; delay: string }> = []
  for (let i = 0; i < 35; i++) {
    let h = i * 59 + 31
    const rng = () => {
      h = (h * 9301 + 49297) % 233280
      return h / 233280
    }
    items.push({
      top: `${rng() * 100}%`,
      left: `${rng() * 100}%`,
      size: `${rng() * 2 + 0.5}px`,
      opacity: rng() * 0.3 + 0.05,
      delay: `${rng() * 8}s`,
    })
  }
  return items
}

export default function AfricaWeAreBuilding() {
  const [dots] = useState(generateDots)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  return (
    <section ref={ref} className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(1,255,240,0.03)_0%,transparent_50%)]" />

      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
              animation: `pulse-glow ${3 + (i % 5)}s ease-in-out ${dot.delay} infinite`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            The Africa We Are Building For
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            A Future Worth{" "}
            <span className="text-gradient">Creating.</span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/30 leading-relaxed">
            We are not building technology for technology&apos;s sake. We are building for a future
            where every African has the opportunity to learn, build, create, and thrive.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-left"
              >
                <div className="h-px w-8 bg-cyan-400/30 mb-4" />
                <h3 className="text-sm font-semibold text-white/70">{pillar.label}</h3>
                <p className="mt-1 text-sm text-white/30">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
