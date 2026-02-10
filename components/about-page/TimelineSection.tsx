"use client";

import React from "react";

const timelineData = [
  {
    year: "2020",
    text: "At Ubuntu Dynamics, we're more than just a company; we're a collective of dreamers, innovators, and problem-solvers dedicated to uplifting Africa through technology and sustainable practices.",
    align: "right",
  },
  {
    year: "2020",
    text: "At Ubuntu Dynamics, we're more than just a company; we're a collective of dreamers, innovators, and problem-solvers dedicated to uplifting Africa through technology and sustainable practices.",
    align: "left",
  },
  {
    year: "2020",
    text: "At Ubuntu Dynamics, we're more than just a company; we're a collective of dreamers, innovators, and problem-solvers dedicated to uplifting Africa through technology and sustainable practices.",
    align: "right",
  },
  {
    year: "Present",
    text: "At Ubuntu Dynamics, we're more than just a company; we're a collective of dreamers, innovators, and problem-solvers dedicated to uplifting Africa through technology and sustainable practices.",
    align: "left",
  },
];

const TimelineSection = () => {
  return (
    <section className="bg-black py-20 lg:py-32 overflow-hidden text-white">
      <div className="container mx-auto px-4 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-16 md:mb-24 text-white leading-tight">Our Story</h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-linear-to-b from-blue-700/20 via-blue-500 to-blue-700/20" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-12 md:gap-24">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between gap-8 md:gap-16 ${item.align === "left" ? "flex-row-reverse" : ""
                  }`}
              >
                {/* Year Side */}
                <div className={`w-1/2 flex ${item.align === "left" ? "justify-start" : "justify-end"}`}>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide text-white">
                    {item.year}
                  </span>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 border-4 border-black z-10" />

                {/* Content Side */}
                <div className={`w-1/2 flex ${item.align === "left" ? "justify-end text-right" : "justify-start text-left"}`}>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
