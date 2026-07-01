"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Send, Check } from "lucide-react"

const subjects = [
  "General Inquiry",
  "Partnership Opportunity",
  "Project Collaboration",
  "Media / Press",
  "Academy Programs",
  "Innovation Lab",
  "Careers",
  "Other",
]

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section ref={ref} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <motion.div style={{ y }} className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.03] p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5">
              <Check className="h-8 w-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white/90">Message Sent!</h2>
            <p className="mt-4 text-white/40">
              Thank you for reaching out. Our team will respond within 24 hours.
            </p>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="contact-form" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010a0e] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(13,71,161,0.03)_0%,transparent_50%)]" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">Send us a message</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">We&apos;re Here to <span className="text-gradient">Help.</span></h2>
        </motion.div>

        <form onSubmit={handleSubmit} className="mt-12">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="sr-only">Full Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">Email Address</label>
              <input
                id="contact-email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 transition-colors"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="contact-subject" className="sr-only">Subject</label>
            <select
              id="contact-subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              required
              className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm text-white/80 focus:outline-none focus:border-cyan-400/30 transition-colors appearance-none"
            >
              <option value="" className="bg-black">Select a subject</option>
              {subjects.map(s => (
                <option key={s} value={s} className="bg-black">{s}</option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="contact-message" className="sr-only">Your Message</label>
            <textarea
              id="contact-message"
              placeholder="Tell us how we can help..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 transition-colors resize-none"
            />
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-10 py-5 text-base font-medium text-white transition-all hover:bg-cyan-400/10 hover:border-cyan-400/30 glow-cyan"
            >
              <Send className="h-4 w-4" />
              Send Message
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  )
}
