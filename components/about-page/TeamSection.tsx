"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { motion, type Variants } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Samuel Asefon",
    role: "Visionary Leader",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    bio: "Eleanor Vance is a transformative leader with a lifelong commitment to progress, innovation, and the empowerment of local communities through sustainable initiatives. Her visionary approach and dedication to collaborative partnerships have resulted in significant advancements in education, environmental conservation, and economic development, making her a catalyst for positive change and a beacon of hope for a brighter future."
  },
  {
    id: 2,
    name: "Member 2",
    role: "Role 2",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    bio: "Description for member 2."
  },
  {
    id: 3,
    name: "Member 3",
    role: "Role 3",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    bio: "Description for member 3."
  },
];

const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

const TeamSection = () => {
  const [activeMember, setActiveMember] = useState(teamMembers[0]);

  return (
    <section className="bg-black py-20 lg:py-32 text-white">
      <div className="container mx-auto px-4 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 md:mb-24">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-start max-w-6xl mx-auto">
          {/* Left Side - Large Image */}
          <AnimatedCard hoverLift={false} imageZoom={false} className="relative aspect-4/5 w-full h-[500px] overflow-hidden rounded-xl">
            <Image
              src={activeMember.image}
              alt={activeMember.name}
              fill
              className="object-cover transition-opacity duration-500"
            />
          </AnimatedCard>

          {/* Right Side - Content */}
          <div className="flex flex-col h-full">
            {/* Thumbnails */}
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-3 gap-4 mb-10">
              {teamMembers.map((member) => (
                <motion.button
                  key={member.id}
                  variants={fadeInUp}
                  onClick={() => setActiveMember(member)}
                  className={`relative aspect-square cursor-pointer overflow-hidden transition-all duration-300 w-full p-0 border-0 ${activeMember.id === member.id ? 'opacity-100 ring-2 ring-white/50' : 'opacity-60 hover:opacity-100'
                    }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                </motion.button>
              ))}
            </StaggerContainer>

            {/* Info */}
            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              About {activeMember.name}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-10 text-sm md:text-base">
              {activeMember.bio}
            </p>

            <Link href="/careers" className="inline-flex">
              <button className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition-all text-sm md:text-base">
                Join us Today
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
