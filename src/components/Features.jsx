import React, { useEffect, useRef, useState } from 'react'
import image from "../assets/images.jpeg"





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
    <div className='w-full px-6 xl:px-24 bg-primary mt-3 xl:mt-12 flex flex-col'>
        {/* Videos */}
        <div className='flex xl:flex-row flex-col justify-center gap-9 xl:gap-0 items-center mt-6 xl:mt-24 overflow-hidden' ref={(el) => (refs.current[0] = el)}>
            {/* text */}
            <div className='flex flex-col items-start gap-6 mr-auto'>
                <h2 className='text-white text-3xl font-bold'>Interactive Lessons</h2>
                <p className='w-full xl:min-w-[30vw] xl:w-[30vw] text-wrap text-lg text-start text-ellipsis text-gray-300 xl:leading-9'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci perspiciatis voluptatem! Laborum neque iusto illo doloribus explicabo soluta modi temporibus unde voluptatum numquam! Aperiam necessitatibus eaque iste excepturi praesentium.
                </p>
            </div>
            {/* image */}
            <div className='ml-auto last-child'
            
            >
                <img src={image} alt="lesson image" className=' w-full xl:w-[45vw] h-auto object-cover'/>
            </div>
        </div>

        {/* IDE */}
        <div className='flex xl:flex-row flex-col-reverse justify-center gap-9 xl:gap-0 items-center mt-6 xl:mt-24 overflow-hidden' ref={(el) => (refs.current[1] = el)}>
            <div className='mr-auto first-child'>
                <img src={image} alt="lesson image" className='w-full xl:w-[45vw] h-auto object-cover'/>
            </div>
            <div className='flex flex-col items-start gap-6  ml-auto'>
                <h2 className='text-white text-3xl font-bold'>Online IDE</h2>
                <p className='w-full xl:min-w-[30vw] xl:w-[30vw] text-wrap text-lg text-start text-ellipsis text-gray-300 xl:leading-9'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci perspiciatis voluptatem! Laborum neque iusto illo doloribus explicabo soluta modi temporibus unde voluptatum numquam! Aperiam necessitatibus eaque iste excepturi praesentium.
                </p>
            </div>
            
        </div>

        {/* Projects */}
        <div className='flex xl:flex-row flex-col justify-center gap-9 xl:gap-0 items-center mt-6 xl:mt-24 overflow-hidden mb-12' ref={(el) => (refs.current[2] = el)}>
            <div className='flex flex-col items-start gap-6 mr-auto'>
                <h2 className='text-white text-3xl font-bold'>Build Real-World Projects</h2>
                <p className='w-full xl:min-w-[30vw] xl:w-[30vw] text-wrap text-lg text-start text-ellipsis text-gray-300 xl:leading-9'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci perspiciatis voluptatem! Laborum neque iusto illo doloribus explicabo soluta modi temporibus unde voluptatum numquam! Aperiam necessitatibus eaque iste excepturi praesentium.
                </p>
            </div>
            {/* image */}
            <div className='ml-auto last-child'>
                <img src={image} alt="lesson image" className='w-full xl:w-[45vw] h-auto object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Features