'use client'
import React from 'react'
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export default function FaqComponent() {

    const faqContent = [
        ["question1 ?", "answer1 !"],
        ["question2 ?", "answer2 !"],
        ["question3 ?", "answer3 !"],
        ["question4 ?", "answer4 !"],
        ["question5 ?", "answer5 !"]
    ];

  return (
    <div className='hadow-lg bg-slate-900/50 rounded-xl h-[500px] px-6 py-8 ' >
        <div className='flex gap-2 justify-center '>
            <p className={'text-xl ' + playfairDisplay.className} > <span className='text-red-500 font-semibold'>F</span>riquently</p>
            <p className={'text-xl ' + playfairDisplay.className} > <span className='text-red-500 font-semibold'>A</span>ked</p>
            <p className={'text-xl ' + playfairDisplay.className} > <span className='text-red-500 font-semibold'>Q</span>uestions</p>
        </div>
        <div className='grid grid-cols-2 mt-10 gap-6 '>
            {faqContent.map((element, index,)=>{
                return(
                        <div key={index} >
                           <span className='text-green-500'>  {faqContent[index][0]} </span>
                           <span className='text-red-500'> {faqContent[index][1]} </span>
                        </div>
                )
            })}
            
        </div>
    </div>
  )
}
