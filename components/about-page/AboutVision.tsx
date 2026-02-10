import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const AboutVision = () => {
  return (
    <section className="py-16 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-12 flex flex-col gap-16 md:gap-20 lg:gap-28">
        <div className="text-black flex flex-col gap-6 md:gap-8 lg:gap-8">
          <div className="max-w-xl">
            <p className="font-semibold text-lg md:text-xl lg:text-2xl font-sans text-[#040404] leading-relaxed">
              At Next Switch, we're unlocking Africa's vast potential, driving progress through tech and sustainable projects.
            </p>
          </div>

          <div className="max-w-xl self-end">
            <p className="text-base md:text-lg lg:text-xl font-light text-right">
              At Ubuntu Dynamics, we're more than just a company; we're a collective of dreamers, innovators, and problem-solvers dedicated to uplifting Africa through technology and sustainable practices.
            </p>
            <button className="text-base md:text-lg hover:cursor-pointer lg:text-xl mt-4 md:mt-6 transition-all px-4 py-2 rounded-lg border-blue-900 border-1 ">
              Learn more
            </button>
          </div>
        </div>

        <div className="text-white flex flex-col gap-6 md:gap-8 lg:gap-8">
          <div className="max-w-xl">
            <Image src="/pictures/vision_image.png" alt="Our Vision" width={800} height={500} className=" object-cover" />
          </div>

          <div className="max-w-xl flex flex-col self-end">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 font-semibold text-[#040404]">Our Vision</h2>
            <p className="text-[#040404]/80 md:text-base lg:text-lg font-light leading-relaxed mb-8">
              At Next Switch, our vision is expansive and forward-thinking. We aspire to establish Africa as a premier hub for global technological advancement. Our mission is to spearhead innovative solutions, cultivate robust, independent communities, and stimulate enduring growth across the continent. We aim to secure a thriving and sustainable future for every African, fostering an environment where innovation flourishes and opportunities abound for all.</p>
            <button className="flex items-center gap-2 text-black md:text-lg lg:text-xl mt-4 md:mt-6 border border-black/20 px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-black/5 transition-all self-end">
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
