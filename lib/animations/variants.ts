/**
 * Animation Variants Library
 * 
 * This file contains reusable Framer Motion animation variants for common
 * animation patterns throughout the application. All variants use GPU-accelerated
 * properties (transform, opacity) for optimal performance.
 * 
 * Requirements: 1.4
 */

import type { Variant } from "@/types/animations";

/**
 * Fade in from bottom animation
 * 
 * Element starts 20px below its final position with 0 opacity,
 * then animates to its natural position with full opacity.
 * 
 * @example
 * ```tsx
 * <motion.div variants={fadeInUp} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 * ```
 */
export const fadeInUp: Variant = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

/**
 * Fade in with scale animation
 * 
 * Element starts slightly smaller (95%) with 0 opacity,
 * then scales up to full size with full opacity.
 * 
 * @example
 * ```tsx
 * <motion.div variants={fadeInScale} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 * ```
 */
export const fadeInScale: Variant = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    }
  }
};

/**
 * Slide in from left animation
 * 
 * Element starts 30px to the left of its final position with 0 opacity,
 * then slides to its natural position with full opacity.
 * 
 * @example
 * ```tsx
 * <motion.div variants={slideInLeft} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 * ```
 */
export const slideInLeft: Variant = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

/**
 * Slide in from right animation
 * 
 * Element starts 30px to the right of its final position with 0 opacity,
 * then slides to its natural position with full opacity.
 * 
 * @example
 * ```tsx
 * <motion.div variants={slideInRight} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 * ```
 */
export const slideInRight: Variant = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

/**
 * Stagger container animation
 * 
 * Container that orchestrates sequential animations of its children.
 * Children will animate with a 0.1s delay between each, starting 0.2s
 * after the container begins animating.
 * 
 * @example
 * ```tsx
 * <motion.div variants={staggerContainer} initial="hidden" animate="visible">
 *   <motion.div variants={fadeInUp}>Child 1</motion.div>
 *   <motion.div variants={fadeInUp}>Child 2</motion.div>
 *   <motion.div variants={fadeInUp}>Child 3</motion.div>
 * </motion.div>
 * ```
 */
export const staggerContainer: Variant = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

/**
 * Button interaction variants
 * 
 * Defines three states for button interactions:
 * - rest: Normal state
 * - hover: Scales up by 5% when hovered
 * - tap: Scales down to 95% when clicked
 * 
 * @example
 * ```tsx
 * <motion.button 
 *   variants={buttonVariants}
 *   initial="rest"
 *   whileHover="hover"
 *   whileTap="tap"
 * >
 *   Click me
 * </motion.button>
 * ```
 */
export const buttonVariants: Variant = {
  rest: { 
    scale: 1 
  },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  },
  tap: { 
    scale: 0.95,
    transition: { 
      duration: 0.1 
    }
  }
};

/**
 * Card hover animation
 * 
 * Defines two states for card hover interactions:
 * - rest: Normal state with subtle shadow
 * - hover: Lifts up 8px and increases shadow depth
 * 
 * @example
 * ```tsx
 * <motion.div 
 *   variants={cardHover}
 *   initial="rest"
 *   whileHover="hover"
 * >
 *   Card content
 * </motion.div>
 * ```
 */
export const cardHover: Variant = {
  rest: { 
    y: 0, 
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)" 
  },
  hover: { 
    y: -8,
    boxShadow: "0 20px 25px rgba(0,0,0,0.15)",
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  }
};

/**
 * Dropdown menu animation
 * 
 * Defines animation states for dropdown menus:
 * - hidden: Invisible, slightly above final position
 * - visible: Fully visible, slides down to natural position
 * 
 * Used for navigation dropdowns and similar UI elements.
 * 
 * @example
 * ```tsx
 * <motion.div 
 *   variants={dropdownVariants}
 *   initial="hidden"
 *   animate="visible"
 *   exit="hidden"
 * >
 *   Dropdown content
 * </motion.div>
 * ```
 */
export const dropdownVariants: Variant = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.15,
      ease: "easeIn"
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

/**
 * Dropdown item stagger animation
 * 
 * Container variant for dropdown menus that staggers the appearance
 * of individual items. Items appear sequentially with a 30ms delay
 * between each, as specified in Requirements 13.3.
 * 
 * @example
 * ```tsx
 * <motion.div variants={dropdownStagger} initial="hidden" animate="visible">
 *   <motion.a variants={dropdownItemVariants}>Item 1</motion.a>
 *   <motion.a variants={dropdownItemVariants}>Item 2</motion.a>
 * </motion.div>
 * ```
 */
export const dropdownStagger: Variant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03, // 30ms between items (Requirements 13.3)
      delayChildren: 0.05
    }
  }
};

/**
 * Dropdown item animation
 * 
 * Individual item animation for use within dropdown menus.
 * Items fade in and slide down slightly.
 * 
 * @example
 * ```tsx
 * <motion.a variants={dropdownItemVariants}>
 *   Menu Item
 * </motion.a>
 * ```
 */
export const dropdownItemVariants: Variant = {
  hidden: {
    opacity: 0,
    y: -5
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

/**
 * Mobile menu slide animation
 * 
 * Defines animation states for mobile menu:
 * - hidden: Off-screen to the right
 * - visible: Slides in from the right over 300ms
 * 
 * Used for mobile navigation menu as specified in Requirements 13.4.
 * 
 * @example
 * ```tsx
 * <motion.div 
 *   variants={mobileMenuVariants}
 *   initial="hidden"
 *   animate="visible"
 *   exit="hidden"
 * >
 *   Mobile menu content
 * </motion.div>
 * ```
 */
export const mobileMenuVariants: Variant = {
  hidden: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

/**
 * All available animation variants
 * 
 * Exported as a collection for easy access and documentation.
 */
export const variants = {
  fadeInUp,
  fadeInScale,
  slideInLeft,
  slideInRight,
  staggerContainer,
  buttonVariants,
  cardHover,
  dropdownVariants,
  dropdownStagger,
  dropdownItemVariants,
  mobileMenuVariants,
} as const;

/**
 * Type for variant names
 */
export type VariantName = keyof typeof variants;
