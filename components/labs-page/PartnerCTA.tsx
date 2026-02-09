import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import patnerbg from '@/public/pictures/partnerbg.jpg';

const PartnerCTA = () => {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${patnerbg.src})`,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-light text-white mb-3 tracking-tight">
            Partner with us
          </h2>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base mb-6 leading-relaxed">
            Invest in a team of innovators and designers who are building the future of East African tech.
          </p>

          {/* CTA Button */}
          <Button
            size="default"
            className="bg-[#006FF5] rounded-none hover:bg-[#0056cc] text-white text-lg px-6 py-3 h-auto"
          >
            Become a Partner
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
