const FutureBanner = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop')",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display italic text-white text-center px-4">
          The Future is Now
        </h2>
      </div>
    </section>
  );
};

export default FutureBanner;
