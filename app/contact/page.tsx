import { type Metadata } from "next";
import ContactHero from "@/components/contact-page/ContactHero";
import ContactForm from "@/components/contact-page/ContactForm";
import ContactInfo from "@/components/contact-page/ContactInfo";
import ContactMap from "@/components/contact-page/ContactMap";
import { contactInfo } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: 'Contact Us | Next Switch',
  description: 'Get in touch with Next Switch for your next project. We\'re here to help bring your ideas to life with web development, mobile apps, and custom software solutions.',
  openGraph: {
    title: 'Contact Us | Next Switch',
    description: 'Get in touch with Next Switch for your next project. We\'re here to help bring your ideas to life.',
    images: ['/og-contact.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Next Switch',
    description: 'Get in touch with Next Switch for your next project.',
    images: ['/og-contact.jpg'],
  },
};

export default function ContactPage() {
  // JSON-LD structured data for organization contact info
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Next Switch',
    url: 'https://nextswitch.com',
    logo: 'https://nextswitch.com/next-switch-logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactInfo.phone,
      contactType: 'customer service',
      email: contactInfo.email,
      areaServed: 'US',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.address.split(',')[0],
      addressLocality: contactInfo.address.split(',')[1]?.trim(),
      addressRegion: contactInfo.address.split(',')[2]?.trim().split(' ')[0],
      postalCode: contactInfo.address.split(',')[2]?.trim().split(' ')[1],
      addressCountry: 'US'
    },
    sameAs: contactInfo.socialLinks.map(link => link.url)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ContactHero />
        
        {/* Contact Form and Info Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Form - Takes up 3 columns on desktop */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Contact Info - Takes up 2 columns on desktop */}
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Visit Our Office
              </h2>
              <p className="text-gray-600">
                We'd love to meet you in person. Drop by our office or schedule a meeting.
              </p>
            </div>
            <ContactMap />
          </div>
        </section>
      </main>
    </>
  );
}
