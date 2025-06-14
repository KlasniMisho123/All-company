import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <div className='px-2 pt-6 pb-4 border-t-2 rounded-t-lg bg-black '>
      <div className='flex justify-evenly'>
        <div></div>
        <div></div>
        
        <div>
          <Logo />
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  )
}
