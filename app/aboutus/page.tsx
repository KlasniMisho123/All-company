import React from 'react'

export default function aboutus() {
  return (
    <div>
      <div className='relative h-[50vh] -mt-1 bg-cover bg-center flex items-center justify-center'
      style={{backgroundImage: "url(https://images.pexels.com/photos/17046790/pexels-photo-17046790.jpeg)"}}
      >
        <div className='absolute inset-0 w-full h-full z-10 bg-black opacity-35' />
          <div className='flex flex-col text-6xl font-semibold custom-selection-bg text-center text-white select-none '>
          <h2 className='z-20'>About us</h2>
        </div>
      </div>
      header
    </div>
  )
}
