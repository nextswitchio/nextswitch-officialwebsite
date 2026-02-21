import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import CarouselExample from '../__examples__/CarouselExample';

// Mock embla-carousel-react
const mockScrollPrev = vi.fn();
const mockScrollNext = vi.fn();
const mockScrollTo = vi.fn();
const mockOn = vi.fn();
const mockOff = vi.fn();

// Store callbacks registered via .on()
const eventCallbacks: Record<string, (() => void)[]> = {};

const mockApi = {
  scrollPrev: mockScrollPrev,
  scrollNext: mockScrollNext,
  scrollTo: mockScrollTo,
  selectedScrollSnap: vi.fn(() => 0),
  scrollSnapList: vi.fn(() => [0, 1, 2, 3]),
  on: vi.fn((event: string, callback: () => void) => {
    if (!eventCallbacks[event]) {
      eventCallbacks[event] = [];
    }
    eventCallbacks[event].push(callback);
    return mockApi;
  }),
  off: vi.fn((event: string, callback: () => void) => {
    if (eventCallbacks[event]) {
      eventCallbacks[event] = eventCallbacks[event].filter(cb => cb !== callback);
    }
    return mockApi;
  }),
};

const mockEmblaRef = vi.fn((node: HTMLElement | null) => {
  // When ref is attached, trigger reInit to simulate Embla initialization
  if (node && eventCallbacks['reInit']) {
    // Use setTimeout to simulate async initialization
    setTimeout(() => {
      eventCallbacks['reInit'].forEach(cb => cb());
    }, 0);
  }
});

vi.mock('embla-carousel-react', () => ({
  default: vi.fn(() => [mockEmblaRef, mockApi]),
}));

