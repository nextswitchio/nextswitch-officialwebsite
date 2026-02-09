import React from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CTASection from "@/components/service-page/service-cta";

// Mock Data Source
const servicesData: Record<string, {
    title: string;
    category: string;
    image: string;
    priceRange: string;
    description: string;
    whatWeDo: string;
    approach: string;
}> = {
    "web-development": {
        category: "Web-development",
        title: "Web Development That Works for Your Business",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80", // Cyberpunk/Tech hand style image from Unsplash
        priceRange: "$1500-$10,000",
        description: "We design and build websites that don't just look good—they perform. Our web development service focuses on creating fast, responsive, and user-friendly websites that help businesses attract, engage, and convert their audience.",
        whatWeDo: "We develop modern websites tailored to your goals, whether you're launching a new brand, showcasing your portfolio, or scaling an existing business. Every website is built with usability, performance, and scalability in mind.",
        approach: "We start by understanding your business, users, and objectives. From there, we design and develop a solution that aligns with your brand identity while delivering a seamless experience across all devices."
    },
    // Default fallback or other services can be added here
};

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

const ServiceDetailsPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        // In a real app, you might validate slug or show 404
        // For now, if not found, we can show web-development as default or 404
        // return notFound(); 
        // Allowing fallback for demo purposes if needed, otherwise strict:
        if (Object.keys(servicesData).length > 0 && slug !== "web-development") {
            // creating placeholders for others on the fly?
            // For now let's just use web-development data if specific one isn't there but keep title generic?
            // No, let's force strict or return notFound.
            // Added dummy data generator for others to avoid broken links
            return (
                <>
                    <main className="pt-32 pb-20 min-h-screen">
                        <div className="container mx-auto px-4">
                            <h1 className="text-2xl">Service profile for {slug} (Content coming soon)</h1>
                        </div>
                    </main>
                    <CTASection />
                </>
            )
        }
    }

    // Use the specific service data
    const data = service || servicesData["web-development"];

    return (
        <>
            <main className="pt-32 pb-20 bg-white min-h-screen">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                    {/* Badge */}
                    <div className="mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-600">
                            <span className="w-2 h-2 rounded-full bg-black"></span>
                            {data.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black mb-12 leading-tight">
                        {data.title}
                    </h1>

                    {/* Hero Image */}
                    <div className="relative w-full aspect-2/1 rounded-2xl overflow-hidden mb-12 bg-blue-500">
                        {/* Using a solid color fallback if image loads slowly, or custom color matching reference */}
                        <Image
                            src={data.image}
                            alt={data.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Pricing & CTA Bar */}
                    <div className="flex flex-col items-start gap-6 mb-16">
                        <div className="flex items-center gap-4">
                            <span className="text-gray-500 text-sm">Price range</span>
                            <span className="text-black text-xl font-semibold">{data.priceRange}</span>
                        </div>

                        <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-8 py-4 h-auto text-base">
                            Request a quote
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    {/* Description Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-4xl">
                        {/* Main Intro */}
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {data.description}
                        </p>

                        {/* What We Do */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-medium text-black mb-4">What We Do</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {data.whatWeDo}
                            </p>
                        </div>

                        {/* Our Approach */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-medium text-black mb-4">Our Approach</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {data.approach}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <CTASection />

        </>
    );
};

export default ServiceDetailsPage;
