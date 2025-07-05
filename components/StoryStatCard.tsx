import React from 'react'

type StoryStatCard = {
    stat: number,
    statTitle: string
}

export default function StoryStatCard(props:StoryStatCard) {
    const { stat, statTitle } = props
  return (
    <div className='shadow bg-slate-700 rounded-lg py-4 px-6'>
        <h2 className='text-2xl font-bold'>5+ </h2>
        <h4>Years of service </h4>
    </div>
  )
}
