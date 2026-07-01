import Header from "@/components/layout/Header"
import BookingHero from "@/components/sections/booking/BookingHero"
import BookingForm from "@/components/sections/booking/BookingForm"
import BookingCta from "@/components/sections/booking/BookingCta"
import Footer from "@/components/layout/Footer"

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
