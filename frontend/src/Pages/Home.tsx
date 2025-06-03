//import { useState } from 'react'
import Carousel from '../components/Carousel'
import ColorSection from '../components/ColorSection'
import CookieBanner from '../components/CookieBanner'
import TestimonialsSlider from '../components/TestimonialsSlider'



export const Home = () => {
  const images = [
    '../src/assets/cartel1.png',
    '../src/assets/cartel1.png',
    '../src/assets/cartel1.png'
  ]
  const testimonials = [
  { id: 1, name: "Ana", message: "Me encanta este lugar, el café es excelente." },
  { id: 2, name: "Luis", message: "Ambiente tranquilo y buena música." },
  { id: 3, name: "María", message: "Los postres son deliciosos y el servicio genial." },
  { id: 4, name: "Andrés", message: "Me encanta este lugar, el café es excelente." },
  { id: 5, name: "Luisa", message: "Ambiente tranquilo y buena música." },
  { id: 6, name: "María Dolores", message: "Los postres son deliciosos y el servicio genial." },
  ];

  return (
    <div>
      <Carousel images={images} />
      <br />
      <ColorSection />
      <br />
      <TestimonialsSlider testimonials={testimonials} />
      <br />
      <CookieBanner />
    </div>
  )
  
};
