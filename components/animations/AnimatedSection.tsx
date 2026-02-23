"use client";

/**
 * AnimatedSection Component
 * 
 * A wrapper component that applies scroll-triggered animations to its children.
 * Uses the useScrollAnimation hook to detect when the element enters the viewport
 * and triggers the specified animation variant.
 * 
 * Features:
 * - Multiple animation variants (fadeInUp, fadeInScale, slideInLeft, slideInRight)
 * - Configurable delay for staggered animations
 * - Configurable threshold for viewport detection
 * - Respects reduced motion preferences
 * - Supports custom className for styling
 * 
 * Requirements: 2.1, 2.2, 2.3
 * 
 * @example
 * ```tsx
 * // Basic usage with default fadeInUp variant
 * <AnimatedSection>
 *   <h2>This will fade in from bottom</h2>
 * </AnimatedSection>
 * 
 * // With custom variant and delay
 * <AnimatedSection variant="slideInLeft" delay={0.2}>
 *   <p>This will slide in from left with 0.2s delay</p>
 * </AnimatedSection>
 * 
 * // With custom threshold
 * <AnimatedSection variant="fadeInScale" threshold={0.3}>
 *   <div>Triggers when 30% visible</div>
 * </AnimatedSection>
 * ```
 */

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/lib/animations/hooks/useScrollAnimation";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";
import {
  fadeInUp,
  fadeInScale,
  slideInLeft,
  slideInRight,
} from "@/lib/animations/variants";

/**
 * Available animation variants for AnimatedSection
 */
export type AnimatedSectionVariant = "fadeInUp" | "fadeInScale" | "slideInLeft" | "slideInRight";

/**
 * Props for AnimatedSection component
 */
export interface AnimatedSectionProps {
  /** Content to be animated */
  children: React.ReactNode;
  
  /** 
   * Animation variant to apply
   * @default "fadeInUp"
   */
  variant?: AnimatedSectionVariant;
  
  /** 
   * Delay before animation starts (in seconds)
   * Useful for creating staggered animations
   * @default 0
   */
  delay?: number;
  
  /** 
   * Additional CSS classes to apply to the wrapper
   */
  className?: string;
  
  /** 
   * Threshold for viewport detection (0 to 1)
   * 0 = trigger as soon as any part enters viewport
   * 1 = trigger only when fully visible
   * @default 0.1
   */
  threshold?: number;
}

/**
 * Map of variant names to their animation definitions
 */
const variantMap: Record<AnimatedSectionVariant, any> = {
  fadeInUp,
  fadeInScale,
  slideInLeft,
  slideInRight,
};

/**
 * AnimatedSection component
 * 
 * Wraps content with scroll-triggered animation. The animation is triggered
 * when the element enters the viewport based on the configured threshold.
 * 
 * @param props - Component props
 * @returns Animated section wrapper
 */
export function AnimatedSection({
  children,
  variant = "fadeInUp",
  delay = 0,
  className = "",
  threshold = 0.1,
}: AnimatedSectionProps): React.JSX.Element {
  // Get the animation variant definition
  const selectedVariant = variantMap[variant];
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();
  
  // Set up scroll animation with configured options
  const { ref, controls } = useScrollAnimation({
    threshold,
    triggerOnce: true, // Only animate once when entering viewport
  });

  // Create a modified variant with the delay applied
  const variantWithDelay: Variants = React.useMemo(() => {
    if (prefersReducedMotion) {
      // If reduced motion is preferred, use instant transitions
      return {
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            duration: 0,
            delay: 0,
          },
        },
      };
    }

    // Apply the delay to the visible state transition
    return {
      hidden: selectedVariant.hidden,
      visible: {
        ...selectedVariant.visible,
        transition: {
          ...(selectedVariant.visible.transition || {}),
          delay,
        },
      },
    };
  }, [selectedVariant, delay, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variantWithDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
