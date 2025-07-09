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

   const faqContentEven: [string, string, number][] = [];
    const faqContentOdd: [string, string, number][] = [];

    for (let i = 0; i < faqContent.length; i++) {
    const [question, answer] = faqContent[i];
    const entry = [question, answer, i] as [string, string, number];
    if (i % 2 === 0) {
        faqContentEven.push(entry);
    } else {
        faqContentOdd.push(entry);
    }
    }

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

        {/* <div className='grid grid-cols-2 mt-10 gap-6 '> */}
        <div className='grid grid-cols-2 mt-10 gap-6 '>
            {/* Left side */}
            {faqContentOdd.map(([question, answer, originalIndex]) => (
            <div
                key={originalIndex}
                className='border-2 border-white rounded-xl shadow-lg p-4 cursor-pointer overflow-hidden inline'
            >
                <div
                className='flex items-center gap-4'
                onClick={() => {
                    selectQuestions(originalIndex);
                }}
                >
                <i
                    className={
                    'fa-solid fa-chevron-right -rotate-90 transition-all duration-300 ' +
                    (selectedQuestions.includes(originalIndex) ? ' rotate-90 ' : ' rotate-0 ')
                    }
                ></i>
                <span className='text-white'>{question}</span>
                </div>
                <div
                className='overflow-hidden transition-all duration-500 ease-in-out'
                style={{
                    maxHeight: selectedQuestions.includes(originalIndex) ? '100px' : '0px',
                    opacity: selectedQuestions.includes(originalIndex) ? 1 : 0,
                }}
                >
                <div className='px-4 mt-4 text-red-500'>{answer}</div>
                </div>
            </div>
            ))}
            
            {/* Right Side */}
            {faqContentEven.map(([question, answer, originalIndex]) => (
                <div
                    key={originalIndex}
                    className='border-2 border-white rounded-xl shadow-lg p-4 cursor-pointer overflow-hidden inline'
                >
                    <div
                    className='flex items-center gap-4'
                    onClick={() => {
                        selectQuestions(originalIndex);
                    }}
                    >
                    <i
                        className={
                        'fa-solid fa-chevron-right -rotate-90 transition-all duration-300 ' +
                        (selectedQuestions.includes(originalIndex) ? ' rotate-90 ' : ' rotate-0 ')
                        }
                    ></i>
                    <span className='text-white'>{question}</span>
                    </div>
                    <div
                    className='overflow-hidden transition-all duration-500 ease-in-out'
                    style={{
                        maxHeight: selectedQuestions.includes(originalIndex) ? '100px' : '0px',
                        opacity: selectedQuestions.includes(originalIndex) ? 1 : 0,
                    }}
                    >
                    <div className='px-4 mt-4 text-red-500'>{answer}</div>
                    </div>
                </div>
                ))}
        </div>
    </div>
  )
}
