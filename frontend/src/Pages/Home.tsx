//import { useState } from 'react'
import Carousel from '../components/Carousel'
import ColorSection from '../components/ColorSection'
import CookieBanner from '../components/CookieBanner'
import TestimonialsSlider from '../components/TestimonialsSlider'
import Opiniones from '../components/Opiniones'



export const Home = () => {
  const images = [
    '../src/assets/cartel1.png',
    '../src/assets/cartel1.png',
    '../src/assets/cartel1.png'
  ]

  return (
    <div>
      <Carousel images={images} />
      <br />
      <ColorSection />
      <br />
      <br />
      <Opiniones/>
      <CookieBanner />
    </div>
  )
  
};
