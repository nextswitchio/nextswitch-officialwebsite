"use client";

import Image from "next/image";
import { Star, Lightbulb, Target, Heart, Sparkles, Sprout } from "lucide-react";

// Mock data for the "Expert Team Members" avatars
const teamAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces",
];

const values = [
    {
        title: "Excellence",
        description: "We strive for excellence in every project. Our focus is to deliver exceptional results.",
        icon: Star,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Innovations",
        description: "We don't wait for the future to happen. At Next Switch innovation means always seeing numerous possibilities.",
        icon: Lightbulb,
        color: "bg-orange-100 text-orange-600",
        highlight: true, // For the bold "Next Switch" text
    },
    {
        title: "Purpose",
        description: "We work for meaning, not just money. We believe that business should bless, not just bill.",
        icon: Target,
        color: "bg-cyan-100 text-cyan-600",
    },
    {
        title: "Community",
        description: "Next Switch is a family of builders. We win, learn and grow together.",
        icon: Heart,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Integrity",
        description: "We build trust before transactions. We operate transparently, keep our promises and honor our words.",
        icon: Sparkles,
        color: "bg-cyan-100 text-cyan-600",
    },
    {
        title: "Redemption",
        description: "Creating intuitive, engaging, and effective user experiences. Redemption is the idea that innovation should heal.",
        icon: Sprout,
        color: "bg-blue-100 text-blue-600",
    },
];

const OurValues = () => {
    return (
        <section className="bg-[#f9f9f9] py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-12 gap-12 lg:gap-16 ">

                    {/* Left Side - Image with Overlay */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl md:mx-auto lg:mx-0 max-w-md lg:max-w-none">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                alt="Team collaborating"
                                fill
                                className="object-cover"
                            />

                            {/* Expert Team Members Overlay */}
                            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px]">
                                <p className="font-semibold text-sm mb-3 text-[#1a1a2e]">
                                    Expert Team<br />Members
                                </p>
                                <div className="flex items-center">
                                    {teamAvatars.map((src, i) => (
                                        <div
                                            key={i}
                                            className={`relative w-8 h-8 rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0`}
                                        >
                                            <Image
                                                src={src}
                                                alt="Member"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                    <div className="relative w-8 h-8 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-[10px] font-bold -ml-2">
                                        7+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:col-span-7">
                        <h3 className="text-orange-500 font-medium uppercase tracking-wide mb-2">
                            OUR VALUES
                        </h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-2">
                            Our Guiding Principles
                        </h2>
                        <p className="text-gray-500 mb-10 text-lg">
                            Dedicated to honesty, new Ideas, and teamwork.
                        </p>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {values.map((value) => (
                                <div
                                    key={value.title}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${value.color}`}>
                                        <value.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#1a1a2e] mb-3">
                                        {value.title}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {value.highlight ? (
                                            <>
                                                We don&apos;t wait for the future to happen. At <span className="font-bold text-black">Next Switch</span> innovation means always seeing numerous possibilities.
                                            </>
                                        ) : (
                                            value.description
                                        )}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurValues;