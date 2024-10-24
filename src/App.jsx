import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Classification from './components/Classification'
import Scoring from './components/Scoring'

function App() {

  return (
    <div className='bg-tertiary'>
      <Hero />
      <Features />
      <Classification />
      <Scoring />
    </div>
  )
}

export default App
