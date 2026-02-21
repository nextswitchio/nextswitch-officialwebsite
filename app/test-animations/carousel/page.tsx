import CarouselExample from "@/components/animations/__examples__/CarouselExample";

export default function CarouselTestPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Carousel Spring Animations</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Testing spring animations, hover effects, and auto-play pause functionality for carousels.
            Hover over the carousel to pause auto-play, or interact with controls to disable it.
          </p>
        </div>

        <CarouselExample />

        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Implementation Details</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-semibold text-lg mb-2">Spring Physics Configuration</h3>
              <p className="mb-2">
                Embla Carousel is configured with spring-like physics using the duration parameter:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
{`const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "start",
  skipSnaps: false,
  duration: 25, // ~417ms at 60fps for smooth transitions
  dragFree: false,
});`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Hover Effects with Spring Animation</h3>
              <p className="mb-2">
                Control buttons use Framer Motion spring animations for natural, bouncy interactions:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
{`<motion.button
  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.5)" }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  <ChevronLeft />
</motion.button>`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Auto-Play Pause on Interaction</h3>
              <p className="mb-2">
                Auto-play pauses when the user hovers over the carousel or interacts with controls:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
{`// Auto-play with pause on hover
useEffect(() => {
  if (!emblaApi || !isAutoPlaying) return;
  
  autoPlayIntervalRef.current = setInterval(() => {
    if (!isHovering) {
      emblaApi.scrollNext();
    }
  }, 3000);
  
  return () => clearInterval(autoPlayIntervalRef.current);
}, [emblaApi, isAutoPlaying, isHovering]);

// Pause on user interaction
const scrollNext = useCallback(() => {
  if (emblaApi) {
    emblaApi.scrollNext();
    setIsAutoPlaying(false); // Pause auto-play
  }
}, [emblaApi]);`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Requirements Validated</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Requirement 12.1:</strong> Carousel uses spring animation with moderate stiffness</li>
                <li><strong>Requirement 12.2:</strong> Dragging provides momentum-based scrolling</li>
                <li><strong>Requirement 12.3:</strong> Controls scale and highlight on hover</li>
                <li><strong>Requirement 12.4:</strong> Auto-play pauses on user interaction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
