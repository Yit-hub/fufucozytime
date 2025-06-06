//import { useState } from 'react'
import Carousel from '../components/Carousel'
import ColorSection from '../components/ColorSection'
import CookieBanner from '../components/CookieBanner'
import Opiniones from '../components/Opiniones'
import cartel1 from '../assets/cartel1.png';



export const Home = () => {
  const images = [
    { url: "../src/assets/cartel1.png", link: "/encargos" }
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
