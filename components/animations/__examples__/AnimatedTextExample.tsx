"use client";

/**
 * AnimatedText Component Examples
 * 
 * This file demonstrates various usage patterns for the AnimatedText component.
 * These examples can be used for testing and documentation purposes.
 */

import React from "react";
import { AnimatedText } from "../AnimatedText";

export function AnimatedTextExample() {
  return (
    <div className="space-y-12 p-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Word-by-Word Animation</h2>
        <AnimatedText 
          text="Welcome to Next Switch Ltd" 
          variant="word"
          className="text-4xl font-bold"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Character-by-Character Animation</h2>
        <AnimatedText 
          text="Hello World" 
          variant="character"
          className="text-3xl font-semibold"
          staggerDelay={0.03}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">With Custom Delay</h2>
        <AnimatedText 
          text="This text appears after a delay" 
          variant="word"
          className="text-2xl"
          delay={0.5}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Fast Stagger</h2>
        <AnimatedText 
          text="Quick reveal animation" 
          variant="word"
          className="text-2xl"
          staggerDelay={0.02}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Slow Stagger</h2>
        <AnimatedText 
          text="Slow dramatic reveal" 
          variant="word"
          className="text-2xl"
          staggerDelay={0.15}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">As Heading Element</h2>
        <AnimatedText 
          text="This is an H1 heading" 
          variant="word"
          className="text-5xl font-bold"
          as="h1"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Line-by-Line Animation</h2>
        <AnimatedText 
          text="First line
Second line
Third line" 
          variant="line"
          className="text-xl"
          staggerDelay={0.2}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Multiple Instances</h2>
        <div className="space-y-4">
          <AnimatedText 
            text="First animated text" 
            variant="word"
            className="text-xl"
          />
          <AnimatedText 
            text="Second animated text" 
            variant="word"
            className="text-xl"
            delay={0.3}
          />
          <AnimatedText 
            text="Third animated text" 
            variant="word"
            className="text-xl"
            delay={0.6}
          />
        </div>
      </section>
    </div>
  );
}

export default AnimatedTextExample;
