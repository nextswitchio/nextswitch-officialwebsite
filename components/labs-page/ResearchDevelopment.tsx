'use client'

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const researchItems = [
  {
    id: 1,
    title: "Intelligent UX Systems",
    description: "Custom Digital Frameworks Crafted To Amplify User Experiences And Ensure Seamless Adaptability.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Cloudless Data Networks",
    description: "Decentralized Data Networks Boosting Speed And Scalable Data Infrastructure For Growing Enterprises.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Evolving AI Prototypes",
    description: "Cutting Edge Machine Learning Models That Provide Predictive Insights And Personalized Experiences.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
  },
  {
    id: 4,
    title: "Open-Source Ledger Tech",
    description: "Blockchain frameworks that drive transparency, security, and efficiency for emerging businesses.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
  },
  {
    id: 5,
    title: "Predictive Cyber Defense",
    description: "Cutting-edge defense mechanisms that anticipate and neutralize cyber threats.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop",
  },
];

const ResearchDevelopment = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#040404] mb-3 leading-tight">
            Research & Development
          </h2>
          <p className="text-[#040404]/70 text-base md:text-lg leading-relaxed font-display italic">
            Spearheading Innovative Technological Horizons
          </p>
        </div>

        {/* Research Items */}
        <div className="space-y-0">
          {researchItems.map((item, index) => (
            <div
              key={item.id}
              className={`group grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr_auto] gap-4 lg:gap-8 items-center py-6 lg:py-8 border-b border-[#E5E5E5] cursor-pointer transition-colors ${index === 0 ? "border-t" : ""
                }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Title */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#040404]">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:pl-8">
                <p className="text-[#040404]/70 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Image - Only visible on hover (desktop) */}
              <div className="hidden lg:block h-[216px] relative rotate-4 ">
                <div
                  className={`absolute inset-0 overflow-hidden transition-all duration-500  ease-out ${hoveredId === item.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                    }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={324}
                    height={216}
                    // fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Arrow Button */}
              <div className="flex justify-end">
                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${hoveredId === item.id
                      ? "bg-[#040404] text-white"
                      : "bg-transparent text-[#040404] border border-[#040404]/20"
                    }`}
                >
                  {hoveredId === item.id ? (
                    <ArrowUpRight className="w-5 h-5" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="rounded-full border-[#040404] text-[#040404] hover:bg-[#040404] hover:text-white px-8"
          >
            View all posts
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchDevelopment;
