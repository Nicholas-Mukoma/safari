import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Classification from './components/Classification'
import Scoring from './components/Scoring'
import Benefits from './components/Benefits'

function App() {

  return (
    <div className='bg-tertiary'>
      <Hero />
      <Features />
      <Benefits />
      <Classification />
      <Scoring />
    </div>
  )
}

export default App
