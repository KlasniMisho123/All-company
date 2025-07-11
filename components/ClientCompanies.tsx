import React from 'react'
import Image from 'next/image'

export default function ClientCompanies() {
  return (
    <div className='flex justify-evenly items-center bg-gradient-to-r from-slate-900 to-slate-800 px-2 py-8 ' >  

        <div className='max-w-[20%] h-[120px] transition-all duration-300 grayscale-100 hover:grayscale-0 scale-110 opacity-50  hover:scale-140 hover:opacity-100 '>
            <Image
            src={"/companies/noctvrna.png"}
            className='object-cover w-full h-full min-w-[150px]'
            alt="Noctvrna logo"
            height={200}
            width={200}
            />
        </div>
        <div className='max-w-[20%] h-[120px] transition-all duration-300 grayscale-100 hover:grayscale-0 opacity-50 hover:scale-130 hover:opacity-100 '>
            <Image
            src={"/companies/need.png"}
            className='object-cover w-full h-full min-w-[150px]'
            alt="Need logo"
            height={200}
            width={200}
            />
        </div>
        <div className='max-w-[20%] h-[120px] transition-all duration-300 grayscale-100 hover:grayscale-0 opacity-50 scale-150  hover:scale-180 hover:opacity-100 '>
            <Image
            src={"/companies/dune.png"}
            className='object-cover w-full h-full min-w-[150px]'
            alt="Dune logo"
            height={200}
            width={200}
            />
        </div>
        <div className='max-w-[20%] h-[120px] transition-all duration-300 grayscale-100 hover:grayscale-0 opacity-50 hover:scale-130 hover:opacity-100 '>
            <Image
            src={"/companies/star.png"}
            className='object-cover w-full h-full min-w-[150px]'
            alt="Star logo"
            height={200}
            width={200}
            />
        </div>
        <div className='max-w-[20%] h-[120px] transition-all duration-300 grayscale-100 hover:grayscale-0 scale-110 opacity-50  hover:scale-140 hover:opacity-100 '>
            <Image
            src={"/companies/superlative.png"}
            className='object-cover w-full h-full min-w-[150px]'
            alt="Superlative logo"
            height={200}
            width={200}
            />
        </div>
    </div>
  )
}
