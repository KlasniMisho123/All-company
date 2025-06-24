import React from 'react'

import { Exo_2, Inter } from 'next/font/google'

const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function StrongSidesScroll() {
    const CardElements = (
        <>
            <div className='flex gap-2 items-center border-2 px-4 p-1 rounded-full truncate hover:bg-red-500 group transition-colors duration-200'>
                <i className='fa-solid fa-bullseye text-red-400 group-hover:text-white transition-colors duration-200'></i>
                <span className={`${exo2.className} group-hover:text-white transition-colors duration-200`}>Client Targeted</span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full truncate hover:bg-blue-500 group transition-colors duration-200'>
            <i className="fa-solid fa-flask text-blue-400 group-hover:text-white transition-colors duration-200"></i>
            <span className={inter.className}>Brand Alchemists</span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full truncate hover:bg-teal-500 group transition-colors duration-200'>
            <i className="fa-solid fa-gauge-high text-teal-400 group-hover:text-white transition-colors duration-200"></i>
            <span className={inter.className}>Turbo Workflow</span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full truncate hover:bg-pink-500 group transition-colors duration-200'>
            <i className="fa-solid fa-user text-pink-400 group-hover:text-white transition-colors duration-200"></i>
            <span className={inter.className}>Dedicated Designers</span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full truncate hover:bg-cyan-500 group transition-colors duration-200'>
            <i className="fa-solid fa-fingerprint text-cyan-400 group-hover:text-white transition-colors duration-200"></i>
            <span className={inter.className}>Unique Designs</span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full truncate hover:bg-yellow-500 group transition-colors duration-200'>
            <i className="fa-solid fa-medal text-yellow-400 group-hover:text-white transition-colors duration-200"></i>
            <span className={inter.className}>Quality</span>
            </div>
        </>
    );

  return (
    <section className=' my-10 bg-gradient-to-r from-slate-900 to-slate-800 py-4 px-2  overflow-hidden strong-sides w-full '>
        <div className="flex items-center gap-10 animate-infinite-scroll w-max">
            {CardElements}
            {CardElements}
            {CardElements}
            {CardElements}
        </div>
    </section>
  )
}
