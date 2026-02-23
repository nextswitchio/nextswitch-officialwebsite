'use client';

import { useState } from "react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { contactInfo } from "@/lib/data/contact";

export default function ContactMap() {
  const [isLoading, setIsLoading] = useState(true);

  const { latitude, longitude } = contactInfo.coordinates;
  
  // Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919355!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40wrDQyJzQ2LjEiTiA3NMKwMDAnMDIuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`;

  return (
    <AnimatedSection variant="fadeInUp" delay={0.7}>
      <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gray-100">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#006FF5] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoading(false)}
          title="Next Switch Office Location"
          aria-label="Map showing Next Switch office location"
        />
      </div>
    </AnimatedSection>
  );
}
