const technologies = [
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original-wordmark.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" },
  { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
];

const TechnologiesSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <p className="text-foreground/60 text-sm font-medium mb-10">
          Technologies <span className="font-display-italic">We Use</span>
        </p>
        
        {/* Scrolling Tech Stack */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-6 lg:gap-10 animate-marquee">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex items-center gap-6 lg:gap-10 shrink-0">
                <span className="text-foreground/40 text-2xl">•</span>
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="h-10 lg:h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
