import Image from "next/image";

const stats = [
    { value: "87", label: "NPS Score" },
    { value: "300+", label: "Satisfied clients" },
    { value: "200+", label: "Projects built" },
];

const OurIdeas = () => {
    return (
        <section className="bg-[#f0f0f0] py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                                alt="Creative workspace with brainstorming wall"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-6">
                            We are intentional<br />
                            about your <span className="text-[#f5a623]">ideas</span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed max-w-lg">
                            We revolutionize outdated systems, create infrastructure, and
                            develop successful products.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-[#e5e5e5] rounded-lg py-6 px-4 text-center"
                                >
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#006FF5] mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurIdeas;