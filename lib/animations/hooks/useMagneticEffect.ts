"use client";

/**
 * useMagneticEffect Hook
 * 
 * Implements magnetic effect where an element translates toward the cursor
 * when the cursor is within a specified radius. The translation is proportional
 * to the distance from the cursor, creating a subtle "magnetic" attraction.
 * 
 * Features:
 * - Tracks cursor position relative to element center
 * - Calculates translation based on distance and strength
 * - Configurable radius and strength
 * - Returns motion values for smooth animation
 * - Automatic cleanup on unmount
 * 
 * Requirements: 3.5
 * 
 * @example
 * ```tsx
 * function MagneticButton() {
 *   const { ref, x, y } = useMagneticEffect({ 
 *     strength: 0.3,
 *     radius: 100 
 *   });
 *   
 *   return (
 *     <motion.button ref={ref} style={{ x, y }}>
 *       Hover me
 *     </motion.button>
 *   );
 * }
 * ```
 */

import { useEffect, useRef } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

/**
 * Options for configuring the magnetic effect
 */
export interface UseMagneticEffectOptions {
  /**
   * Strength of the magnetic effect (0 to 1)
   * Determines what percentage of the distance the element moves
   * 0.2 = element moves 20% of the distance toward cursor
   * Default: 0.2 (20%)
   */
  strength?: number;
  
  /**
   * Radius in pixels within which the effect is active
   * When cursor is beyond this distance, no effect is applied
   * Default: 100px
   */
  radius?: number;
  
  /**
   * Whether the magnetic effect is disabled
   * Useful for conditional enabling based on device or preferences
   * Default: false
   */
  disabled?: boolean;
}

/**
 * Return value from useMagneticEffect hook
 */
export interface UseMagneticEffectReturn {
  /**
   * Ref to attach to the element you want to make magnetic
   * Must be attached to a DOM element
   */
  ref: React.RefObject<any>;
  
  /**
   * Motion value for X translation
   * Use with style prop on motion components
   */
  x: MotionValue<number>;
  
  /**
   * Motion value for Y translation
   * Use with style prop on motion components
   */
  y: MotionValue<number>;
}

/**
 * Hook for creating magnetic effect on elements
 * 
 * @param options - Configuration options for the magnetic effect
 * @returns Object containing ref and motion values (x, y)
 */
export function useMagneticEffect(
  options: UseMagneticEffectOptions = {}
): UseMagneticEffectReturn {
  const {
    strength = 0.2,
    radius = 100,
    disabled = false,
  } = options;

  // Ref to attach to the element
  const ref = useRef<any>(null);
  
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

    /**
     * Handles mouse move events to calculate magnetic effect
     */
    const handleMouseMove = (event: MouseEvent) => {
      // Get element's bounding rectangle
      const rect = element.getBoundingClientRect();
      
      // Calculate element center
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;
      
      // Calculate cursor position relative to element center
      const deltaX = event.clientX - elementCenterX;
      const deltaY = event.clientY - elementCenterY;
      
      // Calculate distance from cursor to element center
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Check if cursor is within the magnetic radius
      if (distance < radius) {
        // Calculate translation based on distance and strength
        // Translation is proportional to distance, up to maximum of 20px
        const translationX = deltaX * strength;
        const translationY = deltaY * strength;
        
        // Cap translation at 20px as per requirement 3.5
        const maxTranslation = 20;
        const cappedX = Math.max(-maxTranslation, Math.min(maxTranslation, translationX));
        const cappedY = Math.max(-maxTranslation, Math.min(maxTranslation, translationY));
        
        // Update motion values
        x.set(cappedX);
        y.set(cappedY);
      } else {
        // Cursor is outside radius - reset to center
        x.set(0);
        y.set(0);
      }
    };

    /**
     * Handles mouse leave events to reset element position
     */
    const handleMouseLeave = () => {
      // Reset to center position when mouse leaves
      x.set(0);
      y.set(0);
    };

    // Add event listeners
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup: remove event listeners on unmount
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, radius, disabled, x, y]);

  return {
    ref,
    x,
    y,
  };
}
