"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const chapters = [
  {
    period: "The Beginning",
    description: "A conviction that Africa's future would be built by those who showed up to build.",
    color: "from-cyan-400/20",
  },
  {
    period: "Learning Through Execution",
    description: "Building real solutions for real problems. Learning what works by doing what matters.",
    color: "from-blue-500/20",
  },
  {
    period: "Building Solutions",
    description: "Developing technology platforms and products that serve people, businesses, and institutions.",
    color: "from-cyan-400/20",
  },
  {
    period: "Building Talent",
    description: "Investing in people. Creating pathways for the next generation of African technologists.",
    color: "from-blue-500/20",
  },
  {
    period: "Building Ecosystems",
    description: "Creating spaces, programs, and networks where innovation can thrive at scale.",
    color: "from-cyan-400/20",
  },
  {
    period: "Building Institutions",
    description: "Establishing organizations that will outlive products and serve generations to come.",
    color: "from-blue-500/20",
  },
]

export default function OurStory() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

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
            Our Story
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            From Building Products{" "}
            <br />
            <span className="text-gradient">To Building Futures.</span>
          </h2>
        </motion.div>

        <div className="mt-20 max-w-5xl mx-auto">
          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.period}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative flex items-start gap-8 py-10 group"
            >
              <div className="hidden sm:flex flex-col items-center">
                <div className={`h-4 w-4 rounded-full bg-gradient-to-br ${chapter.color} to-white/10 ring-1 ring-white/10 group-hover:ring-cyan-400/30 transition-all duration-500`} />
                {i < chapters.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-white/5 to-transparent" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <span className="text-xs font-semibold tracking-widest text-white/20 uppercase">
                  Phase {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white/80 group-hover:text-white transition-colors duration-500">
                  {chapter.period}
                </h3>
                <p className="mt-3 text-base text-white/30 leading-relaxed max-w-2xl">
                  {chapter.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
