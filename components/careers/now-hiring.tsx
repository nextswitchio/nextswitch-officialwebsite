"use client";

import { useState } from "react";
import { Zap, ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Development", "Design", "Content Writing", "Management"];

const jobs = [
    {
        id: 1,
        title: "Senior UX Writer",
        experience: "3+ years Exp.",
        location: "Ibadan",
        category: "Design",
    },
    {
        id: 2,
        title: "Product Designer",
        experience: "3+ years Exp.",
        location: "Ibadan",
        category: "Design",
    },
    {
        id: 3,
        title: "UI Developer",
        experience: "3+ years Exp.",
        location: "Ibadan",
        category: "Development",
    },
    {
        id: 4,
        title: "Graphic Designer",
        experience: "3+ years Exp.",
        location: "Ibadan",
        category: "Design",
    },
];

const NowHiring = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredJobs =
        activeCategory === "All"
            ? jobs
            : jobs.filter((job) => job.category === activeCategory);

    return (
        <section className="bg-[#f5f5f5] py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-[#006FF5] font-semibold uppercase tracking-wide mb-3">
                        NOW HIRING
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">
                        Open Positions Available
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Join us for exciting opportunities in a team that values growth and innovation
                    </p>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-[#006FF5] text-white"
                                    : "bg-transparent text-gray-600 hover:text-[#006FF5]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Job Listings */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {filteredJobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm border border-gray-100"
                        >
                            {/* Job Info */}
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#1a1a2e] mb-2">
                                    {job.title}
                                </h3>
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <Zap className="w-4 h-4 text-gray-400" />
                                    <span>{job.experience}</span>
                                    <span className="text-gray-300">|</span>
                                    <span>{job.location}</span>
                                </div>
                            </div>

                            {/* Apply Button */}
                            <Link
                                href={`/careers/${job.id}`}
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border-2 border-[#006FF5] text-[#006FF5] rounded-full font-medium hover:bg-[#006FF5] hover:text-white transition-all duration-300 text-sm whitespace-nowrap"
                            >
                                Apply Now
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredJobs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">
                            No positions available in this category at the moment.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NowHiring;