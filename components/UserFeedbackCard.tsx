import React from 'react'

export default function UserFeedbackCard() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-slate-800 rounded-lg shadow text-sm text-gray-300">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
            <div
                className="h-16 w-16 border-2 border-slate-600 rounded-full bg-center bg-cover"
                style={{ backgroundImage: "url(/zoe-kravitz.jpg)" }}
            ></div>
            <span className="text-xs text-gray-400">userexample@gmail.com</span>
            </div>

            <div className="flex gap-1 text-[var(--shiny-yellow)]">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            </div>
        </div>

        <div className="bg-slate-700 p-3 rounded-md italic text-sm text-gray-300 leading-relaxed max-w-md">
        “This team truly understood our vision and brought it to life with care and creativity. I highly recommend them.”
        I highly recommend them.”
        </div>
        <span className="text-xl"></span>
    </div>
  )
}
