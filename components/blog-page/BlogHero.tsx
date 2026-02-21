"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { playfairDisplay } from "@/lib/fonts";
import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedText from "@/components/animations/AnimatedText";
import AnimatedButton from "@/components/animations/AnimatedButton";

export default function BlogHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#001F3F] pt-20 pb-20">
            {/* Background Mesh/Beam Glow */}
            <div className="absolute inset-0 z-0">
                {/* Deep background */}
                <div className="absolute inset-0 bg-[#000814]" />

                {/* Diagonal Blue Beam */}
                <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-1/2 w-[150%] h-[500px] bg-blue-600/30 blur-[120px] rotate-[-35deg] transform-gpu pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-[10%] -translate-y-1/2 w-[120%] h-[300px] bg-indigo-500/20 blur-[100px] rotate-[-35deg] transform-gpu pointer-events-none" />

                {/* Subtle cyan glow */}
                <div className="absolute -bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
                    {/* Badge */}
                    <AnimatedSection variant="fadeInScale" delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-12 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                            <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#fff]"></span>
                            <span className="text-sm font-medium text-white tracking-wide">Our Blog</span>
                        </div>
                    </AnimatedSection>

                    {/* Heading */}
                    <AnimatedText 
                        text="Blogs and Publications for Next Switch"
                        variant="word"
                        className="text-3xl md:text-4xl lg:text-6xl mb-10 leading-tight tracking-tight"
                        staggerDelay={0.08}
                    />

                    {/* Subheader */}
                    <AnimatedSection variant="fadeInUp" delay={0.4}>
                        <p className="text-white/80 text-base md:text-lg lg:text-xl mb-14 max-w-3xl leading-relaxed font-light">
                            Find everything you need here- our logo, team photos, recent news, product images, and spotlights on our partners.
                        </p>
                    </AnimatedSection>

                    {/* CTA Button */}
                    <AnimatedSection variant="fadeInUp" delay={0.5}>
                        <AnimatedButton
                            variant="cta"
                            className="rounded-full bg-gradient-to-r from-[#00AEEF] to-[#01F9C6] text-[#001F3F] font-semibold px-8 py-3 h-auto text-base md:text-lg border-none w-full sm:w-auto"
                        >
                            Get In Touch
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                        </AnimatedButton>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
