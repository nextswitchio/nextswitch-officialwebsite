"use client";

/**
 * useReducedMotion Hook
 * 
 * Detects the user's prefers-reduced-motion preference and returns a boolean
 * indicating whether animations should be reduced or disabled.
 * 
 * This hook listens to the prefers-reduced-motion media query and updates
 * when the user's preference changes.
 * 
 * Requirements: 11.1, 11.2
 * 
 * @returns {boolean} true if user prefers reduced motion, false otherwise
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const prefersReducedMotion = useReducedMotion();
 *   const duration = prefersReducedMotion ? 0 : 0.5;
 *   
 *   return (
 *     <motion.div
 *       animate={{ opacity: 1 }}
 *       transition={{ duration }}
 *     >
 *       Content
 *     </motion.div>
 *   );
 * }
 * ```
 */

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  // Initialize with false (animations enabled by default)
  // This prevents hydration mismatches in SSR
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === "undefined") {
      return;
    }

    // Create media query for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    // Set initial value based on current preference
    setPrefersReducedMotion(mediaQuery.matches);

    // Handler for media query changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add event listener for preference changes
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup: remove event listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
