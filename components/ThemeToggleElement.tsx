import React, { useState } from 'react'

export default function ThemeToggleElement() {
    const [isDay,setIsDay] = useState(true)

    function handleThemeToggle() {
        setIsDay((prev)=>(!prev))
    }

  return (
        <div className=' hidden sm:flex border-2 border-[var(--error-color)] bg-blue-100 gap-6 justify-between py-1 px-2 rounded-full cursor-pointer transition-all duration-300 overflow-hidden '
            onClick={()=>{
                handleThemeToggle()
            }}
        >
          {/* {isDay && (
              <i className="fa-solid fa-sun text-3xl text-[var(--shiny-yellow)]"></i>
          )} */}

          <div className={'h-8 w-8 z-10 rounded-full bg-[var(--primary-color)] transition-all duration-500  ' + (isDay? "translate-x-[150%]" : "translate-x-0" )}></div>

          {/* {!isDay && ( */}
              <i className={"fa-solid fa-moon text-3xl text-[var(--deep-lightpurple)] transition-all duration-300 " + (isDay? "translate-x-[100%] translate-y-[100%]" : "translate-x-0 translate-y-0" )}></i>
          {/* )} */}
        </div>
  )
}
