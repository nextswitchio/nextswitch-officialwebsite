import { div } from 'framer-motion/client'
import PressHero from '@/components/press/PressHero'
import React from 'react'
import PressBody from '@/components/press/PressBody'
import PressCTA from '@/components/press/PressCTA'



const Press = () => {
  return (
    <div className="pt-22" >
      <PressHero />
      <PressCTA />
      <PressBody />
    </div>

  )
}

export default Press