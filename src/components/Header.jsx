import React from 'react'
import NavBar from './NavBar'
import logo from "../assets/safari_index.png"

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-48 mt-3'>
        <div>
            <img src={logo} alt="Safari Logo" className='w-24 h-auto'/>
        </div>
        <NavBar />
    </div>
  )
}

export default Header