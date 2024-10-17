import React from 'react'
import { coursesLinks, projectsLinks, languageLinks, aboutLinks } from '../constants'



const Element = ( { links } ) => {

    return (
        <div>
            <ul className='flex flex-col gap-3 text-lg'>
                {links.map((link) => (
                    <li key={link.id} className='hover:text-primary_variant text-white'>{link.title}</li>
                ))}
            </ul>
        </div>
    )
}

const Footer = () => {
  return (
    <section className='bg-[#031829] px-9 flex  flex-col items-start xl:flex-row justify-center gap-x-36'>
        <div className='mt-12 flex flex-col gap-6'>
            <h3 className='text-lg font-bold text-gray-300'>Courses</h3>
            <Element links={coursesLinks} />
        </div>
        <div className='mt-12 flex flex-col gap-6'>
            <h3 className='text-lg font-bold text-gray-300'>Projects</h3>
            <Element links={projectsLinks} />
        </div>
        <div className='mt-12 flex flex-col gap-6'>
            <h3 className='text-lg font-bold text-gray-300'>Languges</h3>
            <Element links={languageLinks} />
        </div>
        <div className='mt-12 flex flex-col gap-6'>
            <h3 className='text-lg font-bold text-gray-300'>About US</h3>
            <Element links={aboutLinks} />
        </div>
    </section>
  )
}

export default Footer