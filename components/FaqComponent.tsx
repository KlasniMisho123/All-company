'use client'
import React, { useState } from 'react'
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export default function FaqComponent() {
    const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);


    const faqContent = [
        ["question1 ?", "answer1 !"],
        ["question2 ?", "answer2 !"],
        ["question3 ?", "answer3 !"],
        ["question4 ?", "answer4 !"],
        ["question5 ?", "answer5 !"]
    ];

    function selectQuestions(index:number) {

        setSelectedQuestions(prev => 
            selectedQuestions.includes(index) ?  prev.filter(i => i !== index) : [...prev, index]
        )
    }

  return (
    <div className='hadow-lg bg-slate-900/50 rounded-xl h-[500px] px-6 py-8 ' >
        <div className='flex gap-2 justify-center '>
            <p className={'text-xl ' + playfairDisplay.className} > <span className='text-red-500 font-semibold'>F</span>riquently</p>
            <p className={'text-xl ' + playfairDisplay.className} > <span className='text-red-500 font-semibold'>A</span>ked</p>
            <p className={'text-xl ' + playfairDisplay.className} > <span className='text-red-500 font-semibold'>Q</span>uestions</p>
            {selectedQuestions}
        </div>
        <div className='grid grid-cols-2 mt-10 gap-6 '>
            {/* {faqContent.map((element, index,)=>{
                return(
                        <div key={index} >
                           <span className='text-green-500'>  {faqContent[index][0]} </span>
                           <span className='text-red-500'> {faqContent[index][1]} </span>
                        </div>
                )
            })} */}
            <div className='border-2 border-white rounded-xl shadow-lg p-4 cursor-pointer overflow-hidden '>
                <div className='flex items-center gap-4 '
                onClick={()=>{
                    selectQuestions(0)
                }}
                >
                    <i className={"fa-solid fa-chevron-right -rotate-90 transition-all duration-300 " + (selectedQuestions.includes(0)? " rotate-90 ": " rotate-0 ")}></i>
                    <span className='text-white'> What services do you offer? </span>
                </div>
                <span className={'text-red-500 transition-all duration-300 ' + (selectedQuestions.includes(0)? "visible" : "hidden") }> all </span>
                {/* <span className={'text-red-500 transition-all duration-300 ' + (selectedQuestions.includes(0)? "visible" : "hidden") }> all </span> */}
            </div>
            <div >
                <span className='text-green-500'> ss?  </span>
                <span className='text-red-500'> ss1!</span>
            </div>
        </div>
    </div>
  )
}
