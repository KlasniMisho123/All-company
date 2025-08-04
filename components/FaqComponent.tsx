'use client'
import React, { useState } from 'react'
import { Playfair_Display } from 'next/font/google';
import { faqContent } from '@/utils';
import Link from "next/link";

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export default function FaqComponent() {
    const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);

    function selectQuestions(index:number) {
        setSelectedQuestions(prev => 
            selectedQuestions.includes(index) ?  prev.filter(i => i !== index) : [...prev, index]
        )
    }

  return (
    <div className='hadow-lg bg-slate-900/50 rounded-xl px-6 py-8 ' >
        <div className='flex gap-2 justify-center '>
            <p className={'text-xl ' + playfairDisplay.className} > <span className='text-red-500 font-semibold'>F</span>riquently</p>
            <p className={'text-xl ' + playfairDisplay.className} > <span className='text-red-500 font-semibold'>A</span>ked</p>
            <p className={'text-xl ' + playfairDisplay.className} > <span className='text-red-500 font-semibold'>Q</span>uestions</p>
        </div>
        <div className='flex justify-between mt-8 gap-6 '>
            <div className='flex-2 grid grid-cols-1 gap-4 '>
                {faqContent.map((element, index,)=>{
                    return (
                        <div key={index} className='rounded-lg border-l-2 bg-slate-800 rounded-l-xs border-l-[var(--light-red)] shadow-lg p-4 cursor-pointer overflow-hidden '
                         onClick={()=>{
                                selectQuestions(index)
                            }}>
                            <div className='flex items-center gap-4' >
                                <i className={"fa-solid fa-chevron-right -rotate-90 transition-all duration-300 " + (selectedQuestions.includes(index)? " rotate-90 ": " rotate-0 ")}></i>
                                <span className='text-white text-base '> {faqContent[index][0]} </span>
                            </div>
                            <div className='overflow-hidden transition-all duration-500 ease-in-out'
                                style={{
                                maxHeight: selectedQuestions.includes(index) ? '100px' : '0px',
                                opacity: selectedQuestions.includes(index) ? 1 : 0
                                }}>
                            <div className="mt-4 bg-slate-800 text-sm text-gray-200 leading-relaxed shadow-md p-4">
                                {faqContent[index][1]}
                            </div>

                            </div>
                        </div>
                    )
                })}
                <div className="w-full max-w-fit sm:max-w-full mx-auto py-2 px-3 sm:py-3 sm:px-6 md:px-8 bg-slate-700/50 rounded-full text-white mt-6 text-xs text-center sm:text-sm md:text-base min-w-[100px]">
                    <div className="flex flex-wrap justify-center items-center gap-x-1 gap-y-1 text-center">
                        <span>Didn&apos;t find the answer you are looking for?</span>
                        <span className="relative text-red-500 group cursor-pointer inline-block">
                            <Link href="/contactus" className="whitespace-nowrap">Contact us</Link>
                            <div className="absolute left-0 bottom-0 h-0.5 w-full bg-[var(--light-red)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
