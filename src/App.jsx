import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Projet from "./components/Projet"
import Footer from "./components/Footer"
import './App.css'
import Experiences from './components/Experiences'

function App() {
  return (
    <div>
      <div className='p-5 md:px[15%]' >
        <Navbar />
        <div id="Home">
          <Home />
        </div>

      </div>
      <div className='mx-4'>
        <div id="About">
          <About />
        </div>

        <div id="Experiences">
          <Experiences />
        </div>

        <div id="Projets">
          <Projet />
        </div>

        <Footer />
      </div>
    </div>

  )
}

export default App

