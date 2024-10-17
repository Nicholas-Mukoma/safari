import React from 'react'
import Header from './Header'

const Hero = () => {
  return (
    <div className=" flex flex-col bg-[url('./assets/pic_1.jpg')] bg-cover bg-center h-[90vh]">
        <Header />
        <div className='mt-40 flex flex-col items-center justify-center gap-6'>
          <h1 className='font-extrabold text-6xl text-white'>Safari <span className='text-[#313a02]'>Green Building</span> Index</h1>
          <h1 className='text-4xl font-bold text-black ml-9'>A Green Building Rating Tool</h1> 
        </div> 
    </div>
  )
}

export default Hero