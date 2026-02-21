"use client";

/**
 * PageTransition Example
 * 
 * This example demonstrates how to use the PageTransition component
 * to add smooth fade transitions between page navigations.
 * 
 * The PageTransition component should be used in your root layout or
 * a template file to wrap page content.
 */

import React from "react";
import Link from "next/link";
import { PageTransition } from "../PageTransition";

/**
 * Example showing PageTransition usage in a layout
 */
export function PageTransitionExample() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">PageTransition Example</h1>
          <p className="text-muted-foreground">
            The PageTransition component provides smooth fade transitions between pages.
          </p>
        </div>

        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage in Layout</h2>
            <div className="bg-muted p-6 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                <code>{`// app/layout.tsx or app/template.tsx
import { PageTransition } from "@/components/animations";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}`}</code>
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Fade Out:</strong> Current page fades out over 200ms when navigating away
              </li>
              <li>
                <strong>Fade In:</strong> New page fades in over 300ms when loading
              </li>
              <li>
                <strong>Mutual Exclusion:</strong> Prevents multiple simultaneous transitions
              </li>
              <li>
                <strong>Scroll Reset:</strong> Automatically scrolls to top on page change
              </li>
              <li>
                <strong>Reduced Motion:</strong> Respects user's motion preferences
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">How It Works</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                The PageTransition component uses Framer Motion's AnimatePresence with
                <code className="mx-1 px-2 py-1 bg-muted rounded">mode="wait"</code>
                to ensure the exit animation completes before the enter animation begins.
              </p>
              <p>
                It tracks the current pathname using Next.js's
                <code className="mx-1 px-2 py-1 bg-muted rounded">usePathname()</code>
                hook and uses it as a key to trigger animations when the route changes.
              </p>
              <p>
                The component maintains a ref to track transition state, preventing
                multiple simultaneous transitions from occurring.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Testing</h2>
            <div className="bg-muted p-6 rounded-lg space-y-3">
              <p className="text-sm text-muted-foreground">
                To test the PageTransition component:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Navigate between different pages in your application</li>
                <li>Observe the smooth fade out of the current page</li>
                <li>Observe the smooth fade in of the new page</li>
                <li>Try rapid navigation to verify mutual exclusion</li>
                <li>Enable "prefers-reduced-motion" to verify instant transitions</li>
              </ol>
              
              <div className="mt-4 pt-4 border-t">
                <Link
                  href="/test-animations/page-transition-demo"
                  className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Try Interactive Demo →
                </Link>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Requirements Validated</h2>
            <div className="grid gap-3">
              <div className="bg-muted p-4 rounded-lg">
                <strong className="text-sm">Requirement 5.1:</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Fade out current page over 200ms on navigation
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <strong className="text-sm">Requirement 5.2:</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Fade in new page over 300ms on load
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <strong className="text-sm">Requirement 5.4:</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Prevent multiple simultaneous page transitions
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PageTransitionExample;
