"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type { InsightContent } from "@/data/insights"

export default function ContentBody({ insight }: { insight: InsightContent }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg text-white/40 leading-relaxed mb-10 italic border-l-2 border-cyan-400/30 pl-6">
            {insight.excerpt}
          </p>

          <div className="text-base text-white/50 leading-relaxed space-y-5 [&>p]:leading-relaxed">
            {insight.body.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={i} className="space-y-2 my-4">
                    {paragraph.split("\n").map((line, j) => (
                      <li key={j} className="flex items-start gap-3 text-white/40">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/40" />
                        <span>{line.replace(/^- /, "")}</span>
                      </li>
                    ))}
                  </ul>
                )
              }
              if (/^\d+\./.test(paragraph)) {
                return (
                  <ol key={i} className="space-y-3 my-4 list-decimal list-inside text-white/40 marker:text-cyan-400/60">
                    {paragraph.split("\n").map((line, j) => (
                      <li key={j}>{line.replace(/^\d+\.\s*/, "")}</li>
                    ))}
                  </ol>
                )
              }
              return <p key={i}>{paragraph}</p>
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
