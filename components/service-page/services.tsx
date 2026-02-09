"use client";

import { Button } from "@/components/ui/button";
import { Code, Smartphone, GraduationCap, Lightbulb, Layers, Network, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Web Development",
        slug: "web-development",
        description: "Revolutionizing Brand Identities Through Innovative Design And Strategic Marketing Solutions.",
        icon: Code,
        highlight: true,
    },
    {
        title: "Mobile Development",
        slug: "mobile-development",
        description: "Revolutionizing Brand Identities Through Innovative Design And Strategic Marketing Solutions.",
        icon: Smartphone,
        highlight: false,
    },
    {
        title: "Tech Training",
        slug: "tech-training",
        description: "Empowering Individuals And Organizations Through Comprehensive Tech Skills Development And Education.",
        icon: GraduationCap,
        highlight: false,
    },
    {
        title: "Innovation Labs",
        slug: "innovation-labs",
        description: "Pioneering R&D Solutions That Transform Concepts Into Tangible, Market-Ready Innovations.",
        icon: Lightbulb,
        highlight: false,
    },
    {
        title: "Custom Software Dev.",
        slug: "custom-software-development",
        description: "Revolutionizing Brand Identities Through Innovative Design And Strategic Marketing Solutions.",
        icon: Layers,
        highlight: false,
    },
    {
        title: "IT Consulting",
        slug: "it-consulting",
        description: "Revolutionizing Brand Identities Through Innovative Design And Strategic Marketing Solutions.",
        icon: Network,
        highlight: false,
    },
];

const Services = () => {
    return (
        <section className="bg-[#f5f5f5] py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#1a1a2e] mb-4">
                            Our Services
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Creating innovative digital solutions that foster business
                            growth and enhance user experiences
                        </p>
                    </div>
                    <div>
                        <Button className="bg-[#0b0b1e] text-white hover:bg-[#1a1a2e] rounded-full px-8 py-6 text-base">
                            Get Started
                        </Button>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl transition-all duration-300 flex flex-col items-start gap-6 group relative bg-white text-[#1a1a2e] hover:bg-[#0b0b1e] hover:text-white hover:rotate-[-4deg] hover:shadow-xl border border-transparent hover:border-gray-100/10"
                        >
                            <div className="p-0 text-[#1a1a2e] group-hover:text-white transition-colors duration-300">
                                <service.icon strokeWidth={1.5} className="w-8 h-8" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-[#1a1a2e] group-hover:text-white transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed mb-8 text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="inline-flex items-center text-sm font-medium transition-colors text-gray-500 hover:text-[#006FF5] group-hover:text-white/70 group-hover:hover:text-white"
                                >
                                    Learn more
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
