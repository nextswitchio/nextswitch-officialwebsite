# Design Document: Micro Interactions

## Overview

This design outlines the implementation of micro interactions for the Next Switch Ltd corporate website. The system will use Framer Motion as the primary animation library, integrated with React 19 and Next.js 16. The architecture emphasizes performance, accessibility, and reusability through a composable system of animation primitives, custom hooks, and higher-order components.

The design follows these core principles:
- **Performance First**: All animations target 60fps using GPU-accelerated properties (transform, opacity)
- **Accessibility**: Respect prefers-reduced-motion and maintain WCAG compliance
- **Composability**: Reusable animation variants and hooks that can be combined
- **Progressive Enhancement**: Animations enhance but don't block core functionality
- **Type Safety**: Full TypeScript support for all animation configurations

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Next.js Application                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌────────────────────────────────────────────────────┐    │
│  │           Animation Provider Layer                  │    │
│  │  - MotionConfig (global settings)                  │    │
│  │  - ReducedMotionContext                            │    │
│  │  - Performance monitoring                          │    │
│  └────────────────────────────────────────────────────┘    │
│                          │                                   │
│  ┌────────────────────────────────────────────────────┐    │
│  │         Animation Primitives Layer                  │    │
│  │  - Motion components (motion.div, etc.)            │    │
│  │  - Animation variants library                      │    │
│  │  - Transition presets                              │    │
│  └────────────────────────────────────────────────────┘    │
│                          │                                   │
│  ┌────────────────────────────────────────────────────┐    │
│  │            Custom Hooks Layer                       │    │
│  │  - useScrollAnimation                              │    │
│  │  - useHoverAnimation                               │    │
│  │  - useCountUp                                      │    │
│  │  - useMagneticEffect                               │    │
│  │  - useParallax                                     │    │
│  │  - useReducedMotion                                │    │
│  └────────────────────────────────────────────────────┘    │
│                          │                                   │
│  ┌────────────────────────────────────────────────────┐    │
│  │         Component Enhancement Layer                 │    │
│  │  - AnimatedSection (scroll triggers)               │    │
│  │  - AnimatedButton (hover + click)                  │    │
│  │  - AnimatedCard (hover effects)                    │    │
│  │  - StaggerContainer (sequential reveals)          │    │
│  │  - PageTransition (route changes)                  │    │
│  │  - AnimatedText (text reveals)                     │    │
│  └────────────────────────────────────────────────────┘    │
│                          │                                   │
│  ┌────────────────────────────────────────────────────┐    │
│  │              Page Components                        │    │
│  │  - Home, About, Services, etc.                     │    │
│  │  - Enhanced with animation components              │    │
│  └────────────────────────────────────────────────────┘    │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

### Animation Flow

1. **Initialization**: MotionConfig provider wraps the app, setting global animation preferences
2. **Detection**: useReducedMotion hook detects user motion preferences
3. **Trigger**: Intersection Observer or user interaction triggers animation
4. **Execution**: Framer Motion animates using GPU-accelerated properties
5. **Completion**: Animation completes, component reaches final state

### Key Architectural Decisions

**Decision 1: Framer Motion as Primary Library**
- Rationale: Industry-standard, excellent React integration, declarative API, built-in gesture support
- Alternative considered: React Spring (more complex API, steeper learning curve)

**Decision 2: Intersection Observer for Scroll Animations**
- Rationale: Native browser API, excellent performance, widely supported
- Alternative considered: Scroll event listeners (poor performance, requires throttling)

**Decision 3: CSS Transform/Opacity for Animations**
- Rationale: GPU-accelerated, 60fps performance, composited layers
- Alternative considered: Animating width/height/position (causes layout thrashing)

**Decision 4: Variant-Based Animation System**
- Rationale: Reusable, declarative, easy to maintain and test
- Alternative considered: Inline animation objects (harder to maintain, not reusable)

## Components and Interfaces

### Core Animation Provider

```typescript
// lib/animations/MotionProvider.tsx
interface MotionProviderProps {
  children: React.ReactNode;
}

// Wraps app with MotionConfig and reduced motion detection
export function MotionProvider({ children }: MotionProviderProps): JSX.Element

// Context for reduced motion preference
interface ReducedMotionContextValue {
  prefersReducedMotion: boolean;
}

export const ReducedMotionContext: React.Context<ReducedMotionContextValue>
```

### Animation Variants Library

