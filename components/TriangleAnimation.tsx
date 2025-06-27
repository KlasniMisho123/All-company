'use client'
import React, { useEffect, useState } from 'react'

export default function TriangleAnimation() {
    const [randomNumbers, setRandomNumbers ] = useState<number[]>([])

    const topBars = []

    for(let i=0; i<=5; i++) {
        topBars.push(
            <div key={i} className='p-1.5 bg-black h-0.5 rounded-full '></div>
        )
    }

    function generateRandNumber() {
        const randomNum = [
            Math.floor(Math.random() * 20 ),
            Math.floor(Math.random() * 20 ),
            Math.floor(Math.random() * 20 )
        ]
        console.log("randomNum: ", randomNum)
        setRandomNumbers(randomNum)
    }

    useEffect(() => {
        generateRandNumber()
    },[])
// do elements in html part. just numbers in arrays?
  return (
    <div className='flex flex-col items-center px-4 gap-2 py-4'>
        <div className='flex-1 flex flex-col ml-6'>
             <div className='flex justify-center gap-0.5'>
                 {topBars}
                {/* {topBars.map((element)=>{
                    eturn(element)
                })} */}
                {/* <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div> */}
            </div>
            {/*<div className='flex justify-center gap-0.5'>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
            </div>
            <div className='flex justify-center gap-0.5'>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
            </div>
            <div className='flex justify-center gap-0.5'>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
            </div>
            <div className='flex justify-center gap-0.5'>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
            </div>
            <div className='flex justify-center gap-0.5'>
                <div className='p-1.5 bg-black h-0.5 rounded-full '></div>
            </div> */}
        </div>

         <div className='flex-1 flex flex-col-reverse mr-6'>
            <div className='flex justify-center gap-0.5'>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
            </div>
            <div className='flex justify-center gap-0.5'>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
            </div>
            <div className='flex justify-center gap-0.5'>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
            </div>
            <div className='flex justify-center gap-0.5'>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
            </div>
            <div className='flex justify-center gap-0.5'>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
            </div>
            <div className='flex justify-center gap-0.5'>
                <div className='p-1.5 bg-[var(--error-color)]  h-0.5 rounded-full '></div>
            </div>
        </div>
    </div>
  )
}
