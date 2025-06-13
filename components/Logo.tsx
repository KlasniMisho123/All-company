import React from 'react'
import Image from "next/image";
import Link from 'next/link';


export default function Logo() {
  return (
    <Link className='flex items-center '
    href={"/"}
    >
            {/* <i className="fa-solid fa-feather-pointed "></i>
            <i className="fa-solid fa-feather-pointed rotate-290 -ml-1 "></i>
            <span className=''>A</span>
            <span className=''>ll</span> */}
            <Image
            src="/logo.jpg"
            alt="Company Logo"
            className='rounded-full h-11 w-11 object-cover border-2 transition-all duration-300 hover:scale-125 cursor-pointer border-[#D32F2F] '
            width={120}
            height={60}         
            />
    </Link>
  )
}
