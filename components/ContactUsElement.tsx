import React from 'react'
import Link from 'next/link';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function ContactUsElement() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ">
          <div className="shadow-sm rounded-lg bg-gradient-to-r from-slate-900 to-slate-800mx-2 my-6 py-6 text-black rounded md:py-8 lg:py-10 md:mx-4 lg:mx-8 md:my-12">
              <div className="flex justify-center items-center overflow-hidden">
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center px-2 gap-2 sm:gap-4 sm:px-4 md:gap-10 lg:gap-20  ">
                  <div className='flex justify-center items-center p-8 border-2 border-gray-100 rounded w-20 h-20 cursor-pointer 
                  transition-all transition-duration-600 shadow-md  hover:shadow-none bg-[var(--error-color)] hover:bg-transparent group  border-transparent hover:border-[var(--error-color)] '>
                    <i className="fa-brands fa-rocketchat text-4xl text-gray-100 group-hover:text-[var(--error-color)] "></i>
                  </div>
                  <div className="space-y-0 sm:space-y-4">
                    <h1 className={" font-bold text-white text-lg sm:text-xl lg:text-2xl " + urbanist.className}>
                      Need a Customer Service?
                    </h1>
                    <p className="text-gray-300 overflow-hidden text-ellipsis hidden sm:inline sm:appear sm:text-sm md:text-base">
                      Our team is ready to assist you with any issues or questions you may have.
                    </p>
                  </div>

                <div className="flex my-6 gap-[20%] sm:gap-[10%]  ">
                  <Link className="flex-1 max-w-40 border-2 py-3 px-6 rounded-lg text-white bg-[var(--error-color)] border-[var(--error-color)] hover:border-white hover:brightness-90 text-center
                  transition-all duration-300 cursor-pointer shadow-sm whitespace-nowrap"
                  href={'/contactus'}
                  >
                    Contact Us
                  </Link>
                </div>

                </div>
              </div>
            </div>
          </section>
  )
}
