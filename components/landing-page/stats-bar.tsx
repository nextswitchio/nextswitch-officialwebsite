import Image from "next/image";
import { Quote } from "lucide-react";


const StatsBar = () => {
  return (
    <div className="bg-black/30 backdrop-blur-lg ">
      <div className="container mx-auto px-6 py-5">
        <div className="flex flex-col md:flex-row items-center  md:gap-10 gap-5">

          {/* Stats */}
          <div className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-bold text-white">
              500+ Projects Delivered
            </span>
            {/* <div className="hidden md:block h-8 w-px bg-border" /> */}
          </div>

          <div className="  md:h-20 md:w-px h-px w-full bg-gray-400 ">

          </div>
          {/* Testimonial */}
          <div className="flex items-center gap-4 max-w-xl">
            <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Testimonial author"
                className="w-full h-full object-cover"
                width={48}
                height={48}
              />
            </div>
            <div className="flex-1 relative">
              <p className="text-sm text-white leading-relaxed">
                &quot;Collaborating with Lightning Africa completely transformed our company&apos;s trajectory,
                enhancing efficiency and driving innovation across all departments.&quot;
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
