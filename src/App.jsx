import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-tertiary'>
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
