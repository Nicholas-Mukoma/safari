import React from 'react'
import Header from './Header'
import hero_bg from '../assets/hero_bg1.jpg'

const Hero = () => {
  return (
    <div className=" flex flex-col px-9">
        <Header />
        <div className='mt-9 flex flex-row justify-center w-full'>
          <div className='flex mr-auto ml-9 mt-12 text-start  flex-col gap-y-9 items-start w-[40vw]'>
            <h1 className='text-7xl sm:text-6xl font-extrabold'>Safari <span className='text-primary'>Green Building</span> Index</h1>
            <h3 className='text-4xl sm:text-3xl'>A <span className='text-primary font-bold'>Green Building</span> Rating Tool</h3>
            <p className='text-lg'>The SGBI is a National Rating System suitable for all kinds of buildings in different climatic zones in Kenya and the rest of East Africa.
            </p>
          </div>
          <div className='ml-auto'>
            <img src={hero_bg} alt="green building" className='w-[40vw] rounded-tl-[150px] rounded-bl-3xl rounded-tr-3xl rounded-br-3xl'/>
          </div>
          
        </div> 
    </div>
  )
}

export default Hero