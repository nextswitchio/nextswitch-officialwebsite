"use client";

import React from "react";
import { montserrat } from "@/lib/fonts";

const TrustedBy = () => {
  const logos = [
    {
      id: 1,
      name: "Logoipsum 1",
      svg: (
        <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M10 5L5 15L10 25H20L25 15L20 5H10Z" stroke="white" strokeWidth="2" />
          <text x="35" y="20" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">LOGOIPSUM</text>
        </svg>
      )
    },
    {
      id: 2,
      name: "Logoipsum 2",
      svg: (
        <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="5" y="10" width="8" height="8" fill="white" />
          <circle cx="22" cy="14" r="5" fill="white" />
          <circle cx="35" cy="14" r="5" fill="white" opacity="0.5" />
          <text x="50" y="20" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">logoipsum</text>
        </svg>
      )
    },
    {
      id: 3,
      name: "Logoipsum 3",
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="20" cy="20" r="15" stroke="white" strokeWidth="1.5" />
          <path d="M20 5V35M5 20H35M10 10L30 30M30 10L10 30" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
          <path d="M20 12L28 20L20 28L12 20L20 12Z" fill="white" />
          <text x="45" y="25" fill="white" fontSize="14" fontWeight="medium" fontFamily="sans-serif">logo—ipsum</text>
        </svg>
      )
    },
    {
      id: 4,
      name: "Logoipsum 4",
      svg: (
        <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M15 10C18 10 20 12 20 15C20 18 18 20 15 20C12 20 10 18 10 15C10 12 12 10 15 10Z" fill="white" />
          <path d="M15 25C18 25 20 27 20 30C20 33 18 35 15 35C12 35 10 33 10 30C10 27 12 25 15 25Z" fill="white" opacity="0.6" />
          <path d="M30 15C33 15 35 17 35 20C35 23 33 25 30 25C27 25 25 23 25 20C25 17 27 15 30 15Z" fill="white" />
          <text x="45" y="28" fill="white" fontSize="18" fontWeight="black" fontStyle="italic" fontFamily="sans-serif">LOGO!</text>
        </svg>
      )
    },
    {
      id: 5,
      name: "Logoipsum 5",
      svg: (
        <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M10 15C10 12 12 10 15 10C18 10 20 12 20 15M20 15C20 18 18 20 15 20C12 20 10 18 10 15ZM10 15L5 15M20 15L25 15M15 10L15 5M15 20L15 25" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <text x="35" y="20" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">logoipsum</text>
        </svg>
      )
    },
  ];

  return (
    <section className="bg-black ">
      <div className="container py-6 lg:py-10 mx-auto px-6">
        <div className="text-center mb-6 lg:mb-10">
          <h2 className={`${montserrat.className} text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-6`}>
            Trusted by the best
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Leading organizations rely on Next Switch for cutting-edge solutions and unparalleled expertise.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 md:gap-10 lg:gap-14 opacity-70">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="w-32 md:w-40 lg:w-48 h-10 md:h-12 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;