/**
 * Mobile Menu Slide Animation Test Page
 * 
 * This page tests the mobile menu slide animation implementation.
 * Requirements: 13.4
 */

export default function MobileMenuTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-[#001F3F] mb-6">
          Mobile Menu Slide Animation Test
        </h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-4">
            Test Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              <strong>Resize your browser</strong> to mobile width (less than 768px) or use device emulation
            </li>
            <li>
              <strong>Click the hamburger menu icon</strong> in the top right corner
            </li>
            <li>
              <strong>Observe the animation:</strong> The mobile menu should slide in from the right over 300ms
            </li>
            <li>
              <strong>Click the X icon</strong> to close the menu
            </li>
            <li>
              <strong>Observe the animation:</strong> The mobile menu should slide out to the right over 300ms
            </li>
            <li>
              <strong>Test reduced motion:</strong> Enable "prefers-reduced-motion" in your browser settings and verify animations are disabled
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-4">
            Expected Behavior
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Menu slides in from right (x: 100% → 0) when opened</li>
            <li>Menu slides out to right (x: 0 → 100%) when closed</li>
            <li>Animation duration is 300ms with easeInOut easing</li>
            <li>Menu is properly removed from DOM when closed (AnimatePresence)</li>
            <li>Body scroll is locked when menu is open</li>
            <li>Menu closes automatically when navigating to a new page</li>
            <li>Reduced motion preference disables the slide animation</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-4">
            Technical Details
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <strong className="text-[#006FF5]">Component:</strong> Navbar
            </div>
            <div>
              <strong className="text-[#006FF5]">Animation Variant:</strong> mobileMenuVariants
            </div>
            <div>
              <strong className="text-[#006FF5]">Implementation:</strong> Framer Motion AnimatePresence + motion.div
            </div>
            <div>
              <strong className="text-[#006FF5]">States:</strong>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>hidden: x: "100%" (off-screen right)</li>
                <li>visible: x: 0 (on-screen)</li>
              </ul>
            </div>
            <div>
              <strong className="text-[#006FF5]">Transition:</strong> 300ms duration, easeInOut easing
            </div>
            <div>
              <strong className="text-[#006FF5]">Accessibility:</strong> Respects prefers-reduced-motion
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-sm text-gray-600">
            <strong>Note:</strong> This page is for testing purposes only. The mobile menu animation
            is implemented in the main Navbar component and works across all pages.
          </p>
        </div>
      </div>
    </div>
  );
}
