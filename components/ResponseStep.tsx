import React from 'react'
import { colorClassMap } from '@/utils'
import { StepProps } from '@/types/types'

export default function responseStep(props:StepProps) {
    const {title, icon, p, color} = props

    const selectedColor = colorClassMap[color]

  return (
    <div className='grid md:grid-cols-1 lg:grid-cols-1 w-full my-4 gap-4 '>
        <div className='flex w-full gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border-l-4 border-blue-600'>
            <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${selectedColor.bg} flex items-center justify-center`}>
                <span className={`${selectedColor.text} text-xl`}><i className={`${icon} text-3xl`}></i></span>
            </div>
            <div className='flex-1'>
                <h3 className='font-medium text-gray-900 flex items-center gap-2'>
                    {title}
                </h3>
                <p className='text-gray-600 mt-1'>
                    {p}
                </p>
            </div>
        </div>
    </div>
  )
}
