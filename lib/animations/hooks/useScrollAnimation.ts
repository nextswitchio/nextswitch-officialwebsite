"use client";

/**
 * useScrollAnimation Hook
 * 
 * Implements Intersection Observer logic to trigger animations when elements
 * enter the viewport. Returns a ref to attach to the element, animation controls,
 * and the current visibility state.
 * 
 * Features:
 * - Configurable threshold for when animation triggers
 * - Optional triggerOnce mode (animate only on first view)
 * - Configurable root margin for early/late triggering
 * - Returns isInView state for conditional rendering
 * 
 * Requirements: 2.1, 2.2, 2.4, 2.5
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { ref, controls, isInView } = useScrollAnimation({ 
 *     threshold: 0.2,
 *     triggerOnce: true 
 *   });
 *   
 *   return (
 *     <motion.div 
 *       ref={ref} 
 *       animate={controls}
 *       variants={fadeInUp}
 *       initial="hidden"
 *     >
 *       Content
 *     </motion.div>
 *   );
 * }
 * ```
 */

import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";

/**
 * Options for configuring scroll animation behavior
 */
export interface UseScrollAnimationOptions {
  /**
   * Threshold for triggering the animation (0 to 1)
   * 0 = trigger as soon as any part enters viewport
   * 1 = trigger only when fully visible
   * Default: 0.1 (10% visibility)
   */
  threshold?: number;
  
  /**
   * Whether to trigger animation only once
   * If true, element won't re-animate on subsequent viewport entries
   * Default: true
   */
  triggerOnce?: boolean;
  
  /**
   * Root margin for the Intersection Observer
   * Allows triggering before/after element enters viewport
   * Example: "0px 0px -100px 0px" triggers 100px before entering
   * Default: "0px"
   */
  rootMargin?: string;
}

/**
 * Return value from useScrollAnimation hook
 */
export interface UseScrollAnimationReturn {
  /**
   * Ref to attach to the element you want to animate
   * Can be used with any HTML element
   */
  ref: React.RefObject<any>;
  
  /**
   * Animation controls from Framer Motion
   * Use with animate prop on motion components
   */
  controls: ReturnType<typeof useAnimation>;
  
  /**
   * Current visibility state
   * True when element is in viewport (based on threshold)
   */
  isInView: boolean;
}

/**
 * Hook for scroll-triggered animations using Intersection Observer
 * 
 * @param options - Configuration options for the scroll animation
 * @returns Object containing ref, controls, and isInView state
 */
export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = "0px",
  } = options;

  // Ref to attach to the element we want to observe
  const ref = useRef<any>(null);
  
  // Animation controls from Framer Motion
  const controls = useAnimation();
  
  // Track whether element is currently in view
  const [isInView, setIsInView] = useState(false);
  
  // Track whether animation has already been triggered (for triggerOnce mode)
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Check if Intersection Observer is supported
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      // Fallback: immediately show element in visible state
      setIsInView(true);
      controls.start("visible");
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;
          
          // Update isInView state
          setIsInView(isIntersecting);

          if (isIntersecting) {
            // Element entered viewport - trigger animation
            if (!triggerOnce || !hasAnimatedRef.current) {
              controls.start("visible");
              hasAnimatedRef.current = true;
            }
          } else {
            // Element left viewport
            if (!triggerOnce) {
              // If not triggerOnce, reset to hidden state
              controls.start("hidden");
            }
            // If triggerOnce is true, keep element in visible state
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Start observing the element
    observer.observe(element);

    // Cleanup: stop observing on unmount
    return () => {
      observer.disconnect();
    };
  }, [controls, threshold, triggerOnce, rootMargin]);

  return {
    ref,
    controls,
    isInView,
  };
}
