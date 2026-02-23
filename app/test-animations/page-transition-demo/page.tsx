"use client";

import Link from "next/link";

export default function PageTransitionDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-purple-900">
            Page Transition Demo - Page 2
          </h1>
          <p className="text-lg text-purple-700">
            This is a second page to demonstrate the page transition effect.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold text-purple-900">
            Testing Instructions
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              Click the links below to navigate between pages and observe the smooth
              fade transitions:
            </p>
            
            <div className="flex gap-4">
              <Link
                href="/test-animations/page-transition"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Go to Page 1
              </Link>
              
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go to Home
              </Link>
            </div>
          </div>

          <div className="border-t pt-6 space-y-3">
            <h3 className="text-xl font-semibold text-purple-900">
              What to Observe
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Current page fades out smoothly (200ms)</li>
              <li>New page fades in smoothly (300ms)</li>
              <li>Page scrolls to top after transition</li>
              <li>No simultaneous transitions occur</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">
              Testing Reduced Motion
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              To test reduced motion support:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
              <li>Open your browser's DevTools</li>
              <li>Open the Command Palette (Cmd/Ctrl + Shift + P)</li>
              <li>Type "Emulate CSS prefers-reduced-motion"</li>
              <li>Select "reduce" option</li>
              <li>Navigate between pages - transitions should be instant</li>
            </ol>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            Sample Content
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              This page contains some sample content to make the transition more visible.
              The PageTransition component wraps all page content and provides smooth
              fade animations during navigation.
            </p>
            <p className="text-gray-700 mb-4">
              The component uses Framer Motion's AnimatePresence with mode="wait" to
              ensure the exit animation completes before the enter animation begins.
              This prevents visual glitches and ensures smooth transitions.
            </p>
            <p className="text-gray-700">
              The pathname is used as a key to trigger animations when the route changes,
              and the component automatically scrolls to the top of the page after the
              transition completes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
