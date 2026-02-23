# Implementation Plan: Micro Interactions

## Overview

This implementation plan breaks down the micro interactions feature into discrete, incremental tasks. The approach follows a bottom-up strategy: first establishing the animation foundation (library integration, hooks, variants), then building reusable components, and finally integrating animations throughout the site. Each task builds on previous work, with testing integrated throughout to catch issues early.

## Tasks

- [x] 1. Install Framer Motion and set up animation foundation
  - Install framer-motion package via npm/yarn
  - Create animation configuration types in `types/animations.ts`
  - Set up MotionProvider with ReducedMotionContext in `lib/animations/MotionProvider.tsx`
  - Wrap the app with MotionProvider in the root layout
  - _Requirements: 1.1, 1.2, 1.3_

- [ ]* 1.1 Verify Framer Motion installation
  - Test that framer-motion is in package.json dependencies
  - Test that MotionProvider renders without errors
  - _Requirements: 1.1, 1.4_

- [x] 2. Create animation variants library
  - Create `lib/animations/variants.ts` with all standard variants (fadeInUp, fadeInScale, slideInLeft, slideInRight, staggerContainer, buttonVariants, cardHover)
  - Export all variants with TypeScript types
  - _Requirements: 1.4_

- [ ]* 2.1 Write unit tests for variants library
  - Test that all variants export correctly
  - Test that variant objects have valid structure
  - Test that transition durations are within reasonable ranges
  - _Requirements: 1.4_

- [ ] 3. Implement core animation hooks
  - [x] 3.1 Create useReducedMotion hook in `lib/animations/hooks/useReducedMotion.ts`
    - Detect prefers-reduced-motion media query
    - Return boolean indicating user preference
    - _Requirements: 11.1, 11.2_

  - [x] 3.2 Create useScrollAnimation hook in `lib/animations/hooks/useScrollAnimation.ts`
    - Implement Intersection Observer logic
    - Return ref, controls, and isInView state
    - Support threshold and triggerOnce options
    - _Requirements: 2.1, 2.2, 2.4, 2.5_

  - [ ]* 3.3 Write property test for useScrollAnimation
    - **Property 1: Viewport entry triggers animation state transition**
    - **Validates: Requirements 2.1, 2.2**

  - [ ]* 3.4 Write property test for scroll animation idempotence
    - **Property 3: Scroll animations are idempotent**
    - **Validates: Requirements 2.4**

  - [x] 3.5 Create useCountUp hook in `lib/animations/hooks/useCountUp.ts`
    - Implement counter animation with easing
    - Support start, end, duration, formatting options
    - Return formatted value and control functions
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [ ]* 3.6 Write property test for counter reaching target
    - **Property 9: Counter animation reaches target value**
    - **Validates: Requirements 7.1, 7.3**

  - [ ]* 3.7 Write property test for counter easing
    - **Property 10: Counter easing decelerates**
    - **Validates: Requirements 7.2**

  - [ ]* 3.8 Write property test for number formatting
    - **Property 11: Number formatting is preserved during animation**
    - **Validates: Requirements 7.4**

- [ ] 4. Implement advanced interaction hooks
  - [x] 4.1 Create useMagneticEffect hook in `lib/animations/hooks/useMagneticEffect.ts`
    - Track cursor position relative to element
    - Calculate translation based on distance and strength
    - Return ref and motion values (x, y)
    - _Requirements: 3.5_

  - [ ]* 4.2 Write property test for magnetic translation
    - **Property 5: Magnetic effect translation is proportional to distance**
    - **Validates: Requirements 3.5**

  - [x] 4.3 Create useParallax hook in `lib/animations/hooks/useParallax.ts`
    - Track scroll position
    - Calculate translation based on speed multiplier
    - Return ref and motion value (y or x)
    - _Requirements: 10.1, 10.2, 10.3_

  - [ ]* 4.4 Write property test for parallax translation
    - **Property 14: Parallax translation is proportional to scroll**
    - **Validates: Requirements 10.1, 10.2**

