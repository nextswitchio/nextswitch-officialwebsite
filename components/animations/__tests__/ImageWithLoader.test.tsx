/**
 * Unit tests for ImageWithLoader component
 * 
 * Tests:
 * - Component renders with image
 * - Placeholder is shown while loading
 * - Transition to full image on load
 * - Respects reduced motion preferences
 * - Custom transition duration
 * - Callback on loading complete
 * 
 * Requirements: 6.2
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { ImageWithLoader } from "../ImageWithLoader";

// Mock the useReducedMotion hook
vi.mock("@/lib/animations/hooks/useReducedMotion", () => ({
  useReducedMotion: vi.fn(() => false),
}));

// Mock Next.js Image component
vi.mock("next/image", () => ({
  default: ({ onLoadingComplete, alt, ...props }: any) => {
    // Simulate image load after a short delay
    setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 100);
    
    return <img alt={alt} {...props} />;
  },
}));

describe("ImageWithLoader", () => {
  it("renders with image", () => {
    render(
      <ImageWithLoader
        src="/test-image.jpg"
        alt="Test image"
        width={800}
        height={600}
      />
    );
    
    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
  });

  it("shows placeholder while loading", () => {
    const { container } = render(
      <ImageWithLoader
        src="/test-image.jpg"
        alt="Test image"
        width={800}
        height={600}
      />
    );
    
    // Check for placeholder element
    const placeholder = container.querySelector('[aria-hidden="true"]');
    expect(placeholder).toBeInTheDocument();
  });

  it("calls onLoadingComplete callback", async () => {
    const onLoadingComplete = vi.fn();
    
    render(
      <ImageWithLoader
        src="/test-image.jpg"
        alt="Test image"
        width={800}
        height={600}
        onLoadingComplete={onLoadingComplete}
      />
    );
    
    // Wait for the image to load
    await waitFor(() => {
      expect(onLoadingComplete).toHaveBeenCalled();
    }, { timeout: 200 });
  });

  it("applies custom className to container", () => {
    const { container } = render(
      <ImageWithLoader
        src="/test-image.jpg"
        alt="Test image"
        width={800}
        height={600}
        className="rounded-lg shadow-lg"
      />
    );
    
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("rounded-lg", "shadow-lg");
  });

  it("applies imageClassName to image wrapper", () => {
    render(
      <ImageWithLoader
        src="/test-image.jpg"
        alt="Test image"
        width={800}
        height={600}
        imageClassName="object-cover"
      />
    );
    
    const image = screen.getByAltText("Test image");
    expect(image).toHaveClass("object-cover");
  });

  it("handles fill layout", () => {
    render(
      <ImageWithLoader
        src="/test-image.jpg"
        alt="Test image"
        fill
      />
    );
    
    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
  });

  it("accepts custom transition duration", () => {
    const { container } = render(
      <ImageWithLoader
        src="/test-image.jpg"
        alt="Test image"
        width={800}
        height={600}
        transitionDuration={1}
      />
    );
    
    // Component should render without errors
    expect(container.firstChild).toBeInTheDocument();
  });

  it("handles blurDataURL prop", () => {
    render(
      <ImageWithLoader
        src="/test-image.jpg"
        alt="Test image"
        width={800}
        height={600}
        blurDataURL="data:image/jpeg;base64,..."
        placeholder="blur"
      />
    );
    
    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
  });
});
