import React from 'react'

type StoryStatCard = {
    stat: string,
    statTitle: string
}

export default function StoryStatCard(props:StoryStatCard) {
    const { stat, statTitle } = props
  return (
    <div className='shadow bg-slate-700 rounded-lg py-4 px-6 transition-all duration-200 hover:brightness-110 '>
        <h2 className='text-2xl font-bold'> {stat} </h2>
        <h4> {statTitle} </h4>
    </div>
  )
}
