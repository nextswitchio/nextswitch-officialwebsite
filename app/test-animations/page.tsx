import { AnimatedSectionExample } from "@/components/animations/__examples__/AnimatedSectionExample";
import { StaggerContainerExample } from "@/components/animations/__examples__/StaggerContainerExample";
import Link from "next/link";

export default function TestAnimationsPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Animation Component Tests
        </h1>
        <p className="text-center text-gray-600 mb-12">
          This page demonstrates the animation components. Scroll down to see them in action.
        </p>
        
        {/* Navigation Links */}
        <div className="mb-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Component Test Pages</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/test-animations/skeleton-loader" className="text-primary hover:underline">
                Skeleton Loader
              </Link>
            </li>
            <li>
              <Link href="/test-animations/image-with-loader" className="text-primary hover:underline">
                Image With Loader
              </Link>
            </li>
            <li>
              <Link href="/test-animations/animated-input" className="text-primary hover:underline">
                Animated Input
              </Link>
            </li>
            <li>
              <Link href="/test-animations/page-transition" className="text-primary hover:underline">
                Page Transition
              </Link>
            </li>
            <li>
              <Link href="/test-animations/page-transition-demo" className="text-primary hover:underline">
                Page Transition Demo
              </Link>
            </li>
            <li>
              <Link href="/test-animations/navbar-dropdown" className="text-primary hover:underline">
                Navbar Dropdown
              </Link>
            </li>
            <li>
              <Link href="/test-animations/mobile-menu" className="text-primary hover:underline">
                Mobile Menu
              </Link>
            </li>
            <li>
              <Link href="/test-animations/carousel" className="text-primary hover:underline">
                Carousel
              </Link>
            </li>
            <li>
              <Link href="/test-animations/technology-marquee" className="text-primary hover:underline">
                Technology Marquee
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">AnimatedSection Examples</h2>
          <AnimatedSectionExample />
        </div>
        
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">StaggerContainer Examples</h2>
          <StaggerContainerExample />
        </div>
      </div>
    </div>
  );
}
