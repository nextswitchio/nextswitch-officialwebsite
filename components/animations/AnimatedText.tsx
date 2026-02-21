"use client";

/**
 * AnimatedText Component
 * 
 * A component that splits text into words or characters and applies a staggered
 * reveal animation. The text animates into view when it enters the viewport,
 * with each word or character appearing sequentially.
 * 
 * Features:
 * - Split text by word, character, or line
 * - Staggered reveal animation
 * - Scroll-triggered animation (animates when entering viewport)
 * - Respects reduced motion preferences
 * - Supports custom className for styling
 * - Configurable delay and stagger timing
 * 
 * Requirements: 8.1, 8.2, 8.3
 * 
 * @example
 * ```tsx
 * // Basic usage with word-by-word reveal
 * <AnimatedText text="Welcome to Next Switch" variant="word" />
 * 
 * // Character-by-character reveal
 * <AnimatedText text="Hello World" variant="character" />
 * 
 * // With custom styling and delay
 * <AnimatedText 
 *   text="Animated Heading" 
 *   variant="word"
 *   className="text-4xl font-bold"
 *   delay={0.2}
 *   staggerDelay={0.08}
 * />
 * ```
 */

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/lib/animations/hooks/useScrollAnimation";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

/**
 * Available text animation variants
 */
export type AnimatedTextVariant = "word" | "character" | "line";

/**
 * Props for AnimatedText component
 */
export interface AnimatedTextProps {
  /** Text content to animate */
  text: string;
  
  /** 
   * How to split the text for animation
   * - word: Split by spaces, animate each word
   * - character: Split into individual characters
   * - line: Split by line breaks
   * @default "word"
   */
  variant?: AnimatedTextVariant;
  
  /** 
   * Additional CSS classes to apply to the wrapper
   */
  className?: string;
  
  /** 
   * Initial delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number;
  
  /** 
   * Delay between each word/character animation (in seconds)
   * @default 0.05
   */
  staggerDelay?: number;
  
  /** 
   * Threshold for viewport detection (0 to 1)
   * @default 0.1
   */
  threshold?: number;
  
  /**
   * HTML tag to use for the wrapper element
   * @default "div"
   */
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Split text based on the variant type
 */
function splitText(text: string, variant: AnimatedTextVariant): string[] {
  switch (variant) {
    case "word":
      // Split by spaces, filter out empty strings
      return text.split(" ").filter(word => word.length > 0);
    
    case "character":
      // Split into individual characters
      return text.split("");
    
    case "line":
      // Split by line breaks
      return text.split("\n").filter(line => line.length > 0);
    
    default:
      return text.split(" ").filter(word => word.length > 0);
  }
}

/**
 * AnimatedText component
 * 
 * Splits text into segments (words, characters, or lines) and animates them
 * with a staggered reveal effect when the text enters the viewport.
 * 
 * @param props - Component props
 * @returns Animated text wrapper
 */
export function AnimatedText({
  text,
  variant = "word",
  className = "",
  delay = 0,
  staggerDelay = 0.05,
  threshold = 0.1,
  as = "div",
}: AnimatedTextProps): React.JSX.Element {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();
  
  // Set up scroll animation
  const { ref, controls } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  // Split the text based on variant
  const segments = React.useMemo(() => splitText(text, variant), [text, variant]);

  // Container variants for orchestrating stagger
  const containerVariants: Variants = React.useMemo(() => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0,
            staggerChildren: 0,
            delayChildren: 0,
          }
        }
      };
    }

    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        }
      }
    };
  }, [staggerDelay, delay, prefersReducedMotion]);

  // Individual segment variants
  const segmentVariants: Variants = React.useMemo(() => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0 }
        }
      };
    }

    return {
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
  }, [prefersReducedMotion]);

  // Create the motion component based on the 'as' prop
  const MotionComponent = motion[as as keyof typeof motion] as any;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
      style={{
        display: variant === "line" ? "block" : "flex",
        flexWrap: variant === "word" ? "wrap" : "nowrap",
        gap: variant === "word" ? "0.25em" : "0",
      }}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          variants={segmentVariants}
          style={{
            display: "inline-block",
            whiteSpace: variant === "character" ? "pre" : "normal",
          }}
        >
          {segment}
          {/* Add space after word if not last word and variant is word */}
          {variant === "word" && index < segments.length - 1 ? "" : ""}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