- [ ] 5. Create base animation components
  - [x] 5.1 Create AnimatedSection component in `components/animations/AnimatedSection.tsx`
    - Use useScrollAnimation hook
    - Apply variant based on prop
    - Support delay and threshold configuration
    - _Requirements: 2.1, 2.2, 2.3_

  - [ ]* 5.2 Write unit tests for AnimatedSection
    - Test variant application
    - Test threshold configuration
    - Test delay prop
    - _Requirements: 2.1, 2.2_

  - [x] 5.3 Create StaggerContainer component in `components/animations/StaggerContainer.tsx`
    - Apply stagger animation to children
    - Support configurable stagger delay
    - _Requirements: 2.3_

  - [ ]* 5.4 Write property test for stagger timing
    - **Property 2: Stagger delay is applied sequentially**
    - **Validates: Requirements 2.3, 8.2, 13.3**

- [x] 6. Checkpoint - Test scroll animations
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Create interactive button components
  - [x] 7.1 Create AnimatedButton component in `components/animations/AnimatedButton.tsx`
    - Implement hover scale and shadow effects
    - Implement tap/click scale-down animation
    - Support magnetic effect via prop
    - Support primary, secondary, and CTA variants
    - _Requirements: 3.1, 4.1, 15.1, 15.2, 15.3_

  - [ ]* 7.2 Write property test for hover reversibility
    - **Property 4: Hover state is reversible**
    - **Validates: Requirements 3.4**

  - [ ]* 7.3 Write property test for click animation
    - **Property 6: Click animation completes and returns to rest state**
    - **Validates: Requirements 4.1**

  - [ ]* 7.4 Write unit tests for AnimatedButton variants
    - Test primary, secondary, CTA styling
    - Test magnetic prop enables magnetic effect
    - Test reduced motion disables animations
    - _Requirements: 3.1, 4.1, 11.1_

- [x] 8. Create card and image components
  - [x] 8.1 Create AnimatedCard component in `components/animations/AnimatedCard.tsx`
    - Implement hover lift effect (8px vertical translation)
    - Implement shadow depth increase on hover
    - Implement image zoom on hover (110% scale)
    - Support configuration props for each effect
    - _Requirements: 3.2, 3.3, 3.4_

  - [ ]* 8.2 Write unit tests for AnimatedCard
    - Test hover lift effect
    - Test image zoom effect
    - Test shadow changes
    - Test prop-based configuration
    - _Requirements: 3.2, 3.3_

- [ ] 9. Create text animation components
  - [x] 9.1 Create AnimatedText component in `components/animations/AnimatedText.tsx`
    - Split text into words or characters
    - Apply stagger reveal animation
    - Support word, character, and line variants
    - _Requirements: 8.1, 8.2, 8.3_

  - [ ]* 9.2 Write property test for text animation completion
    - **Property 12: Text animation completes to full visibility**
    - **Validates: Requirements 8.3**

  - [x] 9.3 Create CountUpNumber component in `components/animations/CountUpNumber.tsx`
    - Use useCountUp hook
    - Trigger on viewport entry by default
    - Support all formatting options
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [ ]* 9.4 Write unit tests for CountUpNumber
    - Test viewport trigger
    - Test formatting options (prefix, suffix, decimals)
    - Test manual trigger
    - _Requirements: 7.1, 7.4_

- [ ] 10. Create form input components
  - [x] 10.1 Create AnimatedInput component in `components/animations/AnimatedInput.tsx`
    - Implement focus border and glow animation
    - Implement floating label animation
    - Implement validation error shake animation
    - Implement success indicator animation
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [ ]* 10.2 Write property test for validation error shake
    - **Property 13: Input validation error triggers shake animation**
    - **Validates: Requirements 9.3**

  - [ ]* 10.3 Write unit tests for AnimatedInput
    - Test focus animation
    - Test floating label behavior
    - Test error state
    - Test success state
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [x] 11. Checkpoint - Test interactive components
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 12. Create page transition system
  - [x] 12.1 Create PageTransition component in `components/animations/PageTransition.tsx`
    - Implement fade out on route change
    - Implement fade in on new page load
    - Prevent simultaneous transitions
    - _Requirements: 5.1, 5.2, 5.4_

  - [ ]* 12.2 Write property test for transition exclusivity
    - **Property 7: Page transitions are mutually exclusive**
    - **Validates: Requirements 5.4**

  - [x] 12.3 Integrate PageTransition in root layout
    - Wrap page content with PageTransition
    - Test navigation between pages
    - _Requirements: 5.1, 5.2_

