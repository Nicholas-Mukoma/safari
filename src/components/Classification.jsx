import React from 'react'
import logo from "../assets/safari_index-removebg-preview.png"

const classes = [
    {
        id: 1,
        points: "80 - 100",
        logo: logo,
    },
    {
        id: 2,
        points: "70 - 79",
        logo: logo,
    },
    {
        id: 3,
        points: "60 - 69",
        logo: logo,
    },
    {
        id: 4,
        points: "50 - 59",
        logo: logo,
    },
]

const Classification = () => {
  return (
    <div className='flex flex-col items-center mt-6 mb-6'>
        <h3 className='text-primary font-bold text-3xl m-6'>Classification of Green Buildings</h3>
        <p className='text-center w-[50vw] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officia quod sit cumque sequi non, in quaerat, aspernatur dolorum exercitationem nam ut impedit autem! Reprehenderit harum atque ipsa eos quam.</p>
        <div className='flex flex-row gap-6 mt-3'>
            {classes.map((cls) => (
                <div key={cls.id} className='flex flex-col gap-3 items-center hover:scale-110 duration-500'>
                    <img src={cls.logo} alt="class logo" />
                    <p className='font-bold'>{cls.points} Points</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Classification