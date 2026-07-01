"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nextswitch.org",
    href: "mailto:hello@nextswitch.org",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Lagos, Nigeria",
    href: "#",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 901 858 5648",
    href: "tel:+2349018585648",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: undefined,
  },
]

const socialLinks = [
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Instagram", href: "#" },
]

export default function ContactInfo() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactMethods.map((method, i) => {
            const Icon = method.icon
            const content = (
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 h-full hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
                <Icon className="h-5 w-5 text-cyan-400/60" />
                <h3 className="mt-4 text-xs font-semibold tracking-widest text-white/20 uppercase">{method.label}</h3>
                <p className="mt-2 text-sm text-white/80">{method.value}</p>
              </div>
            )

            if (method.href) {
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group block"
                >
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 h-full group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all duration-500">
                    <Icon className="h-5 w-5 text-cyan-400/60" />
                    <h3 className="mt-4 text-xs font-semibold tracking-widest text-white/20 uppercase">{method.label}</h3>
                    <p className="mt-2 text-sm text-white/80 group-hover:text-cyan-400 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              )
            }

            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {content}
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1.5 text-sm text-white/30 hover:text-white/60 transition-colors group"
            >
              {link.label}
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
