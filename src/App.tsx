//import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'

const App = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ]

  return (
    <div>
      <Header />
      <Carousel images={images} slideInterval={3000} />
      <Footer />

    </div>
  )
}

export default App;
