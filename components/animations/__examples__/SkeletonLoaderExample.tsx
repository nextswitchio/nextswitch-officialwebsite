"use client";

/**
 * SkeletonLoader Example Component
 * 
 * Demonstrates the usage of the SkeletonLoader component with different
 * shapes and configurations.
 */

import React, { useState } from "react";
import { SkeletonLoader } from "../SkeletonLoader";

export function SkeletonLoaderExample() {
  const [isLoadingText, setIsLoadingText] = useState(true);
  const [isLoadingCircle, setIsLoadingCircle] = useState(true);
  const [isLoadingRectangle, setIsLoadingRectangle] = useState(true);
  const [isLoadingCard, setIsLoadingCard] = useState(true);

  return (
    <div className="space-y-12 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">SkeletonLoader Examples</h2>
        <p className="text-muted-foreground mb-8">
          Loading placeholders with pulsing animation that fade out when content is ready.
        </p>
      </div>

      {/* Text Skeleton */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Text Skeleton</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Used for text lines and paragraphs
        </p>
        <div className="space-y-2 max-w-md">
          <SkeletonLoader isLoading={isLoadingText} className="w-full" />
          <SkeletonLoader isLoading={isLoadingText} className="w-4/5" />
          <SkeletonLoader isLoading={isLoadingText} className="w-3/4" />
        </div>
        <button
          onClick={() => setIsLoadingText(!isLoadingText)}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          {isLoadingText ? "Load Content" : "Show Skeleton"}
        </button>
      </div>

      {/* Circle Skeleton */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Circle Skeleton</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Used for avatars and circular icons
        </p>
        <div className="flex gap-4">
          <SkeletonLoader
            shape="circle"
            isLoading={isLoadingCircle}
            className="w-12 h-12"
          />
          <SkeletonLoader
            shape="circle"
            isLoading={isLoadingCircle}
            className="w-16 h-16"
          />
          <SkeletonLoader
            shape="circle"
            isLoading={isLoadingCircle}
            className="w-20 h-20"
          />
        </div>
        <button
          onClick={() => setIsLoadingCircle(!isLoadingCircle)}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          {isLoadingCircle ? "Load Content" : "Show Skeleton"}
        </button>
      </div>

      {/* Rectangle Skeleton */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Rectangle Skeleton</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Used for images and rectangular content
        </p>
        <div className="space-y-4 max-w-md">
          <SkeletonLoader
            shape="rectangle"
            isLoading={isLoadingRectangle}
            className="w-full h-48"
          />
          <SkeletonLoader
            shape="rectangle"
            isLoading={isLoadingRectangle}
            className="w-full h-32"
          />
        </div>
        <button
          onClick={() => setIsLoadingRectangle(!isLoadingRectangle)}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          {isLoadingRectangle ? "Load Content" : "Show Skeleton"}
        </button>
      </div>

      {/* Card Skeleton (Combined) */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Card Skeleton (Combined)</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Combining multiple skeletons to create a card placeholder
        </p>
        <div className="max-w-md border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-4">
            <SkeletonLoader
              shape="circle"
              isLoading={isLoadingCard}
              className="w-12 h-12"
            />
            <div className="flex-1 space-y-2">
              <SkeletonLoader
                isLoading={isLoadingCard}
                className="w-3/4 h-4"
              />
              <SkeletonLoader
                isLoading={isLoadingCard}
                className="w-1/2 h-3"
              />
            </div>
          </div>
          <SkeletonLoader
            shape="rectangle"
            isLoading={isLoadingCard}
            className="w-full h-40"
          />
          <div className="space-y-2">
            <SkeletonLoader
              isLoading={isLoadingCard}
              className="w-full h-4"
            />
            <SkeletonLoader
              isLoading={isLoadingCard}
              className="w-5/6 h-4"
            />
            <SkeletonLoader
              isLoading={isLoadingCard}
              className="w-4/5 h-4"
            />
          </div>
        </div>
        <button
          onClick={() => setIsLoadingCard(!isLoadingCard)}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          {isLoadingCard ? "Load Content" : "Show Skeleton"}
        </button>
      </div>

      {/* Staggered List Skeleton */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">List Skeleton</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Multiple skeleton items for list loading states
        </p>
        <div className="max-w-md space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center gap-4 p-4 border rounded-lg">
              <SkeletonLoader
                shape="circle"
                isLoading={isLoadingCard}
                className="w-10 h-10"
              />
              <div className="flex-1 space-y-2">
                <SkeletonLoader
                  isLoading={isLoadingCard}
                  className="w-2/3 h-4"
                />
                <SkeletonLoader
                  isLoading={isLoadingCard}
                  className="w-1/2 h-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
