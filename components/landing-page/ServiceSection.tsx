'use client'

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Revolutionizing Brand Identities Through Innovative Design And Strategic Marketing Solutions.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Sustainable Marketing Strategies That Connect Brands With Eco-Conscious Consumers.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "IT Consulting",
    description: "Crafting Stunning Visuals And Engaging User Experiences For Digital Platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Branding",
    description: "Pioneering Tech Solutions That Redefine User Interaction And Streamline Business Processes.",
    image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Custom Software Development",
    description: "Pioneering Tech Solutions That Redefine User Interaction And Streamline Business Processes.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
  }
];

const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-16 lg:mb-20">
          <h2 className="text-base md:text-lg lg:text-xl font-light italic font-sans text-[#040404] mb-2 md:mb-4">
            Our Services
          </h2>
          <p className="text-black font-sans font-medium text-3xl md:text-4xl lg:text-6xl leading-tight">
            Innovation Meets Expertise
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr_auto] gap-2 lg:gap-8 items-center py-6 lg:py-12 border-b border-[#040404]/10 cursor-pointer transition-all ${index === 0 ? "border-t" : ""
                }`}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => toggleExpand(service.id)}
            >
              {/* Service Title */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#040404]">
                  {service.title}
                </h3>
                {/* Mobile View Details Trigger */}
                <button
                  className="lg:hidden text-xs font-semibold uppercase tracking-wider text-[#040404]/50 hover:text-[#040404] transition-colors"
                >
                  {expandedId === service.id ? "Close" : "View details"}
                </button>
              </div>

              {/* Description - Expandable on Mobile, Always visible on Desktop */}
              <div className={`lg:pl-8 overflow-hidden transition-all duration-300 ease-in-out ${expandedId === service.id
                  ? "max-h-40 opacity-100 mt-2 lg:mt-0"
                  : "max-h-0 lg:max-h-none opacity-0 lg:opacity-100"
                }`}>
                <p className="text-[#040404]/70 text-sm lg:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Image - Only visible on hover (desktop) */}
              <div className="hidden lg:block h-28 relative rotate-8">
                <div
                  className={`absolute inset-0 overflow-hidden transition-all duration-500 ease-out ${hoveredId === service.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                    }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={326}
                    height={200}
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>

              {/* Arrow Button */}
              <div className="hidden lg:flex justify-end">
                <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${hoveredId === service.id
                  ? "bg-[#040404] text-white"
                  : "bg-[#040404]/10 text-[#040404] border border-[#040404]/20"
                  }`}>
                  {hoveredId === service.id ? (
                    <ArrowUpRight className="w-5 h-5" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
