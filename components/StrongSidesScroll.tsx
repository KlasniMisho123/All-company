import React from 'react'

import { Exo_2, Inter } from 'next/font/google'

const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function StrongSidesScroll() {
  return (
    <section className=' my-10 bg-gradient-to-r from-slate-900 to-slate-800 py-4 px-2  overflow-hidden strong-sides w-full '>
        <div className="flex items-center gap-10 animate-infinite-scroll w-max">
            <div className='flex gap-2 items-center border-2 px-4 p-1 rounded-full truncate'>
                <i className='fa-solid fa-bullseye text-red-400 '> </i>
                <span className={` ` + exo2.className}> Client Targeted </span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full truncate'>
                <i className="fa-solid fa-flask text-blue-400"></i>
                <span className={inter.className}>Brand Alchemists</span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full truncate'>
                <i className="fa-solid fa-gauge-high text-teal-400 "></i>
                <span className={` ` + inter.className}> Turbo Workflow  </span>
            </div>
            
            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full truncate'>
                <i className="fa-solid fa-user text-pink-400"></i>
                <span className={` ` + inter.className}> Dedicated Designers </span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full truncate'>
                <i className="fa-solid fa-fingerprint text-cyan-400"></i>
                <span className={` ` + inter.className}> Unique Designs </span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full truncate'>
                <i className="fa-solid fa-medal text-yellow-400"></i>
                <span className={` ` + inter.className}> Quality </span>
            </div>

            {/* Dublicates */}
    
            <div className='flex gap-2 items-center border-2 px-4 p-1 rounded-full truncate'>
                <i className='fa-solid fa-bullseye text-red-400 '> </i>
                <span className={` ` + exo2.className}> Client Targeted </span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full'>
                <i className="fa-solid fa-flask text-blue-400"></i>
                <span className={inter.className}>Brand Alchemists</span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full '>
                <i className="fa-solid fa-gauge-high text-teal-400 "></i>
                <span className={` ` + inter.className}> Turbo Workflow  </span>
            </div>
            
             <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full '>
                <i className="fa-solid fa-user text-pink-400"></i>
                <span className={` ` + inter.className}> Dedicated Designers </span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full '>
                <i className="fa-solid fa-fingerprint text-cyan-400"></i>
                <span className={` ` + inter.className}> Unique Designs </span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full '>
                <i className="fa-solid fa-medal text-yellow-400"></i>
                <span className={` ` + inter.className}> Quality </span>
            </div>
            {/* Dublicates */}
    
            <div className='flex gap-2 items-center border-2 px-4 p-1 rounded-full truncate'>
                <i className='fa-solid fa-bullseye text-red-400 '> </i>
                <span className={` ` + exo2.className}> Client Targeted </span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full'>
                <i className="fa-solid fa-flask text-blue-400"></i>
                <span className={inter.className}>Brand Alchemists</span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full '>
                <i className="fa-solid fa-gauge-high text-teal-400 "></i>
                <span className={` ` + inter.className}> Turbo Workflow  </span>
            </div>
            
             <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full '>
                <i className="fa-solid fa-user text-pink-400"></i>
                <span className={` ` + inter.className}> Dedicated Designers </span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full '>
                <i className="fa-solid fa-fingerprint text-cyan-400"></i>
                <span className={` ` + inter.className}> Unique Designs </span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full '>
                <i className="fa-solid fa-medal text-yellow-400"></i>
                <span className={` ` + inter.className}> Quality </span>
            </div>
            {/* Dublicates */}
    
            <div className='flex gap-2 items-center border-2 px-4 p-1 rounded-full truncate'>
                <i className='fa-solid fa-bullseye text-red-400 '> </i>
                <span className={` ` + exo2.className}> Client Targeted </span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full'>
                <i className="fa-solid fa-flask text-blue-400"></i>
                <span className={inter.className}>Brand Alchemists</span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full '>
                <i className="fa-solid fa-gauge-high text-teal-400 "></i>
                <span className={` ` + inter.className}> Turbo Workflow  </span>
            </div>
            
             <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full '>
                <i className="fa-solid fa-user text-pink-400"></i>
                <span className={` ` + inter.className}> Dedicated Designers </span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full '>
                <i className="fa-solid fa-fingerprint text-cyan-400"></i>
                <span className={` ` + inter.className}> Unique Designs </span>
            </div>

            <div className='flex gap-2 items-center border-2 border-white px-4 p-1 rounded-full '>
                <i className="fa-solid fa-medal text-yellow-400"></i>
                <span className={` ` + inter.className}> Quality </span>
            </div>
        </div>
    </section>
  )
}
