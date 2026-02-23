"use client";

/**
 * StaggerContainer Component
 * 
 * A wrapper component that orchestrates sequential animations of its children.
 * Each child element will animate with a configurable delay between them,
 * creating a staggered reveal effect.
 * 
 * Features:
 * - Configurable stagger delay between children
 * - Scroll-triggered animation (animates when entering viewport)
 * - Respects reduced motion preferences
 * - Works with any child components that use Framer Motion variants
 * - Supports custom className for styling
 * 
 * Requirements: 2.3
 * 
 * @example
 * ```tsx
 * // Basic usage with default stagger delay (0.1s)
 * <StaggerContainer>
 *   <motion.div variants={fadeInUp}>Item 1</motion.div>
 *   <motion.div variants={fadeInUp}>Item 2</motion.div>
 *   <motion.div variants={fadeInUp}>Item 3</motion.div>
 * </StaggerContainer>
 * 
 * // With custom stagger delay
 * <StaggerContainer staggerDelay={0.15}>
 *   <motion.div variants={fadeInUp}>Item 1</motion.div>
 *   <motion.div variants={fadeInUp}>Item 2</motion.div>
 * </StaggerContainer>
 * 
 * // With custom className
 * <StaggerContainer staggerDelay={0.2} className="grid grid-cols-3 gap-4">
 *   <motion.div variants={fadeInUp}>Card 1</motion.div>
 *   <motion.div variants={fadeInUp}>Card 2</motion.div>
 *   <motion.div variants={fadeInUp}>Card 3</motion.div>
 * </StaggerContainer>
 * ```
 */

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/lib/animations/hooks/useScrollAnimation";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

/**
 * Props for StaggerContainer component
 */
export interface StaggerContainerProps {
  /** Child elements to be animated with stagger effect */
  children: React.ReactNode;
  
  /** 
   * Delay between each child's animation start (in seconds)
   * @default 0.1
   */
  staggerDelay?: number;
  
  /** 
   * Additional CSS classes to apply to the container
   */
  className?: string;
  
  /** 
   * Threshold for viewport detection (0 to 1)
   * 0 = trigger as soon as any part enters viewport
   * 1 = trigger only when fully visible
   * @default 0.1
   */
  threshold?: number;
  
  /** 
   * Initial delay before children start animating (in seconds)
   * @default 0.2
   */
  delayChildren?: number;
}

/**
 * StaggerContainer component
 * 
 * Wraps children with a container that orchestrates sequential animations.
 * The container uses Framer Motion's staggerChildren feature to create
 * a cascading animation effect where each child animates after the previous
 * one with a configurable delay.
 * 
 * The animation is triggered when the container enters the viewport based
 * on the configured threshold. Children must use Framer Motion variants
 * to participate in the stagger animation.
 * 
 * @param props - Component props
 * @returns Stagger container wrapper
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
  threshold = 0.1,
  delayChildren = 0.2,
}: StaggerContainerProps): React.JSX.Element {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();
  
  // Set up scroll animation with configured options
  const { ref, controls } = useScrollAnimation({
    threshold,
    triggerOnce: true, // Only animate once when entering viewport
  });

  // Create stagger container variants with configurable delays
  const staggerVariants: Variants = React.useMemo(() => {
    if (prefersReducedMotion) {
      // If reduced motion is preferred, use instant transitions
      return {
        hidden: { 
          opacity: 0 
        },
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

    // Normal stagger animation with configured delays
    return {
      hidden: { 
        opacity: 0 
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delayChildren,
        }
      }
    };
  }, [staggerDelay, delayChildren, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