- [ ] 13. Create loading state components
  - [x] 13.1 Create SkeletonLoader component in `components/animations/SkeletonLoader.tsx`
    - Implement pulsing animation (1.5s cycle)
    - Support different shapes (text, circle, rectangle)
    - Fade out on loading complete
    - _Requirements: 6.1, 6.4_

  - [ ]* 13.2 Write property test for loading state persistence
    - **Property 8: Loading state displays until completion**
    - **Validates: Requirements 6.1, 6.4**

  - [x] 13.3 Create ImageWithLoader component in `components/animations/ImageWithLoader.tsx`
    - Display blur-up placeholder while loading
    - Transition to full image on load
    - _Requirements: 6.2_

  - [ ]* 13.4 Write unit tests for loading components
    - Test skeleton pulse animation
    - Test fade out on completion
    - Test image placeholder transition
    - _Requirements: 6.1, 6.2, 6.4_

- [ ] 14. Enhance navigation components
  - [x] 14.1 Add dropdown animations to Navbar
    - Implement fade in and slide down on open
    - Implement fade out and slide up on close
    - Add stagger animation to dropdown items
    - _Requirements: 13.1, 13.2, 13.3_

  - [ ]* 14.2 Write property test for dropdown animation direction
    - **Property 18: Dropdown animation direction matches open/close state**
    - **Validates: Requirements 13.1, 13.2**

  - [x] 14.3 Add mobile menu slide animation
    - Implement slide in from right on open
    - Implement slide out to right on close
    - _Requirements: 13.4_

  - [ ]* 14.4 Write unit tests for navigation animations
    - Test dropdown open/close
    - Test item stagger
    - Test mobile menu slide
    - _Requirements: 13.1, 13.2, 13.3, 13.4_

- [ ] 15. Enhance carousel components
  - [x] 15.1 Add spring animations to carousels
    - Configure Embla Carousel with spring physics
    - Add hover effects to carousel controls
    - Implement auto-play pause on interaction
    - _Requirements: 12.1, 12.2, 12.3, 12.4_

  - [ ]* 15.2 Write property test for auto-play pause
    - **Property 17: Carousel auto-play pauses on interaction**
    - **Validates: Requirements 12.4**

  - [ ]* 15.3 Write unit tests for carousel enhancements
    - Test control hover effects
    - Test auto-play pause/resume
    - Test drag momentum
    - _Requirements: 12.2, 12.3, 12.4_

- [x] 16. Enhance technology marquee
  - [x] 16.1 Add continuous scroll animation to marquee
    - Implement constant speed scrolling
    - Duplicate content for seamless looping
    - Add pause on hover
    - _Requirements: 14.1, 14.2, 14.3, 14.4_

  - [ ]* 16.2 Write property test for marquee looping
    - **Property 19: Marquee loops seamlessly**
    - **Validates: Requirements 14.3**

  - [ ]* 16.3 Write property test for marquee pause
    - **Property 20: Marquee pauses on hover**
    - **Validates: Requirements 14.2**

- [x] 17. Checkpoint - Test enhanced components
  - Ensure all tests pass, ask the user if questions arise.

- [x] 18. Integrate animations on Home page
  - [x] 18.1 Add scroll animations to hero section
    - Wrap hero heading with AnimatedText
    - Wrap hero description with AnimatedSection
    - Add animated CTA buttons
    - _Requirements: 8.1, 8.2, 15.1, 15.2_

  - [x] 18.2 Add animations to identity section
    - Wrap section content with AnimatedSection
    - Add stagger to feature cards
    - _Requirements: 2.1, 2.3_

  - [x] 18.3 Add animations to services section
    - Replace service cards with AnimatedCard
    - Add hover lift and image zoom effects
    - _Requirements: 3.2, 3.3_

  - [x] 18.4 Add animations to stats section
    - Replace static numbers with CountUpNumber
    - Trigger on viewport entry
    - _Requirements: 7.1, 7.3, 7.4_

  - [x] 18.5 Add animations to testimonials carousel
    - Enhance with spring animations
    - Add control hover effects
    - _Requirements: 12.1, 12.3_

  - [x] 18.6 Add parallax to hero background
    - Apply useParallax to background elements
    - Use subtle speed (0.3-0.5)
    - _Requirements: 10.1, 10.3_

