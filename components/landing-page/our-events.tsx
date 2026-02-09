"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { montserrat, playfairDisplay } from "@/lib/fonts";

const OurEvents = () => {
    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left">
                        <span className={`${playfairDisplay.variable} font-sans  text-gray-500 text-lg md:text-xl mb-6 block uppercase tracking-wider`}>Our Events</span>

                        <h2 className={`${montserrat.variable} font-sans font-medium text-[#000814] text-2xl md:text-3xl lg:text-5xl leading-[1.1] mb-8`}>
                            Join our events & <br className="hidden md:block" /> Programmes
                        </h2>

                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0">
                            Explore a variety of events and programs designed to connect you with our community and expand your horizons.
                        </p>

                        <Button
                            size="lg"
                            className="rounded-full bg-linear-to-r from-[#00AEEF] to-[#01F9C6] text-[#001F3F] font-bold px-8 lg:px-5 py-3 lg:py-3 h-auto text-lg lg:text-xl hover:scale-105 hover:shadow-[0_0_40px_rgba(1,249,198,0.4)] transition-all duration-300 group"
                        >
                            Check our events
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                        </Button>
                    </div>

                    {/* Right Overlapping Images */}
                    <div className="flex-1 relative w-full lg:w-[600px] h-[350px] md:h-[500px] lg:h-[550px] mt-12 lg:mt-0">

                        {/* Background Image (Presentation) */}
                        <div className="absolute top-0 left-0 w-[75%] h-[85%] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform duration-700">
                            <Image
                                src="/pictures/ourevents.png"
                                alt="Tech Event Presentation"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Foreground Image (Speaker) */}
                        <div className="absolute bottom-0 right-0 w-[55%] h-[70%] md:w-[60%] md:h-[75%] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] z-10 border-4 border-white transition-all duration-500">
                            <Image
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&q=80"
                                alt="Conference Speaker"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurEvents;