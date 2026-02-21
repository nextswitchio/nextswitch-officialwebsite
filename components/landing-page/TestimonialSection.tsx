'use client'

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Partnering with this software company transformed our business. Their team is responsive and quickly grasped our challenges, offering tailored solutions that made a real impact.",
    author: "Areola Consults",
    role: "Chief Executive Director",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "Their expertise in custom software development exceeded our expectations. The team was incredibly responsive and delivered on time with exceptional quality.",
    author: "TechVenture Labs",
    role: "Product Manager",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "The digital transformation they enabled for our organization has significantly improved our operational efficiency. Highly recommended for any enterprise looking to modernize.",
    author: "Global Solutions Inc",
    role: "CTO",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    // Pause auto-play on user interaction
    setIsAutoPlaying(false);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    // Pause auto-play on user interaction
    setIsAutoPlaying(false);
  }, []);

  const getCardIndex = (offset: number) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length;
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
      return;
    }

    // Start auto-play with 6 second interval
    autoPlayIntervalRef.current = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 6000);

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    };
  }, [isAutoPlaying, isHovering]);

  // Handle hover to pause auto-play
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/pictures/testimonial_bg.png')",
        }}
      />

      <div className="container mx-auto px-4 lg:px-12 relative">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white text-center mb-16 lg:mb-20 leading-tight">
          What Our Clients <span className="font-display italic text-[#FF9212]">Say</span>
        </h2>

        {/* Testimonial Cards Container */}
        <div 
          className="relative flex flex-col items-center max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Card Area */}
          <div className="relative flex items-center justify-center gap-6 lg:gap-8 w-full">
            {/* Desktop Left Arrow */}
            <motion.div
              className="hidden md:flex absolute left-0 lg:-left-16 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 border-white/30 bg-transparent hover:bg-white/10 text-white hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Cards Slider */}
            <div className="flex items-center justify-center gap-4 lg:gap-6 w-full overflow-hidden py-12 md:py-8">
              {/* Left Card (Previous) - Hidden on mobile */}
              <div className="hidden md:block flex-shrink-0 w-64 lg:w-72">
                <div className="bg-[#1a1a3e]/80 backdrop-blur-sm rounded-2xl p-6 opacity-30 blur-[2px] scale-90 border border-white/10">
                  <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-4">
                    &quot;{testimonials[getCardIndex(-1)].quote}&quot;
                  </p>
                  <h4 className="text-white font-semibold font-display italic">{testimonials[getCardIndex(-1)].author}</h4>
                  <p className="text-white/60 text-sm">{testimonials[getCardIndex(-1)].role}</p>
                </div>
              </div>

              {/* Center Card (Current) */}
              <div className="flex-shrink-0 w-full max-w-[340px] md:max-w-md z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 25,
                      mass: 0.8
                    }}
                    className="relative bg-[#1a1a3e]/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/20 shadow-2xl"
                  >
                  {/* Avatar - Centered and overlapping top */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#1a1a3e] shadow-xl">
                      <Image
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].author}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content - Center Aligned */}
                  <div className="mt-8 text-center">
                    <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed mb-8 italic">
                      &quot;{testimonials[currentIndex].quote}&quot;
                    </p>
                    <div className="mb-4">
                      <h4 className="text-white font-bold text-xl md:text-2xl mb-1">{testimonials[currentIndex].author}</h4>
                      <p className="text-white/60 text-sm md:text-base">{testimonials[currentIndex].role}</p>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1.5 pt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-white/20'}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

              {/* Right Card (Next) - Hidden on mobile */}
              <div className="hidden md:block flex-shrink-0 w-64 lg:w-72">
                <div className="bg-[#1a1a3e]/80 backdrop-blur-sm rounded-2xl p-6 opacity-30 blur-[2px] scale-90 border border-white/10">
                  <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-4">
                    &quot;{testimonials[getCardIndex(1)].quote}&quot;
                  </p>
                  <h4 className="text-white font-semibold font-display italic">{testimonials[getCardIndex(1)].author}</h4>
                  <p className="text-white/60 text-sm">{testimonials[getCardIndex(1)].role}</p>
                </div>
              </div>
            </div>

            {/* Desktop Right Arrow */}
            <motion.div
              className="hidden md:flex absolute right-0 lg:-right-16 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 border-white/30 bg-transparent hover:bg-white/10 text-white hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Bottom Navigation Arrows */}
          <div className="flex md:hidden items-center justify-center gap-6 mt-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all border"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all border"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* See All Link */}
        {/* <div className="flex justify-end mt-12 max-w-6xl mx-auto">
          <a href="#" className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            See all Testimonials
            <ArrowRight className="w-4 h-4" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
