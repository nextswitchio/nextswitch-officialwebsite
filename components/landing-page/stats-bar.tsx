import Image from "next/image";
import { Quote } from "lucide-react";


const StatsBar = () => {
  return (
    <div className="bg-black/30 backdrop-blur-lg ">
      <div className="container mx-auto px-4 lg:px-12 py-5">
        <div className="flex flex-col md:flex-row items-center md:gap-12 gap-6">

          {/* Stats */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="text-base md:text-xl lg:text-2xl font-semibold text-white">
              500+ Projects Delivered
            </span>
            {/* <div className="hidden md:block h-8 w-px bg-border" /> */}
          </div>

          <div className="h-px w-full md:h-12 md:w-px bg-gray-400/30"></div>

          {/* Testimonial */}
          <div className="flex items-center gap-4 max-w-xl w-full md:flex-1">
            <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0 overflow-hidden border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Testimonial author"
                className="w-full h-full object-cover"
                width={48}
                height={48}
              />
            </div>
            <div className="flex-1 relative">
              <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                &quot;Collaborating with Lightning Africa completely transformed our company&apos;s trajectory, enhancing efficiency and driving innovation.&quot;
              <Quote className="w-6 h-6 text-white absolute -right-2 -top-2 "  />
              </p>
            </div>
            {/* <div className="text-primary text-4xl font-serif hidden sm:block"> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
