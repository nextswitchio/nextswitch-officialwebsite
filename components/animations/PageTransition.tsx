"use client";

/**
 * PageTransition Component
 * 
 * Provides smooth fade transitions between page navigations in Next.js App Router.
 * 
 * Features:
 * - Fade out current page over 200ms on route change
 * - Fade in new page over 300ms on load
 * - Prevents simultaneous transitions (mutual exclusion)
 * - Respects reduced motion preferences
 * - Maintains scroll position appropriately
 * 
 * Requirements: 5.1, 5.2, 5.4
 * 
 * @example
 * ```tsx
 * // In root layout or template
 * <PageTransition>
 *   {children}
 * </PageTransition>
 * ```
 */

import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

/**
 * Props for PageTransition component
 */
export interface PageTransitionProps {
  /**
   * Page content to be animated
   */
  children: React.ReactNode;
}

/**
 * PageTransition component
 * 
 * Wraps page content with fade in/out transitions during navigation.
 * Uses AnimatePresence to handle exit animations and ensures only one
 * transition occurs at a time.
 * 
 * The component uses the pathname as a key to trigger animations when
 * the route changes. This ensures that each page gets its own animation
 * lifecycle.
 * 
 * @param props - Component props
 * @returns Animated page wrapper
 */
export function PageTransition({ children }: PageTransitionProps): React.JSX.Element {
  // Get current pathname to use as animation key
  const pathname = usePathname();
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();
  
  // Track if a transition is in progress to prevent simultaneous transitions
  const isTransitioning = useRef(false);

  // Animation variants for page transitions
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3, // 300ms fade in
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.2, // 200ms fade out
        ease: "easeIn" as const,
      },
    },
  };

  // Handlers for animation lifecycle
  const handleAnimationStart = () => {
    isTransitioning.current = true;
  };

  const handleAnimationComplete = () => {
    isTransitioning.current = false;
  };

  return (
    <AnimatePresence 
      mode="wait" // Wait for exit animation to complete before entering new page
      initial={false} // Don't animate on initial page load
      onExitComplete={() => {
        // Scroll to top when page transition completes
        // This maintains appropriate scroll position for new pages
        if (typeof window !== "undefined") {
          window.scrollTo(0, 0);
        }
      }}
    >
      <motion.div
        key={pathname} // Use pathname as key to trigger animation on route change
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
        style={{
          // Ensure the container takes full width
          width: "100%",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
