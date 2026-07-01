"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

const floatingElements = [
  {
    label: "People",
    size: "h-16 w-16",
    initial: { x: -200, y: -100 },
    floatDelay: 0,
  },
  {
    label: "Ideas",
    size: "h-12 w-12",
    initial: { x: 250, y: -50 },
    floatDelay: 1,
  },
  {
    label: "Technology",
    size: "h-20 w-20",
    initial: { x: -150, y: 150 },
    floatDelay: 2,
  },
  {
    label: "Institutions",
    size: "h-14 w-14",
    initial: { x: 200, y: 100 },
    floatDelay: 0.5,
  },
  {
    label: "Knowledge",
    size: "h-10 w-10",
    initial: { x: -50, y: -200 },
    floatDelay: 1.5,
  },
  {
    label: "Opportunity",
    size: "h-18 w-18",
    initial: { x: 100, y: 200 },
    floatDelay: 3,
  },
]

function FloatingShape({ element, index }: { element: typeof floatingElements[0]; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener("mousemove", handleMouse, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  return (
    <motion.div
      className={`absolute ${element.size} rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center group cursor-default`}
      initial={{ opacity: 0, x: element.initial.x, y: element.initial.y }}
      animate={{
        opacity: [0.4, 0.8, 0.4],
        x: [element.initial.x, element.initial.x + 20, element.initial.x],
        y: [element.initial.y, element.initial.y - 15, element.initial.y],
      }}
      transition={{
        duration: 6 + index * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: element.floatDelay,
      }}
      style={{
        x: element.initial.x + mousePos.x * 30,
        y: element.initial.y + mousePos.y * 30,
      }}
    >
      <span className="text-[8px] font-medium text-white/30 tracking-wider uppercase">
        {element.label}
      </span>
      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.03] group-hover:ring-cyan-400/20 transition-all duration-700" />
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 100])

  return (
    <section
      ref={ref}
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {floatingElements.map((el, i) => (
        <FloatingShape key={el.label} element={el} index={i} />
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
              Lighting Africa. Building the Future.
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]">
            <span className="text-white/90">Building What</span>
            <br />
            <span className="text-gradient">Africa Needs Next.</span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-white/40 leading-relaxed">
            Technology. Talent. Innovation. Institutions.
            <br />
            <span className="text-white/30">
              We help visionary people and organizations create solutions that move Africa forward.
            </span>
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/15"
            >
              Start Your Innovation Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#who-we-are"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white/60 transition-all hover:border-white/20 hover:text-white/80"
            >
              Explore Our Ecosystem
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronDown className="h-6 w-6 text-white/20 scroll-indicator" />
      </motion.div>
    </section>
  )
}
