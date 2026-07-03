import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import BookingHero from "@/components/sections/booking/BookingHero"
import BookingForm from "@/components/sections/booking/BookingForm"
import BookingCta from "@/components/sections/booking/BookingCta"
import Footer from "@/components/layout/Footer"
import { absoluteUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Book a Consultation — Next Switch",
  description:
    "Schedule a consultation with Next Switch. Let's discuss how we can help you design, build, and scale technology-driven solutions for your business or organization in Africa.",
  keywords: [
    "book consultation Next Switch",
    "technology consultation Africa",
    "digital strategy session",
    "software project consultation",
    "innovation partnership",
    "tech consulting booking",
  ],
  openGraph: {
    title: "Book a Consultation — Next Switch",
    description:
      "Schedule a consultation with Next Switch to discuss your technology and innovation needs in Africa.",
    url: absoluteUrl("/booking"),
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: "Book a Consultation — Next Switch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Consultation — Next Switch",
    description:
      "Schedule a consultation with Next Switch to discuss your technology and innovation needs in Africa.",
    images: [absoluteUrl("/og.png")],
  },
  alternates: {
    canonical: absoluteUrl("/booking"),
  },
}

export default function BookingPage() {
  return (
    <>
      <Header />
      <main>
        <BookingHero />
        <BookingForm />
        <BookingCta />
      </main>
      <Footer />
    </>
  )
}
