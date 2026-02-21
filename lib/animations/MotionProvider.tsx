"use client";

/**
 * MotionProvider Component
 * 
 * Wraps the application with Framer Motion configuration and provides
 * reduced motion context to all child components.
 * 
 * Features:
 * - Detects user's prefers-reduced-motion preference
 * - Provides global MotionConfig settings
 * - Makes reduced motion state available via context
 * 
 * Requirements: 1.1, 1.2, 1.3
 */

import React, { createContext, useContext, useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";

/**
 * Context value for reduced motion preference
 */
interface ReducedMotionContextValue {
  prefersReducedMotion: boolean;
}

/**
 * Context for sharing reduced motion preference throughout the app
 */
export const ReducedMotionContext = createContext<ReducedMotionContextValue>({
  prefersReducedMotion: false,
});

/**
 * Hook to access reduced motion preference
 * @returns boolean indicating if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const context = useContext(ReducedMotionContext);
  return context.prefersReducedMotion;
}

/**
 * Props for MotionProvider component
 */
interface MotionProviderProps {
  children: React.ReactNode;
}

/**
 * MotionProvider Component
 * 
 * Wraps the application with Framer Motion configuration and reduced motion detection.
 * Should be placed at the root of the application.
 * 
 * @example
 * ```tsx
 * <MotionProvider>
 *   <App />
 * </MotionProvider>
 * ```
 */
export function MotionProvider({ children }: MotionProviderProps): React.ReactElement {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === "undefined") return;

    // Create media query for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes to the preference
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add event listener (using deprecated addListener for broader compatibility)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <ReducedMotionContext.Provider value={{ prefersReducedMotion }}>
      <MotionConfig
        reducedMotion={prefersReducedMotion ? "always" : "never"}
        transition={{
          // Default transition settings
          duration: prefersReducedMotion ? 0 : 0.5,
          ease: "easeOut",
        }}
      >
        {children}
      </MotionConfig>
    </ReducedMotionContext.Provider>
  );
}
