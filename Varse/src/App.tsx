import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import Hero from './components/hero'
import Features from './components/features'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Features />
    </>
  )
}

export default App
