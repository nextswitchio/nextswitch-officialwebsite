"use client";

/**
 * SkeletonLoader Component
 * 
 * A loading placeholder component with pulsing animation that displays
 * while content is being fetched. Supports different shapes and fades
 * out smoothly when loading completes.
 * 
 * Features:
 * - Pulsing animation with 1.5s cycle
 * - Multiple shape variants (text, circle, rectangle)
 * - Smooth fade out on loading complete
 * - Respects reduced motion preferences
 * - Full TypeScript support
 * 
 * Requirements: 6.1, 6.4
 * 
 * @example
 * ```tsx
 * // Text skeleton (default)
 * <SkeletonLoader />
 * 
 * // Circle skeleton (for avatars)
 * <SkeletonLoader shape="circle" className="w-12 h-12" />
 * 
 * // Rectangle skeleton (for images)
 * <SkeletonLoader shape="rectangle" className="w-full h-48" />
 * 
 * // With loading state control
 * <SkeletonLoader isLoading={isLoading} />
 * ```
 */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

/**
 * Props for the SkeletonLoader component
 */
export interface SkeletonLoaderProps {
  /**
   * Shape variant of the skeleton
   * - text: Rectangular shape for text lines (default)
   * - circle: Circular shape for avatars/icons
   * - rectangle: Rectangular shape for images/cards
   * 
   * Default: "text"
   */
  shape?: "text" | "circle" | "rectangle";
  
  /**
   * Whether the skeleton is currently loading
   * When set to false, the skeleton will fade out
   * 
   * Default: true
   */
  isLoading?: boolean;
  
  /**
   * Additional CSS classes to apply
   * Use this to control width, height, and other styling
   */
  className?: string;
  
  /**
   * Callback fired when fade out animation completes
   */
  onAnimationComplete?: () => void;
}

/**
 * SkeletonLoader component with pulsing animation
 * 
 * This component displays a loading placeholder that pulses with a smooth
 * animation. It can be configured to different shapes and will fade out
 * gracefully when loading completes.
 * 
 * @param props - Component props
 * @returns Animated skeleton loader
 */
export function SkeletonLoader({
  shape = "text",
  isLoading = true,
  className = "",
  onAnimationComplete,
}: SkeletonLoaderProps): React.JSX.Element | null {
  // Detect reduced motion preference
  const prefersReducedMotion = useReducedMotion();

  // Base skeleton styles
  const baseStyles = "bg-muted animate-pulse";
  
  // Shape-specific styles
  const shapeStyles = {
    text: "h-4 rounded",
    circle: "rounded-full",
    rectangle: "rounded-md",
  };

  // Pulse animation variants
  const pulseVariants = {
    loading: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: prefersReducedMotion ? 0 : 1.5,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1] as const, // easeInOut cubic bezier
      },
    },
    loaded: {
      opacity: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.2,
        ease: [0.4, 0, 0.2, 1] as const, // easeOut cubic bezier
      },
    },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={onAnimationComplete}>
      {isLoading && (
        <motion.div
          className={cn(
            baseStyles,
            shapeStyles[shape],
            className
          )}
          variants={pulseVariants}
          initial="loading"
          animate="loading"
          exit="loaded"
          aria-live="polite"
          aria-busy="true"
          role="status"
          aria-label="Loading content"
        />
      )}
    </AnimatePresence>
  );
}
