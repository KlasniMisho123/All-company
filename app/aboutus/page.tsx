import React from 'react'
import { Urbanist } from 'next/font/google';


const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function aboutus() {
  return (
    <div>
      <div className='relative h-[50vh] -mt-1 bg-cover bg-center flex items-center justify-center'
      style={{backgroundImage: "url(https://images.pexels.com/photos/17046790/pexels-photo-17046790.jpeg)"}}
      >
        <div className='absolute inset-0 w-full h-full z-10 bg-black opacity-35' />
          <div className='flex flex-col text-6xl font-semibold custom-selection-bg text-center text-white select-none '>
          <h2 className={'z-20 ' + urbanist.className}>About Us</h2>
        </div>
      </div>
      <div className='my-12 flex justify-center '>
          <div className='flex p-6 px-8  w-[80%] shadow-lg bg-slate-900/50 rounded-2xl '>
            <div className="flex flex-col flex-1 gap-6 max-w-3xl">
              <h5 className="text-white bg-[var(--light-red)] w-max px-3 py-1 rounded-sm text-xs md:text-sm tracking-wide uppercase font-semibold">
                How It Started
              </h5>

              <h3
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--light-red)] to-transparent bg-clip-text text-transparent ${urbanist.className}`}
              >
                Our Story
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-prose">
                What began as a small creative studio in a sunlit apartment has grown into a collective of passionate designers, developers, and storytellers. 
                We didn’t start with big budgets or fancy titles — just an obsession with crafting beautiful, purposeful design.
                Since then, we’ve partnered with startups and established brands alike — shaping visual identities, building digital experiences, 
                and bringing stories to life. For us, great design is about more than just how things look; it’s about how they connect, 
                communicate, and leave a lasting impression. That’s why we create with intention — and with people in mind.
              </p>

            </div>
            <div className='flex-1'>Story Visuals</div>
          </div>
      </div>
    </div>
  )
}
