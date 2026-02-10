"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import Link from "next/link";

const ServiceHero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0a0a0a]">
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 z-0">
                {/* Main Background Dark Gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-[#0d0d12] via-[#0d0d12] to-[#1a1a2e]" />

                {/* Right Side Blue Blur Effect */}
                <div
                    className="absolute -right-[10%] top-0 bottom-0 w-[70%] opacity-90"
                    style={{
                        background: 'linear-gradient(225deg, rgba(60, 100, 255, 0.6) 0%, rgba(60, 100, 255, 0.2) 60%, transparent 100%)',
                        filter: 'blur(90px)',
                    }}
                />

                {/* Diagonal Light/Blue Beam */}
                <div
                    className="absolute right-0 top-0 w-[1000px] h-full opacity-40 rotate-12 origin-top-right transform translate-x-1/4"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(56, 189, 248, 0.5), transparent)',
                        filter: 'blur(70px)',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                        <span className="text-white/80 text-sm font-medium">Our Services</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white leading-tight mb-8 tracking-tight">
                        Elevate Your Vision With Our
                        <br />
                        Expert Development
                    </h1>

                    {/* Description */}
                    <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed font-light">
                        Delivering Solutions today, built with quality that empowers your tomorrow.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                        <Link href="#contact">
                            <Button
                                size="lg"
                                className="bg-[#00e5ff] hover:bg-[#00b8cc] text-[#0a0a0a] rounded-full px-8 h-12 text-base font-semibold"
                            >
                                Partner with us
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>

                        <Link href="/labs">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 h-12 text-base font-medium backdrop-blur-sm bg-white/5"
                            >
                                Learn about Labs
                                <ArrowDownRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;