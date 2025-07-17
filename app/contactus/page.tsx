import React from 'react'

export default function page() {
  return (
    <div>
      {/* Header BAckground */}
      <section className='mx-auto flex flex-col items-center g w-[90%] my-16 '>
        <div className='flex flex-col items-center gap-8'>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">
              It&apos;s Time to Design Something <span className="text-red-500">Exciting</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Transform your ideas into visually compelling experiences. Let&apos;s create something extraordinary together.
            </p>
          </div>
        </div>

        <div className='flex w-[90%] justify-evenly my-12 '> 
          <div className='flex flex-col items-center gap-4 bg-slate-900/50 rounded-2xl w-[30%] px-4 py-8 shadow-lg group transition-all duration-300 hover:-translate-y-2'>
            <i className="fa-solid fa-phone text-3xl transition-all duration-300 group-hover:text-emerald-500"></i>
            <span className='text-xl'>Phone</span>
            <span>+0-123-456-789</span>
          </div>
          <div className='flex flex-col items-center gap-4 bg-slate-900/50 rounded-2xl w-[30%] px-4 py-8 shadow-lg group transition-all duration-300 hover:-translate-y-2'>
            <i className="fa-solid fa-envelope text-4xl transition-all duration-300 group-hover:text-[var(--light-red)]"></i>
            <span className='text-xl'>Email</span>
            <span>Alldesigns@gmail.com </span>
          </div>
          <div className='flex flex-col items-center gap-4 bg-slate-900/50 rounded-2xl w-[30%] px-4 py-6 shadow-lg group transition-all duration-300 hover:-translate-y-2'>
            <i className="fa-brands fa-instagram text-5xl transition-all duration-300 group-hover:text-orange-500"></i>
            <span className='text-xl'>Instagram</span>
            <span> alldesign.ge</span>
          </div>
        </div>

        <div className='p-4 bg-slate-900/50 rounded-2xl w-[50%] '>
          <div className='text-center'> Contact Form</div>
          <form className='flex flex-col gap-4 rounded-xl'>
            <input placeholder='input-1'/>
            <input placeholder='input-2'/>
            <input placeholder='input-3'/>
            <input placeholder='input-4'/>
            <input placeholder='input-5'/>
          </form>
        </div>
        {/* Sucess Message */}
        <div className='my-12 shadow-xl bg-slate-900/50 rounded-lg p-4'> 
          <h3> WHAT HAPPENS AFTER SUBMIT a form </h3> 
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
        </div>
      </section>
      {/* Our Strong Sides */}
    </div>
  )
}
