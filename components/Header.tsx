import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

export default function Header() {
  return (
    // [#D32F2F]
    // [#A10000]
    // [#F44336] 
    // fixed / absolute / middle outer-w transparent?
    <div className='flex items-center justify-between py-4 px-6 absolute z-100 bg-[#FAFAFA] text-[#D32F2F] rounded-b-lg w-full border-b-2  border-b-[#D32F2F]'> 
      <Logo />
      <div className='flex gap-4 font-semibold '>
          <Link className='cursor-pointer transition-all duration-300 hover:scale-105 hover:backdrop-blur-3xl '
          href={'/'}>
              Home</Link>
          <Link className='cursor-pointer transition-all duration-300 hover:scale-105 hover:backdrop-blur-3xl '
          href={'/services'}>Services</Link>
          <Link className='cursor-pointer transition-all duration-300 hover:scale-105 hover:backdrop-blur-3xl ' 
          href={'/aboutus'}
          >About us</Link>
      </div>
      <div className='cursor-pointer transition-all duration-300 hover:scale-105 hover:backdrop-blur-3xl font-semibold group'>
        <span>Login </span>
        < i className="fa-solid fa-right-to-bracket transition-all duration-300 ml-1 group-hover:translate-x-1 "/>
      </div>
  </div>
  )
}
