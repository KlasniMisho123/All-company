'use client'
import React, { useEffect, useState } from 'react'

export default function TriangleAnimation() {
    const [topRandomNumbers, setTopRandomNumbers ] = useState<number[]>([])
    const [botRandomNumbers, setBotRandomNumbers ] = useState<number[]>([])

    // let topRandomNumbers:number[]
    // let botRandomNumbers:number[]

    const topBars = []
    const botBars = []

    for(let i=0; i<=20; i++) {
        topBars.push(
            i
        )
        botBars.push(
            i
        )
    }

    function generateRandNumber() {
        const randomNum = [
            Math.floor(Math.random() * 20 ),
            Math.floor(Math.random() * 20 ),
            Math.floor(Math.random() * 20 ),
            Math.floor(Math.random() * 20 ),
            Math.floor(Math.random() * 20 ),
            Math.floor(Math.random() * 20 ),
        ]
        console.log("randomNum: ", randomNum)
        return(randomNum)
    }


    useEffect(() => {
        // topRandomNumbers = generateRandNumber()
        // botRandomNumbers = generateRandNumber()
        // console.log("topRandomNumbers: ",topRandomNumbers)
        // console.log("botRandomNumbers: ",botRandomNumbers)

        setTopRandomNumbers(generateRandNumber)
        setBotRandomNumbers(generateRandNumber)
        const interval = setInterval(()=>{
            setTopRandomNumbers(generateRandNumber)
            setBotRandomNumbers(generateRandNumber)
        }, 1500)

        return() => clearInterval(interval)
    },[])

    // Consider Different Animation => not in sync // not same dots?

  return (
    <div className='flex flex-col items-center px-4 gap-2 py-4 bg-gradient-to-b from-purple-400 to-transparent'>
        <div className='flex-1 flex flex-col ml-6'>
             <div className='flex justify-center gap-0.5'>
                {topBars.slice(0, 6).map((index)=>{
                    return(
                        <div key={index} className={'p-1.5 bg-black h-0.5 rounded-full ' + (topRandomNumbers.includes(index)? " triangle-circle " : " ")}></div>
                    )
                })}
            </div>
            <div className='flex justify-center gap-0.5'>
                {topBars.slice(6, 11).map((index)=>{
                    return(
                        <div key={index} className={'p-1.5 bg-black h-0.5 rounded-full ' + (topRandomNumbers.includes(index)? " triangle-circle " : " ")}></div>
                    )
                })}
            </div>
            <div className='flex justify-center gap-0.5'>
                {topBars.slice(11, 15).map((index)=>{
                    return(
                        <div key={index} className={'p-1.5 bg-black h-0.5 rounded-full ' + (topRandomNumbers.includes(index)? " triangle-circle " : " ")}></div>
                    )
                })}
            </div>
            <div className='flex justify-center gap-0.5'>
                {topBars.slice(15, 18).map((index)=>{
                    return(
                        <div key={index} className={'p-1.5 bg-black h-0.5 rounded-full ' + (topRandomNumbers.includes(index)? " triangle-circle " : " ")}></div>
                    )
                })}
            </div>
            <div className='flex justify-center gap-0.5'>
                {topBars.slice(18, 20).map((index)=>{
                    return(
                        <div key={index} className={'p-1.5 bg-black h-0.5 rounded-full ' + (topRandomNumbers.includes(index)? " triangle-circle " : " ")}></div>
                    )
                })}
            </div>
            <div className='flex justify-center gap-0.5'>
                {topBars.slice(20, 21).map((index)=>{
                    return(
                        <div key={index} className={'p-1.5 bg-black h-0.5 rounded-full ' + (topRandomNumbers.includes(index)? " triangle-circle " : " ")}></div>
                    )
                })}
            </div>
        </div>
          <div className='flex-1 flex flex-col-reverse mr-6'>
            <div className='flex justify-center gap-0.5'>
                {botBars.slice(0, 6).map((index)=>{
                    return(
                        <div key={index} className={'p-1.5 bg-purple-500  h-0.5 rounded-full ' + (botRandomNumbers.includes(index)? " triangle-circle " : " ")}></div>
                    )
                })}
            </div>
            <div className='flex justify-center gap-0.5'>
                {botBars.slice(6, 11).map((index)=>{
                    return(
                        <div key={index} className={'p-1.5 bg-purple-500  h-0.5 rounded-full ' + (botRandomNumbers.includes(index)? " triangle-circle " : " ")}></div>
                    )
                })}
            </div>
            <div className='flex justify-center gap-0.5'>
                {botBars.slice(11, 15).map((index)=>{
                    return(
                        <div key={index} className={'p-1.5 bg-purple-500  h-0.5 rounded-full ' + (botRandomNumbers.includes(index)? " triangle-circle " : " ")}></div>
                    )
                })}
            </div>
            <div className='flex justify-center gap-0.5'>
                {botBars.slice(15, 18).map((index)=>{
                    return(
                        <div key={index} className={'p-1.5 bg-purple-500  h-0.5 rounded-full ' + (botRandomNumbers.includes(index)? " triangle-circle " : " ")}></div>
                    )
                })}
            </div>
            <div className='flex justify-center gap-0.5'>
                {botBars.slice(18, 20).map((index)=>{
                    return(
                        <div key={index} className={'p-1.5 bg-purple-500  h-0.5 rounded-full ' + (botRandomNumbers.includes(index)? " triangle-circle " : " ")}></div>
                    )
                })}
            </div>
            <div className='flex justify-center gap-0.5'>
                {botBars.slice(20, 21).map((index)=>{
                    return(
                        <div key={index} className={'p-1.5 bg-purple-500  h-0.5 rounded-full ' + (botRandomNumbers.includes(index)? " triangle-circle " : " ")}></div>
                    )
                })}
            </div>
        </div> 
    </div>
  )
}
