import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Classification from './components/Classification'

function App() {

  return (
    <div className='bg-tertiary'>
      <Hero />
      <Classification />
      <Features />
    </div>
  )
}

export default App
