import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    // [#D32F2F]
    // [#A10000]
    // [#F44336] 
    // fixed / absolute / middle outer-w transparent?
    <div className='flex absolute z-100 bg-[#D32F2F] py-5 px-6 justify-between text-white rounded-b-lg w-full '> 
      <div>
        <Logo />
      </div>
      <div className='flex gap-4 '>
          <div>Home</div>
          <div>Services</div>
          <div>Aboutus</div>
      </div>
      <div>Login</div>
  </div>
  )
}
