import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import joinus from '@/public/pictures/joinus.jpg';

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${joinus.src})`,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-2xl">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-white mb-4">
            Join Our Team
          </h2>

          {/* Description */}
          <p className="text-white/80 text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
            Join our team of creatives and developers to shape the future of African tech.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-[#006FF5] hover:bg-[#0056cc] text-white rounded-md px-6 py-3 text-base font-medium"
          >
            Apply Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
