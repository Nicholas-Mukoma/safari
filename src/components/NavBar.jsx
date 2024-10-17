import React from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <div>
        <ul className='flex flex-row gap-x-9'>
            {navLinks.map((link) => (
                <li key={link.id}>
                    <a href={link.path}>{link.title}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NavBar