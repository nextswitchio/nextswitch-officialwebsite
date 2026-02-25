import React from 'react'
import EventsHero from '@/components/events/events-hero'
import EventList from '@/components/events/EventList'

const Events = () => {
  return (
    <main className=' pt-20'>
      <EventsHero />
      <EventList />
    </main>
  )
}

export default Events