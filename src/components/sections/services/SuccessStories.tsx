"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const stories = [
  {
    slug: "financial-services-platform",
    client: "Financial Services Platform",
    tagline: "Digital transformation for a leading African bank",
    challenge: "Legacy systems limited customer experience and operational efficiency.",
    strategy: "Designed and built a modern digital banking platform with mobile-first experience.",
    outcome: "2M+ users onboarded in 18 months. Customer satisfaction up 45%.",
    impact: "Industry benchmark for digital banking in the region.",
  },
  {
    slug: "edtech-venture",
    client: "EdTech Venture",
    tagline: "From idea to 100,000 learners in 12 months",
    challenge: "Founders had vision but needed product, technology, and go-to-market strategy.",
    strategy: "Built MVP in 8 weeks, validated with early users, then scaled platform iteratively.",
    outcome: "100K+ active learners, 500+ courses, partnerships with 30 institutions.",
    impact: "One of the fastest growing EdTech platforms in West Africa.",
  },
  {
    slug: "government-innovation-program",
    client: "Government Innovation Program",
    tagline: "Modernizing public service delivery",
    challenge: "Manual processes created bottlenecks in citizen service delivery.",
    strategy: "Designed digital service platform with workflow automation and analytics.",
    outcome: "60% reduction in processing time. 90% citizen satisfaction rate.",
    impact: "Model for digital government transformation across the region.",
  },
]

export default function SuccessStories() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(1,255,240,0.02)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-6">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Impact In{" "}
            <span className="text-gradient">Action.</span>
          </h2>
        </motion.div>

        <div className="mt-20 space-y-8">
          {stories.map((story, i) => (
            <motion.div
              key={story.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 lg:p-10 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
            >
              <div className="grid gap-8 lg:grid-cols-4">
                <div className="lg:col-span-1">
                  <span className="text-xs font-semibold tracking-widest text-cyan-400/60 uppercase">
                    Case {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-white/90 group-hover:text-white transition-colors">
                    {story.client}
                  </h3>
                  <p className="mt-1 text-sm text-cyan-400/60">{story.tagline}</p>
                </div>

                <div className="lg:col-span-3 grid gap-4 sm:grid-cols-3">
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-white/20 uppercase">Challenge</span>
                    <p className="mt-2 text-sm text-white/40 leading-relaxed">{story.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-white/20 uppercase">Strategy</span>
                    <p className="mt-2 text-sm text-white/40 leading-relaxed">{story.strategy}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-white/20 uppercase">Outcome</span>
                    <p className="mt-2 text-sm text-white/40 leading-relaxed">{story.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.04] flex items-center justify-between">
                <div>
                  <span className="text-xs text-white/20 uppercase tracking-wider">Impact</span>
                  <p className="mt-1 text-sm font-medium text-cyan-400/70">{story.impact}</p>
                </div>
                <Link
                  href={`/case-studies/${story.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-white/20 group-hover:text-cyan-400 transition-colors shrink-0"
                >
                  Read Full Case Study
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
