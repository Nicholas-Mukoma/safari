import React from 'react'
import { firstMethods, secondMethods } from '../constants'
import NumberIcon from './NumberIcon'


const Number = ({number}) => {
  return (
    <div className='rounded-full p-3 bg-gray-200'>
      {number}
    </div>
  )
}

const Scoring = () => {
  return (
    <div className='flex flex-col items-center'>
        <h3 className='text-primary font-bold text-3xl m-6'>
            Scoring Methodology
        </h3>
        <p className='text-center w-[60vw] text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea corrupti modi accusantium beatae, quia sed autem facere sit corporis et obcaecati, saepe illum, voluptate sunt atque. Eaque, odio accusamus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea corrupti modi accusantium beatae, quia sed autem facere sit corporis et obcaecati, saepe illum, voluptate sunt atque. Eaque, odio accusamus!
        </p>
        <div className='mt-12 flex flex-row gap-x-24 w-full px-9 items-center justify-center'>
            {firstMethods.map((method) => (
              <div key={method.id} className='flex flex-col items-center'>
                <p><NumberIcon number={method.score}/></p>
                <p>{method.title}</p>
              </div>
            ))}
        </div>
        <div className='mt-12 flex flex-row gap-x-24 w-full px-9 items-center justify-center'>
            {secondMethods.map((method) => (
              <div key={method.id} className='flex flex-col items-center'>
                <p><NumberIcon number={method.score}/></p>
                <p className='text-center'>{method.title}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Scoring