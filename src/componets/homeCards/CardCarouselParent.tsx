import React from 'react'
import { CardCarousel } from '../ui/card-carousel'

const CardCarouselParent = () => {

    const images = [
        {src:'/images/card1.webp',alt:"Image 1"},
        {src:'/images/card2.webp',alt:"Image 2"},
        {src:'/images/card3.webp',alt:"Image 3"},
    ]

  return (
    <div>
        <CardCarousel images={images} showPagination={false} />
    </div>
  )
}

export default CardCarouselParent