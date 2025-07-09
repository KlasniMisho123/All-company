'use client'
import React, { useState } from 'react'
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export default function FaqComponent() {
    const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);


    const faqContent = [
        ["What services do you offer?", "All Services!"],
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
        <div>
            <div className='inline'>1</div>
            <div className='inline'>2</div>
        </div>
        <div className='grid grid-cols-2 mt-10 gap-6 '>
            {faqContent.map((element, index,)=>{
                // Left Side
                return (
                    <div key={index}  className='border-2 border-white rounded-xl shadow-lg p-4 cursor-pointer overflow-hidden inline'>
                        <div className='flex items-center gap-4 '
                        onClick={()=>{
                            selectQuestions(index)
                        }}
                        >
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
            {faqContent.map((element, index)=>{
            // right Side
                return (
                    <div key={index}  className='border-2 border-white rounded-xl shadow-lg p-4 cursor-pointer overflow-hidden inline'>
                        <div className='flex items-center gap-4 '
                        onClick={()=>{
                            selectQuestions(index)
                        }}
                        >
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
    </div>
  )
}