- [x] 19. Integrate animations on Services page
  - [x] 19.1 Add scroll animations to service grid
    - Wrap service cards with AnimatedCard
    - Add stagger to grid items
    - _Requirements: 2.3, 3.2_

  - [x] 19.2 Add animations to service detail pages
    - Add AnimatedSection to content blocks
    - Add AnimatedText to headings
    - _Requirements: 2.1, 8.1_

- [x] 20. Integrate animations on About page
  - [x] 20.1 Add scroll animations to team section
    - Wrap team member cards with AnimatedCard
    - Add stagger to team grid
    - _Requirements: 2.3, 3.2_

  - [x] 20.2 Add parallax to about hero
    - Apply useParallax to background
    - _Requirements: 10.1_

- [-] 21. Integrate animations on remaining pages
  - [x] 21.1 Add animations to Blog/Resources page
    - Wrap blog cards with AnimatedCard
    - Add scroll animations to content
    - _Requirements: 2.1, 3.2_

  - [-] 21.2 Add animations to Careers page
    - Add AnimatedSection to job listings
    - Add stagger to benefits list
    - _Requirements: 2.1, 2.3_

  - [ ] 21.3 Add animations to Labs page
    - Add AnimatedCard to project cards
    - Add scroll animations to content
    - _Requirements: 2.1, 3.2_

- [ ] 22. Implement reduced motion support
  - [ ] 22.1 Update all animation components to respect reduced motion
    - Check useReducedMotion in all components
    - Set duration to 0 for non-essential animations
    - Reduce duration by 50% for essential animations
    - _Requirements: 11.1, 11.2, 11.3_

  - [ ]* 22.2 Write property test for reduced motion disabling animations
    - **Property 15: Reduced motion disables non-essential animations**
    - **Validates: Requirements 11.1, 11.2**

  - [ ]* 22.3 Write property test for reduced motion preserving essential animations
    - **Property 16: Reduced motion preserves essential animations with reduced duration**
    - **Validates: Requirements 11.3**

  - [ ]* 22.4 Write unit tests for reduced motion
    - Test that animations are disabled when reduced motion is enabled
    - Test that essential animations have reduced duration
    - Test media query detection
    - _Requirements: 11.1, 11.2, 11.3_

- [ ] 23. Performance optimization
  - [ ] 23.1 Optimize animation performance
    - Ensure all animations use transform and opacity only
    - Add will-change hints where appropriate
    - Implement performance monitoring
    - _Requirements: 11.4, 11.5_

  - [ ] 23.2 Implement lazy loading for animation components
    - Use dynamic imports for non-critical animations
    - Defer parallax and magnetic effects until after initial render
    - _Requirements: 1.2_

  - [ ]* 23.3 Run performance tests
    - Test 20 simultaneous scroll animations
    - Test rapid hover interactions
    - Measure bundle size increase
    - Verify 60fps target
    - _Requirements: 11.4, 11.5_

- [ ] 24. Final checkpoint and polish
  - [ ] 24.1 Cross-browser testing
    - Test in Chrome, Firefox, Safari
    - Test on mobile devices
    - Fix any browser-specific issues
    - _Requirements: All_

  - [ ] 24.2 Accessibility audit
    - Test with screen reader
    - Test keyboard navigation
    - Verify reduced motion works correctly
    - Ensure focus indicators remain visible
    - _Requirements: 8.4, 11.1, 11.2_

  - [ ]* 24.3 Final integration tests
    - Test complete user flows with animations
    - Test page transitions between all pages
    - Test form interactions end-to-end
    - _Requirements: All_

  - [ ] 24.4 Documentation
    - Document animation variants and usage
    - Document custom hooks API
    - Add examples to component documentation
    - _Requirements: All_

- [ ] 25. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- Property tests validate universal correctness properties across all inputs
- Unit tests validate specific examples, edge cases, and integration points
- Animation performance is critical - all animations must target 60fps
- Accessibility is non-negotiable - reduced motion must be fully supported
