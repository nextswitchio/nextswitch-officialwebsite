"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Subscribe() {
  const [email, setEmail] = useState("")
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent p-12 lg:p-20 text-center"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(1,255,240,0.03)_0%,transparent_70%)]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Stay Connected</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Get the <span className="text-gradient">Latest.</span>
            </h2>
            <p className="mt-4 text-base text-white/30 max-w-lg mx-auto">
              Subscribe to our newsletter for weekly updates on announcements, research, and stories from across the continent.
            </p>
            <form className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
              <label htmlFor="email-input" className="sr-only">Email address</label>
              <input
                id="email-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/15 whitespace-nowrap"
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-4 text-xs text-white/15">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
