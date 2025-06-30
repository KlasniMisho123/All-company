'use client'
import { Urbanist } from 'next/font/google';
import React, { useEffect, useState } from 'react'
import Link from "next/link"

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function UserFeed() {
    const [totalYears,SetTotalYears] = useState(Number)

    useEffect(()=> {
        const year = new Date().getFullYear()
        SetTotalYears(year - 2021)
    },[])

    return (
    <div className='flex flex-col w-[80%] mx-auto bg-gradient-to-l from-slate-800/60 to-slate-900 gap-8 rounded-xl shadow-lg p-4 '>
        {/* Highlighted Feedback From useres */}
       <div> 
        Feedback Div?
       </div>
       <div className='grid grid-cols-3 justify-evenly gap-4 '>
           <div className='flex flex-col gap-4 border border-blue-500 p-6 rounded-xl min-h-[200px] bg-slate-800 shadow-md'>
                <div className='bg-blue-500 p-5 rounded-full shadow-inner self-start'>
                    <i className='fa-solid fa-clock text-4xl text-white'></i>
                </div>
                <div className=''>
                    <h4 className={'text-2xl font-semibold text-blue-500 ' + urbanist.className}>{totalYears} Years</h4>
                    <h6 className={'text-gray-300 text-sm ' + urbanist.className}>In Your Service</h6>
                    <p className='text-gray-400 text-xs mt-2'>Delivering quality, trust, and innovation since day one.</p>
                </div>
                <Link className='mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition self-end group overflow-hidden rounded-xl -mr-3 '
                href={"/aboutus"}
                >   <i className="fa-solid fa-arrow-up rotate-45 transition-all duration-300 group-hover:translate-x-6 group-hover:-translate-y-6 "></i>  </Link>
            </div>

            <div className='row-span-2 border-1 border-pink-500 p-4 rounded-lg '>Happy Clients</div>
            <div className='border-1 border-pink-500 p-4 rounded-lg min-h-[200px] '>Product Designs Created</div>
            <div className='flex flex-col gap-4 border border-pink-500 p-6 rounded-xl min-h-[200px] bg-slate-800 shadow-md'>
                <div className='bg-pink-500 p-5 rounded-full shadow-inner self-start'>
                    <i className='fa-solid fa-champagne-glasses text-4xl text-white'></i>
                </div>
                <div className=''>
                    <h4 className={'text-2xl font-semibold text-pink-500 ' + urbanist.className}>15 Events Orginised</h4>
                    <h6 className={'text-gray-300 text-sm ' + urbanist.className}>In Your Service</h6>
                    <p className='text-gray-400 text-xs mt-2'>Delivering quality, trust, and innovation since day one.</p>
                </div>
                <Link className='mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-pink-600 transition self-end group overflow-hidden rounded-xl -mr-3 '
                href={"/aboutus"}
                >   <i className="fa-solid fa-arrow-up rotate-45 transition-all duration-300 group-hover:translate-x-6 group-hover:-translate-y-6 "></i>  </Link>
            </div>

            <div className='border-1 border-blue-500 p-4 rounded-lg min-h-[200px] '>Logos Created</div>
       </div>

    </div>
  )
}
