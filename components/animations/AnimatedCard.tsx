"use client";

/**
 * AnimatedCard Component
 * 
 * An enhanced card component with micro-interactions including:
 * - Hover lift effect (8px vertical translation)
 * - Shadow depth increase on hover
 * - Image zoom on hover (110% scale)
 * - Configurable effects via props
 * 
 * Features:
 * - Smooth hover animations with lift and shadow
 * - Image zoom effect for visual engagement
 * - Configurable effects (can disable individual animations)
 * - Respects reduced motion preferences
 * - Full TypeScript support
 * 
 * Requirements: 3.2, 3.3, 3.4
 * 
 * @example
 * ```tsx
 * // Basic usage with all effects
 * <AnimatedCard>
 *   <img src="/image.jpg" alt="Card image" />
 *   <h3>Card Title</h3>
 *   <p>Card description</p>
 * </AnimatedCard>
 * 
 * // With specific effects disabled
 * <AnimatedCard hoverLift={false}>
 *   <div>Content without lift effect</div>
 * </AnimatedCard>
 * 
 * // Custom styling
 * <AnimatedCard className="rounded-lg overflow-hidden">
 *   <img src="/image.jpg" alt="Card image" />
 *   <div className="p-4">
 *     <h3>Card Title</h3>
 *   </div>
 * </AnimatedCard>
 * ```
 */

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

/**
 * Props for the AnimatedCard component
 */
export interface AnimatedCardProps {
  /**
   * Card content
   */
  children: React.ReactNode;
  
  /**
   * Additional CSS classes to apply
   */
  className?: string;
  
  /**
   * Whether to enable hover scale effect
   * Note: This is reserved for future use, currently not implemented
   * 
   * Default: true
   */
  hoverScale?: boolean;
  
  /**
   * Whether to enable hover lift effect (8px vertical translation)
   * 
   * Default: true
   */
  hoverLift?: boolean;
  
  /**
   * Whether to enable image zoom effect on hover (110% scale)
   * 
   * Default: true
   */
  imageZoom?: boolean;
}

/**
 * AnimatedCard component with hover lift and image zoom effects
 * 
 * This component wraps card content and applies smooth hover animations.
 * The lift effect translates the card upward, the shadow deepens, and
 * any images within the card zoom in slightly for visual interest.
 * 
 * @param props - Component props
 * @returns Animated card wrapper
 */
export function AnimatedCard({
  children,
  className = "",
  hoverScale = true,
  hoverLift = true,
  imageZoom = true,
}: AnimatedCardProps): React.JSX.Element {
  // Detect reduced motion preference
  const prefersReducedMotion = useReducedMotion();

  // Card animation variants
  const cardVariants = {
    rest: {
      y: 0,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      y: hoverLift && !prefersReducedMotion ? -8 : 0,
      boxShadow: hoverLift && !prefersReducedMotion
        ? "0 20px 25px rgba(0, 0, 0, 0.15)"
        : "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: [0.4, 0, 0.2, 1] as const, // easeOut cubic bezier
      },
    },
  };

  // Image zoom animation variants
  const imageVariants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: imageZoom && !prefersReducedMotion ? 1.1 : 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: [0.4, 0, 0.2, 1] as const, // easeOut cubic bezier
      },
    },
  };

  return (
    <motion.div
      className={cn("relative", className)}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
    >
      {/* Process children to add image zoom effect */}
      {React.Children.map(children, (child) => {
        // Check if child is an img element
        if (React.isValidElement(child) && child.type === "img") {
          return (
            <motion.div
              className="overflow-hidden"
              variants={imageVariants}
            >
              {child}
            </motion.div>
          );
        }
        
        // Check if child is a div/element that might contain an image
        if (React.isValidElement(child) && typeof child.type !== "string") {
          return child;
        }
        
        // For other elements, check if they have an img child
        if (React.isValidElement(child)) {
          const childProps = child.props as { children?: React.ReactNode };
          
          if (childProps.children) {
            const hasImage = React.Children.toArray(childProps.children).some(
              (grandchild) =>
                React.isValidElement(grandchild) && grandchild.type === "img"
            );
            
            if (hasImage) {
              // Clone the child and wrap images in motion.div
              return React.cloneElement(child as React.ReactElement<any>, {
                children: React.Children.map(childProps.children, (grandchild) => {
                  if (React.isValidElement(grandchild) && grandchild.type === "img") {
                    return (
                      <motion.div
                        className="overflow-hidden"
                        variants={imageVariants}
                      >
                        {grandchild}
                      </motion.div>
                    );
                  }
                  return grandchild;
                }),
              });
            }
          }
        }
        
        return child;
      })}
    </motion.div>
  );
}
