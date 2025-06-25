'use client'
import React, { useEffect, useState } from 'react'
import ServicesCard from './ServicesCard';
import { Urbanist } from 'next/font/google';
import { serviceProps } from '@/types/types';


const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });


const serviceCards:serviceProps[] = [
  {
    title:"Brand Identity",
    icon:"fa-solid fa-compass-drafting" ,
    color:"red",
    paragraph:"Complete visual systems from logos to style guides",
    linkSrc:"services/branding",
  },
  {
    title:"Print Design",
    icon:"fa-solid fa-pen-fancy",
    color:"blue",
    paragraph:"Stunning business cards, letterheads & packaging",
    linkSrc:"services/print",
  },
  {
    title:"Advertising",
    icon:"fa-solid fa-bullhorn" ,
    color:"sky",
    paragraph:"Eye-catching campaigns for print and digital",
    linkSrc:"services/branding",
  },
  {
    title:"Event Branding",
    icon:"fa-solid fa-champagne-glasses" ,
    color:"pink",
    paragraph:"Memorable visuals for exhibitions and launches",
    linkSrc:"/services/events",
  },
    {
    title: "Web Design",
    icon: "fa-solid fa-display",
    color: "indigo",
    paragraph: "Modern, responsive websites tailored to your brand",
    linkSrc: "/services/web-design",
  },
  {
    title: "UX/UI Design",
    icon: "fa-solid fa-cubes",
    color: "violet",
    paragraph: "Intuitive interfaces and seamless user experiences",
    linkSrc: "/services/ux-ui",
  },
  {
    title: "Packaging Design",
    icon: "fa-solid fa-box-open",
    color: "amber",
    paragraph: "Visually appealing packaging that sells your product on sight",
    linkSrc: "/services/packaging",
  },
  {
    title: "Merch Design",
    icon: "fa-solid fa-shirt",
    color: "green",
    paragraph: "Branded apparel, accessories, and swag your audience will love",
    linkSrc: "/services/merch",
  }
]

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
        <h2 className={'text-center text-4xl font-bold ' + urbanist.className}> Our <span className='text-3xl bg-gradient-to-r from-[var(--error-color)] to-[#1F2937] tracking-widest font-semibold px-1 '> Services </span> </h2> 
        <p className={`text-center bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent font-medium text-lg md:text-xl max-w-2xl mx-auto ${urbanist.className}`}>
           {pageIndex} We deliver innovative, client-focused services designed to solve real challenges and drive sustainable growth. </p> 
        <div className='flex px-4 justify-between text-2xl w-full '>
          {/* Conditions: move left/right, not allowed-style */}
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
