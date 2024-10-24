import React from 'react'

const NumberIcon = ( {number} ) => {
    return (
      <div className='text-white'>
          <svg width="60" height="60" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="1" fill="black"></circle>
              <text  fontSize="40px" x="50%" y="50%" textAnchor="middle" stroke="white" strokeWidth="2px" dy=".3em" color='white'>
                  {number}
              </text>
              
          </svg>
      </div>
    )
  }
  
  export default NumberIcon