import React from 'react'

export default function responseSteps() {
  return (
    <div className='grid md:grid-cols-1 lg:grid-cols-1 w-full my-4 gap-4 '>
        <div className='flex w-full gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border-l-4 border-blue-600'>
            <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center'>
                <span className='text-blue-500 text-xl'><i className="fa-solid fa-comments text-3xl"></i></span>
            </div>
            <div className='flex-1'>
                <h3 className='font-medium text-gray-900 flex items-center gap-2'>
                2. Initial Response (Within 24 Hours)
                <span className='text-yellow-500'>⏳</span>
                </h3>
                <p className='text-gray-600 mt-1'>
                Our team is reviewing your request. Expect a personalized response soon!
                </p>
            </div>
        </div>
    </div>
  )
}
