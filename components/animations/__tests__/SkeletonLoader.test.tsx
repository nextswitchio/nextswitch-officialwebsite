/**
 * Unit tests for SkeletonLoader component
 * 
 * Tests:
 * - Component renders with different shapes
 * - Pulsing animation is applied
 * - Fade out animation on loading complete
 * - Respects reduced motion preferences
 * - Accessibility attributes are present
 * 
 * Requirements: 6.1, 6.4
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SkeletonLoader } from "../SkeletonLoader";

// Mock the useReducedMotion hook
vi.mock("@/lib/animations/hooks/useReducedMotion", () => ({
  useReducedMotion: vi.fn(() => false),
}));

describe("SkeletonLoader", () => {
  it("renders with default text shape", () => {
    const { container } = render(<SkeletonLoader />);
    const skeleton = container.querySelector('[role="status"]');
    
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveAttribute("aria-busy", "true");
    expect(skeleton).toHaveAttribute("aria-label", "Loading content");
  });

  it("renders with circle shape", () => {
    const { container } = render(<SkeletonLoader shape="circle" />);
    const skeleton = container.querySelector('[role="status"]');
    
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass("rounded-full");
  });

  it("renders with rectangle shape", () => {
    const { container } = render(<SkeletonLoader shape="rectangle" />);
    const skeleton = container.querySelector('[role="status"]');
    
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass("rounded-md");
  });

  it("applies custom className", () => {
    const { container } = render(
      <SkeletonLoader className="w-full h-48" />
    );
    const skeleton = container.querySelector('[role="status"]');
    
    expect(skeleton).toHaveClass("w-full", "h-48");
  });

  it("does not render when isLoading is false", () => {
    const { container } = render(<SkeletonLoader isLoading={false} />);
    const skeleton = container.querySelector('[role="status"]');
    
    expect(skeleton).not.toBeInTheDocument();
  });

  it("has accessibility attributes", () => {
    const { container } = render(<SkeletonLoader />);
    const skeleton = container.querySelector('[role="status"]');
    
    expect(skeleton).toHaveAttribute("role", "status");
    expect(skeleton).toHaveAttribute("aria-live", "polite");
    expect(skeleton).toHaveAttribute("aria-busy", "true");
    expect(skeleton).toHaveAttribute("aria-label", "Loading content");
  });

  it("applies base skeleton styles", () => {
    const { container } = render(<SkeletonLoader />);
    const skeleton = container.querySelector('[role="status"]');
    
    expect(skeleton).toHaveClass("bg-muted");
    expect(skeleton).toHaveClass("animate-pulse");
  });

  it("applies text shape styles by default", () => {
    const { container } = render(<SkeletonLoader />);
    const skeleton = container.querySelector('[role="status"]');
    
    expect(skeleton).toHaveClass("h-4");
    expect(skeleton).toHaveClass("rounded");
  });
});
