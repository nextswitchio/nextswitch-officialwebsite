"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

interface TechnologyMarqueeProps {
  technologies: Array<{ name: string; logo: string }>;
  speed?: number; // pixels per second, default: 50
  pauseOnHover?: boolean; // default: true
  className?: string;
}

/**
 * TechnologyMarquee - Continuous scrolling marquee with seamless looping
 * 
 * Features:
 * - Constant speed scrolling (Requirements 14.1)
 * - Pause on hover (Requirements 14.2)
 * - Seamless looping without visible jumps (Requirements 14.3)
 * - Duplicated content for seamless effect (Requirements 14.4)
 * - Respects reduced motion preferences
 */
export function TechnologyMarquee({
  technologies,
  speed = 50,
  pauseOnHover = true,
  className = "",
}: TechnologyMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate animation duration based on content width and speed
  useEffect(() => {
    if (containerRef.current && !prefersReducedMotion) {
      const contentWidth = containerRef.current.scrollWidth / 2; // Divide by 2 because content is duplicated
      const calculatedDuration = contentWidth / speed;
      setDuration(calculatedDuration);
    }
  }, [speed, prefersReducedMotion, technologies]);

  // If reduced motion is preferred, don't animate
  if (prefersReducedMotion) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <div className="flex items-center gap-6 lg:gap-10">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-6 lg:gap-10 shrink-0">
              <span className="text-foreground/40 text-2xl">•</span>
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-10 lg:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex items-center gap-6 lg:gap-10"
        animate={
          isPaused
            ? {} // When paused, don't animate
            : {
                x: [0, "-50%"], // Move from 0 to -50% (half the width, since content is duplicated)
              }
        }
        transition={{
          x: {
            duration: duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {/* Duplicate the content twice for seamless looping */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="flex items-center gap-6 lg:gap-10 shrink-0">
            <span className="text-foreground/40 text-2xl">•</span>
            <img
              src={tech.logo}
              alt={tech.name}
              className="h-10 lg:h-14 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
