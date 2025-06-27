'use client'

import React from 'react'

export default function page() {

  return (
    <div>
      <div className='h-[50vh] -mt-1 bg-cover bg-center flex items-center justify-center'
      style={{backgroundImage:"url(https://xtratheme.com/elementor/factory/wp-content/uploads/sites/8/2018/09/slider-industrial-2.jpg)"}}
      >
        
        <div className='flex flex-col text-6xl font-semibold custom-selection-bg text-center  text-white '>
          <h2 className='bg-[var(--light-red)] py-3'> Our Company </h2>
          <h2 className=''> Services </h2>
        </div>

      </div>
      <div className='flex flex-col items-center justify-center my-12 gap-2 '>
        <h5 className='text-gray-300 text-lg '>What Can We Do?</h5>
        <h2 className='text-5xl '>OUR SERVICES <span className='text-red-500'> OVERVIEW </span> </h2>
        <p className='text-gray-300 max-w-[40%] text-center text-xl mt-4'> A factory, manufacturing plant or a production plant is an industrial site,
          usually consisting of buildings and machinery </p>
      </div>
    </div>
  )
}
