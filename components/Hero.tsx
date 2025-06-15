import Footer from "@/components/Footer";
import React from 'react'

export default function Hero() {
  return (
    <div className='h-[100vh]'>
      <section className="mx-16 mt-8 flex gap-4 bg-pink-200">
        <div className="flex-1 bg-blue-200">
          <h4>Social Media For Learners</h4>
          <h2> Order and Get Customized Designs <br/>
          Decorations and more...
          </h2>
          <h4> We Will Unique Designs For You</h4>
          <button> Join </button>
          <div className="text-gray-700" > Already Have Account? <span className="font-bold "> Log In </span> </div>
        </div>
        <div className="flex-1 bg-green-200">
          Grid
        </div>
      </section>

    </div>
  )
}
