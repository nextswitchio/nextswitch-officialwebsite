"use client";

/**
 * useParallax Hook
 * 
 * Implements parallax scroll effect where an element translates at a different
 * speed than the scroll speed, creating a depth effect. The translation is
 * proportional to the scroll position multiplied by a speed factor.
 * 
 * Features:
 * - Tracks scroll position using scroll event listeners
 * - Calculates translation based on speed multiplier
 * - Supports both vertical and horizontal parallax
 * - Uses GPU-accelerated transforms for performance
 * - Configurable speed and direction
 * - Can be disabled conditionally
 * 
 * Requirements: 10.1, 10.2, 10.3
 * 
 * @example
 * ```tsx
 * function ParallaxBackground() {
 *   const { ref, y } = useParallax({ 
 *     speed: 0.5  // Moves at 50% of scroll speed
 *   });
 *   
 *   return (
 *     <motion.div ref={ref} style={{ y }}>
 *       Background content
 *     </motion.div>
 *   );
 * }
 * ```
 */

import { useEffect, useRef } from "react";
import { useMotionValue, useScroll, type MotionValue } from "framer-motion";

/**
 * Options for configuring the parallax effect
 */
export interface UseParallaxOptions {
  /**
   * Speed multiplier for the parallax effect
   * - 0.5 = element moves at 50% of scroll speed (slower, background effect)
   * - 1.0 = element moves at same speed as scroll (no parallax)
   * - 1.2 = element moves at 120% of scroll speed (faster, foreground effect)
   * Default: 0.5 (50% of scroll speed)
   */
  speed?: number;
  
  /**
   * Direction of the parallax effect
   * - "vertical": translates on Y axis (up/down)
   * - "horizontal": translates on X axis (left/right)
   * Default: "vertical"
   */
  direction?: "vertical" | "horizontal";
  
  /**
   * Whether the parallax effect is disabled
   * Useful for conditional enabling based on device or preferences
   * Default: false
   */
  disabled?: boolean;
}

/**
 * Return value from useParallax hook
 */
export interface UseParallaxReturn {
  /**
   * Ref to attach to the element you want to apply parallax to
   * Must be attached to a DOM element
   */
  ref: React.RefObject<any>;
  
  /**
   * Motion value for Y translation (vertical parallax)
   * Use with style prop on motion components
   */
  y: MotionValue<number>;
  
  /**
   * Motion value for X translation (horizontal parallax)
   * Use with style prop on motion components
   */
  x: MotionValue<number>;
}

/**
 * Hook for creating parallax scroll effects
 * 
 * The parallax effect works by tracking the element's position relative to the
 * viewport and applying a translation based on the scroll progress and speed multiplier.
 * 
 * @param options - Configuration options for the parallax effect
 * @returns Object containing ref and motion values (x, y)
 */
export function useParallax(
  options: UseParallaxOptions = {}
): UseParallaxReturn {
  const {
    speed = 0.5,
    direction = "vertical",
    disabled = false,
  } = options;

  // Ref to attach to the element
  const ref = useRef<any>(null);
  
  // Track scroll progress using Framer Motion's useScroll
  // scrollYProgress gives us a value from 0 to 1 based on scroll position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Track from when element enters until it leaves viewport
  });

  // Motion values for X and Y translation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    // Skip if disabled or not in browser environment
    if (disabled || typeof window === "undefined") {
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Subscribe to scroll progress changes
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // Calculate the parallax offset
      // progress ranges from 0 (element at bottom of viewport) to 1 (element at top)
      // We center it around 0 by subtracting 0.5 and multiplying by viewport height
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      
      // Calculate scroll distance from center
      // When progress is 0.5, element is centered, offset should be 0
      // When progress is 0, element is at bottom, offset should be negative
      // When progress is 1, element is at top, offset should be positive
      const scrollDistance = (progress - 0.5) * 2;
      
      if (direction === "vertical") {
        // Calculate Y translation based on speed multiplier
        // Negative because we want to move opposite to scroll for background effect
        const offset = -scrollDistance * viewportHeight * speed;
        y.set(offset);
      } else {
        // Calculate X translation based on speed multiplier
        const offset = -scrollDistance * viewportWidth * speed;
        x.set(offset);
      }
    });

    // Cleanup: unsubscribe from scroll progress on unmount
    return () => {
      unsubscribe();
    };
  }, [speed, direction, disabled, scrollYProgress, x, y]);

  return {
    ref,
    y,
    x,
  };
}
