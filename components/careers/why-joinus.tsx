"use client";

import Image from "next/image";

const benefits = [
    {
        title: "Advance quickly with clear growth opportunities",
        description: "Receive competitive compensation, comprehensive health coverage, and a range of valuable perks designed to support your well-being and success.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        reverse: true, // Text left, Image right
    },
    {
        title: "Comprehensive Benefits Packages",
        description: "Receive competitive compensation, comprehensive health coverage, and a range of valuable perks designed to support your well-being and success.",
        image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&q=80",
        reverse: false, // Image left, Text right
    },
    {
        title: "Flexible Work Environment",
        description: "Enjoy a healthy work-life balance with options for remote work and flexible hours",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
        reverse: false,
    },
    {
        title: "Supportive Team Culture",
        description: "Receive competitive compensation, comprehensive health coverage, and a range of valuable perks designed to support your well-being and success.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        reverse: false,
    },
    {
        title: "Comprehensive Benefits Packages",
        description: "Receive competitive compensation, comprehensive health coverage, and a range of valuable perks designed to support your well-being and success.",
        image: "https://images.unsplash.com/photo-1499728603963-bc157d5c7659?w=800&q=80",
        reverse: false,
    },
    {
        title: "Collaborative Culture",
        description: "Enjoy comprehensive health coverage, competitive compensation, and many perks to support your success.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
        reverse: false,
    },
];

const WhyJoinUs = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="mb-16 max-w-2xl">
                    <p className="text-orange-500 font-medium uppercase tracking-wide mb-3">
                        WHY JOIN US
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-6 leading-tight">
                        Join a workplace that champions your <span className="text-[#006FF5]">growth, creativity, and well-being</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-lg">
                        Experience a fulfilling career with growth, flexibility, and a supportive team culture.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
                    {benefits.map((item, index) => (

                        <div
                            key={index}
                            className={`flex flex-col md:flex-row bg-white shadow-2xl items-center p-5 rounded-4xl gap-6 ${item.reverse ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-square md:aspect-4/3 rounded-2xl overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoinUs;