import Header from "@/components/layout/Header"
import ContactHero from "@/components/sections/contact/ContactHero"
import ContactInfo from "@/components/sections/contact/ContactInfo"
import ContactForm from "@/components/sections/contact/ContactForm"
import ContactCta from "@/components/sections/contact/ContactCta"
import Footer from "@/components/layout/Footer"

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
