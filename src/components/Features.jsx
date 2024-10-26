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
                <h2 className='text-white text-3xl font-bold'>Puropse <span className='text-white'>Of The Tool</span></h2>
                <p className='w-full xl:min-w-[40vw] xl:w-[40vw] text-wrap text-lg text-start text-ellipsis text-black xl:leading-9'>
                The Safari Green Building Index (SGBI) aims to address the pressing environmental and sustainability challenges prevalent in the construction industry within the East African region, particularly Kenya. The construction sector accounts for a significant portion of global energy consumption and greenhouse gas emissions, along with substantial resource depletion and waste generation. In Kenya, rapid urbanization and infrastructure development exacerbate these issues, necessitating a shift towards more sustainable building practices.
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
                <img src={hero_bg1} alt="lesson image" className=' w-full xl:w-[40vw] h-[60vh] object-cover rounded-xl'/>
            </div>
        </div>

        {/* IDE */}
        <div className='flex xl:flex-row flex-col-reverse justify-center gap-9 xl:gap-0 items-center mt-6 xl:mt-24 overflow-hidden' ref={(el) => (refs.current[1] = el)}>
            <div className='mr-auto first-child'>
                <img src={pic_2} alt="lesson image" className='w-full h-[60vh] xl:w-[40vw] object-cover rounded-xl'/>
            </div>
            <div className='flex flex-col items-start gap-6  ml-auto'>
                <h2 className='text-white text-3xl font-bold'>Why <span className='text-white'>SGBI?</span></h2>
                <p className='w-full xl:min-w-[40vw] xl:w-[40vw] text-wrap text-lg text-start text-ellipsis text-black xl:leading-9'>
                Safari Green Building Index (SGBI) distinguishes itself from competing solutions such as EDGE, BREEAM, and LEED by offering a simplified, cost-effective, and accessible approach to green building certification tailored specifically for the East African context, particularly aligning with Kenya's affordable housing program.
                Our competitive advantage lies in key areas such as <span className='font-bold text-lg text-start'>Simplicity, Cost Effectiveness, Local Relevance and Adaptability, Support for Affordable Housing Program</span>
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
                <h2 className='text-white text-3xl font-bold'>Social Impact</h2>
                <p className='w-full xl:min-w-[40vw] xl:w-[40vw] text-wrap text-lg text-start text-ellipsis text-black xl:leading-9'>
                The Safari Green Building Index (SGBI) is poised to have a profound social impact on communities in Kenya and the broader East African (EA) region by fostering sustainable development, improving living standards, and promoting social equity. Some of the key social impacts of SGBI include, <span className='font-bold text-lg'>Improved Quality of Life, Affordable Housing, Job Creation and Economic opportunities, Education and Awareness, Social Inclusion and Equity</span>
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
                <img src={hero_bg1} alt="lesson image" className='w-full h-[60vh] xl:w-[40vw] object-cover rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default Features