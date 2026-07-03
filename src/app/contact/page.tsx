import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import ContactHero from "@/components/sections/contact/ContactHero"
import ContactInfo from "@/components/sections/contact/ContactInfo"
import ContactForm from "@/components/sections/contact/ContactForm"
import ContactCta from "@/components/sections/contact/ContactCta"
import Footer from "@/components/layout/Footer"
import { absoluteUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Contact — Next Switch",
  description:
    "Get in touch with Next Switch. Reach out for partnerships, inquiries, or to learn more about how we can help you with digital innovation and technology solutions in Africa.",
  keywords: [
    "contact Next Switch",
    "reach Next Switch Africa",
    "technology partnership Africa",
    "digital innovation inquiry",
    "contact African tech company",
    "Next Switch Lagos",
  ],
  openGraph: {
    title: "Contact — Next Switch",
    description:
      "Get in touch with Next Switch for partnerships, inquiries, or technology solutions in Africa.",
    url: absoluteUrl("/contact"),
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: "Contact Next Switch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Next Switch",
    description:
      "Get in touch with Next Switch for partnerships, inquiries, or technology solutions in Africa.",
    images: [absoluteUrl("/og.png")],
  },
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
