"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

const orbitElements = [
  { size: "h-48 w-48", x: -250, y: -80, rotate: 0, delay: 0 },
  { size: "h-32 w-32", x: 280, y: -120, rotate: 30, delay: 0.8 },
  { size: "h-40 w-24", x: -180, y: 180, rotate: -15, delay: 1.5 },
  { size: "h-24 w-24", x: 200, y: 150, rotate: 45, delay: 2.2 },
  { size: "h-16 w-56", x: -50, y: -250, rotate: 5, delay: 0.5 },
  { size: "h-20 w-20", x: 350, y: 50, rotate: -30, delay: 1.8 },
]

function FloatingOrbit({ element, index }: { element: typeof orbitElements[0]; index: number }) {
  return (
    <motion.div
      className={`absolute ${element.size} rounded-[3rem] border border-white/[0.04] bg-white/[0.01]`}
      style={{ rotate: element.rotate }}
      initial={{ opacity: 0, x: element.x, y: element.y }}
      animate={{
        opacity: [0.1, 0.3, 0.1],
        x: [element.x, element.x + 40, element.x],
        y: [element.y, element.y - 25, element.y],
      }}
      transition={{
        duration: 10 + index * 0.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: element.delay,
      }}
    />
  )
}

export default function LabsHero() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010507] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(1,255,240,0.04)_0%,transparent_50%)]" />

      {orbitElements.map((el, i) => (
        <FloatingOrbit key={i} element={el} index={i} />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_60%,rgba(13,71,161,0.05)_0%,transparent_40%)]" />

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
              Next Switch Labs
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]">
            <span className="text-white/90">Where Ideas Become</span>
            <br />
            <span className="text-gradient">Impact.</span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-white/40 leading-relaxed">
            Next Switch Labs researches, validates, incubates, and builds innovations
            that solve meaningful problems and create new opportunities for Africa.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#join"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/15"
            >
              Submit An Idea
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#ventures"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white/60 transition-all hover:border-white/20 hover:text-white/80"
            >
              Explore Our Ventures
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
