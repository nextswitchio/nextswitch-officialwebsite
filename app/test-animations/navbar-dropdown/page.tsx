/**
 * Test page for Navbar dropdown animations
 * 
 * This page demonstrates the dropdown animations implemented in task 14.1:
 * - Fade in and slide down on open
 * - Fade out and slide up on close
 * - Stagger animation to dropdown items
 * 
 * Requirements: 13.1, 13.2, 13.3
 */

export default function NavbarDropdownTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Navbar Dropdown Animations Test
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Test Instructions
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                This page tests the dropdown animations implemented in task 14.1.
                The navbar at the top of the page now includes animated dropdowns.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-bold text-blue-900 mb-2">Desktop Testing:</h3>
                <ol className="list-decimal list-inside space-y-2 text-blue-900">
                  <li>Hover over the "Services" menu item in the navbar</li>
                  <li>Observe the dropdown fade in and slide down smoothly</li>
                  <li>Notice the stagger effect as each menu item appears sequentially</li>
                  <li>Move your mouse away and watch the dropdown fade out and slide up</li>
                  <li>The chevron icon should rotate 180° when the dropdown is open</li>
                </ol>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">Mobile Testing:</h3>
                <ol className="list-decimal list-inside space-y-2 text-green-900">
                  <li>Open the mobile menu (hamburger icon on smaller screens)</li>
                  <li>Tap on "Services" to expand the dropdown</li>
                  <li>Observe the smooth height animation and fade in effect</li>
                  <li>Notice the stagger animation on the dropdown items</li>
                  <li>Tap "Services" again to collapse and see the exit animation</li>
                </ol>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                <h3 className="font-bold text-purple-900 mb-2">Accessibility Testing:</h3>
                <ol className="list-decimal list-inside space-y-2 text-purple-900">
                  <li>Enable "Reduce Motion" in your system preferences</li>
                  <li>Refresh the page and test the dropdowns again</li>
                  <li>Animations should be instant (duration: 0) when reduced motion is enabled</li>
                  <li>All functionality should remain intact</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Implementation Details
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Desktop Dropdown:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Fade in duration: 200ms with easeOut</li>
                  <li>Fade out duration: 150ms with easeIn</li>
                  <li>Slide distance: 10px vertical</li>
                  <li>Stagger delay: 30ms between items (Requirements 13.3)</li>
                  <li>Initial delay: 50ms before first item appears</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobile Dropdown:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Height animation: 300ms</li>
                  <li>Opacity animation: 200ms with 100ms delay on open</li>
                  <li>Stagger delay: 30ms between items</li>
                  <li>Exit animation: 300ms height, 150ms opacity</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Reduced Motion Support:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>All animation durations set to 0 when reduced motion is preferred</li>
                  <li>Maintains full functionality without animations</li>
                  <li>Respects user accessibility preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
