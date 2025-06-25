import React from 'react'
import Image from 'next/image'

export default function ClientCompanies() {
  return (
    <div className='flex justify-evenly items-center bg-gradient-to-r from-slate-900 to-slate-800 px-2 py-12 text-white ' >
        <div className='max-w-[20%] h-[90px] transition-all duration-300 grayscale-100 hover:grayscale-0 hover:scale-110 '>
            <img
            src={"/companies/sura.jpg"}
            className='object-cover w-full h-full min-w-[125px]'
            />
        </div>
        <div className='max-w-[20%] h-[90px] transition-all duration-300 grayscale-100 hover:grayscale-0 hover:scale-110 '>
            <img
            src={"/companies/adBlueVega.jpg"}
            className='object-fit w-full h-full min-w-[125px] '
            />
        </div>
        <div className='max-w-[20%] h-[90px] transition-all duration-300 grayscale-100 hover:grayscale-0 hover:scale-110 '>
            <img
            src={"/companies/sulfix.jpg"}
            className='object-cover w-full h-full min-w-[125px]'
            />
        </div>
        <div className='max-w-[20%] h-[90px] transition-all duration-300 grayscale-100 hover:grayscale-0 hover:scale-110 '>
            <img
            src={"/companies/clinton.png"}
            className='object-cover w-full h-full min-w-[125px]'
            />
        </div>
        <div className='max-w-[20%] h-[90px] transition-all duration-300 grayscale-100 hover:grayscale-0 hover:scale-110 '>
            <img
            src={"/companies/ramires.png"}
            className='object-cover w-full h-full min-w-[125px]'
            />
        </div>
    </div>
  )
}
