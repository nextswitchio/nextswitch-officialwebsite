import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-[#020824] via-[#003a80] to-[#00a3ff] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <AnimatedSection variant="fadeInUp" className="max-w-4xl">
          <AnimatedText
            text="Get in Touch"
            variant="word"
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6"
            as="h1"
          />
          
          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <p className="text-white/80 text-lg md:text-xl lg:text-2xl font-display italic leading-relaxed">
              Let's bring your ideas to life. We're here to help you transform your vision into reality.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <p className="text-white/60 text-base md:text-lg mt-6 leading-relaxed max-w-2xl">
              Whether you need web development, mobile apps, custom software, or innovative solutions, our team is ready to discuss your project.
            </p>
          </AnimatedSection>
        </AnimatedSection>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
