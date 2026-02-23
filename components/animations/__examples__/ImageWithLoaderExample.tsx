"use client";

/**
 * ImageWithLoader Example Component
 * 
 * Demonstrates the usage of the ImageWithLoader component with different
 * configurations and image sizes.
 */

import { useState } from "react";
import { ImageWithLoader } from "../ImageWithLoader";

export function ImageWithLoaderExample() {
  const [imageKey, setImageKey] = useState(0);

  // Function to reload images
  const reloadImages = () => {
    setImageKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-12 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">ImageWithLoader Examples</h2>
        <p className="text-muted-foreground mb-8">
          Images with blur-up placeholder that smoothly transition to full quality when loaded.
        </p>
        <button
          onClick={reloadImages}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Reload All Images
        </button>
      </div>

      {/* Fixed Size Image */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Fixed Size Image</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Image with explicit width and height
        </p>
        <ImageWithLoader
          key={`fixed-${imageKey}`}
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
          alt="Laptop on desk"
          width={800}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Responsive Image */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Responsive Image</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Image that adapts to container width
        </p>
        <div className="max-w-2xl">
          <ImageWithLoader
            key={`responsive-${imageKey}`}
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
            alt="Business analytics"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg w-full"
            imageClassName="w-full h-auto"
          />
        </div>
      </div>

      {/* Fill Layout Image */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Fill Layout Image</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Image that fills its container (useful for cards and backgrounds)
        </p>
        <div className="relative h-96 max-w-2xl rounded-lg overflow-hidden">
          <ImageWithLoader
            key={`fill-${imageKey}`}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
            alt="Team collaboration"
            fill
            imageClassName="object-cover"
          />
        </div>
      </div>

      {/* Grid of Images */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Image Grid</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Multiple images loading with staggered timing
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {[
            {
              src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
              alt: "Office workspace",
            },
            {
              src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
              alt: "Team meeting",
            },
            {
              src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
              alt: "Business presentation",
            },
            {
              src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
              alt: "Collaboration",
            },
            {
              src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
              alt: "Creative workspace",
            },
            {
              src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
              alt: "Team discussion",
            },
          ].map((image, index) => (
            <div key={`grid-${imageKey}-${index}`} className="relative h-64">
              <ImageWithLoader
                src={image.src}
                alt={image.alt}
                fill
                imageClassName="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Card with Image */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Card with Image</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Image integrated into a card component
        </p>
        <div className="max-w-md border rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-48">
            <ImageWithLoader
              key={`card-${imageKey}`}
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
              alt="Technology"
              fill
              imageClassName="object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="text-xl font-semibold mb-2">Technology Solutions</h4>
            <p className="text-muted-foreground mb-4">
              Innovative solutions for modern businesses. We help you transform
              your digital presence with cutting-edge technology.
            </p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Custom Transition Duration */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Custom Transition Duration</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Image with slower fade-in transition (1 second)
        </p>
        <ImageWithLoader
          key={`slow-${imageKey}`}
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
          alt="Creative workspace"
          width={800}
          height={600}
          transitionDuration={1}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
