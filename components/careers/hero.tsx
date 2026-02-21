"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedText from "@/components/animations/AnimatedText";
import AnimatedButton from "@/components/animations/AnimatedButton";

const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0a0a0a]">
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 z-0">
                {/* Main Background Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d12] via-[#0d0d12] to-[#1a1a2e]" />

                {/* Right Side Blue Blur Effect */}
                <div
                    className="absolute -right-[10%] top-0 bottom-0 w-[60%] opacity-80"
                    style={{
                        background: 'linear-gradient(225deg, rgba(60, 100, 255, 0.5) 0%, rgba(60, 100, 255, 0.1) 50%, transparent 100%)',
                        filter: 'blur(80px)',
                    }}
                />

                {/* Diagonal Light Beam */}
                <div
                    className="absolute right-0 top-0 w-[800px] h-full opacity-30 rotate-12 origin-top-right transform translate-x-1/4"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(56, 189, 248, 0.4), transparent)',
                        filter: 'blur(60px)',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                        <span className="text-white/80 text-sm font-medium">Career</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white leading-tight mb-8 tracking-tight">
                        Build the <span className="text-[#00e5ff] italic font-serif">future</span>
                        <br />
                        with us
                    </h1>

                    {/* Description */}
                    <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed">
                        Join Next Switch and work with the best. We're looking for smart,
                        creative, and forward-thinking people.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <Link href="#open-positions">
                            <Button
                                size="lg"
                                className="bg-[#00e5ff] hover:bg-[#00b8cc] text-[#0a0a0a] rounded-full px-8 h-12 text-base font-semibold"
                            >
                                Join the team
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>

                        <Link href="/about">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 h-12 text-base font-medium backdrop-blur-sm bg-transparent"
                            >
                                About Us
                                <ArrowUpRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;