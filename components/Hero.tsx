import Footer from "@/components/Footer";
import React from 'react'

export default function Hero() {
  return (
    <div className='h-[100vh]'>
      <section className="mx-30 my-12 flex gap-2 ">
        <div className="flex-1 flex flex-col gap-4">
          <h4 className="text-lg text-[var(--error-color)] font-semibold ">Designs That Speak for You</h4>
          <h2 className="text-6xl max-w-[500px] ">
            Get Custom Visuals for Social Media,
            Branding, Events, and More
          </h2>
          <h4 className="text-lg font-semibold "> Crafted Uniquely. Designed Just for You.</h4>
          <div className="pt-4">
            <button className="text-xl text-[var(--error-color)] font-semibold cursor-pointer transition-all duration-300 hover:text-white "> Order Now </button>
            <div className="text-gray-700" > Already Have Account? <span className="font-bold "> Log In </span> </div>
          </div>
        </div>
        <div className="flex-1 bg-green-200">
          Grid
        </div>
      </section>

    </div>
  )
}