```typescript
// lib/animations/variants.ts

// Fade in from bottom
export const fadeInUp: Variant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Fade in with scale
export const fadeInScale: Variant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

// Slide in from left
export const slideInLeft: Variant = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Slide in from right
export const slideInRight: Variant = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Stagger container
export const staggerContainer: Variant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Button hover/tap
export const buttonVariants: Variant = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
}

// Card hover
export const cardHover: Variant = {
  rest: { y: 0, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" },
  hover: { 
    y: -8,
    boxShadow: "0 20px 25px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
}
```

### Custom Hooks

```typescript
// lib/animations/hooks/useScrollAnimation.ts
interface UseScrollAnimationOptions {
  threshold?: number;      // Default: 0.1
  triggerOnce?: boolean;   // Default: true
  rootMargin?: string;     // Default: "0px"
}

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  controls: AnimationControls;
  isInView: boolean;
}

export function useScrollAnimation(
  options?: UseScrollAnimationOptions
): UseScrollAnimationReturn

// Usage:
// const { ref, controls } = useScrollAnimation({ threshold: 0.2 });
// <motion.div ref={ref} animate={controls} variants={fadeInUp} />
```

```typescript
// lib/animations/hooks/useCountUp.ts
interface UseCountUpOptions {
  start?: number;          // Default: 0
  end: number;
  duration?: number;       // Default: 2000ms
  decimals?: number;       // Default: 0
  separator?: string;      // Default: ","
  prefix?: string;         // Default: ""
  suffix?: string;         // Default: ""
  easing?: (t: number) => number;  // Default: easeOutExpo
}

interface UseCountUpReturn {
  value: string;           // Formatted current value
  start: () => void;       // Manually trigger animation
  reset: () => void;       // Reset to start value
}

export function useCountUp(options: UseCountUpOptions): UseCountUpReturn

// Usage:
// const { value, start } = useCountUp({ end: 1000, duration: 2000 });
// useEffect(() => { if (inView) start(); }, [inView]);
```

```typescript
// lib/animations/hooks/useMagneticEffect.ts
interface UseMagneticEffectOptions {
  strength?: number;       // Default: 0.2 (20% of distance)
  radius?: number;         // Default: 100px
  disabled?: boolean;      // Default: false
}

interface UseMagneticEffectReturn {
  ref: React.RefObject<HTMLElement>;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export function useMagneticEffect(
  options?: UseMagneticEffectOptions
): UseMagneticEffectReturn

// Usage:
// const { ref, x, y } = useMagneticEffect({ strength: 0.3 });
// <motion.button ref={ref} style={{ x, y }} />
```

```typescript
// lib/animations/hooks/useParallax.ts
interface UseParallaxOptions {
  speed?: number;          // Default: 0.5 (50% of scroll speed)
  direction?: "vertical" | "horizontal";  // Default: "vertical"
  disabled?: boolean;      // Default: false
}

interface UseParallaxReturn {
  ref: React.RefObject<HTMLElement>;
  y: MotionValue<number>;  // or x for horizontal
}

export function useParallax(
  options?: UseParallaxOptions
): UseParallaxReturn

// Usage:
// const { ref, y } = useParallax({ speed: 0.3 });
// <motion.div ref={ref} style={{ y }} />
```

```typescript
// lib/animations/hooks/useReducedMotion.ts
export function useReducedMotion(): boolean

// Returns true if user prefers reduced motion
// Usage:
// const prefersReducedMotion = useReducedMotion();
// const duration = prefersReducedMotion ? 0 : 0.5;
```

### Component Wrappers

```typescript
// components/animations/AnimatedSection.tsx
interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: "fadeInUp" | "fadeInScale" | "slideInLeft" | "slideInRight";
  delay?: number;
  className?: string;
  threshold?: number;
}

export function AnimatedSection(props: AnimatedSectionProps): JSX.Element

// Wraps content with scroll-triggered animation
// Usage:
// <AnimatedSection variant="fadeInUp">
//   <h2>Content</h2>
// </AnimatedSection>
```

```typescript
// components/animations/AnimatedButton.tsx
interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "cta";
  magnetic?: boolean;
  className?: string;
}

export function AnimatedButton(props: AnimatedButtonProps): JSX.Element

// Button with hover, tap, and optional magnetic effects
// Usage:
// <AnimatedButton variant="cta" magnetic>
//   Get Started
// </AnimatedButton>
```

