'use client'
import React, { useState } from 'react'
import { Playfair_Display } from 'next/font/google';
import { faqContent } from '@/utils';

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
            {selectedQuestions}
        </div>
        <div className='flex justify-between mt-10 gap-6 '>
            <div className='flex-2 grid grid-cols-1 gap-4 '>
                {faqContent.map((element, index,)=>{
                    return (
                        <div key={index} className='rounded-lg border-l-2 bg-slate-800 rounded-l-xs border-l-[var(--light-red)] shadow-lg p-4 cursor-pointer overflow-hidden '
                         onClick={()=>{
                                selectQuestions(index)
                            }}>
                            <div className='flex items-center gap-4' >
                                <i className={"fa-solid fa-chevron-right -rotate-90 transition-all duration-300 " + (selectedQuestions.includes(index)? " rotate-90 ": " rotate-0 ")}></i>
                                <span className='text-white'> {faqContent[index][0]} </span>
                            </div>
                            <div className='overflow-hidden transition-all duration-500 ease-in-out'
                                style={{
                                maxHeight: selectedQuestions.includes(index) ? '100px' : '0px',
                                opacity: selectedQuestions.includes(index) ? 1 : 0
                                }}>
                            <div className="px-4 mt-4 text-red-500 ">
                                {faqContent[index][1]} 
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='flex-1'> 
                <img src={"/faqImg1.png"}>
                </img>    
             </div>
        </div>
    </div>
  )
}
