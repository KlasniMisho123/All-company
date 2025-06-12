import React from 'react'
import Image from "next/image";


export default function Logo() {
  return (
    <div className='flex gap-1 items-center '>
        <div className='flex items-center '>
            {/* <i className="fa-solid fa-feather-pointed "></i>
            <i className="fa-solid fa-feather-pointed rotate-290 -ml-1 "></i>
            <span className=''>A</span>
            <span className=''>ll</span> */}
            <Image
            src="/logo.jpg"
            alt="Company Logo"
            className='rounded-full h-9 w-9 object-cover '
            width={120}
            height={60}         
            />
        </div>
        <span>
        </span> 
    </div>
  )
}
