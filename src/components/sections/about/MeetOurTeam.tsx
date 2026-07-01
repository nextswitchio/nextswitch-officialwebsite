"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  mainImage: string
  thumbnailImage: string
}

const teamMembers: TeamMember[] = [
  {
    id: "samuel-asefon",
    name: "Samuel Asefon",
    role: "Founder & CEO",
    bio: "Eleanor Vance is a transformative leader with a lifelong commitment to progress, innovation, and the empowerment of local communities through sustainable initiatives. Her visionary approach and dedication to collaborative partnerships have resulted in significant advancements in education, environmental conservation, and economic development, making her a catalyst for positive change and a beacon of hope for a brighter future.",
    mainImage: "/team/samuel-main.jpg",
    thumbnailImage: "/team/samuel-thumb.jpg",
  },
  {
    id: "team-member-2",
    name: "Team Member 2",
    role: "Chief Technology Officer",
    bio: "A passionate technologist dedicated to building innovative solutions that empower communities and drive meaningful change across Africa.",
    mainImage: "/team/member2-main.jpg",
    thumbnailImage: "/team/member2-thumb.jpg",
  },
  {
    id: "team-member-3",
    name: "Team Member 3",
    role: "Head of Operations",
    bio: "With extensive experience in operational excellence, leading teams to deliver impactful results and sustainable growth.",
    mainImage: "/team/member3-main.jpg",
    thumbnailImage: "/team/member3-thumb.jpg",
  },
  {
    id: "team-member-4",
    name: "Team Member 4",
    role: "Director of Partnerships",
    bio: "Building bridges between organizations and communities to create lasting partnerships that drive social impact and innovation.",
    mainImage: "/team/member4-main.jpg",
    thumbnailImage: "/team/member4-thumb.jpg",
  },
]

export default function MeetOurTeam() {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0])

  // Get the other team members (excluding the selected one)
  const otherMembers = teamMembers.filter(member => member.id !== selectedMember.id).slice(0, 3)

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-16 md:mb-20"
        >
          Meet Our Team
        </motion.h2>

        {/* Team Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Main Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full rounded-3xl overflow-hidden bg-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Placeholder for image - replace with actual Next.js Image component when images are added */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
                  {selectedMember.mainImage}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column - Thumbnails and Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-start"
          >
            {/* Team Member Thumbnails */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {otherMembers.map((member, index) => (
                <motion.button
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Grayscale filter on thumbnail */}
                  <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs text-center p-2">
                      {member.thumbnailImage}
                    </div>
                  </div>
                  {/* Border highlight on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Team Member Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                  About {selectedMember.name}
                </h3>
                <p className="text-base text-white/60 leading-relaxed mb-8">
                  {selectedMember.bio}
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 group"
                >
                  Join us Today
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
