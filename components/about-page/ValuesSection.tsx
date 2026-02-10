import { Lightbulb, Users, Shield, Rocket, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
    color: "from-[#006FF5] to-[#01FFF0]"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership to achieve extraordinary results.",
    color: "from-[#FF9212] to-[#FFD700]"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and transparency in all our dealings.",
    color: "from-[#8B5CF6] to-[#D946EF]"
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering quality that exceeds expectations.",
    color: "from-[#10B981] to-[#34D399]"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We are passionate about technology and its power to transform lives and businesses.",
    color: "from-[#EF4444] to-[#F97316]"
  },
  {
    icon: Globe,
    title: "Impact",
    description: "We measure our success by the positive impact we create for our clients and communities.",
    color: "from-[#0EA5E9] to-[#06B6D4]"
  }
];

const ValuesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#00337C] to-[#000916]">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-light italic text-[#01FFF0] mb-4">
            Our Core Values
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            What <span className="font-display italic">Drives</span> Us
          </h3>
          <p className="text-white/70 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            Our values are the foundation of everything we do. They guide our decisions,
            shape our culture, and define how we work with our clients and each other.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
                {value.title}
              </h4>
              <p className="text-white/60 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