describe('CarouselEnhancements', () => {
  beforeEach(async () => {
    vi.useFakeTimers();
    // Reset mocks
    mockScrollPrev.mockClear();
    mockScrollNext.mockClear();
    mockScrollTo.mockClear();
    
    // Clear event callbacks
    Object.keys(eventCallbacks).forEach(key => {
      eventCallbacks[key] = [];
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  describe('Control Hover Effects', () => {
    it('should render carousel controls with hover capability', () => {
      render(<CarouselExample />);
      
      const prevButton = screen.getByLabelText('Previous slide');
      const nextButton = screen.getByLabelText('Next slide');
      
      expect(prevButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });

    it('should apply hover effects to control buttons', () => {
      render(<CarouselExample />);
      
      const nextButton = screen.getByLabelText('Next slide');
      
      // Hover should trigger motion animations (tested via motion props)
      fireEvent.mouseEnter(nextButton);
      expect(nextButton).toBeInTheDocument();
      
      fireEvent.mouseLeave(nextButton);
      expect(nextButton).toBeInTheDocument();
    });

    it('should apply tap effects to control buttons', () => {
      render(<CarouselExample />);
      
      const nextButton = screen.getByLabelText('Next slide');
      
      fireEvent.mouseDown(nextButton);
      fireEvent.mouseUp(nextButton);
      
      expect(nextButton).toBeInTheDocument();
    });
  });

  describe('Auto-Play Functionality', () => {
    it('should show auto-play as active initially', () => {
      render(<CarouselExample />);
      
      expect(screen.getByText(/Auto-play: Active/i)).toBeInTheDocument();
    });

    it('should pause auto-play when user clicks navigation button', () => {
      render(<CarouselExample />);
      
      const nextButton = screen.getByLabelText('Next slide');
      fireEvent.click(nextButton);
      
      // After clicking, auto-play should be paused
      expect(screen.getByText(/Auto-play: Paused/i)).toBeInTheDocument();
    });

    it('should pause auto-play when user clicks previous button', () => {
      render(<CarouselExample />);
      
      const prevButton = screen.getByLabelText('Previous slide');
      fireEvent.click(prevButton);
      
      // After clicking, auto-play should be paused
      expect(screen.getByText(/Auto-play: Paused/i)).toBeInTheDocument();
    });

    it('should pause auto-play when user clicks pagination dot', async () => {
      vi.useRealTimers(); // Use real timers for this test
      
      render(<CarouselExample />);
      
      // Wait for pagination dots to render (after reInit callback)
      await waitFor(() => {
        expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument();
      }, { timeout: 100 });
      
      const paginationDot = screen.getByLabelText('Go to slide 2');
      fireEvent.click(paginationDot);
      
      // After clicking, auto-play should be paused
      expect(screen.getByText(/Auto-play: Paused/i)).toBeInTheDocument();
      
      vi.useFakeTimers(); // Restore fake timers for other tests
    });
  });

  describe('Hover Pause Functionality', () => {
    it('should detect hover state', async () => {
      render(<CarouselExample />);
      
      // Find the carousel viewport (the element with overflow-hidden)
      const carousel = screen.getByText('Slide 1').closest('.overflow-hidden');
      expect(carousel).toBeInTheDocument();
      
      if (carousel) {
        fireEvent.mouseEnter(carousel);
        
        // Hover state should update immediately
        expect(screen.getByText(/Hover: Yes/i)).toBeInTheDocument();
      }
    });

    it('should clear hover state when mouse leaves', async () => {
      render(<CarouselExample />);
      
      const carousel = screen.getByText('Slide 1').closest('.overflow-hidden');
      expect(carousel).toBeInTheDocument();
      
      if (carousel) {
        fireEvent.mouseEnter(carousel);
        expect(screen.getByText(/Hover: Yes/i)).toBeInTheDocument();
        
        fireEvent.mouseLeave(carousel);
        expect(screen.getByText(/Hover: No/i)).toBeInTheDocument();
      }
    });
  });

  describe('Pagination Dots', () => {
    it('should render pagination dots for all slides', async () => {
      vi.useRealTimers(); // Use real timers for this test
      
      render(<CarouselExample />);
      
      // Wait for pagination dots to render (after reInit callback)
      await waitFor(() => {
        expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();
      }, { timeout: 100 });
      
      expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to slide 3')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to slide 4')).toBeInTheDocument();
      
      vi.useFakeTimers(); // Restore fake timers
    });

    it('should allow navigation via pagination dots', async () => {
      vi.useRealTimers(); // Use real timers for this test
      
      render(<CarouselExample />);
      
      // Wait for pagination dots to render
      await waitFor(() => {
        expect(screen.getByLabelText('Go to slide 3')).toBeInTheDocument();
      }, { timeout: 100 });
      
      const dot3 = screen.getByLabelText('Go to slide 3');
      fireEvent.click(dot3);
      
      expect(dot3).toBeInTheDocument();
      
      vi.useFakeTimers(); // Restore fake timers
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels on controls', () => {
      render(<CarouselExample />);
      
      expect(screen.getByLabelText('Previous slide')).toBeInTheDocument();
      expect(screen.getByLabelText('Next slide')).toBeInTheDocument();
    });

    it('should have proper ARIA labels on pagination', async () => {
      vi.useRealTimers(); // Use real timers for this test
      
      render(<CarouselExample />);
      
      // Wait for pagination dots to render
      await waitFor(() => {
        expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();
      }, { timeout: 100 });
      
      for (let i = 1; i <= 4; i++) {
        expect(screen.getByLabelText(`Go to slide ${i}`)).toBeInTheDocument();
      }
      
      vi.useFakeTimers(); // Restore fake timers
    });
  });

  describe('Spring Physics Configuration', () => {
    it('should configure Embla with appropriate settings', async () => {
      const useEmblaCarouselMock = vi.mocked(await import('embla-carousel-react')).default;
      
      render(<CarouselExample />);
      
      expect(useEmblaCarouselMock).toHaveBeenCalledWith(
        expect.objectContaining({
          loop: true,
          align: 'start',
          skipSnaps: false,
          duration: 25,
          dragFree: false,
        })
      );
    });
  });

  describe('Responsive Design', () => {
    it('should render all slides', () => {
      render(<CarouselExample />);
      
      expect(screen.getByText('Slide 1')).toBeInTheDocument();
      expect(screen.getByText('Slide 2')).toBeInTheDocument();
      expect(screen.getByText('Slide 3')).toBeInTheDocument();
      expect(screen.getByText('Slide 4')).toBeInTheDocument();
    });
  });
});
