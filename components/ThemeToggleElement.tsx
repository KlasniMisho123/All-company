import React, { useState } from 'react'

export default function ThemeToggleElement() {
    const [isDay,setIsDay] = useState(true)

    function handleThemeToggle() {
        setIsDay((prev)=>(!prev))
    }

  return (
        <div className='relative hidden sm:flex items-center border-2 border-[var(--error-color)] bg-blue-100 gap-8 justify-between py-2 px-4 rounded-full cursor-pointer transition-all duration-300 overflow-hidden '
            onClick={()=>{
                handleThemeToggle()
            }}
        >
            <i className={"fa-solid fa-sun text-2xl text-[var(--shiny-yellow)] transition-all duration-300 " + (!isDay? "-translate-x-[150%] translate-y-[150%] rotate-90 hidden" : "translate-x-0 translate-y-0 rotate-0" )}></i>
            <div className={'absolute h-8 w-8 z-10 rounded-full bg-[var(--primary-color)] transition-all duration-500 z-10 ' + (isDay? "translate-x-[160%]" : "-translate-x-[25%]" )}></div>
            <i className={"fa-solid fa-moon text-2xl text-[var(--deep-lightpurple)] transition-all duration-300 " + (isDay? "translate-x-[150%] translate-y-[150%] rotate-90 hidden" : "translate-x-0 translate-y-0 rotate-0" )}></i>
        </div>
  )
}
