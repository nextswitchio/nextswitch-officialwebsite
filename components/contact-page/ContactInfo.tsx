import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { contactInfo } from "@/lib/data/contact";

const iconMap = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  facebook: Facebook,
};

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <AnimatedSection variant="fadeInUp" delay={0.1}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Contact Information
        </h2>
      </AnimatedSection>

      {/* Email */}
      <AnimatedSection variant="fadeInUp" delay={0.2}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#006FF5]/10 flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-[#006FF5]" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-gray-600 hover:text-[#006FF5] transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Phone */}
      <AnimatedSection variant="fadeInUp" delay={0.3}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#006FF5]/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-[#006FF5]" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Phone</h3>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="text-gray-600 hover:text-[#006FF5] transition-colors"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Address */}
      <AnimatedSection variant="fadeInUp" delay={0.4}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#006FF5]/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-[#006FF5]" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Office</h3>
            <p className="text-gray-600">{contactInfo.address}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Social Links */}
      <AnimatedSection variant="fadeInUp" delay={0.5}>
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex gap-3">
            {contactInfo.socialLinks.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#006FF5] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </a>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Business Hours */}
      <AnimatedSection variant="fadeInUp" delay={0.6}>
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Business Hours</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="font-medium">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span className="font-medium">10:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span className="font-medium">Closed</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
