//import { useState } from 'react'
import { ReactNode } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"


interface Props {
    children: ReactNode
}

function App({children}: Props){
  return(
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default App;
