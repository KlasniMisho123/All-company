'use client'
import React, { useEffect, useState } from 'react'
interface ThemeToggleProps {
  full?: boolean; 
}

export default function ThemeToggleElement({ full = true }:ThemeToggleProps) {

    const [isDay, setIsDay] = useState(true);

     function handleThemeToggle() {
        const isDark = document.documentElement.classList.contains("dark");
        const newTheme = isDark ? "light" : "dark";
        
      setIsDay(prev => {
        const newValue = !prev;
        if (typeof window !== 'undefined') {
          localStorage.setItem("theme", String(newValue));
        }
        return newValue;
      });
    }  

    useEffect(() => {
    if (typeof window !== 'undefined') { 
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme !== null) {
        setIsDay(savedTheme === "true");
      } 
    }
  }, []);

  return (
        <div className={`relative items-center border-2 border-[var(--error-color)]  gap-8 justify-between py-2 px-4 rounded-full cursor-pointer 
            transition-all duration-300 overflow-hidden ` + (full? " hidden sm:flex " : " flex sm:hidden self-end " ) + (isDay ? ' bg-blue-100 border-blue-300 ' : ' bg-purple-100 border-purple-300 ')}
            onClick={()=>{
                handleThemeToggle()
            }}>
            <i className={`fa-solid fa-sun text-2xl text-yellow-400 transition-all duration-300 shadow-[0_0_10px_2px_rgba(253,224,71,0.6)] rounded-full bg-blue-100 ` + 
                (!isDay? "-translate-x-[150%] translate-y-[150%] rotate-90 hidden" : "-translate-x-2 translate-y-0 rotate-0" )}></i>
            <div className={'absolute h-8 w-8 z-10 rounded-full transition-all duration-500 z-10 ring-2  ' +
                (isDay? "translate-x-[160%] bg-[var(--primary-color)] ring-yellow-400  " :
                 "-translate-x-[25%] bg-gray-100 ring-purple-300  ")}>
            </div>
            <i className={"fa-solid fa-moon text-2xl text-gray-600/80 transition-all duration-300 shadow-[0_0_10px_2px_rgba(156,163,175,0.4)] rounded-full bg-purple-200 " + 
                (isDay? "translate-x-[150%] translate-y-[150%] rotate-90 hidden" : "translate-x-2 translate-y-0 rotate-0" )}></i>
        </div>
  )
}
