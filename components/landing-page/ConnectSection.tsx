"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import background from '@/public/pictures/background.jpg'

const ConnectSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main purple/blue swirl */}
        <div className="absolute top-0 right-0 w-[70%] h-full">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-600/40 via-purple-500/30 to-transparent rounded-full blur-3xl transform translate-x-1/4" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-b from-blue-600/30 via-purple-600/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[700px] h-[400px] bg-gradient-to-tl from-purple-800/40 via-purple-600/20 to-transparent rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4" />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          {/* Heading with italic "Connect" */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-sans text-white mb-4">
            <span className="italic font-display">Connect </span> With Us
          </h2>

          <p className="text-white text-xl mb-10">
            Get the latest insights, trends, and updates from Next Switch
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-xl gap-3 sm:gap-0">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 sm:h-14 bg-[#F4F4F4]/80 border-0 text-foreground placeholder:text-muted-foreground rounded-lg sm:rounded-none py-5 px-4 sm:px-6 focus-visible:ring-0 placeholder:text-base sm:placeholder:text-xl focus-visible:ring-offset-0"
              required
            />
            <Button
              type="submit"
              className="h-12 sm:h-14 px-6 sm:px-8 bg-[#006FF5] hover:bg-[#0051c7]/90 text-primary-foreground rounded-lg sm:rounded-none gap-2 shrink-0"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