```typescript
// components/animations/AnimatedCard.tsx
interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: boolean;    // Default: true
  hoverLift?: boolean;     // Default: true
  imageZoom?: boolean;     // Default: true
}

export function AnimatedCard(props: AnimatedCardProps): JSX.Element

// Card with hover lift and image zoom effects
// Usage:
// <AnimatedCard hoverLift imageZoom>
//   <img src="..." />
//   <h3>Title</h3>
// </AnimatedCard>
```

```typescript
// components/animations/StaggerContainer.tsx
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;   // Default: 0.1
  className?: string;
}

export function StaggerContainer(props: StaggerContainerProps): JSX.Element

// Container that staggers child animations
// Usage:
// <StaggerContainer staggerDelay={0.15}>
//   <motion.div variants={fadeInUp}>Item 1</motion.div>
//   <motion.div variants={fadeInUp}>Item 2</motion.div>
// </StaggerContainer>
```

```typescript
// components/animations/AnimatedText.tsx
interface AnimatedTextProps {
  text: string;
  variant?: "word" | "character" | "line";
  className?: string;
  delay?: number;
  staggerDelay?: number;   // Default: 0.05
}

export function AnimatedText(props: AnimatedTextProps): JSX.Element

// Text with staggered reveal animation
// Usage:
// <AnimatedText text="Welcome to Next Switch" variant="word" />
```

```typescript
// components/animations/PageTransition.tsx
interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition(props: PageTransitionProps): JSX.Element

// Wraps page content with fade transition
// Usage in layout:
// <PageTransition>
//   {children}
// </PageTransition>
```

```typescript
// components/animations/CountUpNumber.tsx
interface CountUpNumberProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  triggerOnView?: boolean;  // Default: true
}

export function CountUpNumber(props: CountUpNumberProps): JSX.Element

// Animated number counter
// Usage:
// <CountUpNumber end={1000} suffix="+" duration={2000} />
```

### Form Input Components

```typescript
// components/animations/AnimatedInput.tsx
interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: boolean;
}

export function AnimatedInput(props: AnimatedInputProps): JSX.Element

// Input with floating label and validation animations
// Usage:
// <AnimatedInput 
//   label="Email" 
//   error={errors.email}
//   success={isValid}
// />
```

## Data Models

### Animation Configuration

```typescript
// types/animations.ts

// Global animation configuration
export interface AnimationConfig {
  reducedMotion: boolean;
  performanceMode: "high" | "balanced" | "low";
  enableParallax: boolean;
  enableMagnetic: boolean;
}

// Variant type (from Framer Motion)
export type Variant = {
  [key: string]: {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
    transition?: Transition;
    [key: string]: any;
  };
}

// Transition configuration
export interface Transition {
  duration?: number;
  delay?: number;
  ease?: string | number[];
  type?: "tween" | "spring" | "inertia";
  stiffness?: number;
  damping?: number;
  mass?: number;
  staggerChildren?: number;
  delayChildren?: number;
}

// Scroll animation state
export interface ScrollAnimationState {
  isInView: boolean;
  hasAnimated: boolean;
  progress: number;  // 0 to 1
}

// Magnetic effect state
export interface MagneticState {
  x: number;
  y: number;
  distance: number;
  isActive: boolean;
}
```

### Performance Monitoring

