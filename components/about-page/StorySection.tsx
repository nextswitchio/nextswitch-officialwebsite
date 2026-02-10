import Image from "next/image";

const StorySection = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
              />
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-[#006FF5] to-[#01FFF0] text-white p-6 lg:p-8 rounded-2xl shadow-xl">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">10+</div>
                <div className="text-xs md:text-sm opacity-90">Years of Innovation</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-base font-light italic text-[#006FF5] mb-4">
              Our Story
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#040404] mb-8 leading-tight">
              Building Tomorrow's{" "}
              <span className="font-display italic">Solutions</span> Today
            </h3>
            <div className="space-y-6 text-[#040404]/70 leading-relaxed text-base md:text-lg">
              <p>
                Founded with a vision to transform Africa's digital landscape, Next Switch
                has grown from a small startup to a leading technology company serving
                clients across the continent and beyond.
              </p>
              <p>
                Our journey began with a simple belief: that African businesses deserve
                world-class technology solutions tailored to their unique challenges and
                opportunities. Today, we're proud to have delivered over 500 projects
                that have helped organizations streamline operations, engage customers,
                and drive growth.
              </p>
              <p>
                With a team of passionate innovators, developers, and strategists, we
                continue to push the boundaries of what's possible, creating digital
                experiences that make a real difference in people's lives.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="p-6 bg-[#F4F4F4] rounded-xl">
                <h4 className="text-lg font-semibold text-[#040404] mb-2">Our Mission</h4>
                <p className="text-sm text-[#040404]/70">
                  To empower African businesses with innovative technology solutions that
                  drive growth and create lasting impact.
                </p>
              </div>
              <div className="p-6 bg-[#F4F4F4] rounded-xl">
                <h4 className="text-lg font-semibold text-[#040404] mb-2">Our Vision</h4>
                <p className="text-sm text-[#040404]/70">
                  To be Africa's most trusted technology partner, leading the continent's
                  digital transformation journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
