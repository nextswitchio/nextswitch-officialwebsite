"use client";

import { Button } from "@/components/ui/button";
import { Search, MoveDown, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimatedCard from "@/components/animations/AnimatedCard";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";

const EnquiryCard = () => {
    return (
        <div className="relative -mt-24 mb-24 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_30px_70px_rgba(0,0,0,0.08)] overflow-hidden group">
            {/* Background Decorative Curves (Dashed Lines) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
                <path
                    d="M700,50 C850,100 950,200 900,350"
                    stroke="#006FF5"
                    strokeWidth="1.5"
                    strokeDasharray="8 8"
                    className="opacity-15"
                    fill="none"
                />
                <path
                    d="M600,380 C500,300 550,100 650,20"
                    stroke="#006FF5"
                    strokeWidth="1.5"
                    strokeDasharray="8 8"
                    className="opacity-10"
                    fill="none"
                />
            </svg>

            <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-8 py-8 md:py-8 gap-4 relative z-10">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-2xl font-bold text-[#001F3F] mb-5 tracking-tight">
                        For Requests and inquiries
                    </h3>
                    <p className="text-gray-500 text-base  mb-12 max-w-lg leading-relaxed">
                        Reach out to us via email below for any additional media enquiries
                    </p>

                    <Link
                        href="mailto:hello@nextswitch.org"
                        className="inline-flex items-center gap-5 bg-[#F0F7FF] hover:bg-[#E1EFFF] transition-all duration-300 rounded-[1.25rem] px-6 py-4 group/btn"
                    >
                        <div className="w-14 h-14 rounded-xl bg-[#006FF5] flex items-center justify-center text-white shadow-xl shadow-blue-500/20 group-hover/btn:scale-105 transition-transform">
                            <Mail className="w-7 h-7" />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[#001F3F] font-bold text-lg">hello@nextswitch.org</span>
                            <ArrowUpRight className="w-7 h-7 text-[#001F3F] transition-transform group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1.5" />
                        </div>
                    </Link>
                </div>


                {/* Right Illustration (Megaphone) */}
                <div className="relative flex items-center justify-center translate-x-4">

                    {/* Background Highlight Gradient */}
                    <div className="absolute inset-0 bg-radial-gradient from-[#E6F4FF] via-transparent to-transparent rounded-full blur-3xl opacity-60" />

                    {/* Main Background Circle */}
                    <div className="absolute w-[30%] h-[30%] bg-linear-to-br from-[#D6E9FF] to-[#AEE2FF] rounded-full shadow-inner flex items-center justify-center overflow-hidden">

                        {/* Dotted lines inside circle */}
                        <div className="absolute inset-0 opacity-20 border-30 border-dashed border-white rounded-full scale-[1.2]" />

                    </div>

                    {/* Custom Illustration SVG Megaphone */}
                    <svg width="100" height="100" viewBox="0 0 200 200" fill="none" className="relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700">

                        {/* Megaphone Handle */}
                        <path d="M100 120L110 160C110 160 115 170 125 160L120 120" fill="#CBD5E1" />
                        <path d="M100 120L105 155" stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.3" />


                        {/* Body Back Piece */}
                        <path d="M60 80C55 85 55 95 60 100L70 115C75 120 85 120 90 115L150 85C150 85 160 80 155 70L145 55C140 50 130 50 125 55L60 80Z" fill="white" />

                        {/* Blue Bell Front */}
                        <path d="M145 35L175 130C178 140 165 150 155 145L120 30L145 35Z" fill="#3B66FF" />
                        <path d="M145 35L175 130C175 130 185 135 180 145L160 140C155 135 145 135 145 125L120 30L145 35Z" fill="#2563EB" />

                        {/* Bell Opening (Lip) */}
                        <path d="M145 35C145 35 150 30 155 35L185 130C185 130 190 140 175 135L145 35Z" fill="#1D4ED8" />

                        {/* Back Detail Button */}
                        <circle cx="182" cy="85" r="5" fill="#001F3F" />

                        {/* Internal Shadow */}
                        <path d="M60 80C60 80 58 90 60 100" stroke="#000" strokeWidth="0.5" strokeOpacity="0.05" />
                    </svg>

                </div>

            </div>
        </div>
    );
};

const blogPosts = [
    {
        id: 1,
        category: "Tech News",
        date: "January 30, 2026",
        title: "Next Switch paters with Fintech giants Palm-pay on new project Launch?",
        author: "By Samuel Asefon",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
    {
        id: 2,
        category: "Tech News",
        date: "January 30, 2026",
        title: "Next Switch paters with Fintech giants Palm-pay on new project Launch?",
        author: "By Samuel Asefon",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    },
    {
        id: 3,
        category: "Tech News",
        date: "January 30, 2026",
        title: "Next Switch paters with Fintech giants Palm-pay on new project Launch?",
        author: "By Samuel Asefon",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    },
    {
        id: 4,
        category: "Tech News",
        date: "January 30, 2026",
        title: "Next Switch paters with Fintech giants Palm-pay on new project Launch?",
        author: "By Samuel Asefon",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
    {
        id: 5,
        category: "Tech News",
        date: "January 30, 2026",
        title: "Next Switch paters with Fintech giants Palm-pay on new project Launch?",
        author: "By Samuel Asefon",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    },
    {
        id: 6,
        category: "Tech News",
        date: "January 30, 2026",
        title: "Next Switch paters with Fintech giants Palm-pay on new project Launch?",
        author: "By Samuel Asefon",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    },
    {
        id: 7,
        category: "Tech News",
        date: "January 30, 2026",
        title: "Next Switch paters with Fintech giants Palm-pay on new project Launch?",
        author: "By Samuel Asefon",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
    {
        id: 8,
        category: "Tech News",
        date: "January 30, 2026",
        title: "Next Switch paters with Fintech giants Palm-pay on new project Launch?",
        author: "By Samuel Asefon",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    },
    {
        id: 9,
        category: "Tech News",
        date: "January 30, 2026",
        title: "Next Switch paters with Fintech giants Palm-pay on new project Launch?",
        author: "By Samuel Asefon",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    },
];

export default function OurStories() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <section className="bg-white pb-20 lg:pb-32">
            <div className="container mx-auto px-4 lg:px-12">
                <EnquiryCard />

                {/* Header Section */}
                <AnimatedSection variant="fadeInUp">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-5">
                                Our Stories
                            </h2>
                            <p className="text-gray-500 text-lg md:text-xl">
                                Everything you need to know about what we do
                            </p>
                        </div>

                        <div className="flex items-center gap-4 bg-white w-full md:w-auto">
                            <div className="relative flex-1 md:w-96">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search blog"
                                    className="w-full pl-14 pr-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-black text-lg"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <Button className="bg-[#006FF5] hover:bg-blue-600 text-white rounded-2xl px-10 py-4 h-auto text-lg font-bold shadow-lg shadow-blue-500/20">
                                Search
                            </Button>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Blog Grid */}
                <StaggerContainer staggerDelay={0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                        {blogPosts.map((post) => (
                            <AnimatedCard 
                                key={post.id} 
                                hoverLift 
                                imageZoom
                                className="group cursor-pointer"
                            >
                                <article>
                                    <div className="relative aspect-4/3 rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between text-base mb-4 font-medium">
                                        <span className="text-gray-400 group-hover:text-[#006FF5] transition-colors">{post.category}</span>
                                        <span className="text-gray-400">{post.date}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-black mb-4 leading-tight group-hover:text-[#006FF5] transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-500 text-lg font-medium">
                                        {post.author}
                                    </p>
                                </article>
                            </AnimatedCard>
                        ))}
                    </div>
                </StaggerContainer>

                {/* Load More */}
                <div className="mt-24 flex justify-center">
                    <button className="flex items-center gap-3 text-[#006FF5] font-bold text-lg hover:gap-5 transition-all duration-300 group">
                        Load more
                        <MoveDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