```typescript
// types/performance.ts

export interface AnimationPerformanceMetrics {
  fps: number;
  frameDrops: number;
  animationCount: number;
  timestamp: number;
}

export interface PerformanceThresholds {
  minFps: number;           // Default: 55
  maxAnimations: number;    // Default: 20
  degradeThreshold: number; // Default: 45fps
}
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Viewport entry triggers animation state transition

*For any* element with scroll animation, when it enters the viewport at the configured threshold, the animation state should transition from "hidden" to "visible".

**Validates: Requirements 2.1, 2.2**

### Property 2: Stagger delay is applied sequentially

*For any* stagger container with N children and stagger delay D, the Nth child's animation should start at time (N-1) × D after the container animation begins.

**Validates: Requirements 2.3, 8.2, 13.3**

### Property 3: Scroll animations are idempotent

*For any* element with scroll animation configured with triggerOnce=true, entering the viewport, leaving, and re-entering should not trigger a second animation—the element should remain in its animated state.

**Validates: Requirements 2.4**

### Property 4: Hover state is reversible

*For any* interactive element with hover animations, hovering then unhovering should return the element to its original state (position, scale, shadow, etc.).

**Validates: Requirements 3.4**

### Property 5: Magnetic effect translation is proportional to distance

*For any* magnetic element with strength S and cursor at distance D (where D < radius), the element's translation toward the cursor should be D × S, up to a maximum of 20px.

**Validates: Requirements 3.5**

### Property 6: Click animation completes and returns to rest state

*For any* button, clicking should trigger a scale-down animation to 95%, then return to 100% scale within the specified duration.

**Validates: Requirements 4.1**

### Property 7: Page transitions are mutually exclusive

*For any* navigation system, if a page transition is in progress, attempting to start another transition should be blocked or queued until the first completes.

**Validates: Requirements 5.4**

### Property 8: Loading state displays until completion

*For any* component with loading state, the skeleton loader should remain visible until the loading completes, then fade out.

**Validates: Requirements 6.1, 6.4**

### Property 9: Counter animation reaches target value

*For any* counter with start value S, end value E, and duration D, after D milliseconds, the displayed value should equal E.

**Validates: Requirements 7.1, 7.3**

### Property 10: Counter easing decelerates

*For any* counter animation using easeOut easing, the rate of change (delta per frame) should decrease monotonically over time.

**Validates: Requirements 7.2**

### Property 11: Number formatting is preserved during animation

*For any* counter animating a number with separators (e.g., 1,000), every intermediate value displayed should also be formatted with separators.

**Validates: Requirements 7.4**

### Property 12: Text animation completes to full visibility

*For any* text with reveal animation, after the animation completes, all characters should have opacity: 1 and be in their final positions.

**Validates: Requirements 8.3**

### Property 13: Input validation error triggers shake animation

*For any* input field with validation error, the error state should trigger a horizontal shake animation and display an error message.

**Validates: Requirements 9.3**

### Property 14: Parallax translation is proportional to scroll

*For any* parallax element with speed S, scrolling a distance D should translate the element by D × S.

**Validates: Requirements 10.1, 10.2**

### Property 15: Reduced motion disables non-essential animations

*For any* animation system with reduced motion enabled, all non-essential animations should have duration: 0 or be completely disabled.

**Validates: Requirements 11.1, 11.2**

### Property 16: Reduced motion preserves essential animations with reduced duration

*For any* essential feedback animation (click, focus, validation) with reduced motion enabled, the animation should still occur but with duration reduced by at least 50%.

**Validates: Requirements 11.3**

### Property 17: Carousel auto-play pauses on interaction

*For any* carousel with auto-play enabled, when a user interacts (hover, drag, click), the auto-play should pause and not resume until interaction ends.

**Validates: Requirements 12.4**

### Property 18: Dropdown animation direction matches open/close state

*For any* dropdown menu, opening should animate downward (positive Y translation) and closing should animate upward (negative Y translation).

**Validates: Requirements 13.1, 13.2**

### Property 19: Marquee loops seamlessly

*For any* marquee, when the scroll position reaches the end of the content, it should reset to the beginning without visible discontinuity (jump).

**Validates: Requirements 14.3**

### Property 20: Marquee pauses on hover

*For any* marquee with hover pause enabled, hovering should set animation-play-state to paused, and unhovering should resume.

**Validates: Requirements 14.2**

### Property 21: CTA pulse animation is periodic

*For any* CTA button with pulse animation, the pulse should occur at regular intervals (every 3 seconds) while the button is visible.

**Validates: Requirements 15.1**

## Error Handling

### Animation Errors

**Intersection Observer Not Supported**:
- Detection: Check for `window.IntersectionObserver` availability
- Fallback: Immediately show all scroll-animated elements in their final state
- User Impact: No animations, but content is fully visible

**Framer Motion Import Failure**:
- Detection: Try-catch around Framer Motion imports
- Fallback: Use CSS transitions for basic hover effects
- User Impact: Reduced animation quality, but interactions still work

**Performance Degradation**:
- Detection: Monitor frame rate using `requestAnimationFrame`
- Response: Reduce animation complexity (disable parallax, reduce stagger)
- Threshold: If FPS drops below 45 for more than 2 seconds
- User Impact: Simpler animations, but maintains 60fps

### User Input Errors

**Invalid Animation Configuration**:
- Detection: TypeScript type checking and runtime validation
- Response: Log warning, use default configuration
- Example: Negative duration → use default 0.5s

**Conflicting Animation States**:
- Detection: Check if element is already animating
- Response: Cancel previous animation, start new one
- Example: Rapid hover on/off → debounce to prevent jank

### Accessibility Errors

**Reduced Motion Not Detected**:
- Detection: Check `window.matchMedia('(prefers-reduced-motion: reduce)')` 
- Fallback: Assume reduced motion is NOT preferred
- User Impact: Animations play normally

**Focus Trap During Animation**:
- Prevention: Ensure animated elements maintain focusability
- Detection: Monitor focus events during animations
- Response: Immediately complete animation if focus is lost

## Testing Strategy

### Dual Testing Approach

This feature requires both unit tests and property-based tests for comprehensive coverage:

**Unit Tests**: Focus on specific examples, edge cases, and integration points
- Specific animation configurations (e.g., fadeInUp with 0.5s duration)
- Edge cases (e.g., empty stagger container, zero duration)
- Error conditions (e.g., invalid configuration, missing dependencies)
- Integration between components (e.g., PageTransition + AnimatedSection)

**Property Tests**: Verify universal properties across all inputs
- Animation state transitions work for any element
- Stagger timing is correct for any number of children
- Hover effects are reversible for any interactive element
- Counter animations reach target for any start/end values
- Reduced motion affects all animations consistently

### Property-Based Testing Configuration

**Library**: Use `@fast-check/vitest` for property-based testing in Vitest

**Configuration**:
- Minimum 100 iterations per property test
- Each test must reference its design document property
- Tag format: `// Feature: micro-interactions, Property N: [property text]`

