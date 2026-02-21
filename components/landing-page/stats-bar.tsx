'use client'

import Image from "next/image";
import { Quote } from "lucide-react";
import { CountUpNumber } from "@/components/animations/CountUpNumber";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Collaborating with Lightning Africa completely transformed our company's trajectory, enhancing efficiency and driving innovation.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "Their innovative solutions helped us scale our operations across three countries in just six months. Truly exceptional service.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "Working with Lightning Africa was a game-changer. They delivered beyond expectations and became a trusted technology partner.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    quote: "The team's expertise in digital transformation helped us modernize our entire infrastructure. Results exceeded our projections.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    quote: "Lightning Africa's commitment to excellence and innovation sets them apart. They're not just vendors, they're strategic partners.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  }
];

const StatsBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/30 backdrop-blur-lg ">
      <div className="container mx-auto px-4 lg:px-12 py-5">
        <div className="flex flex-col md:flex-row items-center md:gap-12 gap-6">

          {/* Stats */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="text-base md:text-xl lg:text-2xl font-semibold text-white">
              <CountUpNumber end={500} suffix="+ Projects Delivered" duration={2000} />
            </span>
          </div>

          <div className="h-px w-full md:h-12 md:w-px bg-gray-400/30"></div>

          {/* Testimonial */}
          <div className="flex items-center gap-4 max-w-xl w-full md:flex-1 min-h-[60px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 w-full"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0 overflow-hidden border border-white/20">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt="Testimonial author"
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex-1 relative">
                  <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                    &quot;{testimonials[currentIndex].quote}&quot;
                    <Quote className="w-6 h-6 text-white absolute -right-2 -top-2" />
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
