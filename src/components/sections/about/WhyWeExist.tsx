"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const points = [
  {
    text: "Technology alone does not solve problems.",
    highlight: "People do.",
  },
  {
    text: "Institutions do.",
    highlight: "Communities do.",
  },
  {
    text: "Vision does.",
    highlight: "Technology becomes valuable",
    suffix: " when it helps people flourish.",
  },
]

export default function WhyWeExist() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4])

  return (
    <section ref={ref} className="relative py-32 sm:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Why We Exist
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            The World Does Not Need{" "}
            <br />
            <span className="text-white/50">More Technology.</span>
            <br />
            <span className="text-gradient">It Needs Better Outcomes.</span>
          </h2>
        </motion.div>

        <div className="mt-20 max-w-4xl mx-auto">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="border-t border-white/[0.04] py-8 first:border-t-0"
            >
              <p className="text-xl sm:text-2xl text-white/30 leading-relaxed">
                {point.text}{" "}
                <span className="text-white/80 font-medium">{point.highlight}</span>
                {point.suffix && (
                  <span className="text-white/30">{point.suffix}</span>
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
