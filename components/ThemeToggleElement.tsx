import React, { useState } from 'react'

export default function ThemeToggleElement() {
    const [isDay,setIsDay] = useState(true)

    function handleThemeToggle() {
        setIsDay((prev)=>(!prev))
    }

  return (
        <div className={'relative hidden sm:flex items-center border-2 border-[var(--error-color)]  gap-8 justify-between py-2 px-4 rounded-full cursor-pointer transition-all duration-300 overflow-hidden ' + (isDay? "bg-blue-100" : "bg-slate-800")}
            onClick={()=>{
                handleThemeToggle()
            }}
        >
            <i className={"fa-solid fa-sun text-2xl text-[var(--shiny-yellow)] transition-all duration-300 " + (!isDay? "-translate-x-[150%] translate-y-[150%] rotate-90 hidden" : "-translate-x-2 translate-y-0 rotate-0" )}></i>
            <div className={'absolute h-8 w-8 z-10 rounded-full transition-all duration-500 z-10 ' + (isDay? "translate-x-[160%] bg-[var(--primary-color)] " : "-translate-x-[25%] bg-gray-500" )}></div>
            <i className={"fa-solid fa-moon text-2xl text-[var(--deep-lightpurple)] transition-all duration-300 " + (isDay? "translate-x-[150%] translate-y-[150%] rotate-90 hidden" : "translate-x-2 translate-y-0 rotate-0" )}></i>
        </div>
  )
}
