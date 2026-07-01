"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Building2, GraduationCap, FlaskConical, Users } from "lucide-react"

const ecosystemCards = [
  {
    title: "Next Switch Ltd",
    description:
      "The parent company driving redemptive digital innovation across Africa. We design, build, and scale technology solutions for individuals, businesses, institutions, and governments.",
    icon: Building2,
    href: "#",
  },
  {
    title: "Next Switch Academy",
    description:
      "Developing Africa's next generation of technology talent through intensive programs, mentorship, and real-world project experience.",
    icon: GraduationCap,
    href: "http://www.nextswitchacademy.com",
  },
  {
    title: "Next Switch Labs",
    description:
      "Our innovation arm exploring emerging technologies, building prototypes, and pushing the boundaries of what's possible for Africa's digital future.",
    icon: FlaskConical,
    href: "#",
  },
  {
    title: "Next Switch CoWork",
    description:
      "A collaborative ecosystem where innovators, founders, and creators connect, collaborate, and build the future together.",
    icon: Users,
    href: "#",
  },
]

export default function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="who-we-are" ref={ref} className="relative py-32 overflow-hidden">
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
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            More Than Technology.
            <br />
            <span className="text-gradient">We Build Possibility.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.a
                key={card.title}
                href={card.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10"
              >
                <div className="mb-6 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/[0.06]">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-6 flex items-center gap-1 text-xs font-medium text-white/30 group-hover:text-cyan-400 transition-colors">
                  Learn More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>

                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.02] transition-all duration-500 group-hover:ring-cyan-400/10" />
              </motion.a>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
