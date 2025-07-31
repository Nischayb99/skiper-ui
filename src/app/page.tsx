
import AiInputCard from '@/componets/homeCards/AiInputCard'
import CardCarouselParent from '@/componets/homeCards/CardCarouselParent'
import SpecialCard from '@/componets/homeCards/SpecialCard'
import TemplateCard from '@/componets/homeCards/TemplateCard'
import ThemeChange from '@/componets/homeCards/ThemeChange'
import HeroContent from '@/componets/landingPage/HeroContent'
import Navbar from '@/componets/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <CardCarouselParent />
      <TemplateCard />
      <SpecialCard />
      <AiInputCard />
      <ThemeChange />
    </div>
  )
}

export default page