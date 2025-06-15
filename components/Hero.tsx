import Footer from "@/components/Footer";
import React from 'react'

export default function Hero() {
  return (
    <div className='h-[100vh]'>
      <section className="mx-30 my-12 flex gap-2 ">
        <div className="flex-1 flex flex-col gap-4">
          <h4 className="text-lg text-[var(--error-color)] font-semibold ">Designs That Speak for You</h4>
          <h2 className="text-6xl max-w-[600px] font-semibold leading-tight">
          <span className="pl-1 pr-4 border-2 border-blue-500 text-blue-500 rounded-r-full rounded-l-none mb-4"> Get Custom Visuals </span> 
            for Social Media,
            Branding, Events, and More
          </h2>
          <h4 className="text-lg font-semibold "> Crafted <span className="text-blue-500 "> Uniquely </span> . Designed Just for You.</h4>
          <div className="pt-4">
            <button className="text-xl text-[var(--error-color)] border-2 border-[var(--error-color)] font-semibold cursor-pointer rounded-full px-8 py-4 hover:bg-red-500 transition-all duration-300 hover:text-white "> Order Now </button>
            <div className="text-gray-700 mt-2">
              Already have an account?&nbsp;
              <span className="relative group font-bold cursor-pointer inline-block">
                <span className="transition-all duration-500 group-hover:text-blue-500">Log In</span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-blue-500 transition-transform duration-500 group-hover:scale-x-100"></span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-200">
          Grid
        </div>
      </section>

    </div>
  )
}