**Example Property Test Structure**:
```typescript
import { test } from 'vitest';
import * as fc from 'fast-check';

// Feature: micro-interactions, Property 9: Counter animation reaches target value
test('counter reaches target value after duration', async () => {
  await fc.assert(
    fc.asyncProperty(
      fc.integer({ min: 0, max: 10000 }), // start
      fc.integer({ min: 0, max: 10000 }), // end
      fc.integer({ min: 100, max: 5000 }), // duration
      async (start, end, duration) => {
        const counter = new CountUpAnimation({ start, end, duration });
        await counter.start();
        await sleep(duration + 100); // Allow completion
        expect(counter.currentValue).toBe(end);
      }
    ),
    { numRuns: 100 }
  );
});
```

### Test Coverage Requirements

**Animation Hooks** (80% coverage minimum):
- useScrollAnimation: viewport detection, threshold configuration
- useCountUp: value calculation, formatting, easing
- useMagneticEffect: distance calculation, translation limits
- useParallax: scroll position tracking, speed multiplier
- useReducedMotion: media query detection, context updates

**Animation Components** (70% coverage minimum):
- AnimatedSection: scroll trigger, variant application
- AnimatedButton: hover/tap states, magnetic effect
- AnimatedCard: hover lift, image zoom
- StaggerContainer: child delay calculation
- AnimatedText: word/character splitting, stagger timing

**Variant Library** (100% coverage):
- All exported variants are valid Framer Motion objects
- All transitions have reasonable durations (50ms - 2000ms)
- All transforms use GPU-accelerated properties

### Integration Testing

**Page-Level Tests**:
- Home page: Hero animation, stats counter, service cards, testimonials
- Services page: Service card grid, hover effects, page transition
- About page: Team member cards, parallax background
- Navigation: Dropdown animations, mobile menu slide

**Cross-Browser Testing**:
- Chrome/Edge (Chromium): Full animation support
- Firefox: Full animation support
- Safari: Test webkit-specific issues
- Mobile browsers: Test touch interactions, performance

### Performance Testing

**Metrics to Monitor**:
- Frame rate during animations (target: 60fps)
- Time to interactive (TTI) impact (max +200ms)
- Bundle size increase (max +50KB gzipped)
- Animation start latency (max 16ms)

**Performance Test Scenarios**:
- 20 simultaneous scroll animations
- Rapid hover on/off (stress test)
- Page transition during heavy animation
- Parallax with multiple layers

### Accessibility Testing

**Automated Tests**:
- Verify reduced motion disables animations
- Ensure focus indicators remain visible during animations
- Check that animated content is still accessible to screen readers
- Validate ARIA attributes are preserved

**Manual Tests**:
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Test with keyboard navigation only
- Test with reduced motion enabled
- Test with high contrast mode
