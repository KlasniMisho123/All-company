import React from 'react'
import { colorClassMap } from '@/utils'
import { StepProps } from '@/types/types'

export default function responseStep(props:StepProps) {
    const {title, index, icon, p, color} = props

    const selectedColor = colorClassMap[color]

  return (
        <div className={`flex w-full gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-200 transition-all duration-300 border-l-4 ${selectedColor.borderBase} hover:-translate-y-1`}>
            <div className={`flex-shrink-0 p-4 rounded-lg ${selectedColor.bgLight} flex items-center justify-center`}>
                <span className={`${selectedColor.text} text-xl`}><i className={`${icon} text-3xl`}></i></span>
            </div>
            <div className='flex-1'>
                <h3 className='font-medium text-gray-900 flex items-center gap-2'>
                    <span className={`${selectedColor.text}`}> {index} </span> {title}
                </h3>
                <p className='text-gray-600 mt-1'>
                    {p}
                </p>
            </div>
        </div>
  )
}
