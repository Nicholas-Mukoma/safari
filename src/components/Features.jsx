import React, { useEffect, useRef, useState } from 'react'
import image from "../assets/images.jpeg"
import pic_2 from "../assets/pic_2.jpg"
import hero_bg1 from "../assets/hero_bg1.jpg"

import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";




const Features = () => {

  const [isIntersecting, setIsIntersecting] = useState([]);
  const refs = useRef([]);
 
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry, index) => {
        setIsIntersecting((prev) => {
          const newState = [...prev];
          newState[index] = entry.isIntersecting;
          return newState
        })
      })
    }

    const observer = new IntersectionObserver(observerCallback, { rootMargin: "-10px"});

    refs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect()
},[isIntersecting])



  useEffect(() => {

    refs.current.forEach((ref, idx) => {
      if (isIntersecting[idx]) {
        ref.querySelectorAll("div").forEach(el => {
          el.classList.add("slide-in")
        });
      } else {
        ref.querySelectorAll("div").forEach((el) => {
          el.classList.remove("slide-in")
        })
      }
    })
    
  }, [isIntersecting])

  return (
    <div className='w-full mt-16 px-6 xl:px-24 bg-secondary flex flex-col'>
        {/* Videos */}
        <div className='flex xl:flex-row flex-col justify-center gap-9 xl:gap-0 items-center mt-6 xl:mt-24 overflow-hidden' ref={(el) => (refs.current[0] = el)}>
            {/* text */}
            <div className='flex flex-col items-start gap-6 mr-auto'>
                <h2 className='text-white text-3xl font-bold'>Why <span className='text-white'>Green Buildings</span></h2>
                <p className='w-full xl:min-w-[30vw] xl:w-[30vw] text-wrap text-lg text-start text-ellipsis text-black xl:leading-9'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci perspiciatis voluptatem! Laborum neque iusto illo doloribus explicabo soluta modi temporibus unde voluptatum numquam! Aperiam necessitatibus eaque iste excepturi.
                </p>
                <button className=' flex px-3 py-2 gap-3 items-center bg-white hover:bg-blue rounded-md duration-500 font-bold'>
                  Learn More
                  <div>
                    <GoArrowRight size={18}/>
                  </div>
                </button>
            </div>
            {/* image */}
            <div className='ml-auto last-child'
            
            >
                <img src={hero_bg1} alt="lesson image" className=' w-full xl:w-[45vw] h-[60vh] object-cover rounded-xl'/>
            </div>
        </div>

        {/* IDE */}
        <div className='flex xl:flex-row flex-col-reverse justify-center gap-9 xl:gap-0 items-center mt-6 xl:mt-24 overflow-hidden' ref={(el) => (refs.current[1] = el)}>
            <div className='mr-auto first-child'>
                <img src={pic_2} alt="lesson image" className='w-full h-[60vh] xl:w-[45vw] object-cover rounded-xl'/>
            </div>
            <div className='flex flex-col items-start gap-6  ml-auto'>
                <h2 className='text-white text-3xl font-bold'>Purpose <span className='text-white'>of the Tool</span></h2>
                <p className='w-full xl:min-w-[30vw] xl:w-[30vw] text-wrap text-lg text-start text-ellipsis text-black xl:leading-9'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci perspiciatis voluptatem! Laborum neque iusto illo doloribus explicabo soluta modi temporibus unde voluptatum numquam! Aperiam necessitatibus eaque iste excepturi.
                </p>
                <button className=' flex px-3 py-2 gap-3 items-center bg-white hover:bg-blue rounded-md duration-500 font-bold'>
                  <div>
                    <GoArrowLeft size={18}/>
                  </div>
                  Learn More
                </button>
            </div>
            
        </div>

        {/* Projects */}
        <div className='flex xl:flex-row flex-col justify-center gap-9 xl:gap-0 items-center mt-6 xl:mt-24 overflow-hidden mb-12' ref={(el) => (refs.current[2] = el)}>
            <div className='flex flex-col items-start gap-6 mr-auto'>
                <h2 className='text-white text-3xl font-bold'>Scope <span className='text-white'>of the Tool</span></h2>
                <p className='w-full xl:min-w-[30vw] xl:w-[30vw] text-wrap text-lg text-start text-ellipsis text-black xl:leading-9'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci perspiciatis voluptatem! Laborum neque iusto illo doloribus explicabo soluta modi temporibus unde voluptatum numquam! Aperiam necessitatibus eaque iste excepturi.
                </p>
                <button className=' flex px-3 py-2 gap-3 items-center bg-white hover:bg-blue rounded-md duration-500 font-bold'>
                  Learn more
                  <div>
                    <GoArrowRight size={18}/>
                  </div>
                </button>
            </div>
            {/* image */}
            <div className='ml-auto last-child'>
                <img src={hero_bg1} alt="lesson image" className='w-full h-[60vh] xl:w-[45vw] object-cover rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default Features