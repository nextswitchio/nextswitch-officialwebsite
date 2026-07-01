"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check, ArrowRight, Calendar, Clock, Send } from "lucide-react"

const services = [
  { id: "strategy-session", label: "Strategy Session", desc: "High-level planning and roadmap alignment for your organization" },
  { id: "discovery-call", label: "Discovery Call", desc: "Explore how Next Switch can support your project or vision" },
  { id: "partnership", label: "Partnership Conversation", desc: "Discuss collaboration opportunities and ecosystem integration" },
  { id: "innovation-lab", label: "Innovation Lab Inquiry", desc: "Learn about lab membership, venture incubation, or research" },
  { id: "talent-development", label: "Talent Development", desc: "Academy programs, workshops, and capability building" },
  { id: "general", label: "General Inquiry", desc: "Other questions, media inquiries, or general information" },
]

const timeSlots = [
  "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00",
]

export default function BookingForm() {
  const [selectedService, setSelectedService] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const service = params.get("service")
    if (service && services.some(s => s.id === service)) {
      setSelectedService(service)
    }
  }, [])

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
            <h2 className="text-3xl font-bold tracking-tight text-white/90">Booking Confirmed!</h2>
            <p className="mt-4 text-white/40">
              We&apos;ve received your session request. Our team will reach out within 24 hours to confirm your appointment.
            </p>
            <p className="mt-2 text-sm text-white/20">
              A confirmation has been sent to {email}.
            </p>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-white/20 uppercase mb-4">What brings you here?</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Select a <span className="text-gradient">Reason</span></h2>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {services.map((service, i) => (
              <motion.button
                key={service.id}
                type="button"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onClick={() => setSelectedService(service.id)}
                className={`group rounded-xl border p-5 text-left transition-all duration-300 ${
                  selectedService === service.id
                    ? "border-cyan-400/30 bg-cyan-400/[0.04]"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm font-semibold transition-colors ${
                      selectedService === service.id ? "text-cyan-400" : "text-white/80 group-hover:text-white"
                    }`}>
                      {service.label}
                    </span>
                    <p className="mt-1 text-xs text-white/30 leading-relaxed">{service.desc}</p>
                  </div>
                  <div className={`ml-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    selectedService === service.id
                      ? "border-cyan-400 bg-cyan-400"
                      : "border-white/20"
                  }`}>
                    {selectedService === service.id && <Check className="h-3 w-3 text-black" />}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mt-16 text-xs font-semibold tracking-widest text-white/20 uppercase">Your Details</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="booking-name" className="sr-only">Full Name</label>
                <input
                  id="booking-name"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="booking-email" className="sr-only">Email Address</label>
                <input
                  id="booking-email"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="booking-phone" className="sr-only">Phone Number</label>
                <input
                  id="booking-phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="booking-company" className="sr-only">Company / Organization</label>
                <input
                  id="booking-company"
                  type="text"
                  placeholder="Company / Organization"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 transition-colors"
                />
              </div>
            </div>

            <h3 className="mt-12 text-xs font-semibold tracking-widest text-white/20 uppercase">Preferred Schedule</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 pointer-events-none" />
                <label htmlFor="booking-date" className="sr-only">Preferred Date</label>
                <input
                  id="booking-date"
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-12 py-4 text-sm text-white/80 focus:outline-none focus:border-cyan-400/30 transition-colors [color-scheme:dark]"
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 pointer-events-none" />
                <label htmlFor="booking-time" className="sr-only">Preferred Time</label>
                <select
                  id="booking-time"
                  value={time}
                  onChange={e => setTime(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-white/[0.06] bg-white/[0.02] px-12 py-4 text-sm text-white/80 focus:outline-none focus:border-cyan-400/30 transition-colors"
                >
                  <option value="" className="bg-black">Select a time</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot} className="bg-black">{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <h3 className="mt-12 text-xs font-semibold tracking-widest text-white/20 uppercase">Additional Notes</h3>
            <div className="mt-6">
              <label htmlFor="booking-message" className="sr-only">Tell us more about what you&apos;re looking for</label>
              <textarea
                id="booking-message"
                placeholder="Tell us more about what you&apos;re looking for..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 transition-colors resize-none"
              />
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-10 py-5 text-base font-medium text-white transition-all hover:bg-cyan-400/10 hover:border-cyan-400/30 glow-cyan"
              >
                <Send className="h-4 w-4" />
                Submit Booking Request
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </form>
      </motion.div>
    </section>
  )
}
