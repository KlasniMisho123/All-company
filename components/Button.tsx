import React from 'react'

export default function Button() {
  return (
    <button className="relative self-start border-2 border-red-500 rounded-full overflow-hidden cursor-pointer px-6 py-3 button-clipath bg-white ">
        <div className=" absolute inset-0 bg-[var(--error-color)] "></div>
        
        <span className="relative z-10 font-semibold ">Check Out Our Projects</span>
    </button>
  )
}
