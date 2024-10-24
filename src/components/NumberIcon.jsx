import React from 'react'

const NumberIcon = ( {number} ) => {
    return (
      <div>
          <svg width="40" height="40" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="2" fill="none"></circle>
              <text  fontSize="40px" x="50%" y="50%" textAnchor="middle" stroke="#000" strokeWidth="2px" dy=".3em">
                  {number}
              </text>
              
          </svg>
      </div>
    )
  }
  
  export default NumberIcon