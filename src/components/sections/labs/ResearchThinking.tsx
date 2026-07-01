"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, FileText, BarChart3, TrendingUp, Lightbulb } from "lucide-react"

const items = [
  {
    type: "Research Report",
    icon: BarChart3,
    title: "Digital Infrastructure in Africa: A Comprehensive Analysis",
    excerpt: "Mapping the current state of digital infrastructure across 54 African nations and identifying priority investment areas.",
    date: "Apr 2026",
  },
  {
    type: "White Paper",
    icon: FileText,
    title: "Redemptive Innovation: A Framework for African Technology",
    excerpt: "Introducing the principles and practice of redemptive digital innovation as a development strategy.",
    date: "Mar 2026",
  },
  {
    type: "Insight",
    icon: Lightbulb,
    title: "The Rise of African AI: Opportunities and Imperatives",
    excerpt: "How African nations can leverage artificial intelligence for inclusive growth and development.",
    date: "Feb 2026",
  },
  {
    type: "Trend Analysis",
    icon: TrendingUp,
    title: "Future of Work: Preparing Africa's Workforce for 2030",
    excerpt: "Understanding the shifts in work, skills, and employment that will define Africa's economic future.",
    date: "Jan 2026",
  },
]

export default function ResearchThinking() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">
              Research & Thinking
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Exploring Tomorrow{" "}
              <span className="text-gradient">Before It Arrives.</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors shrink-0"
          >
            View All Research
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                className="group relative bg-black/50 p-8 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex rounded-lg bg-white/5 p-2 ring-1 ring-white/[0.06]">
                    <Icon className="h-3.5 w-3.5 text-cyan-400" />
                  </div>
                  <span className="text-xs font-medium text-white/30 tracking-wider uppercase">
                    {item.type}
                  </span>
                  <span className="text-xs text-white/20 ml-auto">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white/80 mb-2 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-white/30 leading-relaxed group-hover:text-white/40 transition-colors duration-300">
                  {item.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-white/20 group-hover:text-cyan-400 transition-colors">
                  Read Report
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
