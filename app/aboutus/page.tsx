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

              <div className='flex flex-col gap-2'>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-prose">
                  What began as a small creative studio in a sunlit apartment has grown into a collective of passionate designers, developers, and storytellers. 
                  We didn&apos;t start with big budgets or fancy titles — just an obsession with crafting beautiful, purposeful design.
                </p>

                <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-prose">
                  Over the years, we've collaborated with clients across industries — from local startups to global brands — helping them shape visual identities, 
                  digital experiences, and products that speak to their audience. Every project is a new challenge, a new story waiting to be told.
                </p>

                <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-prose">
                  We believe great design isn&apos;t just about how things look — it's about how they make people feel. That&apos;s why we take the time to listen, explore, 
                  and create with intention. It&apos;s more than work to us — it&apos;s what we love to do.
                </p>
              </div>

            </div>
            <div className='flex-1'>Story Visuals</div>
          </div>
      </div>
    </div>
  )
}
