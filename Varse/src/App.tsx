import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import Hero from './components/hero'
import Features from './components/features'
import HowItWorks from './components/howItWorks'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <HowItWorks />
    </>
  )
}

export default App
