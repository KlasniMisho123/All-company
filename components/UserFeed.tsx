import React from 'react'

export default function UserFeed() {
    return (
    <div className='flex flex-col w-[80%] mx-auto bg-gradient-to-l from-slate-800/60 to-slate-900 gap-8 rounded-xl shadow-lg p-4 '>
        {/* Highlighted Feedback From useres */}
       <div> 
        Feedback Div?
       </div>
       <div className='grid grid-cols-3 justify-evenly gap-4 '>
            <div className='border-1 border-blue-500 p-4 rounded-lg min-h-[200px] '>
               Years of Experience 
            </div>
            <div className='row-span-2 border-1 border-blue-500 p-4 rounded-lg '>Happy Clients</div>
            <div className='border-1 border-blue-500 p-4 rounded-lg min-h-[200px] '>Product Designs Created</div>
            <div className='border-1 border-blue-500 p-4 rounded-lg min-h-[200px] '>Events Orginised</div>
            <div className='border-1 border-blue-500 p-4 rounded-lg min-h-[200px] '>Logos Created</div>
       </div>

    </div>
  )
}
