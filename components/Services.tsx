'use client'
import React, { useEffect, useState } from 'react'
import ServicesCard from './ServicesCard';
import { Urbanist } from 'next/font/google';
import { serviceCards } from '@/utils';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Services() {
  const [pageIndex, setPageIndex ] = useState(0)
  const [currentCards, setCurrentCards ] = useState([0,4])
  
    function handleServicesScroll(side:string) {
      if(side == "right") {
        if(currentCards[1] >= serviceCards.length )
           {
            return
          } else{
            setPageIndex(prev => prev + 1);
          }
        } else {
          if(pageIndex == 0) {
              return
            } else {
              setPageIndex(prev => prev - 1);
            }
          }
        }
      useEffect(() => {
        setCurrentCards([pageIndex*4, pageIndex*4 + 4])
      },[pageIndex])

  return (
    <section className='mx-30 my-10 rounded-xl  p-4 py-10 '> 
        <h2 className={'text-center text-4xl font-bold ' + urbanist.className}> Our <span className='text-3xl bg-gradient-to-r from-[var(--error-color)] to-transparent tracking-widest font-semibold px-2 '> Services </span> </h2> 
        <p className={`text-center bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent font-medium text-lg md:text-xl max-w-2xl mx-auto ${urbanist.className}`}>
          We deliver innovative, client-focused services designed to solve real challenges and drive sustainable growth. </p> 
        <div className='flex px-4 justify-between text-2xl w-full '>
          <button className={"fa-solid fa-chevron-left tranition-all duration-300 cursor-pointer " + (currentCards[0] <= 0 ? "text-gray-600" : "hover:scale-110 hover:text-red-500 ")  }
            onClick={()=>{
                handleServicesScroll("left")
            }}
          >
          </button>

          <button className={"fa-solid fa-chevron-right tranition-all duration-300 cursor-pointer " + (currentCards[1] >= serviceCards.length ? "text-gray-600" : "hover:scale-110 hover:text-red-500 ") }
          onClick={()=>{
                handleServicesScroll("right")
            }}
          ></button>
        </div>        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {pageIndex == 0 &&
          (
          <>
          {serviceCards.slice(currentCards[0], currentCards[1]).map((card, index)=>{
            return(
               <ServicesCard
                  key={index}
                  color={card.color}
                  icon={card.icon}
                  title={card.title}
                  paragraph={card.paragraph}
                  linkSrc={card.linkSrc}
                />
              )
          })}
          </>
          )}
        {pageIndex == 1 &&
          (
            <>
            {serviceCards.slice(currentCards[0], currentCards[1]).map((card, index)=>{
              return (
                <ServicesCard
                  key={index}
                  color={card.color}
                  icon={card.icon}
                  title={card.title}
                  paragraph={card.paragraph}
                  linkSrc={card.linkSrc}
                />
              )
            })}
            </>
          )}
        </div>
      </section>
  )
}
